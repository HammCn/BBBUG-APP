"use weex:vue";
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/*!****************************************************************!*\
  !*** D:/Hamm/ChatAPP/main.js?{"page":"pages%2Findex%2Findex"} ***!
  \****************************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var uni_app_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! uni-app-style */ 1);\n/* harmony import */ var uni_app_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(uni_app_style__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _pages_index_index_nvue_mpType_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./pages/index/index.nvue?mpType=page */ 4);\n\n        \n        \n        \n        if (typeof Promise !== 'undefined' && !Promise.prototype.finally) {\n          Promise.prototype.finally = function(callback) {\n            var promise = this.constructor\n            return this.then(function(value) {\n              return promise.resolve(callback()).then(function() {\n                return value\n              })\n            }, function(reason) {\n              return promise.resolve(callback()).then(function() {\n                throw reason\n              })\n            })\n          }\n        }\n        _pages_index_index_nvue_mpType_page__WEBPACK_IMPORTED_MODULE_1__[\"default\"].mpType = 'page'\n        _pages_index_index_nvue_mpType_page__WEBPACK_IMPORTED_MODULE_1__[\"default\"].route = 'pages/index/index'\n        _pages_index_index_nvue_mpType_page__WEBPACK_IMPORTED_MODULE_1__[\"default\"].el = '#root'\n        new Vue(_pages_index_index_nvue_mpType_page__WEBPACK_IMPORTED_MODULE_1__[\"default\"])\n        //# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbbnVsbF0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7OztBQUVBLFFBQThCO0FBQzlCLFFBQThEO0FBQzlEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGVBQWU7QUFDZixhQUFhO0FBQ2I7QUFDQTtBQUNBLGVBQWU7QUFDZixhQUFhO0FBQ2I7QUFDQTtBQUNBLFFBQVEsMkVBQUc7QUFDWCxRQUFRLDJFQUFHO0FBQ1gsUUFBUSwyRUFBRztBQUNYLGdCQUFnQiwyRUFBRyIsImZpbGUiOiIwLmpzIiwic291cmNlc0NvbnRlbnQiOlsiXG4gICAgICAgIFxuICAgICAgICBpbXBvcnQgJ3VuaS1hcHAtc3R5bGUnXG4gICAgICAgIGltcG9ydCBBcHAgZnJvbSAnLi9wYWdlcy9pbmRleC9pbmRleC5udnVlP21wVHlwZT1wYWdlJ1xuICAgICAgICBpZiAodHlwZW9mIFByb21pc2UgIT09ICd1bmRlZmluZWQnICYmICFQcm9taXNlLnByb3RvdHlwZS5maW5hbGx5KSB7XG4gICAgICAgICAgUHJvbWlzZS5wcm90b3R5cGUuZmluYWxseSA9IGZ1bmN0aW9uKGNhbGxiYWNrKSB7XG4gICAgICAgICAgICB2YXIgcHJvbWlzZSA9IHRoaXMuY29uc3RydWN0b3JcbiAgICAgICAgICAgIHJldHVybiB0aGlzLnRoZW4oZnVuY3Rpb24odmFsdWUpIHtcbiAgICAgICAgICAgICAgcmV0dXJuIHByb21pc2UucmVzb2x2ZShjYWxsYmFjaygpKS50aGVuKGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgICAgIHJldHVybiB2YWx1ZVxuICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgfSwgZnVuY3Rpb24ocmVhc29uKSB7XG4gICAgICAgICAgICAgIHJldHVybiBwcm9taXNlLnJlc29sdmUoY2FsbGJhY2soKSkudGhlbihmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICAgICB0aHJvdyByZWFzb25cbiAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIEFwcC5tcFR5cGUgPSAncGFnZSdcbiAgICAgICAgQXBwLnJvdXRlID0gJ3BhZ2VzL2luZGV4L2luZGV4J1xuICAgICAgICBBcHAuZWwgPSAnI3Jvb3QnXG4gICAgICAgIG5ldyBWdWUoQXBwKVxuICAgICAgICAiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///0\n");

/***/ }),
/* 1 */
/*!***************************************************!*\
  !*** D:/Hamm/ChatAPP/main.js?{"type":"appStyle"} ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("Vue.prototype.__$appStyle__ = {}\nVue.prototype.__merge_style && Vue.prototype.__merge_style(__webpack_require__(/*! ./App.vue?vue&type=style&index=0&lang=css */ 2).default,Vue.prototype.__$appStyle__)\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbbnVsbF0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0EsMkRBQTJELG1CQUFPLENBQUMsa0RBQTJDIiwiZmlsZSI6IjEuanMiLCJzb3VyY2VzQ29udGVudCI6WyJWdWUucHJvdG90eXBlLl9fJGFwcFN0eWxlX18gPSB7fVxuVnVlLnByb3RvdHlwZS5fX21lcmdlX3N0eWxlICYmIFZ1ZS5wcm90b3R5cGUuX19tZXJnZV9zdHlsZShyZXF1aXJlKFwiLi9BcHAudnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmbGFuZz1jc3NcIikuZGVmYXVsdCxWdWUucHJvdG90eXBlLl9fJGFwcFN0eWxlX18pXG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///1\n");

/***/ }),
/* 2 */
/*!***************************************************************!*\
  !*** D:/Hamm/ChatAPP/App.vue?vue&type=style&index=0&lang=css ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_0_1_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_0_2_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_0_3_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_style_index_0_lang_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-hbuilderx/packages/webpack-uni-nvue-loader/lib/style.js!../HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--8-oneOf-0-1!../HBuilderX/plugins/uniapp-cli/node_modules/postcss-loader/src??ref--8-oneOf-0-2!../HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--8-oneOf-0-3!../HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./App.vue?vue&type=style&index=0&lang=css */ 3);
/* harmony import */ var _HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_0_1_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_0_2_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_0_3_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_style_index_0_lang_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_0_1_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_0_2_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_0_3_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_style_index_0_lang_css__WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_0_1_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_0_2_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_0_3_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_style_index_0_lang_css__WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_0_1_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_0_2_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_0_3_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_style_index_0_lang_css__WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_0_1_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_0_2_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_0_3_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_style_index_0_lang_css__WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),
/* 3 */
/*!*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-hbuilderx/packages/webpack-uni-nvue-loader/lib/style.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--8-oneOf-0-1!./node_modules/postcss-loader/src??ref--8-oneOf-0-2!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--8-oneOf-0-3!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!D:/Hamm/ChatAPP/App.vue?vue&type=style&index=0&lang=css ***!
  \*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = {}

/***/ }),
/* 4 */
/*!**********************************************************!*\
  !*** D:/Hamm/ChatAPP/pages/index/index.nvue?mpType=page ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _index_nvue_vue_type_template_id_7b909402_mpType_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.nvue?vue&type=template&id=7b909402&mpType=page */ 5);\n/* harmony import */ var _index_nvue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index.nvue?vue&type=script&lang=js&mpType=page */ 7);\n/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _index_nvue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_1__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _index_nvue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_1__[key]; }) }(__WEBPACK_IMPORT_KEY__));\n/* harmony import */ var _HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/runtime/componentNormalizer.js */ 12);\n\nvar renderjs\n\n\nfunction injectStyles (context) {\n  \n  if(!this.options.style){\n          this.options.style = {}\n      }\n      if(Vue.prototype.__merge_style && Vue.prototype.__$appStyle__){\n        Vue.prototype.__merge_style(Vue.prototype.__$appStyle__, this.options.style)\n      }\n      if(Vue.prototype.__merge_style){\n                Vue.prototype.__merge_style(__webpack_require__(/*! ./index.nvue?vue&type=style&index=0&lang=css&mpType=page */ 10).default, this.options.style)\n            }else{\n                Object.assign(this.options.style,__webpack_require__(/*! ./index.nvue?vue&type=style&index=0&lang=css&mpType=page */ 10).default)\n            }\n\n}\n\n/* normalize component */\n\nvar component = Object(_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(\n  _index_nvue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_1__[\"default\"],\n  _index_nvue_vue_type_template_id_7b909402_mpType_page__WEBPACK_IMPORTED_MODULE_0__[\"render\"],\n  _index_nvue_vue_type_template_id_7b909402_mpType_page__WEBPACK_IMPORTED_MODULE_0__[\"staticRenderFns\"],\n  false,\n  null,\n  null,\n  \"53015790\",\n  false,\n  _index_nvue_vue_type_template_id_7b909402_mpType_page__WEBPACK_IMPORTED_MODULE_0__[\"components\"],\n  renderjs\n)\n\ninjectStyles.call(component)\ncomponent.options.__file = \"pages/index/index.nvue\"\n/* harmony default export */ __webpack_exports__[\"default\"] = (component.exports);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbbnVsbF0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBOEg7QUFDOUg7QUFDcUU7QUFDTDtBQUNoRTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDRDQUE0QyxtQkFBTyxDQUFDLGtFQUEwRDtBQUM5RyxhQUFhO0FBQ2IsaURBQWlELG1CQUFPLENBQUMsa0VBQTBEO0FBQ25IOztBQUVBOztBQUVBO0FBQ2dLO0FBQ2hLLGdCQUFnQiw2S0FBVTtBQUMxQixFQUFFLHVGQUFNO0FBQ1IsRUFBRSw0RkFBTTtBQUNSLEVBQUUscUdBQWU7QUFDakI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUUsZ0dBQVU7QUFDWjtBQUNBOztBQUVBO0FBQ0E7QUFDZSxnRiIsImZpbGUiOiI0LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnMsIHJlY3ljbGFibGVSZW5kZXIsIGNvbXBvbmVudHMgfSBmcm9tIFwiLi9pbmRleC5udnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTdiOTA5NDAyJm1wVHlwZT1wYWdlXCJcbnZhciByZW5kZXJqc1xuaW1wb3J0IHNjcmlwdCBmcm9tIFwiLi9pbmRleC5udnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJm1wVHlwZT1wYWdlXCJcbmV4cG9ydCAqIGZyb20gXCIuL2luZGV4Lm52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmbXBUeXBlPXBhZ2VcIlxuZnVuY3Rpb24gaW5qZWN0U3R5bGVzIChjb250ZXh0KSB7XG4gIFxuICBpZighdGhpcy5vcHRpb25zLnN0eWxlKXtcbiAgICAgICAgICB0aGlzLm9wdGlvbnMuc3R5bGUgPSB7fVxuICAgICAgfVxuICAgICAgaWYoVnVlLnByb3RvdHlwZS5fX21lcmdlX3N0eWxlICYmIFZ1ZS5wcm90b3R5cGUuX18kYXBwU3R5bGVfXyl7XG4gICAgICAgIFZ1ZS5wcm90b3R5cGUuX19tZXJnZV9zdHlsZShWdWUucHJvdG90eXBlLl9fJGFwcFN0eWxlX18sIHRoaXMub3B0aW9ucy5zdHlsZSlcbiAgICAgIH1cbiAgICAgIGlmKFZ1ZS5wcm90b3R5cGUuX19tZXJnZV9zdHlsZSl7XG4gICAgICAgICAgICAgICAgVnVlLnByb3RvdHlwZS5fX21lcmdlX3N0eWxlKHJlcXVpcmUoXCIuL2luZGV4Lm52dWU/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MCZsYW5nPWNzcyZtcFR5cGU9cGFnZVwiKS5kZWZhdWx0LCB0aGlzLm9wdGlvbnMuc3R5bGUpXG4gICAgICAgICAgICB9ZWxzZXtcbiAgICAgICAgICAgICAgICBPYmplY3QuYXNzaWduKHRoaXMub3B0aW9ucy5zdHlsZSxyZXF1aXJlKFwiLi9pbmRleC5udnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmbGFuZz1jc3MmbXBUeXBlPXBhZ2VcIikuZGVmYXVsdClcbiAgICAgICAgICAgIH1cblxufVxuXG4vKiBub3JtYWxpemUgY29tcG9uZW50ICovXG5pbXBvcnQgbm9ybWFsaXplciBmcm9tIFwiIS4uLy4uLy4uL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL0BkY2xvdWRpby92dWUtY2xpLXBsdWdpbi11bmkvcGFja2FnZXMvdnVlLWxvYWRlci9saWIvcnVudGltZS9jb21wb25lbnROb3JtYWxpemVyLmpzXCJcbnZhciBjb21wb25lbnQgPSBub3JtYWxpemVyKFxuICBzY3JpcHQsXG4gIHJlbmRlcixcbiAgc3RhdGljUmVuZGVyRm5zLFxuICBmYWxzZSxcbiAgbnVsbCxcbiAgbnVsbCxcbiAgXCI1MzAxNTc5MFwiLFxuICBmYWxzZSxcbiAgY29tcG9uZW50cyxcbiAgcmVuZGVyanNcbilcblxuaW5qZWN0U3R5bGVzLmNhbGwoY29tcG9uZW50KVxuY29tcG9uZW50Lm9wdGlvbnMuX19maWxlID0gXCJwYWdlcy9pbmRleC9pbmRleC5udnVlXCJcbmV4cG9ydCBkZWZhdWx0IGNvbXBvbmVudC5leHBvcnRzIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///4\n");

/***/ }),
/* 5 */
/*!****************************************************************************************!*\
  !*** D:/Hamm/ChatAPP/pages/index/index.nvue?vue&type=template&id=7b909402&mpType=page ***!
  \****************************************************************************************/
/*! exports provided: render, staticRenderFns, recyclableRender, components */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_template_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_7_0_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_index_nvue_vue_type_template_id_7b909402_mpType_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-hbuilderx/packages/webpack-uni-nvue-loader/lib/template.js!../../../HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/page-meta.js!../../../HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--7-0!../../../HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./index.nvue?vue&type=template&id=7b909402&mpType=page */ 6);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_template_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_7_0_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_index_nvue_vue_type_template_id_7b909402_mpType_page__WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_template_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_7_0_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_index_nvue_vue_type_template_id_7b909402_mpType_page__WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "recyclableRender", function() { return _HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_template_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_7_0_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_index_nvue_vue_type_template_id_7b909402_mpType_page__WEBPACK_IMPORTED_MODULE_0__["recyclableRender"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "components", function() { return _HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_template_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_7_0_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_index_nvue_vue_type_template_id_7b909402_mpType_page__WEBPACK_IMPORTED_MODULE_0__["components"]; });



/***/ }),
/* 6 */
/*!***************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-hbuilderx/packages/webpack-uni-nvue-loader/lib/template.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/page-meta.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--7-0!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!D:/Hamm/ChatAPP/pages/index/index.nvue?vue&type=template&id=7b909402&mpType=page ***!
  \***************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns, recyclableRender, components */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "recyclableRender", function() { return recyclableRender; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "components", function() { return components; });
var components
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "scroll-view",
    {
      staticStyle: { flexDirection: "column" },
      attrs: {
        scrollY: true,
        showScrollbar: true,
        enableBackToTop: true,
        bubble: "true"
      }
    },
    [
      _c(
        "view",
        { staticClass: ["uniapp"] },
        [
          _vm.showRoomPage
            ? _c(
                "block",
                [
                  _c(
                    "scroll-view",
                    {
                      staticClass: ["historyList"],
                      style: { paddingBottom: _vm.safeAreaBottom + 70 + "px" },
                      attrs: {
                        id: "historyList",
                        scrollY: "true",
                        scrollWithAnimation: true,
                        scrollIntoView: _vm.viewId,
                        height: "400"
                      },
                      on: { click: _vm.historyClicked }
                    },
                    [
                      _c(
                        "view",
                        { attrs: { id: "historyBox" } },
                        _vm._l(_vm.historyList, function(item, index) {
                          return _c("view", [
                            item.type == "text" &&
                            item.user.user_id != _vm.userInfo.user_id
                              ? _c(
                                  "view",
                                  {
                                    staticClass: ["item"],
                                    attrs: { id: "sha_" + item.sha }
                                  },
                                  [
                                    _c(
                                      "view",
                                      {
                                        staticClass: ["user_head_box"],
                                        on: {
                                          click: function($event) {
                                            _vm.doUserHeadEvent(item)
                                          }
                                        }
                                      },
                                      [
                                        _c("u-image", {
                                          staticClass: ["user_head_image"],
                                          attrs: { src: item.user.user_head }
                                        }),
                                        _c(
                                          "u-text",
                                          {
                                            staticClass: ["chat_item_user_name"]
                                          },
                                          [_vm._v(_vm._s(item.user.user_name))]
                                        )
                                      ],
                                      1
                                    ),
                                    _c(
                                      "view",
                                      { staticClass: ["chat_item_body_left"] },
                                      [
                                        !item.at
                                          ? _c(
                                              "view",
                                              {
                                                staticClass: [
                                                  "chat_item_text_box"
                                                ]
                                              },
                                              [
                                                item.user.user_id ==
                                                  _vm.userInfo.user_id &&
                                                _vm.userInfo.user_sex == 1
                                                  ? _c(
                                                      "u-text",
                                                      {
                                                        staticClass: [
                                                          "chat_item_text"
                                                        ],
                                                        staticStyle: {
                                                          backgroundColor:
                                                            "#66CBFF",
                                                          color: "#333"
                                                        }
                                                      },
                                                      [
                                                        _vm._v(
                                                          _vm._s(
                                                            _vm.urldecode(
                                                              item.content
                                                            )
                                                          )
                                                        )
                                                      ]
                                                    )
                                                  : _vm._e(),
                                                item.user.user_id ==
                                                  _vm.userInfo.user_id &&
                                                _vm.userInfo.user_sex == 0
                                                  ? _c(
                                                      "u-text",
                                                      {
                                                        staticClass: [
                                                          "chat_item_text"
                                                        ],
                                                        staticStyle: {
                                                          backgroundColor:
                                                            "#FE9898",
                                                          color: "white"
                                                        }
                                                      },
                                                      [
                                                        _vm._v(
                                                          _vm._s(
                                                            _vm.urldecode(
                                                              item.content
                                                            )
                                                          )
                                                        )
                                                      ]
                                                    )
                                                  : _vm._e(),
                                                item.user.user_id !=
                                                _vm.userInfo.user_id
                                                  ? _c(
                                                      "u-text",
                                                      {
                                                        staticClass: [
                                                          "chat_item_text"
                                                        ]
                                                      },
                                                      [
                                                        _vm._v(
                                                          _vm._s(
                                                            _vm.urldecode(
                                                              item.content
                                                            )
                                                          )
                                                        )
                                                      ]
                                                    )
                                                  : _vm._e()
                                              ]
                                            )
                                          : _vm._e(),
                                        item.at
                                          ? _c(
                                              "view",
                                              {
                                                staticClass: [
                                                  "chat_item_text_box"
                                                ]
                                              },
                                              [
                                                item.at.user_id ==
                                                _vm.userInfo.user_id
                                                  ? _c(
                                                      "u-text",
                                                      {
                                                        staticClass: [
                                                          "chat_item_text"
                                                        ],
                                                        staticStyle: {
                                                          backgroundColor:
                                                            "#666",
                                                          color: "white"
                                                        }
                                                      },
                                                      [
                                                        _vm._v(
                                                          _vm._s(
                                                            _vm.urldecode(
                                                              item.content
                                                            )
                                                          )
                                                        )
                                                      ]
                                                    )
                                                  : _vm._e(),
                                                item.at.user_id !=
                                                  _vm.userInfo.user_id &&
                                                item.user.user_id !=
                                                  _vm.userInfo.user_id
                                                  ? _c(
                                                      "u-text",
                                                      {
                                                        staticClass: [
                                                          "chat_item_text"
                                                        ]
                                                      },
                                                      [
                                                        _vm._v(
                                                          _vm._s(
                                                            _vm.urldecode(
                                                              item.content
                                                            )
                                                          )
                                                        )
                                                      ]
                                                    )
                                                  : _vm._e()
                                              ]
                                            )
                                          : _vm._e()
                                      ]
                                    )
                                  ]
                                )
                              : _vm._e(),
                            item.type == "text" &&
                            item.user.user_id == _vm.userInfo.user_id
                              ? _c(
                                  "view",
                                  {
                                    staticClass: ["item_mine"],
                                    attrs: { id: "sha_" + item.sha }
                                  },
                                  [
                                    _c(
                                      "view",
                                      {
                                        staticClass: ["user_head_box"],
                                        on: {
                                          click: function($event) {
                                            _vm.doUserHeadEvent(item)
                                          }
                                        }
                                      },
                                      [
                                        _c(
                                          "u-text",
                                          {
                                            staticClass: ["chat_item_user_name"]
                                          },
                                          [_vm._v(_vm._s(item.user.user_name))]
                                        ),
                                        _c("u-image", {
                                          staticClass: ["user_head_image"],
                                          attrs: { src: item.user.user_head }
                                        })
                                      ],
                                      1
                                    ),
                                    _c(
                                      "view",
                                      { staticClass: ["chat_item_body_right"] },
                                      [
                                        !item.at
                                          ? _c(
                                              "view",
                                              {
                                                staticClass: [
                                                  "chat_item_text_box"
                                                ]
                                              },
                                              [
                                                item.user.user_id ==
                                                  _vm.userInfo.user_id &&
                                                _vm.userInfo.user_sex == 1
                                                  ? _c(
                                                      "u-text",
                                                      {
                                                        staticClass: [
                                                          "chat_item_text"
                                                        ],
                                                        staticStyle: {
                                                          backgroundColor:
                                                            "#66CBFF",
                                                          color: "black"
                                                        }
                                                      },
                                                      [
                                                        _vm._v(
                                                          _vm._s(
                                                            _vm.urldecode(
                                                              item.content
                                                            )
                                                          )
                                                        )
                                                      ]
                                                    )
                                                  : _vm._e(),
                                                item.user.user_id ==
                                                  _vm.userInfo.user_id &&
                                                _vm.userInfo.user_sex != 1
                                                  ? _c(
                                                      "u-text",
                                                      {
                                                        staticClass: [
                                                          "chat_item_text"
                                                        ],
                                                        staticStyle: {
                                                          backgroundColor:
                                                            "#FE9898",
                                                          color: "white"
                                                        }
                                                      },
                                                      [
                                                        _vm._v(
                                                          _vm._s(
                                                            _vm.urldecode(
                                                              item.content
                                                            )
                                                          )
                                                        )
                                                      ]
                                                    )
                                                  : _vm._e()
                                              ]
                                            )
                                          : _vm._e(),
                                        item.at
                                          ? _c(
                                              "view",
                                              {
                                                staticClass: [
                                                  "chat_item_text_box"
                                                ]
                                              },
                                              [
                                                item.at.user_id ==
                                                _vm.userInfo.user_id
                                                  ? _c(
                                                      "u-text",
                                                      {
                                                        staticClass: [
                                                          "chat_item_text"
                                                        ],
                                                        staticStyle: {
                                                          backgroundColor:
                                                            "#666",
                                                          color: "white"
                                                        }
                                                      },
                                                      [
                                                        _vm._v(
                                                          _vm._s(
                                                            _vm.urldecode(
                                                              item.content
                                                            )
                                                          )
                                                        )
                                                      ]
                                                    )
                                                  : _vm._e(),
                                                item.at.user_id !=
                                                  _vm.userInfo.user_id &&
                                                item.user.user_id ==
                                                  _vm.userInfo.user_id &&
                                                _vm.userInfo.user_sex == 1
                                                  ? _c(
                                                      "u-text",
                                                      {
                                                        staticClass: [
                                                          "chat_item_text"
                                                        ],
                                                        staticStyle: {
                                                          backgroundColor:
                                                            "#66CBFF",
                                                          color: "black"
                                                        }
                                                      },
                                                      [
                                                        _vm._v(
                                                          _vm._s(
                                                            _vm.urldecode(
                                                              item.content
                                                            )
                                                          )
                                                        )
                                                      ]
                                                    )
                                                  : _vm._e(),
                                                item.at.user_id !=
                                                  _vm.userInfo.user_id &&
                                                item.user.user_id ==
                                                  _vm.userInfo.user_id &&
                                                _vm.userInfo.user_sex != 1
                                                  ? _c(
                                                      "u-text",
                                                      {
                                                        staticClass: [
                                                          "chat_item_text"
                                                        ],
                                                        staticStyle: {
                                                          backgroundColor:
                                                            "#FE9898",
                                                          color: "white"
                                                        }
                                                      },
                                                      [
                                                        _vm._v(
                                                          _vm._s(
                                                            _vm.urldecode(
                                                              item.content
                                                            )
                                                          )
                                                        )
                                                      ]
                                                    )
                                                  : _vm._e()
                                              ]
                                            )
                                          : _vm._e()
                                      ]
                                    )
                                  ]
                                )
                              : _vm._e(),
                            item.type == "img" &&
                            item.user.user_id == _vm.userInfo.user_id
                              ? _c(
                                  "view",
                                  {
                                    staticClass: ["item_mine"],
                                    attrs: { id: "sha_" + item.sha }
                                  },
                                  [
                                    _c(
                                      "view",
                                      {
                                        staticClass: ["user_head_box"],
                                        on: {
                                          click: function($event) {
                                            _vm.doUserHeadEvent(item)
                                          }
                                        }
                                      },
                                      [
                                        _c(
                                          "u-text",
                                          {
                                            staticClass: ["chat_item_user_name"]
                                          },
                                          [_vm._v(_vm._s(item.user.user_name))]
                                        ),
                                        _c("u-image", {
                                          staticClass: ["user_head_image"],
                                          attrs: { src: item.user.user_head }
                                        })
                                      ],
                                      1
                                    ),
                                    _c(
                                      "view",
                                      { staticClass: ["chat_item_body_right"] },
                                      [
                                        _c(
                                          "view",
                                          {
                                            staticClass: ["chat_item_image_box"]
                                          },
                                          [
                                            _c("u-image", {
                                              staticClass: [
                                                "chat_item_image_content"
                                              ],
                                              attrs: {
                                                src: _vm.getStaticUrl(
                                                  _vm.urldecode(item.content)
                                                ),
                                                mode: "widthFix"
                                              },
                                              on: {
                                                click: function($event) {
                                                  _vm.fullViewImage(
                                                    _vm.getStaticUrl(
                                                      _vm.urldecode(
                                                        item.resource
                                                      )
                                                    )
                                                  )
                                                }
                                              }
                                            })
                                          ],
                                          1
                                        )
                                      ]
                                    )
                                  ]
                                )
                              : _vm._e(),
                            item.type == "img" &&
                            item.user.user_id != _vm.userInfo.user_id
                              ? _c(
                                  "view",
                                  {
                                    staticClass: ["item"],
                                    attrs: { id: "sha_" + item.sha }
                                  },
                                  [
                                    _c(
                                      "view",
                                      {
                                        staticClass: ["user_head_box"],
                                        on: {
                                          click: function($event) {
                                            _vm.doUserHeadEvent(item)
                                          }
                                        }
                                      },
                                      [
                                        _c("u-image", {
                                          staticClass: ["user_head_image"],
                                          attrs: { src: item.user.user_head }
                                        }),
                                        _c(
                                          "u-text",
                                          {
                                            staticClass: ["chat_item_user_name"]
                                          },
                                          [_vm._v(_vm._s(item.user.user_name))]
                                        )
                                      ],
                                      1
                                    ),
                                    _c(
                                      "view",
                                      { staticClass: ["chat_item_body_left"] },
                                      [
                                        _c(
                                          "view",
                                          {
                                            staticClass: ["chat_item_image_box"]
                                          },
                                          [
                                            _c("u-image", {
                                              staticClass: [
                                                "chat_item_image_content"
                                              ],
                                              attrs: {
                                                src: _vm.getStaticUrl(
                                                  _vm.urldecode(item.content)
                                                ),
                                                mode: "widthFix"
                                              },
                                              on: {
                                                click: function($event) {
                                                  _vm.fullViewImage(
                                                    _vm.getStaticUrl(
                                                      _vm.urldecode(
                                                        item.resource
                                                      )
                                                    )
                                                  )
                                                }
                                              }
                                            })
                                          ],
                                          1
                                        )
                                      ]
                                    )
                                  ]
                                )
                              : _vm._e(),
                            item.type == "system"
                              ? _c("view", { staticClass: ["item_system"] }, [
                                  _c(
                                    "u-text",
                                    { staticClass: ["item_system_text"] },
                                    [_vm._v(_vm._s(item.content))]
                                  )
                                ])
                              : _vm._e()
                          ])
                        }),
                        0
                      ),
                      _c("view", {
                        attrs: {
                          id:
                            "view_" +
                            _vm.historyList[_vm.historyList.length - 1].view_id
                        }
                      })
                    ]
                  ),
                  _c("view", {
                    staticStyle: {
                      position: "fixed",
                      left: "0",
                      right: "0",
                      bottom: "0",
                      backgroundColor: "#FFFFFF"
                    },
                    style: { height: _vm.safeAreaBottom + "px" }
                  }),
                  _vm.chatType == "text" && _vm.room.room_sendmsg == 1
                    ? _c("u-input", {
                        staticClass: ["chatInput"],
                        style: { bottom: _vm.safeAreaBottom + "px" },
                        attrs: {
                          type: "text",
                          placeholder: "全员禁言中,你暂时无法发言",
                          disabled: "true"
                        }
                      })
                    : _vm._e(),
                  _vm.chatType == "voice"
                    ? _c("u-input", {
                        staticClass: ["chatInput"],
                        style: { bottom: _vm.safeAreaBottom + "px" },
                        attrs: {
                          disabled: "disabled",
                          type: "text",
                          placeholder: "点击这里开始录音"
                        }
                      })
                    : _vm._e(),
                  _vm.chatType == "text" && _vm.room.room_sendmsg == 0
                    ? _c("u-input", {
                        staticClass: ["chatInput"],
                        style: { bottom: _vm.safeAreaBottom + "px" },
                        attrs: {
                          type: "text",
                          confirmType: "send",
                          confirmHold: "true",
                          placeholder: "说点什么吧...",
                          focus: _vm.messageObj.focus,
                          value: _vm.messageObj.message
                        },
                        on: {
                          keydown: _vm.doKeyDown,
                          confirm: _vm.doSendMessage,
                          input: function($event) {
                            _vm.$set(
                              _vm.messageObj,
                              "message",
                              $event.detail.value
                            )
                          }
                        }
                      })
                    : _vm._e(),
                  _c("u-image", {
                    staticClass: ["chatMenu_image"],
                    style: { bottom: _vm.safeAreaBottom + 10 + "px" },
                    attrs: { src: "/static/image/more.png", mode: "widthFix" },
                    on: { click: _vm.doShowMenuBox }
                  }),
                  _c("u-image", {
                    staticClass: ["chatMenu_emoji"],
                    style: { bottom: _vm.safeAreaBottom + 10 + "px" },
                    attrs: { src: "/static/image/emoji.png", mode: "widthFix" },
                    on: { click: _vm.doShowEmojiBox }
                  }),
                  _vm.song.song
                    ? _c(
                        "view",
                        {
                          staticClass: ["player"],
                          attrs: { blurEffect: "light" },
                          on: { click: _vm.doMusicClicked }
                        },
                        [
                          _c("view", { staticClass: ["player_info"] }, [
                            _c("u-text", { staticClass: ["player_song"] }, [
                              _vm._v(_vm._s(_vm.song.song.name))
                            ]),
                            _c("u-text", { staticClass: ["player_user"] }, [
                              _vm._v(
                                "点歌人: " +
                                  _vm._s(_vm.urldecode(_vm.song.user.user_name))
                              )
                            ])
                          ]),
                          _c("u-image", {
                            staticClass: ["player_image"],
                            attrs: { src: _vm.song.song.pic }
                          })
                        ],
                        1
                      )
                    : _vm._e(),
                  _vm.showEmojiBox
                    ? _c(
                        "view",
                        {
                          staticClass: ["emoji"],
                          style: { bottom: _vm.safeAreaBottom + 60 + "px" },
                          attrs: { blurEffect: "light" }
                        },
                        _vm._l(30, function(index) {
                          return _c("u-image", {
                            staticClass: ["emoji_item"],
                            attrs: {
                              src: "../../static/Emojis/" + index + ".png"
                            },
                            on: {
                              click: function($event) {
                                _vm.sendEmoji(index)
                              }
                            }
                          })
                        }),
                        1
                      )
                    : _vm._e(),
                  _vm.showMenuBox
                    ? _c(
                        "view",
                        {
                          staticClass: ["menuBox"],
                          style: { bottom: _vm.safeAreaBottom + 60 + "px" },
                          attrs: { blurEffect: "light" }
                        },
                        [
                          _c(
                            "scroll-view",
                            {
                              staticClass: ["menuBody"],
                              attrs: {
                                showScrollbar: "false",
                                scrollWithAnimation: "true",
                                scrollX: "true"
                              }
                            },
                            [
                              _c(
                                "view",
                                {
                                  staticClass: ["menuItem"],
                                  on: { click: _vm.chooseImage }
                                },
                                [
                                  _c(
                                    "view",
                                    { staticClass: ["menuMain"] },
                                    [
                                      _c("u-image", {
                                        staticClass: ["menuImage"],
                                        attrs: {
                                          src:
                                            "/static/image/icon_photo_fill.png"
                                        }
                                      })
                                    ],
                                    1
                                  ),
                                  _c("u-text", { staticClass: ["menuTitle"] }, [
                                    _vm._v("发图")
                                  ])
                                ]
                              ),
                              _c(
                                "view",
                                {
                                  staticClass: ["menuItem"],
                                  on: {
                                    click: function($event) {
                                      _vm.doOpenPage("addSong")
                                    }
                                  }
                                },
                                [
                                  _c(
                                    "view",
                                    { staticClass: ["menuMain"] },
                                    [
                                      _c("u-image", {
                                        staticClass: ["menuImage"],
                                        attrs: {
                                          src: "/static/image/icon_dingtab.png"
                                        }
                                      })
                                    ],
                                    1
                                  ),
                                  _c("u-text", { staticClass: ["menuTitle"] }, [
                                    _vm._v("点歌")
                                  ])
                                ]
                              ),
                              _c(
                                "view",
                                {
                                  staticClass: ["menuItem"],
                                  on: {
                                    click: function($event) {
                                      _vm.doOpenPage("songList")
                                    }
                                  }
                                },
                                [
                                  _c(
                                    "view",
                                    { staticClass: ["menuMain"] },
                                    [
                                      _c("u-image", {
                                        staticClass: ["menuImage"],
                                        attrs: {
                                          src:
                                            "/static/image/icon_invite_fill.png"
                                        }
                                      })
                                    ],
                                    1
                                  ),
                                  _c("u-text", { staticClass: ["menuTitle"] }, [
                                    _vm._v("已点")
                                  ])
                                ]
                              ),
                              _c(
                                "view",
                                {
                                  staticClass: ["menuItem"],
                                  on: {
                                    click: function($event) {
                                      _vm.doOpenPage("mySong")
                                    }
                                  }
                                },
                                [
                                  _c(
                                    "view",
                                    { staticClass: ["menuMain"] },
                                    [
                                      _c("u-image", {
                                        staticClass: ["menuImage"],
                                        attrs: {
                                          src:
                                            "/static/image/icon_people_fill.png"
                                        }
                                      })
                                    ],
                                    1
                                  ),
                                  _c("u-text", { staticClass: ["menuTitle"] }, [
                                    _vm._v("我的")
                                  ])
                                ]
                              ),
                              _c(
                                "view",
                                {
                                  staticClass: ["menuItem"],
                                  on: {
                                    click: function($event) {
                                      _vm.doOpenPage("onLine")
                                    }
                                  }
                                },
                                [
                                  _c(
                                    "view",
                                    { staticClass: ["menuMain"] },
                                    [
                                      _c("u-image", {
                                        staticClass: ["menuImage"],
                                        attrs: {
                                          src:
                                            "/static/image/icon_meeting_fill.png"
                                        }
                                      })
                                    ],
                                    1
                                  ),
                                  _c("u-text", { staticClass: ["menuTitle"] }, [
                                    _vm._v("在线")
                                  ])
                                ]
                              ),
                              _c(
                                "view",
                                {
                                  staticClass: ["menuItem"],
                                  on: {
                                    click: function($event) {
                                      _vm.doOpenPage("invate")
                                    }
                                  }
                                },
                                [
                                  _c(
                                    "view",
                                    { staticClass: ["menuMain"] },
                                    [
                                      _c("u-image", {
                                        staticClass: ["menuImage"],
                                        attrs: {
                                          src: "/static/image/icon_invate.png"
                                        }
                                      })
                                    ],
                                    1
                                  ),
                                  _c("u-text", { staticClass: ["menuTitle"] }, [
                                    _vm._v("邀请")
                                  ])
                                ]
                              ),
                              _c(
                                "view",
                                {
                                  staticClass: ["menuItem"],
                                  on: {
                                    click: function($event) {
                                      _vm.doOpenPage("setting")
                                    }
                                  }
                                },
                                [
                                  _c(
                                    "view",
                                    { staticClass: ["menuMain"] },
                                    [
                                      _c("u-image", {
                                        staticClass: ["menuImage"],
                                        attrs: {
                                          src: "/static/image/icon_setting.png"
                                        }
                                      })
                                    ],
                                    1
                                  ),
                                  _c("u-text", { staticClass: ["menuTitle"] }, [
                                    _vm._v("管理")
                                  ])
                                ]
                              )
                            ]
                          )
                        ],
                        1
                      )
                    : _vm._e()
                ],
                1
              )
            : _vm._e(),
          _vm.showPasswordForm
            ? _c(
                "view",
                { staticClass: ["formPassword"] },
                [
                  _c("form", { on: { submit: _vm.getRoomInfo } }, [
                    _c("view", { staticClass: ["formPasswordTitle"] }, [
                      _c("u-text", [_vm._v("请输入密码进入房间")])
                    ]),
                    _c(
                      "view",
                      { staticClass: ["formPasswordInput"] },
                      [
                        _c("u-input", {
                          attrs: {
                            type: "number",
                            placeholder: "请输入密码",
                            password: "true",
                            confirmType: "search",
                            confirmHold: "true",
                            value: _vm.password
                          },
                          on: {
                            input: function($event) {
                              _vm.password = $event.detail.value
                            }
                          }
                        })
                      ],
                      1
                    )
                  ])
                ],
                1
              )
            : _vm._e()
        ],
        1
      )
    ]
  )
}
var recyclableRender = false
var staticRenderFns = []
render._withStripped = true



