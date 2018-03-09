export const deepMigrate = function(from: {[key: string]: any}, to: {[key: string]: any} = {}, overwrite = true) {
  for (const key of Object.keys(from)) {
    const fromType = typeof from[key];
    if (fromType === 'object' && from[key]) {
      if (!to.hasOwnProperty(key)) {
        to[key] = {};
      }
      if (overwrite && (typeof to[key] !== 'object' || !to[key])) {
        // is value
        to[key] = {};
      } else {
        deepMigrate(from[key], to[key], overwrite);
      }
    }
    if (fromType !== 'object' || !from[key]) {
      if (!to.hasOwnProperty(key) ||　overwrite) {
        //  to没有或者复写启用
        to[key] = from[key];
      }
    }
  }
};

export const toArray = function (obj: object) {
  const arr = [];
  Object.keys(obj).forEach(key => arr.push(obj[key]));
  return arr;
};
