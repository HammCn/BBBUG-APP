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
                      style: { bottom: _vm.historyListBottom + "px" },
                      attrs: {
                        id: "historyList",
                        scrollY: "true",
                        scrollWithAnimation: true,
                        scrollIntoView: _vm.viewId
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
                                      { staticClass: ["user_head_box"] },
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
                                      { staticClass: ["user_head_box"] },
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
                        staticClass: ["bottom"],
                        attrs: { id: "im_" + _vm.historyList.length }
                      })
                    ]
                  ),
                  _vm.chatType == "text" && _vm.room.room_sendmsg == 1
                    ? _c("u-input", {
                        staticClass: ["chatInput"],
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
                    attrs: { src: "/static/image/app.png", mode: "widthFix" },
                    on: { click: _vm.doShowMenuBox }
                  }),
                  _vm.song.song
                    ? _c(
                        "view",
                        {
                          staticClass: ["player"],
                          on: { click: _vm.doMusicClicked }
                        },
                        [
                          _c("view", { staticClass: ["player_info"] }, [
                            _c("u-text", { staticClass: ["player_song"] }, [
                              _vm._v(
                                _vm._s(_vm.song.song.name) +
                                  " - " +
                                  _vm._s(_vm.song.song.singer)
                              )
                            ]),
                            _c("u-text", { staticClass: ["player_user"] }, [
                              _vm._v(
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
                  _vm.showMenuBox
                    ? _c(
                        "view",
                        { staticClass: ["menuBox"] },
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
eval("/* WEBPACK VAR INJECTION */(function(__f__) {Object.defineProperty(exports, \"__esModule\", { value: true });exports.default = void 0; //\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\nvar _default =\n{\n  data: function data() {\n    return {\n      // 聊天页面时时滚动样式\n      viewId: \"\",\n      historyListBottom: 60,\n      bgAudioMannager: null,\n      config: {\n        lockScreen: false },\n\n      loading: false,\n      showRoomPage: false,\n      showMenuBox: false,\n      showPasswordForm: false,\n      app: getApp(),\n      userInfo: null,\n      song: {\n        song: null,\n        user: null },\n\n      room_id: 0,\n      room: false,\n      password: \"\",\n      rotate: 0,\n      playerTimer: null,\n      chatType: 'text',\n      historyKey: 'historyList_',\n      historyList: [],\n      messageObj: {\n        message: \"\",\n        at: false,\n        focus: false },\n\n      //双击\n      lastTapTimeoutFunc: null,\n      touchStartTime: 0,\n      touchEndTime: 0,\n      lastTapTime: 0 };\n\n  },\n  onLoad: function onLoad() {\n    var that = this;\n    that.bgAudioMannager = uni.getBackgroundAudioManager();\n    this.room_id = uni.getStorageSync('room_id') || 10000;\n    that.app.user.getMyInfo({\n      success: function success(userInfo) {\n        that.userInfo = userInfo;\n        that.getRoomInfo();\n      } });\n\n    uni.$on('WebSocketMessage', function (data) {\n      try {\n        that.messageController(JSON.parse(data));\n        that.autoScroll();\n      } catch (error) {\n        __f__(\"error\", error, \" at pages/index/index.nvue:380\");\n      }\n    });\n    uni.$on('IndexReload', function () {\n      that.app.user.getMyInfo({\n        success: function success(userInfo) {\n          that.userInfo = userInfo;\n          that.getRoomInfo();\n        } });\n\n    });\n    uni.$on('AtUserEvent', function (user) {\n      that.doAtUser(user);\n    });\n    uni.$on('RoomChanged', function (room_id) {\n      __f__(\"log\", room_id, \" at pages/index/index.nvue:395\");\n      uni.setNavigationBarTitle({\n        title: '正在进入' });\n\n      that.room_id = room_id;\n      that.showPasswordForm = false;\n      that.showRoomPage = false;\n      that.password = '';\n      uni.setStorageSync('room_id', parseInt(that.room_id));\n      that.getRoomInfo();\n    });\n    uni.onKeyboardHeightChange(function (e) {});\n    that.bgAudioMannager.onCanplay(function () {\n      var time = parseInt(new Date().valueOf() / 1000) - that.song.since - 3;\n      that.bgAudioMannager.seek(time > 0 ? time : 0);\n    });\n    that.bgAudioMannager.onEnded(function () {\n      that.song = {\n        song: null,\n        user: null };\n\n    });\n  },\n  onNavigationBarButtonTap: function onNavigationBarButtonTap(res) {\n    var that = this;\n    switch (res.text) {\n      case '换房':\n        uni.navigateTo({\n          url: \"../room/select\" });\n\n        break;\n      case '我的':\n        if (that.userInfo.user_id <= 0) {\n          that.app.user.login();\n        } else {\n          uni.navigateTo({\n            url: '../user/index' });\n\n        }\n        break;\n      default:}\n\n  },\n  methods: {\n    doUserHeadEvent: function doUserHeadEvent(e) {\n      var that = this;\n      that.showMenuUserHead(e);\n      return;\n      // 控制点击事件在350ms内触发，加这层判断是为了防止长按时会触发点击事件\n      if (that.touchEndTime - that.touchStartTime < 350) {\n        // 当前点击的时间\n        var currentTime = e.timeStamp;\n        var lastTapTime = that.lastTapTime;\n        // 更新最后一次点击时间\n        that.lastTapTime = currentTime;\n\n        // 如果两次点击时间在300毫秒内，则认为是双击事件\n        if (currentTime - lastTapTime < 300) {\n          // 成功触发双击事件时，取消单击事件的执行\n          clearTimeout(that.lastTapTimeoutFunc);\n          that.doTouch(e.user);\n          return;\n        }\n      }\n      that.showMenuUserHead(e);\n    },\n    doShowMenuBox: function doShowMenuBox() {\n      var that = this;\n      that.showMenuBox = true;\n      that.historyListBottom = 140;\n      uni.hideKeyboard();\n      that.autoScroll();\n    },\n    doKeyDown: function doKeyDown() {\n      var that = this;\n      if (that.messageObj.at) {\n        if (that.messageObj.message.indexOf('@' + decodeURIComponent(that.messageObj.at.user_name)) < 0) {\n          //@的昵称已经被改过了\n          that.messageObj.at = false;\n        }\n      }\n    },\n    doMusicClicked: function doMusicClicked() {\n      var that = this;\n      var menu = [\n      '不喜欢'];\n\n      if (that.userInfo.user_admin || that.room.room_user == that.userInfo.user_id) {\n        menu = [\n        '切歌'];\n\n      }\n      uni.showActionSheet({\n        itemList: menu,\n        success: function success(res) {\n          __f__(\"log\", res.tapIndex, \" at pages/index/index.nvue:490\");\n          var buttonName = menu[res.tapIndex];\n          switch (buttonName) {\n            case '切歌':\n              uni.showModal({\n                title: '切歌提醒',\n                content: '是否确认切掉当前播放的歌?',\n                cancelText: '取消',\n                confirmColor: '#FF4500',\n                confirmText: '切歌',\n                success: function success(res) {\n                  if (res.confirm) {\n                    that.app.request({\n                      url: \"song/pass\",\n                      data: {\n                        room_id: that.room_id,\n                        mid: that.song.song.mid },\n\n                      success: function success() {} });\n\n                  }\n                } });\n\n              break;\n            case '不喜欢':\n              that.app.request({\n                url: \"song/pass\",\n                data: {\n                  room_id: that.room_id,\n                  mid: that.song.song.mid },\n\n                success: function success(res) {\n                  that.bgAudioMannager.pause();\n                  that.song = {\n                    song: null,\n                    user: null };\n\n                  uni.showModal({\n                    title: '不喜欢',\n                    content: res.msg,\n                    showCancel: false,\n                    success: function success() {} });\n\n                } });\n\n              break;\n            default:}\n\n        } });\n\n    },\n    doAtUser: function doAtUser(user) {\n      var that = this;\n      uni.showToast({\n        title: \"at\" });\n\n      that.messageObj.at = user;\n      that.messageObj.message = \"@\" + decodeURIComponent(user.user_name) + \" \" + that.messageObj.message;\n      that.messageObj.focus = true;\n    },\n    autoScroll: function autoScroll() {var _this = this;\n      var that = this;\n      this.viewIndex = \"\";\n      //设置viewIndex值，使聊天滚动到底部  \n      this.$nextTick(function () {\n        _this.viewId = \"im_\" + _this.historyList.length;\n      });\n    },\n    historyClicked: function historyClicked() {\n      var that = this;\n      that.showMenuBox = false;\n      that.historyListBottom = 60;\n      uni.hideKeyboard();\n      that.autoScroll();\n    },\n    saveMessageHistory: function saveMessageHistory() {\n      var that = this;\n      uni.setStorageSync(that.historyKey + that.room_id, JSON.stringify(that.historyList));\n    },\n    messageController: function messageController(msg) {\n      var that = this;\n      __f__(\"log\", msg, \" at pages/index/index.nvue:571\");\n      switch (msg.type) {\n        case 'text':\n        case 'img':\n        case 'system':\n          if (msg.type == 'text' && msg.at) {\n            msg.content = \"@\" + decodeURIComponent(msg.at.user_name) + \" \" + msg.content;\n          }\n          that.addMessageToList(msg);\n          break;\n        case 'addSong':\n          if (msg.at) {\n            that.addSystemMessage(decodeURIComponent(msg.user.user_name) + \" 送了一首 《\" + msg.song.name + \"》 给 \" +\n            decodeURIComponent(msg.at.user_name), '#333');\n          } else {\n            that.addSystemMessage(decodeURIComponent(msg.user.user_name) + \" 点了一首《\" + msg.song.name + \"》\", '#333');\n          }\n          that.saveMessageHistory();\n          break;\n        case 'pass':\n          that.addSystemMessage(decodeURIComponent(msg.user.user_name) + \" 切掉了《\" + msg.song.name + \"》\", '#ff4500');\n          that.saveMessageHistory();\n          break;\n        case 'chat_bg':\n          that.addSystemMessage(decodeURIComponent(msg.user.user_name) + \" 运气大爆发,触发了点歌背景墙特效(1小时内播放歌曲时有效)!\", 'green', '#eee');\n          that.saveMessageHistory();\n          break;\n        case 'push':\n          that.addSystemMessage(decodeURIComponent(msg.user.user_name) + \" 将歌曲 《\" + msg.song.name + \"》 设为置顶候播放\");\n          that.saveMessageHistory();\n          break;\n        case 'removeSong':\n          that.addSystemMessage(decodeURIComponent(msg.user.user_name) + \" 将歌曲 《\" + msg.song.name + \"》 从队列移除\");\n          that.saveMessageHistory();\n          break;\n        case 'removeban':\n          that.addSystemMessage(decodeURIComponent(msg.user.user_name) + \" 将 \" + decodeURIComponent(msg.ban.user_name) +\n          \" 解禁\");\n          that.saveMessageHistory();\n          break;\n        case 'shutdown':\n          that.addSystemMessage(decodeURIComponent(msg.user.user_name) + \" 禁止了用户 \" + decodeURIComponent(msg.ban.user_name) +\n          \" 发言\");\n          that.saveMessageHistory();\n          break;\n        case 'songdown':\n          that.addSystemMessage(decodeURIComponent(msg.user.user_name) + \" 禁止了用户 \" + decodeURIComponent(msg.ban.user_name) +\n          \" 点歌\");\n          that.saveMessageHistory();\n          break;\n        case 'back':\n          for (var _i = 0; _i < that.historyList.length; _i++) {\n            if (that.historyList[_i].key == msg.key) {\n              that.historyList.splice(_i, 1);\n              break;\n            }\n          }\n          that.addSystemMessage(decodeURIComponent(msg.user.user_name) + \" 撤回了一条消息\");\n          that.saveMessageHistory();\n          break;\n        case 'playSong':\n          that.playMusic(msg);\n          break;\n        default:}\n\n    },\n    playMusic: function playMusic(msg) {\n      var that = this;\n      if (that.song.song && that.song.song.mid == msg.song.mid) {\n        return;\n      }\n      __f__(\"log\", 'Play Music', \" at pages/index/index.nvue:642\");\n      that.song = msg;\n      that.bgAudioMannager.title = msg.song.name + \" - \" + msg.song.singer;\n      that.bgAudioMannager.singer = \"点歌人:\" + decodeURIComponent(msg.user.user_name) + ' (' + that.room.room_name + ')';\n      that.bgAudioMannager.coverImgUrl = msg.song.pic;\n      that.bgAudioMannager.src = \"https://api.bbbug.com/api/song/playurl?mid=\" + msg.song.mid;\n      that.bgAudioMannager.play();\n      that.addSystemMessage('正在播放 ' + msg.song.name + '(' + msg.song.singer + ')');\n    },\n    doSendMessage: function doSendMessage(e) {\n      var that = this;\n      var message_old = that.messageObj.message;\n      var message = message_old;\n      that.messageObj.message = '';\n      if (message_old) {\n        if (that.messageObj.at) {\n          message = message_old.replace(\"@\" + decodeURIComponent(that.messageObj.at.user_name),\n          '');\n        }\n        that.app.request({\n          url: \"message/send\",\n          data: {\n            type: 'text',\n            where: \"channel\",\n            to: that.room_id,\n            msg: encodeURIComponent(message),\n            at: that.messageObj.at },\n\n          success: function success(res) {\n            that.messageObj.at = false;\n          },\n          error: function error(res) {\n            that.messageObj.message = message_old;\n            uni.showModal({\n              title: '发送失败',\n              content: res.msg,\n              showCancel: false });\n\n          } });\n\n      }\n    },\n    randomString: function randomString(len) {\n      len = len || 32;\n      var $chars = 'ABCDEFGHJKMNPQRSTWXYZabcdefhijkmnprstwxyz2345678'; /****默认去掉了容易混淆的字符oOLl,9gq,Vv,Uu,I1****/\n      var maxPos = $chars.length;\n      var pwd = '';\n      for (i = 0; i < len; i++) {\n        pwd += $chars.charAt(Math.floor(Math.random() * maxPos));\n      }\n      return pwd;\n    },\n    addMessageToList: function addMessageToList(msg) {\n      var that = this;\n      if (that.historyList.length > 100) {\n        that.historyList.shift();\n      }\n      that.historyList.push(msg);\n      that.saveMessageHistory();\n      that.autoScroll();\n    },\n    urldecode: function urldecode(str) {\n      return decodeURIComponent(str);\n    },\n    connect: function connect() {\n      var that = this;\n      if (that.app.webSocket.isConnected) {\n        __f__(\"log\", \"需要斷開\", \" at pages/index/index.nvue:709\");\n        that.app.webSocket.closeWss();\n        setTimeout(function () {\n          that.connect();\n        }, 1000);\n      }\n      that.app.webSocket.connectWss();\n      uni.hideLoading();\n      // let str = uni.getStorageSync(that.historyKey + that.room_id) || false;\n      // that.historyList = str ? JSON.parse(str) : [];\n      that.addSystemMessage(that.room.room_notice || '服务器连接成功');\n      that.showPasswordForm = false;\n      that.showRoomPage = true;\n      that.app.request({\n        url: 'message/getMessageList',\n        data: {\n          room_id: that.room_id,\n          per_page: 100 },\n\n        success: function success(res) {\n          that.historyList = [];\n          for (var _i2 = 0; _i2 < res.data.length; _i2++) {\n            var _obj = false;\n            try {\n              _obj = JSON.parse(decodeURIComponent(res.data[_i2].message_content));\n            } catch (error) {}\n            if (!_obj) {\n              continue;\n            }\n            if (_obj.type == \"text\") {\n              if (_obj.at) {\n                _obj.content = '@' + _obj.at.user_name + \" \" + _obj.content;\n              }\n            }\n            _obj.time = res.data[_i2].message_createtime;\n            that.historyList.unshift(_obj);\n          }\n          that.autoScroll();\n        },\n\n        error: function error(res) {\n          __f__(\"log\", res, \" at pages/index/index.nvue:750\");\n        } });\n\n\n    },\n    getRoomInfo: function getRoomInfo() {\n      var that = this;\n      uni.showLoading({\n        title: '连接房间服务器' });\n\n      that.app.request({\n        url: 'room/getRoomInfo',\n        data: {\n          room_id: that.room_id,\n          room_password: that.password },\n\n        success: function success(res) {\n          that.room = res.data;\n          // uni.setNavigationBarTitle({\n          // \ttitle: that.room.room_name\n          // });\n          that.app.request({\n            url: 'room/getWebsocketUrl',\n            data: {\n              channel: that.room_id },\n\n            success: function success(res) {\n              that.app.webSocket.config.wssUrl = 'wss://websocket.bbbug.com/?account=' +\n              res.data.account + '&channel=' +\n              res.data.channel + '&ticket=' + res.data.ticket;\n\n              that.connect();\n\n            },\n\n            error: function error(res) {\n              __f__(\"log\", res, \" at pages/index/index.nvue:786\");\n            } });\n\n        },\n        error: function error(res) {\n          uni.hideLoading();\n          if (res.code == 403) {\n            uni.setNavigationBarTitle({\n              title: '密码房' });\n\n            that.showPasswordForm = true;\n            that.showRoomPage = false;\n            if (that.password) {\n              uni.showModal({\n                showCancel: false,\n                title: '进入失败',\n                content: res.msg,\n                success: function success() {} });\n\n            }\n          } else {\n            uni.showModal({\n              showCancel: false,\n              title: '进入失败',\n              content: res.msg,\n              success: function success() {\n                uni.navigateBack();\n              } });\n\n          }\n        } });\n\n    },\n    addSystemMessage: function addSystemMessage(msg) {var color = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '#999';var bg = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 'tansparent';\n      var that = this;\n      that.historyList.push({\n        type: \"system\",\n        content: msg,\n        bg: bg,\n        color: color });\n\n      that.autoScroll();\n    },\n    doOpenPage: function doOpenPage(page) {\n      var that = this;\n      switch (page) {\n        case 'addSong':\n          uni.navigateTo({\n            url: '../song/search?room_id=' + that.room_id });\n\n          break;\n        case 'mySong':\n          uni.navigateTo({\n            url: '../song/my?room_id=' + that.room_id });\n\n          break;\n        case 'songList':\n          uni.navigateTo({\n            url: '../song/list?room_id=' + that.room_id });\n\n          break;\n        case 'onLine':\n          var isMaster = 0;\n          if (that.userInfo.user_admin || that.room.room_user == that.userInfo.user_id) {\n            isMaster = 1;\n          }\n          uni.navigateTo({\n            url: '../room/online?room_id=' + that.room_id + \"&room_admin=\" + isMaster });\n\n          break;\n        default:}\n\n    },\n    showMenuUserHead: function showMenuUserHead(msg) {\n      __f__(\"log\", msg, \" at pages/index/index.nvue:860\");\n      var user = msg.user;\n      var that = this;\n      var menu = ['进入主页', '@一下Ta', '送歌给Ta'];\n      if (that.userInfo.user_admin || that.room.room_user == that.userInfo.user_id) {\n        menu = ['进入主页', '@一下Ta', '送歌给Ta', '撤回消息', '禁止点歌', '禁止发言', '全部解禁'];\n      } else if (user.user_id == that.userInfo.user_id) {\n        //发消息人是自己\n        menu = ['进入主页', '@一下Ta', '送歌给Ta', '撤回消息'];\n      } else {\n        //其他人的消息\n      }\n      uni.showActionSheet({\n        itemList: menu,\n        success: function success(res) {\n          switch (menu[res.tapIndex]) {\n            case '送歌给Ta':\n              uni.navigateTo({\n                url: '../song/search?room_id=' + that.room_id + \"&at=\" + user.user_id + \"&name=\" + user.user_name });\n\n              break;\n            case '@一下Ta':\n              that.doAtUser(user);\n              break;\n            case '全部解禁':\n              that.app.request({\n                url: 'user/removeban',\n                data: {\n                  room_id: that.room_id,\n                  user_id: user.user_id },\n\n                loading: \"解禁中\",\n                success: function success(res) {\n                  uni.showModal({\n                    title: '解禁成功',\n                    content: res.msg,\n                    showCancel: false,\n                    success: function success() {\n                      that.getuserList();\n                    } });\n\n                } });\n\n              break;\n            case '禁止发言':\n              that.app.request({\n                url: 'user/shutdown',\n                data: {\n                  room_id: that.room_id,\n                  user_id: user.user_id },\n\n                loading: \"禁言中\",\n                success: function success(res) {\n                  uni.showModal({\n                    title: '禁言成功',\n                    content: res.msg,\n                    showCancel: false,\n                    success: function success() {\n                      that.getuserList();\n                    } });\n\n                } });\n\n              break;\n            case '禁止点歌':\n              that.app.request({\n                url: 'user/songdown',\n                data: {\n                  room_id: that.room_id,\n                  user_id: user.user_id },\n\n                loading: \"禁歌中\",\n                success: function success(res) {\n                  uni.showModal({\n                    title: '禁歌成功',\n                    content: res.msg,\n                    showCancel: false,\n                    success: function success() {\n                      that.getuserList();\n                    } });\n\n                } });\n\n              break;\n            default:\n              uni.showModal({\n                title: \"BBBUG\",\n                content: menu[res.tapIndex] + \"即将上线\",\n                showCancel: false });}\n\n\n        } });\n\n    },\n    getStaticUrl: function getStaticUrl(url) {\n      if (url.indexOf('https://') > -1 || url.indexOf('http://') > -1) {\n        return url;\n      } else {\n        return 'https://cdn.bbbug.com/uploads/' + url;\n      }\n    },\n    doTouch: function doTouch(user) {\n      var that = this;\n      that.request({\n        url: \"message/touch\",\n        data: {\n          at: user.user_id,\n          room_id: that.room_id },\n\n        success: function success(res) {} });\n\n    },\n    chooseImage: function chooseImage() {\n      var that = this;\n      uni.chooseImage({\n        sizeType: \"compressed\",\n        sourceType: ['album'],\n        count: 1,\n        fail: function fail(res) {\n          __f__(\"log\", res, \" at pages/index/index.nvue:979\");\n        },\n        success: function success(res) {\n          uni.showLoading({\n            title: '处理中' });\n\n          uni.compressImage({\n            src: res.tempFilePaths[0],\n            quality: 50,\n            success: function success(res) {\n              uni.uploadFile({\n                url: that.app.globalData.request.apiUrl + \"attach/uploadimage\",\n                filePath: res.tempFilePath,\n                name: 'file',\n                formData: that.app.globalData.request.baseData,\n                success: function success(uploadFileRes) {\n                  uni.hideLoading();\n                  var response = {};\n                  try {\n                    response = JSON.parse(uploadFileRes.data);\n                  } catch (err) {\n                    uni.showModal({\n                      showCancel: false,\n                      title: '上传失败',\n                      content: '服务器发生错误',\n                      success: function success() {} });\n\n                  }\n                  if (response.code == 200) {\n                    that.app.request({\n                      url: \"message/send\",\n                      data: {\n                        where: 'channel',\n                        to: that.room_id,\n                        type: 'img',\n                        msg: response.data.attach_thumb,\n                        resource: response.data.attach_path },\n\n                      success: function success(res) {},\n                      error: function error(res) {\n                        that.messageObj.message = message_old;\n                        uni.showModal({\n                          title: '发送失败',\n                          content: res.msg,\n                          showCancel: false });\n\n                      } });\n\n                  } else {\n                    uni.showModal({\n                      showCancel: false,\n                      title: '上传失败',\n                      content: response.msg,\n                      success: function success() {} });\n\n                  }\n                } });\n\n            } });\n\n        } });\n\n    },\n    fullViewImage: function fullViewImage(url) {\n      uni.previewImage({\n        urls: [url],\n        longPressActions: {\n          itemList: ['保存图片', '举报图片'],\n          success: function success(data) {},\n          fail: function fail(err) {} } });\n\n\n    } } };exports.default = _default;\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/vue-cli-plugin-uni/lib/format-log.js */ 9)[\"default\"]))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInVuaS1hcHA6Ly8vcGFnZXMvaW5kZXgvaW5kZXgubnZ1ZSJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFvVUE7QUFDQSxNQURBLGtCQUNBO0FBQ0E7QUFDQTtBQUNBLGdCQUZBO0FBR0EsMkJBSEE7QUFJQSwyQkFKQTtBQUtBO0FBQ0EseUJBREEsRUFMQTs7QUFRQSxvQkFSQTtBQVNBLHlCQVRBO0FBVUEsd0JBVkE7QUFXQSw2QkFYQTtBQVlBLG1CQVpBO0FBYUEsb0JBYkE7QUFjQTtBQUNBLGtCQURBO0FBRUEsa0JBRkEsRUFkQTs7QUFrQkEsZ0JBbEJBO0FBbUJBLGlCQW5CQTtBQW9CQSxrQkFwQkE7QUFxQkEsZUFyQkE7QUFzQkEsdUJBdEJBO0FBdUJBLHNCQXZCQTtBQXdCQSxnQ0F4QkE7QUF5QkEscUJBekJBO0FBMEJBO0FBQ0EsbUJBREE7QUFFQSxpQkFGQTtBQUdBLG9CQUhBLEVBMUJBOztBQStCQTtBQUNBLDhCQWhDQTtBQWlDQSx1QkFqQ0E7QUFrQ0EscUJBbENBO0FBbUNBLG9CQW5DQTs7QUFxQ0EsR0F2Q0E7QUF3Q0EsUUF4Q0Esb0JBd0NBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQURBLG1CQUNBLFFBREEsRUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUpBOztBQU1BO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FIQSxDQUdBO0FBQ0E7QUFDQTtBQUNBLEtBUEE7QUFRQTtBQUNBO0FBQ0EsZUFEQSxtQkFDQSxRQURBLEVBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FKQTs7QUFNQSxLQVBBO0FBUUE7QUFDQTtBQUNBLEtBRkE7QUFHQTtBQUNBO0FBQ0E7QUFDQSxxQkFEQTs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQVhBO0FBWUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUhBO0FBSUE7QUFDQTtBQUNBLGtCQURBO0FBRUEsa0JBRkE7O0FBSUEsS0FMQTtBQU1BLEdBNUZBO0FBNkZBLDBCQTdGQSxvQ0E2RkEsR0E3RkEsRUE2RkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLCtCQURBOztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FGQSxNQUVBO0FBQ0E7QUFDQSxnQ0FEQTs7QUFHQTtBQUNBO0FBQ0EsY0FmQTs7QUFpQkEsR0FoSEE7QUFpSEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBdEJBO0FBdUJBLGlCQXZCQSwyQkF1QkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0E3QkE7QUE4QkEsYUE5QkEsdUJBOEJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQXRDQTtBQXVDQSxrQkF2Q0EsNEJBdUNBO0FBQ0E7QUFDQTtBQUNBLFdBREE7O0FBR0E7QUFDQTtBQUNBLFlBREE7O0FBR0E7QUFDQTtBQUNBLHNCQURBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsNkJBREE7QUFFQSx3Q0FGQTtBQUdBLGdDQUhBO0FBSUEsdUNBSkE7QUFLQSxpQ0FMQTtBQU1BO0FBQ0E7QUFDQTtBQUNBLHNDQURBO0FBRUE7QUFDQSw2Q0FEQTtBQUVBLCtDQUZBLEVBRkE7O0FBTUEsb0RBTkE7O0FBUUE7QUFDQSxpQkFqQkE7O0FBbUJBO0FBQ0E7QUFDQTtBQUNBLGdDQURBO0FBRUE7QUFDQSx1Q0FEQTtBQUVBLHlDQUZBLEVBRkE7O0FBTUE7QUFDQTtBQUNBO0FBQ0EsOEJBREE7QUFFQSw4QkFGQTs7QUFJQTtBQUNBLGdDQURBO0FBRUEsb0NBRkE7QUFHQSxxQ0FIQTtBQUlBLGtEQUpBOztBQU1BLGlCQWxCQTs7QUFvQkE7QUFDQSxvQkE1Q0E7O0FBOENBLFNBbkRBOztBQXFEQSxLQXRHQTtBQXVHQSxZQXZHQSxvQkF1R0EsSUF2R0EsRUF1R0E7QUFDQTtBQUNBO0FBQ0EsbUJBREE7O0FBR0E7QUFDQTtBQUNBO0FBQ0EsS0EvR0E7QUFnSEEsY0FoSEEsd0JBZ0hBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BRkE7QUFHQSxLQXZIQTtBQXdIQSxrQkF4SEEsNEJBd0hBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBOUhBO0FBK0hBLHNCQS9IQSxnQ0ErSEE7QUFDQTtBQUNBO0FBQ0EsS0FsSUE7QUFtSUEscUJBbklBLDZCQW1JQSxHQW5JQSxFQW1JQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxnREFEQSxFQUNBLE1BREE7QUFFQSxXQUhBLE1BR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGVBREE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGVBREE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGVBREE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxnQkE5REE7O0FBZ0VBLEtBdE1BO0FBdU1BLGFBdk1BLHFCQXVNQSxHQXZNQSxFQXVNQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBcE5BO0FBcU5BLGlCQXJOQSx5QkFxTkEsQ0FyTkEsRUFxTkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFlBREE7QUFFQTtBQUNBO0FBQ0EsNkJBREE7QUFFQTtBQUNBLHdCQURBO0FBRUEsNEJBRkE7QUFHQSw0QkFIQTtBQUlBLDRDQUpBO0FBS0Esa0NBTEEsRUFGQTs7QUFTQTtBQUNBO0FBQ0EsV0FYQTtBQVlBO0FBQ0E7QUFDQTtBQUNBLDJCQURBO0FBRUEsOEJBRkE7QUFHQSwrQkFIQTs7QUFLQSxXQW5CQTs7QUFxQkE7QUFDQSxLQXJQQTtBQXNQQSxnQkF0UEEsd0JBc1BBLEdBdFBBLEVBc1BBO0FBQ0E7QUFDQSxzRUFGQSxDQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0EvUEE7QUFnUUEsb0JBaFFBLDRCQWdRQSxHQWhRQSxFQWdRQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0F4UUE7QUF5UUEsYUF6UUEscUJBeVFBLEdBelFBLEVBeVFBO0FBQ0E7QUFDQSxLQTNRQTtBQTRRQSxXQTVRQSxxQkE0UUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUZBLEVBRUEsSUFGQTtBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFDQURBO0FBRUE7QUFDQSwrQkFEQTtBQUVBLHVCQUZBLEVBRkE7O0FBTUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFGQSxDQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0F6QkE7O0FBMkJBO0FBQ0E7QUFDQSxTQTdCQTs7O0FBZ0NBLEtBNVRBO0FBNlRBLGVBN1RBLHlCQTZUQTtBQUNBO0FBQ0E7QUFDQSx3QkFEQTs7QUFHQTtBQUNBLCtCQURBO0FBRUE7QUFDQSwrQkFEQTtBQUVBLHNDQUZBLEVBRkE7O0FBTUEsZUFOQSxtQkFNQSxHQU5BLEVBTUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsdUNBREE7QUFFQTtBQUNBLG1DQURBLEVBRkE7O0FBS0E7QUFDQTtBQUNBLDhCQURBLEdBQ0EsV0FEQTtBQUVBLDhCQUZBLEdBRUEsVUFGQSxHQUVBLGVBRkE7O0FBSUE7O0FBRUEsYUFaQTs7QUFjQTtBQUNBO0FBQ0EsYUFoQkE7O0FBa0JBLFNBN0JBO0FBOEJBLGFBOUJBLGlCQThCQSxHQTlCQSxFQThCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDBCQURBOztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUNBREE7QUFFQSw2QkFGQTtBQUdBLGdDQUhBO0FBSUEsOENBSkE7O0FBTUE7QUFDQSxXQWRBLE1BY0E7QUFDQTtBQUNBLCtCQURBO0FBRUEsMkJBRkE7QUFHQSw4QkFIQTtBQUlBO0FBQ0E7QUFDQSxlQU5BOztBQVFBO0FBQ0EsU0F4REE7O0FBMERBLEtBNVhBO0FBNlhBLG9CQTdYQSw0QkE2WEEsR0E3WEEsRUE2WEE7QUFDQTtBQUNBO0FBQ0Esc0JBREE7QUFFQSxvQkFGQTtBQUdBLGNBSEE7QUFJQSxvQkFKQTs7QUFNQTtBQUNBLEtBdFlBO0FBdVlBLGNBdllBLHNCQXVZQSxJQXZZQSxFQXVZQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EseURBREE7O0FBR0E7QUFDQTtBQUNBO0FBQ0EscURBREE7O0FBR0E7QUFDQTtBQUNBO0FBQ0EsdURBREE7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxRkFEQTs7QUFHQTtBQUNBLGdCQXpCQTs7QUEyQkEsS0FwYUE7QUFxYUEsb0JBcmFBLDRCQXFhQSxHQXJhQSxFQXFhQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BRkEsTUFFQTtBQUNBO0FBQ0E7QUFDQSxPQUhBLE1BR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxzQkFEQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUhBREE7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscUNBREE7QUFFQTtBQUNBLHVDQURBO0FBRUEsdUNBRkEsRUFGQTs7QUFNQSw4QkFOQTtBQU9BO0FBQ0E7QUFDQSxpQ0FEQTtBQUVBLG9DQUZBO0FBR0EscUNBSEE7QUFJQTtBQUNBO0FBQ0EscUJBTkE7O0FBUUEsaUJBaEJBOztBQWtCQTtBQUNBO0FBQ0E7QUFDQSxvQ0FEQTtBQUVBO0FBQ0EsdUNBREE7QUFFQSx1Q0FGQSxFQUZBOztBQU1BLDhCQU5BO0FBT0E7QUFDQTtBQUNBLGlDQURBO0FBRUEsb0NBRkE7QUFHQSxxQ0FIQTtBQUlBO0FBQ0E7QUFDQSxxQkFOQTs7QUFRQSxpQkFoQkE7O0FBa0JBO0FBQ0E7QUFDQTtBQUNBLG9DQURBO0FBRUE7QUFDQSx1Q0FEQTtBQUVBLHVDQUZBLEVBRkE7O0FBTUEsOEJBTkE7QUFPQTtBQUNBO0FBQ0EsaUNBREE7QUFFQSxvQ0FGQTtBQUdBLHFDQUhBO0FBSUE7QUFDQTtBQUNBLHFCQU5BOztBQVFBLGlCQWhCQTs7QUFrQkE7QUFDQTtBQUNBO0FBQ0EsOEJBREE7QUFFQSxvREFGQTtBQUdBLGlDQUhBLElBdEVBOzs7QUE0RUEsU0EvRUE7O0FBaUZBLEtBbmdCQTtBQW9nQkEsZ0JBcGdCQSx3QkFvZ0JBLEdBcGdCQSxFQW9nQkE7QUFDQTtBQUNBO0FBQ0EsT0FGQSxNQUVBO0FBQ0E7QUFDQTtBQUNBLEtBMWdCQTtBQTJnQkEsV0EzZ0JBLG1CQTJnQkEsSUEzZ0JBLEVBMmdCQTtBQUNBO0FBQ0E7QUFDQSw0QkFEQTtBQUVBO0FBQ0EsMEJBREE7QUFFQSwrQkFGQSxFQUZBOztBQU1BLGVBTkEsbUJBTUEsR0FOQSxFQU1BLEVBTkE7O0FBUUEsS0FyaEJBO0FBc2hCQSxlQXRoQkEseUJBc2hCQTtBQUNBO0FBQ0E7QUFDQSw4QkFEQTtBQUVBLDZCQUZBO0FBR0EsZ0JBSEE7QUFJQTtBQUNBO0FBQ0EsU0FOQTtBQU9BO0FBQ0E7QUFDQSx3QkFEQTs7QUFHQTtBQUNBLHFDQURBO0FBRUEsdUJBRkE7QUFHQTtBQUNBO0FBQ0EsOEVBREE7QUFFQSwwQ0FGQTtBQUdBLDRCQUhBO0FBSUEsOERBSkE7QUFLQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsbUJBRkEsQ0FFQTtBQUNBO0FBQ0EsdUNBREE7QUFFQSxtQ0FGQTtBQUdBLHdDQUhBO0FBSUEsb0RBSkE7O0FBTUE7QUFDQTtBQUNBO0FBQ0EseUNBREE7QUFFQTtBQUNBLHdDQURBO0FBRUEsd0NBRkE7QUFHQSxtQ0FIQTtBQUlBLHVEQUpBO0FBS0EsMkRBTEEsRUFGQTs7QUFTQSx1REFUQTtBQVVBO0FBQ0E7QUFDQTtBQUNBLHVDQURBO0FBRUEsMENBRkE7QUFHQSwyQ0FIQTs7QUFLQSx1QkFqQkE7O0FBbUJBLG1CQXBCQSxNQW9CQTtBQUNBO0FBQ0EsdUNBREE7QUFFQSxtQ0FGQTtBQUdBLDJDQUhBO0FBSUEsb0RBSkE7O0FBTUE7QUFDQSxpQkE5Q0E7O0FBZ0RBLGFBcERBOztBQXNEQSxTQWpFQTs7QUFtRUEsS0EzbEJBO0FBNGxCQSxpQkE1bEJBLHlCQTRsQkEsR0E1bEJBLEVBNGxCQTtBQUNBO0FBQ0EsbUJBREE7QUFFQTtBQUNBLG9DQURBO0FBRUEsNENBRkE7QUFHQSxxQ0FIQSxFQUZBOzs7QUFRQSxLQXJtQkEsRUFqSEEsRSIsImZpbGUiOiI4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiPHN0eWxlPlxyXG5cdC5jaGF0SW5wdXQge1xyXG5cdFx0cG9zaXRpb246IGZpeGVkO1xyXG5cdFx0bGVmdDogMDtcclxuXHRcdGJvdHRvbTogMDtcclxuXHRcdHJpZ2h0OiAwO1xyXG5cdFx0aGVpZ2h0OiA1MHB4O1xyXG5cdFx0YmFja2dyb3VuZC1jb2xvcjogI0ZGRkZGRjtcclxuXHRcdGZvbnQtc2l6ZTogMTZweDtcclxuXHRcdHBhZGRpbmc6IDVweCAxMHB4O1xyXG5cdH1cclxuXHJcblx0Lmhpc3RvcnlMaXN0IHtcclxuXHRcdHBvc2l0aW9uOiBmaXhlZDtcclxuXHRcdGxlZnQ6IDA7XHJcblx0XHRyaWdodDogMDtcclxuXHRcdGJvdHRvbTogMDtcclxuXHRcdHRvcDogMDtcclxuXHRcdHBhZGRpbmctYm90dG9tOiAyMHB4O1xyXG5cdH1cclxuXHQuaXRlbV9zeXN0ZW17XHJcblx0XHR0ZXh0LWFsaWduOiBjZW50ZXI7XHJcblx0XHRtYXJnaW4tdG9wOiAyMHB4O1xyXG5cdH1cclxuXHQuaXRlbV9zeXN0ZW1fdGV4dHtcclxuXHRcdGZvbnQtc2l6ZTogMTJweDtcclxuXHRcdGNvbG9yOiAjYWFhO1xyXG5cdFx0dGV4dC1hbGlnbjogY2VudGVyO1xyXG5cdH1cclxuXHQuaXRlbXtcclxuXHRcdGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcblx0XHRtYXJnaW46IDEwcHg7XHJcblx0XHRtYXJnaW4tdG9wOiAyMHB4O1xyXG5cdFx0anVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xyXG5cdFx0YWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XHJcblx0fVxyXG5cdC5pdGVtX21pbmV7XHJcblx0XHRmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG5cdFx0bWFyZ2luOiAxMHB4O1xyXG5cdFx0bWFyZ2luLXRvcDogMjBweDtcclxuXHRcdHRleHQtYWxpZ246IHJpZ2h0O1xyXG5cdFx0anVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcclxuXHRcdGFsaWduLWl0ZW1zOiBmbGV4LWVuZDtcclxuXHR9XHJcblx0LnVzZXJfaGVhZF9ib3h7XHJcblx0XHRmbGV4LWRpcmVjdGlvbjogcm93O1xyXG5cdH1cclxuXHQudXNlcl9oZWFkX2ltYWdle1xyXG5cdFx0d2lkdGg6IDUwcHg7XHJcblx0XHRoZWlnaHQ6IDUwcHg7XHJcblx0XHRib3JkZXItcmFkaXVzOiAxMHB4O1xyXG5cdFx0Ym9yZGVyLWNvbG9yOiAjRkZGRkZGO1xyXG5cdFx0Ym9yZGVyLXN0eWxlOiBzb2xpZDtcclxuXHRcdGJvcmRlci13aWR0aDogMXB4O1xyXG5cdH1cclxuXHQuY2hhdF9pdGVtX2JvZHlfbGVmdHtcclxuXHRcdHRleHQtYWxpZ246IGxlZnQ7XHJcblx0XHRqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XHJcblx0XHRwYWRkaW5nLWxlZnQ6IDYwcHg7XHJcblx0XHRwYWRkaW5nLXJpZ2h0OiA4MHB4O1xyXG5cdFx0bWFyZ2luLXRvcDogLTMwcHg7XHJcblx0XHRmbGV4OiAxO1xyXG5cdFx0ZmxleC13cmFwOiB3cmFwO1xyXG5cdH1cclxuXHQuY2hhdF9pdGVtX2JvZHlfcmlnaHR7XHJcblx0XHR0ZXh0LWFsaWduOiByaWdodDtcclxuXHRcdHBhZGRpbmctbGVmdDogODBweDtcclxuXHRcdHBhZGRpbmctcmlnaHQ6IDYwcHg7XHJcblx0XHRtYXJnaW4tdG9wOiAtMzBweDtcclxuXHRcdGZsZXg6IDE7XHJcblx0XHRmbGV4LXdyYXA6IHdyYXAtcmV2ZXJzZTtcclxuXHR9XHJcblx0LmNoYXRfaXRlbV91c2VyX25hbWV7XHJcblx0XHRmb250LXNpemU6IDE0cHg7XHJcblx0XHRjb2xvcjogIzk5OTtcclxuXHRcdG1hcmdpbi10b3A6IDNweDtcclxuXHRcdG1hcmdpbi1sZWZ0OiA1cHg7XHJcblx0XHRtYXJnaW4tcmlnaHQ6IDVweDtcclxuXHR9XHJcblx0LmNoYXRfaXRlbV90ZXh0e1xyXG5cdFx0bWFyZ2luLXRvcDogMTBweDtcclxuXHRcdGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcblx0XHRiYWNrZ3JvdW5kLWNvbG9yOiAjRTVFNUU1O1xyXG5cdFx0Y29sb3I6ICMzMzM7XHJcblx0XHRwYWRkaW5nOiAxMHB4O1xyXG5cdFx0Zm9udC1zaXplOiAxNnB4O1xyXG5cdH1cclxuXHQuY2hhdF9pdGVtX2ltYWdlX2JveHtcclxuXHRcdG1hcmdpbi10b3A6IDEwcHg7XHJcblx0XHRib3JkZXItcmFkaXVzOiAxMHB4O1xyXG5cdFx0cGFkZGluZzogMnB4O1xyXG5cdFx0YmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XHJcblx0fVxyXG5cdC5jaGF0X2l0ZW1faW1hZ2VfY29udGVudHtcclxuXHRcdHdpZHRoOiAxMDAlO1xyXG5cdFx0aGVpZ2h0OiAxMDAlO1xyXG5cdH1cclxuXHQucGxheWVye1xyXG5cdFx0cG9zaXRpb246IGZpeGVkO1xyXG5cdFx0cmlnaHQ6IDEwcHg7XHJcblx0XHR0b3A6IDEwcHg7XHJcblx0XHR6LWluZGV4OjEwMDtcclxuXHRcdGZsZXgtZGlyZWN0aW9uOiByb3c7XHJcblx0XHRiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcclxuXHRcdGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcblx0XHRwYWRkaW5nOiA1cHg7XHJcblx0XHRib3JkZXItY29sb3I6ICNjY2M7XHJcblx0XHRib3JkZXItd2lkdGg6IDFweDtcclxuXHRcdGJvcmRlci1zdHlsZTpkb3R0ZWQ7XHJcblx0fVxyXG5cdC5wbGF5ZXJfaW1hZ2V7XHJcblx0XHR3aWR0aDogNDBweDtcclxuXHRcdGhlaWdodDogNDBweDtcclxuXHRcdGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcblx0fVxyXG5cdC5wbGF5ZXJfaW5mb3tcclxuXHRcdHBhZGRpbmctcmlnaHQ6IDEwcHg7XHJcblx0fVxyXG5cdC5wbGF5ZXJfc29uZ3tcclxuXHRcdGZvbnQtc2l6ZTogMTRweDtcclxuXHRcdGNvbG9yOiMzMzM7XHJcblx0fVxyXG5cdC5wbGF5ZXJfdXNlcntcclxuXHRcdGZvbnQtc2l6ZTogMTJweDtcclxuXHRcdGNvbG9yOiM5OTk7XHJcblx0XHRtYXJnaW4tdG9wOiA1cHg7XHJcblx0fVxyXG5cdC5jaGF0TWVudXtcclxuXHR9XHJcblx0LmNoYXRNZW51X2ltYWdle1xyXG5cdFx0cG9zaXRpb246IGZpeGVkO1xyXG5cdFx0cmlnaHQ6IDEwcHg7XHJcblx0XHRib3R0b206IDEwcHg7XHJcblx0XHR3aWR0aDogMzJweDtcclxuXHRcdGhlaWdodDogMzJweDtcclxuXHR9XHJcblx0XHJcblx0Lm1lbnVCb2R5IHtcclxuXHRcdHotaW5kZXg6IDEwO1xyXG5cdFx0cG9zaXRpb246IGZpeGVkO1xyXG5cdFx0bGVmdDogMDtcclxuXHRcdGJvdHRvbTogMDtcclxuXHRcdHJpZ2h0OiAwO1xyXG5cdFx0YmFja2dyb3VuZC1jb2xvcjogI0VFRUVFRTtcclxuXHRcdGJvcmRlci10b3AtY29sb3I6ICNlNWU1ZTU7XHJcblx0XHRib3JkZXItdG9wLXdpZHRoOiAxcHg7XHJcblx0XHRib3JkZXItc3R5bGU6IHNvbGlkO1xyXG5cdFx0ZmxleC1kaXJlY3Rpb246IHJvdztcclxuXHRcdHBhZGRpbmc6IDEwcHg7XHJcblx0fVxyXG5cdC5tZW51TWFpbntcclxuXHRcdHRleHQtYWxpZ246IGNlbnRlcjtcclxuXHRcdGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG5cdFx0YWxpZ24taXRlbXM6IGNlbnRlcjtcclxuXHRcdGJhY2tncm91bmQtY29sb3I6ICNmZmY7XHJcblx0XHRjb2xvcjogIzY2NjtcclxuXHRcdHBhZGRpbmc6IDEwcHg7XHJcblx0XHRoZWlnaHQ6IDYwcHg7XHJcblx0XHR3aWR0aDogNjBweDtcclxuXHRcdGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcblx0fVxyXG5cdC5tZW51SXRlbXtcclxuXHRcdG1hcmdpbjogNXB4O1xyXG5cdFx0dGV4dC1hbGlnbjogY2VudGVyO1xyXG5cdFx0anVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcblx0XHRhbGlnbi1pdGVtczogY2VudGVyO1xyXG5cdH1cclxuXHQubWVudVRpdGxlIHtcclxuXHRcdHRleHQtYWxpZ246IGNlbnRlcjtcclxuXHRcdGZvbnQtc2l6ZTogMTJweDtcclxuXHRcdHBhZGRpbmc6IDEwcHg7XHJcblx0fVxyXG5cdC5tZW51SW1hZ2V7XHJcblx0XHR3aWR0aDogMjRweDtcclxuXHRcdGhlaWdodDogMjRweDtcclxuXHR9XHJcbjwvc3R5bGU+XHJcbjx0ZW1wbGF0ZT5cclxuXHQ8dmlldyBjbGFzcz1cInVuaWFwcFwiPlxyXG5cdFx0PGJsb2NrIHYtaWY9XCJzaG93Um9vbVBhZ2VcIj5cclxuXHRcdFx0PHNjcm9sbC12aWV3IEBjbGljaz1cImhpc3RvcnlDbGlja2VkXCIgY2xhc3M9XCJoaXN0b3J5TGlzdFwiIGlkPVwiaGlzdG9yeUxpc3RcIiBzY3JvbGwteT1cInRydWVcIiA6c2Nyb2xsLXdpdGgtYW5pbWF0aW9uPVwidHJ1ZVwiXHJcblx0XHRcdCA6c2Nyb2xsLWludG8tdmlldz1cInZpZXdJZFwiIDpzdHlsZT1cIntib3R0b206aGlzdG9yeUxpc3RCb3R0b20rJ3B4J31cIj5cclxuXHRcdFx0XHQ8dmlldyBpZD1cImhpc3RvcnlCb3hcIj5cclxuXHRcdFx0XHRcdDx2aWV3IHYtZm9yPVwiKGl0ZW0saW5kZXgpIGluIGhpc3RvcnlMaXN0XCI+XHJcblx0XHRcdFx0XHRcdDx2aWV3IGNsYXNzPVwiaXRlbVwiIDppZD1cIidzaGFfJytpdGVtLnNoYVwiIHYtaWY9XCJpdGVtLnR5cGU9PSd0ZXh0JyAmJiBpdGVtLnVzZXIudXNlcl9pZCE9dXNlckluZm8udXNlcl9pZFwiPlxyXG5cdFx0XHRcdFx0XHRcdDx2aWV3IGNsYXNzPVwidXNlcl9oZWFkX2JveFwiIEBjbGljaz1cImRvVXNlckhlYWRFdmVudChpdGVtKVwiPlxyXG5cdFx0XHRcdFx0XHRcdFx0PGltYWdlIGNsYXNzPVwidXNlcl9oZWFkX2ltYWdlXCIgOnNyYz1cIml0ZW0udXNlci51c2VyX2hlYWRcIj48L2ltYWdlPlxyXG5cdFx0XHRcdFx0XHRcdFx0PHRleHQgY2xhc3M9XCJjaGF0X2l0ZW1fdXNlcl9uYW1lXCI+e3tpdGVtLnVzZXIudXNlcl9uYW1lfX08L3RleHQ+XHJcblx0XHRcdFx0XHRcdFx0PC92aWV3PlxyXG5cdFx0XHRcdFx0XHRcdDx2aWV3IGNsYXNzPVwiY2hhdF9pdGVtX2JvZHlfbGVmdFwiPlxyXG5cdFx0XHRcdFx0XHRcdFx0PHZpZXcgdi1pZj1cIiFpdGVtLmF0XCIgY2xhc3M9XCJjaGF0X2l0ZW1fdGV4dF9ib3hcIj5cclxuXHRcdFx0XHRcdFx0XHRcdFx0PHRleHQgY2xhc3M9XCJjaGF0X2l0ZW1fdGV4dFwiIHYtaWY9XCJpdGVtLnVzZXIudXNlcl9pZD09dXNlckluZm8udXNlcl9pZCAmJiB1c2VySW5mby51c2VyX3NleD09MVwiIHN0eWxlPVwiYmFja2dyb3VuZC1jb2xvcjogIzY2Q0JGRjtjb2xvcjojMzMzO1wiPnt7dXJsZGVjb2RlKGl0ZW0uY29udGVudCl9fTwvdGV4dD5cclxuXHRcdFx0XHRcdFx0XHRcdFx0PHRleHQgY2xhc3M9XCJjaGF0X2l0ZW1fdGV4dFwiIHYtaWY9XCJpdGVtLnVzZXIudXNlcl9pZD09dXNlckluZm8udXNlcl9pZCAmJiB1c2VySW5mby51c2VyX3NleD09MFwiIHN0eWxlPVwiYmFja2dyb3VuZC1jb2xvcjogI0ZFOTg5ODtjb2xvcjp3aGl0ZTtcIj57e3VybGRlY29kZShpdGVtLmNvbnRlbnQpfX08L3RleHQ+XHJcblx0XHRcdFx0XHRcdFx0XHRcdDx0ZXh0IGNsYXNzPVwiY2hhdF9pdGVtX3RleHRcIiB2LWlmPVwiaXRlbS51c2VyLnVzZXJfaWQhPXVzZXJJbmZvLnVzZXJfaWRcIj57e3VybGRlY29kZShpdGVtLmNvbnRlbnQpfX08L3RleHQ+XHJcblx0XHRcdFx0XHRcdFx0XHQ8L3ZpZXc+XHJcblx0XHRcdFx0XHRcdFx0XHQ8dmlldyB2LWlmPVwiaXRlbS5hdFwiIGNsYXNzPVwiY2hhdF9pdGVtX3RleHRfYm94XCI+XHJcblx0XHRcdFx0XHRcdFx0XHRcdDx0ZXh0IGNsYXNzPVwiY2hhdF9pdGVtX3RleHRcIiB2LWlmPVwiaXRlbS5hdC51c2VyX2lkPT11c2VySW5mby51c2VyX2lkXCIgc3R5bGU9XCJiYWNrZ3JvdW5kLWNvbG9yOiAjNjY2O2NvbG9yOndoaXRlO1wiPnt7dXJsZGVjb2RlKGl0ZW0uY29udGVudCl9fTwvdGV4dD5cclxuXHRcdFx0XHRcdFx0XHRcdFx0PHRleHQgY2xhc3M9XCJjaGF0X2l0ZW1fdGV4dFwiIHYtaWY9XCJpdGVtLmF0LnVzZXJfaWQhPXVzZXJJbmZvLnVzZXJfaWQmJml0ZW0udXNlci51c2VyX2lkIT11c2VySW5mby51c2VyX2lkXCI+e3t1cmxkZWNvZGUoaXRlbS5jb250ZW50KX19PC90ZXh0PlxyXG5cdFx0XHRcdFx0XHRcdFx0PC92aWV3PlxyXG5cdFx0XHRcdFx0XHRcdDwvdmlldz5cclxuXHRcdFx0XHRcdFx0PC92aWV3PlxyXG5cdFx0XHRcdFx0XHQ8dmlldyBjbGFzcz1cIml0ZW1fbWluZVwiIDppZD1cIidzaGFfJytpdGVtLnNoYVwiIHYtaWY9XCJpdGVtLnR5cGU9PSd0ZXh0JyAmJiBpdGVtLnVzZXIudXNlcl9pZD09dXNlckluZm8udXNlcl9pZFwiPlxyXG5cdFx0XHRcdFx0XHRcdDx2aWV3IGNsYXNzPVwidXNlcl9oZWFkX2JveFwiPlxyXG5cdFx0XHRcdFx0XHRcdFx0PHRleHQgY2xhc3M9XCJjaGF0X2l0ZW1fdXNlcl9uYW1lXCI+e3tpdGVtLnVzZXIudXNlcl9uYW1lfX08L3RleHQ+XHJcblx0XHRcdFx0XHRcdFx0XHQ8aW1hZ2UgY2xhc3M9XCJ1c2VyX2hlYWRfaW1hZ2VcIiA6c3JjPVwiaXRlbS51c2VyLnVzZXJfaGVhZFwiPjwvaW1hZ2U+XHJcblx0XHRcdFx0XHRcdFx0PC92aWV3PlxyXG5cdFx0XHRcdFx0XHRcdDx2aWV3IGNsYXNzPVwiY2hhdF9pdGVtX2JvZHlfcmlnaHRcIj5cclxuXHRcdFx0XHRcdFx0XHRcdDx2aWV3IHYtaWY9XCIhaXRlbS5hdFwiIGNsYXNzPVwiY2hhdF9pdGVtX3RleHRfYm94XCI+XHJcblx0XHRcdFx0XHRcdFx0XHRcdDx0ZXh0IGNsYXNzPVwiY2hhdF9pdGVtX3RleHRcIiB2LWlmPVwiaXRlbS51c2VyLnVzZXJfaWQ9PXVzZXJJbmZvLnVzZXJfaWQgJiYgdXNlckluZm8udXNlcl9zZXg9PTFcIiBzdHlsZT1cImJhY2tncm91bmQtY29sb3I6ICM2NkNCRkY7Y29sb3I6YmxhY2s7XCI+e3t1cmxkZWNvZGUoaXRlbS5jb250ZW50KX19PC90ZXh0PlxyXG5cdFx0XHRcdFx0XHRcdFx0XHQ8dGV4dCBjbGFzcz1cImNoYXRfaXRlbV90ZXh0XCIgdi1pZj1cIml0ZW0udXNlci51c2VyX2lkPT11c2VySW5mby51c2VyX2lkICYmIHVzZXJJbmZvLnVzZXJfc2V4PT0wXCIgc3R5bGU9XCJiYWNrZ3JvdW5kLWNvbG9yOiAjRkU5ODk4O2NvbG9yOndoaXRlO1wiPnt7dXJsZGVjb2RlKGl0ZW0uY29udGVudCl9fTwvdGV4dD5cclxuXHRcdFx0XHRcdFx0XHRcdFx0PHRleHQgY2xhc3M9XCJjaGF0X2l0ZW1fdGV4dFwiIHYtaWY9XCJpdGVtLnVzZXIudXNlcl9pZCE9dXNlckluZm8udXNlcl9pZFwiPnt7dXJsZGVjb2RlKGl0ZW0uY29udGVudCl9fTwvdGV4dD5cclxuXHRcdFx0XHRcdFx0XHRcdDwvdmlldz5cclxuXHRcdFx0XHRcdFx0XHRcdDx2aWV3IHYtaWY9XCJpdGVtLmF0XCIgY2xhc3M9XCJjaGF0X2l0ZW1fdGV4dF9ib3hcIj5cclxuXHRcdFx0XHRcdFx0XHRcdFx0PHRleHQgY2xhc3M9XCJjaGF0X2l0ZW1fdGV4dFwiIHYtaWY9XCJpdGVtLmF0LnVzZXJfaWQ9PXVzZXJJbmZvLnVzZXJfaWRcIiBzdHlsZT1cImJhY2tncm91bmQtY29sb3I6ICM2NjY7Y29sb3I6d2hpdGU7XCI+e3t1cmxkZWNvZGUoaXRlbS5jb250ZW50KX19PC90ZXh0PlxyXG5cdFx0XHRcdFx0XHRcdFx0XHQ8dGV4dCBjbGFzcz1cImNoYXRfaXRlbV90ZXh0XCIgdi1pZj1cIml0ZW0uYXQudXNlcl9pZCE9dXNlckluZm8udXNlcl9pZCYmaXRlbS51c2VyLnVzZXJfaWQ9PXVzZXJJbmZvLnVzZXJfaWQgJiYgdXNlckluZm8udXNlcl9zZXg9PTFcIlxyXG5cdFx0XHRcdFx0XHRcdFx0XHQgc3R5bGU9XCJiYWNrZ3JvdW5kLWNvbG9yOiAjNjZDQkZGO2NvbG9yOmJsYWNrO1wiPnt7dXJsZGVjb2RlKGl0ZW0uY29udGVudCl9fTwvdGV4dD5cclxuXHRcdFx0XHRcdFx0XHRcdFx0PHRleHQgY2xhc3M9XCJjaGF0X2l0ZW1fdGV4dFwiIHYtaWY9XCJpdGVtLmF0LnVzZXJfaWQhPXVzZXJJbmZvLnVzZXJfaWQmJml0ZW0udXNlci51c2VyX2lkPT11c2VySW5mby51c2VyX2lkICYmIHVzZXJJbmZvLnVzZXJfc2V4PT0wXCJcclxuXHRcdFx0XHRcdFx0XHRcdFx0IHN0eWxlPVwiYmFja2dyb3VuZC1jb2xvcjogI0ZFOTg5ODtjb2xvcjp3aGl0ZTtcIj57e3VybGRlY29kZShpdGVtLmNvbnRlbnQpfX08L3RleHQ+XHJcblx0XHRcdFx0XHRcdFx0XHRcdDx0ZXh0IGNsYXNzPVwiY2hhdF9pdGVtX3RleHRcIiB2LWlmPVwiaXRlbS5hdC51c2VyX2lkIT11c2VySW5mby51c2VyX2lkJiZpdGVtLnVzZXIudXNlcl9pZCE9dXNlckluZm8udXNlcl9pZFwiPnt7dXJsZGVjb2RlKGl0ZW0uY29udGVudCl9fTwvdGV4dD5cclxuXHRcdFx0XHRcdFx0XHRcdDwvdmlldz5cclxuXHRcdFx0XHRcdFx0XHQ8L3ZpZXc+XHJcblx0XHRcdFx0XHRcdDwvdmlldz5cclxuXHRcdFx0XHRcdFx0PHZpZXcgY2xhc3M9XCJpdGVtX21pbmVcIiB2LWlmPVwiaXRlbS50eXBlPT0naW1nJyAmJiBpdGVtLnVzZXIudXNlcl9pZD09dXNlckluZm8udXNlcl9pZFwiIDppZD1cIidzaGFfJytpdGVtLnNoYVwiPlxyXG5cdFx0XHRcdFx0XHRcdDx2aWV3IGNsYXNzPVwidXNlcl9oZWFkX2JveFwiPlxyXG5cdFx0XHRcdFx0XHRcdFx0PHRleHQgY2xhc3M9XCJjaGF0X2l0ZW1fdXNlcl9uYW1lXCI+e3tpdGVtLnVzZXIudXNlcl9uYW1lfX08L3RleHQ+XHJcblx0XHRcdFx0XHRcdFx0XHQ8aW1hZ2UgY2xhc3M9XCJ1c2VyX2hlYWRfaW1hZ2VcIiA6c3JjPVwiaXRlbS51c2VyLnVzZXJfaGVhZFwiPjwvaW1hZ2U+XHJcblx0XHRcdFx0XHRcdFx0PC92aWV3PlxyXG5cdFx0XHRcdFx0XHRcdDx2aWV3IGNsYXNzPVwiY2hhdF9pdGVtX2JvZHlfcmlnaHRcIj5cclxuXHRcdFx0XHRcdFx0XHRcdDx2aWV3IGNsYXNzPVwiY2hhdF9pdGVtX2ltYWdlX2JveFwiPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHQ8aW1hZ2UgY2xhc3M9XCJjaGF0X2l0ZW1faW1hZ2VfY29udGVudFwiIDpzcmM9XCJnZXRTdGF0aWNVcmwodXJsZGVjb2RlKGl0ZW0uY29udGVudCkpXCIgbW9kZT1cIndpZHRoRml4XCIgQGNsaWNrPVwiZnVsbFZpZXdJbWFnZShnZXRTdGF0aWNVcmwodXJsZGVjb2RlKGl0ZW0ucmVzb3VyY2UpKSlcIj48L2ltYWdlPlxyXG5cdFx0XHRcdFx0XHRcdFx0PC92aWV3PlxyXG5cdFx0XHRcdFx0XHRcdDwvdmlldz5cclxuXHRcdFx0XHRcdFx0PC92aWV3PlxyXG5cdFx0XHRcdFx0XHQ8dmlldyBjbGFzcz1cIml0ZW1cIiB2LWlmPVwiaXRlbS50eXBlPT0naW1nJyAmJiBpdGVtLnVzZXIudXNlcl9pZCE9dXNlckluZm8udXNlcl9pZFwiIDppZD1cIidzaGFfJytpdGVtLnNoYVwiPlxyXG5cdFx0XHRcdFx0XHRcdDx2aWV3IGNsYXNzPVwidXNlcl9oZWFkX2JveFwiIEBjbGljaz1cImRvVXNlckhlYWRFdmVudChpdGVtKVwiPlxyXG5cdFx0XHRcdFx0XHRcdFx0PGltYWdlIGNsYXNzPVwidXNlcl9oZWFkX2ltYWdlXCIgOnNyYz1cIml0ZW0udXNlci51c2VyX2hlYWRcIj48L2ltYWdlPlxyXG5cdFx0XHRcdFx0XHRcdFx0PHRleHQgY2xhc3M9XCJjaGF0X2l0ZW1fdXNlcl9uYW1lXCI+e3tpdGVtLnVzZXIudXNlcl9uYW1lfX08L3RleHQ+XHJcblx0XHRcdFx0XHRcdFx0PC92aWV3PlxyXG5cdFx0XHRcdFx0XHRcdDx2aWV3IGNsYXNzPVwiY2hhdF9pdGVtX2JvZHlfbGVmdFwiPlxyXG5cdFx0XHRcdFx0XHRcdFx0PHZpZXcgY2xhc3M9XCJjaGF0X2l0ZW1faW1hZ2VfYm94XCI+XHJcblx0XHRcdFx0XHRcdFx0XHRcdDxpbWFnZSBjbGFzcz1cImNoYXRfaXRlbV9pbWFnZV9jb250ZW50XCIgOnNyYz1cImdldFN0YXRpY1VybCh1cmxkZWNvZGUoaXRlbS5jb250ZW50KSlcIiBtb2RlPVwid2lkdGhGaXhcIiBAY2xpY2s9XCJmdWxsVmlld0ltYWdlKGdldFN0YXRpY1VybCh1cmxkZWNvZGUoaXRlbS5yZXNvdXJjZSkpKVwiPjwvaW1hZ2U+XHJcblx0XHRcdFx0XHRcdFx0XHQ8L3ZpZXc+XHJcblx0XHRcdFx0XHRcdFx0PC92aWV3PlxyXG5cdFx0XHRcdFx0XHQ8L3ZpZXc+XHJcblx0XHRcdFx0XHRcdDx2aWV3IGNsYXNzPVwiaXRlbV9zeXN0ZW1cIiB2LWlmPVwiaXRlbS50eXBlPT0nc3lzdGVtJ1wiPlxyXG5cdFx0XHRcdFx0XHRcdDx0ZXh0IGNsYXNzPVwiaXRlbV9zeXN0ZW1fdGV4dFwiPnt7aXRlbS5jb250ZW50fX08L3RleHQ+XHJcblx0XHRcdFx0XHRcdDwvdmlldz5cclxuXHRcdFx0XHRcdDwvdmlldz5cclxuXHRcdFx0XHQ8L3ZpZXc+XHJcblx0XHRcdFx0PHZpZXcgOmlkPVwiJ2ltXycraGlzdG9yeUxpc3QubGVuZ3RoXCIgY2xhc3M9XCJib3R0b21cIj48L3ZpZXc+XHJcblx0XHRcdDwvc2Nyb2xsLXZpZXc+XHJcblx0XHRcdDxpbnB1dCBjbGFzcz1cImNoYXRJbnB1dFwiIHR5cGU9XCJ0ZXh0XCIgcGxhY2Vob2xkZXI9XCLlhajlkZjnpoHoqIDkuK0s5L2g5pqC5pe25peg5rOV5Y+R6KiAXCIgdi1pZj1cImNoYXRUeXBlPT0ndGV4dCcgJiYgcm9vbS5yb29tX3NlbmRtc2c9PTFcIlxyXG5cdFx0XHQgZGlzYWJsZWQ9XCJ0cnVlXCIgLz5cclxuXHRcdFx0PGlucHV0IGRpc2FibGVkPVwiZGlzYWJsZWRcIiB2LWlmPVwiY2hhdFR5cGU9PSd2b2ljZSdcIiBjbGFzcz1cImNoYXRJbnB1dFwiIHR5cGU9XCJ0ZXh0XCIgcGxhY2Vob2xkZXI9XCLngrnlh7vov5nph4zlvIDlp4vlvZXpn7NcIj5cclxuXHRcdFx0PGlucHV0IGNsYXNzPVwiY2hhdElucHV0XCIgdHlwZT1cInRleHRcIiBjb25maXJtLXR5cGU9XCJzZW5kXCIgY29uZmlybS1ob2xkPVwidHJ1ZVwiIHBsYWNlaG9sZGVyPVwi6K+054K55LuA5LmI5ZCnLi4uXCIgdi1tb2RlbD1cIm1lc3NhZ2VPYmoubWVzc2FnZVwiXHJcblx0XHRcdCB2LWlmPVwiY2hhdFR5cGU9PSd0ZXh0JyAmJiByb29tLnJvb21fc2VuZG1zZz09MFwiIEBrZXlkb3duPVwiZG9LZXlEb3duXCIgOmZvY3VzPVwibWVzc2FnZU9iai5mb2N1c1wiIEBjb25maXJtPVwiZG9TZW5kTWVzc2FnZVwiIC8+XHJcblx0XHRcdDxpbWFnZSBAY2xpY2s9XCJkb1Nob3dNZW51Qm94XCIgY2xhc3M9XCJjaGF0TWVudV9pbWFnZVwiIHNyYz1cIi9zdGF0aWMvaW1hZ2UvYXBwLnBuZ1wiIG1vZGU9XCJ3aWR0aEZpeFwiPjwvaW1hZ2U+XHJcblxyXG5cdFx0XHQ8dmlldyBjbGFzcz1cInBsYXllclwiIHYtaWY9XCJzb25nLnNvbmdcIiBAY2xpY2s9XCJkb011c2ljQ2xpY2tlZFwiPlxyXG5cdFx0XHRcdDx2aWV3IGNsYXNzPVwicGxheWVyX2luZm9cIj5cclxuXHRcdFx0XHRcdDx0ZXh0IGNsYXNzPVwicGxheWVyX3NvbmdcIj57e3Nvbmcuc29uZy5uYW1lfX0gLSB7e3Nvbmcuc29uZy5zaW5nZXJ9fTwvdGV4dD5cclxuXHRcdFx0XHRcdDx0ZXh0IGNsYXNzPVwicGxheWVyX3VzZXJcIj57e3VybGRlY29kZShzb25nLnVzZXIudXNlcl9uYW1lKX19PC90ZXh0PlxyXG5cdFx0XHRcdDwvdmlldz5cclxuXHRcdFx0XHQ8aW1hZ2UgY2xhc3M9XCJwbGF5ZXJfaW1hZ2VcIiA6c3JjPVwic29uZy5zb25nLnBpY1wiPjwvaW1hZ2U+XHJcblx0XHRcdDwvdmlldz5cclxuXHRcdFx0PHZpZXcgY2xhc3M9XCJtZW51Qm94XCIgdi1pZj1cInNob3dNZW51Qm94XCI+XHJcblx0XHRcdFx0PHNjcm9sbC12aWV3IHNob3ctc2Nyb2xsYmFyPVwiZmFsc2VcIiBzY3JvbGwtd2l0aC1hbmltYXRpb249XCJ0cnVlXCIgc2Nyb2xsLXg9XCJ0cnVlXCIgY2xhc3M9XCJtZW51Qm9keVwiPlxyXG5cdFx0XHRcdFx0PHZpZXcgY2xhc3M9XCJtZW51SXRlbVwiIEBjbGljaz1cImNob29zZUltYWdlXCI+XHJcblx0XHRcdFx0XHRcdDx2aWV3IGNsYXNzPVwibWVudU1haW5cIj5cclxuXHRcdFx0XHRcdFx0XHQ8aW1hZ2UgY2xhc3M9XCJtZW51SW1hZ2VcIiBzcmM9XCIvc3RhdGljL2ltYWdlL2ljb25fcGhvdG9fZmlsbC5wbmdcIj48L2ltYWdlPlxyXG5cdFx0XHRcdFx0XHQ8L3ZpZXc+XHJcblx0XHRcdFx0XHRcdDx0ZXh0IGNsYXNzPVwibWVudVRpdGxlXCI+5Y+R5Zu+PC90ZXh0PlxyXG5cdFx0XHRcdFx0PC92aWV3PlxyXG5cdFx0XHRcdFx0PHZpZXcgY2xhc3M9XCJtZW51SXRlbVwiIEBjbGljaz1cImRvT3BlblBhZ2UoJ2FkZFNvbmcnKVwiPlxyXG5cdFx0XHRcdFx0XHQ8dmlldyBjbGFzcz1cIm1lbnVNYWluXCI+XHJcblx0XHRcdFx0XHRcdFx0PGltYWdlIGNsYXNzPVwibWVudUltYWdlXCIgc3JjPVwiL3N0YXRpYy9pbWFnZS9pY29uX2Rpbmd0YWIucG5nXCI+PC9pbWFnZT5cclxuXHRcdFx0XHRcdFx0PC92aWV3PlxyXG5cdFx0XHRcdFx0XHQ8dGV4dCBjbGFzcz1cIm1lbnVUaXRsZVwiPueCueatjDwvdGV4dD5cclxuXHRcdFx0XHRcdDwvdmlldz5cclxuXHRcdFx0XHRcdDx2aWV3IGNsYXNzPVwibWVudUl0ZW1cIiBAY2xpY2s9XCJkb09wZW5QYWdlKCdzb25nTGlzdCcpXCI+XHJcblx0XHRcdFx0XHRcdDx2aWV3IGNsYXNzPVwibWVudU1haW5cIj5cclxuXHRcdFx0XHRcdFx0XHQ8aW1hZ2UgY2xhc3M9XCJtZW51SW1hZ2VcIiBzcmM9XCIvc3RhdGljL2ltYWdlL2ljb25faW52aXRlX2ZpbGwucG5nXCI+PC9pbWFnZT5cclxuXHRcdFx0XHRcdFx0PC92aWV3PlxyXG5cdFx0XHRcdFx0XHQ8dGV4dCBjbGFzcz1cIm1lbnVUaXRsZVwiPuW3sueCuTwvdGV4dD5cclxuXHRcdFx0XHRcdDwvdmlldz5cclxuXHRcdFx0XHRcdDx2aWV3IGNsYXNzPVwibWVudUl0ZW1cIiBAY2xpY2s9XCJkb09wZW5QYWdlKCdteVNvbmcnKVwiPlxyXG5cdFx0XHRcdFx0XHQ8dmlldyBjbGFzcz1cIm1lbnVNYWluXCI+XHJcblx0XHRcdFx0XHRcdFx0PGltYWdlIGNsYXNzPVwibWVudUltYWdlXCIgc3JjPVwiL3N0YXRpYy9pbWFnZS9pY29uX3Blb3BsZV9maWxsLnBuZ1wiPjwvaW1hZ2U+XHJcblx0XHRcdFx0XHRcdDwvdmlldz5cclxuXHRcdFx0XHRcdFx0PHRleHQgY2xhc3M9XCJtZW51VGl0bGVcIj7miJHnmoQ8L3RleHQ+XHJcblx0XHRcdFx0XHQ8L3ZpZXc+XHJcblx0XHRcdFx0XHQ8dmlldyBjbGFzcz1cIm1lbnVJdGVtXCIgQGNsaWNrPVwiZG9PcGVuUGFnZSgnb25MaW5lJylcIj5cclxuXHRcdFx0XHRcdFx0PHZpZXcgY2xhc3M9XCJtZW51TWFpblwiPlxyXG5cdFx0XHRcdFx0XHRcdDxpbWFnZSBjbGFzcz1cIm1lbnVJbWFnZVwiIHNyYz1cIi9zdGF0aWMvaW1hZ2UvaWNvbl9tZWV0aW5nX2ZpbGwucG5nXCI+PC9pbWFnZT5cclxuXHRcdFx0XHRcdFx0PC92aWV3PlxyXG5cdFx0XHRcdFx0XHQ8dGV4dCBjbGFzcz1cIm1lbnVUaXRsZVwiPuWcqOe6vzwvdGV4dD5cclxuXHRcdFx0XHRcdDwvdmlldz5cclxuXHRcdFx0XHRcdDx2aWV3IGNsYXNzPVwibWVudUl0ZW1cIiBAY2xpY2s9XCJkb09wZW5QYWdlKCdpbnZhdGUnKVwiPlxyXG5cdFx0XHRcdFx0XHQ8dmlldyBjbGFzcz1cIm1lbnVNYWluXCI+XHJcblx0XHRcdFx0XHRcdFx0PGltYWdlIGNsYXNzPVwibWVudUltYWdlXCIgc3JjPVwiL3N0YXRpYy9pbWFnZS9pY29uX2ludmF0ZS5wbmdcIj48L2ltYWdlPlxyXG5cdFx0XHRcdFx0XHQ8L3ZpZXc+XHJcblx0XHRcdFx0XHRcdDx0ZXh0IGNsYXNzPVwibWVudVRpdGxlXCI+6YKA6K+3PC90ZXh0PlxyXG5cdFx0XHRcdFx0PC92aWV3PlxyXG5cdFx0XHRcdFx0PHZpZXcgY2xhc3M9XCJtZW51SXRlbVwiIEBjbGljaz1cImRvT3BlblBhZ2UoJ3NldHRpbmcnKVwiPlxyXG5cdFx0XHRcdFx0XHQ8dmlldyBjbGFzcz1cIm1lbnVNYWluXCI+XHJcblx0XHRcdFx0XHRcdFx0PGltYWdlIGNsYXNzPVwibWVudUltYWdlXCIgc3JjPVwiL3N0YXRpYy9pbWFnZS9pY29uX3NldHRpbmcucG5nXCI+PC9pbWFnZT5cclxuXHRcdFx0XHRcdFx0PC92aWV3PlxyXG5cdFx0XHRcdFx0XHQ8dGV4dCBjbGFzcz1cIm1lbnVUaXRsZVwiPueuoeeQhjwvdGV4dD5cclxuXHRcdFx0XHRcdDwvdmlldz5cclxuXHRcdFx0XHQ8L3Njcm9sbC12aWV3PlxyXG5cdFx0XHQ8L3ZpZXc+XHJcblx0XHQ8L2Jsb2NrPlxyXG5cdFx0PHZpZXcgY2xhc3M9XCJmb3JtUGFzc3dvcmRcIiB2LWlmPVwic2hvd1Bhc3N3b3JkRm9ybVwiPlxyXG5cdFx0XHQ8Zm9ybSBAc3VibWl0PVwiZ2V0Um9vbUluZm9cIj5cclxuXHRcdFx0XHQ8dmlldyBjbGFzcz1cImZvcm1QYXNzd29yZFRpdGxlXCI+6K+36L6T5YWl5a+G56CB6L+b5YWl5oi/6Ze0PC92aWV3PlxyXG5cdFx0XHRcdDx2aWV3IGNsYXNzPVwiZm9ybVBhc3N3b3JkSW5wdXRcIj5cclxuXHRcdFx0XHRcdDxpbnB1dCB0eXBlPVwibnVtYmVyXCIgcGxhY2Vob2xkZXI9XCLor7fovpPlhaXlr4bnoIFcIiBwYXNzd29yZD1cInRydWVcIiB2LW1vZGVsPVwicGFzc3dvcmRcIiBjb25maXJtLXR5cGU9XCJzZWFyY2hcIiBjb25maXJtLWhvbGQ9XCJ0cnVlXCIgLz5cclxuXHRcdFx0XHQ8L3ZpZXc+XHJcblx0XHRcdDwvZm9ybT5cclxuXHRcdDwvdmlldz5cclxuXHQ8L3ZpZXc+XHJcbjwvdGVtcGxhdGU+XHJcblxyXG48c2NyaXB0PlxyXG5cdGV4cG9ydCBkZWZhdWx0IHtcclxuXHRcdGRhdGEoKSB7XHJcblx0XHRcdHJldHVybiB7XHJcblx0XHRcdFx0Ly8g6IGK5aSp6aG16Z2i5pe25pe25rua5Yqo5qC35byPXHJcblx0XHRcdFx0dmlld0lkOiBcIlwiLFxyXG5cdFx0XHRcdGhpc3RvcnlMaXN0Qm90dG9tOiA2MCxcclxuXHRcdFx0XHRiZ0F1ZGlvTWFubmFnZXI6IG51bGwsXHJcblx0XHRcdFx0Y29uZmlnOiB7XHJcblx0XHRcdFx0XHRsb2NrU2NyZWVuOiBmYWxzZSxcclxuXHRcdFx0XHR9LFxyXG5cdFx0XHRcdGxvYWRpbmc6IGZhbHNlLFxyXG5cdFx0XHRcdHNob3dSb29tUGFnZTogZmFsc2UsXHJcblx0XHRcdFx0c2hvd01lbnVCb3g6IGZhbHNlLFxyXG5cdFx0XHRcdHNob3dQYXNzd29yZEZvcm06IGZhbHNlLFxyXG5cdFx0XHRcdGFwcDogZ2V0QXBwKCksXHJcblx0XHRcdFx0dXNlckluZm86IG51bGwsXHJcblx0XHRcdFx0c29uZzoge1xyXG5cdFx0XHRcdFx0c29uZzogbnVsbCxcclxuXHRcdFx0XHRcdHVzZXI6IG51bGwsXHJcblx0XHRcdFx0fSxcclxuXHRcdFx0XHRyb29tX2lkOiAwLFxyXG5cdFx0XHRcdHJvb206IGZhbHNlLFxyXG5cdFx0XHRcdHBhc3N3b3JkOiBcIlwiLFxyXG5cdFx0XHRcdHJvdGF0ZTogMCxcclxuXHRcdFx0XHRwbGF5ZXJUaW1lcjogbnVsbCxcclxuXHRcdFx0XHRjaGF0VHlwZTogJ3RleHQnLFxyXG5cdFx0XHRcdGhpc3RvcnlLZXk6ICdoaXN0b3J5TGlzdF8nLFxyXG5cdFx0XHRcdGhpc3RvcnlMaXN0OiBbXSxcclxuXHRcdFx0XHRtZXNzYWdlT2JqOiB7XHJcblx0XHRcdFx0XHRtZXNzYWdlOiBcIlwiLFxyXG5cdFx0XHRcdFx0YXQ6IGZhbHNlLFxyXG5cdFx0XHRcdFx0Zm9jdXM6IGZhbHNlLFxyXG5cdFx0XHRcdH0sXHJcblx0XHRcdFx0Ly/lj4zlh7tcclxuXHRcdFx0XHRsYXN0VGFwVGltZW91dEZ1bmM6IG51bGwsXHJcblx0XHRcdFx0dG91Y2hTdGFydFRpbWU6IDAsXHJcblx0XHRcdFx0dG91Y2hFbmRUaW1lOiAwLFxyXG5cdFx0XHRcdGxhc3RUYXBUaW1lOiAwLFxyXG5cdFx0XHR9XHJcblx0XHR9LFxyXG5cdFx0b25Mb2FkKCkge1xyXG5cdFx0XHRsZXQgdGhhdCA9IHRoaXM7XHJcblx0XHRcdHRoYXQuYmdBdWRpb01hbm5hZ2VyID0gdW5pLmdldEJhY2tncm91bmRBdWRpb01hbmFnZXIoKTtcclxuXHRcdFx0dGhpcy5yb29tX2lkID0gdW5pLmdldFN0b3JhZ2VTeW5jKCdyb29tX2lkJykgfHwgMTAwMDA7XHJcblx0XHRcdHRoYXQuYXBwLnVzZXIuZ2V0TXlJbmZvKHtcclxuXHRcdFx0XHRzdWNjZXNzKHVzZXJJbmZvKSB7XHJcblx0XHRcdFx0XHR0aGF0LnVzZXJJbmZvID0gdXNlckluZm87XHJcblx0XHRcdFx0XHR0aGF0LmdldFJvb21JbmZvKCk7XHJcblx0XHRcdFx0fVxyXG5cdFx0XHR9KTtcclxuXHRcdFx0dW5pLiRvbignV2ViU29ja2V0TWVzc2FnZScsIGZ1bmN0aW9uKGRhdGEpIHtcclxuXHRcdFx0XHR0cnkge1xyXG5cdFx0XHRcdFx0dGhhdC5tZXNzYWdlQ29udHJvbGxlcihKU09OLnBhcnNlKGRhdGEpKTtcclxuXHRcdFx0XHRcdHRoYXQuYXV0b1Njcm9sbCgpO1xyXG5cdFx0XHRcdH0gY2F0Y2ggKGVycm9yKSB7XHJcblx0XHRcdFx0XHRjb25zb2xlLmVycm9yKGVycm9yKTtcclxuXHRcdFx0XHR9XHJcblx0XHRcdH0pO1xyXG5cdFx0XHR1bmkuJG9uKCdJbmRleFJlbG9hZCcsIGZ1bmN0aW9uKCkge1xyXG5cdFx0XHRcdHRoYXQuYXBwLnVzZXIuZ2V0TXlJbmZvKHtcclxuXHRcdFx0XHRcdHN1Y2Nlc3ModXNlckluZm8pIHtcclxuXHRcdFx0XHRcdFx0dGhhdC51c2VySW5mbyA9IHVzZXJJbmZvO1xyXG5cdFx0XHRcdFx0XHR0aGF0LmdldFJvb21JbmZvKCk7XHJcblx0XHRcdFx0XHR9XHJcblx0XHRcdFx0fSk7XHJcblx0XHRcdH0pO1xyXG5cdFx0XHR1bmkuJG9uKCdBdFVzZXJFdmVudCcsIGZ1bmN0aW9uKHVzZXIpIHtcclxuXHRcdFx0XHR0aGF0LmRvQXRVc2VyKHVzZXIpO1xyXG5cdFx0XHR9KTtcclxuXHRcdFx0dW5pLiRvbignUm9vbUNoYW5nZWQnLCBmdW5jdGlvbihyb29tX2lkKSB7XHJcblx0XHRcdFx0Y29uc29sZS5sb2cocm9vbV9pZCk7XHJcblx0XHRcdFx0dW5pLnNldE5hdmlnYXRpb25CYXJUaXRsZSh7XHJcblx0XHRcdFx0XHR0aXRsZTogJ+ato+WcqOi/m+WFpSdcclxuXHRcdFx0XHR9KTtcclxuXHRcdFx0XHR0aGF0LnJvb21faWQgPSByb29tX2lkO1xyXG5cdFx0XHRcdHRoYXQuc2hvd1Bhc3N3b3JkRm9ybSA9IGZhbHNlO1xyXG5cdFx0XHRcdHRoYXQuc2hvd1Jvb21QYWdlID0gZmFsc2U7XHJcblx0XHRcdFx0dGhhdC5wYXNzd29yZCA9ICcnO1xyXG5cdFx0XHRcdHVuaS5zZXRTdG9yYWdlU3luYygncm9vbV9pZCcsIHBhcnNlSW50KHRoYXQucm9vbV9pZCkpO1xyXG5cdFx0XHRcdHRoYXQuZ2V0Um9vbUluZm8oKTtcclxuXHRcdFx0fSk7XHJcblx0XHRcdHVuaS5vbktleWJvYXJkSGVpZ2h0Q2hhbmdlKGZ1bmN0aW9uKGUpIHt9KTtcclxuXHRcdFx0dGhhdC5iZ0F1ZGlvTWFubmFnZXIub25DYW5wbGF5KGZ1bmN0aW9uKCkge1xyXG5cdFx0XHRcdGxldCB0aW1lID0gcGFyc2VJbnQobmV3IERhdGUoKS52YWx1ZU9mKCkgLyAxMDAwKSAtIHRoYXQuc29uZy5zaW5jZSAtIDM7XHJcblx0XHRcdFx0dGhhdC5iZ0F1ZGlvTWFubmFnZXIuc2Vlayh0aW1lID4gMCA/IHRpbWUgOiAwKTtcclxuXHRcdFx0fSk7XHJcblx0XHRcdHRoYXQuYmdBdWRpb01hbm5hZ2VyLm9uRW5kZWQoZnVuY3Rpb24oKSB7XHJcblx0XHRcdFx0dGhhdC5zb25nID0ge1xyXG5cdFx0XHRcdFx0c29uZzogbnVsbCxcclxuXHRcdFx0XHRcdHVzZXI6IG51bGxcclxuXHRcdFx0XHR9O1xyXG5cdFx0XHR9KTtcclxuXHRcdH0sXHJcblx0XHRvbk5hdmlnYXRpb25CYXJCdXR0b25UYXAocmVzKSB7XHJcblx0XHRcdGxldCB0aGF0ID0gdGhpcztcclxuXHRcdFx0c3dpdGNoIChyZXMudGV4dCkge1xyXG5cdFx0XHRcdGNhc2UgJ+aNouaIvyc6XHJcblx0XHRcdFx0XHR1bmkubmF2aWdhdGVUbyh7XHJcblx0XHRcdFx0XHRcdHVybDogXCIuLi9yb29tL3NlbGVjdFwiXHJcblx0XHRcdFx0XHR9KTtcclxuXHRcdFx0XHRcdGJyZWFrO1xyXG5cdFx0XHRcdGNhc2UgJ+aIkeeahCc6XHJcblx0XHRcdFx0XHRpZiAodGhhdC51c2VySW5mby51c2VyX2lkIDw9IDApIHtcclxuXHRcdFx0XHRcdFx0dGhhdC5hcHAudXNlci5sb2dpbigpO1xyXG5cdFx0XHRcdFx0fSBlbHNlIHtcclxuXHRcdFx0XHRcdFx0dW5pLm5hdmlnYXRlVG8oe1xyXG5cdFx0XHRcdFx0XHRcdHVybDogJy4uL3VzZXIvaW5kZXgnLFxyXG5cdFx0XHRcdFx0XHR9KTtcclxuXHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdGJyZWFrO1xyXG5cdFx0XHRcdGRlZmF1bHQ6XHJcblx0XHRcdH1cclxuXHRcdH0sXHJcblx0XHRtZXRob2RzOiB7XHJcblx0XHRcdGRvVXNlckhlYWRFdmVudDogZnVuY3Rpb24oZSkge1xyXG5cdFx0XHRcdHZhciB0aGF0ID0gdGhpc1xyXG5cdFx0XHRcdHRoYXQuc2hvd01lbnVVc2VySGVhZChlKTtcclxuXHRcdFx0XHRyZXR1cm47XHJcblx0XHRcdFx0Ly8g5o6n5Yi254K55Ye75LqL5Lu25ZyoMzUwbXPlhoXop6blj5HvvIzliqDov5nlsYLliKTmlq3mmK/kuLrkuobpmLLmraLplb/mjInml7bkvJrop6blj5Hngrnlh7vkuovku7ZcclxuXHRcdFx0XHRpZiAodGhhdC50b3VjaEVuZFRpbWUgLSB0aGF0LnRvdWNoU3RhcnRUaW1lIDwgMzUwKSB7XHJcblx0XHRcdFx0XHQvLyDlvZPliY3ngrnlh7vnmoTml7bpl7RcclxuXHRcdFx0XHRcdHZhciBjdXJyZW50VGltZSA9IGUudGltZVN0YW1wXHJcblx0XHRcdFx0XHR2YXIgbGFzdFRhcFRpbWUgPSB0aGF0Lmxhc3RUYXBUaW1lXHJcblx0XHRcdFx0XHQvLyDmm7TmlrDmnIDlkI7kuIDmrKHngrnlh7vml7bpl7RcclxuXHRcdFx0XHRcdHRoYXQubGFzdFRhcFRpbWUgPSBjdXJyZW50VGltZVxyXG5cclxuXHRcdFx0XHRcdC8vIOWmguaenOS4pOasoeeCueWHu+aXtumXtOWcqDMwMOavq+enkuWGhe+8jOWImeiupOS4uuaYr+WPjOWHu+S6i+S7tlxyXG5cdFx0XHRcdFx0aWYgKGN1cnJlbnRUaW1lIC0gbGFzdFRhcFRpbWUgPCAzMDApIHtcclxuXHRcdFx0XHRcdFx0Ly8g5oiQ5Yqf6Kem5Y+R5Y+M5Ye75LqL5Lu25pe277yM5Y+W5raI5Y2V5Ye75LqL5Lu255qE5omn6KGMXHJcblx0XHRcdFx0XHRcdGNsZWFyVGltZW91dCh0aGF0Lmxhc3RUYXBUaW1lb3V0RnVuYyk7XHJcblx0XHRcdFx0XHRcdHRoYXQuZG9Ub3VjaChlLnVzZXIpO1xyXG5cdFx0XHRcdFx0XHRyZXR1cm47XHJcblx0XHRcdFx0XHR9XHJcblx0XHRcdFx0fVxyXG5cdFx0XHRcdHRoYXQuc2hvd01lbnVVc2VySGVhZChlKTtcclxuXHRcdFx0fSxcclxuXHRcdFx0ZG9TaG93TWVudUJveCgpIHtcclxuXHRcdFx0XHRsZXQgdGhhdCA9IHRoaXM7XHJcblx0XHRcdFx0dGhhdC5zaG93TWVudUJveCA9IHRydWU7XHJcblx0XHRcdFx0dGhhdC5oaXN0b3J5TGlzdEJvdHRvbSA9IDE0MDtcclxuXHRcdFx0XHR1bmkuaGlkZUtleWJvYXJkKCk7XHJcblx0XHRcdFx0dGhhdC5hdXRvU2Nyb2xsKCk7XHJcblx0XHRcdH0sXHJcblx0XHRcdGRvS2V5RG93bigpIHtcclxuXHRcdFx0XHRsZXQgdGhhdCA9IHRoaXM7XHJcblx0XHRcdFx0aWYgKHRoYXQubWVzc2FnZU9iai5hdCkge1xyXG5cdFx0XHRcdFx0aWYgKHRoYXQubWVzc2FnZU9iai5tZXNzYWdlLmluZGV4T2YoJ0AnICsgZGVjb2RlVVJJQ29tcG9uZW50KHRoYXQubWVzc2FnZU9iai5hdC51c2VyX25hbWUpKSA8IDApIHtcclxuXHRcdFx0XHRcdFx0Ly9A55qE5pi156ew5bey57uP6KKr5pS56L+H5LqGXHJcblx0XHRcdFx0XHRcdHRoYXQubWVzc2FnZU9iai5hdCA9IGZhbHNlO1xyXG5cdFx0XHRcdFx0fVxyXG5cdFx0XHRcdH1cclxuXHRcdFx0fSxcclxuXHRcdFx0ZG9NdXNpY0NsaWNrZWQoKSB7XHJcblx0XHRcdFx0bGV0IHRoYXQgPSB0aGlzO1xyXG5cdFx0XHRcdGxldCBtZW51ID0gW1xyXG5cdFx0XHRcdFx0J+S4jeWWnOasoidcclxuXHRcdFx0XHRdO1xyXG5cdFx0XHRcdGlmICh0aGF0LnVzZXJJbmZvLnVzZXJfYWRtaW4gfHwgdGhhdC5yb29tLnJvb21fdXNlciA9PSB0aGF0LnVzZXJJbmZvLnVzZXJfaWQpIHtcclxuXHRcdFx0XHRcdG1lbnUgPSBbXHJcblx0XHRcdFx0XHRcdCfliIfmrYwnXHJcblx0XHRcdFx0XHRdO1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0XHR1bmkuc2hvd0FjdGlvblNoZWV0KHtcclxuXHRcdFx0XHRcdGl0ZW1MaXN0OiBtZW51LFxyXG5cdFx0XHRcdFx0c3VjY2VzczogZnVuY3Rpb24ocmVzKSB7XHJcblx0XHRcdFx0XHRcdGNvbnNvbGUubG9nKHJlcy50YXBJbmRleCk7XHJcblx0XHRcdFx0XHRcdGxldCBidXR0b25OYW1lID0gbWVudVtyZXMudGFwSW5kZXhdO1xyXG5cdFx0XHRcdFx0XHRzd2l0Y2ggKGJ1dHRvbk5hbWUpIHtcclxuXHRcdFx0XHRcdFx0XHRjYXNlICfliIfmrYwnOlxyXG5cdFx0XHRcdFx0XHRcdFx0dW5pLnNob3dNb2RhbCh7XHJcblx0XHRcdFx0XHRcdFx0XHRcdHRpdGxlOiAn5YiH5q2M5o+Q6YaSJyxcclxuXHRcdFx0XHRcdFx0XHRcdFx0Y29udGVudDogJ+aYr+WQpuehruiupOWIh+aOieW9k+WJjeaSreaUvueahOatjD8nLFxyXG5cdFx0XHRcdFx0XHRcdFx0XHRjYW5jZWxUZXh0OiAn5Y+W5raIJyxcclxuXHRcdFx0XHRcdFx0XHRcdFx0Y29uZmlybUNvbG9yOiAnI0ZGNDUwMCcsXHJcblx0XHRcdFx0XHRcdFx0XHRcdGNvbmZpcm1UZXh0OiAn5YiH5q2MJyxcclxuXHRcdFx0XHRcdFx0XHRcdFx0c3VjY2VzczogZnVuY3Rpb24ocmVzKSB7XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0aWYgKHJlcy5jb25maXJtKSB7XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHR0aGF0LmFwcC5yZXF1ZXN0KHtcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0dXJsOiBcInNvbmcvcGFzc1wiLFxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRkYXRhOiB7XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0cm9vbV9pZDogdGhhdC5yb29tX2lkLFxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdG1pZDogdGhhdC5zb25nLnNvbmcubWlkXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdH0sXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdHN1Y2Nlc3M6IGZ1bmN0aW9uKCkge31cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdH0pO1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0XHRcdFx0fSk7XHJcblx0XHRcdFx0XHRcdFx0XHRicmVhaztcclxuXHRcdFx0XHRcdFx0XHRjYXNlICfkuI3llpzmrKInOlxyXG5cdFx0XHRcdFx0XHRcdFx0dGhhdC5hcHAucmVxdWVzdCh7XHJcblx0XHRcdFx0XHRcdFx0XHRcdHVybDogXCJzb25nL3Bhc3NcIixcclxuXHRcdFx0XHRcdFx0XHRcdFx0ZGF0YToge1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdHJvb21faWQ6IHRoYXQucm9vbV9pZCxcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRtaWQ6IHRoYXQuc29uZy5zb25nLm1pZFxyXG5cdFx0XHRcdFx0XHRcdFx0XHR9LFxyXG5cdFx0XHRcdFx0XHRcdFx0XHRzdWNjZXNzOiBmdW5jdGlvbihyZXMpIHtcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHR0aGF0LmJnQXVkaW9NYW5uYWdlci5wYXVzZSgpO1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdHRoYXQuc29uZyA9IHtcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdHNvbmc6IG51bGwsXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHR1c2VyOiBudWxsXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0fTtcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHR1bmkuc2hvd01vZGFsKHtcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdHRpdGxlOiAn5LiN5Zac5qyiJyxcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdGNvbnRlbnQ6IHJlcy5tc2csXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRzaG93Q2FuY2VsOiBmYWxzZSxcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdHN1Y2Nlc3M6IGZ1bmN0aW9uKCkge31cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHR9KVxyXG5cdFx0XHRcdFx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHRcdFx0XHR9KTtcclxuXHRcdFx0XHRcdFx0XHRcdGJyZWFrO1xyXG5cdFx0XHRcdFx0XHRcdGRlZmF1bHQ6XHJcblx0XHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdH1cclxuXHRcdFx0XHR9KVxyXG5cdFx0XHR9LFxyXG5cdFx0XHRkb0F0VXNlcih1c2VyKSB7XHJcblx0XHRcdFx0bGV0IHRoYXQgPSB0aGlzO1xyXG5cdFx0XHRcdHVuaS5zaG93VG9hc3Qoe1xyXG5cdFx0XHRcdFx0dGl0bGU6IFwiYXRcIlxyXG5cdFx0XHRcdH0pO1xyXG5cdFx0XHRcdHRoYXQubWVzc2FnZU9iai5hdCA9IHVzZXI7XHJcblx0XHRcdFx0dGhhdC5tZXNzYWdlT2JqLm1lc3NhZ2UgPSBcIkBcIiArIGRlY29kZVVSSUNvbXBvbmVudCh1c2VyLnVzZXJfbmFtZSkgKyBcIiBcIiArIHRoYXQubWVzc2FnZU9iai5tZXNzYWdlO1xyXG5cdFx0XHRcdHRoYXQubWVzc2FnZU9iai5mb2N1cyA9IHRydWU7XHJcblx0XHRcdH0sXHJcblx0XHRcdGF1dG9TY3JvbGwoKSB7XHJcblx0XHRcdFx0bGV0IHRoYXQgPSB0aGlzO1xyXG5cdFx0XHRcdHRoaXMudmlld0luZGV4ID0gXCJcIjtcclxuXHRcdFx0XHQvL+iuvue9rnZpZXdJbmRleOWAvO+8jOS9v+iBiuWkqea7muWKqOWIsOW6lemDqCAgXHJcblx0XHRcdFx0dGhpcy4kbmV4dFRpY2soKCkgPT4ge1xyXG5cdFx0XHRcdFx0dGhpcy52aWV3SWQgPSBcImltX1wiICsgdGhpcy5oaXN0b3J5TGlzdC5sZW5ndGg7XHJcblx0XHRcdFx0fSk7XHJcblx0XHRcdH0sXHJcblx0XHRcdGhpc3RvcnlDbGlja2VkKCkge1xyXG5cdFx0XHRcdGxldCB0aGF0ID0gdGhpcztcclxuXHRcdFx0XHR0aGF0LnNob3dNZW51Qm94ID0gZmFsc2U7XHJcblx0XHRcdFx0dGhhdC5oaXN0b3J5TGlzdEJvdHRvbSA9IDYwO1xyXG5cdFx0XHRcdHVuaS5oaWRlS2V5Ym9hcmQoKTtcclxuXHRcdFx0XHR0aGF0LmF1dG9TY3JvbGwoKTtcclxuXHRcdFx0fSxcclxuXHRcdFx0c2F2ZU1lc3NhZ2VIaXN0b3J5KCkge1xyXG5cdFx0XHRcdGxldCB0aGF0ID0gdGhpcztcclxuXHRcdFx0XHR1bmkuc2V0U3RvcmFnZVN5bmModGhhdC5oaXN0b3J5S2V5ICsgdGhhdC5yb29tX2lkLCBKU09OLnN0cmluZ2lmeSh0aGF0Lmhpc3RvcnlMaXN0KSk7XHJcblx0XHRcdH0sXHJcblx0XHRcdG1lc3NhZ2VDb250cm9sbGVyKG1zZykge1xyXG5cdFx0XHRcdGxldCB0aGF0ID0gdGhpcztcclxuXHRcdFx0XHRjb25zb2xlLmxvZyhtc2cpO1xyXG5cdFx0XHRcdHN3aXRjaCAobXNnLnR5cGUpIHtcclxuXHRcdFx0XHRcdGNhc2UgJ3RleHQnOlxyXG5cdFx0XHRcdFx0Y2FzZSAnaW1nJzpcclxuXHRcdFx0XHRcdGNhc2UgJ3N5c3RlbSc6XHJcblx0XHRcdFx0XHRcdGlmIChtc2cudHlwZSA9PSAndGV4dCcgJiYgbXNnLmF0KSB7XHJcblx0XHRcdFx0XHRcdFx0bXNnLmNvbnRlbnQgPSBcIkBcIiArIGRlY29kZVVSSUNvbXBvbmVudChtc2cuYXQudXNlcl9uYW1lKSArIFwiIFwiICsgbXNnLmNvbnRlbnQ7XHJcblx0XHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdFx0dGhhdC5hZGRNZXNzYWdlVG9MaXN0KG1zZyk7XHJcblx0XHRcdFx0XHRcdGJyZWFrO1xyXG5cdFx0XHRcdFx0Y2FzZSAnYWRkU29uZyc6XHJcblx0XHRcdFx0XHRcdGlmIChtc2cuYXQpIHtcclxuXHRcdFx0XHRcdFx0XHR0aGF0LmFkZFN5c3RlbU1lc3NhZ2UoZGVjb2RlVVJJQ29tcG9uZW50KG1zZy51c2VyLnVzZXJfbmFtZSkgKyBcIiDpgIHkuobkuIDpppYg44CKXCIgKyBtc2cuc29uZy5uYW1lICsgXCLjgIsg57uZIFwiICtcclxuXHRcdFx0XHRcdFx0XHRcdGRlY29kZVVSSUNvbXBvbmVudChtc2cuYXQudXNlcl9uYW1lKSwgJyMzMzMnKTtcclxuXHRcdFx0XHRcdFx0fSBlbHNlIHtcclxuXHRcdFx0XHRcdFx0XHR0aGF0LmFkZFN5c3RlbU1lc3NhZ2UoZGVjb2RlVVJJQ29tcG9uZW50KG1zZy51c2VyLnVzZXJfbmFtZSkgKyBcIiDngrnkuobkuIDpppbjgIpcIiArIG1zZy5zb25nLm5hbWUgKyBcIuOAi1wiLCAnIzMzMycpO1xyXG5cdFx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHRcdHRoYXQuc2F2ZU1lc3NhZ2VIaXN0b3J5KCk7XHJcblx0XHRcdFx0XHRcdGJyZWFrO1xyXG5cdFx0XHRcdFx0Y2FzZSAncGFzcyc6XHJcblx0XHRcdFx0XHRcdHRoYXQuYWRkU3lzdGVtTWVzc2FnZShkZWNvZGVVUklDb21wb25lbnQobXNnLnVzZXIudXNlcl9uYW1lKSArIFwiIOWIh+aOieS6huOAilwiICsgbXNnLnNvbmcubmFtZSArIFwi44CLXCIsICcjZmY0NTAwJyk7XHJcblx0XHRcdFx0XHRcdHRoYXQuc2F2ZU1lc3NhZ2VIaXN0b3J5KCk7XHJcblx0XHRcdFx0XHRcdGJyZWFrO1xyXG5cdFx0XHRcdFx0Y2FzZSAnY2hhdF9iZyc6XHJcblx0XHRcdFx0XHRcdHRoYXQuYWRkU3lzdGVtTWVzc2FnZShkZWNvZGVVUklDb21wb25lbnQobXNnLnVzZXIudXNlcl9uYW1lKSArIFwiIOi/kOawlOWkp+eIhuWPkSzop6blj5HkuobngrnmrYzog4zmma/lopnnibnmlYgoMeWwj+aXtuWGheaSreaUvuatjOabsuaXtuacieaViCkhXCIsICdncmVlbicsICcjZWVlJyk7XHJcblx0XHRcdFx0XHRcdHRoYXQuc2F2ZU1lc3NhZ2VIaXN0b3J5KCk7XHJcblx0XHRcdFx0XHRcdGJyZWFrO1xyXG5cdFx0XHRcdFx0Y2FzZSAncHVzaCc6XHJcblx0XHRcdFx0XHRcdHRoYXQuYWRkU3lzdGVtTWVzc2FnZShkZWNvZGVVUklDb21wb25lbnQobXNnLnVzZXIudXNlcl9uYW1lKSArIFwiIOWwhuatjOabsiDjgIpcIiArIG1zZy5zb25nLm5hbWUgKyBcIuOAiyDorr7kuLrnva7pobblgJnmkq3mlL5cIik7XHJcblx0XHRcdFx0XHRcdHRoYXQuc2F2ZU1lc3NhZ2VIaXN0b3J5KCk7XHJcblx0XHRcdFx0XHRcdGJyZWFrO1xyXG5cdFx0XHRcdFx0Y2FzZSAncmVtb3ZlU29uZyc6XHJcblx0XHRcdFx0XHRcdHRoYXQuYWRkU3lzdGVtTWVzc2FnZShkZWNvZGVVUklDb21wb25lbnQobXNnLnVzZXIudXNlcl9uYW1lKSArIFwiIOWwhuatjOabsiDjgIpcIiArIG1zZy5zb25nLm5hbWUgKyBcIuOAiyDku47pmJ/liJfnp7vpmaRcIik7XHJcblx0XHRcdFx0XHRcdHRoYXQuc2F2ZU1lc3NhZ2VIaXN0b3J5KCk7XHJcblx0XHRcdFx0XHRcdGJyZWFrO1xyXG5cdFx0XHRcdFx0Y2FzZSAncmVtb3ZlYmFuJzpcclxuXHRcdFx0XHRcdFx0dGhhdC5hZGRTeXN0ZW1NZXNzYWdlKGRlY29kZVVSSUNvbXBvbmVudChtc2cudXNlci51c2VyX25hbWUpICsgXCIg5bCGIFwiICsgZGVjb2RlVVJJQ29tcG9uZW50KG1zZy5iYW4udXNlcl9uYW1lKSArXHJcblx0XHRcdFx0XHRcdFx0XCIg6Kej56aBXCIpO1xyXG5cdFx0XHRcdFx0XHR0aGF0LnNhdmVNZXNzYWdlSGlzdG9yeSgpO1xyXG5cdFx0XHRcdFx0XHRicmVhaztcclxuXHRcdFx0XHRcdGNhc2UgJ3NodXRkb3duJzpcclxuXHRcdFx0XHRcdFx0dGhhdC5hZGRTeXN0ZW1NZXNzYWdlKGRlY29kZVVSSUNvbXBvbmVudChtc2cudXNlci51c2VyX25hbWUpICsgXCIg56aB5q2i5LqG55So5oi3IFwiICsgZGVjb2RlVVJJQ29tcG9uZW50KG1zZy5iYW4udXNlcl9uYW1lKSArXHJcblx0XHRcdFx0XHRcdFx0XCIg5Y+R6KiAXCIpO1xyXG5cdFx0XHRcdFx0XHR0aGF0LnNhdmVNZXNzYWdlSGlzdG9yeSgpO1xyXG5cdFx0XHRcdFx0XHRicmVhaztcclxuXHRcdFx0XHRcdGNhc2UgJ3Nvbmdkb3duJzpcclxuXHRcdFx0XHRcdFx0dGhhdC5hZGRTeXN0ZW1NZXNzYWdlKGRlY29kZVVSSUNvbXBvbmVudChtc2cudXNlci51c2VyX25hbWUpICsgXCIg56aB5q2i5LqG55So5oi3IFwiICsgZGVjb2RlVVJJQ29tcG9uZW50KG1zZy5iYW4udXNlcl9uYW1lKSArXHJcblx0XHRcdFx0XHRcdFx0XCIg54K55q2MXCIpO1xyXG5cdFx0XHRcdFx0XHR0aGF0LnNhdmVNZXNzYWdlSGlzdG9yeSgpO1xyXG5cdFx0XHRcdFx0XHRicmVhaztcclxuXHRcdFx0XHRcdGNhc2UgJ2JhY2snOlxyXG5cdFx0XHRcdFx0XHRmb3IgKGxldCBpID0gMDsgaSA8IHRoYXQuaGlzdG9yeUxpc3QubGVuZ3RoOyBpKyspIHtcclxuXHRcdFx0XHRcdFx0XHRpZiAodGhhdC5oaXN0b3J5TGlzdFtpXS5rZXkgPT0gbXNnLmtleSkge1xyXG5cdFx0XHRcdFx0XHRcdFx0dGhhdC5oaXN0b3J5TGlzdC5zcGxpY2UoaSwgMSk7XHJcblx0XHRcdFx0XHRcdFx0XHRicmVhaztcclxuXHRcdFx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdFx0dGhhdC5hZGRTeXN0ZW1NZXNzYWdlKGRlY29kZVVSSUNvbXBvbmVudChtc2cudXNlci51c2VyX25hbWUpICsgXCIg5pKk5Zue5LqG5LiA5p2h5raI5oGvXCIpO1xyXG5cdFx0XHRcdFx0XHR0aGF0LnNhdmVNZXNzYWdlSGlzdG9yeSgpO1xyXG5cdFx0XHRcdFx0XHRicmVhaztcclxuXHRcdFx0XHRcdGNhc2UgJ3BsYXlTb25nJzpcclxuXHRcdFx0XHRcdFx0dGhhdC5wbGF5TXVzaWMobXNnKTtcclxuXHRcdFx0XHRcdFx0YnJlYWs7XHJcblx0XHRcdFx0XHRkZWZhdWx0OlxyXG5cdFx0XHRcdH1cclxuXHRcdFx0fSxcclxuXHRcdFx0cGxheU11c2ljKG1zZykge1xyXG5cdFx0XHRcdGxldCB0aGF0ID0gdGhpcztcclxuXHRcdFx0XHRpZiAodGhhdC5zb25nLnNvbmcgJiYgdGhhdC5zb25nLnNvbmcubWlkID09IG1zZy5zb25nLm1pZCkge1xyXG5cdFx0XHRcdFx0cmV0dXJuO1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0XHRjb25zb2xlLmxvZygnUGxheSBNdXNpYycpO1xyXG5cdFx0XHRcdHRoYXQuc29uZyA9IG1zZztcclxuXHRcdFx0XHR0aGF0LmJnQXVkaW9NYW5uYWdlci50aXRsZSA9IG1zZy5zb25nLm5hbWUgKyBcIiAtIFwiICsgbXNnLnNvbmcuc2luZ2VyO1xyXG5cdFx0XHRcdHRoYXQuYmdBdWRpb01hbm5hZ2VyLnNpbmdlciA9IFwi54K55q2M5Lq6OlwiICsgZGVjb2RlVVJJQ29tcG9uZW50KG1zZy51c2VyLnVzZXJfbmFtZSkgKyAnICgnICsgdGhhdC5yb29tLnJvb21fbmFtZSArICcpJztcclxuXHRcdFx0XHR0aGF0LmJnQXVkaW9NYW5uYWdlci5jb3ZlckltZ1VybCA9IG1zZy5zb25nLnBpYztcclxuXHRcdFx0XHR0aGF0LmJnQXVkaW9NYW5uYWdlci5zcmMgPSBcImh0dHBzOi8vYXBpLmJiYnVnLmNvbS9hcGkvc29uZy9wbGF5dXJsP21pZD1cIiArIG1zZy5zb25nLm1pZDtcclxuXHRcdFx0XHR0aGF0LmJnQXVkaW9NYW5uYWdlci5wbGF5KCk7XHJcblx0XHRcdFx0dGhhdC5hZGRTeXN0ZW1NZXNzYWdlKCfmraPlnKjmkq3mlL4gJyArIG1zZy5zb25nLm5hbWUgKyAnKCcgKyBtc2cuc29uZy5zaW5nZXIgKyAnKScpO1xyXG5cdFx0XHR9LFxyXG5cdFx0XHRkb1NlbmRNZXNzYWdlKGUpIHtcclxuXHRcdFx0XHRsZXQgdGhhdCA9IHRoaXM7XHJcblx0XHRcdFx0bGV0IG1lc3NhZ2Vfb2xkID0gdGhhdC5tZXNzYWdlT2JqLm1lc3NhZ2U7XHJcblx0XHRcdFx0bGV0IG1lc3NhZ2UgPSBtZXNzYWdlX29sZDtcclxuXHRcdFx0XHR0aGF0Lm1lc3NhZ2VPYmoubWVzc2FnZSA9ICcnO1xyXG5cdFx0XHRcdGlmIChtZXNzYWdlX29sZCkge1xyXG5cdFx0XHRcdFx0aWYgKHRoYXQubWVzc2FnZU9iai5hdCkge1xyXG5cdFx0XHRcdFx0XHRtZXNzYWdlID0gbWVzc2FnZV9vbGQucmVwbGFjZShcIkBcIiArIGRlY29kZVVSSUNvbXBvbmVudCh0aGF0Lm1lc3NhZ2VPYmouYXQudXNlcl9uYW1lKSxcclxuXHRcdFx0XHRcdFx0XHQnJyk7XHJcblx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHR0aGF0LmFwcC5yZXF1ZXN0KHtcclxuXHRcdFx0XHRcdFx0dXJsOiBcIm1lc3NhZ2Uvc2VuZFwiLFxyXG5cdFx0XHRcdFx0XHRkYXRhOiB7XHJcblx0XHRcdFx0XHRcdFx0dHlwZTogJ3RleHQnLFxyXG5cdFx0XHRcdFx0XHRcdHdoZXJlOiBcImNoYW5uZWxcIixcclxuXHRcdFx0XHRcdFx0XHR0bzogdGhhdC5yb29tX2lkLFxyXG5cdFx0XHRcdFx0XHRcdG1zZzogZW5jb2RlVVJJQ29tcG9uZW50KG1lc3NhZ2UpLFxyXG5cdFx0XHRcdFx0XHRcdGF0OiB0aGF0Lm1lc3NhZ2VPYmouYXRcclxuXHRcdFx0XHRcdFx0fSxcclxuXHRcdFx0XHRcdFx0c3VjY2VzczogZnVuY3Rpb24ocmVzKSB7XHJcblx0XHRcdFx0XHRcdFx0dGhhdC5tZXNzYWdlT2JqLmF0ID0gZmFsc2U7XHJcblx0XHRcdFx0XHRcdH0sXHJcblx0XHRcdFx0XHRcdGVycm9yOiBmdW5jdGlvbihyZXMpIHtcclxuXHRcdFx0XHRcdFx0XHR0aGF0Lm1lc3NhZ2VPYmoubWVzc2FnZSA9IG1lc3NhZ2Vfb2xkO1xyXG5cdFx0XHRcdFx0XHRcdHVuaS5zaG93TW9kYWwoe1xyXG5cdFx0XHRcdFx0XHRcdFx0dGl0bGU6ICflj5HpgIHlpLHotKUnLFxyXG5cdFx0XHRcdFx0XHRcdFx0Y29udGVudDogcmVzLm1zZyxcclxuXHRcdFx0XHRcdFx0XHRcdHNob3dDYW5jZWw6IGZhbHNlXHJcblx0XHRcdFx0XHRcdFx0fSk7XHJcblx0XHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdH0pO1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0fSxcclxuXHRcdFx0cmFuZG9tU3RyaW5nKGxlbikge1xyXG5cdFx0XHRcdGxlbiA9IGxlbiB8fCAzMjtcclxuXHRcdFx0XHR2YXIgJGNoYXJzID0gJ0FCQ0RFRkdISktNTlBRUlNUV1hZWmFiY2RlZmhpamttbnByc3R3eHl6MjM0NTY3OCc7IC8qKioq6buY6K6k5Y675o6J5LqG5a655piT5re35reG55qE5a2X56ymb09MbCw5Z3EsVnYsVXUsSTEqKioqL1xyXG5cdFx0XHRcdHZhciBtYXhQb3MgPSAkY2hhcnMubGVuZ3RoO1xyXG5cdFx0XHRcdHZhciBwd2QgPSAnJztcclxuXHRcdFx0XHRmb3IgKGkgPSAwOyBpIDwgbGVuOyBpKyspIHtcclxuXHRcdFx0XHRcdHB3ZCArPSAkY2hhcnMuY2hhckF0KE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIG1heFBvcykpO1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0XHRyZXR1cm4gcHdkO1xyXG5cdFx0XHR9LFxyXG5cdFx0XHRhZGRNZXNzYWdlVG9MaXN0KG1zZykge1xyXG5cdFx0XHRcdGxldCB0aGF0ID0gdGhpcztcclxuXHRcdFx0XHRpZiAodGhhdC5oaXN0b3J5TGlzdC5sZW5ndGggPiAxMDApIHtcclxuXHRcdFx0XHRcdHRoYXQuaGlzdG9yeUxpc3Quc2hpZnQoKTtcclxuXHRcdFx0XHR9XHJcblx0XHRcdFx0dGhhdC5oaXN0b3J5TGlzdC5wdXNoKG1zZyk7XHJcblx0XHRcdFx0dGhhdC5zYXZlTWVzc2FnZUhpc3RvcnkoKTtcclxuXHRcdFx0XHR0aGF0LmF1dG9TY3JvbGwoKTtcclxuXHRcdFx0fSxcclxuXHRcdFx0dXJsZGVjb2RlKHN0cikge1xyXG5cdFx0XHRcdHJldHVybiBkZWNvZGVVUklDb21wb25lbnQoc3RyKTtcclxuXHRcdFx0fSxcclxuXHRcdFx0Y29ubmVjdCgpIHtcclxuXHRcdFx0XHRsZXQgdGhhdCA9IHRoaXM7XHJcblx0XHRcdFx0aWYgKHRoYXQuYXBwLndlYlNvY2tldC5pc0Nvbm5lY3RlZCkge1xyXG5cdFx0XHRcdFx0Y29uc29sZS5sb2coXCLpnIDopoHmlrfplotcIilcclxuXHRcdFx0XHRcdHRoYXQuYXBwLndlYlNvY2tldC5jbG9zZVdzcygpO1xyXG5cdFx0XHRcdFx0c2V0VGltZW91dChmdW5jdGlvbigpe1xyXG5cdFx0XHRcdFx0XHR0aGF0LmNvbm5lY3QoKTtcclxuXHRcdFx0XHRcdH0sMTAwMCk7XHJcblx0XHRcdFx0fVxyXG5cdFx0XHRcdHRoYXQuYXBwLndlYlNvY2tldC5jb25uZWN0V3NzKCk7XHJcblx0XHRcdFx0dW5pLmhpZGVMb2FkaW5nKCk7XHJcblx0XHRcdFx0Ly8gbGV0IHN0ciA9IHVuaS5nZXRTdG9yYWdlU3luYyh0aGF0Lmhpc3RvcnlLZXkgKyB0aGF0LnJvb21faWQpIHx8IGZhbHNlO1xyXG5cdFx0XHRcdC8vIHRoYXQuaGlzdG9yeUxpc3QgPSBzdHIgPyBKU09OLnBhcnNlKHN0cikgOiBbXTtcclxuXHRcdFx0XHR0aGF0LmFkZFN5c3RlbU1lc3NhZ2UodGhhdC5yb29tLnJvb21fbm90aWNlIHx8ICfmnI3liqHlmajov57mjqXmiJDlip8nKTtcclxuXHRcdFx0XHR0aGF0LnNob3dQYXNzd29yZEZvcm0gPSBmYWxzZTtcclxuXHRcdFx0XHR0aGF0LnNob3dSb29tUGFnZSA9IHRydWU7XHJcblx0XHRcdFx0dGhhdC5hcHAucmVxdWVzdCh7XHJcblx0XHRcdFx0XHR1cmw6ICdtZXNzYWdlL2dldE1lc3NhZ2VMaXN0JyxcclxuXHRcdFx0XHRcdGRhdGE6IHtcclxuXHRcdFx0XHRcdFx0cm9vbV9pZDogdGhhdC5yb29tX2lkLFxyXG5cdFx0XHRcdFx0XHRwZXJfcGFnZTogMTAwLFxyXG5cdFx0XHRcdFx0fSxcclxuXHRcdFx0XHRcdHN1Y2Nlc3M6IGZ1bmN0aW9uKHJlcykge1xyXG5cdFx0XHRcdFx0XHR0aGF0Lmhpc3RvcnlMaXN0ID0gW107XHJcblx0XHRcdFx0XHRcdGZvciAobGV0IGkgPSAwOyBpIDwgcmVzLmRhdGEubGVuZ3RoOyBpKyspIHtcclxuXHRcdFx0XHRcdFx0XHRsZXQgX29iaiA9IGZhbHNlO1xyXG5cdFx0XHRcdFx0XHRcdHRyeSB7XHJcblx0XHRcdFx0XHRcdFx0XHRfb2JqID0gSlNPTi5wYXJzZShkZWNvZGVVUklDb21wb25lbnQocmVzLmRhdGFbaV0ubWVzc2FnZV9jb250ZW50KSk7XHJcblx0XHRcdFx0XHRcdFx0fSBjYXRjaCAoZXJyb3IpIHt9XHJcblx0XHRcdFx0XHRcdFx0aWYgKCFfb2JqKSB7XHJcblx0XHRcdFx0XHRcdFx0XHRjb250aW51ZTtcclxuXHRcdFx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHRcdFx0aWYgKF9vYmoudHlwZSA9PSBcInRleHRcIikge1xyXG5cdFx0XHRcdFx0XHRcdFx0aWYgKF9vYmouYXQpIHtcclxuXHRcdFx0XHRcdFx0XHRcdFx0X29iai5jb250ZW50ID0gJ0AnICsgX29iai5hdC51c2VyX25hbWUgKyBcIiBcIiArIF9vYmouY29udGVudDtcclxuXHRcdFx0XHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHRcdFx0X29iai50aW1lID0gcmVzLmRhdGFbaV0ubWVzc2FnZV9jcmVhdGV0aW1lO1xyXG5cdFx0XHRcdFx0XHRcdHRoYXQuaGlzdG9yeUxpc3QudW5zaGlmdChfb2JqKTtcclxuXHRcdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0XHR0aGF0LmF1dG9TY3JvbGwoKTtcclxuXHRcdFx0XHRcdH0sXHJcblxyXG5cdFx0XHRcdFx0ZXJyb3I6IGZ1bmN0aW9uKHJlcykge1xyXG5cdFx0XHRcdFx0XHRjb25zb2xlLmxvZyhyZXMpO1xyXG5cdFx0XHRcdFx0fVxyXG5cdFx0XHRcdH0pO1xyXG5cclxuXHRcdFx0fSxcclxuXHRcdFx0Z2V0Um9vbUluZm8oKSB7XHJcblx0XHRcdFx0bGV0IHRoYXQgPSB0aGlzO1xyXG5cdFx0XHRcdHVuaS5zaG93TG9hZGluZyh7XHJcblx0XHRcdFx0XHR0aXRsZTogJ+i/nuaOpeaIv+mXtOacjeWKoeWZqCdcclxuXHRcdFx0XHR9KTtcclxuXHRcdFx0XHR0aGF0LmFwcC5yZXF1ZXN0KHtcclxuXHRcdFx0XHRcdHVybDogJ3Jvb20vZ2V0Um9vbUluZm8nLFxyXG5cdFx0XHRcdFx0ZGF0YToge1xyXG5cdFx0XHRcdFx0XHRyb29tX2lkOiB0aGF0LnJvb21faWQsXHJcblx0XHRcdFx0XHRcdHJvb21fcGFzc3dvcmQ6IHRoYXQucGFzc3dvcmRcclxuXHRcdFx0XHRcdH0sXHJcblx0XHRcdFx0XHRzdWNjZXNzKHJlcykge1xyXG5cdFx0XHRcdFx0XHR0aGF0LnJvb20gPSByZXMuZGF0YTtcclxuXHRcdFx0XHRcdFx0Ly8gdW5pLnNldE5hdmlnYXRpb25CYXJUaXRsZSh7XHJcblx0XHRcdFx0XHRcdC8vIFx0dGl0bGU6IHRoYXQucm9vbS5yb29tX25hbWVcclxuXHRcdFx0XHRcdFx0Ly8gfSk7XHJcblx0XHRcdFx0XHRcdHRoYXQuYXBwLnJlcXVlc3Qoe1xyXG5cdFx0XHRcdFx0XHRcdHVybDogJ3Jvb20vZ2V0V2Vic29ja2V0VXJsJyxcclxuXHRcdFx0XHRcdFx0XHRkYXRhOiB7XHJcblx0XHRcdFx0XHRcdFx0XHRjaGFubmVsOiB0aGF0LnJvb21faWRcclxuXHRcdFx0XHRcdFx0XHR9LFxyXG5cdFx0XHRcdFx0XHRcdHN1Y2Nlc3M6IGZ1bmN0aW9uKHJlcykge1xyXG5cdFx0XHRcdFx0XHRcdFx0dGhhdC5hcHAud2ViU29ja2V0LmNvbmZpZy53c3NVcmwgPSAnd3NzOi8vd2Vic29ja2V0LmJiYnVnLmNvbS8/YWNjb3VudD0nICtcclxuXHRcdFx0XHRcdFx0XHRcdFx0cmVzLmRhdGEuYWNjb3VudCArICcmY2hhbm5lbD0nICtcclxuXHRcdFx0XHRcdFx0XHRcdFx0cmVzLmRhdGEuY2hhbm5lbCArICcmdGlja2V0PScgKyByZXMuZGF0YS50aWNrZXQ7XHJcblx0XHRcdFx0XHRcdFx0XHRcclxuXHRcdFx0XHRcdFx0XHRcdHRoYXQuY29ubmVjdCgpO1xyXG5cclxuXHRcdFx0XHRcdFx0XHR9LFxyXG5cclxuXHRcdFx0XHRcdFx0XHRlcnJvcjogZnVuY3Rpb24ocmVzKSB7XHJcblx0XHRcdFx0XHRcdFx0XHRjb25zb2xlLmxvZyhyZXMpO1xyXG5cdFx0XHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdFx0fSk7XHJcblx0XHRcdFx0XHR9LFxyXG5cdFx0XHRcdFx0ZXJyb3IocmVzKSB7XHJcblx0XHRcdFx0XHRcdHVuaS5oaWRlTG9hZGluZygpO1xyXG5cdFx0XHRcdFx0XHRpZiAocmVzLmNvZGUgPT0gNDAzKSB7XHJcblx0XHRcdFx0XHRcdFx0dW5pLnNldE5hdmlnYXRpb25CYXJUaXRsZSh7XHJcblx0XHRcdFx0XHRcdFx0XHR0aXRsZTogJ+WvhueggeaIvydcclxuXHRcdFx0XHRcdFx0XHR9KTtcclxuXHRcdFx0XHRcdFx0XHR0aGF0LnNob3dQYXNzd29yZEZvcm0gPSB0cnVlO1xyXG5cdFx0XHRcdFx0XHRcdHRoYXQuc2hvd1Jvb21QYWdlID0gZmFsc2U7XHJcblx0XHRcdFx0XHRcdFx0aWYgKHRoYXQucGFzc3dvcmQpIHtcclxuXHRcdFx0XHRcdFx0XHRcdHVuaS5zaG93TW9kYWwoe1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRzaG93Q2FuY2VsOiBmYWxzZSxcclxuXHRcdFx0XHRcdFx0XHRcdFx0dGl0bGU6ICfov5vlhaXlpLHotKUnLFxyXG5cdFx0XHRcdFx0XHRcdFx0XHRjb250ZW50OiByZXMubXNnLFxyXG5cdFx0XHRcdFx0XHRcdFx0XHRzdWNjZXNzOiBmdW5jdGlvbigpIHt9XHJcblx0XHRcdFx0XHRcdFx0XHR9KTtcclxuXHRcdFx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHRcdH0gZWxzZSB7XHJcblx0XHRcdFx0XHRcdFx0dW5pLnNob3dNb2RhbCh7XHJcblx0XHRcdFx0XHRcdFx0XHRzaG93Q2FuY2VsOiBmYWxzZSxcclxuXHRcdFx0XHRcdFx0XHRcdHRpdGxlOiAn6L+b5YWl5aSx6LSlJyxcclxuXHRcdFx0XHRcdFx0XHRcdGNvbnRlbnQ6IHJlcy5tc2csXHJcblx0XHRcdFx0XHRcdFx0XHRzdWNjZXNzOiBmdW5jdGlvbigpIHtcclxuXHRcdFx0XHRcdFx0XHRcdFx0dW5pLm5hdmlnYXRlQmFjaygpO1xyXG5cdFx0XHRcdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0XHRcdH0pO1xyXG5cdFx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHR9XHJcblx0XHRcdFx0fSk7XHJcblx0XHRcdH0sXHJcblx0XHRcdGFkZFN5c3RlbU1lc3NhZ2UobXNnLCBjb2xvciA9ICcjOTk5JywgYmcgPSAndGFuc3BhcmVudCcpIHtcclxuXHRcdFx0XHRsZXQgdGhhdCA9IHRoaXM7XHJcblx0XHRcdFx0dGhhdC5oaXN0b3J5TGlzdC5wdXNoKHtcclxuXHRcdFx0XHRcdHR5cGU6IFwic3lzdGVtXCIsXHJcblx0XHRcdFx0XHRjb250ZW50OiBtc2csXHJcblx0XHRcdFx0XHRiZzogYmcsXHJcblx0XHRcdFx0XHRjb2xvcjogY29sb3JcclxuXHRcdFx0XHR9KTtcclxuXHRcdFx0XHR0aGF0LmF1dG9TY3JvbGwoKTtcclxuXHRcdFx0fSxcclxuXHRcdFx0ZG9PcGVuUGFnZShwYWdlKSB7XHJcblx0XHRcdFx0bGV0IHRoYXQgPSB0aGlzO1xyXG5cdFx0XHRcdHN3aXRjaCAocGFnZSkge1xyXG5cdFx0XHRcdFx0Y2FzZSAnYWRkU29uZyc6XHJcblx0XHRcdFx0XHRcdHVuaS5uYXZpZ2F0ZVRvKHtcclxuXHRcdFx0XHRcdFx0XHR1cmw6ICcuLi9zb25nL3NlYXJjaD9yb29tX2lkPScgKyB0aGF0LnJvb21faWRcclxuXHRcdFx0XHRcdFx0fSk7XHJcblx0XHRcdFx0XHRcdGJyZWFrO1xyXG5cdFx0XHRcdFx0Y2FzZSAnbXlTb25nJzpcclxuXHRcdFx0XHRcdFx0dW5pLm5hdmlnYXRlVG8oe1xyXG5cdFx0XHRcdFx0XHRcdHVybDogJy4uL3NvbmcvbXk/cm9vbV9pZD0nICsgdGhhdC5yb29tX2lkXHJcblx0XHRcdFx0XHRcdH0pO1xyXG5cdFx0XHRcdFx0XHRicmVhaztcclxuXHRcdFx0XHRcdGNhc2UgJ3NvbmdMaXN0JzpcclxuXHRcdFx0XHRcdFx0dW5pLm5hdmlnYXRlVG8oe1xyXG5cdFx0XHRcdFx0XHRcdHVybDogJy4uL3NvbmcvbGlzdD9yb29tX2lkPScgKyB0aGF0LnJvb21faWRcclxuXHRcdFx0XHRcdFx0fSk7XHJcblx0XHRcdFx0XHRcdGJyZWFrO1xyXG5cdFx0XHRcdFx0Y2FzZSAnb25MaW5lJzpcclxuXHRcdFx0XHRcdFx0bGV0IGlzTWFzdGVyID0gMDtcclxuXHRcdFx0XHRcdFx0aWYgKHRoYXQudXNlckluZm8udXNlcl9hZG1pbiB8fCB0aGF0LnJvb20ucm9vbV91c2VyID09IHRoYXQudXNlckluZm8udXNlcl9pZCkge1xyXG5cdFx0XHRcdFx0XHRcdGlzTWFzdGVyID0gMTtcclxuXHRcdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0XHR1bmkubmF2aWdhdGVUbyh7XHJcblx0XHRcdFx0XHRcdFx0dXJsOiAnLi4vcm9vbS9vbmxpbmU/cm9vbV9pZD0nICsgdGhhdC5yb29tX2lkICsgXCImcm9vbV9hZG1pbj1cIiArIGlzTWFzdGVyXHJcblx0XHRcdFx0XHRcdH0pO1xyXG5cdFx0XHRcdFx0XHRicmVhaztcclxuXHRcdFx0XHRcdGRlZmF1bHQ6XHJcblx0XHRcdFx0fVxyXG5cdFx0XHR9LFxyXG5cdFx0XHRzaG93TWVudVVzZXJIZWFkKG1zZykge1xyXG5cdFx0XHRcdGNvbnNvbGUubG9nKG1zZyk7XHJcblx0XHRcdFx0bGV0IHVzZXIgPSBtc2cudXNlcjtcclxuXHRcdFx0XHRsZXQgdGhhdCA9IHRoaXM7XHJcblx0XHRcdFx0bGV0IG1lbnUgPSBbJ+i/m+WFpeS4u+mhtScsICdA5LiA5LiLVGEnLCAn6YCB5q2M57uZVGEnXTtcclxuXHRcdFx0XHRpZiAodGhhdC51c2VySW5mby51c2VyX2FkbWluIHx8IHRoYXQucm9vbS5yb29tX3VzZXIgPT0gdGhhdC51c2VySW5mby51c2VyX2lkKSB7XHJcblx0XHRcdFx0XHRtZW51ID0gWyfov5vlhaXkuLvpobUnLCAnQOS4gOS4i1RhJywgJ+mAgeatjOe7mVRhJywgJ+aSpOWbnua2iOaBrycsICfnpoHmraLngrnmrYwnLCAn56aB5q2i5Y+R6KiAJywgJ+WFqOmDqOino+emgSddO1xyXG5cdFx0XHRcdH0gZWxzZSBpZiAodXNlci51c2VyX2lkID09IHRoYXQudXNlckluZm8udXNlcl9pZCkge1xyXG5cdFx0XHRcdFx0Ly/lj5Hmtojmga/kurrmmK/oh6rlt7FcclxuXHRcdFx0XHRcdG1lbnUgPSBbJ+i/m+WFpeS4u+mhtScsICdA5LiA5LiLVGEnLCAn6YCB5q2M57uZVGEnLCAn5pKk5Zue5raI5oGvJ107XHJcblx0XHRcdFx0fSBlbHNlIHtcclxuXHRcdFx0XHRcdC8v5YW25LuW5Lq655qE5raI5oGvXHJcblx0XHRcdFx0fVxyXG5cdFx0XHRcdHVuaS5zaG93QWN0aW9uU2hlZXQoe1xyXG5cdFx0XHRcdFx0aXRlbUxpc3Q6IG1lbnUsXHJcblx0XHRcdFx0XHRzdWNjZXNzOiBmdW5jdGlvbihyZXMpIHtcclxuXHRcdFx0XHRcdFx0c3dpdGNoIChtZW51W3Jlcy50YXBJbmRleF0pIHtcclxuXHRcdFx0XHRcdFx0XHRjYXNlICfpgIHmrYznu5lUYSc6XHJcblx0XHRcdFx0XHRcdFx0XHR1bmkubmF2aWdhdGVUbyh7XHJcblx0XHRcdFx0XHRcdFx0XHRcdHVybDogJy4uL3Nvbmcvc2VhcmNoP3Jvb21faWQ9JyArIHRoYXQucm9vbV9pZCArIFwiJmF0PVwiICsgdXNlci51c2VyX2lkICsgXCImbmFtZT1cIiArIHVzZXIudXNlcl9uYW1lXHJcblx0XHRcdFx0XHRcdFx0XHR9KTtcclxuXHRcdFx0XHRcdFx0XHRcdGJyZWFrO1xyXG5cdFx0XHRcdFx0XHRcdGNhc2UgJ0DkuIDkuItUYSc6XHJcblx0XHRcdFx0XHRcdFx0XHR0aGF0LmRvQXRVc2VyKHVzZXIpO1xyXG5cdFx0XHRcdFx0XHRcdFx0YnJlYWs7XHJcblx0XHRcdFx0XHRcdFx0Y2FzZSAn5YWo6YOo6Kej56aBJzpcclxuXHRcdFx0XHRcdFx0XHRcdHRoYXQuYXBwLnJlcXVlc3Qoe1xyXG5cdFx0XHRcdFx0XHRcdFx0XHR1cmw6ICd1c2VyL3JlbW92ZWJhbicsXHJcblx0XHRcdFx0XHRcdFx0XHRcdGRhdGE6IHtcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRyb29tX2lkOiB0aGF0LnJvb21faWQsXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0dXNlcl9pZDogdXNlci51c2VyX2lkXHJcblx0XHRcdFx0XHRcdFx0XHRcdH0sXHJcblx0XHRcdFx0XHRcdFx0XHRcdGxvYWRpbmc6IFwi6Kej56aB5LitXCIsXHJcblx0XHRcdFx0XHRcdFx0XHRcdHN1Y2Nlc3M6IGZ1bmN0aW9uKHJlcykge1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdHVuaS5zaG93TW9kYWwoe1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0dGl0bGU6ICfop6PnpoHmiJDlip8nLFxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0Y29udGVudDogcmVzLm1zZyxcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdHNob3dDYW5jZWw6IGZhbHNlLFxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0c3VjY2VzczogZnVuY3Rpb24oKSB7XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdHRoYXQuZ2V0dXNlckxpc3QoKTtcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHR9KTtcclxuXHRcdFx0XHRcdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0XHRcdFx0fSk7XHJcblx0XHRcdFx0XHRcdFx0XHRicmVhaztcclxuXHRcdFx0XHRcdFx0XHRjYXNlICfnpoHmraLlj5HoqIAnOlxyXG5cdFx0XHRcdFx0XHRcdFx0dGhhdC5hcHAucmVxdWVzdCh7XHJcblx0XHRcdFx0XHRcdFx0XHRcdHVybDogJ3VzZXIvc2h1dGRvd24nLFxyXG5cdFx0XHRcdFx0XHRcdFx0XHRkYXRhOiB7XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0cm9vbV9pZDogdGhhdC5yb29tX2lkLFxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdHVzZXJfaWQ6IHVzZXIudXNlcl9pZFxyXG5cdFx0XHRcdFx0XHRcdFx0XHR9LFxyXG5cdFx0XHRcdFx0XHRcdFx0XHRsb2FkaW5nOiBcIuemgeiogOS4rVwiLFxyXG5cdFx0XHRcdFx0XHRcdFx0XHRzdWNjZXNzOiBmdW5jdGlvbihyZXMpIHtcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHR1bmkuc2hvd01vZGFsKHtcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdHRpdGxlOiAn56aB6KiA5oiQ5YqfJyxcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdGNvbnRlbnQ6IHJlcy5tc2csXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRzaG93Q2FuY2VsOiBmYWxzZSxcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdHN1Y2Nlc3M6IGZ1bmN0aW9uKCkge1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHR0aGF0LmdldHVzZXJMaXN0KCk7XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0fSk7XHJcblx0XHRcdFx0XHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdFx0XHRcdH0pO1xyXG5cdFx0XHRcdFx0XHRcdFx0YnJlYWs7XHJcblx0XHRcdFx0XHRcdFx0Y2FzZSAn56aB5q2i54K55q2MJzpcclxuXHRcdFx0XHRcdFx0XHRcdHRoYXQuYXBwLnJlcXVlc3Qoe1xyXG5cdFx0XHRcdFx0XHRcdFx0XHR1cmw6ICd1c2VyL3Nvbmdkb3duJyxcclxuXHRcdFx0XHRcdFx0XHRcdFx0ZGF0YToge1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdHJvb21faWQ6IHRoYXQucm9vbV9pZCxcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHR1c2VyX2lkOiB1c2VyLnVzZXJfaWRcclxuXHRcdFx0XHRcdFx0XHRcdFx0fSxcclxuXHRcdFx0XHRcdFx0XHRcdFx0bG9hZGluZzogXCLnpoHmrYzkuK1cIixcclxuXHRcdFx0XHRcdFx0XHRcdFx0c3VjY2VzczogZnVuY3Rpb24ocmVzKSB7XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0dW5pLnNob3dNb2RhbCh7XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHR0aXRsZTogJ+emgeatjOaIkOWKnycsXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRjb250ZW50OiByZXMubXNnLFxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0c2hvd0NhbmNlbDogZmFsc2UsXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRzdWNjZXNzOiBmdW5jdGlvbigpIHtcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0dGhhdC5nZXR1c2VyTGlzdCgpO1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdH0pO1xyXG5cdFx0XHRcdFx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHRcdFx0XHR9KTtcclxuXHRcdFx0XHRcdFx0XHRcdGJyZWFrO1xyXG5cdFx0XHRcdFx0XHRcdGRlZmF1bHQ6XHJcblx0XHRcdFx0XHRcdFx0XHR1bmkuc2hvd01vZGFsKHtcclxuXHRcdFx0XHRcdFx0XHRcdFx0dGl0bGU6IFwiQkJCVUdcIixcclxuXHRcdFx0XHRcdFx0XHRcdFx0Y29udGVudDogbWVudVtyZXMudGFwSW5kZXhdICsgXCLljbPlsIbkuIrnur9cIixcclxuXHRcdFx0XHRcdFx0XHRcdFx0c2hvd0NhbmNlbDogZmFsc2VcclxuXHRcdFx0XHRcdFx0XHRcdH0pO1xyXG5cdFx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHR9XHJcblx0XHRcdFx0fSk7XHJcblx0XHRcdH0sXHJcblx0XHRcdGdldFN0YXRpY1VybCh1cmwpIHtcclxuXHRcdFx0XHRpZiAodXJsLmluZGV4T2YoJ2h0dHBzOi8vJykgPiAtMSB8fCB1cmwuaW5kZXhPZignaHR0cDovLycpID4gLTEpIHtcclxuXHRcdFx0XHRcdHJldHVybiB1cmw7XHJcblx0XHRcdFx0fSBlbHNlIHtcclxuXHRcdFx0XHRcdHJldHVybiAnaHR0cHM6Ly9jZG4uYmJidWcuY29tL3VwbG9hZHMvJyArIHVybDtcclxuXHRcdFx0XHR9XHJcblx0XHRcdH0sXHJcblx0XHRcdGRvVG91Y2godXNlcikge1xyXG5cdFx0XHRcdGxldCB0aGF0ID0gdGhpcztcclxuXHRcdFx0XHR0aGF0LnJlcXVlc3Qoe1xyXG5cdFx0XHRcdFx0dXJsOiBcIm1lc3NhZ2UvdG91Y2hcIixcclxuXHRcdFx0XHRcdGRhdGE6IHtcclxuXHRcdFx0XHRcdFx0YXQ6IHVzZXIudXNlcl9pZCxcclxuXHRcdFx0XHRcdFx0cm9vbV9pZDogdGhhdC5yb29tX2lkXHJcblx0XHRcdFx0XHR9LFxyXG5cdFx0XHRcdFx0c3VjY2VzcyhyZXMpIHt9XHJcblx0XHRcdFx0fSk7XHJcblx0XHRcdH0sXHJcblx0XHRcdGNob29zZUltYWdlKCkge1xyXG5cdFx0XHRcdGxldCB0aGF0ID0gdGhpcztcclxuXHRcdFx0XHR1bmkuY2hvb3NlSW1hZ2Uoe1xyXG5cdFx0XHRcdFx0c2l6ZVR5cGU6IFwiY29tcHJlc3NlZFwiLFxyXG5cdFx0XHRcdFx0c291cmNlVHlwZTogWydhbGJ1bSddLFxyXG5cdFx0XHRcdFx0Y291bnQ6IDEsXHJcblx0XHRcdFx0XHRmYWlsOiBmdW5jdGlvbihyZXMpIHtcclxuXHRcdFx0XHRcdFx0Y29uc29sZS5sb2cocmVzKTtcclxuXHRcdFx0XHRcdH0sXHJcblx0XHRcdFx0XHRzdWNjZXNzOiBmdW5jdGlvbihyZXMpIHtcclxuXHRcdFx0XHRcdFx0dW5pLnNob3dMb2FkaW5nKHtcclxuXHRcdFx0XHRcdFx0XHR0aXRsZTogJ+WkhOeQhuS4rSdcclxuXHRcdFx0XHRcdFx0fSk7XHJcblx0XHRcdFx0XHRcdHVuaS5jb21wcmVzc0ltYWdlKHtcclxuXHRcdFx0XHRcdFx0XHRzcmM6IHJlcy50ZW1wRmlsZVBhdGhzWzBdLFxyXG5cdFx0XHRcdFx0XHRcdHF1YWxpdHk6IDUwLFxyXG5cdFx0XHRcdFx0XHRcdHN1Y2Nlc3M6IGZ1bmN0aW9uKHJlcykge1xyXG5cdFx0XHRcdFx0XHRcdFx0dW5pLnVwbG9hZEZpbGUoe1xyXG5cdFx0XHRcdFx0XHRcdFx0XHR1cmw6IHRoYXQuYXBwLmdsb2JhbERhdGEucmVxdWVzdC5hcGlVcmwgKyBcImF0dGFjaC91cGxvYWRpbWFnZVwiLFxyXG5cdFx0XHRcdFx0XHRcdFx0XHRmaWxlUGF0aDogcmVzLnRlbXBGaWxlUGF0aCxcclxuXHRcdFx0XHRcdFx0XHRcdFx0bmFtZTogJ2ZpbGUnLFxyXG5cdFx0XHRcdFx0XHRcdFx0XHRmb3JtRGF0YTogdGhhdC5hcHAuZ2xvYmFsRGF0YS5yZXF1ZXN0LmJhc2VEYXRhLFxyXG5cdFx0XHRcdFx0XHRcdFx0XHRzdWNjZXNzOiBmdW5jdGlvbih1cGxvYWRGaWxlUmVzKSB7XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0dW5pLmhpZGVMb2FkaW5nKCk7XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0bGV0IHJlc3BvbnNlID0ge307XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0dHJ5IHtcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdHJlc3BvbnNlID0gSlNPTi5wYXJzZSh1cGxvYWRGaWxlUmVzLmRhdGEpO1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdH0gY2F0Y2ggKGVycikge1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0dW5pLnNob3dNb2RhbCh7XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdHNob3dDYW5jZWw6IGZhbHNlLFxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHR0aXRsZTogJ+S4iuS8oOWksei0pScsXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdGNvbnRlbnQ6ICfmnI3liqHlmajlj5HnlJ/plJnor68nLFxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRzdWNjZXNzOiBmdW5jdGlvbigpIHt9XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHR9KTtcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0aWYgKHJlc3BvbnNlLmNvZGUgPT0gMjAwKSB7XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHR0aGF0LmFwcC5yZXF1ZXN0KHtcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0dXJsOiBcIm1lc3NhZ2Uvc2VuZFwiLFxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRkYXRhOiB7XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0d2hlcmU6ICdjaGFubmVsJyxcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHR0bzogdGhhdC5yb29tX2lkLFxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdHR5cGU6ICdpbWcnLFxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdG1zZzogcmVzcG9uc2UuZGF0YS5hdHRhY2hfdGh1bWIsXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0cmVzb3VyY2U6IHJlc3BvbnNlLmRhdGEuYXR0YWNoX3BhdGgsXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdH0sXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdHN1Y2Nlc3M6IGZ1bmN0aW9uKHJlcykge30sXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdGVycm9yOiBmdW5jdGlvbihyZXMpIHtcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHR0aGF0Lm1lc3NhZ2VPYmoubWVzc2FnZSA9IG1lc3NhZ2Vfb2xkO1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdHVuaS5zaG93TW9kYWwoe1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0dGl0bGU6ICflj5HpgIHlpLHotKUnLFxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0Y29udGVudDogcmVzLm1zZyxcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdHNob3dDYW5jZWw6IGZhbHNlXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0fSk7XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdH0pO1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdH0gZWxzZSB7XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHR1bmkuc2hvd01vZGFsKHtcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0c2hvd0NhbmNlbDogZmFsc2UsXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdHRpdGxlOiAn5LiK5Lyg5aSx6LSlJyxcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0Y29udGVudDogcmVzcG9uc2UubXNnLFxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRzdWNjZXNzOiBmdW5jdGlvbigpIHt9XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHR9KTtcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdFx0XHRcdH0pO1xyXG5cdFx0XHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdFx0fSlcclxuXHRcdFx0XHRcdH1cclxuXHRcdFx0XHR9KTtcclxuXHRcdFx0fSxcclxuXHRcdFx0ZnVsbFZpZXdJbWFnZSh1cmwpIHtcclxuXHRcdFx0XHR1bmkucHJldmlld0ltYWdlKHtcclxuXHRcdFx0XHRcdHVybHM6IFt1cmxdLFxyXG5cdFx0XHRcdFx0bG9uZ1ByZXNzQWN0aW9uczoge1xyXG5cdFx0XHRcdFx0XHRpdGVtTGlzdDogWyfkv53lrZjlm77niYcnLCAn5Li+5oql5Zu+54mHJ10sXHJcblx0XHRcdFx0XHRcdHN1Y2Nlc3M6IGZ1bmN0aW9uKGRhdGEpIHt9LFxyXG5cdFx0XHRcdFx0XHRmYWlsOiBmdW5jdGlvbihlcnIpIHt9XHJcblx0XHRcdFx0XHR9XHJcblx0XHRcdFx0fSk7XHJcblx0XHRcdH1cclxuXHRcdH1cclxuXHR9XHJcbjwvc2NyaXB0PlxuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///8\n");

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
    "paddingLeft": "10"
  },
  "historyList": {
    "position": "fixed",
    "left": 0,
    "right": 0,
    "bottom": 0,
    "top": 0,
    "paddingBottom": "20"
  },
  "item_system": {
    "textAlign": "center",
    "marginTop": "20"
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
    "marginLeft": "5",
    "marginRight": "5"
  },
  "chat_item_text": {
    "marginTop": "10",
    "borderRadius": "10",
    "backgroundColor": "#E5E5E5",
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
    "backgroundColor": "#FFFFFF",
    "borderRadius": "10",
    "paddingTop": "5",
    "paddingRight": "5",
    "paddingBottom": "5",
    "paddingLeft": "5",
    "borderColor": "#cccccc",
    "borderWidth": "1",
    "borderStyle": "dotted"
  },
  "player_image": {
    "width": "40",
    "height": "40",
    "borderRadius": "10"
  },
  "player_info": {
    "paddingRight": "10"
  },
  "player_song": {
    "fontSize": "14",
    "color": "#333333"
  },
  "player_user": {
    "fontSize": "12",
    "color": "#999999",
    "marginTop": "5"
  },
  "chatMenu_image": {
    "position": "fixed",
    "right": "10",
    "bottom": "10",
    "width": "32",
    "height": "32"
  },
  "menuBody": {
    "zIndex": 10,
    "position": "fixed",
    "left": 0,
    "bottom": 0,
    "right": 0,
    "backgroundColor": "#EEEEEE",
    "borderTopColor": "#e5e5e5",
    "borderTopWidth": "1",
    "borderStyle": "solid",
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
    "paddingLeft": "10"
  },
  "menuImage": {
    "width": "24",
    "height": "24"
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