/***/ }),
/* 7 */
/*!**********************************************************************************!*\
  !*** D:/Hamm/ChatAPP/pages/index/index.nvue?vue&type=script&lang=js&mpType=page ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_ref_4_0_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_4_1_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_index_nvue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../HBuilderX/plugins/uniapp-cli/node_modules/babel-loader/lib??ref--4-0!../../../HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--4-1!../../../HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./index.nvue?vue&type=script&lang=js&mpType=page */ 8);\n/* harmony import */ var _HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_ref_4_0_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_4_1_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_index_nvue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_ref_4_0_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_4_1_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_index_nvue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_ref_4_0_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_4_1_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_index_nvue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_ref_4_0_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_4_1_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_index_nvue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));\n /* harmony default export */ __webpack_exports__[\"default\"] = (_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_ref_4_0_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_4_1_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_index_nvue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0___default.a); //# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbbnVsbF0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQXVhLENBQWdCLHFkQUFHLEVBQUMiLCJmaWxlIjoiNy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBtb2QgZnJvbSBcIi0hLi4vLi4vLi4vSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcz8/cmVmLS00LTAhLi4vLi4vLi4vSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvQGRjbG91ZGlvL3Z1ZS1jbGktcGx1Z2luLXVuaS9wYWNrYWdlcy93ZWJwYWNrLXByZXByb2Nlc3MtbG9hZGVyL2luZGV4LmpzPz9yZWYtLTQtMSEuLi8uLi8uLi9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9AZGNsb3VkaW8vdnVlLWNsaS1wbHVnaW4tdW5pL3BhY2thZ2VzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9pbmRleC5udnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJm1wVHlwZT1wYWdlXCI7IGV4cG9ydCBkZWZhdWx0IG1vZDsgZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vLi4vSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcz8/cmVmLS00LTAhLi4vLi4vLi4vSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvQGRjbG91ZGlvL3Z1ZS1jbGktcGx1Z2luLXVuaS9wYWNrYWdlcy93ZWJwYWNrLXByZXByb2Nlc3MtbG9hZGVyL2luZGV4LmpzPz9yZWYtLTQtMSEuLi8uLi8uLi9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9AZGNsb3VkaW8vdnVlLWNsaS1wbHVnaW4tdW5pL3BhY2thZ2VzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9pbmRleC5udnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJm1wVHlwZT1wYWdlXCIiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///7\n");

