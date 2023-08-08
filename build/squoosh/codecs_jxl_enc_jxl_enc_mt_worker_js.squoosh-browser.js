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

/***/ "./codecs/jxl/enc/jxl_enc_mt.worker.js":
/*!*********************************************!*\
  !*** ./codecs/jxl/enc/jxl_enc_mt.worker.js ***!
  \*********************************************/
/***/ (function(__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {

"use strict";
eval("var Module={};var initializedJS=false;function threadPrintErr(){var text=Array.prototype.slice.call(arguments).join(\" \");console.error(text)}function threadAlert(){var text=Array.prototype.slice.call(arguments).join(\" \");postMessage({cmd:\"alert\",text:text,threadId:Module[\"_pthread_self\"]()})}var err=threadPrintErr;self.alert=threadAlert;Module[\"instantiateWasm\"]=function(info,receiveInstance){var instance=new WebAssembly.Instance(Module[\"wasmModule\"],info);receiveInstance(instance);Module[\"wasmModule\"]=null;return instance.exports};function moduleLoaded(){}self.onmessage=function(e){try{if(e.data.cmd===\"load\"){Module[\"wasmModule\"]=e.data.wasmModule;Module[\"wasmMemory\"]=e.data.wasmMemory;Module[\"buffer\"]=Module[\"wasmMemory\"].buffer;Module[\"ENVIRONMENT_IS_PTHREAD\"]=true;(e.data.urlOrBlob?__webpack_require__(\"./codecs/jxl/enc lazy recursive\")(e.data.urlOrBlob):__webpack_require__.e(/*! import() */ \"codecs_jxl_enc_jxl_enc_mt_js\").then(__webpack_require__.bind(__webpack_require__, /*! ./jxl_enc_mt.js */ \"./codecs/jxl/enc/jxl_enc_mt.js\"))).then(function(exports){return exports.default(Module)}).then(function(instance){Module=instance;moduleLoaded()})}else if(e.data.cmd===\"objectTransfer\"){Module[\"PThread\"].receiveObjectTransfer(e.data)}else if(e.data.cmd===\"run\"){Module[\"__performance_now_clock_drift\"]=performance.now()-e.data.time;Module[\"__emscripten_thread_init\"](e.data.threadInfoStruct,0,0);var max=e.data.stackBase;var top=e.data.stackBase+e.data.stackSize;Module[\"establishStackSpace\"](top,max);Module[\"PThread\"].receiveObjectTransfer(e.data);Module[\"PThread\"].threadInit();if(!initializedJS){Module[\"___embind_register_native_and_builtin_types\"]();initializedJS=true}try{var result=Module[\"invokeEntryPoint\"](e.data.start_routine,e.data.arg);if(Module[\"keepRuntimeAlive\"]()){Module[\"PThread\"].setExitStatus(result)}else{Module[\"PThread\"].threadExit(result)}}catch(ex){if(ex===\"Canceled!\"){Module[\"PThread\"].threadCancel()}else if(ex!=\"unwind\"){if(ex instanceof Module[\"ExitStatus\"]){if(Module[\"keepRuntimeAlive\"]()){}else{Module[\"PThread\"].threadExit(ex.status)}}else{Module[\"PThread\"].threadExit(-2);throw ex}}}}else if(e.data.cmd===\"cancel\"){if(Module[\"_pthread_self\"]()){Module[\"PThread\"].threadCancel()}}else if(e.data.target===\"setimmediate\"){}else if(e.data.cmd===\"processThreadQueue\"){if(Module[\"_pthread_self\"]()){Module[\"_emscripten_current_thread_process_queued_calls\"]()}}else{err(\"worker.js received unknown command \"+e.data.cmd);err(e.data)}}catch(ex){err(\"worker.js onmessage() captured an uncaught exception: \"+ex);if(ex&&ex.stack)err(ex.stack);throw ex}};\n\n\n//# sourceURL=webpack://squoosh-browser/./codecs/jxl/enc/jxl_enc_mt.worker.js?");

/***/ }),

/***/ "./codecs/jxl/enc lazy recursive":
/*!***********************************************!*\
  !*** ./codecs/jxl/enc/ lazy namespace object ***!
  \***********************************************/
/***/ (function(module) {

eval("function webpackEmptyAsyncContext(req) {\n\t// Here Promise.resolve().then() is used instead of new Promise() to prevent\n\t// uncaught exception popping up in devtools\n\treturn Promise.resolve().then(function() {\n\t\tvar e = new Error(\"Cannot find module '\" + req + \"'\");\n\t\te.code = 'MODULE_NOT_FOUND';\n\t\tthrow e;\n\t});\n}\nwebpackEmptyAsyncContext.keys = function() { return []; };\nwebpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;\nwebpackEmptyAsyncContext.id = \"./codecs/jxl/enc lazy recursive\";\nmodule.exports = webpackEmptyAsyncContext;\n\n//# sourceURL=webpack://squoosh-browser/./codecs/jxl/enc/_lazy_namespace_object?");

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
/******/ 			"codecs_jxl_enc_jxl_enc_mt_worker_js": 1
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
/******/ 	var __webpack_exports__ = __webpack_require__("./codecs/jxl/enc/jxl_enc_mt.worker.js");
/******/ 	
/******/ })()
;