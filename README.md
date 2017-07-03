# Webpack build time increase POC

[webpacker](https://github.com/rails/webpacker) generates an webpack config
which contains large number of file extensions in `resolve.exntentions`.

This causes significant build time increase and makes webpacker unuseful.

## with 2 extentions: 4 seconds

```
> webpack-example@1.0.0 build:dev /Users/tai2/Cloud/Code/peers/webpack-example
> NODE_ENV=development webpack --config webpack/dev.js

Hash: 653e985f14a586865328
Version: webpack 3.0.0
Time: 4216ms
    Asset     Size  Chunks                    Chunk Names
bundle.js  2.97 MB       0  [emitted]  [big]  main
[./node_modules/webpack/buildin/global.js] (webpack)/buildin/global.js 509 bytes {0} [built]
[./src/index.jsx] ./src/index.jsx 171 bytes {0} [built]
   [0] multi babel-polyfill ./src/index.jsx 40 bytes {0} [built]
    + 479 hidden modules
```

## with 13 extensions: over 2 minutes

```
> webpack-example@1.0.0 build:dev /Users/tai2/Cloud/Code/peers/webpack-example
> NODE_ENV=development webpack --config webpack/dev.js

Hash: 653e985f14a586865328
Version: webpack 3.0.0
Time: 141930ms
    Asset     Size  Chunks                    Chunk Names
bundle.js  2.97 MB       0  [emitted]  [big]  main
[./node_modules/webpack/buildin/global.js] (webpack)/buildin/global.js 509 bytes {0} [built]
[./src/index.jsx] ./src/index.jsx 171 bytes {0} [built]
   [0] multi babel-polyfill ./src/index.jsx 40 bytes {0} [built]
    + 479 hidden modules
```

# How to run

```
npm i
npm run build:dev
```