/***/ }),
/* 8 */
/*!*************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--4-1!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!D:/Hamm/ChatAPP/pages/index/index.nvue?vue&type=script&lang=js&mpType=page ***!
  \*************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("/* WEBPACK VAR INJECTION */(function(__f__) {Object.defineProperty(exports, \"__esModule\", { value: true });exports.default = void 0; //\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\nvar _default =\n{\n  data: function data() {\n    return {\n      viewId: \"\",\n      safeAreaBottom: 0,\n      bgAudioMannager: null,\n      showEmojiBox: false,\n      showRoomPage: false,\n      showMenuBox: false,\n      showPasswordForm: false,\n      app: getApp(),\n      userInfo: null,\n      song: {\n        song: null,\n        user: null },\n\n      room_id: 0,\n      room: false,\n      password: \"\",\n      chatType: 'text',\n      historyList: [],\n      messageObj: {\n        message: \"\",\n        at: false,\n        focus: false },\n\n      musicNotLike: false };\n\n  },\n  onLoad: function onLoad() {\n    var that = this;\n    var res = uni.getSystemInfoSync();\n    that.safeAreaBottom = res.safeAreaInsets.bottom == 0 ? 0 : res.safeAreaInsets.bottom;\n    that.bgAudioMannager = uni.getBackgroundAudioManager();\n    this.room_id = uni.getStorageSync('room_id') || 10000;\n    that.app.user.getMyInfo({\n      success: function success(userInfo) {\n        that.userInfo = userInfo;\n        that.getRoomInfo();\n      } });\n\n    uni.$on('WebSocketMessage', function (data) {\n      try {\n        that.messageController(JSON.parse(data));\n      } catch (error) {\n        __f__(\"log\", error, \" at pages/index/index.nvue:414\");\n      }\n    });\n    uni.$on('IndexReload', function () {\n      that.app.user.getMyInfo({\n        success: function success(userInfo) {\n          that.userInfo = userInfo;\n          that.getRoomInfo();\n        } });\n\n    });\n    uni.$on('AtUserEvent', function (user) {\n      that.doAtUser(user);\n    });\n    uni.$on('RoomChanged', function (room_id) {\n      __f__(\"log\", room_id, \" at pages/index/index.nvue:429\");\n      uni.setNavigationBarTitle({\n        title: '正在进入' });\n\n      that.room_id = room_id;\n      that.showPasswordForm = false;\n      that.showRoomPage = false;\n      that.password = '';\n      uni.setStorageSync('room_id', parseInt(that.room_id));\n      that.getRoomInfo();\n    });\n    that.bgAudioMannager.onCanplay(function () {\n      var time = parseInt(new Date().valueOf() / 1000) - that.song.since - 3;\n      that.bgAudioMannager.seek(time > 0 ? time : 0);\n    });\n    that.bgAudioMannager.onEnded(function () {\n      that.song = {\n        song: null,\n        user: null };\n\n      //播放完毕后读取最新播放中的歌曲\n      that.app.webSocket.connection.send({\n        data: \"getNowSong\" });\n\n    });\n  },\n  onShow: function onShow() {\n    var that = this;\n    plus.push.clear();\n    if (that.bgAudioMannager.src) {\n      if (!that.musicNotLike) {\n        that.bgAudioMannager.play();\n      }\n    }\n    that.password = '';\n    that.autoScroll();\n  },\n  onNavigationBarButtonTap: function onNavigationBarButtonTap(res) {\n    var that = this;\n    switch (res.text) {\n      case '换房':\n        uni.navigateTo({\n          url: \"../room/select\" });\n\n        break;\n      case '我的':\n        if (that.userInfo && that.userInfo.user_id <= 0) {\n          that.app.user.login();\n        } else {\n          uni.navigateTo({\n            url: '../user/index' });\n\n        }\n        break;\n      default:}\n\n  },\n  methods: {\n    doUserHeadEvent: function doUserHeadEvent(e) {\n      var that = this;\n      that.showMenuUserHead(e);\n    },\n    doShowEmojiBox: function doShowEmojiBox() {\n      var that = this;\n      that.showEmojiBox = !that.showEmojiBox;\n      that.showMenuBox = false;\n      uni.hideKeyboard();\n      if (!that.showEmojiBox) {\n        that.autoScroll();\n      }\n    },\n    doShowMenuBox: function doShowMenuBox() {\n      var that = this;\n      that.showMenuBox = !that.showMenuBox;\n      that.showEmojiBox = false;\n      uni.hideKeyboard();\n      if (!that.showMenuBox) {\n        that.autoScroll();\n      }\n    },\n    doKeyDown: function doKeyDown() {\n      var that = this;\n      if (that.messageObj.at) {\n        if (that.messageObj.message.indexOf('@' + decodeURIComponent(that.messageObj.at.user_name)) < 0) {\n          //@的昵称已经被改过了\n          that.messageObj.at = false;\n        }\n      }\n    },\n    doMusicClicked: function doMusicClicked() {\n      var that = this;\n      var menu = [\n      '不喜欢', '收藏'];\n\n      if (that.userInfo.user_admin || that.room.room_user == that.userInfo.user_id) {\n        menu = [\n        '切歌', '收藏', '禁止Ta点歌'];\n\n      }\n      uni.showActionSheet({\n        itemList: menu,\n        success: function success(res) {\n          __f__(\"log\", res.tapIndex, \" at pages/index/index.nvue:531\");\n          var buttonName = menu[res.tapIndex];\n          switch (buttonName) {\n            case '禁止Ta点歌':\n              that.app.request({\n                url: 'user/songdown',\n                data: {\n                  room_id: that.room_id,\n                  user_id: that.song.user.user_id },\n\n                loading: \"禁歌中\",\n                success: function success(res) {\n                  uni.showModal({\n                    title: '禁歌成功',\n                    content: res.msg,\n                    showCancel: false,\n                    success: function success() {} });\n\n                } });\n\n              break;\n            case '切歌':\n              uni.showModal({\n                title: '切歌提醒',\n                content: '是否确认切掉当前播放的歌?',\n                cancelText: '取消',\n                confirmColor: '#FF4500',\n                confirmText: '切歌',\n                success: function success(res) {\n                  if (res.confirm) {\n                    that.app.request({\n                      url: \"song/pass\",\n                      data: {\n                        room_id: that.room_id,\n                        mid: that.song.song.mid },\n\n                      success: function success() {} });\n\n                  }\n                } });\n\n              break;\n            case '不喜欢':\n              that.app.request({\n                url: \"song/pass\",\n                data: {\n                  room_id: that.room_id,\n                  mid: that.song.song.mid },\n\n                success: function success(res) {\n                  that.bgAudioMannager.pause();\n                  that.song = {\n                    song: null,\n                    user: null };\n\n                  that.musicNotLike = true;\n                  uni.showModal({\n                    title: '不喜欢',\n                    content: res.msg,\n                    showCancel: false,\n                    success: function success() {} });\n\n                } });\n\n              break;\n            case '收藏':\n              that.app.request({\n                url: \"song/addMySong\",\n                data: {\n                  room_id: that.room_id,\n                  mid: that.song.song.mid },\n\n                success: function success(res) {\n                  uni.showToast({\n                    title: \"收藏成功\" });\n\n                } });\n\n              break;\n            default:}\n\n        } });\n\n    },\n    doAtUser: function doAtUser(user) {\n      var that = this;\n      that.messageObj.at = user;\n      that.messageObj.message = \"@\" + decodeURIComponent(user.user_name) + \" \" + that.messageObj.message;\n      that.messageObj.focus = true;\n    },\n    autoScroll: function autoScroll() {\n      var that = this;\n      that.viewId = \"\";\n      that.$nextTick(function () {\n        that.viewId = \"view_\" + that.historyList[that.historyList.length - 1].view_id;\n      });\n    },\n    historyClicked: function historyClicked() {\n      var that = this;\n      that.showMenuBox = false;\n      that.showEmojiBox = false;\n      uni.hideKeyboard();\n    },\n    messageController: function messageController(msg) {\n      var that = this;\n      switch (msg.type) {\n        case 'text':\n        case 'img':\n        case 'system':\n          if (msg.type == 'text' && msg.at) {\n            if (msg.at.user_id == that.userInfo.user_id) {\n              plus.push.createMessage(\"@\" + decodeURIComponent(msg.at.user_name) + \" \" + decodeURIComponent(msg.content), '', {\n                title: decodeURIComponent(msg.user.user_name) });\n\n            }\n            msg.content = \"@\" + decodeURIComponent(msg.at.user_name) + \" \" + msg.content;\n          }\n          that.addMessageToList(msg);\n          break;\n        case 'addSong':\n          if (msg.at) {\n            that.addSystemMessage(decodeURIComponent(msg.user.user_name) + \" 送了一首 《\" + msg.song.name + \"》 给 \" +\n            decodeURIComponent(msg.at.user_name), '#333');\n            if (msg.at.user_id == that.userInfo.user_id) {\n              plus.push.createMessage(\"送你一首《\" + msg.song.name + \"》(\" + msg.song.singer + \")\", '', {\n                title: decodeURIComponent(msg.user.user_name) });\n\n            }\n          } else {\n            that.addSystemMessage(decodeURIComponent(msg.user.user_name) + \" 点了一首《\" + msg.song.name + \"》\", '#333');\n          }\n\n          break;\n        case 'pass':\n          that.addSystemMessage(decodeURIComponent(msg.user.user_name) + \" 切掉了《\" + msg.song.name + \"》\", '#ff4500');\n\n          break;\n        case 'chat_bg':\n          that.addSystemMessage(decodeURIComponent(msg.user.user_name) + \" 运气大爆发,触发了点歌背景墙特效(1小时内播放歌曲时有效)!\", 'green',\n          '#eee');\n\n          break;\n        case 'push':\n          that.addSystemMessage(decodeURIComponent(msg.user.user_name) + \" 将歌曲 《\" + msg.song.name + \"》 设为置顶候播放\");\n\n          break;\n        case 'removeSong':\n          that.addSystemMessage(decodeURIComponent(msg.user.user_name) + \" 将歌曲 《\" + msg.song.name + \"》 从队列移除\");\n\n          break;\n        case 'removeban':\n          that.addSystemMessage(decodeURIComponent(msg.user.user_name) + \" 将 \" + decodeURIComponent(msg.ban.user_name) +\n          \" 解禁\");\n\n          break;\n        case 'shutdown':\n          that.addSystemMessage(decodeURIComponent(msg.user.user_name) + \" 禁止了用户 \" + decodeURIComponent(msg.ban.user_name) +\n          \" 发言\");\n\n          break;\n        case 'songdown':\n          that.addSystemMessage(decodeURIComponent(msg.user.user_name) + \" 禁止了用户 \" + decodeURIComponent(msg.ban.user_name) +\n          \" 点歌\");\n\n          break;\n        case 'back':\n          for (var _i = 0; _i < that.historyList.length; _i++) {\n            if (that.historyList[_i].message_id == msg.message_id) {\n              that.historyList.splice(_i, 1);\n              break;\n            }\n          }\n          that.addSystemMessage(decodeURIComponent(msg.user.user_name) + \" 撤回了一条消息\");\n\n          break;\n        case 'playSong':\n          that.musicNotLike = false;\n          that.playMusic(msg);\n          if (msg.user.user_id == that.userInfo.user_id) {\n            // plus.push.createMessage(\"你点的《\" + msg.song.name + \"》(\" + msg.song.singer + \")\", '', {\n            // \ttitle: \"正在播放\",\n            // });\n          } else if (msg.at.user_id == that.userInfo.user_id) {\n            // plus.push.createMessage(decodeURIComponent(msg.user.user_name) + \" 送给你的《\" + msg.song.name + \"》(\" + msg.song.singer +\n            // \t\")\", '', {\n            // \t\ttitle: \"正在播放\",\n            // \t});\n          }\n          break;\n        default:}\n\n      that.autoScroll();\n    },\n    playMusic: function playMusic(msg) {\n      var that = this;\n      if (that.song.song && that.song.song.mid == msg.song.mid) {\n        return;\n      }\n      that.song = msg;\n      that.bgAudioMannager.title = msg.song.name + \" - \" + msg.song.singer;\n      that.bgAudioMannager.singer = \"点歌人:\" + decodeURIComponent(msg.user.user_name) + ' (' + that.room.room_name + ')';\n      that.bgAudioMannager.coverImgUrl = msg.song.pic;\n      that.bgAudioMannager.src = \"https://api.bbbug.com/api/song/playurl?mid=\" + msg.song.mid;\n      that.bgAudioMannager.play();\n    },\n    sendEmoji: function sendEmoji(index) {\n      var that = this;\n      var url = \"https://cdn.bbbug.com/images/emoji/\" + index + \".png\";\n      that.app.request({\n        url: \"message/send\",\n        data: {\n          where: 'channel',\n          to: that.room_id,\n          type: 'img',\n          msg: url,\n          resource: url },\n\n        success: function success(res) {\n          that.showEmojiBox = false;\n        } });\n\n    },\n    doSendMessage: function doSendMessage(e) {\n      var that = this;\n      var message_old = that.messageObj.message;\n      var message = message_old;\n      that.messageObj.message = '';\n      if (message_old) {\n        if (that.messageObj.at) {\n          message = message_old.replace(\"@\" + decodeURIComponent(that.messageObj.at.user_name),\n          '');\n        }\n        that.app.request({\n          url: \"message/send\",\n          data: {\n            type: 'text',\n            where: \"channel\",\n            to: that.room_id,\n            msg: encodeURIComponent(message),\n            at: that.messageObj.at },\n\n          success: function success(res) {\n            that.messageObj.at = false;\n          },\n          error: function error(res) {\n            that.messageObj.message = message_old;\n            uni.showModal({\n              title: '发送失败',\n              content: res.msg,\n              showCancel: false });\n\n          } });\n\n      }\n    },\n    randomString: function randomString(len) {\n      len = len || 32;\n      var $chars = 'ABCDEFGHJKMNPQRSTWXYZabcdefhijkmnprstwxyz2345678'; /****默认去掉了容易混淆的字符oOLl,9gq,Vv,Uu,I1****/\n      var maxPos = $chars.length;\n      var pwd = '';\n      for (i = 0; i < len; i++) {\n        pwd += $chars.charAt(Math.floor(Math.random() * maxPos));\n      }\n      return pwd;\n    },\n    addMessageToList: function addMessageToList(msg) {\n      var that = this;\n      if (that.historyList.length > 100) {\n        that.historyList.shift();\n      }\n      msg.view_id = that.getRanId();\n      that.historyList.push(msg);\n      that.autoScroll();\n    },\n    getRanId: function getRanId() {\n      return new Date().valueOf() + parseInt(Math.random() * 100000);\n    },\n    urldecode: function urldecode(str) {\n      return decodeURIComponent(str);\n    },\n    connectWebsocket: function connectWebsocket() {\n      var that = this;\n      if (that.app.webSocket.isConnected) {\n        __f__(\"log\", \"需要斷開\", \" at pages/index/index.nvue:814\");\n        that.app.webSocket.closeWss();\n        setTimeout(function () {\n          that.connectWebsocket();\n        }, 1000);\n        return;\n      }\n      that.app.webSocket.connectWss();\n      uni.hideLoading();\n      that.addSystemMessage(that.room.room_notice || '服务器连接成功');\n      that.showPasswordForm = false;\n      that.showRoomPage = true;\n      that.app.request({\n        url: 'message/getMessageList',\n        data: {\n          room_id: that.room_id,\n          per_page: 100 },\n\n        success: function success(res) {\n          that.historyList = [];\n          for (var _i2 = 0; _i2 < res.data.length; _i2++) {\n            var _obj = false;\n            try {\n              _obj = JSON.parse(decodeURIComponent(res.data[_i2].message_content));\n            } catch (error) {}\n            if (!_obj) {\n              continue;\n            }\n            if (_obj.type == \"text\") {\n              if (_obj.at) {\n                _obj.content = '@' + _obj.at.user_name + \" \" + _obj.content;\n              }\n            }\n            _obj.time = res.data[_i2].message_createtime;\n            _obj.view_id = that.getRanId() + \"_\" + _i2;\n            that.historyList.unshift(_obj);\n          }\n          that.addSystemMessage(that.room.room_notice || \"欢迎来到\" + that.room.room_name);\n          that.autoScroll();\n        },\n\n        error: function error(res) {\n          __f__(\"log\", res, \" at pages/index/index.nvue:856\");\n        } });\n\n\n    },\n    getRoomInfo: function getRoomInfo() {\n      var that = this;\n      uni.showLoading({\n        title: '连接房间服务器' });\n\n      that.app.request({\n        url: 'room/getRoomInfo',\n        data: {\n          room_id: that.room_id,\n          room_password: that.password },\n\n        success: function success(res) {\n          that.room = res.data;\n          uni.setNavigationBarTitle({\n            title: that.room.room_name });\n\n          that.app.request({\n            url: 'room/getWebsocketUrl',\n            data: {\n              channel: that.room_id },\n\n            success: function success(res) {\n              that.app.webSocket.config.wssUrl = 'wss://websocket.bbbug.com/?account=' +\n              res.data.account + '&channel=' +\n              res.data.channel + '&ticket=' + res.data.ticket;\n              that.connectWebsocket();\n            },\n\n            error: function error(res) {\n              __f__(\"log\", res, \" at pages/index/index.nvue:890\");\n            } });\n\n        },\n        error: function error(res) {\n          uni.hideLoading();\n          if (res.code == 403) {\n            uni.setNavigationBarTitle({\n              title: '密码房' });\n\n            that.showPasswordForm = true;\n            that.showRoomPage = false;\n            if (that.password) {\n              uni.showModal({\n                showCancel: false,\n                title: '进入失败',\n                content: res.msg,\n                success: function success() {} });\n\n            }\n          } else {\n            uni.showModal({\n              showCancel: false,\n              title: '进入失败',\n              content: res.msg,\n              success: function success() {\n                uni.navigateBack();\n              } });\n\n          }\n        } });\n\n    },\n    addSystemMessage: function addSystemMessage(msg) {var color = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '#999';var bg = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 'tansparent';\n      var that = this;\n      that.historyList.push({\n        type: \"system\",\n        content: msg,\n        bg: bg,\n        view_id: that.getRanId(),\n        color: color });\n\n      that.autoScroll();\n    },\n    doOpenPage: function doOpenPage(page) {\n      var that = this;\n      switch (page) {\n        case 'addSong':\n          uni.navigateTo({\n            url: '../song/search?room_id=' + that.room_id });\n\n          break;\n        case 'mySong':\n          uni.navigateTo({\n            url: '../song/my?room_id=' + that.room_id });\n\n          break;\n        case 'songList':\n          uni.navigateTo({\n            url: '../song/list?room_id=' + that.room_id });\n\n          break;\n        case 'onLine':\n          var isMaster = 0;\n          if (that.userInfo.user_admin || that.room.room_user == that.userInfo.user_id) {\n            isMaster = 1;\n          }\n          uni.navigateTo({\n            url: '../room/online?room_id=' + that.room_id + \"&room_admin=\" + isMaster });\n\n          break;\n        default:}\n\n    },\n    showMenuUserHead: function showMenuUserHead(msg) {\n      var user = msg.user;\n      var that = this;\n      var menu = ['进入主页', '@一下Ta', '送歌给Ta'];\n      if (that.userInfo.user_admin || that.room.room_user == that.userInfo.user_id) {\n        menu = ['进入主页', '@一下Ta', '送歌给Ta', '撤回消息', '禁止点歌', '禁止发言', '全部解禁'];\n      } else if (user.user_id == that.userInfo.user_id) {\n        //发消息人是自己\n        menu = ['进入主页', '@一下Ta', '送歌给Ta', '撤回消息'];\n      } else {\n        //其他人的消息\n        menu = ['进入主页', '@一下Ta', '送歌给Ta'];\n      }\n\n      uni.showActionSheet({\n        itemList: menu,\n        success: function success(res) {\n          switch (menu[res.tapIndex]) {\n            case '送歌给Ta':\n              uni.navigateTo({\n                url: '../song/search?room_id=' + that.room_id + \"&at=\" + user.user_id + \"&name=\" + user.user_name });\n\n              break;\n            case '@一下Ta':\n              that.doAtUser(user);\n              break;\n            case '全部解禁':\n              that.app.request({\n                url: 'user/removeban',\n                data: {\n                  room_id: that.room_id,\n                  user_id: user.user_id },\n\n                loading: \"解禁中\",\n                success: function success(res) {\n                  uni.showModal({\n                    title: '解禁成功',\n                    content: res.msg,\n                    showCancel: false,\n                    success: function success() {} });\n\n                } });\n\n              break;\n            case '撤回消息':\n              __f__(\"log\", msg, \" at pages/index/index.nvue:1009\");\n              that.app.request({\n                url: \"message/back\",\n                data: {\n                  message_id: msg.message_id,\n                  room_id: that.room_id },\n\n                success: function success() {} });\n\n              break;\n            case '禁止发言':\n              that.app.request({\n                url: 'user/shutdown',\n                data: {\n                  room_id: that.room_id,\n                  user_id: user.user_id },\n\n                loading: \"禁言中\",\n                success: function success(res) {\n                  uni.showModal({\n                    title: '禁言成功',\n                    content: res.msg,\n                    showCancel: false,\n                    success: function success() {} });\n\n                } });\n\n              break;\n            case '禁止点歌':\n              that.app.request({\n                url: 'user/songdown',\n                data: {\n                  room_id: that.room_id,\n                  user_id: user.user_id },\n\n                loading: \"禁歌中\",\n                success: function success(res) {\n                  uni.showModal({\n                    title: '禁歌成功',\n                    content: res.msg,\n                    showCancel: false,\n                    success: function success() {} });\n\n                } });\n\n              break;\n            default:\n              uni.showModal({\n                title: \"BBBUG\",\n                content: menu[res.tapIndex] + \"即将上线\",\n                showCancel: false });}\n\n\n        } });\n\n    },\n    getStaticUrl: function getStaticUrl(url) {\n      if (url.indexOf('https://') > -1 || url.indexOf('http://') > -1) {\n        return url;\n      } else {\n        return 'https://cdn.bbbug.com/uploads/' + url;\n      }\n    },\n    doTouch: function doTouch(user) {\n      var that = this;\n      that.request({\n        url: \"message/touch\",\n        data: {\n          at: user.user_id,\n          room_id: that.room_id },\n\n        success: function success(res) {} });\n\n    },\n    chooseImage: function chooseImage() {\n      var that = this;\n      uni.chooseImage({\n        sizeType: \"compressed\",\n        sourceType: ['album'],\n        count: 1,\n        fail: function fail(res) {\n          __f__(\"log\", res, \" at pages/index/index.nvue:1090\");\n        },\n        success: function success(res) {\n          uni.showLoading({\n            title: '处理中' });\n\n          uni.compressImage({\n            src: res.tempFilePaths[0],\n            quality: 50,\n            success: function success(res) {\n              uni.uploadFile({\n                url: that.app.globalData.request.apiUrl + \"attach/uploadimage\",\n                filePath: res.tempFilePath,\n                name: 'file',\n                formData: that.app.globalData.request.baseData,\n                success: function success(uploadFileRes) {\n                  uni.hideLoading();\n                  var response = {};\n                  try {\n                    response = JSON.parse(uploadFileRes.data);\n                  } catch (err) {\n                    uni.showModal({\n                      showCancel: false,\n                      title: '上传失败',\n                      content: '服务器发生错误',\n                      success: function success() {} });\n\n                  }\n                  if (response.code == 200) {\n                    that.app.request({\n                      url: \"message/send\",\n                      data: {\n                        where: 'channel',\n                        to: that.room_id,\n                        type: 'img',\n                        msg: response.data.attach_thumb,\n                        resource: response.data.attach_path },\n\n                      success: function success(res) {},\n                      error: function error(res) {\n                        that.messageObj.message = message_old;\n                        uni.showModal({\n                          title: '发送失败',\n                          content: res.msg,\n                          showCancel: false });\n\n                      } });\n\n                  } else {\n                    uni.showModal({\n                      showCancel: false,\n                      title: '上传失败',\n                      content: response.msg,\n                      success: function success() {} });\n\n                  }\n                } });\n\n            } });\n\n        } });\n\n    },\n    fullViewImage: function fullViewImage(url) {\n      uni.previewImage({\n        urls: [url],\n        longPressActions: {\n          itemList: ['保存图片', '举报图片'],\n          success: function success(data) {},\n          fail: function fail(err) {} } });\n\n\n    } } };exports.default = _default;\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/vue-cli-plugin-uni/lib/format-log.js */ 9)[\"default\"]))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInVuaS1hcHA6Ly8vcGFnZXMvaW5kZXgvaW5kZXgubnZ1ZSJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQWdYQTtBQUNBLE1BREEsa0JBQ0E7QUFDQTtBQUNBLGdCQURBO0FBRUEsdUJBRkE7QUFHQSwyQkFIQTtBQUlBLHlCQUpBO0FBS0EseUJBTEE7QUFNQSx3QkFOQTtBQU9BLDZCQVBBO0FBUUEsbUJBUkE7QUFTQSxvQkFUQTtBQVVBO0FBQ0Esa0JBREE7QUFFQSxrQkFGQSxFQVZBOztBQWNBLGdCQWRBO0FBZUEsaUJBZkE7QUFnQkEsa0JBaEJBO0FBaUJBLHNCQWpCQTtBQWtCQSxxQkFsQkE7QUFtQkE7QUFDQSxtQkFEQTtBQUVBLGlCQUZBO0FBR0Esb0JBSEEsRUFuQkE7O0FBd0JBLHlCQXhCQTs7QUEwQkEsR0E1QkE7QUE2QkEsUUE3QkEsb0JBNkJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFEQSxtQkFDQSxRQURBLEVBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FKQTs7QUFNQTtBQUNBO0FBQ0E7QUFDQSxPQUZBLENBRUE7QUFDQTtBQUNBO0FBQ0EsS0FOQTtBQU9BO0FBQ0E7QUFDQSxlQURBLG1CQUNBLFFBREEsRUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUpBOztBQU1BLEtBUEE7QUFRQTtBQUNBO0FBQ0EsS0FGQTtBQUdBO0FBQ0E7QUFDQTtBQUNBLHFCQURBOztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBWEE7QUFZQTtBQUNBO0FBQ0E7QUFDQSxLQUhBO0FBSUE7QUFDQTtBQUNBLGtCQURBO0FBRUEsa0JBRkE7O0FBSUE7QUFDQTtBQUNBLDBCQURBOztBQUdBLEtBVEE7QUFVQSxHQXJGQTtBQXNGQSxRQXRGQSxvQkFzRkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQWhHQTtBQWlHQSwwQkFqR0Esb0NBaUdBLEdBakdBLEVBaUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwrQkFEQTs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBRkEsTUFFQTtBQUNBO0FBQ0EsZ0NBREE7O0FBR0E7QUFDQTtBQUNBLGNBZkE7O0FBaUJBLEdBcEhBO0FBcUhBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FKQTtBQUtBLGtCQUxBLDRCQUtBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQWJBO0FBY0EsaUJBZEEsMkJBY0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBdEJBO0FBdUJBLGFBdkJBLHVCQXVCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0EvQkE7QUFnQ0Esa0JBaENBLDRCQWdDQTtBQUNBO0FBQ0E7QUFDQSxXQURBLEVBQ0EsSUFEQTs7QUFHQTtBQUNBO0FBQ0EsWUFEQSxFQUNBLElBREEsRUFDQSxRQURBOztBQUdBO0FBQ0E7QUFDQSxzQkFEQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG9DQURBO0FBRUE7QUFDQSx1Q0FEQTtBQUVBLGlEQUZBLEVBRkE7O0FBTUEsOEJBTkE7QUFPQTtBQUNBO0FBQ0EsaUNBREE7QUFFQSxvQ0FGQTtBQUdBLHFDQUhBO0FBSUEsa0RBSkE7O0FBTUEsaUJBZEE7O0FBZ0JBO0FBQ0E7QUFDQTtBQUNBLDZCQURBO0FBRUEsd0NBRkE7QUFHQSxnQ0FIQTtBQUlBLHVDQUpBO0FBS0EsaUNBTEE7QUFNQTtBQUNBO0FBQ0E7QUFDQSxzQ0FEQTtBQUVBO0FBQ0EsNkNBREE7QUFFQSwrQ0FGQSxFQUZBOztBQU1BLG9EQU5BOztBQVFBO0FBQ0EsaUJBakJBOztBQW1CQTtBQUNBO0FBQ0E7QUFDQSxnQ0FEQTtBQUVBO0FBQ0EsdUNBREE7QUFFQSx5Q0FGQSxFQUZBOztBQU1BO0FBQ0E7QUFDQTtBQUNBLDhCQURBO0FBRUEsOEJBRkE7O0FBSUE7QUFDQTtBQUNBLGdDQURBO0FBRUEsb0NBRkE7QUFHQSxxQ0FIQTtBQUlBLGtEQUpBOztBQU1BLGlCQW5CQTs7QUFxQkE7QUFDQTtBQUNBO0FBQ0EscUNBREE7QUFFQTtBQUNBLHVDQURBO0FBRUEseUNBRkEsRUFGQTs7QUFNQTtBQUNBO0FBQ0EsaUNBREE7O0FBR0EsaUJBVkE7O0FBWUE7QUFDQSxvQkE3RUE7O0FBK0VBLFNBcEZBOztBQXNGQSxLQWhJQTtBQWlJQSxZQWpJQSxvQkFpSUEsSUFqSUEsRUFpSUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBdElBO0FBdUlBLGNBdklBLHdCQXVJQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FGQTtBQUdBLEtBN0lBO0FBOElBLGtCQTlJQSw0QkE4SUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBbkpBO0FBb0pBLHFCQXBKQSw2QkFvSkEsR0FwSkEsRUFvSkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsNkRBREE7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGdEQURBLEVBQ0EsTUFEQTtBQUVBO0FBQ0E7QUFDQSw2REFEQTs7QUFHQTtBQUNBLFdBUkEsTUFRQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGdCQURBOztBQUdBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsZUFEQTs7QUFHQTtBQUNBO0FBQ0E7QUFDQSxlQURBOztBQUdBO0FBQ0E7QUFDQTtBQUNBLGVBREE7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUpBLE1BSUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxnQkFwRkE7O0FBc0ZBO0FBQ0EsS0E3T0E7QUE4T0EsYUE5T0EscUJBOE9BLEdBOU9BLEVBOE9BO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQXpQQTtBQTBQQSxhQTFQQSxxQkEwUEEsS0ExUEEsRUEwUEE7QUFDQTtBQUNBO0FBQ0E7QUFDQSwyQkFEQTtBQUVBO0FBQ0EsMEJBREE7QUFFQSwwQkFGQTtBQUdBLHFCQUhBO0FBSUEsa0JBSkE7QUFLQSx1QkFMQSxFQUZBOztBQVNBLGVBVEEsbUJBU0EsR0FUQSxFQVNBO0FBQ0E7QUFDQSxTQVhBOztBQWFBLEtBMVFBO0FBMlFBLGlCQTNRQSx5QkEyUUEsQ0EzUUEsRUEyUUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFlBREE7QUFFQTtBQUNBO0FBQ0EsNkJBREE7QUFFQTtBQUNBLHdCQURBO0FBRUEsNEJBRkE7QUFHQSw0QkFIQTtBQUlBLDRDQUpBO0FBS0Esa0NBTEEsRUFGQTs7QUFTQTtBQUNBO0FBQ0EsV0FYQTtBQVlBO0FBQ0E7QUFDQTtBQUNBLDJCQURBO0FBRUEsOEJBRkE7QUFHQSwrQkFIQTs7QUFLQSxXQW5CQTs7QUFxQkE7QUFDQSxLQTNTQTtBQTRTQSxnQkE1U0Esd0JBNFNBLEdBNVNBLEVBNFNBO0FBQ0E7QUFDQSxzRUFGQSxDQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FyVEE7QUFzVEEsb0JBdFRBLDRCQXNUQSxHQXRUQSxFQXNUQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0E5VEE7QUErVEEsWUEvVEEsc0JBK1RBO0FBQ0E7QUFDQSxLQWpVQTtBQWtVQSxhQWxVQSxxQkFrVUEsR0FsVUEsRUFrVUE7QUFDQTtBQUNBLEtBcFVBO0FBcVVBLG9CQXJVQSw4QkFxVUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUZBLEVBRUEsSUFGQTtBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxQ0FEQTtBQUVBO0FBQ0EsK0JBREE7QUFFQSx1QkFGQSxFQUZBOztBQU1BO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBRkEsQ0FFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQTNCQTs7QUE2QkE7QUFDQTtBQUNBLFNBL0JBOzs7QUFrQ0EsS0F0WEE7QUF1WEEsZUF2WEEseUJBdVhBO0FBQ0E7QUFDQTtBQUNBLHdCQURBOztBQUdBO0FBQ0EsK0JBREE7QUFFQTtBQUNBLCtCQURBO0FBRUEsc0NBRkEsRUFGQTs7QUFNQSxlQU5BLG1CQU1BLEdBTkEsRUFNQTtBQUNBO0FBQ0E7QUFDQSxzQ0FEQTs7QUFHQTtBQUNBLHVDQURBO0FBRUE7QUFDQSxtQ0FEQSxFQUZBOztBQUtBO0FBQ0E7QUFDQSw4QkFEQSxHQUNBLFdBREE7QUFFQSw4QkFGQSxHQUVBLFVBRkEsR0FFQSxlQUZBO0FBR0E7QUFDQSxhQVZBOztBQVlBO0FBQ0E7QUFDQSxhQWRBOztBQWdCQSxTQTNCQTtBQTRCQSxhQTVCQSxpQkE0QkEsR0E1QkEsRUE0QkE7QUFDQTtBQUNBO0FBQ0E7QUFDQSwwQkFEQTs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlDQURBO0FBRUEsNkJBRkE7QUFHQSxnQ0FIQTtBQUlBLDhDQUpBOztBQU1BO0FBQ0EsV0FkQSxNQWNBO0FBQ0E7QUFDQSwrQkFEQTtBQUVBLDJCQUZBO0FBR0EsOEJBSEE7QUFJQTtBQUNBO0FBQ0EsZUFOQTs7QUFRQTtBQUNBLFNBdERBOztBQXdEQSxLQXBiQTtBQXFiQSxvQkFyYkEsNEJBcWJBLEdBcmJBLEVBcWJBO0FBQ0E7QUFDQTtBQUNBLHNCQURBO0FBRUEsb0JBRkE7QUFHQSxjQUhBO0FBSUEsZ0NBSkE7QUFLQSxvQkFMQTs7QUFPQTtBQUNBLEtBL2JBO0FBZ2NBLGNBaGNBLHNCQWdjQSxJQWhjQSxFQWdjQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EseURBREE7O0FBR0E7QUFDQTtBQUNBO0FBQ0EscURBREE7O0FBR0E7QUFDQTtBQUNBO0FBQ0EsdURBREE7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxRkFEQTs7QUFHQTtBQUNBLGdCQXpCQTs7QUEyQkEsS0E3ZEE7QUE4ZEEsb0JBOWRBLDRCQThkQSxHQTlkQSxFQThkQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUZBLE1BRUE7QUFDQTtBQUNBO0FBQ0EsT0FIQSxNQUdBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0Esc0JBREE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlIQURBOztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFDQURBO0FBRUE7QUFDQSx1Q0FEQTtBQUVBLHVDQUZBLEVBRkE7O0FBTUEsOEJBTkE7QUFPQTtBQUNBO0FBQ0EsaUNBREE7QUFFQSxvQ0FGQTtBQUdBLHFDQUhBO0FBSUEsa0RBSkE7O0FBTUEsaUJBZEE7O0FBZ0JBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsbUNBREE7QUFFQTtBQUNBLDRDQURBO0FBRUEsdUNBRkEsRUFGQTs7QUFNQSx1QkFOQSxxQkFNQSxFQU5BOztBQVFBO0FBQ0E7QUFDQTtBQUNBLG9DQURBO0FBRUE7QUFDQSx1Q0FEQTtBQUVBLHVDQUZBLEVBRkE7O0FBTUEsOEJBTkE7QUFPQTtBQUNBO0FBQ0EsaUNBREE7QUFFQSxvQ0FGQTtBQUdBLHFDQUhBO0FBSUEsa0RBSkE7O0FBTUEsaUJBZEE7O0FBZ0JBO0FBQ0E7QUFDQTtBQUNBLG9DQURBO0FBRUE7QUFDQSx1Q0FEQTtBQUVBLHVDQUZBLEVBRkE7O0FBTUEsOEJBTkE7QUFPQTtBQUNBO0FBQ0EsaUNBREE7QUFFQSxvQ0FGQTtBQUdBLHFDQUhBO0FBSUEsa0RBSkE7O0FBTUEsaUJBZEE7O0FBZ0JBO0FBQ0E7QUFDQTtBQUNBLDhCQURBO0FBRUEsb0RBRkE7QUFHQSxpQ0FIQSxJQTNFQTs7O0FBaUZBLFNBcEZBOztBQXNGQSxLQWxrQkE7QUFta0JBLGdCQW5rQkEsd0JBbWtCQSxHQW5rQkEsRUFta0JBO0FBQ0E7QUFDQTtBQUNBLE9BRkEsTUFFQTtBQUNBO0FBQ0E7QUFDQSxLQXprQkE7QUEwa0JBLFdBMWtCQSxtQkEwa0JBLElBMWtCQSxFQTBrQkE7QUFDQTtBQUNBO0FBQ0EsNEJBREE7QUFFQTtBQUNBLDBCQURBO0FBRUEsK0JBRkEsRUFGQTs7QUFNQSxlQU5BLG1CQU1BLEdBTkEsRUFNQSxFQU5BOztBQVFBLEtBcGxCQTtBQXFsQkEsZUFybEJBLHlCQXFsQkE7QUFDQTtBQUNBO0FBQ0EsOEJBREE7QUFFQSw2QkFGQTtBQUdBLGdCQUhBO0FBSUE7QUFDQTtBQUNBLFNBTkE7QUFPQTtBQUNBO0FBQ0Esd0JBREE7O0FBR0E7QUFDQSxxQ0FEQTtBQUVBLHVCQUZBO0FBR0E7QUFDQTtBQUNBLDhFQURBO0FBRUEsMENBRkE7QUFHQSw0QkFIQTtBQUlBLDhEQUpBO0FBS0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG1CQUZBLENBRUE7QUFDQTtBQUNBLHVDQURBO0FBRUEsbUNBRkE7QUFHQSx3Q0FIQTtBQUlBLG9EQUpBOztBQU1BO0FBQ0E7QUFDQTtBQUNBLHlDQURBO0FBRUE7QUFDQSx3Q0FEQTtBQUVBLHdDQUZBO0FBR0EsbUNBSEE7QUFJQSx1REFKQTtBQUtBLDJEQUxBLEVBRkE7O0FBU0EsdURBVEE7QUFVQTtBQUNBO0FBQ0E7QUFDQSx1Q0FEQTtBQUVBLDBDQUZBO0FBR0EsMkNBSEE7O0FBS0EsdUJBakJBOztBQW1CQSxtQkFwQkEsTUFvQkE7QUFDQTtBQUNBLHVDQURBO0FBRUEsbUNBRkE7QUFHQSwyQ0FIQTtBQUlBLG9EQUpBOztBQU1BO0FBQ0EsaUJBOUNBOztBQWdEQSxhQXBEQTs7QUFzREEsU0FqRUE7O0FBbUVBLEtBMXBCQTtBQTJwQkEsaUJBM3BCQSx5QkEycEJBLEdBM3BCQSxFQTJwQkE7QUFDQTtBQUNBLG1CQURBO0FBRUE7QUFDQSxvQ0FEQTtBQUVBLDRDQUZBO0FBR0EscUNBSEEsRUFGQTs7O0FBUUEsS0FwcUJBLEVBckhBLEUiLCJmaWxlIjoiOC5qcyIsInNvdXJjZXNDb250ZW50IjpbIjxzdHlsZT5cclxuXHQudW5pYXBwe1xyXG5cdFx0cG9zaXRpb246IGZpeGVkO1xyXG5cdFx0bGVmdDogMDtcclxuXHRcdHJpZ2h0OiAwO1xyXG5cdFx0dG9wOiAwO1xyXG5cdFx0Ym90dG9tOiAwO1xyXG5cdH1cclxuXHQuY2hhdElucHV0IHtcclxuXHRcdHBvc2l0aW9uOiBmaXhlZDtcclxuXHRcdGxlZnQ6IDA7XHJcblx0XHRib3R0b206IDA7XHJcblx0XHRyaWdodDogMDtcclxuXHRcdGhlaWdodDogNTBweDtcclxuXHRcdGJhY2tncm91bmQtY29sb3I6ICNGRkZGRkY7XHJcblx0XHRmb250LXNpemU6IDE2cHg7XHJcblx0XHRwYWRkaW5nOiA1cHggMTBweDsgXHJcblx0XHRwYWRkaW5nLWxlZnQ6IDUwcHg7XHJcblx0fVxyXG5cclxuXHQuaGlzdG9yeUxpc3Qge1xyXG5cdFx0cG9zaXRpb246IGZpeGVkO1xyXG5cdFx0bGVmdDogMDtcclxuXHRcdHJpZ2h0OiAwO1xyXG5cdFx0Ym90dG9tOiAwO1xyXG5cdFx0dG9wOiAwO1xyXG5cdFx0YmFja2dyb3VuZC1jb2xvcjogI0Y1RjVGNTtcclxuXHR9XHJcblx0Lml0ZW1fc3lzdGVte1xyXG5cdFx0dGV4dC1hbGlnbjogY2VudGVyO1xyXG5cdFx0bWFyZ2luLXRvcDogMjBweDtcclxuXHRcdG1hcmdpbi1sZWZ0OiAyMHB4O1xyXG5cdFx0bWFyZ2luLXJpZ2h0OiAyMHB4O1xyXG5cdH1cclxuXHQuaXRlbV9zeXN0ZW1fdGV4dHtcclxuXHRcdGZvbnQtc2l6ZTogMTJweDtcclxuXHRcdGNvbG9yOiAjYWFhO1xyXG5cdFx0dGV4dC1hbGlnbjogY2VudGVyO1xyXG5cdH1cclxuXHQuaXRlbXtcclxuXHRcdGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcblx0XHRtYXJnaW46IDEwcHg7XHJcblx0XHRtYXJnaW4tdG9wOiAyMHB4O1xyXG5cdFx0anVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xyXG5cdFx0YWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XHJcblx0fVxyXG5cdC5pdGVtX21pbmV7XHJcblx0XHRmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG5cdFx0bWFyZ2luOiAxMHB4O1xyXG5cdFx0bWFyZ2luLXRvcDogMjBweDtcclxuXHRcdHRleHQtYWxpZ246IHJpZ2h0O1xyXG5cdFx0anVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcclxuXHRcdGFsaWduLWl0ZW1zOiBmbGV4LWVuZDtcclxuXHR9XHJcblx0LnVzZXJfaGVhZF9ib3h7XHJcblx0XHRmbGV4LWRpcmVjdGlvbjogcm93O1xyXG5cdH1cclxuXHQudXNlcl9oZWFkX2ltYWdle1xyXG5cdFx0d2lkdGg6IDUwcHg7XHJcblx0XHRoZWlnaHQ6IDUwcHg7XHJcblx0XHRib3JkZXItcmFkaXVzOiAxMHB4O1xyXG5cdFx0Ym9yZGVyLWNvbG9yOiAjRkZGRkZGO1xyXG5cdFx0Ym9yZGVyLXN0eWxlOiBzb2xpZDtcclxuXHRcdGJvcmRlci13aWR0aDogMXB4O1xyXG5cdH1cclxuXHQuY2hhdF9pdGVtX2JvZHlfbGVmdHtcclxuXHRcdHRleHQtYWxpZ246IGxlZnQ7XHJcblx0XHRqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XHJcblx0XHRwYWRkaW5nLWxlZnQ6IDYwcHg7XHJcblx0XHRwYWRkaW5nLXJpZ2h0OiA4MHB4O1xyXG5cdFx0bWFyZ2luLXRvcDogLTMwcHg7XHJcblx0XHRmbGV4OiAxO1xyXG5cdFx0ZmxleC13cmFwOiB3cmFwO1xyXG5cdH1cclxuXHQuY2hhdF9pdGVtX2JvZHlfcmlnaHR7XHJcblx0XHR0ZXh0LWFsaWduOiByaWdodDtcclxuXHRcdHBhZGRpbmctbGVmdDogODBweDtcclxuXHRcdHBhZGRpbmctcmlnaHQ6IDYwcHg7XHJcblx0XHRtYXJnaW4tdG9wOiAtMzBweDtcclxuXHRcdGZsZXg6IDE7XHJcblx0XHRmbGV4LXdyYXA6IHdyYXAtcmV2ZXJzZTtcclxuXHR9XHJcblx0LmNoYXRfaXRlbV91c2VyX25hbWV7XHJcblx0XHRmb250LXNpemU6IDE0cHg7XHJcblx0XHRjb2xvcjogIzk5OTtcclxuXHRcdG1hcmdpbi10b3A6IDNweDtcclxuXHRcdG1hcmdpbi1sZWZ0OiAxMHB4O1xyXG5cdFx0bWFyZ2luLXJpZ2h0OiAxMHB4O1xyXG5cdH1cclxuXHQuY2hhdF9pdGVtX3RleHR7XHJcblx0XHRtYXJnaW4tdG9wOiAxMHB4O1xyXG5cdFx0Ym9yZGVyLXJhZGl1czogMTBweDtcclxuXHRcdGJhY2tncm91bmQtY29sb3I6ICNGRkZGRkY7XHJcblx0XHRjb2xvcjogIzMzMztcclxuXHRcdHBhZGRpbmc6IDEwcHg7XHJcblx0XHRmb250LXNpemU6IDE2cHg7XHJcblx0fVxyXG5cdC5jaGF0X2l0ZW1faW1hZ2VfYm94e1xyXG5cdFx0bWFyZ2luLXRvcDogMTBweDtcclxuXHRcdGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcblx0XHRwYWRkaW5nOiAycHg7XHJcblx0XHRiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcclxuXHR9XHJcblx0LmNoYXRfaXRlbV9pbWFnZV9jb250ZW50e1xyXG5cdFx0d2lkdGg6IDEwMCU7XHJcblx0XHRoZWlnaHQ6IDEwMCU7XHJcblx0fVxyXG5cdC5wbGF5ZXJ7XHJcblx0XHRwb3NpdGlvbjogZml4ZWQ7XHJcblx0XHRyaWdodDogMTBweDtcclxuXHRcdHRvcDogMTBweDtcclxuXHRcdHotaW5kZXg6MTAwO1xyXG5cdFx0ZmxleC1kaXJlY3Rpb246IHJvdztcclxuXHRcdGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwwLDAsMC42KTtcclxuXHRcdGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcblx0XHRwYWRkaW5nOiA1cHg7XHJcblx0fVxyXG5cdC5wbGF5ZXJfaW1hZ2V7XHJcblx0XHR3aWR0aDogNDBweDtcclxuXHRcdGhlaWdodDogNDBweDtcclxuXHRcdGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcblx0fVxyXG5cdC5wbGF5ZXJfaW5mb3tcclxuXHRcdHBhZGRpbmc6NXB4O1xyXG5cdFx0cGFkZGluZy1yaWdodDogMTBweDtcclxuXHR9XHJcblx0LnBsYXllcl9zb25ne1xyXG5cdFx0Zm9udC1zaXplOiAxNHB4O1xyXG5cdFx0Y29sb3I6I0ZGRkZGRjtcclxuXHR9XHJcblx0LnBsYXllcl91c2Vye1xyXG5cdFx0Zm9udC1zaXplOiAxMnB4O1xyXG5cdFx0Y29sb3I6I2NjYztcclxuXHRcdG1hcmdpbi10b3A6IDVweDtcclxuXHR9XHJcblx0LmNoYXRNZW51e1xyXG5cdH1cclxuXHQuY2hhdE1lbnVfaW1hZ2V7XHJcblx0XHRwb3NpdGlvbjogZml4ZWQ7XHJcblx0XHRyaWdodDogMTBweDtcclxuXHRcdGJvdHRvbTogMTBweDtcclxuXHRcdHdpZHRoOiAzNnB4O1xyXG5cdFx0aGVpZ2h0OiAzNnB4O1xyXG5cdH1cclxuXHQuY2hhdE1lbnVfZW1vaml7XHJcblx0XHRwb3NpdGlvbjogZml4ZWQ7XHJcblx0XHRsZWZ0OiAxMHB4O1xyXG5cdFx0Ym90dG9tOiAxMHB4O1xyXG5cdFx0d2lkdGg6IDMycHg7XHJcblx0XHRoZWlnaHQ6IDMycHg7XHJcblx0fVxyXG5cdC5tZW51Qm9keXtcclxuXHRcdGZsZXgtZGlyZWN0aW9uOiByb3c7XHJcblx0fVxyXG5cdC5tZW51Qm94IHtcclxuXHRcdHotaW5kZXg6IDEwO1xyXG5cdFx0cG9zaXRpb246IGZpeGVkO1xyXG5cdFx0bGVmdDogMTBweDtcclxuXHRcdGJvdHRvbTogMDtcclxuXHRcdHJpZ2h0OiAxMHB4O1xyXG5cdFx0YmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLDAsMCwwLjYpO1xyXG5cdFx0Ym9yZGVyLXJhZGl1czogMTBweDtcclxuXHRcdGZsZXgtZGlyZWN0aW9uOiByb3c7XHJcblx0XHRwYWRkaW5nOiAxMHB4O1xyXG5cdH1cclxuXHQubWVudU1haW57XHJcblx0XHR0ZXh0LWFsaWduOiBjZW50ZXI7XHJcblx0XHRqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuXHRcdGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcblx0XHRiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xyXG5cdFx0Y29sb3I6ICM2NjY7XHJcblx0XHRwYWRkaW5nOiAxMHB4O1xyXG5cdFx0aGVpZ2h0OiA2MHB4O1xyXG5cdFx0d2lkdGg6IDYwcHg7XHJcblx0XHRib3JkZXItcmFkaXVzOiAxMHB4O1xyXG5cdH1cclxuXHQubWVudUl0ZW17XHJcblx0XHRtYXJnaW46IDVweDtcclxuXHRcdHRleHQtYWxpZ246IGNlbnRlcjtcclxuXHRcdGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG5cdFx0YWxpZ24taXRlbXM6IGNlbnRlcjtcclxuXHR9XHJcblx0Lm1lbnVUaXRsZSB7XHJcblx0XHR0ZXh0LWFsaWduOiBjZW50ZXI7XHJcblx0XHRmb250LXNpemU6IDEycHg7XHJcblx0XHRwYWRkaW5nOiAxMHB4O1xyXG5cdFx0Y29sb3I6ICNGRkZGRkY7XHJcblx0fVxyXG5cdC5tZW51SW1hZ2V7XHJcblx0XHR3aWR0aDogMjRweDtcclxuXHRcdGhlaWdodDogMjRweDtcclxuXHR9XHJcblx0LmVtb2ppe1xyXG5cdFx0cG9zaXRpb246IGZpeGVkO1xyXG5cdFx0bGVmdDogMTBweDtcclxuXHRcdHJpZ2h0OiAxMHB4O1xyXG5cdFx0Ym90dG9tOiAwO1xyXG5cdFx0YmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLDAsMCwwLjYpO1xyXG5cdFx0ZmxleC1kaXJlY3Rpb246IHJvdztcclxuXHRcdGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcblx0XHRwYWRkaW5nOiAxMHB4IDBweDtcclxuXHRcdHotaW5kZXg6MTAwO1xyXG5cdFx0ZmxleC13cmFwOndyYXA7XHJcblx0XHRqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuXHRcdGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcblx0fVxyXG5cdC5lbW9qaV9pdGVte1xyXG5cdFx0d2lkdGg6IDQwcHg7XHJcblx0XHRoZWlnaHQ6IDQwcHg7XHJcblx0XHRtYXJnaW46IDEwcHg7XHJcblx0fVxyXG48L3N0eWxlPlxyXG48dGVtcGxhdGU+XHJcblx0PHZpZXcgY2xhc3M9XCJ1bmlhcHBcIj5cclxuXHRcdDxibG9jayB2LWlmPVwic2hvd1Jvb21QYWdlXCI+XHJcblx0XHRcdDxzY3JvbGwtdmlldyBAY2xpY2s9XCJoaXN0b3J5Q2xpY2tlZFwiIGNsYXNzPVwiaGlzdG9yeUxpc3RcIiBpZD1cImhpc3RvcnlMaXN0XCIgc2Nyb2xsLXk9XCJ0cnVlXCIgOnNjcm9sbC13aXRoLWFuaW1hdGlvbj1cInRydWVcIlxyXG5cdFx0XHQgOnNjcm9sbC1pbnRvLXZpZXc9XCJ2aWV3SWRcIiA6c3R5bGU9XCJ7cGFkZGluZ0JvdHRvbTooc2FmZUFyZWFCb3R0b20rNzApKydweCd9XCIgaGVpZ2h0PVwiNDAwXCI+XHJcblx0XHRcdFx0PHZpZXcgaWQ9XCJoaXN0b3J5Qm94XCI+XHJcblx0XHRcdFx0XHQ8dmlldyB2LWZvcj1cIihpdGVtLGluZGV4KSBpbiBoaXN0b3J5TGlzdFwiPlxyXG5cdFx0XHRcdFx0XHQ8dmlldyBjbGFzcz1cIml0ZW1cIiA6aWQ9XCInc2hhXycraXRlbS5zaGFcIiB2LWlmPVwiaXRlbS50eXBlPT0ndGV4dCcgJiYgaXRlbS51c2VyLnVzZXJfaWQhPXVzZXJJbmZvLnVzZXJfaWRcIj5cclxuXHRcdFx0XHRcdFx0XHQ8dmlldyBjbGFzcz1cInVzZXJfaGVhZF9ib3hcIiBAY2xpY2s9XCJkb1VzZXJIZWFkRXZlbnQoaXRlbSlcIj5cclxuXHRcdFx0XHRcdFx0XHRcdDxpbWFnZSBjbGFzcz1cInVzZXJfaGVhZF9pbWFnZVwiIDpzcmM9XCJpdGVtLnVzZXIudXNlcl9oZWFkXCI+PC9pbWFnZT5cclxuXHRcdFx0XHRcdFx0XHRcdDx0ZXh0IGNsYXNzPVwiY2hhdF9pdGVtX3VzZXJfbmFtZVwiPnt7aXRlbS51c2VyLnVzZXJfbmFtZX19PC90ZXh0PlxyXG5cdFx0XHRcdFx0XHRcdDwvdmlldz5cclxuXHRcdFx0XHRcdFx0XHQ8dmlldyBjbGFzcz1cImNoYXRfaXRlbV9ib2R5X2xlZnRcIj5cclxuXHRcdFx0XHRcdFx0XHRcdDx2aWV3IHYtaWY9XCIhaXRlbS5hdFwiIGNsYXNzPVwiY2hhdF9pdGVtX3RleHRfYm94XCI+XHJcblx0XHRcdFx0XHRcdFx0XHRcdDx0ZXh0IGNsYXNzPVwiY2hhdF9pdGVtX3RleHRcIiB2LWlmPVwiaXRlbS51c2VyLnVzZXJfaWQ9PXVzZXJJbmZvLnVzZXJfaWQgJiYgdXNlckluZm8udXNlcl9zZXg9PTFcIiBzdHlsZT1cImJhY2tncm91bmQtY29sb3I6ICM2NkNCRkY7Y29sb3I6IzMzMztcIj57e3VybGRlY29kZShpdGVtLmNvbnRlbnQpfX08L3RleHQ+XHJcblx0XHRcdFx0XHRcdFx0XHRcdDx0ZXh0IGNsYXNzPVwiY2hhdF9pdGVtX3RleHRcIiB2LWlmPVwiaXRlbS51c2VyLnVzZXJfaWQ9PXVzZXJJbmZvLnVzZXJfaWQgJiYgdXNlckluZm8udXNlcl9zZXg9PTBcIiBzdHlsZT1cImJhY2tncm91bmQtY29sb3I6ICNGRTk4OTg7Y29sb3I6d2hpdGU7XCI+e3t1cmxkZWNvZGUoaXRlbS5jb250ZW50KX19PC90ZXh0PlxyXG5cdFx0XHRcdFx0XHRcdFx0XHQ8dGV4dCBjbGFzcz1cImNoYXRfaXRlbV90ZXh0XCIgdi1pZj1cIml0ZW0udXNlci51c2VyX2lkIT11c2VySW5mby51c2VyX2lkXCI+e3t1cmxkZWNvZGUoaXRlbS5jb250ZW50KX19PC90ZXh0PlxyXG5cdFx0XHRcdFx0XHRcdFx0PC92aWV3PlxyXG5cdFx0XHRcdFx0XHRcdFx0PHZpZXcgdi1pZj1cIml0ZW0uYXRcIiBjbGFzcz1cImNoYXRfaXRlbV90ZXh0X2JveFwiPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHQ8dGV4dCBjbGFzcz1cImNoYXRfaXRlbV90ZXh0XCIgdi1pZj1cIml0ZW0uYXQudXNlcl9pZD09dXNlckluZm8udXNlcl9pZFwiIHN0eWxlPVwiYmFja2dyb3VuZC1jb2xvcjogIzY2Njtjb2xvcjp3aGl0ZTtcIj57e3VybGRlY29kZShpdGVtLmNvbnRlbnQpfX08L3RleHQ+XHJcblx0XHRcdFx0XHRcdFx0XHRcdDx0ZXh0IGNsYXNzPVwiY2hhdF9pdGVtX3RleHRcIiB2LWlmPVwiaXRlbS5hdC51c2VyX2lkIT11c2VySW5mby51c2VyX2lkJiZpdGVtLnVzZXIudXNlcl9pZCE9dXNlckluZm8udXNlcl9pZFwiPnt7dXJsZGVjb2RlKGl0ZW0uY29udGVudCl9fTwvdGV4dD5cclxuXHRcdFx0XHRcdFx0XHRcdDwvdmlldz5cclxuXHRcdFx0XHRcdFx0XHQ8L3ZpZXc+XHJcblx0XHRcdFx0XHRcdDwvdmlldz5cclxuXHRcdFx0XHRcdFx0PHZpZXcgY2xhc3M9XCJpdGVtX21pbmVcIiA6aWQ9XCInc2hhXycraXRlbS5zaGFcIiB2LWlmPVwiaXRlbS50eXBlPT0ndGV4dCcgJiYgaXRlbS51c2VyLnVzZXJfaWQ9PXVzZXJJbmZvLnVzZXJfaWRcIj5cclxuXHRcdFx0XHRcdFx0XHQ8dmlldyBjbGFzcz1cInVzZXJfaGVhZF9ib3hcIiBAY2xpY2s9XCJkb1VzZXJIZWFkRXZlbnQoaXRlbSlcIj5cclxuXHRcdFx0XHRcdFx0XHRcdDx0ZXh0IGNsYXNzPVwiY2hhdF9pdGVtX3VzZXJfbmFtZVwiPnt7aXRlbS51c2VyLnVzZXJfbmFtZX19PC90ZXh0PlxyXG5cdFx0XHRcdFx0XHRcdFx0PGltYWdlIGNsYXNzPVwidXNlcl9oZWFkX2ltYWdlXCIgOnNyYz1cIml0ZW0udXNlci51c2VyX2hlYWRcIj48L2ltYWdlPlxyXG5cdFx0XHRcdFx0XHRcdDwvdmlldz5cclxuXHRcdFx0XHRcdFx0XHQ8dmlldyBjbGFzcz1cImNoYXRfaXRlbV9ib2R5X3JpZ2h0XCI+XHJcblx0XHRcdFx0XHRcdFx0XHQ8dmlldyB2LWlmPVwiIWl0ZW0uYXRcIiBjbGFzcz1cImNoYXRfaXRlbV90ZXh0X2JveFwiPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHQ8dGV4dCBjbGFzcz1cImNoYXRfaXRlbV90ZXh0XCIgdi1pZj1cIml0ZW0udXNlci51c2VyX2lkPT11c2VySW5mby51c2VyX2lkICYmIHVzZXJJbmZvLnVzZXJfc2V4PT0xXCIgc3R5bGU9XCJiYWNrZ3JvdW5kLWNvbG9yOiAjNjZDQkZGO2NvbG9yOmJsYWNrO1wiPnt7dXJsZGVjb2RlKGl0ZW0uY29udGVudCl9fTwvdGV4dD5cclxuXHRcdFx0XHRcdFx0XHRcdFx0PHRleHQgY2xhc3M9XCJjaGF0X2l0ZW1fdGV4dFwiIHYtaWY9XCJpdGVtLnVzZXIudXNlcl9pZD09dXNlckluZm8udXNlcl9pZCAmJiB1c2VySW5mby51c2VyX3NleCE9MVwiIHN0eWxlPVwiYmFja2dyb3VuZC1jb2xvcjogI0ZFOTg5ODtjb2xvcjp3aGl0ZTtcIj57e3VybGRlY29kZShpdGVtLmNvbnRlbnQpfX08L3RleHQ+XHJcblx0XHRcdFx0XHRcdFx0XHQ8L3ZpZXc+XHJcblx0XHRcdFx0XHRcdFx0XHQ8dmlldyB2LWlmPVwiaXRlbS5hdFwiIGNsYXNzPVwiY2hhdF9pdGVtX3RleHRfYm94XCI+XHJcblx0XHRcdFx0XHRcdFx0XHRcdDx0ZXh0IGNsYXNzPVwiY2hhdF9pdGVtX3RleHRcIiB2LWlmPVwiaXRlbS5hdC51c2VyX2lkPT11c2VySW5mby51c2VyX2lkXCIgc3R5bGU9XCJiYWNrZ3JvdW5kLWNvbG9yOiAjNjY2O2NvbG9yOndoaXRlO1wiPnt7dXJsZGVjb2RlKGl0ZW0uY29udGVudCl9fTwvdGV4dD5cclxuXHRcdFx0XHRcdFx0XHRcdFx0PHRleHQgY2xhc3M9XCJjaGF0X2l0ZW1fdGV4dFwiIHYtaWY9XCJpdGVtLmF0LnVzZXJfaWQhPXVzZXJJbmZvLnVzZXJfaWQmJml0ZW0udXNlci51c2VyX2lkPT11c2VySW5mby51c2VyX2lkICYmIHVzZXJJbmZvLnVzZXJfc2V4PT0xXCJcclxuXHRcdFx0XHRcdFx0XHRcdFx0IHN0eWxlPVwiYmFja2dyb3VuZC1jb2xvcjogIzY2Q0JGRjtjb2xvcjpibGFjaztcIj57e3VybGRlY29kZShpdGVtLmNvbnRlbnQpfX08L3RleHQ+XHJcblx0XHRcdFx0XHRcdFx0XHRcdDx0ZXh0IGNsYXNzPVwiY2hhdF9pdGVtX3RleHRcIiB2LWlmPVwiaXRlbS5hdC51c2VyX2lkIT11c2VySW5mby51c2VyX2lkJiZpdGVtLnVzZXIudXNlcl9pZD09dXNlckluZm8udXNlcl9pZCAmJiB1c2VySW5mby51c2VyX3NleCE9MVwiXHJcblx0XHRcdFx0XHRcdFx0XHRcdCBzdHlsZT1cImJhY2tncm91bmQtY29sb3I6ICNGRTk4OTg7Y29sb3I6d2hpdGU7XCI+e3t1cmxkZWNvZGUoaXRlbS5jb250ZW50KX19PC90ZXh0PlxyXG5cdFx0XHRcdFx0XHRcdFx0PC92aWV3PlxyXG5cdFx0XHRcdFx0XHRcdDwvdmlldz5cclxuXHRcdFx0XHRcdFx0PC92aWV3PlxyXG5cdFx0XHRcdFx0XHQ8dmlldyBjbGFzcz1cIml0ZW1fbWluZVwiIHYtaWY9XCJpdGVtLnR5cGU9PSdpbWcnICYmIGl0ZW0udXNlci51c2VyX2lkPT11c2VySW5mby51c2VyX2lkXCIgOmlkPVwiJ3NoYV8nK2l0ZW0uc2hhXCI+XHJcblx0XHRcdFx0XHRcdFx0PHZpZXcgY2xhc3M9XCJ1c2VyX2hlYWRfYm94XCIgQGNsaWNrPVwiZG9Vc2VySGVhZEV2ZW50KGl0ZW0pXCI+XHJcblx0XHRcdFx0XHRcdFx0XHQ8dGV4dCBjbGFzcz1cImNoYXRfaXRlbV91c2VyX25hbWVcIj57e2l0ZW0udXNlci51c2VyX25hbWV9fTwvdGV4dD5cclxuXHRcdFx0XHRcdFx0XHRcdDxpbWFnZSBjbGFzcz1cInVzZXJfaGVhZF9pbWFnZVwiIDpzcmM9XCJpdGVtLnVzZXIudXNlcl9oZWFkXCI+PC9pbWFnZT5cclxuXHRcdFx0XHRcdFx0XHQ8L3ZpZXc+XHJcblx0XHRcdFx0XHRcdFx0PHZpZXcgY2xhc3M9XCJjaGF0X2l0ZW1fYm9keV9yaWdodFwiPlxyXG5cdFx0XHRcdFx0XHRcdFx0PHZpZXcgY2xhc3M9XCJjaGF0X2l0ZW1faW1hZ2VfYm94XCI+XHJcblx0XHRcdFx0XHRcdFx0XHRcdDxpbWFnZSBjbGFzcz1cImNoYXRfaXRlbV9pbWFnZV9jb250ZW50XCIgOnNyYz1cImdldFN0YXRpY1VybCh1cmxkZWNvZGUoaXRlbS5jb250ZW50KSlcIiBtb2RlPVwid2lkdGhGaXhcIiBAY2xpY2s9XCJmdWxsVmlld0ltYWdlKGdldFN0YXRpY1VybCh1cmxkZWNvZGUoaXRlbS5yZXNvdXJjZSkpKVwiPjwvaW1hZ2U+XHJcblx0XHRcdFx0XHRcdFx0XHQ8L3ZpZXc+XHJcblx0XHRcdFx0XHRcdFx0PC92aWV3PlxyXG5cdFx0XHRcdFx0XHQ8L3ZpZXc+XHJcblx0XHRcdFx0XHRcdDx2aWV3IGNsYXNzPVwiaXRlbVwiIHYtaWY9XCJpdGVtLnR5cGU9PSdpbWcnICYmIGl0ZW0udXNlci51c2VyX2lkIT11c2VySW5mby51c2VyX2lkXCIgOmlkPVwiJ3NoYV8nK2l0ZW0uc2hhXCI+XHJcblx0XHRcdFx0XHRcdFx0PHZpZXcgY2xhc3M9XCJ1c2VyX2hlYWRfYm94XCIgQGNsaWNrPVwiZG9Vc2VySGVhZEV2ZW50KGl0ZW0pXCI+XHJcblx0XHRcdFx0XHRcdFx0XHQ8aW1hZ2UgY2xhc3M9XCJ1c2VyX2hlYWRfaW1hZ2VcIiA6c3JjPVwiaXRlbS51c2VyLnVzZXJfaGVhZFwiPjwvaW1hZ2U+XHJcblx0XHRcdFx0XHRcdFx0XHQ8dGV4dCBjbGFzcz1cImNoYXRfaXRlbV91c2VyX25hbWVcIj57e2l0ZW0udXNlci51c2VyX25hbWV9fTwvdGV4dD5cclxuXHRcdFx0XHRcdFx0XHQ8L3ZpZXc+XHJcblx0XHRcdFx0XHRcdFx0PHZpZXcgY2xhc3M9XCJjaGF0X2l0ZW1fYm9keV9sZWZ0XCI+XHJcblx0XHRcdFx0XHRcdFx0XHQ8dmlldyBjbGFzcz1cImNoYXRfaXRlbV9pbWFnZV9ib3hcIj5cclxuXHRcdFx0XHRcdFx0XHRcdFx0PGltYWdlIGNsYXNzPVwiY2hhdF9pdGVtX2ltYWdlX2NvbnRlbnRcIiA6c3JjPVwiZ2V0U3RhdGljVXJsKHVybGRlY29kZShpdGVtLmNvbnRlbnQpKVwiIG1vZGU9XCJ3aWR0aEZpeFwiIEBjbGljaz1cImZ1bGxWaWV3SW1hZ2UoZ2V0U3RhdGljVXJsKHVybGRlY29kZShpdGVtLnJlc291cmNlKSkpXCI+PC9pbWFnZT5cclxuXHRcdFx0XHRcdFx0XHRcdDwvdmlldz5cclxuXHRcdFx0XHRcdFx0XHQ8L3ZpZXc+XHJcblx0XHRcdFx0XHRcdDwvdmlldz5cclxuXHRcdFx0XHRcdFx0PHZpZXcgY2xhc3M9XCJpdGVtX3N5c3RlbVwiIHYtaWY9XCJpdGVtLnR5cGU9PSdzeXN0ZW0nXCI+XHJcblx0XHRcdFx0XHRcdFx0PHRleHQgY2xhc3M9XCJpdGVtX3N5c3RlbV90ZXh0XCI+e3tpdGVtLmNvbnRlbnR9fTwvdGV4dD5cclxuXHRcdFx0XHRcdFx0PC92aWV3PlxyXG5cdFx0XHRcdFx0PC92aWV3PlxyXG5cdFx0XHRcdDwvdmlldz5cclxuXHRcdFx0XHQ8dmlldyA6aWQ9XCIndmlld18nKyhoaXN0b3J5TGlzdFtoaXN0b3J5TGlzdC5sZW5ndGgtMV0udmlld19pZClcIj48L3ZpZXc+XHJcblx0XHRcdDwvc2Nyb2xsLXZpZXc+XHJcblx0XHRcdDx2aWV3IHN0eWxlPVwicG9zaXRpb246IGZpeGVkO2xlZnQ6MDtyaWdodDowO2JvdHRvbTowO2JhY2tncm91bmQtY29sb3I6ICNGRkZGRkY7XCIgOnN0eWxlPVwie2hlaWdodDpzYWZlQXJlYUJvdHRvbSsncHgnfVwiPjwvdmlldz5cclxuXHRcdFx0PGlucHV0IGNsYXNzPVwiY2hhdElucHV0XCIgOnN0eWxlPVwie2JvdHRvbTpzYWZlQXJlYUJvdHRvbSsncHgnfVwiIHR5cGU9XCJ0ZXh0XCIgcGxhY2Vob2xkZXI9XCLlhajlkZjnpoHoqIDkuK0s5L2g5pqC5pe25peg5rOV5Y+R6KiAXCIgdi1pZj1cImNoYXRUeXBlPT0ndGV4dCcgJiYgcm9vbS5yb29tX3NlbmRtc2c9PTFcIlxyXG5cdFx0XHQgZGlzYWJsZWQ9XCJ0cnVlXCIgLz5cclxuXHRcdFx0PGlucHV0IGRpc2FibGVkPVwiZGlzYWJsZWRcIiA6c3R5bGU9XCJ7Ym90dG9tOnNhZmVBcmVhQm90dG9tKydweCd9XCIgdi1pZj1cImNoYXRUeXBlPT0ndm9pY2UnXCIgY2xhc3M9XCJjaGF0SW5wdXRcIiB0eXBlPVwidGV4dFwiXHJcblx0XHRcdCBwbGFjZWhvbGRlcj1cIueCueWHu+i/memHjOW8gOWni+W9lemfs1wiPlxyXG5cdFx0XHQ8aW5wdXQgY2xhc3M9XCJjaGF0SW5wdXRcIiA6c3R5bGU9XCJ7Ym90dG9tOnNhZmVBcmVhQm90dG9tKydweCd9XCIgdHlwZT1cInRleHRcIiBjb25maXJtLXR5cGU9XCJzZW5kXCIgY29uZmlybS1ob2xkPVwidHJ1ZVwiXHJcblx0XHRcdCBwbGFjZWhvbGRlcj1cIuivtOeCueS7gOS5iOWQpy4uLlwiIHYtbW9kZWw9XCJtZXNzYWdlT2JqLm1lc3NhZ2VcIiB2LWlmPVwiY2hhdFR5cGU9PSd0ZXh0JyAmJiByb29tLnJvb21fc2VuZG1zZz09MFwiIEBrZXlkb3duPVwiZG9LZXlEb3duXCJcclxuXHRcdFx0IDpmb2N1cz1cIm1lc3NhZ2VPYmouZm9jdXNcIiBAY29uZmlybT1cImRvU2VuZE1lc3NhZ2VcIiAvPlxyXG5cdFx0XHQ8aW1hZ2UgOnN0eWxlPVwie2JvdHRvbTooc2FmZUFyZWFCb3R0b20rMTApKydweCd9XCIgQGNsaWNrPVwiZG9TaG93TWVudUJveFwiIGNsYXNzPVwiY2hhdE1lbnVfaW1hZ2VcIiBzcmM9XCIvc3RhdGljL2ltYWdlL21vcmUucG5nXCJcclxuXHRcdFx0IG1vZGU9XCJ3aWR0aEZpeFwiPjwvaW1hZ2U+XHJcblx0XHRcdDxpbWFnZSA6c3R5bGU9XCJ7Ym90dG9tOihzYWZlQXJlYUJvdHRvbSsxMCkrJ3B4J31cIiBAY2xpY2s9XCJkb1Nob3dFbW9qaUJveFwiIGNsYXNzPVwiY2hhdE1lbnVfZW1vamlcIiBzcmM9XCIvc3RhdGljL2ltYWdlL2Vtb2ppLnBuZ1wiXHJcblx0XHRcdCBtb2RlPVwid2lkdGhGaXhcIj48L2ltYWdlPlxyXG5cclxuXHJcblx0XHRcdDx2aWV3IGNsYXNzPVwicGxheWVyXCIgdi1pZj1cInNvbmcuc29uZ1wiIEBjbGljaz1cImRvTXVzaWNDbGlja2VkXCIgYmx1ckVmZmVjdD1cImxpZ2h0XCI+XHJcblx0XHRcdFx0PHZpZXcgY2xhc3M9XCJwbGF5ZXJfaW5mb1wiPlxyXG5cdFx0XHRcdFx0PHRleHQgY2xhc3M9XCJwbGF5ZXJfc29uZ1wiPnt7c29uZy5zb25nLm5hbWV9fTwvdGV4dD5cclxuXHRcdFx0XHRcdDx0ZXh0IGNsYXNzPVwicGxheWVyX3VzZXJcIj7ngrnmrYzkuro6IHt7dXJsZGVjb2RlKHNvbmcudXNlci51c2VyX25hbWUpfX08L3RleHQ+XHJcblx0XHRcdFx0PC92aWV3PlxyXG5cdFx0XHRcdDxpbWFnZSBjbGFzcz1cInBsYXllcl9pbWFnZVwiIDpzcmM9XCJzb25nLnNvbmcucGljXCI+PC9pbWFnZT5cclxuXHRcdFx0PC92aWV3PlxyXG5cclxuXHRcdFx0PHZpZXcgY2xhc3M9XCJlbW9qaVwiIDpzdHlsZT1cIntib3R0b206KHNhZmVBcmVhQm90dG9tKzYwKSsncHgnfVwiIGJsdXJFZmZlY3Q9XCJsaWdodFwiIHYtaWY9XCJzaG93RW1vamlCb3hcIj5cclxuXHRcdFx0XHQ8aW1hZ2UgY2xhc3M9XCJlbW9qaV9pdGVtXCIgdi1mb3I9XCJpbmRleCBpbiAzMFwiIDpzcmM9XCInLi4vLi4vc3RhdGljL0Vtb2ppcy8nK2luZGV4KycucG5nJ1wiIEBjbGljaz1cInNlbmRFbW9qaShpbmRleClcIj48L2ltYWdlPlxyXG5cdFx0XHQ8L3ZpZXc+XHJcblx0XHRcdDx2aWV3IHYtaWY9XCJzaG93TWVudUJveFwiIDpzdHlsZT1cIntib3R0b206KHNhZmVBcmVhQm90dG9tKzYwKSsncHgnfVwiIGJsdXJFZmZlY3Q9XCJsaWdodFwiIGNsYXNzPVwibWVudUJveFwiPlxyXG5cdFx0XHRcdDxzY3JvbGwtdmlldyBzaG93LXNjcm9sbGJhcj1cImZhbHNlXCIgc2Nyb2xsLXdpdGgtYW5pbWF0aW9uPVwidHJ1ZVwiIHNjcm9sbC14PVwidHJ1ZVwiIGNsYXNzPVwibWVudUJvZHlcIj5cclxuXHRcdFx0XHRcdDx2aWV3IGNsYXNzPVwibWVudUl0ZW1cIiBAY2xpY2s9XCJjaG9vc2VJbWFnZVwiPlxyXG5cdFx0XHRcdFx0XHQ8dmlldyBjbGFzcz1cIm1lbnVNYWluXCI+XHJcblx0XHRcdFx0XHRcdFx0PGltYWdlIGNsYXNzPVwibWVudUltYWdlXCIgc3JjPVwiL3N0YXRpYy9pbWFnZS9pY29uX3Bob3RvX2ZpbGwucG5nXCI+PC9pbWFnZT5cclxuXHRcdFx0XHRcdFx0PC92aWV3PlxyXG5cdFx0XHRcdFx0XHQ8dGV4dCBjbGFzcz1cIm1lbnVUaXRsZVwiPuWPkeWbvjwvdGV4dD5cclxuXHRcdFx0XHRcdDwvdmlldz5cclxuXHRcdFx0XHRcdDx2aWV3IGNsYXNzPVwibWVudUl0ZW1cIiBAY2xpY2s9XCJkb09wZW5QYWdlKCdhZGRTb25nJylcIj5cclxuXHRcdFx0XHRcdFx0PHZpZXcgY2xhc3M9XCJtZW51TWFpblwiPlxyXG5cdFx0XHRcdFx0XHRcdDxpbWFnZSBjbGFzcz1cIm1lbnVJbWFnZVwiIHNyYz1cIi9zdGF0aWMvaW1hZ2UvaWNvbl9kaW5ndGFiLnBuZ1wiPjwvaW1hZ2U+XHJcblx0XHRcdFx0XHRcdDwvdmlldz5cclxuXHRcdFx0XHRcdFx0PHRleHQgY2xhc3M9XCJtZW51VGl0bGVcIj7ngrnmrYw8L3RleHQ+XHJcblx0XHRcdFx0XHQ8L3ZpZXc+XHJcblx0XHRcdFx0XHQ8dmlldyBjbGFzcz1cIm1lbnVJdGVtXCIgQGNsaWNrPVwiZG9PcGVuUGFnZSgnc29uZ0xpc3QnKVwiPlxyXG5cdFx0XHRcdFx0XHQ8dmlldyBjbGFzcz1cIm1lbnVNYWluXCI+XHJcblx0XHRcdFx0XHRcdFx0PGltYWdlIGNsYXNzPVwibWVudUltYWdlXCIgc3JjPVwiL3N0YXRpYy9pbWFnZS9pY29uX2ludml0ZV9maWxsLnBuZ1wiPjwvaW1hZ2U+XHJcblx0XHRcdFx0XHRcdDwvdmlldz5cclxuXHRcdFx0XHRcdFx0PHRleHQgY2xhc3M9XCJtZW51VGl0bGVcIj7lt7Lngrk8L3RleHQ+XHJcblx0XHRcdFx0XHQ8L3ZpZXc+XHJcblx0XHRcdFx0XHQ8dmlldyBjbGFzcz1cIm1lbnVJdGVtXCIgQGNsaWNrPVwiZG9PcGVuUGFnZSgnbXlTb25nJylcIj5cclxuXHRcdFx0XHRcdFx0PHZpZXcgY2xhc3M9XCJtZW51TWFpblwiPlxyXG5cdFx0XHRcdFx0XHRcdDxpbWFnZSBjbGFzcz1cIm1lbnVJbWFnZVwiIHNyYz1cIi9zdGF0aWMvaW1hZ2UvaWNvbl9wZW9wbGVfZmlsbC5wbmdcIj48L2ltYWdlPlxyXG5cdFx0XHRcdFx0XHQ8L3ZpZXc+XHJcblx0XHRcdFx0XHRcdDx0ZXh0IGNsYXNzPVwibWVudVRpdGxlXCI+5oiR55qEPC90ZXh0PlxyXG5cdFx0XHRcdFx0PC92aWV3PlxyXG5cdFx0XHRcdFx0PHZpZXcgY2xhc3M9XCJtZW51SXRlbVwiIEBjbGljaz1cImRvT3BlblBhZ2UoJ29uTGluZScpXCI+XHJcblx0XHRcdFx0XHRcdDx2aWV3IGNsYXNzPVwibWVudU1haW5cIj5cclxuXHRcdFx0XHRcdFx0XHQ8aW1hZ2UgY2xhc3M9XCJtZW51SW1hZ2VcIiBzcmM9XCIvc3RhdGljL2ltYWdlL2ljb25fbWVldGluZ19maWxsLnBuZ1wiPjwvaW1hZ2U+XHJcblx0XHRcdFx0XHRcdDwvdmlldz5cclxuXHRcdFx0XHRcdFx0PHRleHQgY2xhc3M9XCJtZW51VGl0bGVcIj7lnKjnur88L3RleHQ+XHJcblx0XHRcdFx0XHQ8L3ZpZXc+XHJcblx0XHRcdFx0XHQ8dmlldyBjbGFzcz1cIm1lbnVJdGVtXCIgQGNsaWNrPVwiZG9PcGVuUGFnZSgnaW52YXRlJylcIj5cclxuXHRcdFx0XHRcdFx0PHZpZXcgY2xhc3M9XCJtZW51TWFpblwiPlxyXG5cdFx0XHRcdFx0XHRcdDxpbWFnZSBjbGFzcz1cIm1lbnVJbWFnZVwiIHNyYz1cIi9zdGF0aWMvaW1hZ2UvaWNvbl9pbnZhdGUucG5nXCI+PC9pbWFnZT5cclxuXHRcdFx0XHRcdFx0PC92aWV3PlxyXG5cdFx0XHRcdFx0XHQ8dGV4dCBjbGFzcz1cIm1lbnVUaXRsZVwiPumCgOivtzwvdGV4dD5cclxuXHRcdFx0XHRcdDwvdmlldz5cclxuXHRcdFx0XHRcdDx2aWV3IGNsYXNzPVwibWVudUl0ZW1cIiBAY2xpY2s9XCJkb09wZW5QYWdlKCdzZXR0aW5nJylcIj5cclxuXHRcdFx0XHRcdFx0PHZpZXcgY2xhc3M9XCJtZW51TWFpblwiPlxyXG5cdFx0XHRcdFx0XHRcdDxpbWFnZSBjbGFzcz1cIm1lbnVJbWFnZVwiIHNyYz1cIi9zdGF0aWMvaW1hZ2UvaWNvbl9zZXR0aW5nLnBuZ1wiPjwvaW1hZ2U+XHJcblx0XHRcdFx0XHRcdDwvdmlldz5cclxuXHRcdFx0XHRcdFx0PHRleHQgY2xhc3M9XCJtZW51VGl0bGVcIj7nrqHnkIY8L3RleHQ+XHJcblx0XHRcdFx0XHQ8L3ZpZXc+XHJcblx0XHRcdFx0PC9zY3JvbGwtdmlldz5cclxuXHRcdFx0PC92aWV3PlxyXG5cdFx0PC9ibG9jaz5cclxuXHRcdDx2aWV3IGNsYXNzPVwiZm9ybVBhc3N3b3JkXCIgdi1pZj1cInNob3dQYXNzd29yZEZvcm1cIj5cclxuXHRcdFx0PGZvcm0gQHN1Ym1pdD1cImdldFJvb21JbmZvXCI+XHJcblx0XHRcdFx0PHZpZXcgY2xhc3M9XCJmb3JtUGFzc3dvcmRUaXRsZVwiPuivt+i+k+WFpeWvhueggei/m+WFpeaIv+mXtDwvdmlldz5cclxuXHRcdFx0XHQ8dmlldyBjbGFzcz1cImZvcm1QYXNzd29yZElucHV0XCI+XHJcblx0XHRcdFx0XHQ8aW5wdXQgdHlwZT1cIm51bWJlclwiIHBsYWNlaG9sZGVyPVwi6K+36L6T5YWl5a+G56CBXCIgcGFzc3dvcmQ9XCJ0cnVlXCIgdi1tb2RlbD1cInBhc3N3b3JkXCIgY29uZmlybS10eXBlPVwic2VhcmNoXCIgY29uZmlybS1ob2xkPVwidHJ1ZVwiIC8+XHJcblx0XHRcdFx0PC92aWV3PlxyXG5cdFx0XHQ8L2Zvcm0+XHJcblx0XHQ8L3ZpZXc+XHJcblx0PC92aWV3PlxyXG48L3RlbXBsYXRlPlxyXG5cclxuPHNjcmlwdD5cclxuXHRleHBvcnQgZGVmYXVsdCB7XHJcblx0XHRkYXRhKCkge1xyXG5cdFx0XHRyZXR1cm4ge1xyXG5cdFx0XHRcdHZpZXdJZDogXCJcIixcclxuXHRcdFx0XHRzYWZlQXJlYUJvdHRvbTogMCxcclxuXHRcdFx0XHRiZ0F1ZGlvTWFubmFnZXI6IG51bGwsXHJcblx0XHRcdFx0c2hvd0Vtb2ppQm94OiBmYWxzZSxcclxuXHRcdFx0XHRzaG93Um9vbVBhZ2U6IGZhbHNlLFxyXG5cdFx0XHRcdHNob3dNZW51Qm94OiBmYWxzZSxcclxuXHRcdFx0XHRzaG93UGFzc3dvcmRGb3JtOiBmYWxzZSxcclxuXHRcdFx0XHRhcHA6IGdldEFwcCgpLFxyXG5cdFx0XHRcdHVzZXJJbmZvOiBudWxsLFxyXG5cdFx0XHRcdHNvbmc6IHtcclxuXHRcdFx0XHRcdHNvbmc6IG51bGwsXHJcblx0XHRcdFx0XHR1c2VyOiBudWxsLFxyXG5cdFx0XHRcdH0sXHJcblx0XHRcdFx0cm9vbV9pZDogMCxcclxuXHRcdFx0XHRyb29tOiBmYWxzZSxcclxuXHRcdFx0XHRwYXNzd29yZDogXCJcIixcclxuXHRcdFx0XHRjaGF0VHlwZTogJ3RleHQnLFxyXG5cdFx0XHRcdGhpc3RvcnlMaXN0OiBbXSxcclxuXHRcdFx0XHRtZXNzYWdlT2JqOiB7XHJcblx0XHRcdFx0XHRtZXNzYWdlOiBcIlwiLFxyXG5cdFx0XHRcdFx0YXQ6IGZhbHNlLFxyXG5cdFx0XHRcdFx0Zm9jdXM6IGZhbHNlLFxyXG5cdFx0XHRcdH0sXHJcblx0XHRcdFx0bXVzaWNOb3RMaWtlOiBmYWxzZVxyXG5cdFx0XHR9XHJcblx0XHR9LFxyXG5cdFx0b25Mb2FkKCkge1xyXG5cdFx0XHRsZXQgdGhhdCA9IHRoaXM7XHJcblx0XHRcdGNvbnN0IHJlcyA9IHVuaS5nZXRTeXN0ZW1JbmZvU3luYygpO1xyXG5cdFx0XHR0aGF0LnNhZmVBcmVhQm90dG9tID0gcmVzLnNhZmVBcmVhSW5zZXRzLmJvdHRvbSA9PSAwID8gMCA6IHJlcy5zYWZlQXJlYUluc2V0cy5ib3R0b207XHJcblx0XHRcdHRoYXQuYmdBdWRpb01hbm5hZ2VyID0gdW5pLmdldEJhY2tncm91bmRBdWRpb01hbmFnZXIoKTtcclxuXHRcdFx0dGhpcy5yb29tX2lkID0gdW5pLmdldFN0b3JhZ2VTeW5jKCdyb29tX2lkJykgfHwgMTAwMDA7XHJcblx0XHRcdHRoYXQuYXBwLnVzZXIuZ2V0TXlJbmZvKHtcclxuXHRcdFx0XHRzdWNjZXNzKHVzZXJJbmZvKSB7XHJcblx0XHRcdFx0XHR0aGF0LnVzZXJJbmZvID0gdXNlckluZm87XHJcblx0XHRcdFx0XHR0aGF0LmdldFJvb21JbmZvKCk7XHJcblx0XHRcdFx0fVxyXG5cdFx0XHR9KTtcclxuXHRcdFx0dW5pLiRvbignV2ViU29ja2V0TWVzc2FnZScsIGZ1bmN0aW9uKGRhdGEpIHtcclxuXHRcdFx0XHR0cnkge1xyXG5cdFx0XHRcdFx0dGhhdC5tZXNzYWdlQ29udHJvbGxlcihKU09OLnBhcnNlKGRhdGEpKTtcclxuXHRcdFx0XHR9IGNhdGNoIChlcnJvcikge1xyXG5cdFx0XHRcdFx0Y29uc29sZS5sb2coZXJyb3IpO1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0fSk7XHJcblx0XHRcdHVuaS4kb24oJ0luZGV4UmVsb2FkJywgZnVuY3Rpb24oKSB7XHJcblx0XHRcdFx0dGhhdC5hcHAudXNlci5nZXRNeUluZm8oe1xyXG5cdFx0XHRcdFx0c3VjY2Vzcyh1c2VySW5mbykge1xyXG5cdFx0XHRcdFx0XHR0aGF0LnVzZXJJbmZvID0gdXNlckluZm87XHJcblx0XHRcdFx0XHRcdHRoYXQuZ2V0Um9vbUluZm8oKTtcclxuXHRcdFx0XHRcdH1cclxuXHRcdFx0XHR9KTtcclxuXHRcdFx0fSk7XHJcblx0XHRcdHVuaS4kb24oJ0F0VXNlckV2ZW50JywgZnVuY3Rpb24odXNlcikge1xyXG5cdFx0XHRcdHRoYXQuZG9BdFVzZXIodXNlcik7XHJcblx0XHRcdH0pO1xyXG5cdFx0XHR1bmkuJG9uKCdSb29tQ2hhbmdlZCcsIGZ1bmN0aW9uKHJvb21faWQpIHtcclxuXHRcdFx0XHRjb25zb2xlLmxvZyhyb29tX2lkKTtcclxuXHRcdFx0XHR1bmkuc2V0TmF2aWdhdGlvbkJhclRpdGxlKHtcclxuXHRcdFx0XHRcdHRpdGxlOiAn5q2j5Zyo6L+b5YWlJ1xyXG5cdFx0XHRcdH0pO1xyXG5cdFx0XHRcdHRoYXQucm9vbV9pZCA9IHJvb21faWQ7XHJcblx0XHRcdFx0dGhhdC5zaG93UGFzc3dvcmRGb3JtID0gZmFsc2U7XHJcblx0XHRcdFx0dGhhdC5zaG93Um9vbVBhZ2UgPSBmYWxzZTtcclxuXHRcdFx0XHR0aGF0LnBhc3N3b3JkID0gJyc7XHJcblx0XHRcdFx0dW5pLnNldFN0b3JhZ2VTeW5jKCdyb29tX2lkJywgcGFyc2VJbnQodGhhdC5yb29tX2lkKSk7XHJcblx0XHRcdFx0dGhhdC5nZXRSb29tSW5mbygpO1xyXG5cdFx0XHR9KTtcclxuXHRcdFx0dGhhdC5iZ0F1ZGlvTWFubmFnZXIub25DYW5wbGF5KGZ1bmN0aW9uKCkge1xyXG5cdFx0XHRcdGxldCB0aW1lID0gcGFyc2VJbnQobmV3IERhdGUoKS52YWx1ZU9mKCkgLyAxMDAwKSAtIHRoYXQuc29uZy5zaW5jZSAtIDM7XHJcblx0XHRcdFx0dGhhdC5iZ0F1ZGlvTWFubmFnZXIuc2Vlayh0aW1lID4gMCA/IHRpbWUgOiAwKTtcclxuXHRcdFx0fSk7XHJcblx0XHRcdHRoYXQuYmdBdWRpb01hbm5hZ2VyLm9uRW5kZWQoZnVuY3Rpb24oKSB7XHJcblx0XHRcdFx0dGhhdC5zb25nID0ge1xyXG5cdFx0XHRcdFx0c29uZzogbnVsbCxcclxuXHRcdFx0XHRcdHVzZXI6IG51bGxcclxuXHRcdFx0XHR9O1xyXG5cdFx0XHRcdC8v5pKt5pS+5a6M5q+V5ZCO6K+75Y+W5pyA5paw5pKt5pS+5Lit55qE5q2M5puyXHJcblx0XHRcdFx0dGhhdC5hcHAud2ViU29ja2V0LmNvbm5lY3Rpb24uc2VuZCh7XHJcblx0XHRcdFx0XHRkYXRhOiBcImdldE5vd1NvbmdcIlxyXG5cdFx0XHRcdH0pO1xyXG5cdFx0XHR9KTtcclxuXHRcdH0sXHJcblx0XHRvblNob3coKSB7XHJcblx0XHRcdGxldCB0aGF0ID0gdGhpcztcclxuXHRcdFx0cGx1cy5wdXNoLmNsZWFyKCk7XHJcblx0XHRcdGlmICh0aGF0LmJnQXVkaW9NYW5uYWdlci5zcmMpIHtcclxuXHRcdFx0XHRpZiAoIXRoYXQubXVzaWNOb3RMaWtlKSB7XHJcblx0XHRcdFx0XHR0aGF0LmJnQXVkaW9NYW5uYWdlci5wbGF5KCk7XHJcblx0XHRcdFx0fVxyXG5cdFx0XHR9XHJcblx0XHRcdHRoYXQucGFzc3dvcmQgPSAnJztcclxuXHRcdFx0dGhhdC5hdXRvU2Nyb2xsKCk7XHJcblx0XHR9LFxyXG5cdFx0b25OYXZpZ2F0aW9uQmFyQnV0dG9uVGFwKHJlcykge1xyXG5cdFx0XHRsZXQgdGhhdCA9IHRoaXM7XHJcblx0XHRcdHN3aXRjaCAocmVzLnRleHQpIHtcclxuXHRcdFx0XHRjYXNlICfmjaLmiL8nOlxyXG5cdFx0XHRcdFx0dW5pLm5hdmlnYXRlVG8oe1xyXG5cdFx0XHRcdFx0XHR1cmw6IFwiLi4vcm9vbS9zZWxlY3RcIlxyXG5cdFx0XHRcdFx0fSk7XHJcblx0XHRcdFx0XHRicmVhaztcclxuXHRcdFx0XHRjYXNlICfmiJHnmoQnOlxyXG5cdFx0XHRcdFx0aWYgKHRoYXQudXNlckluZm8gJiYgdGhhdC51c2VySW5mby51c2VyX2lkIDw9IDApIHtcclxuXHRcdFx0XHRcdFx0dGhhdC5hcHAudXNlci5sb2dpbigpO1xyXG5cdFx0XHRcdFx0fSBlbHNlIHtcclxuXHRcdFx0XHRcdFx0dW5pLm5hdmlnYXRlVG8oe1xyXG5cdFx0XHRcdFx0XHRcdHVybDogJy4uL3VzZXIvaW5kZXgnLFxyXG5cdFx0XHRcdFx0XHR9KTtcclxuXHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdGJyZWFrO1xyXG5cdFx0XHRcdGRlZmF1bHQ6XHJcblx0XHRcdH1cclxuXHRcdH0sXHJcblx0XHRtZXRob2RzOiB7XHJcblx0XHRcdGRvVXNlckhlYWRFdmVudDogZnVuY3Rpb24oZSkge1xyXG5cdFx0XHRcdHZhciB0aGF0ID0gdGhpc1xyXG5cdFx0XHRcdHRoYXQuc2hvd01lbnVVc2VySGVhZChlKTtcclxuXHRcdFx0fSxcclxuXHRcdFx0ZG9TaG93RW1vamlCb3goKSB7XHJcblx0XHRcdFx0bGV0IHRoYXQgPSB0aGlzO1xyXG5cdFx0XHRcdHRoYXQuc2hvd0Vtb2ppQm94ID0gIXRoYXQuc2hvd0Vtb2ppQm94O1xyXG5cdFx0XHRcdHRoYXQuc2hvd01lbnVCb3ggPSBmYWxzZTtcclxuXHRcdFx0XHR1bmkuaGlkZUtleWJvYXJkKCk7XHJcblx0XHRcdFx0aWYgKCF0aGF0LnNob3dFbW9qaUJveCkge1xyXG5cdFx0XHRcdFx0dGhhdC5hdXRvU2Nyb2xsKCk7XHJcblx0XHRcdFx0fVxyXG5cdFx0XHR9LFxyXG5cdFx0XHRkb1Nob3dNZW51Qm94KCkge1xyXG5cdFx0XHRcdGxldCB0aGF0ID0gdGhpcztcclxuXHRcdFx0XHR0aGF0LnNob3dNZW51Qm94ID0gIXRoYXQuc2hvd01lbnVCb3g7XHJcblx0XHRcdFx0dGhhdC5zaG93RW1vamlCb3ggPSBmYWxzZTtcclxuXHRcdFx0XHR1bmkuaGlkZUtleWJvYXJkKCk7XHJcblx0XHRcdFx0aWYgKCF0aGF0LnNob3dNZW51Qm94KSB7XHJcblx0XHRcdFx0XHR0aGF0LmF1dG9TY3JvbGwoKTtcclxuXHRcdFx0XHR9XHJcblx0XHRcdH0sXHJcblx0XHRcdGRvS2V5RG93bigpIHtcclxuXHRcdFx0XHRsZXQgdGhhdCA9IHRoaXM7XHJcblx0XHRcdFx0aWYgKHRoYXQubWVzc2FnZU9iai5hdCkge1xyXG5cdFx0XHRcdFx0aWYgKHRoYXQubWVzc2FnZU9iai5tZXNzYWdlLmluZGV4T2YoJ0AnICsgZGVjb2RlVVJJQ29tcG9uZW50KHRoYXQubWVzc2FnZU9iai5hdC51c2VyX25hbWUpKSA8IDApIHtcclxuXHRcdFx0XHRcdFx0Ly9A55qE5pi156ew5bey57uP6KKr5pS56L+H5LqGXHJcblx0XHRcdFx0XHRcdHRoYXQubWVzc2FnZU9iai5hdCA9IGZhbHNlO1xyXG5cdFx0XHRcdFx0fVxyXG5cdFx0XHRcdH1cclxuXHRcdFx0fSxcclxuXHRcdFx0ZG9NdXNpY0NsaWNrZWQoKSB7XHJcblx0XHRcdFx0bGV0IHRoYXQgPSB0aGlzO1xyXG5cdFx0XHRcdGxldCBtZW51ID0gW1xyXG5cdFx0XHRcdFx0J+S4jeWWnOasoicsICfmlLbol48nXHJcblx0XHRcdFx0XTtcclxuXHRcdFx0XHRpZiAodGhhdC51c2VySW5mby51c2VyX2FkbWluIHx8IHRoYXQucm9vbS5yb29tX3VzZXIgPT0gdGhhdC51c2VySW5mby51c2VyX2lkKSB7XHJcblx0XHRcdFx0XHRtZW51ID0gW1xyXG5cdFx0XHRcdFx0XHQn5YiH5q2MJywgJ+aUtuiXjycsICfnpoHmraJUYeeCueatjCdcclxuXHRcdFx0XHRcdF07XHJcblx0XHRcdFx0fVxyXG5cdFx0XHRcdHVuaS5zaG93QWN0aW9uU2hlZXQoe1xyXG5cdFx0XHRcdFx0aXRlbUxpc3Q6IG1lbnUsXHJcblx0XHRcdFx0XHRzdWNjZXNzOiBmdW5jdGlvbihyZXMpIHtcclxuXHRcdFx0XHRcdFx0Y29uc29sZS5sb2cocmVzLnRhcEluZGV4KTtcclxuXHRcdFx0XHRcdFx0bGV0IGJ1dHRvbk5hbWUgPSBtZW51W3Jlcy50YXBJbmRleF07XHJcblx0XHRcdFx0XHRcdHN3aXRjaCAoYnV0dG9uTmFtZSkge1xyXG5cdFx0XHRcdFx0XHRcdGNhc2UgJ+emgeatolRh54K55q2MJzpcclxuXHRcdFx0XHRcdFx0XHRcdHRoYXQuYXBwLnJlcXVlc3Qoe1xyXG5cdFx0XHRcdFx0XHRcdFx0XHR1cmw6ICd1c2VyL3Nvbmdkb3duJyxcclxuXHRcdFx0XHRcdFx0XHRcdFx0ZGF0YToge1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdHJvb21faWQ6IHRoYXQucm9vbV9pZCxcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHR1c2VyX2lkOiB0aGF0LnNvbmcudXNlci51c2VyX2lkXHJcblx0XHRcdFx0XHRcdFx0XHRcdH0sXHJcblx0XHRcdFx0XHRcdFx0XHRcdGxvYWRpbmc6IFwi56aB5q2M5LitXCIsXHJcblx0XHRcdFx0XHRcdFx0XHRcdHN1Y2Nlc3M6IGZ1bmN0aW9uKHJlcykge1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdHVuaS5zaG93TW9kYWwoe1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0dGl0bGU6ICfnpoHmrYzmiJDlip8nLFxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0Y29udGVudDogcmVzLm1zZyxcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdHNob3dDYW5jZWw6IGZhbHNlLFxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0c3VjY2VzczogZnVuY3Rpb24oKSB7fVxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdH0pO1xyXG5cdFx0XHRcdFx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHRcdFx0XHR9KTtcclxuXHRcdFx0XHRcdFx0XHRcdGJyZWFrO1xyXG5cdFx0XHRcdFx0XHRcdGNhc2UgJ+WIh+atjCc6XHJcblx0XHRcdFx0XHRcdFx0XHR1bmkuc2hvd01vZGFsKHtcclxuXHRcdFx0XHRcdFx0XHRcdFx0dGl0bGU6ICfliIfmrYzmj5DphpInLFxyXG5cdFx0XHRcdFx0XHRcdFx0XHRjb250ZW50OiAn5piv5ZCm56Gu6K6k5YiH5o6J5b2T5YmN5pKt5pS+55qE5q2MPycsXHJcblx0XHRcdFx0XHRcdFx0XHRcdGNhbmNlbFRleHQ6ICflj5bmtognLFxyXG5cdFx0XHRcdFx0XHRcdFx0XHRjb25maXJtQ29sb3I6ICcjRkY0NTAwJyxcclxuXHRcdFx0XHRcdFx0XHRcdFx0Y29uZmlybVRleHQ6ICfliIfmrYwnLFxyXG5cdFx0XHRcdFx0XHRcdFx0XHRzdWNjZXNzOiBmdW5jdGlvbihyZXMpIHtcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRpZiAocmVzLmNvbmZpcm0pIHtcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdHRoYXQuYXBwLnJlcXVlc3Qoe1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHR1cmw6IFwic29uZy9wYXNzXCIsXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdGRhdGE6IHtcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRyb29tX2lkOiB0aGF0LnJvb21faWQsXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0bWlkOiB0aGF0LnNvbmcuc29uZy5taWRcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0fSxcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0c3VjY2VzczogZnVuY3Rpb24oKSB7fVxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0fSk7XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHRcdFx0XHR9KTtcclxuXHRcdFx0XHRcdFx0XHRcdGJyZWFrO1xyXG5cdFx0XHRcdFx0XHRcdGNhc2UgJ+S4jeWWnOasoic6XHJcblx0XHRcdFx0XHRcdFx0XHR0aGF0LmFwcC5yZXF1ZXN0KHtcclxuXHRcdFx0XHRcdFx0XHRcdFx0dXJsOiBcInNvbmcvcGFzc1wiLFxyXG5cdFx0XHRcdFx0XHRcdFx0XHRkYXRhOiB7XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0cm9vbV9pZDogdGhhdC5yb29tX2lkLFxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdG1pZDogdGhhdC5zb25nLnNvbmcubWlkXHJcblx0XHRcdFx0XHRcdFx0XHRcdH0sXHJcblx0XHRcdFx0XHRcdFx0XHRcdHN1Y2Nlc3M6IGZ1bmN0aW9uKHJlcykge1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdHRoYXQuYmdBdWRpb01hbm5hZ2VyLnBhdXNlKCk7XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0dGhhdC5zb25nID0ge1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0c29uZzogbnVsbCxcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdHVzZXI6IG51bGxcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHR9O1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdHRoYXQubXVzaWNOb3RMaWtlID0gdHJ1ZTtcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHR1bmkuc2hvd01vZGFsKHtcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdHRpdGxlOiAn5LiN5Zac5qyiJyxcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdGNvbnRlbnQ6IHJlcy5tc2csXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRzaG93Q2FuY2VsOiBmYWxzZSxcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdHN1Y2Nlc3M6IGZ1bmN0aW9uKCkge31cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHR9KTtcclxuXHRcdFx0XHRcdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0XHRcdFx0fSk7XHJcblx0XHRcdFx0XHRcdFx0XHRicmVhaztcclxuXHRcdFx0XHRcdFx0XHRjYXNlICfmlLbol48nOlxyXG5cdFx0XHRcdFx0XHRcdFx0dGhhdC5hcHAucmVxdWVzdCh7XHJcblx0XHRcdFx0XHRcdFx0XHRcdHVybDogXCJzb25nL2FkZE15U29uZ1wiLFxyXG5cdFx0XHRcdFx0XHRcdFx0XHRkYXRhOiB7XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0cm9vbV9pZDogdGhhdC5yb29tX2lkLFxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdG1pZDogdGhhdC5zb25nLnNvbmcubWlkXHJcblx0XHRcdFx0XHRcdFx0XHRcdH0sXHJcblx0XHRcdFx0XHRcdFx0XHRcdHN1Y2Nlc3M6IGZ1bmN0aW9uKHJlcykge1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdHVuaS5zaG93VG9hc3Qoe1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0dGl0bGU6IFwi5pS26JeP5oiQ5YqfXCJcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHR9KTtcclxuXHRcdFx0XHRcdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0XHRcdFx0fSk7XHJcblx0XHRcdFx0XHRcdFx0XHRicmVhaztcclxuXHRcdFx0XHRcdFx0XHRkZWZhdWx0OlxyXG5cdFx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHR9XHJcblx0XHRcdFx0fSlcclxuXHRcdFx0fSxcclxuXHRcdFx0ZG9BdFVzZXIodXNlcikge1xyXG5cdFx0XHRcdGxldCB0aGF0ID0gdGhpcztcclxuXHRcdFx0XHR0aGF0Lm1lc3NhZ2VPYmouYXQgPSB1c2VyO1xyXG5cdFx0XHRcdHRoYXQubWVzc2FnZU9iai5tZXNzYWdlID0gXCJAXCIgKyBkZWNvZGVVUklDb21wb25lbnQodXNlci51c2VyX25hbWUpICsgXCIgXCIgKyB0aGF0Lm1lc3NhZ2VPYmoubWVzc2FnZTtcclxuXHRcdFx0XHR0aGF0Lm1lc3NhZ2VPYmouZm9jdXMgPSB0cnVlO1xyXG5cdFx0XHR9LFxyXG5cdFx0XHRhdXRvU2Nyb2xsKCkge1xyXG5cdFx0XHRcdGxldCB0aGF0ID0gdGhpcztcclxuXHRcdFx0XHR0aGF0LnZpZXdJZCA9IFwiXCI7XHJcblx0XHRcdFx0dGhhdC4kbmV4dFRpY2soZnVuY3Rpb24oKSB7XHJcblx0XHRcdFx0XHR0aGF0LnZpZXdJZCA9IFwidmlld19cIiArIHRoYXQuaGlzdG9yeUxpc3RbdGhhdC5oaXN0b3J5TGlzdC5sZW5ndGggLSAxXS52aWV3X2lkO1xyXG5cdFx0XHRcdH0pO1xyXG5cdFx0XHR9LFxyXG5cdFx0XHRoaXN0b3J5Q2xpY2tlZCgpIHtcclxuXHRcdFx0XHRsZXQgdGhhdCA9IHRoaXM7XHJcblx0XHRcdFx0dGhhdC5zaG93TWVudUJveCA9IGZhbHNlO1xyXG5cdFx0XHRcdHRoYXQuc2hvd0Vtb2ppQm94ID0gZmFsc2U7XHJcblx0XHRcdFx0dW5pLmhpZGVLZXlib2FyZCgpO1xyXG5cdFx0XHR9LFxyXG5cdFx0XHRtZXNzYWdlQ29udHJvbGxlcihtc2cpIHtcclxuXHRcdFx0XHRsZXQgdGhhdCA9IHRoaXM7XHJcblx0XHRcdFx0c3dpdGNoIChtc2cudHlwZSkge1xyXG5cdFx0XHRcdFx0Y2FzZSAndGV4dCc6XHJcblx0XHRcdFx0XHRjYXNlICdpbWcnOlxyXG5cdFx0XHRcdFx0Y2FzZSAnc3lzdGVtJzpcclxuXHRcdFx0XHRcdFx0aWYgKG1zZy50eXBlID09ICd0ZXh0JyAmJiBtc2cuYXQpIHtcclxuXHRcdFx0XHRcdFx0XHRpZiAobXNnLmF0LnVzZXJfaWQgPT0gdGhhdC51c2VySW5mby51c2VyX2lkKSB7XHJcblx0XHRcdFx0XHRcdFx0XHRwbHVzLnB1c2guY3JlYXRlTWVzc2FnZShcIkBcIiArIGRlY29kZVVSSUNvbXBvbmVudChtc2cuYXQudXNlcl9uYW1lKSArIFwiIFwiICsgZGVjb2RlVVJJQ29tcG9uZW50KG1zZy5jb250ZW50KSwgJycsIHtcclxuXHRcdFx0XHRcdFx0XHRcdFx0dGl0bGU6IGRlY29kZVVSSUNvbXBvbmVudChtc2cudXNlci51c2VyX25hbWUpLFxyXG5cdFx0XHRcdFx0XHRcdFx0fSk7XHJcblx0XHRcdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0XHRcdG1zZy5jb250ZW50ID0gXCJAXCIgKyBkZWNvZGVVUklDb21wb25lbnQobXNnLmF0LnVzZXJfbmFtZSkgKyBcIiBcIiArIG1zZy5jb250ZW50O1xyXG5cdFx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHRcdHRoYXQuYWRkTWVzc2FnZVRvTGlzdChtc2cpO1xyXG5cdFx0XHRcdFx0XHRicmVhaztcclxuXHRcdFx0XHRcdGNhc2UgJ2FkZFNvbmcnOlxyXG5cdFx0XHRcdFx0XHRpZiAobXNnLmF0KSB7XHJcblx0XHRcdFx0XHRcdFx0dGhhdC5hZGRTeXN0ZW1NZXNzYWdlKGRlY29kZVVSSUNvbXBvbmVudChtc2cudXNlci51c2VyX25hbWUpICsgXCIg6YCB5LqG5LiA6aaWIOOAilwiICsgbXNnLnNvbmcubmFtZSArIFwi44CLIOe7mSBcIiArXHJcblx0XHRcdFx0XHRcdFx0XHRkZWNvZGVVUklDb21wb25lbnQobXNnLmF0LnVzZXJfbmFtZSksICcjMzMzJyk7XHJcblx0XHRcdFx0XHRcdFx0aWYgKG1zZy5hdC51c2VyX2lkID09IHRoYXQudXNlckluZm8udXNlcl9pZCkge1xyXG5cdFx0XHRcdFx0XHRcdFx0cGx1cy5wdXNoLmNyZWF0ZU1lc3NhZ2UoXCLpgIHkvaDkuIDpppbjgIpcIiArIG1zZy5zb25nLm5hbWUgKyBcIuOAiyhcIiArIG1zZy5zb25nLnNpbmdlciArIFwiKVwiLCAnJywge1xyXG5cdFx0XHRcdFx0XHRcdFx0XHR0aXRsZTogZGVjb2RlVVJJQ29tcG9uZW50KG1zZy51c2VyLnVzZXJfbmFtZSksXHJcblx0XHRcdFx0XHRcdFx0XHR9KTtcclxuXHRcdFx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHRcdH0gZWxzZSB7XHJcblx0XHRcdFx0XHRcdFx0dGhhdC5hZGRTeXN0ZW1NZXNzYWdlKGRlY29kZVVSSUNvbXBvbmVudChtc2cudXNlci51c2VyX25hbWUpICsgXCIg54K55LqG5LiA6aaW44CKXCIgKyBtc2cuc29uZy5uYW1lICsgXCLjgItcIiwgJyMzMzMnKTtcclxuXHRcdFx0XHRcdFx0fVxyXG5cclxuXHRcdFx0XHRcdFx0YnJlYWs7XHJcblx0XHRcdFx0XHRjYXNlICdwYXNzJzpcclxuXHRcdFx0XHRcdFx0dGhhdC5hZGRTeXN0ZW1NZXNzYWdlKGRlY29kZVVSSUNvbXBvbmVudChtc2cudXNlci51c2VyX25hbWUpICsgXCIg5YiH5o6J5LqG44CKXCIgKyBtc2cuc29uZy5uYW1lICsgXCLjgItcIiwgJyNmZjQ1MDAnKTtcclxuXHJcblx0XHRcdFx0XHRcdGJyZWFrO1xyXG5cdFx0XHRcdFx0Y2FzZSAnY2hhdF9iZyc6XHJcblx0XHRcdFx0XHRcdHRoYXQuYWRkU3lzdGVtTWVzc2FnZShkZWNvZGVVUklDb21wb25lbnQobXNnLnVzZXIudXNlcl9uYW1lKSArIFwiIOi/kOawlOWkp+eIhuWPkSzop6blj5HkuobngrnmrYzog4zmma/lopnnibnmlYgoMeWwj+aXtuWGheaSreaUvuatjOabsuaXtuacieaViCkhXCIsICdncmVlbicsXHJcblx0XHRcdFx0XHRcdFx0JyNlZWUnKTtcclxuXHJcblx0XHRcdFx0XHRcdGJyZWFrO1xyXG5cdFx0XHRcdFx0Y2FzZSAncHVzaCc6XHJcblx0XHRcdFx0XHRcdHRoYXQuYWRkU3lzdGVtTWVzc2FnZShkZWNvZGVVUklDb21wb25lbnQobXNnLnVzZXIudXNlcl9uYW1lKSArIFwiIOWwhuatjOabsiDjgIpcIiArIG1zZy5zb25nLm5hbWUgKyBcIuOAiyDorr7kuLrnva7pobblgJnmkq3mlL5cIik7XHJcblxyXG5cdFx0XHRcdFx0XHRicmVhaztcclxuXHRcdFx0XHRcdGNhc2UgJ3JlbW92ZVNvbmcnOlxyXG5cdFx0XHRcdFx0XHR0aGF0LmFkZFN5c3RlbU1lc3NhZ2UoZGVjb2RlVVJJQ29tcG9uZW50KG1zZy51c2VyLnVzZXJfbmFtZSkgKyBcIiDlsIbmrYzmm7Ig44CKXCIgKyBtc2cuc29uZy5uYW1lICsgXCLjgIsg5LuO6Zif5YiX56e76ZmkXCIpO1xyXG5cclxuXHRcdFx0XHRcdFx0YnJlYWs7XHJcblx0XHRcdFx0XHRjYXNlICdyZW1vdmViYW4nOlxyXG5cdFx0XHRcdFx0XHR0aGF0LmFkZFN5c3RlbU1lc3NhZ2UoZGVjb2RlVVJJQ29tcG9uZW50KG1zZy51c2VyLnVzZXJfbmFtZSkgKyBcIiDlsIYgXCIgKyBkZWNvZGVVUklDb21wb25lbnQobXNnLmJhbi51c2VyX25hbWUpICtcclxuXHRcdFx0XHRcdFx0XHRcIiDop6PnpoFcIik7XHJcblxyXG5cdFx0XHRcdFx0XHRicmVhaztcclxuXHRcdFx0XHRcdGNhc2UgJ3NodXRkb3duJzpcclxuXHRcdFx0XHRcdFx0dGhhdC5hZGRTeXN0ZW1NZXNzYWdlKGRlY29kZVVSSUNvbXBvbmVudChtc2cudXNlci51c2VyX25hbWUpICsgXCIg56aB5q2i5LqG55So5oi3IFwiICsgZGVjb2RlVVJJQ29tcG9uZW50KG1zZy5iYW4udXNlcl9uYW1lKSArXHJcblx0XHRcdFx0XHRcdFx0XCIg5Y+R6KiAXCIpO1xyXG5cclxuXHRcdFx0XHRcdFx0YnJlYWs7XHJcblx0XHRcdFx0XHRjYXNlICdzb25nZG93bic6XHJcblx0XHRcdFx0XHRcdHRoYXQuYWRkU3lzdGVtTWVzc2FnZShkZWNvZGVVUklDb21wb25lbnQobXNnLnVzZXIudXNlcl9uYW1lKSArIFwiIOemgeatouS6hueUqOaItyBcIiArIGRlY29kZVVSSUNvbXBvbmVudChtc2cuYmFuLnVzZXJfbmFtZSkgK1xyXG5cdFx0XHRcdFx0XHRcdFwiIOeCueatjFwiKTtcclxuXHJcblx0XHRcdFx0XHRcdGJyZWFrO1xyXG5cdFx0XHRcdFx0Y2FzZSAnYmFjayc6XHJcblx0XHRcdFx0XHRcdGZvciAobGV0IGkgPSAwOyBpIDwgdGhhdC5oaXN0b3J5TGlzdC5sZW5ndGg7IGkrKykge1xyXG5cdFx0XHRcdFx0XHRcdGlmICh0aGF0Lmhpc3RvcnlMaXN0W2ldLm1lc3NhZ2VfaWQgPT0gbXNnLm1lc3NhZ2VfaWQpIHtcclxuXHRcdFx0XHRcdFx0XHRcdHRoYXQuaGlzdG9yeUxpc3Quc3BsaWNlKGksIDEpO1xyXG5cdFx0XHRcdFx0XHRcdFx0YnJlYWs7XHJcblx0XHRcdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHRcdHRoYXQuYWRkU3lzdGVtTWVzc2FnZShkZWNvZGVVUklDb21wb25lbnQobXNnLnVzZXIudXNlcl9uYW1lKSArIFwiIOaSpOWbnuS6huS4gOadoea2iOaBr1wiKTtcclxuXHJcblx0XHRcdFx0XHRcdGJyZWFrO1xyXG5cdFx0XHRcdFx0Y2FzZSAncGxheVNvbmcnOlxyXG5cdFx0XHRcdFx0XHR0aGF0Lm11c2ljTm90TGlrZSA9IGZhbHNlO1xyXG5cdFx0XHRcdFx0XHR0aGF0LnBsYXlNdXNpYyhtc2cpO1xyXG5cdFx0XHRcdFx0XHRpZiAobXNnLnVzZXIudXNlcl9pZCA9PSB0aGF0LnVzZXJJbmZvLnVzZXJfaWQpIHtcclxuXHRcdFx0XHRcdFx0XHQvLyBwbHVzLnB1c2guY3JlYXRlTWVzc2FnZShcIuS9oOeCueeahOOAilwiICsgbXNnLnNvbmcubmFtZSArIFwi44CLKFwiICsgbXNnLnNvbmcuc2luZ2VyICsgXCIpXCIsICcnLCB7XHJcblx0XHRcdFx0XHRcdFx0Ly8gXHR0aXRsZTogXCLmraPlnKjmkq3mlL5cIixcclxuXHRcdFx0XHRcdFx0XHQvLyB9KTtcclxuXHRcdFx0XHRcdFx0fSBlbHNlIGlmIChtc2cuYXQudXNlcl9pZCA9PSB0aGF0LnVzZXJJbmZvLnVzZXJfaWQpIHtcclxuXHRcdFx0XHRcdFx0XHQvLyBwbHVzLnB1c2guY3JlYXRlTWVzc2FnZShkZWNvZGVVUklDb21wb25lbnQobXNnLnVzZXIudXNlcl9uYW1lKSArIFwiIOmAgee7meS9oOeahOOAilwiICsgbXNnLnNvbmcubmFtZSArIFwi44CLKFwiICsgbXNnLnNvbmcuc2luZ2VyICtcclxuXHRcdFx0XHRcdFx0XHQvLyBcdFwiKVwiLCAnJywge1xyXG5cdFx0XHRcdFx0XHRcdC8vIFx0XHR0aXRsZTogXCLmraPlnKjmkq3mlL5cIixcclxuXHRcdFx0XHRcdFx0XHQvLyBcdH0pO1xyXG5cdFx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHRcdGJyZWFrO1xyXG5cdFx0XHRcdFx0ZGVmYXVsdDpcclxuXHRcdFx0XHR9XHJcblx0XHRcdFx0dGhhdC5hdXRvU2Nyb2xsKCk7XHJcblx0XHRcdH0sXHJcblx0XHRcdHBsYXlNdXNpYyhtc2cpIHtcclxuXHRcdFx0XHRsZXQgdGhhdCA9IHRoaXM7XHJcblx0XHRcdFx0aWYgKHRoYXQuc29uZy5zb25nICYmIHRoYXQuc29uZy5zb25nLm1pZCA9PSBtc2cuc29uZy5taWQpIHtcclxuXHRcdFx0XHRcdHJldHVybjtcclxuXHRcdFx0XHR9XHJcblx0XHRcdFx0dGhhdC5zb25nID0gbXNnO1xyXG5cdFx0XHRcdHRoYXQuYmdBdWRpb01hbm5hZ2VyLnRpdGxlID0gbXNnLnNvbmcubmFtZSArIFwiIC0gXCIgKyBtc2cuc29uZy5zaW5nZXI7XHJcblx0XHRcdFx0dGhhdC5iZ0F1ZGlvTWFubmFnZXIuc2luZ2VyID0gXCLngrnmrYzkuro6XCIgKyBkZWNvZGVVUklDb21wb25lbnQobXNnLnVzZXIudXNlcl9uYW1lKSArICcgKCcgKyB0aGF0LnJvb20ucm9vbV9uYW1lICsgJyknO1xyXG5cdFx0XHRcdHRoYXQuYmdBdWRpb01hbm5hZ2VyLmNvdmVySW1nVXJsID0gbXNnLnNvbmcucGljO1xyXG5cdFx0XHRcdHRoYXQuYmdBdWRpb01hbm5hZ2VyLnNyYyA9IFwiaHR0cHM6Ly9hcGkuYmJidWcuY29tL2FwaS9zb25nL3BsYXl1cmw/bWlkPVwiICsgbXNnLnNvbmcubWlkO1xyXG5cdFx0XHRcdHRoYXQuYmdBdWRpb01hbm5hZ2VyLnBsYXkoKTtcclxuXHRcdFx0fSxcclxuXHRcdFx0c2VuZEVtb2ppKGluZGV4KSB7XHJcblx0XHRcdFx0bGV0IHRoYXQgPSB0aGlzO1xyXG5cdFx0XHRcdGxldCB1cmwgPSBcImh0dHBzOi8vY2RuLmJiYnVnLmNvbS9pbWFnZXMvZW1vamkvXCIgKyBpbmRleCArIFwiLnBuZ1wiO1xyXG5cdFx0XHRcdHRoYXQuYXBwLnJlcXVlc3Qoe1xyXG5cdFx0XHRcdFx0dXJsOiBcIm1lc3NhZ2Uvc2VuZFwiLFxyXG5cdFx0XHRcdFx0ZGF0YToge1xyXG5cdFx0XHRcdFx0XHR3aGVyZTogJ2NoYW5uZWwnLFxyXG5cdFx0XHRcdFx0XHR0bzogdGhhdC5yb29tX2lkLFxyXG5cdFx0XHRcdFx0XHR0eXBlOiAnaW1nJyxcclxuXHRcdFx0XHRcdFx0bXNnOiB1cmwsXHJcblx0XHRcdFx0XHRcdHJlc291cmNlOiB1cmwsXHJcblx0XHRcdFx0XHR9LFxyXG5cdFx0XHRcdFx0c3VjY2VzcyhyZXMpIHtcclxuXHRcdFx0XHRcdFx0dGhhdC5zaG93RW1vamlCb3ggPSBmYWxzZTtcclxuXHRcdFx0XHRcdH1cclxuXHRcdFx0XHR9KTtcclxuXHRcdFx0fSxcclxuXHRcdFx0ZG9TZW5kTWVzc2FnZShlKSB7XHJcblx0XHRcdFx0bGV0IHRoYXQgPSB0aGlzO1xyXG5cdFx0XHRcdGxldCBtZXNzYWdlX29sZCA9IHRoYXQubWVzc2FnZU9iai5tZXNzYWdlO1xyXG5cdFx0XHRcdGxldCBtZXNzYWdlID0gbWVzc2FnZV9vbGQ7XHJcblx0XHRcdFx0dGhhdC5tZXNzYWdlT2JqLm1lc3NhZ2UgPSAnJztcclxuXHRcdFx0XHRpZiAobWVzc2FnZV9vbGQpIHtcclxuXHRcdFx0XHRcdGlmICh0aGF0Lm1lc3NhZ2VPYmouYXQpIHtcclxuXHRcdFx0XHRcdFx0bWVzc2FnZSA9IG1lc3NhZ2Vfb2xkLnJlcGxhY2UoXCJAXCIgKyBkZWNvZGVVUklDb21wb25lbnQodGhhdC5tZXNzYWdlT2JqLmF0LnVzZXJfbmFtZSksXHJcblx0XHRcdFx0XHRcdFx0JycpO1xyXG5cdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0dGhhdC5hcHAucmVxdWVzdCh7XHJcblx0XHRcdFx0XHRcdHVybDogXCJtZXNzYWdlL3NlbmRcIixcclxuXHRcdFx0XHRcdFx0ZGF0YToge1xyXG5cdFx0XHRcdFx0XHRcdHR5cGU6ICd0ZXh0JyxcclxuXHRcdFx0XHRcdFx0XHR3aGVyZTogXCJjaGFubmVsXCIsXHJcblx0XHRcdFx0XHRcdFx0dG86IHRoYXQucm9vbV9pZCxcclxuXHRcdFx0XHRcdFx0XHRtc2c6IGVuY29kZVVSSUNvbXBvbmVudChtZXNzYWdlKSxcclxuXHRcdFx0XHRcdFx0XHRhdDogdGhhdC5tZXNzYWdlT2JqLmF0XHJcblx0XHRcdFx0XHRcdH0sXHJcblx0XHRcdFx0XHRcdHN1Y2Nlc3M6IGZ1bmN0aW9uKHJlcykge1xyXG5cdFx0XHRcdFx0XHRcdHRoYXQubWVzc2FnZU9iai5hdCA9IGZhbHNlO1xyXG5cdFx0XHRcdFx0XHR9LFxyXG5cdFx0XHRcdFx0XHRlcnJvcjogZnVuY3Rpb24ocmVzKSB7XHJcblx0XHRcdFx0XHRcdFx0dGhhdC5tZXNzYWdlT2JqLm1lc3NhZ2UgPSBtZXNzYWdlX29sZDtcclxuXHRcdFx0XHRcdFx0XHR1bmkuc2hvd01vZGFsKHtcclxuXHRcdFx0XHRcdFx0XHRcdHRpdGxlOiAn5Y+R6YCB5aSx6LSlJyxcclxuXHRcdFx0XHRcdFx0XHRcdGNvbnRlbnQ6IHJlcy5tc2csXHJcblx0XHRcdFx0XHRcdFx0XHRzaG93Q2FuY2VsOiBmYWxzZVxyXG5cdFx0XHRcdFx0XHRcdH0pO1xyXG5cdFx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHR9KTtcclxuXHRcdFx0XHR9XHJcblx0XHRcdH0sXHJcblx0XHRcdHJhbmRvbVN0cmluZyhsZW4pIHtcclxuXHRcdFx0XHRsZW4gPSBsZW4gfHwgMzI7XHJcblx0XHRcdFx0dmFyICRjaGFycyA9ICdBQkNERUZHSEpLTU5QUVJTVFdYWVphYmNkZWZoaWprbW5wcnN0d3h5ejIzNDU2NzgnOyAvKioqKum7mOiupOWOu+aOieS6huWuueaYk+a3t+a3hueahOWtl+espm9PTGwsOWdxLFZ2LFV1LEkxKioqKi9cclxuXHRcdFx0XHR2YXIgbWF4UG9zID0gJGNoYXJzLmxlbmd0aDtcclxuXHRcdFx0XHR2YXIgcHdkID0gJyc7XHJcblx0XHRcdFx0Zm9yIChpID0gMDsgaSA8IGxlbjsgaSsrKSB7XHJcblx0XHRcdFx0XHRwd2QgKz0gJGNoYXJzLmNoYXJBdChNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiBtYXhQb3MpKTtcclxuXHRcdFx0XHR9XHJcblx0XHRcdFx0cmV0dXJuIHB3ZDtcclxuXHRcdFx0fSxcclxuXHRcdFx0YWRkTWVzc2FnZVRvTGlzdChtc2cpIHtcclxuXHRcdFx0XHRsZXQgdGhhdCA9IHRoaXM7XHJcblx0XHRcdFx0aWYgKHRoYXQuaGlzdG9yeUxpc3QubGVuZ3RoID4gMTAwKSB7XHJcblx0XHRcdFx0XHR0aGF0Lmhpc3RvcnlMaXN0LnNoaWZ0KCk7XHJcblx0XHRcdFx0fVxyXG5cdFx0XHRcdG1zZy52aWV3X2lkID0gdGhhdC5nZXRSYW5JZCgpO1xyXG5cdFx0XHRcdHRoYXQuaGlzdG9yeUxpc3QucHVzaChtc2cpO1xyXG5cdFx0XHRcdHRoYXQuYXV0b1Njcm9sbCgpO1xyXG5cdFx0XHR9LFxyXG5cdFx0XHRnZXRSYW5JZCgpIHtcclxuXHRcdFx0XHRyZXR1cm4gbmV3IERhdGUoKS52YWx1ZU9mKCkgKyBwYXJzZUludChNYXRoLnJhbmRvbSgpICogMTAwMDAwKTtcclxuXHRcdFx0fSxcclxuXHRcdFx0dXJsZGVjb2RlKHN0cikge1xyXG5cdFx0XHRcdHJldHVybiBkZWNvZGVVUklDb21wb25lbnQoc3RyKTtcclxuXHRcdFx0fSxcclxuXHRcdFx0Y29ubmVjdFdlYnNvY2tldCgpIHtcclxuXHRcdFx0XHRsZXQgdGhhdCA9IHRoaXM7XHJcblx0XHRcdFx0aWYgKHRoYXQuYXBwLndlYlNvY2tldC5pc0Nvbm5lY3RlZCkge1xyXG5cdFx0XHRcdFx0Y29uc29sZS5sb2coXCLpnIDopoHmlrfplotcIilcclxuXHRcdFx0XHRcdHRoYXQuYXBwLndlYlNvY2tldC5jbG9zZVdzcygpO1xyXG5cdFx0XHRcdFx0c2V0VGltZW91dChmdW5jdGlvbigpIHtcclxuXHRcdFx0XHRcdFx0dGhhdC5jb25uZWN0V2Vic29ja2V0KCk7XHJcblx0XHRcdFx0XHR9LCAxMDAwKTtcclxuXHRcdFx0XHRcdHJldHVybjtcclxuXHRcdFx0XHR9XHJcblx0XHRcdFx0dGhhdC5hcHAud2ViU29ja2V0LmNvbm5lY3RXc3MoKTtcclxuXHRcdFx0XHR1bmkuaGlkZUxvYWRpbmcoKTtcclxuXHRcdFx0XHR0aGF0LmFkZFN5c3RlbU1lc3NhZ2UodGhhdC5yb29tLnJvb21fbm90aWNlIHx8ICfmnI3liqHlmajov57mjqXmiJDlip8nKTtcclxuXHRcdFx0XHR0aGF0LnNob3dQYXNzd29yZEZvcm0gPSBmYWxzZTtcclxuXHRcdFx0XHR0aGF0LnNob3dSb29tUGFnZSA9IHRydWU7XHJcblx0XHRcdFx0dGhhdC5hcHAucmVxdWVzdCh7XHJcblx0XHRcdFx0XHR1cmw6ICdtZXNzYWdlL2dldE1lc3NhZ2VMaXN0JyxcclxuXHRcdFx0XHRcdGRhdGE6IHtcclxuXHRcdFx0XHRcdFx0cm9vbV9pZDogdGhhdC5yb29tX2lkLFxyXG5cdFx0XHRcdFx0XHRwZXJfcGFnZTogMTAwLFxyXG5cdFx0XHRcdFx0fSxcclxuXHRcdFx0XHRcdHN1Y2Nlc3M6IGZ1bmN0aW9uKHJlcykge1xyXG5cdFx0XHRcdFx0XHR0aGF0Lmhpc3RvcnlMaXN0ID0gW107XHJcblx0XHRcdFx0XHRcdGZvciAobGV0IGkgPSAwOyBpIDwgcmVzLmRhdGEubGVuZ3RoOyBpKyspIHtcclxuXHRcdFx0XHRcdFx0XHRsZXQgX29iaiA9IGZhbHNlO1xyXG5cdFx0XHRcdFx0XHRcdHRyeSB7XHJcblx0XHRcdFx0XHRcdFx0XHRfb2JqID0gSlNPTi5wYXJzZShkZWNvZGVVUklDb21wb25lbnQocmVzLmRhdGFbaV0ubWVzc2FnZV9jb250ZW50KSk7XHJcblx0XHRcdFx0XHRcdFx0fSBjYXRjaCAoZXJyb3IpIHt9XHJcblx0XHRcdFx0XHRcdFx0aWYgKCFfb2JqKSB7XHJcblx0XHRcdFx0XHRcdFx0XHRjb250aW51ZTtcclxuXHRcdFx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHRcdFx0aWYgKF9vYmoudHlwZSA9PSBcInRleHRcIikge1xyXG5cdFx0XHRcdFx0XHRcdFx0aWYgKF9vYmouYXQpIHtcclxuXHRcdFx0XHRcdFx0XHRcdFx0X29iai5jb250ZW50ID0gJ0AnICsgX29iai5hdC51c2VyX25hbWUgKyBcIiBcIiArIF9vYmouY29udGVudDtcclxuXHRcdFx0XHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHRcdFx0X29iai50aW1lID0gcmVzLmRhdGFbaV0ubWVzc2FnZV9jcmVhdGV0aW1lO1xyXG5cdFx0XHRcdFx0XHRcdF9vYmoudmlld19pZCA9IHRoYXQuZ2V0UmFuSWQoKSArIFwiX1wiICsgaTtcclxuXHRcdFx0XHRcdFx0XHR0aGF0Lmhpc3RvcnlMaXN0LnVuc2hpZnQoX29iaik7XHJcblx0XHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdFx0dGhhdC5hZGRTeXN0ZW1NZXNzYWdlKHRoYXQucm9vbS5yb29tX25vdGljZSB8fCBcIuasoui/juadpeWIsFwiICsgdGhhdC5yb29tLnJvb21fbmFtZSk7XHJcblx0XHRcdFx0XHRcdHRoYXQuYXV0b1Njcm9sbCgpO1xyXG5cdFx0XHRcdFx0fSxcclxuXHJcblx0XHRcdFx0XHRlcnJvcjogZnVuY3Rpb24ocmVzKSB7XHJcblx0XHRcdFx0XHRcdGNvbnNvbGUubG9nKHJlcyk7XHJcblx0XHRcdFx0XHR9XHJcblx0XHRcdFx0fSk7XHJcblxyXG5cdFx0XHR9LFxyXG5cdFx0XHRnZXRSb29tSW5mbygpIHtcclxuXHRcdFx0XHRsZXQgdGhhdCA9IHRoaXM7XHJcblx0XHRcdFx0dW5pLnNob3dMb2FkaW5nKHtcclxuXHRcdFx0XHRcdHRpdGxlOiAn6L+e5o6l5oi/6Ze05pyN5Yqh5ZmoJ1xyXG5cdFx0XHRcdH0pO1xyXG5cdFx0XHRcdHRoYXQuYXBwLnJlcXVlc3Qoe1xyXG5cdFx0XHRcdFx0dXJsOiAncm9vbS9nZXRSb29tSW5mbycsXHJcblx0XHRcdFx0XHRkYXRhOiB7XHJcblx0XHRcdFx0XHRcdHJvb21faWQ6IHRoYXQucm9vbV9pZCxcclxuXHRcdFx0XHRcdFx0cm9vbV9wYXNzd29yZDogdGhhdC5wYXNzd29yZFxyXG5cdFx0XHRcdFx0fSxcclxuXHRcdFx0XHRcdHN1Y2Nlc3MocmVzKSB7XHJcblx0XHRcdFx0XHRcdHRoYXQucm9vbSA9IHJlcy5kYXRhO1xyXG5cdFx0XHRcdFx0XHR1bmkuc2V0TmF2aWdhdGlvbkJhclRpdGxlKHtcclxuXHRcdFx0XHRcdFx0XHR0aXRsZTogdGhhdC5yb29tLnJvb21fbmFtZVxyXG5cdFx0XHRcdFx0XHR9KTtcclxuXHRcdFx0XHRcdFx0dGhhdC5hcHAucmVxdWVzdCh7XHJcblx0XHRcdFx0XHRcdFx0dXJsOiAncm9vbS9nZXRXZWJzb2NrZXRVcmwnLFxyXG5cdFx0XHRcdFx0XHRcdGRhdGE6IHtcclxuXHRcdFx0XHRcdFx0XHRcdGNoYW5uZWw6IHRoYXQucm9vbV9pZFxyXG5cdFx0XHRcdFx0XHRcdH0sXHJcblx0XHRcdFx0XHRcdFx0c3VjY2VzczogZnVuY3Rpb24ocmVzKSB7XHJcblx0XHRcdFx0XHRcdFx0XHR0aGF0LmFwcC53ZWJTb2NrZXQuY29uZmlnLndzc1VybCA9ICd3c3M6Ly93ZWJzb2NrZXQuYmJidWcuY29tLz9hY2NvdW50PScgK1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRyZXMuZGF0YS5hY2NvdW50ICsgJyZjaGFubmVsPScgK1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRyZXMuZGF0YS5jaGFubmVsICsgJyZ0aWNrZXQ9JyArIHJlcy5kYXRhLnRpY2tldDtcclxuXHRcdFx0XHRcdFx0XHRcdHRoYXQuY29ubmVjdFdlYnNvY2tldCgpO1xyXG5cdFx0XHRcdFx0XHRcdH0sXHJcblxyXG5cdFx0XHRcdFx0XHRcdGVycm9yOiBmdW5jdGlvbihyZXMpIHtcclxuXHRcdFx0XHRcdFx0XHRcdGNvbnNvbGUubG9nKHJlcyk7XHJcblx0XHRcdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0XHR9KTtcclxuXHRcdFx0XHRcdH0sXHJcblx0XHRcdFx0XHRlcnJvcihyZXMpIHtcclxuXHRcdFx0XHRcdFx0dW5pLmhpZGVMb2FkaW5nKCk7XHJcblx0XHRcdFx0XHRcdGlmIChyZXMuY29kZSA9PSA0MDMpIHtcclxuXHRcdFx0XHRcdFx0XHR1bmkuc2V0TmF2aWdhdGlvbkJhclRpdGxlKHtcclxuXHRcdFx0XHRcdFx0XHRcdHRpdGxlOiAn5a+G56CB5oi/J1xyXG5cdFx0XHRcdFx0XHRcdH0pO1xyXG5cdFx0XHRcdFx0XHRcdHRoYXQuc2hvd1Bhc3N3b3JkRm9ybSA9IHRydWU7XHJcblx0XHRcdFx0XHRcdFx0dGhhdC5zaG93Um9vbVBhZ2UgPSBmYWxzZTtcclxuXHRcdFx0XHRcdFx0XHRpZiAodGhhdC5wYXNzd29yZCkge1xyXG5cdFx0XHRcdFx0XHRcdFx0dW5pLnNob3dNb2RhbCh7XHJcblx0XHRcdFx0XHRcdFx0XHRcdHNob3dDYW5jZWw6IGZhbHNlLFxyXG5cdFx0XHRcdFx0XHRcdFx0XHR0aXRsZTogJ+i/m+WFpeWksei0pScsXHJcblx0XHRcdFx0XHRcdFx0XHRcdGNvbnRlbnQ6IHJlcy5tc2csXHJcblx0XHRcdFx0XHRcdFx0XHRcdHN1Y2Nlc3M6IGZ1bmN0aW9uKCkge31cclxuXHRcdFx0XHRcdFx0XHRcdH0pO1xyXG5cdFx0XHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdFx0fSBlbHNlIHtcclxuXHRcdFx0XHRcdFx0XHR1bmkuc2hvd01vZGFsKHtcclxuXHRcdFx0XHRcdFx0XHRcdHNob3dDYW5jZWw6IGZhbHNlLFxyXG5cdFx0XHRcdFx0XHRcdFx0dGl0bGU6ICfov5vlhaXlpLHotKUnLFxyXG5cdFx0XHRcdFx0XHRcdFx0Y29udGVudDogcmVzLm1zZyxcclxuXHRcdFx0XHRcdFx0XHRcdHN1Y2Nlc3M6IGZ1bmN0aW9uKCkge1xyXG5cdFx0XHRcdFx0XHRcdFx0XHR1bmkubmF2aWdhdGVCYWNrKCk7XHJcblx0XHRcdFx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHRcdFx0fSk7XHJcblx0XHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdH1cclxuXHRcdFx0XHR9KTtcclxuXHRcdFx0fSxcclxuXHRcdFx0YWRkU3lzdGVtTWVzc2FnZShtc2csIGNvbG9yID0gJyM5OTknLCBiZyA9ICd0YW5zcGFyZW50Jykge1xyXG5cdFx0XHRcdGxldCB0aGF0ID0gdGhpcztcclxuXHRcdFx0XHR0aGF0Lmhpc3RvcnlMaXN0LnB1c2goe1xyXG5cdFx0XHRcdFx0dHlwZTogXCJzeXN0ZW1cIixcclxuXHRcdFx0XHRcdGNvbnRlbnQ6IG1zZyxcclxuXHRcdFx0XHRcdGJnOiBiZyxcclxuXHRcdFx0XHRcdHZpZXdfaWQ6IHRoYXQuZ2V0UmFuSWQoKSxcclxuXHRcdFx0XHRcdGNvbG9yOiBjb2xvclxyXG5cdFx0XHRcdH0pO1xyXG5cdFx0XHRcdHRoYXQuYXV0b1Njcm9sbCgpO1xyXG5cdFx0XHR9LFxyXG5cdFx0XHRkb09wZW5QYWdlKHBhZ2UpIHtcclxuXHRcdFx0XHRsZXQgdGhhdCA9IHRoaXM7XHJcblx0XHRcdFx0c3dpdGNoIChwYWdlKSB7XHJcblx0XHRcdFx0XHRjYXNlICdhZGRTb25nJzpcclxuXHRcdFx0XHRcdFx0dW5pLm5hdmlnYXRlVG8oe1xyXG5cdFx0XHRcdFx0XHRcdHVybDogJy4uL3Nvbmcvc2VhcmNoP3Jvb21faWQ9JyArIHRoYXQucm9vbV9pZFxyXG5cdFx0XHRcdFx0XHR9KTtcclxuXHRcdFx0XHRcdFx0YnJlYWs7XHJcblx0XHRcdFx0XHRjYXNlICdteVNvbmcnOlxyXG5cdFx0XHRcdFx0XHR1bmkubmF2aWdhdGVUbyh7XHJcblx0XHRcdFx0XHRcdFx0dXJsOiAnLi4vc29uZy9teT9yb29tX2lkPScgKyB0aGF0LnJvb21faWRcclxuXHRcdFx0XHRcdFx0fSk7XHJcblx0XHRcdFx0XHRcdGJyZWFrO1xyXG5cdFx0XHRcdFx0Y2FzZSAnc29uZ0xpc3QnOlxyXG5cdFx0XHRcdFx0XHR1bmkubmF2aWdhdGVUbyh7XHJcblx0XHRcdFx0XHRcdFx0dXJsOiAnLi4vc29uZy9saXN0P3Jvb21faWQ9JyArIHRoYXQucm9vbV9pZFxyXG5cdFx0XHRcdFx0XHR9KTtcclxuXHRcdFx0XHRcdFx0YnJlYWs7XHJcblx0XHRcdFx0XHRjYXNlICdvbkxpbmUnOlxyXG5cdFx0XHRcdFx0XHRsZXQgaXNNYXN0ZXIgPSAwO1xyXG5cdFx0XHRcdFx0XHRpZiAodGhhdC51c2VySW5mby51c2VyX2FkbWluIHx8IHRoYXQucm9vbS5yb29tX3VzZXIgPT0gdGhhdC51c2VySW5mby51c2VyX2lkKSB7XHJcblx0XHRcdFx0XHRcdFx0aXNNYXN0ZXIgPSAxO1xyXG5cdFx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHRcdHVuaS5uYXZpZ2F0ZVRvKHtcclxuXHRcdFx0XHRcdFx0XHR1cmw6ICcuLi9yb29tL29ubGluZT9yb29tX2lkPScgKyB0aGF0LnJvb21faWQgKyBcIiZyb29tX2FkbWluPVwiICsgaXNNYXN0ZXJcclxuXHRcdFx0XHRcdFx0fSk7XHJcblx0XHRcdFx0XHRcdGJyZWFrO1xyXG5cdFx0XHRcdFx0ZGVmYXVsdDpcclxuXHRcdFx0XHR9XHJcblx0XHRcdH0sXHJcblx0XHRcdHNob3dNZW51VXNlckhlYWQobXNnKSB7XHJcblx0XHRcdFx0bGV0IHVzZXIgPSBtc2cudXNlcjtcclxuXHRcdFx0XHRsZXQgdGhhdCA9IHRoaXM7XHJcblx0XHRcdFx0bGV0IG1lbnUgPSBbJ+i/m+WFpeS4u+mhtScsICdA5LiA5LiLVGEnLCAn6YCB5q2M57uZVGEnXTtcclxuXHRcdFx0XHRpZiAoKHRoYXQudXNlckluZm8udXNlcl9hZG1pbiB8fCB0aGF0LnJvb20ucm9vbV91c2VyID09IHRoYXQudXNlckluZm8udXNlcl9pZCkpIHtcclxuXHRcdFx0XHRcdG1lbnUgPSBbJ+i/m+WFpeS4u+mhtScsICdA5LiA5LiLVGEnLCAn6YCB5q2M57uZVGEnLCAn5pKk5Zue5raI5oGvJywgJ+emgeatoueCueatjCcsICfnpoHmraLlj5HoqIAnLCAn5YWo6YOo6Kej56aBJ107XHJcblx0XHRcdFx0fSBlbHNlIGlmICh1c2VyLnVzZXJfaWQgPT0gdGhhdC51c2VySW5mby51c2VyX2lkKSB7XHJcblx0XHRcdFx0XHQvL+WPkea2iOaBr+S6uuaYr+iHquW3sVxyXG5cdFx0XHRcdFx0bWVudSA9IFsn6L+b5YWl5Li76aG1JywgJ0DkuIDkuItUYScsICfpgIHmrYznu5lUYScsICfmkqTlm57mtojmga8nXTtcclxuXHRcdFx0XHR9IGVsc2Uge1xyXG5cdFx0XHRcdFx0Ly/lhbbku5bkurrnmoTmtojmga9cclxuXHRcdFx0XHRcdG1lbnUgPSBbJ+i/m+WFpeS4u+mhtScsICdA5LiA5LiLVGEnLCAn6YCB5q2M57uZVGEnXTtcclxuXHRcdFx0XHR9XHJcblxyXG5cdFx0XHRcdHVuaS5zaG93QWN0aW9uU2hlZXQoe1xyXG5cdFx0XHRcdFx0aXRlbUxpc3Q6IG1lbnUsXHJcblx0XHRcdFx0XHRzdWNjZXNzOiBmdW5jdGlvbihyZXMpIHtcclxuXHRcdFx0XHRcdFx0c3dpdGNoIChtZW51W3Jlcy50YXBJbmRleF0pIHtcclxuXHRcdFx0XHRcdFx0XHRjYXNlICfpgIHmrYznu5lUYSc6XHJcblx0XHRcdFx0XHRcdFx0XHR1bmkubmF2aWdhdGVUbyh7XHJcblx0XHRcdFx0XHRcdFx0XHRcdHVybDogJy4uL3Nvbmcvc2VhcmNoP3Jvb21faWQ9JyArIHRoYXQucm9vbV9pZCArIFwiJmF0PVwiICsgdXNlci51c2VyX2lkICsgXCImbmFtZT1cIiArIHVzZXIudXNlcl9uYW1lXHJcblx0XHRcdFx0XHRcdFx0XHR9KTtcclxuXHRcdFx0XHRcdFx0XHRcdGJyZWFrO1xyXG5cdFx0XHRcdFx0XHRcdGNhc2UgJ0DkuIDkuItUYSc6XHJcblx0XHRcdFx0XHRcdFx0XHR0aGF0LmRvQXRVc2VyKHVzZXIpO1xyXG5cdFx0XHRcdFx0XHRcdFx0YnJlYWs7XHJcblx0XHRcdFx0XHRcdFx0Y2FzZSAn5YWo6YOo6Kej56aBJzpcclxuXHRcdFx0XHRcdFx0XHRcdHRoYXQuYXBwLnJlcXVlc3Qoe1xyXG5cdFx0XHRcdFx0XHRcdFx0XHR1cmw6ICd1c2VyL3JlbW92ZWJhbicsXHJcblx0XHRcdFx0XHRcdFx0XHRcdGRhdGE6IHtcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRyb29tX2lkOiB0aGF0LnJvb21faWQsXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0dXNlcl9pZDogdXNlci51c2VyX2lkXHJcblx0XHRcdFx0XHRcdFx0XHRcdH0sXHJcblx0XHRcdFx0XHRcdFx0XHRcdGxvYWRpbmc6IFwi6Kej56aB5LitXCIsXHJcblx0XHRcdFx0XHRcdFx0XHRcdHN1Y2Nlc3M6IGZ1bmN0aW9uKHJlcykge1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdHVuaS5zaG93TW9kYWwoe1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0dGl0bGU6ICfop6PnpoHmiJDlip8nLFxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0Y29udGVudDogcmVzLm1zZyxcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdHNob3dDYW5jZWw6IGZhbHNlLFxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0c3VjY2VzczogZnVuY3Rpb24oKSB7fVxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdH0pO1xyXG5cdFx0XHRcdFx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHRcdFx0XHR9KTtcclxuXHRcdFx0XHRcdFx0XHRcdGJyZWFrO1xyXG5cdFx0XHRcdFx0XHRcdGNhc2UgJ+aSpOWbnua2iOaBryc6XHJcblx0XHRcdFx0XHRcdFx0XHRjb25zb2xlLmxvZyhtc2cpO1xyXG5cdFx0XHRcdFx0XHRcdFx0dGhhdC5hcHAucmVxdWVzdCh7XHJcblx0XHRcdFx0XHRcdFx0XHRcdHVybDogXCJtZXNzYWdlL2JhY2tcIixcclxuXHRcdFx0XHRcdFx0XHRcdFx0ZGF0YToge1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdG1lc3NhZ2VfaWQ6IG1zZy5tZXNzYWdlX2lkLFxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdHJvb21faWQ6IHRoYXQucm9vbV9pZFxyXG5cdFx0XHRcdFx0XHRcdFx0XHR9LFxyXG5cdFx0XHRcdFx0XHRcdFx0XHRzdWNjZXNzKCkge31cclxuXHRcdFx0XHRcdFx0XHRcdH0pO1xyXG5cdFx0XHRcdFx0XHRcdFx0YnJlYWs7XHJcblx0XHRcdFx0XHRcdFx0Y2FzZSAn56aB5q2i5Y+R6KiAJzpcclxuXHRcdFx0XHRcdFx0XHRcdHRoYXQuYXBwLnJlcXVlc3Qoe1xyXG5cdFx0XHRcdFx0XHRcdFx0XHR1cmw6ICd1c2VyL3NodXRkb3duJyxcclxuXHRcdFx0XHRcdFx0XHRcdFx0ZGF0YToge1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdHJvb21faWQ6IHRoYXQucm9vbV9pZCxcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHR1c2VyX2lkOiB1c2VyLnVzZXJfaWRcclxuXHRcdFx0XHRcdFx0XHRcdFx0fSxcclxuXHRcdFx0XHRcdFx0XHRcdFx0bG9hZGluZzogXCLnpoHoqIDkuK1cIixcclxuXHRcdFx0XHRcdFx0XHRcdFx0c3VjY2VzczogZnVuY3Rpb24ocmVzKSB7XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0dW5pLnNob3dNb2RhbCh7XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHR0aXRsZTogJ+emgeiogOaIkOWKnycsXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRjb250ZW50OiByZXMubXNnLFxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0c2hvd0NhbmNlbDogZmFsc2UsXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRzdWNjZXNzOiBmdW5jdGlvbigpIHt9XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0fSk7XHJcblx0XHRcdFx0XHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdFx0XHRcdH0pO1xyXG5cdFx0XHRcdFx0XHRcdFx0YnJlYWs7XHJcblx0XHRcdFx0XHRcdFx0Y2FzZSAn56aB5q2i54K55q2MJzpcclxuXHRcdFx0XHRcdFx0XHRcdHRoYXQuYXBwLnJlcXVlc3Qoe1xyXG5cdFx0XHRcdFx0XHRcdFx0XHR1cmw6ICd1c2VyL3Nvbmdkb3duJyxcclxuXHRcdFx0XHRcdFx0XHRcdFx0ZGF0YToge1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdHJvb21faWQ6IHRoYXQucm9vbV9pZCxcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHR1c2VyX2lkOiB1c2VyLnVzZXJfaWRcclxuXHRcdFx0XHRcdFx0XHRcdFx0fSxcclxuXHRcdFx0XHRcdFx0XHRcdFx0bG9hZGluZzogXCLnpoHmrYzkuK1cIixcclxuXHRcdFx0XHRcdFx0XHRcdFx0c3VjY2VzczogZnVuY3Rpb24ocmVzKSB7XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0dW5pLnNob3dNb2RhbCh7XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHR0aXRsZTogJ+emgeatjOaIkOWKnycsXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRjb250ZW50OiByZXMubXNnLFxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0c2hvd0NhbmNlbDogZmFsc2UsXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRzdWNjZXNzOiBmdW5jdGlvbigpIHt9XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0fSk7XHJcblx0XHRcdFx0XHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdFx0XHRcdH0pO1xyXG5cdFx0XHRcdFx0XHRcdFx0YnJlYWs7XHJcblx0XHRcdFx0XHRcdFx0ZGVmYXVsdDpcclxuXHRcdFx0XHRcdFx0XHRcdHVuaS5zaG93TW9kYWwoe1xyXG5cdFx0XHRcdFx0XHRcdFx0XHR0aXRsZTogXCJCQkJVR1wiLFxyXG5cdFx0XHRcdFx0XHRcdFx0XHRjb250ZW50OiBtZW51W3Jlcy50YXBJbmRleF0gKyBcIuWNs+WwhuS4iue6v1wiLFxyXG5cdFx0XHRcdFx0XHRcdFx0XHRzaG93Q2FuY2VsOiBmYWxzZVxyXG5cdFx0XHRcdFx0XHRcdFx0fSk7XHJcblx0XHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdH1cclxuXHRcdFx0XHR9KTtcclxuXHRcdFx0fSxcclxuXHRcdFx0Z2V0U3RhdGljVXJsKHVybCkge1xyXG5cdFx0XHRcdGlmICh1cmwuaW5kZXhPZignaHR0cHM6Ly8nKSA+IC0xIHx8IHVybC5pbmRleE9mKCdodHRwOi8vJykgPiAtMSkge1xyXG5cdFx0XHRcdFx0cmV0dXJuIHVybDtcclxuXHRcdFx0XHR9IGVsc2Uge1xyXG5cdFx0XHRcdFx0cmV0dXJuICdodHRwczovL2Nkbi5iYmJ1Zy5jb20vdXBsb2Fkcy8nICsgdXJsO1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0fSxcclxuXHRcdFx0ZG9Ub3VjaCh1c2VyKSB7XHJcblx0XHRcdFx0bGV0IHRoYXQgPSB0aGlzO1xyXG5cdFx0XHRcdHRoYXQucmVxdWVzdCh7XHJcblx0XHRcdFx0XHR1cmw6IFwibWVzc2FnZS90b3VjaFwiLFxyXG5cdFx0XHRcdFx0ZGF0YToge1xyXG5cdFx0XHRcdFx0XHRhdDogdXNlci51c2VyX2lkLFxyXG5cdFx0XHRcdFx0XHRyb29tX2lkOiB0aGF0LnJvb21faWRcclxuXHRcdFx0XHRcdH0sXHJcblx0XHRcdFx0XHRzdWNjZXNzKHJlcykge31cclxuXHRcdFx0XHR9KTtcclxuXHRcdFx0fSxcclxuXHRcdFx0Y2hvb3NlSW1hZ2UoKSB7XHJcblx0XHRcdFx0bGV0IHRoYXQgPSB0aGlzO1xyXG5cdFx0XHRcdHVuaS5jaG9vc2VJbWFnZSh7XHJcblx0XHRcdFx0XHRzaXplVHlwZTogXCJjb21wcmVzc2VkXCIsXHJcblx0XHRcdFx0XHRzb3VyY2VUeXBlOiBbJ2FsYnVtJ10sXHJcblx0XHRcdFx0XHRjb3VudDogMSxcclxuXHRcdFx0XHRcdGZhaWw6IGZ1bmN0aW9uKHJlcykge1xyXG5cdFx0XHRcdFx0XHRjb25zb2xlLmxvZyhyZXMpO1xyXG5cdFx0XHRcdFx0fSxcclxuXHRcdFx0XHRcdHN1Y2Nlc3M6IGZ1bmN0aW9uKHJlcykge1xyXG5cdFx0XHRcdFx0XHR1bmkuc2hvd0xvYWRpbmcoe1xyXG5cdFx0XHRcdFx0XHRcdHRpdGxlOiAn5aSE55CG5LitJ1xyXG5cdFx0XHRcdFx0XHR9KTtcclxuXHRcdFx0XHRcdFx0dW5pLmNvbXByZXNzSW1hZ2Uoe1xyXG5cdFx0XHRcdFx0XHRcdHNyYzogcmVzLnRlbXBGaWxlUGF0aHNbMF0sXHJcblx0XHRcdFx0XHRcdFx0cXVhbGl0eTogNTAsXHJcblx0XHRcdFx0XHRcdFx0c3VjY2VzczogZnVuY3Rpb24ocmVzKSB7XHJcblx0XHRcdFx0XHRcdFx0XHR1bmkudXBsb2FkRmlsZSh7XHJcblx0XHRcdFx0XHRcdFx0XHRcdHVybDogdGhhdC5hcHAuZ2xvYmFsRGF0YS5yZXF1ZXN0LmFwaVVybCArIFwiYXR0YWNoL3VwbG9hZGltYWdlXCIsXHJcblx0XHRcdFx0XHRcdFx0XHRcdGZpbGVQYXRoOiByZXMudGVtcEZpbGVQYXRoLFxyXG5cdFx0XHRcdFx0XHRcdFx0XHRuYW1lOiAnZmlsZScsXHJcblx0XHRcdFx0XHRcdFx0XHRcdGZvcm1EYXRhOiB0aGF0LmFwcC5nbG9iYWxEYXRhLnJlcXVlc3QuYmFzZURhdGEsXHJcblx0XHRcdFx0XHRcdFx0XHRcdHN1Y2Nlc3M6IGZ1bmN0aW9uKHVwbG9hZEZpbGVSZXMpIHtcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHR1bmkuaGlkZUxvYWRpbmcoKTtcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRsZXQgcmVzcG9uc2UgPSB7fTtcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHR0cnkge1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0cmVzcG9uc2UgPSBKU09OLnBhcnNlKHVwbG9hZEZpbGVSZXMuZGF0YSk7XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0fSBjYXRjaCAoZXJyKSB7XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHR1bmkuc2hvd01vZGFsKHtcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0c2hvd0NhbmNlbDogZmFsc2UsXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdHRpdGxlOiAn5LiK5Lyg5aSx6LSlJyxcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0Y29udGVudDogJ+acjeWKoeWZqOWPkeeUn+mUmeivrycsXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdHN1Y2Nlc3M6IGZ1bmN0aW9uKCkge31cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdH0pO1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRpZiAocmVzcG9uc2UuY29kZSA9PSAyMDApIHtcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdHRoYXQuYXBwLnJlcXVlc3Qoe1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHR1cmw6IFwibWVzc2FnZS9zZW5kXCIsXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdGRhdGE6IHtcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHR3aGVyZTogJ2NoYW5uZWwnLFxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdHRvOiB0aGF0LnJvb21faWQsXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0dHlwZTogJ2ltZycsXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0bXNnOiByZXNwb25zZS5kYXRhLmF0dGFjaF90aHVtYixcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRyZXNvdXJjZTogcmVzcG9uc2UuZGF0YS5hdHRhY2hfcGF0aCxcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0fSxcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0c3VjY2VzczogZnVuY3Rpb24ocmVzKSB7fSxcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0ZXJyb3I6IGZ1bmN0aW9uKHJlcykge1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdHRoYXQubWVzc2FnZU9iai5tZXNzYWdlID0gbWVzc2FnZV9vbGQ7XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0dW5pLnNob3dNb2RhbCh7XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHR0aXRsZTogJ+WPkemAgeWksei0pScsXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRjb250ZW50OiByZXMubXNnLFxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0c2hvd0NhbmNlbDogZmFsc2VcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHR9KTtcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0fSk7XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0fSBlbHNlIHtcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdHVuaS5zaG93TW9kYWwoe1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRzaG93Q2FuY2VsOiBmYWxzZSxcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0dGl0bGU6ICfkuIrkvKDlpLHotKUnLFxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRjb250ZW50OiByZXNwb25zZS5tc2csXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdHN1Y2Nlc3M6IGZ1bmN0aW9uKCkge31cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdH0pO1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0XHRcdFx0fSk7XHJcblx0XHRcdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0XHR9KVxyXG5cdFx0XHRcdFx0fVxyXG5cdFx0XHRcdH0pO1xyXG5cdFx0XHR9LFxyXG5cdFx0XHRmdWxsVmlld0ltYWdlKHVybCkge1xyXG5cdFx0XHRcdHVuaS5wcmV2aWV3SW1hZ2Uoe1xyXG5cdFx0XHRcdFx0dXJsczogW3VybF0sXHJcblx0XHRcdFx0XHRsb25nUHJlc3NBY3Rpb25zOiB7XHJcblx0XHRcdFx0XHRcdGl0ZW1MaXN0OiBbJ+S/neWtmOWbvueJhycsICfkuL7miqXlm77niYcnXSxcclxuXHRcdFx0XHRcdFx0c3VjY2VzczogZnVuY3Rpb24oZGF0YSkge30sXHJcblx0XHRcdFx0XHRcdGZhaWw6IGZ1bmN0aW9uKGVycikge31cclxuXHRcdFx0XHRcdH1cclxuXHRcdFx0XHR9KTtcclxuXHRcdFx0fVxyXG5cdFx0fVxyXG5cdH1cclxuPC9zY3JpcHQ+XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///8\n");

/***/ }),
/* 9 */
/*!*********************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-uni/lib/format-log.js ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });exports.log = log;exports.default = formatLog;function typof(v) {
  var s = Object.prototype.toString.call(v);
  return s.substring(8, s.length - 1);
}

function isDebugMode() {
  /* eslint-disable no-undef */
  return typeof __channelId__ === 'string' && __channelId__;
}

