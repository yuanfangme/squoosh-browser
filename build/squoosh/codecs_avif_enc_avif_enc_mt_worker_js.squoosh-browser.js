/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (function() { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./codecs/avif/enc/avif_enc_mt.worker.js":
/*!***********************************************!*\
  !*** ./codecs/avif/enc/avif_enc_mt.worker.js ***!
  \***********************************************/
/***/ (function(__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {

"use strict";
eval("\nvar Module = {};\nvar initializedJS = false;\n\nfunction threadPrintErr(){\n  var text = Array.prototype.slice.call(arguments).join(\" \");\n  console.error(text)\n}\n\nfunction threadAlert(){\n  var text = Array.prototype.slice.call(arguments).join(\" \");\n  postMessage({cmd: \"alert\", text: text, threadId: Module[\"_pthread_self\"]()})\n}\n\nvar err = threadPrintErr;\nself.alert = threadAlert;\nModule[\"instantiateWasm\"] = function (info, receiveInstance){\n  var instance = new WebAssembly.Instance(Module[\"wasmModule\"], info);\n  receiveInstance(instance);\n  Module[\"wasmModule\"] = null;\n  return instance.exports\n};\n\nfunction moduleLoaded(){\n}\n\nself.onmessage = function (e){\n  try {\n    if (e.data.cmd === \"load\") {\n      Module[\"wasmModule\"] = e.data.wasmModule;\n      Module[\"wasmMemory\"] = e.data.wasmMemory;\n      Module[\"buffer\"] = Module[\"wasmMemory\"].buffer;\n      Module[\"ENVIRONMENT_IS_PTHREAD\"] = true;\n      (e.data.urlOrBlob ? __webpack_require__(\"./codecs/avif/enc lazy recursive\")(e.data.urlOrBlob) : __webpack_require__.e(/*! import() */ \"codecs_avif_enc_avif_enc_mt_js\").then(__webpack_require__.bind(__webpack_require__, /*! ./avif_enc_mt.js */ \"./codecs/avif/enc/avif_enc_mt.js\"))).then(function (exports){\n        return exports.default(Module)\n      }).then(function (instance){\n        Module = instance;\n        moduleLoaded()\n      })\n    } else if (e.data.cmd === \"objectTransfer\") {\n      Module[\"PThread\"].receiveObjectTransfer(e.data)\n    } else if (e.data.cmd === \"run\") {\n      Module[\"__performance_now_clock_drift\"] = performance.now() - e.data.time;\n      Module[\"__emscripten_thread_init\"](e.data.threadInfoStruct, 0, 0);\n      var max = e.data.stackBase;\n      var top = e.data.stackBase + e.data.stackSize;\n      Module[\"establishStackSpace\"](top, max);\n      Module[\"PThread\"].receiveObjectTransfer(e.data);\n      Module[\"PThread\"].threadInit();\n      if (!initializedJS) {\n        Module[\"___embind_register_native_and_builtin_types\"]();\n        initializedJS = true\n      }\n      try {\n        var result = Module[\"invokeEntryPoint\"](e.data.start_routine, e.data.arg);\n        if (Module[\"keepRuntimeAlive\"]()) {\n          Module[\"PThread\"].setExitStatus(result)\n        } else {\n          Module[\"PThread\"].threadExit(result)\n        }\n      } catch (ex) {\n        if (ex === \"Canceled!\") {\n          Module[\"PThread\"].threadCancel()\n        } else if (ex != \"unwind\") {\n          if (ex instanceof Module[\"ExitStatus\"]) {\n            if (Module[\"keepRuntimeAlive\"]()) {\n            } else {\n              Module[\"PThread\"].threadExit(ex.status)\n            }\n          } else {\n            Module[\"PThread\"].threadExit(-2);\n            throw ex\n          }\n        }\n      }\n    } else if (e.data.cmd === \"cancel\") {\n      if (Module[\"_pthread_self\"]()) {\n        Module[\"PThread\"].threadCancel()\n      }\n    } else if (e.data.target === \"setimmediate\") {\n    } else if (e.data.cmd === \"processThreadQueue\") {\n      if (Module[\"_pthread_self\"]()) {\n        Module[\"_emscripten_current_thread_process_queued_calls\"]()\n      }\n    } else {\n      err(\"worker.js received unknown command \" + e.data.cmd);\n      err(e.data)\n    }\n  } catch (ex) {\n    err(\"worker.js onmessage() captured an uncaught exception: \" + ex);\n    if (ex && ex.stack) err(ex.stack);\n    throw ex\n  }\n};\n\n\n//# sourceURL=webpack://squoosh-browser/./codecs/avif/enc/avif_enc_mt.worker.js?");

/***/ }),

/***/ "./codecs/avif/enc lazy recursive":
/*!************************************************!*\
  !*** ./codecs/avif/enc/ lazy namespace object ***!
  \************************************************/
/***/ (function(module) {

eval("function webpackEmptyAsyncContext(req) {\n\t// Here Promise.resolve().then() is used instead of new Promise() to prevent\n\t// uncaught exception popping up in devtools\n\treturn Promise.resolve().then(function() {\n\t\tvar e = new Error(\"Cannot find module '\" + req + \"'\");\n\t\te.code = 'MODULE_NOT_FOUND';\n\t\tthrow e;\n\t});\n}\nwebpackEmptyAsyncContext.keys = function() { return []; };\nwebpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;\nwebpackEmptyAsyncContext.id = \"./codecs/avif/enc lazy recursive\";\nmodule.exports = webpackEmptyAsyncContext;\n\n//# sourceURL=webpack://squoosh-browser/./codecs/avif/enc/_lazy_namespace_object?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/ensure chunk */
/******/ 	!function() {
/******/ 		__webpack_require__.f = {};
/******/ 		// This file contains only the entry chunk.
/******/ 		// The chunk loading function for additional chunks
/******/ 		__webpack_require__.e = function(chunkId) {
/******/ 			return Promise.all(Object.keys(__webpack_require__.f).reduce(function(promises, key) {
/******/ 				__webpack_require__.f[key](chunkId, promises);
/******/ 				return promises;
/******/ 			}, []));
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/get javascript chunk filename */
/******/ 	!function() {
/******/ 		// This function allow to reference async chunks
/******/ 		__webpack_require__.u = function(chunkId) {
/******/ 			// return url for filenames based on template
/******/ 			return "" + chunkId + ".squoosh-browser.js";
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	!function() {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	!function() {
/******/ 		__webpack_require__.o = function(obj, prop) { return Object.prototype.hasOwnProperty.call(obj, prop); }
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	!function() {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = function(exports) {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	!function() {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src;
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) {
/******/ 					var i = scripts.length - 1;
/******/ 					while (i > -1 && !scriptUrl) scriptUrl = scripts[i--].src;
/******/ 				}
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/importScripts chunk loading */
/******/ 	!function() {
/******/ 		__webpack_require__.b = self.location + "";
/******/ 		
/******/ 		// object to store loaded chunks
/******/ 		// "1" means "already loaded"
/******/ 		var installedChunks = {
/******/ 			"codecs_avif_enc_avif_enc_mt_worker_js": 1
/******/ 		};
/******/ 		
/******/ 		// importScripts chunk loading
/******/ 		var installChunk = function(data) {
/******/ 			var chunkIds = data[0];
/******/ 			var moreModules = data[1];
/******/ 			var runtime = data[2];
/******/ 			for(var moduleId in moreModules) {
/******/ 				if(__webpack_require__.o(moreModules, moduleId)) {
/******/ 					__webpack_require__.m[moduleId] = moreModules[moduleId];
/******/ 				}
/******/ 			}
/******/ 			if(runtime) runtime(__webpack_require__);
/******/ 			while(chunkIds.length)
/******/ 				installedChunks[chunkIds.pop()] = 1;
/******/ 			parentChunkLoadingFunction(data);
/******/ 		};
/******/ 		__webpack_require__.f.i = function(chunkId, promises) {
/******/ 			// "1" is the signal for "already loaded"
/******/ 			if(!installedChunks[chunkId]) {
/******/ 				if(true) { // all chunks have JS
/******/ 					importScripts(__webpack_require__.p + __webpack_require__.u(chunkId));
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 		
/******/ 		var chunkLoadingGlobal = self["webpackChunksquoosh_browser"] = self["webpackChunksquoosh_browser"] || [];
/******/ 		var parentChunkLoadingFunction = chunkLoadingGlobal.push.bind(chunkLoadingGlobal);
/******/ 		chunkLoadingGlobal.push = installChunk;
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 	}();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module is referenced by other modules so it can't be inlined
/******/ 	var __webpack_exports__ = __webpack_require__("./codecs/avif/enc/avif_enc_mt.worker.js");
/******/ 	
/******/ })()
;