(function(){function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s}return e})()({1:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const getAtrribute_1 = require("./utils/getAtrribute");
const match_all_1 = require("./utils/match-all");
let regex = [
    {
        regex: /<img [^>]+>/g,
        attribute: 'src'
    }, {
        regex: /<link [^>]+>/g,
        attribute: 'href'
    }, {
        regex: /<script(?:\s+[^>]*)?>(.*?)<\/script\s*>/g,
        attribute: 'src'
    }
];
exports.extractor = function (plainHtml) {
    let links = [];
    regex.forEach(extractor => links = links.concat(match_all_1.matchAll(extractor.regex, plainHtml)
        .map(result => getAtrribute_1.getAttribute(result[0], extractor.attribute))));
    return links.filter(val => Boolean(val));
};

},{"./utils/getAtrribute":2,"./utils/match-all":3}],2:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getAttribute = function getAttribute(rawHtml, attribute) {
    let rt = rawHtml.split(attribute + '=');
    if (rt.length > 1) {
        return rt[1].split('"')[1];
    }
};

},{}],3:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.matchAll = function (regex, str) {
    let m;
    const output = [];
    while ((m = regex.exec(str)) !== null) {
        if (m.index === regex.lastIndex) {
            regex.lastIndex++;
        }
        output.push(m);
    }
    return output;
};

},{}],4:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const extractor_1 = require("./extractor/extractor");
const get_1 = require("./request/library/get");
const preload_1 = require("./preload/preload");
(function init(win) {
    if (win) {
        win.preloader = {
            get: get_1.get,
            extractor: extractor_1.extractor,
            preload: preload_1.preload
        };
    }
})(window);

},{"./extractor/extractor":1,"./preload/preload":7,"./request/library/get":8}],5:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.buildStatus = function (urls, completed, failed, reminds, request) {
    const cloneUrls = urls.slice(0);
    const cloneCompleted = completed.slice(0);
    const cloneFailed = failed.slice(0);
    const cloneReminds = reminds.slice(0);
    const isSucceed = request.status < 400;
    let responseText;
    if (request.responseType === 'text') {
        responseText = request.responseText;
    }
    return {
        urls: cloneUrls,
        completed: cloneCompleted,
        failed: cloneFailed,
        reminds: cloneReminds,
        request: request,
        isSucceed: isSucceed,
        responseText: responseText
    };
};

},{}],6:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.switchCompletedStatus = function (isSucceed, url, completed, failed) {
    if (isSucceed) {
        arrAddUnique(url, completed);
        arrRemove(url, failed);
    }
    else {
        arrAddUnique(url, failed);
    }
};
const arrAddUnique = function (el, arr) {
    let position = arr.indexOf(el);
    if (position === -1) {
        arr.push(el);
    }
};
const arrRemove = function (el, arr) {
    let position = arr.indexOf(el);
    if (position !== -1) {
        arr.splice(position, 1);
    }
};

},{}],7:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const get_1 = require("../request/library/get");
const build_status_1 = require("./lib/build-status");
const switch_completed_arr_1 = require("./lib/switch-completed-arr");
exports.preload = function (urls, onLoad, options = {}) {
    const completed = [];
    const failed = [];
    let innerUrls = urls.slice(0);
    let reminds = innerUrls.slice(0);
    let currentRequestAmount = 0;
    let maxRequestAmount = options.maxRequest || 3;
    return new Promise(resolve => {
        const onLoadCallback = function (req) {
            switch_completed_arr_1.switchCompletedStatus(req.status < 400, req.responseURL, completed, failed);
            const status = build_status_1.buildStatus(innerUrls, completed, failed, reminds, req);
            if (typeof onLoad === 'function') {
                onLoad(status, (newUrls) => {
                    if (newUrls) {
                        innerUrls = innerUrls.concat(newUrls);
                        reminds = reminds.concat(newUrls);
                    }
                });
            }
            currentRequestAmount--;
            getNextURL();
            if (completed.length + failed.length === innerUrls.length) {
                resolve({ completed, failed, urls: innerUrls });
            }
        };
        const getNextURL = function () {
            if (maxRequestAmount > currentRequestAmount && reminds.length) {
                let nextUrl = reminds.pop();
                if (completed.indexOf(nextUrl) !== -1) {
                    completed.push(nextUrl);
                    getNextURL();
                }
                if (completed.indexOf(nextUrl) === -1 && nextUrl) {
                    currentRequestAmount++;
                    get_1.get(nextUrl).then(onLoadCallback).catch(err => console.log(err));
                    getNextURL();
                }
            }
        };
        getNextURL();
    });
};

},{"../request/library/get":8,"./lib/build-status":5,"./lib/switch-completed-arr":6}],8:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const attach_event_1 = require("../utils/attach-event");
const object_1 = require("../../utils/object");
const set_headers_1 = require("../utils/set-headers");
const get_url_type_1 = require("../../utils/get-url-type");
const defaultOptions = {
    timeout: 6000,
    widthCredential: false
};
exports.get = function (url, options = {}) {
    let request = new XMLHttpRequest();
    request.open('get', url);
    object_1.migrate(defaultOptions, options, false);
    request.timeout = options.timeout;
    request.withCredentials = options.widthCredential;
    console.log(get_url_type_1.getUrlType(url));
    request.responseType = get_url_type_1.getUrlType(url);
    set_headers_1.setHeaders(request, options.headers);
    attach_event_1.attachEvent(request, options.event);
    return new Promise((resolve, reject) => {
        request.onreadystatechange = function () {
            if (request.readyState === XMLHttpRequest.DONE) {
                resolve(request);
            }
        };
        request.send();
    });
};

},{"../../utils/get-url-type":11,"../../utils/object":12,"../utils/attach-event":9,"../utils/set-headers":10}],9:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.attachEvent = function (req, eventCallbacks = {}) {
    if (eventCallbacks) {
        Object.keys(eventCallbacks).forEach(eb => req.addEventListener(eb, eventCallbacks[eb]));
    }
};

},{}],10:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.setHeaders = function (request, headers = {}) {
    if (headers) {
        Object.keys(headers).forEach(header => request.setRequestHeader(header, headers[header]));
    }
};

},{}],11:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const typeList = [
    {
        name: 'text',
        suffix: ['html', 'css', 'js']
    }
];
exports.getUrlType = function (url) {
    const segments = url.split('.');
    if (segments.length) {
        let suffix = segments.slice(-1)[0].toLowerCase();
        let maybe = typeList.find(type => type.suffix.indexOf(suffix) !== -1);
        if (maybe && maybe.name) {
            return maybe.name;
        }
    }
    return 'blob';
};

},{}],12:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.migrate = function (from, to = {}, overwrite = true) {
    for (const key of Object.keys(from)) {
        const fromType = typeof from[key];
        if (fromType === 'object' && from[key]) {
            if (!to.hasOwnProperty(key)) {
                to[key] = {};
            }
            if (overwrite && (typeof to[key] !== 'object' || !to[key])) {
                to[key] = {};
            }
            else {
                exports.migrate(from[key], to[key], overwrite);
            }
        }
        if (fromType !== 'object' || !from[key]) {
            if (!to.hasOwnProperty(key) || overwrite) {
                to[key] = from[key];
            }
        }
    }
};
exports.createIfProps = function (obj, props, initVal) {
    props.forEach((prop, index) => obj[prop] = !obj.hasOwnProperty(prop) ? obj[prop] : initVal[index]);
};

},{}]},{},[4]);