function log(type) {
  for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
    args[_key - 1] = arguments[_key];
  }
  console[type].apply(console, args);
}

function formatLog() {
  for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
    args[_key] = arguments[_key];
  }
  var type = args.shift();
  if (isDebugMode()) {
    args.push(args.pop().replace('at ', 'uni-app:///'));
    return console[type].apply(console, args);
  }

  var msgs = args.map(function (v) {
    var type = Object.prototype.toString.call(v).toLowerCase();

    if (type === '[object object]' || type === '[object array]') {
      try {
        v = '---BEGIN:JSON---' + JSON.stringify(v) + '---END:JSON---';
      } catch (e) {
        v = '[object object]';
      }
    } else {
      if (v === null) {
        v = '---NULL---';
      } else if (v === undefined) {
        v = '---UNDEFINED---';
      } else {
        var vType = typof(v).toUpperCase();

        if (vType === 'NUMBER' || vType === 'BOOLEAN') {
          v = '---BEGIN:' + vType + '---' + v + '---END:' + vType + '---';
        } else {
          v = String(v);
        }
      }
    }

    return v;
  });
  var msg = '';

  if (msgs.length > 1) {
    var lastMsg = msgs.pop();
    msg = msgs.join('---COMMA---');

    if (lastMsg.indexOf(' at ') === 0) {
      msg += lastMsg;
    } else {
      msg += '---COMMA---' + lastMsg;
    }
  } else {
    msg = msgs[0];
  }

  console[type](msg);
}

