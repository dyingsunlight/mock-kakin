## MOCK-KAKIN (honkai kakin-emulator)
This is an Angular pumping card simulator.

## Feature
1. Support for multiple mode, including standard/equipment/precision/extension    
2. Support for extracting custom items and probabilities.
3. Batch Mode and more
4. Extremely high level of simulation and experience.

## DEMO
Github Pages:  
https://dyingsunlight.github.io/mock-kakin/  

BAE(Asia):  
http://mockkakin.duapp.com  

All item can be Find In [/src/app/gacha/resources](https://github.com/dyingsunlight/mock-kakin/tree/master/src/app/gacha/resources)  

## Deployment
Mock-Kakin Can be deployed on static servers.
1. ``git clone`` or download the entire project source code.
2. ``npm install``  Install all dependencies。
3. ``npm run start`` to run development mode or debugging。
4. ``npm run build`` will build in folder ``default``，application entry file is
``app-index.html``。If you need to deploy on a specific path or encounter a resource path error,  you can reference in ``package.json`` building option。
5. ``Optional`` to enable [Preloader](https://github.com/dyingsunlight/preloader) ，copy  all file in``preloader`` and put all of them  with ``app-index.html`` in a same folder.
，using ``index.html`` as application entry to start。  

**If you have questions about deployment or encounter problems, please submit a issue**

## optimization
1. All image resources have been subjected to lossy high pressure processing and no further compression is required.
2. Due to the large number of picture resources used, a large number of requests will be generated when accessing. It is recommended to set the max-age of the Cache-Control of HTTP Header for all images as long as possible (the picture resources will hardly change).
   Can effectively reduce the number of requests.
3. Recommended use [Preloader](https://github.com/dyingsunlight/preloader) to improve experience。

