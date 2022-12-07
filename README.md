# Testcafe Chrome Screenshot Issues

Testcafe fails to create screenshots in headless Chrome in Node >= 17 (at least on a Mac)

To Reproduce

```
npm install
npm run build
npm run e2e
```

If running Node <= 16 or running in another browser, things will work fine. 

On Node 17+, this will give a different error depending on the version of testcafe.

For testcafe versions >= 2.0.1, this will error with

```
 tests
 ✖ It should take a screenshot

   1) Uncaught object "[object Object]" was thrown. Throw Error instead.

      Browser: Chrome 108.0.5359.94 / macOS 10.15.7


 1/1 failed (9s)
```

For versions < 2.0.1, it will give the following warning, and make no screenshot

```
 tests
npm  ✓ It should take a screenshot


 1 passed (1s)

 Warnings (1):
 --
  Was unable to take a screenshot due to an error.

  Error: Unexpected end of input
      at module.exports.ChunkStream._end (/Users/bwain/dev/test-app/node_modules/pngjs/lib/chunkstream.js:100:7)
      at module.exports.ChunkStream._process (/Users/bwain/dev/test-app/node_modules/pngjs/lib/chunkstream.js:203:12)
      at module.exports.ChunkStream.end (/Users/bwain/dev/test-app/node_modules/pngjs/lib/chunkstream.js:90:10)
      at exports.PNG.PNG.end (/Users/bwain/dev/test-app/node_modules/pngjs/lib/png.js:98:16)
      at exports.PNG.PNG.parse (/Users/bwain/dev/test-app/node_modules/pngjs/lib/png.js:88:8)
      at readPng (/Users/bwain/dev/test-app/node_modules/testcafe/src/utils/promisified-functions.js:25:9)
      at BrowserProviderPluginHost.takeScreenshot (/Users/bwain/dev/test-app/node_modules/testcafe/src/browser/provider/built-in/dedicated/base.js:90:37)
      at BrowserProvider.takeScreenshot (/Users/bwain/dev/test-app/node_modules/testcafe/src/browser/provider/index.ts:409:13)
      at Capturer._takeScreenshot (/Users/bwain/dev/test-app/node_modules/testcafe/src/screenshots/capturer.js:123:9)
      at /Users/bwain/dev/test-app/node_modules/testcafe/src/screenshots/capturer.js:152:13
```

When running Chrome in non-headless mode, screenshots work, but give this warning

```
 Warnings (1):
 --
  Unable to locate the page area in the browser window screenshot at /var/folders/pn/0vfds3113zb0nz6ts8mz24dw0000gp/T/testcafe/screenshots-61026IwF6tOxRh1v1/2022-12-06_22-25-04/test-1/Chrome_108.0.0.0_macOS_10.15.7/1.png, because
  the page area mark with ID 2685887944 is not found in the screenshot.
```