/***/ }),
/* 10 */
/*!******************************************************************************************!*\
  !*** D:/Hamm/ChatAPP/pages/index/index.nvue?vue&type=style&index=0&lang=css&mpType=page ***!
  \******************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_0_1_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_0_2_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_0_3_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_index_nvue_vue_type_style_index_0_lang_css_mpType_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-hbuilderx/packages/webpack-uni-nvue-loader/lib/style.js!../../../HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--8-oneOf-0-1!../../../HBuilderX/plugins/uniapp-cli/node_modules/postcss-loader/src??ref--8-oneOf-0-2!../../../HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--8-oneOf-0-3!../../../HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./index.nvue?vue&type=style&index=0&lang=css&mpType=page */ 11);
/* harmony import */ var _HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_0_1_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_0_2_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_0_3_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_index_nvue_vue_type_style_index_0_lang_css_mpType_page__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_0_1_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_0_2_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_0_3_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_index_nvue_vue_type_style_index_0_lang_css_mpType_page__WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_0_1_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_0_2_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_0_3_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_index_nvue_vue_type_style_index_0_lang_css_mpType_page__WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_0_1_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_0_2_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_0_3_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_index_nvue_vue_type_style_index_0_lang_css_mpType_page__WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_0_1_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_0_2_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_0_3_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_index_nvue_vue_type_style_index_0_lang_css_mpType_page__WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),
/* 11 */
/*!****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-hbuilderx/packages/webpack-uni-nvue-loader/lib/style.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--8-oneOf-0-1!./node_modules/postcss-loader/src??ref--8-oneOf-0-2!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--8-oneOf-0-3!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!D:/Hamm/ChatAPP/pages/index/index.nvue?vue&type=style&index=0&lang=css&mpType=page ***!
  \****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = {
  "uniapp": {
    "position": "fixed",
    "left": 0,
    "right": 0,
    "top": 0,
    "bottom": 0
  },
  "chatInput": {
    "position": "fixed",
    "left": 0,
    "bottom": 0,
    "right": 0,
    "height": "50",
    "backgroundColor": "#FFFFFF",
    "fontSize": "16",
    "paddingTop": "5",
    "paddingRight": "10",
    "paddingBottom": "5",
    "paddingLeft": "50"
  },
  "historyList": {
    "position": "fixed",
    "left": 0,
    "right": 0,
    "bottom": 0,
    "top": 0,
    "backgroundColor": "#F5F5F5"
  },
  "item_system": {
    "textAlign": "center",
    "marginTop": "20",
    "marginLeft": "20",
    "marginRight": "20"
  },
  "item_system_text": {
    "fontSize": "12",
    "color": "#aaaaaa",
    "textAlign": "center"
  },
  "item": {
    "flexDirection": "column",
    "marginTop": "20",
    "marginRight": "10",
    "marginBottom": "10",
    "marginLeft": "10",
    "justifyContent": "flex-start",
    "alignItems": "flex-start"
  },
  "item_mine": {
    "flexDirection": "column",
    "marginTop": "20",
    "marginRight": "10",
    "marginBottom": "10",
    "marginLeft": "10",
    "textAlign": "right",
    "justifyContent": "flex-end",
    "alignItems": "flex-end"
  },
  "user_head_box": {
    "flexDirection": "row"
  },
  "user_head_image": {
    "width": "50",
    "height": "50",
    "borderRadius": "10",
    "borderColor": "#FFFFFF",
    "borderStyle": "solid",
    "borderWidth": "1"
  },
  "chat_item_body_left": {
    "textAlign": "left",
    "justifyContent": "flex-start",
    "paddingLeft": "60",
    "paddingRight": "80",
    "marginTop": "-30",
    "flex": 1,
    "flexWrap": "wrap"
  },
  "chat_item_body_right": {
    "textAlign": "right",
    "paddingLeft": "80",
    "paddingRight": "60",
    "marginTop": "-30",
    "flex": 1,
    "flexWrap": "wrap-reverse"
  },
  "chat_item_user_name": {
    "fontSize": "14",
    "color": "#999999",
    "marginTop": "3",
    "marginLeft": "10",
    "marginRight": "10"
  },
  "chat_item_text": {
    "marginTop": "10",
    "borderRadius": "10",
    "backgroundColor": "#FFFFFF",
    "color": "#333333",
    "paddingTop": "10",
    "paddingRight": "10",
    "paddingBottom": "10",
    "paddingLeft": "10",
    "fontSize": "16"
  },
  "chat_item_image_box": {
    "marginTop": "10",
    "borderRadius": "10",
    "paddingTop": "2",
    "paddingRight": "2",
    "paddingBottom": "2",
    "paddingLeft": "2",
    "backgroundColor": "#FFFFFF"
  },
  "chat_item_image_content": {
    "width": 100,
    "height": 100
  },
  "player": {
    "position": "fixed",
    "right": "10",
    "top": "10",
    "zIndex": 100,
    "flexDirection": "row",
    "backgroundColor": "rgba(0,0,0,0.6)",
    "borderRadius": "10",
    "paddingTop": "5",
    "paddingRight": "5",
    "paddingBottom": "5",
    "paddingLeft": "5"
  },
  "player_image": {
    "width": "40",
    "height": "40",
    "borderRadius": "10"
  },
  "player_info": {
    "paddingTop": "5",
    "paddingRight": "10",
    "paddingBottom": "5",
    "paddingLeft": "5"
  },
  "player_song": {
    "fontSize": "14",
    "color": "#FFFFFF"
  },
  "player_user": {
    "fontSize": "12",
    "color": "#cccccc",
    "marginTop": "5"
  },
  "chatMenu_image": {
    "position": "fixed",
    "right": "10",
    "bottom": "10",
    "width": "36",
    "height": "36"
  },
  "chatMenu_emoji": {
    "position": "fixed",
    "left": "10",
    "bottom": "10",
    "width": "32",
    "height": "32"
  },
  "menuBody": {
    "flexDirection": "row"
  },
  "menuBox": {
    "zIndex": 10,
    "position": "fixed",
    "left": "10",
    "bottom": 0,
    "right": "10",
    "backgroundColor": "rgba(0,0,0,0.6)",
    "borderRadius": "10",
    "flexDirection": "row",
    "paddingTop": "10",
    "paddingRight": "10",
    "paddingBottom": "10",
    "paddingLeft": "10"
  },
  "menuMain": {
    "textAlign": "center",
    "justifyContent": "center",
    "alignItems": "center",
    "backgroundColor": "#ffffff",
    "color": "#666666",
    "paddingTop": "10",
    "paddingRight": "10",
    "paddingBottom": "10",
    "paddingLeft": "10",
    "height": "60",
    "width": "60",
    "borderRadius": "10"
  },
  "menuItem": {
    "marginTop": "5",
    "marginRight": "5",
    "marginBottom": "5",
    "marginLeft": "5",
    "textAlign": "center",
    "justifyContent": "center",
    "alignItems": "center"
  },
  "menuTitle": {
    "textAlign": "center",
    "fontSize": "12",
    "paddingTop": "10",
    "paddingRight": "10",
    "paddingBottom": "10",
    "paddingLeft": "10",
    "color": "#FFFFFF"
  },
  "menuImage": {
    "width": "24",
    "height": "24"
  },
  "emoji": {
    "position": "fixed",
    "left": "10",
    "right": "10",
    "bottom": 0,
    "backgroundColor": "rgba(0,0,0,0.6)",
    "flexDirection": "row",
    "borderRadius": "10",
    "paddingTop": "10",
    "paddingRight": "0",
    "paddingBottom": "10",
    "paddingLeft": "0",
    "zIndex": 100,
    "flexWrap": "wrap",
    "justifyContent": "center",
    "alignItems": "center"
  },
  "emoji_item": {
    "width": "40",
    "height": "40",
    "marginTop": "10",
    "marginRight": "10",
    "marginBottom": "10",
    "marginLeft": "10"
  }
}

/***/ }),
/* 12 */
/*!**********************************************************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/runtime/componentNormalizer.js ***!
  \**********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return normalizeComponent; });
/* globals __VUE_SSR_CONTEXT__ */

// IMPORTANT: Do NOT use ES2015 features in this file (except for modules).
// This module is a runtime utility for cleaner component module output and will
// be included in the final webpack user bundle.

function normalizeComponent (
  scriptExports,
  render,
  staticRenderFns,
  functionalTemplate,
  injectStyles,
  scopeId,
  moduleIdentifier, /* server only */
  shadowMode, /* vue-cli only */
  components, // fixed by xxxxxx auto components
  renderjs // fixed by xxxxxx renderjs
) {
  // Vue.extend constructor export interop
  var options = typeof scriptExports === 'function'
    ? scriptExports.options
    : scriptExports

  // fixed by xxxxxx auto components
  if (components) {
    if (!options.components) {
      options.components = {}
    }
    var hasOwn = Object.prototype.hasOwnProperty
    for (var name in components) {
      if (hasOwn.call(components, name) && !hasOwn.call(options.components, name)) {
        options.components[name] = components[name]
      }
    }
  }
  // fixed by xxxxxx renderjs
  if (renderjs) {
    (renderjs.beforeCreate || (renderjs.beforeCreate = [])).unshift(function() {
      this[renderjs.__module] = this
    });
    (options.mixins || (options.mixins = [])).push(renderjs)
  }

  // render functions
  if (render) {
    options.render = render
    options.staticRenderFns = staticRenderFns
    options._compiled = true
  }

  // functional template
  if (functionalTemplate) {
    options.functional = true
  }

  // scopedId
  if (scopeId) {
    options._scopeId = 'data-v-' + scopeId
  }

  var hook
  if (moduleIdentifier) { // server build
    hook = function (context) {
      // 2.3 injection
      context =
        context || // cached call
        (this.$vnode && this.$vnode.ssrContext) || // stateful
        (this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext) // functional
      // 2.2 with runInNewContext: true
      if (!context && typeof __VUE_SSR_CONTEXT__ !== 'undefined') {
        context = __VUE_SSR_CONTEXT__
      }
      // inject component styles
      if (injectStyles) {
        injectStyles.call(this, context)
      }
      // register component module identifier for async chunk inferrence
      if (context && context._registeredComponents) {
        context._registeredComponents.add(moduleIdentifier)
      }
    }
    // used by ssr in case component is cached and beforeCreate
    // never gets called
    options._ssrRegister = hook
  } else if (injectStyles) {
    hook = shadowMode
      ? function () { injectStyles.call(this, this.$root.$options.shadowRoot) }
      : injectStyles
  }

  if (hook) {
    if (options.functional) {
      // for template-only hot-reload because in that case the render fn doesn't
      // go through the normalizer
      options._injectStyles = hook
      // register for functioal component in vue file
      var originalRender = options.render
      options.render = function renderWithStyleInjection (h, context) {
        hook.call(context)
        return originalRender(h, context)
      }
    } else {
      // inject component registration as beforeCreate hook
      var existing = options.beforeCreate
      options.beforeCreate = existing
        ? [].concat(existing, hook)
        : [hook]
    }
  }

  return {
    exports: scriptExports,
    options: options
  }
}


/***/ })
/******/ ]);