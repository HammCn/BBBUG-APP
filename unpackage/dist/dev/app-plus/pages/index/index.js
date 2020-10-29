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
/*!******************************************************************************************!*\
  !*** /Users/Hamm/Code/UniAppProjects/BBBUG APP/main.js?{"page":"pages%2Findex%2Findex"} ***!
  \******************************************************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var uni_app_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! uni-app-style */ 1);\n/* harmony import */ var uni_app_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(uni_app_style__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _pages_index_index_nvue_mpType_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./pages/index/index.nvue?mpType=page */ 4);\n\n        \n        \n        \n        if (typeof Promise !== 'undefined' && !Promise.prototype.finally) {\n          Promise.prototype.finally = function(callback) {\n            var promise = this.constructor\n            return this.then(function(value) {\n              return promise.resolve(callback()).then(function() {\n                return value\n              })\n            }, function(reason) {\n              return promise.resolve(callback()).then(function() {\n                throw reason\n              })\n            })\n          }\n        }\n        _pages_index_index_nvue_mpType_page__WEBPACK_IMPORTED_MODULE_1__[\"default\"].mpType = 'page'\n        _pages_index_index_nvue_mpType_page__WEBPACK_IMPORTED_MODULE_1__[\"default\"].route = 'pages/index/index'\n        _pages_index_index_nvue_mpType_page__WEBPACK_IMPORTED_MODULE_1__[\"default\"].el = '#root'\n        new Vue(_pages_index_index_nvue_mpType_page__WEBPACK_IMPORTED_MODULE_1__[\"default\"])\n        //# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbbnVsbF0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7OztBQUVBLFFBQThCO0FBQzlCLFFBQThEO0FBQzlEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGVBQWU7QUFDZixhQUFhO0FBQ2I7QUFDQTtBQUNBLGVBQWU7QUFDZixhQUFhO0FBQ2I7QUFDQTtBQUNBLFFBQVEsMkVBQUc7QUFDWCxRQUFRLDJFQUFHO0FBQ1gsUUFBUSwyRUFBRztBQUNYLGdCQUFnQiwyRUFBRyIsImZpbGUiOiIwLmpzIiwic291cmNlc0NvbnRlbnQiOlsiXG4gICAgICAgIFxuICAgICAgICBpbXBvcnQgJ3VuaS1hcHAtc3R5bGUnXG4gICAgICAgIGltcG9ydCBBcHAgZnJvbSAnLi9wYWdlcy9pbmRleC9pbmRleC5udnVlP21wVHlwZT1wYWdlJ1xuICAgICAgICBpZiAodHlwZW9mIFByb21pc2UgIT09ICd1bmRlZmluZWQnICYmICFQcm9taXNlLnByb3RvdHlwZS5maW5hbGx5KSB7XG4gICAgICAgICAgUHJvbWlzZS5wcm90b3R5cGUuZmluYWxseSA9IGZ1bmN0aW9uKGNhbGxiYWNrKSB7XG4gICAgICAgICAgICB2YXIgcHJvbWlzZSA9IHRoaXMuY29uc3RydWN0b3JcbiAgICAgICAgICAgIHJldHVybiB0aGlzLnRoZW4oZnVuY3Rpb24odmFsdWUpIHtcbiAgICAgICAgICAgICAgcmV0dXJuIHByb21pc2UucmVzb2x2ZShjYWxsYmFjaygpKS50aGVuKGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgICAgIHJldHVybiB2YWx1ZVxuICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgfSwgZnVuY3Rpb24ocmVhc29uKSB7XG4gICAgICAgICAgICAgIHJldHVybiBwcm9taXNlLnJlc29sdmUoY2FsbGJhY2soKSkudGhlbihmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICAgICB0aHJvdyByZWFzb25cbiAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIEFwcC5tcFR5cGUgPSAncGFnZSdcbiAgICAgICAgQXBwLnJvdXRlID0gJ3BhZ2VzL2luZGV4L2luZGV4J1xuICAgICAgICBBcHAuZWwgPSAnI3Jvb3QnXG4gICAgICAgIG5ldyBWdWUoQXBwKVxuICAgICAgICAiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///0\n");

/***/ }),
/* 1 */
/*!*****************************************************************************!*\
  !*** /Users/Hamm/Code/UniAppProjects/BBBUG APP/main.js?{"type":"appStyle"} ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("Vue.prototype.__$appStyle__ = {}\nVue.prototype.__merge_style && Vue.prototype.__merge_style(__webpack_require__(/*! ./App.vue?vue&type=style&index=0&lang=css */ 2).default,Vue.prototype.__$appStyle__)\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbbnVsbF0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0EsMkRBQTJELG1CQUFPLENBQUMsa0RBQTJDIiwiZmlsZSI6IjEuanMiLCJzb3VyY2VzQ29udGVudCI6WyJWdWUucHJvdG90eXBlLl9fJGFwcFN0eWxlX18gPSB7fVxuVnVlLnByb3RvdHlwZS5fX21lcmdlX3N0eWxlICYmIFZ1ZS5wcm90b3R5cGUuX19tZXJnZV9zdHlsZShyZXF1aXJlKFwiLi9BcHAudnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmbGFuZz1jc3NcIikuZGVmYXVsdCxWdWUucHJvdG90eXBlLl9fJGFwcFN0eWxlX18pXG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///1\n");

/***/ }),
/* 2 */
/*!*****************************************************************************************!*\
  !*** /Users/Hamm/Code/UniAppProjects/BBBUG APP/App.vue?vue&type=style&index=0&lang=css ***!
  \*****************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_0_1_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_0_2_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_0_3_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_style_index_0_lang_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-hbuilderx/packages/webpack-uni-nvue-loader/lib/style.js!../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--8-oneOf-0-1!../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/postcss-loader/src??ref--8-oneOf-0-2!../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--8-oneOf-0-3!../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./App.vue?vue&type=style&index=0&lang=css */ 3);
/* harmony import */ var _Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_0_1_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_0_2_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_0_3_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_style_index_0_lang_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_0_1_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_0_2_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_0_3_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_style_index_0_lang_css__WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_0_1_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_0_2_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_0_3_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_style_index_0_lang_css__WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_0_1_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_0_2_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_0_3_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_style_index_0_lang_css__WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_0_1_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_0_2_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_0_3_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_style_index_0_lang_css__WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),
/* 3 */
/*!***************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-hbuilderx/packages/webpack-uni-nvue-loader/lib/style.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--8-oneOf-0-1!./node_modules/postcss-loader/src??ref--8-oneOf-0-2!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--8-oneOf-0-3!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!/Users/Hamm/Code/UniAppProjects/BBBUG APP/App.vue?vue&type=style&index=0&lang=css ***!
  \***************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = {}

/***/ }),
/* 4 */
/*!************************************************************************************!*\
  !*** /Users/Hamm/Code/UniAppProjects/BBBUG APP/pages/index/index.nvue?mpType=page ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _index_nvue_vue_type_template_id_7b909402_mpType_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.nvue?vue&type=template&id=7b909402&mpType=page */ 5);\n/* harmony import */ var _index_nvue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index.nvue?vue&type=script&lang=js&mpType=page */ 7);\n/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _index_nvue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_1__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _index_nvue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_1__[key]; }) }(__WEBPACK_IMPORT_KEY__));\n/* harmony import */ var _Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/runtime/componentNormalizer.js */ 12);\n\nvar renderjs\n\n\nfunction injectStyles (context) {\n  \n  if(!this.options.style){\n          this.options.style = {}\n      }\n      if(Vue.prototype.__merge_style && Vue.prototype.__$appStyle__){\n        Vue.prototype.__merge_style(Vue.prototype.__$appStyle__, this.options.style)\n      }\n      if(Vue.prototype.__merge_style){\n                Vue.prototype.__merge_style(__webpack_require__(/*! ./index.nvue?vue&type=style&index=0&lang=css&mpType=page */ 10).default, this.options.style)\n            }else{\n                Object.assign(this.options.style,__webpack_require__(/*! ./index.nvue?vue&type=style&index=0&lang=css&mpType=page */ 10).default)\n            }\n\n}\n\n/* normalize component */\n\nvar component = Object(_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(\n  _index_nvue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_1__[\"default\"],\n  _index_nvue_vue_type_template_id_7b909402_mpType_page__WEBPACK_IMPORTED_MODULE_0__[\"render\"],\n  _index_nvue_vue_type_template_id_7b909402_mpType_page__WEBPACK_IMPORTED_MODULE_0__[\"staticRenderFns\"],\n  false,\n  null,\n  null,\n  \"e0aaa326\",\n  false,\n  _index_nvue_vue_type_template_id_7b909402_mpType_page__WEBPACK_IMPORTED_MODULE_0__[\"components\"],\n  renderjs\n)\n\ninjectStyles.call(component)\ncomponent.options.__file = \"pages/index/index.nvue\"\n/* harmony default export */ __webpack_exports__[\"default\"] = (component.exports);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbbnVsbF0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBOEg7QUFDOUg7QUFDcUU7QUFDTDtBQUNoRTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDRDQUE0QyxtQkFBTyxDQUFDLGtFQUEwRDtBQUM5RyxhQUFhO0FBQ2IsaURBQWlELG1CQUFPLENBQUMsa0VBQTBEO0FBQ25IOztBQUVBOztBQUVBO0FBQ2dOO0FBQ2hOLGdCQUFnQixpTkFBVTtBQUMxQixFQUFFLHVGQUFNO0FBQ1IsRUFBRSw0RkFBTTtBQUNSLEVBQUUscUdBQWU7QUFDakI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUUsZ0dBQVU7QUFDWjtBQUNBOztBQUVBO0FBQ0E7QUFDZSxnRiIsImZpbGUiOiI0LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnMsIHJlY3ljbGFibGVSZW5kZXIsIGNvbXBvbmVudHMgfSBmcm9tIFwiLi9pbmRleC5udnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTdiOTA5NDAyJm1wVHlwZT1wYWdlXCJcbnZhciByZW5kZXJqc1xuaW1wb3J0IHNjcmlwdCBmcm9tIFwiLi9pbmRleC5udnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJm1wVHlwZT1wYWdlXCJcbmV4cG9ydCAqIGZyb20gXCIuL2luZGV4Lm52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmbXBUeXBlPXBhZ2VcIlxuZnVuY3Rpb24gaW5qZWN0U3R5bGVzIChjb250ZXh0KSB7XG4gIFxuICBpZighdGhpcy5vcHRpb25zLnN0eWxlKXtcbiAgICAgICAgICB0aGlzLm9wdGlvbnMuc3R5bGUgPSB7fVxuICAgICAgfVxuICAgICAgaWYoVnVlLnByb3RvdHlwZS5fX21lcmdlX3N0eWxlICYmIFZ1ZS5wcm90b3R5cGUuX18kYXBwU3R5bGVfXyl7XG4gICAgICAgIFZ1ZS5wcm90b3R5cGUuX19tZXJnZV9zdHlsZShWdWUucHJvdG90eXBlLl9fJGFwcFN0eWxlX18sIHRoaXMub3B0aW9ucy5zdHlsZSlcbiAgICAgIH1cbiAgICAgIGlmKFZ1ZS5wcm90b3R5cGUuX19tZXJnZV9zdHlsZSl7XG4gICAgICAgICAgICAgICAgVnVlLnByb3RvdHlwZS5fX21lcmdlX3N0eWxlKHJlcXVpcmUoXCIuL2luZGV4Lm52dWU/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MCZsYW5nPWNzcyZtcFR5cGU9cGFnZVwiKS5kZWZhdWx0LCB0aGlzLm9wdGlvbnMuc3R5bGUpXG4gICAgICAgICAgICB9ZWxzZXtcbiAgICAgICAgICAgICAgICBPYmplY3QuYXNzaWduKHRoaXMub3B0aW9ucy5zdHlsZSxyZXF1aXJlKFwiLi9pbmRleC5udnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmbGFuZz1jc3MmbXBUeXBlPXBhZ2VcIikuZGVmYXVsdClcbiAgICAgICAgICAgIH1cblxufVxuXG4vKiBub3JtYWxpemUgY29tcG9uZW50ICovXG5pbXBvcnQgbm9ybWFsaXplciBmcm9tIFwiIS4uLy4uLy4uLy4uLy4uLy4uLy4uL0FwcGxpY2F0aW9ucy9IQnVpbGRlclguYXBwL0NvbnRlbnRzL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL0BkY2xvdWRpby92dWUtY2xpLXBsdWdpbi11bmkvcGFja2FnZXMvdnVlLWxvYWRlci9saWIvcnVudGltZS9jb21wb25lbnROb3JtYWxpemVyLmpzXCJcbnZhciBjb21wb25lbnQgPSBub3JtYWxpemVyKFxuICBzY3JpcHQsXG4gIHJlbmRlcixcbiAgc3RhdGljUmVuZGVyRm5zLFxuICBmYWxzZSxcbiAgbnVsbCxcbiAgbnVsbCxcbiAgXCJlMGFhYTMyNlwiLFxuICBmYWxzZSxcbiAgY29tcG9uZW50cyxcbiAgcmVuZGVyanNcbilcblxuaW5qZWN0U3R5bGVzLmNhbGwoY29tcG9uZW50KVxuY29tcG9uZW50Lm9wdGlvbnMuX19maWxlID0gXCJwYWdlcy9pbmRleC9pbmRleC5udnVlXCJcbmV4cG9ydCBkZWZhdWx0IGNvbXBvbmVudC5leHBvcnRzIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///4\n");

/***/ }),
/* 5 */
/*!******************************************************************************************************************!*\
  !*** /Users/Hamm/Code/UniAppProjects/BBBUG APP/pages/index/index.nvue?vue&type=template&id=7b909402&mpType=page ***!
  \******************************************************************************************************************/
/*! exports provided: render, staticRenderFns, recyclableRender, components */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_template_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_7_0_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_index_nvue_vue_type_template_id_7b909402_mpType_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-hbuilderx/packages/webpack-uni-nvue-loader/lib/template.js!../../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/page-meta.js!../../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--7-0!../../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./index.nvue?vue&type=template&id=7b909402&mpType=page */ 6);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_template_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_7_0_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_index_nvue_vue_type_template_id_7b909402_mpType_page__WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_template_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_7_0_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_index_nvue_vue_type_template_id_7b909402_mpType_page__WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "recyclableRender", function() { return _Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_template_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_7_0_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_index_nvue_vue_type_template_id_7b909402_mpType_page__WEBPACK_IMPORTED_MODULE_0__["recyclableRender"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "components", function() { return _Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_template_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_7_0_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_index_nvue_vue_type_template_id_7b909402_mpType_page__WEBPACK_IMPORTED_MODULE_0__["components"]; });



/***/ }),
/* 6 */
/*!*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-hbuilderx/packages/webpack-uni-nvue-loader/lib/template.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/page-meta.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--7-0!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!/Users/Hamm/Code/UniAppProjects/BBBUG APP/pages/index/index.nvue?vue&type=template&id=7b909402&mpType=page ***!
  \*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
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
                        staticClass: ["bottom"],
                        attrs: { id: "im_" + _vm.historyList.length }
                      })
                    ]
                  ),
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
/*!************************************************************************************************************!*\
  !*** /Users/Hamm/Code/UniAppProjects/BBBUG APP/pages/index/index.nvue?vue&type=script&lang=js&mpType=page ***!
  \************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_ref_4_0_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_4_1_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_index_nvue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/babel-loader/lib??ref--4-0!../../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--4-1!../../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./index.nvue?vue&type=script&lang=js&mpType=page */ 8);\n/* harmony import */ var _Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_ref_4_0_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_4_1_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_index_nvue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_ref_4_0_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_4_1_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_index_nvue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_ref_4_0_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_4_1_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_index_nvue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_ref_4_0_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_4_1_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_index_nvue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));\n /* harmony default export */ __webpack_exports__[\"default\"] = (_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_ref_4_0_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_4_1_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_index_nvue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0___default.a); //# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbbnVsbF0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQXVqQixDQUFnQixpa0JBQUcsRUFBQyIsImZpbGUiOiI3LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IG1vZCBmcm9tIFwiLSEuLi8uLi8uLi8uLi8uLi8uLi8uLi9BcHBsaWNhdGlvbnMvSEJ1aWxkZXJYLmFwcC9Db250ZW50cy9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzPz9yZWYtLTQtMCEuLi8uLi8uLi8uLi8uLi8uLi8uLi9BcHBsaWNhdGlvbnMvSEJ1aWxkZXJYLmFwcC9Db250ZW50cy9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9AZGNsb3VkaW8vdnVlLWNsaS1wbHVnaW4tdW5pL3BhY2thZ2VzL3dlYnBhY2stcHJlcHJvY2Vzcy1sb2FkZXIvaW5kZXguanM/P3JlZi0tNC0xIS4uLy4uLy4uLy4uLy4uLy4uLy4uL0FwcGxpY2F0aW9ucy9IQnVpbGRlclguYXBwL0NvbnRlbnRzL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL0BkY2xvdWRpby92dWUtY2xpLXBsdWdpbi11bmkvcGFja2FnZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL2luZGV4Lm52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmbXBUeXBlPXBhZ2VcIjsgZXhwb3J0IGRlZmF1bHQgbW9kOyBleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi8uLi8uLi8uLi8uLi8uLi9BcHBsaWNhdGlvbnMvSEJ1aWxkZXJYLmFwcC9Db250ZW50cy9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzPz9yZWYtLTQtMCEuLi8uLi8uLi8uLi8uLi8uLi8uLi9BcHBsaWNhdGlvbnMvSEJ1aWxkZXJYLmFwcC9Db250ZW50cy9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9AZGNsb3VkaW8vdnVlLWNsaS1wbHVnaW4tdW5pL3BhY2thZ2VzL3dlYnBhY2stcHJlcHJvY2Vzcy1sb2FkZXIvaW5kZXguanM/P3JlZi0tNC0xIS4uLy4uLy4uLy4uLy4uLy4uLy4uL0FwcGxpY2F0aW9ucy9IQnVpbGRlclguYXBwL0NvbnRlbnRzL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL0BkY2xvdWRpby92dWUtY2xpLXBsdWdpbi11bmkvcGFja2FnZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL2luZGV4Lm52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmbXBUeXBlPXBhZ2VcIiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///7\n");

/***/ }),
/* 8 */
/*!***************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--4-1!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!/Users/Hamm/Code/UniAppProjects/BBBUG APP/pages/index/index.nvue?vue&type=script&lang=js&mpType=page ***!
  \***************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("/* WEBPACK VAR INJECTION */(function(__f__) {Object.defineProperty(exports, \"__esModule\", { value: true });exports.default = void 0; //\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\nvar _default =\n{\n  data: function data() {\n    return {\n      viewId: \"\",\n      safeAreaBottom: 0,\n      bgAudioMannager: null,\n      showEmojiBox: false,\n      showRoomPage: false,\n      showMenuBox: false,\n      showPasswordForm: false,\n      app: getApp(),\n      userInfo: null,\n      song: {\n        song: null,\n        user: null },\n\n      room_id: 0,\n      room: false,\n      password: \"\",\n      chatType: 'text',\n      historyList: [],\n      messageObj: {\n        message: \"\",\n        at: false,\n        focus: false },\n\n      musicNotLike: false };\n\n  },\n  onLoad: function onLoad() {\n    var that = this;\n    var res = uni.getSystemInfoSync();\n    that.safeAreaBottom = res.safeAreaInsets.bottom == 0 ? 0 : res.safeAreaInsets.bottom;\n    that.bgAudioMannager = uni.getBackgroundAudioManager();\n    this.room_id = uni.getStorageSync('room_id') || 10000;\n    that.app.user.getMyInfo({\n      success: function success(userInfo) {\n        that.userInfo = userInfo;\n        that.getRoomInfo();\n      } });\n\n    uni.$on('WebSocketMessage', function (data) {\n      // try {\n      that.messageController(JSON.parse(data));\n      that.autoScroll();\n      // } catch (error) {\n      // console.error(error);\n      // }\n    });\n    uni.$on('IndexReload', function () {\n      that.app.user.getMyInfo({\n        success: function success(userInfo) {\n          that.userInfo = userInfo;\n          that.getRoomInfo();\n        } });\n\n    });\n    uni.$on('AtUserEvent', function (user) {\n      that.doAtUser(user);\n    });\n    uni.$on('RoomChanged', function (room_id) {\n      __f__(\"log\", room_id, \" at pages/index/index.nvue:432\");\n      uni.setNavigationBarTitle({\n        title: '正在进入' });\n\n      that.room_id = room_id;\n      that.showPasswordForm = false;\n      that.showRoomPage = false;\n      that.password = '';\n      uni.setStorageSync('room_id', parseInt(that.room_id));\n      that.getRoomInfo();\n    });\n    that.bgAudioMannager.onCanplay(function () {\n      var time = parseInt(new Date().valueOf() / 1000) - that.song.since - 3;\n      that.bgAudioMannager.seek(time > 0 ? time : 0);\n    });\n    that.bgAudioMannager.onEnded(function () {\n      that.song = {\n        song: null,\n        user: null };\n\n    });\n  },\n  onShow: function onShow() {\n    var that = this;\n    plus.push.clear();\n    if (that.bgAudioMannager.src) {\n      if (!that.musicNotLike) {\n        that.bgAudioMannager.play();\n      }\n    }\n    that.password = '';\n    that.autoScroll();\n  },\n  onNavigationBarButtonTap: function onNavigationBarButtonTap(res) {\n    var that = this;\n    switch (res.text) {\n      case '换房':\n        uni.navigateTo({\n          url: \"../room/select\" });\n\n        break;\n      case '我的':\n        if (that.userInfo && that.userInfo.user_id <= 0) {\n          that.app.user.login();\n        } else {\n          uni.navigateTo({\n            url: '../user/index' });\n\n        }\n        break;\n      default:}\n\n  },\n  methods: {\n    doUserHeadEvent: function doUserHeadEvent(e) {\n      var that = this;\n      that.showMenuUserHead(e);\n    },\n    doShowEmojiBox: function doShowEmojiBox() {\n      var that = this;\n      that.showEmojiBox = !that.showEmojiBox;\n      that.showMenuBox = false;\n      uni.hideKeyboard();\n      if (!that.showEmojiBox) {\n        that.autoScroll();\n      }\n    },\n    doShowMenuBox: function doShowMenuBox() {\n      var that = this;\n      that.showMenuBox = !that.showMenuBox;\n      that.showEmojiBox = false;\n      uni.hideKeyboard();\n      if (!that.showMenuBox) {\n        that.autoScroll();\n      }\n    },\n    doKeyDown: function doKeyDown() {\n      var that = this;\n      if (that.messageObj.at) {\n        if (that.messageObj.message.indexOf('@' + decodeURIComponent(that.messageObj.at.user_name)) < 0) {\n          //@的昵称已经被改过了\n          that.messageObj.at = false;\n        }\n      }\n    },\n    doMusicClicked: function doMusicClicked() {\n      var that = this;\n      var menu = [\n      '不喜欢', '收藏'];\n\n      if (that.userInfo.user_admin || that.room.room_user == that.userInfo.user_id) {\n        menu = [\n        '切歌', '收藏', '禁止Ta点歌'];\n\n      }\n      uni.showActionSheet({\n        itemList: menu,\n        success: function success(res) {\n          __f__(\"log\", res.tapIndex, \" at pages/index/index.nvue:530\");\n          var buttonName = menu[res.tapIndex];\n          switch (buttonName) {\n            case '禁止Ta点歌':\n              that.app.request({\n                url: 'user/songdown',\n                data: {\n                  room_id: that.room_id,\n                  user_id: that.song.user.user_id },\n\n                loading: \"禁歌中\",\n                success: function success(res) {\n                  uni.showModal({\n                    title: '禁歌成功',\n                    content: res.msg,\n                    showCancel: false,\n                    success: function success() {} });\n\n                } });\n\n              break;\n            case '切歌':\n              uni.showModal({\n                title: '切歌提醒',\n                content: '是否确认切掉当前播放的歌?',\n                cancelText: '取消',\n                confirmColor: '#FF4500',\n                confirmText: '切歌',\n                success: function success(res) {\n                  if (res.confirm) {\n                    that.app.request({\n                      url: \"song/pass\",\n                      data: {\n                        room_id: that.room_id,\n                        mid: that.song.song.mid },\n\n                      success: function success() {} });\n\n                  }\n                } });\n\n              break;\n            case '不喜欢':\n              that.app.request({\n                url: \"song/pass\",\n                data: {\n                  room_id: that.room_id,\n                  mid: that.song.song.mid },\n\n                success: function success(res) {\n                  that.bgAudioMannager.pause();\n                  that.song = {\n                    song: null,\n                    user: null };\n\n                  that.musicNotLike = true;\n                  uni.showModal({\n                    title: '不喜欢',\n                    content: res.msg,\n                    showCancel: false,\n                    success: function success() {} });\n\n                } });\n\n              break;\n            case '收藏':\n              that.app.request({\n                url: \"song/addMySong\",\n                data: {\n                  room_id: that.room_id,\n                  mid: that.song.song.mid },\n\n                success: function success(res) {\n                  uni.showToast({\n                    title: \"收藏成功\" });\n\n                } });\n\n              break;\n            default:}\n\n        } });\n\n    },\n    doAtUser: function doAtUser(user) {\n      var that = this;\n      that.messageObj.at = user;\n      that.messageObj.message = \"@\" + decodeURIComponent(user.user_name) + \" \" + that.messageObj.message;\n      that.messageObj.focus = true;\n    },\n    autoScroll: function autoScroll() {var _this = this;\n      var that = this;\n      this.viewId = \"\";\n      //设置viewIndex值，使聊天滚动到底部  \n      this.$nextTick(function () {\n        _this.viewId = \"im_\" + _this.historyList.length;\n      });\n    },\n    historyClicked: function historyClicked() {\n      var that = this;\n      that.showMenuBox = false;\n      that.showEmojiBox = false;\n      uni.hideKeyboard();\n      that.autoScroll();\n    },\n    messageController: function messageController(msg) {\n      var that = this;\n      switch (msg.type) {\n        case 'text':\n        case 'img':\n        case 'system':\n          if (msg.type == 'text' && msg.at) {\n            if (msg.at.user_id == that.userInfo.user_id) {\n              plus.push.createMessage(\"@\" + decodeURIComponent(msg.at.user_name) + \" \" + decodeURIComponent(msg.content), '', {\n                title: decodeURIComponent(msg.user.user_name) });\n\n            }\n            msg.content = \"@\" + decodeURIComponent(msg.at.user_name) + \" \" + msg.content;\n          }\n          that.addMessageToList(msg);\n          break;\n        case 'addSong':\n          if (msg.at) {\n            that.addSystemMessage(decodeURIComponent(msg.user.user_name) + \" 送了一首 《\" + msg.song.name + \"》 给 \" +\n            decodeURIComponent(msg.at.user_name), '#333');\n            if (msg.at.user_id == that.userInfo.user_id) {\n              plus.push.createMessage(\"送你一首《\" + msg.song.name + \"》(\" + msg.song.singer + \")\", '', {\n                title: decodeURIComponent(msg.user.user_name) });\n\n            }\n          } else {\n            that.addSystemMessage(decodeURIComponent(msg.user.user_name) + \" 点了一首《\" + msg.song.name + \"》\", '#333');\n          }\n\n          break;\n        case 'pass':\n          that.addSystemMessage(decodeURIComponent(msg.user.user_name) + \" 切掉了《\" + msg.song.name + \"》\", '#ff4500');\n\n          break;\n        case 'chat_bg':\n          that.addSystemMessage(decodeURIComponent(msg.user.user_name) + \" 运气大爆发,触发了点歌背景墙特效(1小时内播放歌曲时有效)!\", 'green',\n          '#eee');\n\n          break;\n        case 'push':\n          that.addSystemMessage(decodeURIComponent(msg.user.user_name) + \" 将歌曲 《\" + msg.song.name + \"》 设为置顶候播放\");\n\n          break;\n        case 'removeSong':\n          that.addSystemMessage(decodeURIComponent(msg.user.user_name) + \" 将歌曲 《\" + msg.song.name + \"》 从队列移除\");\n\n          break;\n        case 'removeban':\n          that.addSystemMessage(decodeURIComponent(msg.user.user_name) + \" 将 \" + decodeURIComponent(msg.ban.user_name) +\n          \" 解禁\");\n\n          break;\n        case 'shutdown':\n          that.addSystemMessage(decodeURIComponent(msg.user.user_name) + \" 禁止了用户 \" + decodeURIComponent(msg.ban.user_name) +\n          \" 发言\");\n\n          break;\n        case 'songdown':\n          that.addSystemMessage(decodeURIComponent(msg.user.user_name) + \" 禁止了用户 \" + decodeURIComponent(msg.ban.user_name) +\n          \" 点歌\");\n\n          break;\n        case 'back':\n          for (var _i = 0; _i < that.historyList.length; _i++) {\n            if (that.historyList[_i].message_id == msg.message_id) {\n              that.historyList.splice(_i, 1);\n              break;\n            }\n          }\n          that.addSystemMessage(decodeURIComponent(msg.user.user_name) + \" 撤回了一条消息\");\n\n          break;\n        case 'playSong':\n          that.musicNotLike = false;\n          that.playMusic(msg);\n          if (msg.user.user_id == that.userInfo.user_id) {\n            plus.push.createMessage(\"你点的《\" + msg.song.name + \"》(\" + msg.song.singer + \")\", '', {\n              title: \"正在播放\" });\n\n          } else if (msg.at.user_id == that.userInfo.user_id) {\n            plus.push.createMessage(decodeURIComponent(msg.user.user_name) + \" 送给你的《\" + msg.song.name + \"》(\" + msg.song.singer +\n            \")\", '', {\n              title: \"正在播放\" });\n\n          }\n          break;\n        default:}\n\n    },\n    playMusic: function playMusic(msg) {\n      var that = this;\n      if (that.song.song && that.song.song.mid == msg.song.mid) {\n        return;\n      }\n      that.song = msg;\n      that.bgAudioMannager.title = msg.song.name + \" - \" + msg.song.singer;\n      that.bgAudioMannager.singer = \"点歌人:\" + decodeURIComponent(msg.user.user_name) + ' (' + that.room.room_name + ')';\n      that.bgAudioMannager.coverImgUrl = msg.song.pic;\n      that.bgAudioMannager.src = \"https://api.bbbug.com/api/song/playurl?mid=\" + msg.song.mid;\n      that.bgAudioMannager.play();\n    },\n    sendEmoji: function sendEmoji(index) {\n      var that = this;\n      var url = \"https://cdn.bbbug.com/images/emoji/\" + index + \".png\";\n      that.app.request({\n        url: \"message/send\",\n        data: {\n          where: 'channel',\n          to: that.room_id,\n          type: 'img',\n          msg: url,\n          resource: url },\n\n        success: function success(res) {\n          that.showEmojiBox = false;\n        } });\n\n    },\n    doSendMessage: function doSendMessage(e) {\n      var that = this;\n      var message_old = that.messageObj.message;\n      var message = message_old;\n      that.messageObj.message = '';\n      if (message_old) {\n        if (that.messageObj.at) {\n          message = message_old.replace(\"@\" + decodeURIComponent(that.messageObj.at.user_name),\n          '');\n        }\n        that.app.request({\n          url: \"message/send\",\n          data: {\n            type: 'text',\n            where: \"channel\",\n            to: that.room_id,\n            msg: encodeURIComponent(message),\n            at: that.messageObj.at },\n\n          success: function success(res) {\n            that.messageObj.at = false;\n          },\n          error: function error(res) {\n            that.messageObj.message = message_old;\n            uni.showModal({\n              title: '发送失败',\n              content: res.msg,\n              showCancel: false });\n\n          } });\n\n      }\n    },\n    randomString: function randomString(len) {\n      len = len || 32;\n      var $chars = 'ABCDEFGHJKMNPQRSTWXYZabcdefhijkmnprstwxyz2345678'; /****默认去掉了容易混淆的字符oOLl,9gq,Vv,Uu,I1****/\n      var maxPos = $chars.length;\n      var pwd = '';\n      for (i = 0; i < len; i++) {\n        pwd += $chars.charAt(Math.floor(Math.random() * maxPos));\n      }\n      return pwd;\n    },\n    addMessageToList: function addMessageToList(msg) {\n      var that = this;\n      if (that.historyList.length > 100) {\n        that.historyList.shift();\n      }\n      that.historyList.push(msg);\n\n      that.autoScroll();\n    },\n    urldecode: function urldecode(str) {\n      return decodeURIComponent(str);\n    },\n    connectWebsocket: function connectWebsocket() {\n      var that = this;\n      if (that.app.webSocket.isConnected) {\n        __f__(\"log\", \"需要斷開\", \" at pages/index/index.nvue:811\");\n        that.app.webSocket.closeWss();\n        setTimeout(function () {\n          that.connectWebsocket();\n        }, 1000);\n        return;\n      }\n      that.app.webSocket.connectWss();\n      uni.hideLoading();\n      that.addSystemMessage(that.room.room_notice || '服务器连接成功');\n      that.showPasswordForm = false;\n      that.showRoomPage = true;\n      that.app.request({\n        url: 'message/getMessageList',\n        data: {\n          room_id: that.room_id,\n          per_page: 100 },\n\n        success: function success(res) {\n          that.historyList = [];\n          for (var _i2 = 0; _i2 < res.data.length; _i2++) {\n            var _obj = false;\n            try {\n              _obj = JSON.parse(decodeURIComponent(res.data[_i2].message_content));\n            } catch (error) {}\n            if (!_obj) {\n              continue;\n            }\n            if (_obj.type == \"text\") {\n              if (_obj.at) {\n                _obj.content = '@' + _obj.at.user_name + \" \" + _obj.content;\n              }\n            }\n            _obj.time = res.data[_i2].message_createtime;\n            that.historyList.unshift(_obj);\n          }\n          that.addSystemMessage(that.room.room_notice || \"欢迎来到\" + that.room.room_name);\n          that.autoScroll();\n        },\n\n        error: function error(res) {\n          __f__(\"log\", res, \" at pages/index/index.nvue:852\");\n        } });\n\n\n    },\n    getRoomInfo: function getRoomInfo() {\n      var that = this;\n      uni.showLoading({\n        title: '连接房间服务器' });\n\n      that.app.request({\n        url: 'room/getRoomInfo',\n        data: {\n          room_id: that.room_id,\n          room_password: that.password },\n\n        success: function success(res) {\n          that.room = res.data;\n          uni.setNavigationBarTitle({\n            title: that.room.room_name });\n\n          that.app.request({\n            url: 'room/getWebsocketUrl',\n            data: {\n              channel: that.room_id },\n\n            success: function success(res) {\n              that.app.webSocket.config.wssUrl = 'wss://websocket.bbbug.com/?account=' +\n              res.data.account + '&channel=' +\n              res.data.channel + '&ticket=' + res.data.ticket;\n              that.connectWebsocket();\n            },\n\n            error: function error(res) {\n              __f__(\"log\", res, \" at pages/index/index.nvue:886\");\n            } });\n\n        },\n        error: function error(res) {\n          uni.hideLoading();\n          if (res.code == 403) {\n            uni.setNavigationBarTitle({\n              title: '密码房' });\n\n            that.showPasswordForm = true;\n            that.showRoomPage = false;\n            if (that.password) {\n              uni.showModal({\n                showCancel: false,\n                title: '进入失败',\n                content: res.msg,\n                success: function success() {} });\n\n            }\n          } else {\n            uni.showModal({\n              showCancel: false,\n              title: '进入失败',\n              content: res.msg,\n              success: function success() {\n                uni.navigateBack();\n              } });\n\n          }\n        } });\n\n    },\n    addSystemMessage: function addSystemMessage(msg) {var color = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '#999';var bg = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 'tansparent';\n      var that = this;\n      that.historyList.push({\n        type: \"system\",\n        content: msg,\n        bg: bg,\n        color: color });\n\n      that.autoScroll();\n    },\n    doOpenPage: function doOpenPage(page) {\n      var that = this;\n      switch (page) {\n        case 'addSong':\n          uni.navigateTo({\n            url: '../song/search?room_id=' + that.room_id });\n\n          break;\n        case 'mySong':\n          uni.navigateTo({\n            url: '../song/my?room_id=' + that.room_id });\n\n          break;\n        case 'songList':\n          uni.navigateTo({\n            url: '../song/list?room_id=' + that.room_id });\n\n          break;\n        case 'onLine':\n          var isMaster = 0;\n          if (that.userInfo.user_admin || that.room.room_user == that.userInfo.user_id) {\n            isMaster = 1;\n          }\n          uni.navigateTo({\n            url: '../room/online?room_id=' + that.room_id + \"&room_admin=\" + isMaster });\n\n          break;\n        default:}\n\n    },\n    showMenuUserHead: function showMenuUserHead(msg) {\n      var user = msg.user;\n      var that = this;\n      var menu = ['进入主页', '@一下Ta', '送歌给Ta'];\n      if (that.userInfo.user_admin || that.room.room_user == that.userInfo.user_id) {\n        menu = ['进入主页', '@一下Ta', '送歌给Ta', '撤回消息', '禁止点歌', '禁止发言', '全部解禁'];\n      } else if (user.user_id == that.userInfo.user_id) {\n        //发消息人是自己\n        menu = ['进入主页', '@一下Ta', '送歌给Ta', '撤回消息'];\n      } else {\n        //其他人的消息\n        menu = ['进入主页', '@一下Ta', '送歌给Ta'];\n      }\n\n      uni.showActionSheet({\n        itemList: menu,\n        success: function success(res) {\n          switch (menu[res.tapIndex]) {\n            case '送歌给Ta':\n              uni.navigateTo({\n                url: '../song/search?room_id=' + that.room_id + \"&at=\" + user.user_id + \"&name=\" + user.user_name });\n\n              break;\n            case '@一下Ta':\n              that.doAtUser(user);\n              break;\n            case '全部解禁':\n              that.app.request({\n                url: 'user/removeban',\n                data: {\n                  room_id: that.room_id,\n                  user_id: user.user_id },\n\n                loading: \"解禁中\",\n                success: function success(res) {\n                  uni.showModal({\n                    title: '解禁成功',\n                    content: res.msg,\n                    showCancel: false,\n                    success: function success() {} });\n\n                } });\n\n              break;\n            case '撤回消息':\n              __f__(\"log\", msg, \" at pages/index/index.nvue:1004\");\n              that.app.request({\n                url: \"message/back\",\n                data: {\n                  message_id: msg.message_id,\n                  room_id: that.room_id },\n\n                success: function success() {} });\n\n              break;\n            case '禁止发言':\n              that.app.request({\n                url: 'user/shutdown',\n                data: {\n                  room_id: that.room_id,\n                  user_id: user.user_id },\n\n                loading: \"禁言中\",\n                success: function success(res) {\n                  uni.showModal({\n                    title: '禁言成功',\n                    content: res.msg,\n                    showCancel: false,\n                    success: function success() {} });\n\n                } });\n\n              break;\n            case '禁止点歌':\n              that.app.request({\n                url: 'user/songdown',\n                data: {\n                  room_id: that.room_id,\n                  user_id: user.user_id },\n\n                loading: \"禁歌中\",\n                success: function success(res) {\n                  uni.showModal({\n                    title: '禁歌成功',\n                    content: res.msg,\n                    showCancel: false,\n                    success: function success() {} });\n\n                } });\n\n              break;\n            default:\n              uni.showModal({\n                title: \"BBBUG\",\n                content: menu[res.tapIndex] + \"即将上线\",\n                showCancel: false });}\n\n\n        } });\n\n    },\n    getStaticUrl: function getStaticUrl(url) {\n      if (url.indexOf('https://') > -1 || url.indexOf('http://') > -1) {\n        return url;\n      } else {\n        return 'https://cdn.bbbug.com/uploads/' + url;\n      }\n    },\n    doTouch: function doTouch(user) {\n      var that = this;\n      that.request({\n        url: \"message/touch\",\n        data: {\n          at: user.user_id,\n          room_id: that.room_id },\n\n        success: function success(res) {} });\n\n    },\n    chooseImage: function chooseImage() {\n      var that = this;\n      uni.chooseImage({\n        sizeType: \"compressed\",\n        sourceType: ['album'],\n        count: 1,\n        fail: function fail(res) {\n          __f__(\"log\", res, \" at pages/index/index.nvue:1085\");\n        },\n        success: function success(res) {\n          uni.showLoading({\n            title: '处理中' });\n\n          uni.compressImage({\n            src: res.tempFilePaths[0],\n            quality: 50,\n            success: function success(res) {\n              uni.uploadFile({\n                url: that.app.globalData.request.apiUrl + \"attach/uploadimage\",\n                filePath: res.tempFilePath,\n                name: 'file',\n                formData: that.app.globalData.request.baseData,\n                success: function success(uploadFileRes) {\n                  uni.hideLoading();\n                  var response = {};\n                  try {\n                    response = JSON.parse(uploadFileRes.data);\n                  } catch (err) {\n                    uni.showModal({\n                      showCancel: false,\n                      title: '上传失败',\n                      content: '服务器发生错误',\n                      success: function success() {} });\n\n                  }\n                  if (response.code == 200) {\n                    that.app.request({\n                      url: \"message/send\",\n                      data: {\n                        where: 'channel',\n                        to: that.room_id,\n                        type: 'img',\n                        msg: response.data.attach_thumb,\n                        resource: response.data.attach_path },\n\n                      success: function success(res) {},\n                      error: function error(res) {\n                        that.messageObj.message = message_old;\n                        uni.showModal({\n                          title: '发送失败',\n                          content: res.msg,\n                          showCancel: false });\n\n                      } });\n\n                  } else {\n                    uni.showModal({\n                      showCancel: false,\n                      title: '上传失败',\n                      content: response.msg,\n                      success: function success() {} });\n\n                  }\n                } });\n\n            } });\n\n        } });\n\n    },\n    fullViewImage: function fullViewImage(url) {\n      uni.previewImage({\n        urls: [url],\n        longPressActions: {\n          itemList: ['保存图片', '举报图片'],\n          success: function success(data) {},\n          fail: function fail(err) {} } });\n\n\n    } } };exports.default = _default;\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/vue-cli-plugin-uni/lib/format-log.js */ 9)[\"default\"]))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInVuaS1hcHA6Ly8vcGFnZXMvaW5kZXgvaW5kZXgubnZ1ZSJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBa1hBO0FBQ0EsTUFEQSxrQkFDQTtBQUNBO0FBQ0EsZ0JBREE7QUFFQSx1QkFGQTtBQUdBLDJCQUhBO0FBSUEseUJBSkE7QUFLQSx5QkFMQTtBQU1BLHdCQU5BO0FBT0EsNkJBUEE7QUFRQSxtQkFSQTtBQVNBLG9CQVRBO0FBVUE7QUFDQSxrQkFEQTtBQUVBLGtCQUZBLEVBVkE7O0FBY0EsZ0JBZEE7QUFlQSxpQkFmQTtBQWdCQSxrQkFoQkE7QUFpQkEsc0JBakJBO0FBa0JBLHFCQWxCQTtBQW1CQTtBQUNBLG1CQURBO0FBRUEsaUJBRkE7QUFHQSxvQkFIQSxFQW5CQTs7QUF3QkEseUJBeEJBOztBQTBCQSxHQTVCQTtBQTZCQSxRQTdCQSxvQkE2QkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQURBLG1CQUNBLFFBREEsRUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUpBOztBQU1BO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FQQTtBQVFBO0FBQ0E7QUFDQSxlQURBLG1CQUNBLFFBREEsRUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUpBOztBQU1BLEtBUEE7QUFRQTtBQUNBO0FBQ0EsS0FGQTtBQUdBO0FBQ0E7QUFDQTtBQUNBLHFCQURBOztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBWEE7QUFZQTtBQUNBO0FBQ0E7QUFDQSxLQUhBO0FBSUE7QUFDQTtBQUNBLGtCQURBO0FBRUEsa0JBRkE7O0FBSUEsS0FMQTtBQU1BLEdBbEZBO0FBbUZBLFFBbkZBLG9CQW1GQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBN0ZBO0FBOEZBLDBCQTlGQSxvQ0E4RkEsR0E5RkEsRUE4RkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLCtCQURBOztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FGQSxNQUVBO0FBQ0E7QUFDQSxnQ0FEQTs7QUFHQTtBQUNBO0FBQ0EsY0FmQTs7QUFpQkEsR0FqSEE7QUFrSEE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUpBO0FBS0Esa0JBTEEsNEJBS0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBYkE7QUFjQSxpQkFkQSwyQkFjQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0F0QkE7QUF1QkEsYUF2QkEsdUJBdUJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQS9CQTtBQWdDQSxrQkFoQ0EsNEJBZ0NBO0FBQ0E7QUFDQTtBQUNBLFdBREEsRUFDQSxJQURBOztBQUdBO0FBQ0E7QUFDQSxZQURBLEVBQ0EsSUFEQSxFQUNBLFFBREE7O0FBR0E7QUFDQTtBQUNBLHNCQURBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esb0NBREE7QUFFQTtBQUNBLHVDQURBO0FBRUEsaURBRkEsRUFGQTs7QUFNQSw4QkFOQTtBQU9BO0FBQ0E7QUFDQSxpQ0FEQTtBQUVBLG9DQUZBO0FBR0EscUNBSEE7QUFJQSxrREFKQTs7QUFNQSxpQkFkQTs7QUFnQkE7QUFDQTtBQUNBO0FBQ0EsNkJBREE7QUFFQSx3Q0FGQTtBQUdBLGdDQUhBO0FBSUEsdUNBSkE7QUFLQSxpQ0FMQTtBQU1BO0FBQ0E7QUFDQTtBQUNBLHNDQURBO0FBRUE7QUFDQSw2Q0FEQTtBQUVBLCtDQUZBLEVBRkE7O0FBTUEsb0RBTkE7O0FBUUE7QUFDQSxpQkFqQkE7O0FBbUJBO0FBQ0E7QUFDQTtBQUNBLGdDQURBO0FBRUE7QUFDQSx1Q0FEQTtBQUVBLHlDQUZBLEVBRkE7O0FBTUE7QUFDQTtBQUNBO0FBQ0EsOEJBREE7QUFFQSw4QkFGQTs7QUFJQTtBQUNBO0FBQ0EsZ0NBREE7QUFFQSxvQ0FGQTtBQUdBLHFDQUhBO0FBSUEsa0RBSkE7O0FBTUEsaUJBbkJBOztBQXFCQTtBQUNBO0FBQ0E7QUFDQSxxQ0FEQTtBQUVBO0FBQ0EsdUNBREE7QUFFQSx5Q0FGQSxFQUZBOztBQU1BO0FBQ0E7QUFDQSxpQ0FEQTs7QUFHQSxpQkFWQTs7QUFZQTtBQUNBLG9CQTdFQTs7QUErRUEsU0FwRkE7O0FBc0ZBLEtBaElBO0FBaUlBLFlBaklBLG9CQWlJQSxJQWpJQSxFQWlJQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0F0SUE7QUF1SUEsY0F2SUEsd0JBdUlBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BRkE7QUFHQSxLQTlJQTtBQStJQSxrQkEvSUEsNEJBK0lBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBckpBO0FBc0pBLHFCQXRKQSw2QkFzSkEsR0F0SkEsRUFzSkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsNkRBREE7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGdEQURBLEVBQ0EsTUFEQTtBQUVBO0FBQ0E7QUFDQSw2REFEQTs7QUFHQTtBQUNBLFdBUkEsTUFRQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGdCQURBOztBQUdBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsZUFEQTs7QUFHQTtBQUNBO0FBQ0E7QUFDQSxlQURBOztBQUdBO0FBQ0E7QUFDQTtBQUNBLGVBREE7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDJCQURBOztBQUdBLFdBSkEsTUFJQTtBQUNBO0FBQ0EsZUFEQSxFQUNBLEVBREEsRUFDQTtBQUNBLDJCQURBLEVBREE7O0FBSUE7QUFDQTtBQUNBLGdCQXBGQTs7QUFzRkEsS0E5T0E7QUErT0EsYUEvT0EscUJBK09BLEdBL09BLEVBK09BO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQTFQQTtBQTJQQSxhQTNQQSxxQkEyUEEsS0EzUEEsRUEyUEE7QUFDQTtBQUNBO0FBQ0E7QUFDQSwyQkFEQTtBQUVBO0FBQ0EsMEJBREE7QUFFQSwwQkFGQTtBQUdBLHFCQUhBO0FBSUEsa0JBSkE7QUFLQSx1QkFMQSxFQUZBOztBQVNBLGVBVEEsbUJBU0EsR0FUQSxFQVNBO0FBQ0E7QUFDQSxTQVhBOztBQWFBLEtBM1FBO0FBNFFBLGlCQTVRQSx5QkE0UUEsQ0E1UUEsRUE0UUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFlBREE7QUFFQTtBQUNBO0FBQ0EsNkJBREE7QUFFQTtBQUNBLHdCQURBO0FBRUEsNEJBRkE7QUFHQSw0QkFIQTtBQUlBLDRDQUpBO0FBS0Esa0NBTEEsRUFGQTs7QUFTQTtBQUNBO0FBQ0EsV0FYQTtBQVlBO0FBQ0E7QUFDQTtBQUNBLDJCQURBO0FBRUEsOEJBRkE7QUFHQSwrQkFIQTs7QUFLQSxXQW5CQTs7QUFxQkE7QUFDQSxLQTVTQTtBQTZTQSxnQkE3U0Esd0JBNlNBLEdBN1NBLEVBNlNBO0FBQ0E7QUFDQSxzRUFGQSxDQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0F0VEE7QUF1VEEsb0JBdlRBLDRCQXVUQSxHQXZUQSxFQXVUQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxLQS9UQTtBQWdVQSxhQWhVQSxxQkFnVUEsR0FoVUEsRUFnVUE7QUFDQTtBQUNBLEtBbFVBO0FBbVVBLG9CQW5VQSw4QkFtVUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUZBLEVBRUEsSUFGQTtBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxQ0FEQTtBQUVBO0FBQ0EsK0JBREE7QUFFQSx1QkFGQSxFQUZBOztBQU1BO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBRkEsQ0FFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0ExQkE7O0FBNEJBO0FBQ0E7QUFDQSxTQTlCQTs7O0FBaUNBLEtBblhBO0FBb1hBLGVBcFhBLHlCQW9YQTtBQUNBO0FBQ0E7QUFDQSx3QkFEQTs7QUFHQTtBQUNBLCtCQURBO0FBRUE7QUFDQSwrQkFEQTtBQUVBLHNDQUZBLEVBRkE7O0FBTUEsZUFOQSxtQkFNQSxHQU5BLEVBTUE7QUFDQTtBQUNBO0FBQ0Esc0NBREE7O0FBR0E7QUFDQSx1Q0FEQTtBQUVBO0FBQ0EsbUNBREEsRUFGQTs7QUFLQTtBQUNBO0FBQ0EsOEJBREEsR0FDQSxXQURBO0FBRUEsOEJBRkEsR0FFQSxVQUZBLEdBRUEsZUFGQTtBQUdBO0FBQ0EsYUFWQTs7QUFZQTtBQUNBO0FBQ0EsYUFkQTs7QUFnQkEsU0EzQkE7QUE0QkEsYUE1QkEsaUJBNEJBLEdBNUJBLEVBNEJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMEJBREE7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQ0FEQTtBQUVBLDZCQUZBO0FBR0EsZ0NBSEE7QUFJQSw4Q0FKQTs7QUFNQTtBQUNBLFdBZEEsTUFjQTtBQUNBO0FBQ0EsK0JBREE7QUFFQSwyQkFGQTtBQUdBLDhCQUhBO0FBSUE7QUFDQTtBQUNBLGVBTkE7O0FBUUE7QUFDQSxTQXREQTs7QUF3REEsS0FqYkE7QUFrYkEsb0JBbGJBLDRCQWtiQSxHQWxiQSxFQWtiQTtBQUNBO0FBQ0E7QUFDQSxzQkFEQTtBQUVBLG9CQUZBO0FBR0EsY0FIQTtBQUlBLG9CQUpBOztBQU1BO0FBQ0EsS0EzYkE7QUE0YkEsY0E1YkEsc0JBNGJBLElBNWJBLEVBNGJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx5REFEQTs7QUFHQTtBQUNBO0FBQ0E7QUFDQSxxREFEQTs7QUFHQTtBQUNBO0FBQ0E7QUFDQSx1REFEQTs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFGQURBOztBQUdBO0FBQ0EsZ0JBekJBOztBQTJCQSxLQXpkQTtBQTBkQSxvQkExZEEsNEJBMGRBLEdBMWRBLEVBMGRBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BRkEsTUFFQTtBQUNBO0FBQ0E7QUFDQSxPQUhBLE1BR0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxzQkFEQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUhBREE7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscUNBREE7QUFFQTtBQUNBLHVDQURBO0FBRUEsdUNBRkEsRUFGQTs7QUFNQSw4QkFOQTtBQU9BO0FBQ0E7QUFDQSxpQ0FEQTtBQUVBLG9DQUZBO0FBR0EscUNBSEE7QUFJQSxrREFKQTs7QUFNQSxpQkFkQTs7QUFnQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxtQ0FEQTtBQUVBO0FBQ0EsNENBREE7QUFFQSx1Q0FGQSxFQUZBOztBQU1BLHVCQU5BLHFCQU1BLEVBTkE7O0FBUUE7QUFDQTtBQUNBO0FBQ0Esb0NBREE7QUFFQTtBQUNBLHVDQURBO0FBRUEsdUNBRkEsRUFGQTs7QUFNQSw4QkFOQTtBQU9BO0FBQ0E7QUFDQSxpQ0FEQTtBQUVBLG9DQUZBO0FBR0EscUNBSEE7QUFJQSxrREFKQTs7QUFNQSxpQkFkQTs7QUFnQkE7QUFDQTtBQUNBO0FBQ0Esb0NBREE7QUFFQTtBQUNBLHVDQURBO0FBRUEsdUNBRkEsRUFGQTs7QUFNQSw4QkFOQTtBQU9BO0FBQ0E7QUFDQSxpQ0FEQTtBQUVBLG9DQUZBO0FBR0EscUNBSEE7QUFJQSxrREFKQTs7QUFNQSxpQkFkQTs7QUFnQkE7QUFDQTtBQUNBO0FBQ0EsOEJBREE7QUFFQSxvREFGQTtBQUdBLGlDQUhBLElBM0VBOzs7QUFpRkEsU0FwRkE7O0FBc0ZBLEtBOWpCQTtBQStqQkEsZ0JBL2pCQSx3QkErakJBLEdBL2pCQSxFQStqQkE7QUFDQTtBQUNBO0FBQ0EsT0FGQSxNQUVBO0FBQ0E7QUFDQTtBQUNBLEtBcmtCQTtBQXNrQkEsV0F0a0JBLG1CQXNrQkEsSUF0a0JBLEVBc2tCQTtBQUNBO0FBQ0E7QUFDQSw0QkFEQTtBQUVBO0FBQ0EsMEJBREE7QUFFQSwrQkFGQSxFQUZBOztBQU1BLGVBTkEsbUJBTUEsR0FOQSxFQU1BLEVBTkE7O0FBUUEsS0FobEJBO0FBaWxCQSxlQWpsQkEseUJBaWxCQTtBQUNBO0FBQ0E7QUFDQSw4QkFEQTtBQUVBLDZCQUZBO0FBR0EsZ0JBSEE7QUFJQTtBQUNBO0FBQ0EsU0FOQTtBQU9BO0FBQ0E7QUFDQSx3QkFEQTs7QUFHQTtBQUNBLHFDQURBO0FBRUEsdUJBRkE7QUFHQTtBQUNBO0FBQ0EsOEVBREE7QUFFQSwwQ0FGQTtBQUdBLDRCQUhBO0FBSUEsOERBSkE7QUFLQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsbUJBRkEsQ0FFQTtBQUNBO0FBQ0EsdUNBREE7QUFFQSxtQ0FGQTtBQUdBLHdDQUhBO0FBSUEsb0RBSkE7O0FBTUE7QUFDQTtBQUNBO0FBQ0EseUNBREE7QUFFQTtBQUNBLHdDQURBO0FBRUEsd0NBRkE7QUFHQSxtQ0FIQTtBQUlBLHVEQUpBO0FBS0EsMkRBTEEsRUFGQTs7QUFTQSx1REFUQTtBQVVBO0FBQ0E7QUFDQTtBQUNBLHVDQURBO0FBRUEsMENBRkE7QUFHQSwyQ0FIQTs7QUFLQSx1QkFqQkE7O0FBbUJBLG1CQXBCQSxNQW9CQTtBQUNBO0FBQ0EsdUNBREE7QUFFQSxtQ0FGQTtBQUdBLDJDQUhBO0FBSUEsb0RBSkE7O0FBTUE7QUFDQSxpQkE5Q0E7O0FBZ0RBLGFBcERBOztBQXNEQSxTQWpFQTs7QUFtRUEsS0F0cEJBO0FBdXBCQSxpQkF2cEJBLHlCQXVwQkEsR0F2cEJBLEVBdXBCQTtBQUNBO0FBQ0EsbUJBREE7QUFFQTtBQUNBLG9DQURBO0FBRUEsNENBRkE7QUFHQSxxQ0FIQSxFQUZBOzs7QUFRQSxLQWhxQkEsRUFsSEEsRSIsImZpbGUiOiI4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiPHN0eWxlPlxyXG5cdC51bmlhcHB7XHJcblx0XHRwb3NpdGlvbjogZml4ZWQ7XHJcblx0XHRsZWZ0OiAwO1xyXG5cdFx0cmlnaHQ6IDA7XHJcblx0XHR0b3A6IDA7XHJcblx0XHRib3R0b206IDA7XHJcblx0fVxyXG5cdC5jaGF0SW5wdXQge1xyXG5cdFx0cG9zaXRpb246IGZpeGVkO1xyXG5cdFx0bGVmdDogMDtcclxuXHRcdGJvdHRvbTogMDtcclxuXHRcdHJpZ2h0OiAwO1xyXG5cdFx0aGVpZ2h0OiA1MHB4O1xyXG5cdFx0YmFja2dyb3VuZC1jb2xvcjogI0ZGRkZGRjtcclxuXHRcdGZvbnQtc2l6ZTogMTZweDtcclxuXHRcdHBhZGRpbmc6IDVweCAxMHB4OyBcclxuXHRcdHBhZGRpbmctbGVmdDogNTBweDtcclxuXHR9XHJcblxyXG5cdC5oaXN0b3J5TGlzdCB7XHJcblx0XHRwb3NpdGlvbjogZml4ZWQ7XHJcblx0XHRsZWZ0OiAwO1xyXG5cdFx0cmlnaHQ6IDA7XHJcblx0XHRib3R0b206IDA7XHJcblx0XHR0b3A6IDA7XHJcblx0XHRiYWNrZ3JvdW5kLWNvbG9yOiAjRjVGNUY1O1xyXG5cdH1cclxuXHQuaXRlbV9zeXN0ZW17XHJcblx0XHR0ZXh0LWFsaWduOiBjZW50ZXI7XHJcblx0XHRtYXJnaW4tdG9wOiAyMHB4O1xyXG5cdFx0bWFyZ2luLWxlZnQ6IDIwcHg7XHJcblx0XHRtYXJnaW4tcmlnaHQ6IDIwcHg7XHJcblx0fVxyXG5cdC5pdGVtX3N5c3RlbV90ZXh0e1xyXG5cdFx0Zm9udC1zaXplOiAxMnB4O1xyXG5cdFx0Y29sb3I6ICNhYWE7XHJcblx0XHR0ZXh0LWFsaWduOiBjZW50ZXI7XHJcblx0fVxyXG5cdC5pdGVte1xyXG5cdFx0ZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuXHRcdG1hcmdpbjogMTBweDtcclxuXHRcdG1hcmdpbi10b3A6IDIwcHg7XHJcblx0XHRqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XHJcblx0XHRhbGlnbi1pdGVtczogZmxleC1zdGFydDtcclxuXHR9XHJcblx0Lml0ZW1fbWluZXtcclxuXHRcdGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcblx0XHRtYXJnaW46IDEwcHg7XHJcblx0XHRtYXJnaW4tdG9wOiAyMHB4O1xyXG5cdFx0dGV4dC1hbGlnbjogcmlnaHQ7XHJcblx0XHRqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xyXG5cdFx0YWxpZ24taXRlbXM6IGZsZXgtZW5kO1xyXG5cdH1cclxuXHQudXNlcl9oZWFkX2JveHtcclxuXHRcdGZsZXgtZGlyZWN0aW9uOiByb3c7XHJcblx0fVxyXG5cdC51c2VyX2hlYWRfaW1hZ2V7XHJcblx0XHR3aWR0aDogNTBweDtcclxuXHRcdGhlaWdodDogNTBweDtcclxuXHRcdGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcblx0XHRib3JkZXItY29sb3I6ICNGRkZGRkY7XHJcblx0XHRib3JkZXItc3R5bGU6IHNvbGlkO1xyXG5cdFx0Ym9yZGVyLXdpZHRoOiAxcHg7XHJcblx0fVxyXG5cdC5jaGF0X2l0ZW1fYm9keV9sZWZ0e1xyXG5cdFx0dGV4dC1hbGlnbjogbGVmdDtcclxuXHRcdGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcclxuXHRcdHBhZGRpbmctbGVmdDogNjBweDtcclxuXHRcdHBhZGRpbmctcmlnaHQ6IDgwcHg7XHJcblx0XHRtYXJnaW4tdG9wOiAtMzBweDtcclxuXHRcdGZsZXg6IDE7XHJcblx0XHRmbGV4LXdyYXA6IHdyYXA7XHJcblx0fVxyXG5cdC5jaGF0X2l0ZW1fYm9keV9yaWdodHtcclxuXHRcdHRleHQtYWxpZ246IHJpZ2h0O1xyXG5cdFx0cGFkZGluZy1sZWZ0OiA4MHB4O1xyXG5cdFx0cGFkZGluZy1yaWdodDogNjBweDtcclxuXHRcdG1hcmdpbi10b3A6IC0zMHB4O1xyXG5cdFx0ZmxleDogMTtcclxuXHRcdGZsZXgtd3JhcDogd3JhcC1yZXZlcnNlO1xyXG5cdH1cclxuXHQuY2hhdF9pdGVtX3VzZXJfbmFtZXtcclxuXHRcdGZvbnQtc2l6ZTogMTRweDtcclxuXHRcdGNvbG9yOiAjOTk5O1xyXG5cdFx0bWFyZ2luLXRvcDogM3B4O1xyXG5cdFx0bWFyZ2luLWxlZnQ6IDEwcHg7XHJcblx0XHRtYXJnaW4tcmlnaHQ6IDEwcHg7XHJcblx0fVxyXG5cdC5jaGF0X2l0ZW1fdGV4dHtcclxuXHRcdG1hcmdpbi10b3A6IDEwcHg7XHJcblx0XHRib3JkZXItcmFkaXVzOiAxMHB4O1xyXG5cdFx0YmFja2dyb3VuZC1jb2xvcjogI0ZGRkZGRjtcclxuXHRcdGNvbG9yOiAjMzMzO1xyXG5cdFx0cGFkZGluZzogMTBweDtcclxuXHRcdGZvbnQtc2l6ZTogMTZweDtcclxuXHR9XHJcblx0LmNoYXRfaXRlbV9pbWFnZV9ib3h7XHJcblx0XHRtYXJnaW4tdG9wOiAxMHB4O1xyXG5cdFx0Ym9yZGVyLXJhZGl1czogMTBweDtcclxuXHRcdHBhZGRpbmc6IDJweDtcclxuXHRcdGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xyXG5cdH1cclxuXHQuY2hhdF9pdGVtX2ltYWdlX2NvbnRlbnR7XHJcblx0XHR3aWR0aDogMTAwJTtcclxuXHRcdGhlaWdodDogMTAwJTtcclxuXHR9XHJcblx0LnBsYXllcntcclxuXHRcdHBvc2l0aW9uOiBmaXhlZDtcclxuXHRcdHJpZ2h0OiAxMHB4O1xyXG5cdFx0dG9wOiAxMHB4O1xyXG5cdFx0ei1pbmRleDoxMDA7XHJcblx0XHRmbGV4LWRpcmVjdGlvbjogcm93O1xyXG5cdFx0YmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLDAsMCwwLjYpO1xyXG5cdFx0Ym9yZGVyLXJhZGl1czogMTBweDtcclxuXHRcdHBhZGRpbmc6IDVweDtcclxuXHR9XHJcblx0LnBsYXllcl9pbWFnZXtcclxuXHRcdHdpZHRoOiA0MHB4O1xyXG5cdFx0aGVpZ2h0OiA0MHB4O1xyXG5cdFx0Ym9yZGVyLXJhZGl1czogMTBweDtcclxuXHR9XHJcblx0LnBsYXllcl9pbmZve1xyXG5cdFx0cGFkZGluZzo1cHg7XHJcblx0XHRwYWRkaW5nLXJpZ2h0OiAxMHB4O1xyXG5cdH1cclxuXHQucGxheWVyX3Nvbmd7XHJcblx0XHRmb250LXNpemU6IDE0cHg7XHJcblx0XHRjb2xvcjojRkZGRkZGO1xyXG5cdH1cclxuXHQucGxheWVyX3VzZXJ7XHJcblx0XHRmb250LXNpemU6IDEycHg7XHJcblx0XHRjb2xvcjojY2NjO1xyXG5cdFx0bWFyZ2luLXRvcDogNXB4O1xyXG5cdH1cclxuXHQuY2hhdE1lbnV7XHJcblx0fVxyXG5cdC5jaGF0TWVudV9pbWFnZXtcclxuXHRcdHBvc2l0aW9uOiBmaXhlZDtcclxuXHRcdHJpZ2h0OiAxMHB4O1xyXG5cdFx0Ym90dG9tOiAxMHB4O1xyXG5cdFx0d2lkdGg6IDM2cHg7XHJcblx0XHRoZWlnaHQ6IDM2cHg7XHJcblx0fVxyXG5cdC5jaGF0TWVudV9lbW9qaXtcclxuXHRcdHBvc2l0aW9uOiBmaXhlZDtcclxuXHRcdGxlZnQ6IDEwcHg7XHJcblx0XHRib3R0b206IDEwcHg7XHJcblx0XHR3aWR0aDogMzJweDtcclxuXHRcdGhlaWdodDogMzJweDtcclxuXHR9XHJcblx0Lm1lbnVCb2R5e1xyXG5cdFx0ZmxleC1kaXJlY3Rpb246IHJvdztcclxuXHR9XHJcblx0Lm1lbnVCb3gge1xyXG5cdFx0ei1pbmRleDogMTA7XHJcblx0XHRwb3NpdGlvbjogZml4ZWQ7XHJcblx0XHRsZWZ0OiAxMHB4O1xyXG5cdFx0Ym90dG9tOiAwO1xyXG5cdFx0cmlnaHQ6IDEwcHg7XHJcblx0XHRiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsMCwwLDAuNik7XHJcblx0XHRib3JkZXItcmFkaXVzOiAxMHB4O1xyXG5cdFx0ZmxleC1kaXJlY3Rpb246IHJvdztcclxuXHRcdHBhZGRpbmc6IDEwcHg7XHJcblx0fVxyXG5cdC5tZW51TWFpbntcclxuXHRcdHRleHQtYWxpZ246IGNlbnRlcjtcclxuXHRcdGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG5cdFx0YWxpZ24taXRlbXM6IGNlbnRlcjtcclxuXHRcdGJhY2tncm91bmQtY29sb3I6ICNmZmY7XHJcblx0XHRjb2xvcjogIzY2NjtcclxuXHRcdHBhZGRpbmc6IDEwcHg7XHJcblx0XHRoZWlnaHQ6IDYwcHg7XHJcblx0XHR3aWR0aDogNjBweDtcclxuXHRcdGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcblx0fVxyXG5cdC5tZW51SXRlbXtcclxuXHRcdG1hcmdpbjogNXB4O1xyXG5cdFx0dGV4dC1hbGlnbjogY2VudGVyO1xyXG5cdFx0anVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcblx0XHRhbGlnbi1pdGVtczogY2VudGVyO1xyXG5cdH1cclxuXHQubWVudVRpdGxlIHtcclxuXHRcdHRleHQtYWxpZ246IGNlbnRlcjtcclxuXHRcdGZvbnQtc2l6ZTogMTJweDtcclxuXHRcdHBhZGRpbmc6IDEwcHg7XHJcblx0XHRjb2xvcjogI0ZGRkZGRjtcclxuXHR9XHJcblx0Lm1lbnVJbWFnZXtcclxuXHRcdHdpZHRoOiAyNHB4O1xyXG5cdFx0aGVpZ2h0OiAyNHB4O1xyXG5cdH1cclxuXHQuZW1vaml7XHJcblx0XHRwb3NpdGlvbjogZml4ZWQ7XHJcblx0XHRsZWZ0OiAxMHB4O1xyXG5cdFx0cmlnaHQ6IDEwcHg7XHJcblx0XHRib3R0b206IDA7XHJcblx0XHRiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsMCwwLDAuNik7XHJcblx0XHRmbGV4LWRpcmVjdGlvbjogcm93O1xyXG5cdFx0Ym9yZGVyLXJhZGl1czogMTBweDtcclxuXHRcdHBhZGRpbmc6IDEwcHggMHB4O1xyXG5cdFx0ei1pbmRleDoxMDA7XHJcblx0XHRmbGV4LXdyYXA6d3JhcDtcclxuXHRcdGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG5cdFx0YWxpZ24taXRlbXM6IGNlbnRlcjtcclxuXHR9XHJcblx0LmVtb2ppX2l0ZW17XHJcblx0XHR3aWR0aDogNDBweDtcclxuXHRcdGhlaWdodDogNDBweDtcclxuXHRcdG1hcmdpbjogMTBweDtcclxuXHR9XHJcbjwvc3R5bGU+XHJcbjx0ZW1wbGF0ZT5cclxuXHQ8dmlldyBjbGFzcz1cInVuaWFwcFwiPlxyXG5cdFx0PGJsb2NrIHYtaWY9XCJzaG93Um9vbVBhZ2VcIj5cclxuXHRcdFx0PHNjcm9sbC12aWV3IEBjbGljaz1cImhpc3RvcnlDbGlja2VkXCIgY2xhc3M9XCJoaXN0b3J5TGlzdFwiIGlkPVwiaGlzdG9yeUxpc3RcIiBzY3JvbGwteT1cInRydWVcIiA6c2Nyb2xsLXdpdGgtYW5pbWF0aW9uPVwidHJ1ZVwiXHJcblx0XHRcdCA6c2Nyb2xsLWludG8tdmlldz1cInZpZXdJZFwiIDpzdHlsZT1cIntwYWRkaW5nQm90dG9tOihzYWZlQXJlYUJvdHRvbSs3MCkrJ3B4J31cIj5cclxuXHRcdFx0XHQ8dmlldyBpZD1cImhpc3RvcnlCb3hcIj5cclxuXHRcdFx0XHRcdDx2aWV3IHYtZm9yPVwiKGl0ZW0saW5kZXgpIGluIGhpc3RvcnlMaXN0XCI+XHJcblx0XHRcdFx0XHRcdDx2aWV3IGNsYXNzPVwiaXRlbVwiIDppZD1cIidzaGFfJytpdGVtLnNoYVwiIHYtaWY9XCJpdGVtLnR5cGU9PSd0ZXh0JyAmJiBpdGVtLnVzZXIudXNlcl9pZCE9dXNlckluZm8udXNlcl9pZFwiPlxyXG5cdFx0XHRcdFx0XHRcdDx2aWV3IGNsYXNzPVwidXNlcl9oZWFkX2JveFwiIEBjbGljaz1cImRvVXNlckhlYWRFdmVudChpdGVtKVwiPlxyXG5cdFx0XHRcdFx0XHRcdFx0PGltYWdlIGNsYXNzPVwidXNlcl9oZWFkX2ltYWdlXCIgOnNyYz1cIml0ZW0udXNlci51c2VyX2hlYWRcIj48L2ltYWdlPlxyXG5cdFx0XHRcdFx0XHRcdFx0PHRleHQgY2xhc3M9XCJjaGF0X2l0ZW1fdXNlcl9uYW1lXCI+e3tpdGVtLnVzZXIudXNlcl9uYW1lfX08L3RleHQ+XHJcblx0XHRcdFx0XHRcdFx0PC92aWV3PlxyXG5cdFx0XHRcdFx0XHRcdDx2aWV3IGNsYXNzPVwiY2hhdF9pdGVtX2JvZHlfbGVmdFwiPlxyXG5cdFx0XHRcdFx0XHRcdFx0PHZpZXcgdi1pZj1cIiFpdGVtLmF0XCIgY2xhc3M9XCJjaGF0X2l0ZW1fdGV4dF9ib3hcIj5cclxuXHRcdFx0XHRcdFx0XHRcdFx0PHRleHQgY2xhc3M9XCJjaGF0X2l0ZW1fdGV4dFwiIHYtaWY9XCJpdGVtLnVzZXIudXNlcl9pZD09dXNlckluZm8udXNlcl9pZCAmJiB1c2VySW5mby51c2VyX3NleD09MVwiIHN0eWxlPVwiYmFja2dyb3VuZC1jb2xvcjogIzY2Q0JGRjtjb2xvcjojMzMzO1wiPnt7dXJsZGVjb2RlKGl0ZW0uY29udGVudCl9fTwvdGV4dD5cclxuXHRcdFx0XHRcdFx0XHRcdFx0PHRleHQgY2xhc3M9XCJjaGF0X2l0ZW1fdGV4dFwiIHYtaWY9XCJpdGVtLnVzZXIudXNlcl9pZD09dXNlckluZm8udXNlcl9pZCAmJiB1c2VySW5mby51c2VyX3NleD09MFwiIHN0eWxlPVwiYmFja2dyb3VuZC1jb2xvcjogI0ZFOTg5ODtjb2xvcjp3aGl0ZTtcIj57e3VybGRlY29kZShpdGVtLmNvbnRlbnQpfX08L3RleHQ+XHJcblx0XHRcdFx0XHRcdFx0XHRcdDx0ZXh0IGNsYXNzPVwiY2hhdF9pdGVtX3RleHRcIiB2LWlmPVwiaXRlbS51c2VyLnVzZXJfaWQhPXVzZXJJbmZvLnVzZXJfaWRcIj57e3VybGRlY29kZShpdGVtLmNvbnRlbnQpfX08L3RleHQ+XHJcblx0XHRcdFx0XHRcdFx0XHQ8L3ZpZXc+XHJcblx0XHRcdFx0XHRcdFx0XHQ8dmlldyB2LWlmPVwiaXRlbS5hdFwiIGNsYXNzPVwiY2hhdF9pdGVtX3RleHRfYm94XCI+XHJcblx0XHRcdFx0XHRcdFx0XHRcdDx0ZXh0IGNsYXNzPVwiY2hhdF9pdGVtX3RleHRcIiB2LWlmPVwiaXRlbS5hdC51c2VyX2lkPT11c2VySW5mby51c2VyX2lkXCIgc3R5bGU9XCJiYWNrZ3JvdW5kLWNvbG9yOiAjNjY2O2NvbG9yOndoaXRlO1wiPnt7dXJsZGVjb2RlKGl0ZW0uY29udGVudCl9fTwvdGV4dD5cclxuXHRcdFx0XHRcdFx0XHRcdFx0PHRleHQgY2xhc3M9XCJjaGF0X2l0ZW1fdGV4dFwiIHYtaWY9XCJpdGVtLmF0LnVzZXJfaWQhPXVzZXJJbmZvLnVzZXJfaWQmJml0ZW0udXNlci51c2VyX2lkIT11c2VySW5mby51c2VyX2lkXCI+e3t1cmxkZWNvZGUoaXRlbS5jb250ZW50KX19PC90ZXh0PlxyXG5cdFx0XHRcdFx0XHRcdFx0PC92aWV3PlxyXG5cdFx0XHRcdFx0XHRcdDwvdmlldz5cclxuXHRcdFx0XHRcdFx0PC92aWV3PlxyXG5cdFx0XHRcdFx0XHQ8dmlldyBjbGFzcz1cIml0ZW1fbWluZVwiIDppZD1cIidzaGFfJytpdGVtLnNoYVwiIHYtaWY9XCJpdGVtLnR5cGU9PSd0ZXh0JyAmJiBpdGVtLnVzZXIudXNlcl9pZD09dXNlckluZm8udXNlcl9pZFwiPlxyXG5cdFx0XHRcdFx0XHRcdDx2aWV3IGNsYXNzPVwidXNlcl9oZWFkX2JveFwiIEBjbGljaz1cImRvVXNlckhlYWRFdmVudChpdGVtKVwiPlxyXG5cdFx0XHRcdFx0XHRcdFx0PHRleHQgY2xhc3M9XCJjaGF0X2l0ZW1fdXNlcl9uYW1lXCI+e3tpdGVtLnVzZXIudXNlcl9uYW1lfX08L3RleHQ+XHJcblx0XHRcdFx0XHRcdFx0XHQ8aW1hZ2UgY2xhc3M9XCJ1c2VyX2hlYWRfaW1hZ2VcIiA6c3JjPVwiaXRlbS51c2VyLnVzZXJfaGVhZFwiPjwvaW1hZ2U+XHJcblx0XHRcdFx0XHRcdFx0PC92aWV3PlxyXG5cdFx0XHRcdFx0XHRcdDx2aWV3IGNsYXNzPVwiY2hhdF9pdGVtX2JvZHlfcmlnaHRcIj5cclxuXHRcdFx0XHRcdFx0XHRcdDx2aWV3IHYtaWY9XCIhaXRlbS5hdFwiIGNsYXNzPVwiY2hhdF9pdGVtX3RleHRfYm94XCI+XHJcblx0XHRcdFx0XHRcdFx0XHRcdDx0ZXh0IGNsYXNzPVwiY2hhdF9pdGVtX3RleHRcIiB2LWlmPVwiaXRlbS51c2VyLnVzZXJfaWQ9PXVzZXJJbmZvLnVzZXJfaWQgJiYgdXNlckluZm8udXNlcl9zZXg9PTFcIiBzdHlsZT1cImJhY2tncm91bmQtY29sb3I6ICM2NkNCRkY7Y29sb3I6YmxhY2s7XCI+e3t1cmxkZWNvZGUoaXRlbS5jb250ZW50KX19PC90ZXh0PlxyXG5cdFx0XHRcdFx0XHRcdFx0XHQ8dGV4dCBjbGFzcz1cImNoYXRfaXRlbV90ZXh0XCIgdi1pZj1cIml0ZW0udXNlci51c2VyX2lkPT11c2VySW5mby51c2VyX2lkICYmIHVzZXJJbmZvLnVzZXJfc2V4IT0xXCIgc3R5bGU9XCJiYWNrZ3JvdW5kLWNvbG9yOiAjRkU5ODk4O2NvbG9yOndoaXRlO1wiPnt7dXJsZGVjb2RlKGl0ZW0uY29udGVudCl9fTwvdGV4dD5cclxuXHRcdFx0XHRcdFx0XHRcdDwvdmlldz5cclxuXHRcdFx0XHRcdFx0XHRcdDx2aWV3IHYtaWY9XCJpdGVtLmF0XCIgY2xhc3M9XCJjaGF0X2l0ZW1fdGV4dF9ib3hcIj5cclxuXHRcdFx0XHRcdFx0XHRcdFx0PHRleHQgY2xhc3M9XCJjaGF0X2l0ZW1fdGV4dFwiIHYtaWY9XCJpdGVtLmF0LnVzZXJfaWQ9PXVzZXJJbmZvLnVzZXJfaWRcIiBzdHlsZT1cImJhY2tncm91bmQtY29sb3I6ICM2NjY7Y29sb3I6d2hpdGU7XCI+e3t1cmxkZWNvZGUoaXRlbS5jb250ZW50KX19PC90ZXh0PlxyXG5cdFx0XHRcdFx0XHRcdFx0XHQ8dGV4dCBjbGFzcz1cImNoYXRfaXRlbV90ZXh0XCIgdi1pZj1cIml0ZW0uYXQudXNlcl9pZCE9dXNlckluZm8udXNlcl9pZCYmaXRlbS51c2VyLnVzZXJfaWQ9PXVzZXJJbmZvLnVzZXJfaWQgJiYgdXNlckluZm8udXNlcl9zZXg9PTFcIlxyXG5cdFx0XHRcdFx0XHRcdFx0XHQgc3R5bGU9XCJiYWNrZ3JvdW5kLWNvbG9yOiAjNjZDQkZGO2NvbG9yOmJsYWNrO1wiPnt7dXJsZGVjb2RlKGl0ZW0uY29udGVudCl9fTwvdGV4dD5cclxuXHRcdFx0XHRcdFx0XHRcdFx0PHRleHQgY2xhc3M9XCJjaGF0X2l0ZW1fdGV4dFwiIHYtaWY9XCJpdGVtLmF0LnVzZXJfaWQhPXVzZXJJbmZvLnVzZXJfaWQmJml0ZW0udXNlci51c2VyX2lkPT11c2VySW5mby51c2VyX2lkICYmIHVzZXJJbmZvLnVzZXJfc2V4IT0xXCJcclxuXHRcdFx0XHRcdFx0XHRcdFx0IHN0eWxlPVwiYmFja2dyb3VuZC1jb2xvcjogI0ZFOTg5ODtjb2xvcjp3aGl0ZTtcIj57e3VybGRlY29kZShpdGVtLmNvbnRlbnQpfX08L3RleHQ+XHJcblx0XHRcdFx0XHRcdFx0XHQ8L3ZpZXc+XHJcblx0XHRcdFx0XHRcdFx0PC92aWV3PlxyXG5cdFx0XHRcdFx0XHQ8L3ZpZXc+XHJcblx0XHRcdFx0XHRcdDx2aWV3IGNsYXNzPVwiaXRlbV9taW5lXCIgdi1pZj1cIml0ZW0udHlwZT09J2ltZycgJiYgaXRlbS51c2VyLnVzZXJfaWQ9PXVzZXJJbmZvLnVzZXJfaWRcIiA6aWQ9XCInc2hhXycraXRlbS5zaGFcIj5cclxuXHRcdFx0XHRcdFx0XHQ8dmlldyBjbGFzcz1cInVzZXJfaGVhZF9ib3hcIiBAY2xpY2s9XCJkb1VzZXJIZWFkRXZlbnQoaXRlbSlcIj5cclxuXHRcdFx0XHRcdFx0XHRcdDx0ZXh0IGNsYXNzPVwiY2hhdF9pdGVtX3VzZXJfbmFtZVwiPnt7aXRlbS51c2VyLnVzZXJfbmFtZX19PC90ZXh0PlxyXG5cdFx0XHRcdFx0XHRcdFx0PGltYWdlIGNsYXNzPVwidXNlcl9oZWFkX2ltYWdlXCIgOnNyYz1cIml0ZW0udXNlci51c2VyX2hlYWRcIj48L2ltYWdlPlxyXG5cdFx0XHRcdFx0XHRcdDwvdmlldz5cclxuXHRcdFx0XHRcdFx0XHQ8dmlldyBjbGFzcz1cImNoYXRfaXRlbV9ib2R5X3JpZ2h0XCI+XHJcblx0XHRcdFx0XHRcdFx0XHQ8dmlldyBjbGFzcz1cImNoYXRfaXRlbV9pbWFnZV9ib3hcIj5cclxuXHRcdFx0XHRcdFx0XHRcdFx0PGltYWdlIGNsYXNzPVwiY2hhdF9pdGVtX2ltYWdlX2NvbnRlbnRcIiA6c3JjPVwiZ2V0U3RhdGljVXJsKHVybGRlY29kZShpdGVtLmNvbnRlbnQpKVwiIG1vZGU9XCJ3aWR0aEZpeFwiIEBjbGljaz1cImZ1bGxWaWV3SW1hZ2UoZ2V0U3RhdGljVXJsKHVybGRlY29kZShpdGVtLnJlc291cmNlKSkpXCI+PC9pbWFnZT5cclxuXHRcdFx0XHRcdFx0XHRcdDwvdmlldz5cclxuXHRcdFx0XHRcdFx0XHQ8L3ZpZXc+XHJcblx0XHRcdFx0XHRcdDwvdmlldz5cclxuXHRcdFx0XHRcdFx0PHZpZXcgY2xhc3M9XCJpdGVtXCIgdi1pZj1cIml0ZW0udHlwZT09J2ltZycgJiYgaXRlbS51c2VyLnVzZXJfaWQhPXVzZXJJbmZvLnVzZXJfaWRcIiA6aWQ9XCInc2hhXycraXRlbS5zaGFcIj5cclxuXHRcdFx0XHRcdFx0XHQ8dmlldyBjbGFzcz1cInVzZXJfaGVhZF9ib3hcIiBAY2xpY2s9XCJkb1VzZXJIZWFkRXZlbnQoaXRlbSlcIj5cclxuXHRcdFx0XHRcdFx0XHRcdDxpbWFnZSBjbGFzcz1cInVzZXJfaGVhZF9pbWFnZVwiIDpzcmM9XCJpdGVtLnVzZXIudXNlcl9oZWFkXCI+PC9pbWFnZT5cclxuXHRcdFx0XHRcdFx0XHRcdDx0ZXh0IGNsYXNzPVwiY2hhdF9pdGVtX3VzZXJfbmFtZVwiPnt7aXRlbS51c2VyLnVzZXJfbmFtZX19PC90ZXh0PlxyXG5cdFx0XHRcdFx0XHRcdDwvdmlldz5cclxuXHRcdFx0XHRcdFx0XHQ8dmlldyBjbGFzcz1cImNoYXRfaXRlbV9ib2R5X2xlZnRcIj5cclxuXHRcdFx0XHRcdFx0XHRcdDx2aWV3IGNsYXNzPVwiY2hhdF9pdGVtX2ltYWdlX2JveFwiPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHQ8aW1hZ2UgY2xhc3M9XCJjaGF0X2l0ZW1faW1hZ2VfY29udGVudFwiIDpzcmM9XCJnZXRTdGF0aWNVcmwodXJsZGVjb2RlKGl0ZW0uY29udGVudCkpXCIgbW9kZT1cIndpZHRoRml4XCIgQGNsaWNrPVwiZnVsbFZpZXdJbWFnZShnZXRTdGF0aWNVcmwodXJsZGVjb2RlKGl0ZW0ucmVzb3VyY2UpKSlcIj48L2ltYWdlPlxyXG5cdFx0XHRcdFx0XHRcdFx0PC92aWV3PlxyXG5cdFx0XHRcdFx0XHRcdDwvdmlldz5cclxuXHRcdFx0XHRcdFx0PC92aWV3PlxyXG5cdFx0XHRcdFx0XHQ8dmlldyBjbGFzcz1cIml0ZW1fc3lzdGVtXCIgdi1pZj1cIml0ZW0udHlwZT09J3N5c3RlbSdcIj5cclxuXHRcdFx0XHRcdFx0XHQ8dGV4dCBjbGFzcz1cIml0ZW1fc3lzdGVtX3RleHRcIj57e2l0ZW0uY29udGVudH19PC90ZXh0PlxyXG5cdFx0XHRcdFx0XHQ8L3ZpZXc+XHJcblx0XHRcdFx0XHQ8L3ZpZXc+XHJcblx0XHRcdFx0PC92aWV3PlxyXG5cdFx0XHRcdDx2aWV3IDppZD1cIidpbV8nK2hpc3RvcnlMaXN0Lmxlbmd0aFwiIGNsYXNzPVwiYm90dG9tXCI+PC92aWV3PlxyXG5cdFx0XHQ8L3Njcm9sbC12aWV3PlxyXG5cdFx0XHQ8dmlldyBjbGFzcz1cImVtb2ppXCIgOnN0eWxlPVwie2JvdHRvbTooc2FmZUFyZWFCb3R0b20rNjApKydweCd9XCIgYmx1ckVmZmVjdD1cImxpZ2h0XCIgdi1pZj1cInNob3dFbW9qaUJveFwiPlxyXG5cdFx0XHRcdDxpbWFnZSBjbGFzcz1cImVtb2ppX2l0ZW1cIiB2LWZvcj1cImluZGV4IGluIDMwXCIgOnNyYz1cIicuLi8uLi9zdGF0aWMvRW1vamlzLycraW5kZXgrJy5wbmcnXCIgQGNsaWNrPVwic2VuZEVtb2ppKGluZGV4KVwiPjwvaW1hZ2U+XHJcblx0XHRcdDwvdmlldz5cclxuXHJcblxyXG5cclxuXHRcdFx0PHZpZXcgc3R5bGU9XCJwb3NpdGlvbjogZml4ZWQ7bGVmdDowO3JpZ2h0OjA7Ym90dG9tOjA7YmFja2dyb3VuZC1jb2xvcjogI0ZGRkZGRjtcIiA6c3R5bGU9XCJ7aGVpZ2h0OnNhZmVBcmVhQm90dG9tKydweCd9XCI+PC92aWV3PlxyXG5cdFx0XHQ8aW5wdXQgY2xhc3M9XCJjaGF0SW5wdXRcIiA6c3R5bGU9XCJ7Ym90dG9tOnNhZmVBcmVhQm90dG9tKydweCd9XCIgdHlwZT1cInRleHRcIiBwbGFjZWhvbGRlcj1cIuWFqOWRmOemgeiogOS4rSzkvaDmmoLml7bml6Dms5Xlj5HoqIBcIiB2LWlmPVwiY2hhdFR5cGU9PSd0ZXh0JyAmJiByb29tLnJvb21fc2VuZG1zZz09MVwiXHJcblx0XHRcdCBkaXNhYmxlZD1cInRydWVcIiAvPlxyXG5cdFx0XHQ8aW5wdXQgZGlzYWJsZWQ9XCJkaXNhYmxlZFwiIDpzdHlsZT1cIntib3R0b206c2FmZUFyZWFCb3R0b20rJ3B4J31cIiB2LWlmPVwiY2hhdFR5cGU9PSd2b2ljZSdcIiBjbGFzcz1cImNoYXRJbnB1dFwiIHR5cGU9XCJ0ZXh0XCJcclxuXHRcdFx0IHBsYWNlaG9sZGVyPVwi54K55Ye76L+Z6YeM5byA5aeL5b2V6Z+zXCI+XHJcblx0XHRcdDxpbnB1dCBjbGFzcz1cImNoYXRJbnB1dFwiIDpzdHlsZT1cIntib3R0b206c2FmZUFyZWFCb3R0b20rJ3B4J31cIiB0eXBlPVwidGV4dFwiIGNvbmZpcm0tdHlwZT1cInNlbmRcIiBjb25maXJtLWhvbGQ9XCJ0cnVlXCJcclxuXHRcdFx0IHBsYWNlaG9sZGVyPVwi6K+054K55LuA5LmI5ZCnLi4uXCIgdi1tb2RlbD1cIm1lc3NhZ2VPYmoubWVzc2FnZVwiIHYtaWY9XCJjaGF0VHlwZT09J3RleHQnICYmIHJvb20ucm9vbV9zZW5kbXNnPT0wXCIgQGtleWRvd249XCJkb0tleURvd25cIlxyXG5cdFx0XHQgOmZvY3VzPVwibWVzc2FnZU9iai5mb2N1c1wiIEBjb25maXJtPVwiZG9TZW5kTWVzc2FnZVwiIC8+XHJcblx0XHRcdDxpbWFnZSA6c3R5bGU9XCJ7Ym90dG9tOihzYWZlQXJlYUJvdHRvbSsxMCkrJ3B4J31cIiBAY2xpY2s9XCJkb1Nob3dNZW51Qm94XCIgY2xhc3M9XCJjaGF0TWVudV9pbWFnZVwiIHNyYz1cIi9zdGF0aWMvaW1hZ2UvbW9yZS5wbmdcIlxyXG5cdFx0XHQgbW9kZT1cIndpZHRoRml4XCI+PC9pbWFnZT5cclxuXHRcdFx0PGltYWdlIDpzdHlsZT1cIntib3R0b206KHNhZmVBcmVhQm90dG9tKzEwKSsncHgnfVwiIEBjbGljaz1cImRvU2hvd0Vtb2ppQm94XCIgY2xhc3M9XCJjaGF0TWVudV9lbW9qaVwiIHNyYz1cIi9zdGF0aWMvaW1hZ2UvZW1vamkucG5nXCJcclxuXHRcdFx0IG1vZGU9XCJ3aWR0aEZpeFwiPjwvaW1hZ2U+XHJcblxyXG5cclxuXHRcdFx0PHZpZXcgY2xhc3M9XCJwbGF5ZXJcIiB2LWlmPVwic29uZy5zb25nXCIgQGNsaWNrPVwiZG9NdXNpY0NsaWNrZWRcIiBibHVyRWZmZWN0PVwibGlnaHRcIj5cclxuXHRcdFx0XHQ8dmlldyBjbGFzcz1cInBsYXllcl9pbmZvXCI+XHJcblx0XHRcdFx0XHQ8dGV4dCBjbGFzcz1cInBsYXllcl9zb25nXCI+e3tzb25nLnNvbmcubmFtZX19PC90ZXh0PlxyXG5cdFx0XHRcdFx0PHRleHQgY2xhc3M9XCJwbGF5ZXJfdXNlclwiPueCueatjOS6ujoge3t1cmxkZWNvZGUoc29uZy51c2VyLnVzZXJfbmFtZSl9fTwvdGV4dD5cclxuXHRcdFx0XHQ8L3ZpZXc+XHJcblx0XHRcdFx0PGltYWdlIGNsYXNzPVwicGxheWVyX2ltYWdlXCIgOnNyYz1cInNvbmcuc29uZy5waWNcIj48L2ltYWdlPlxyXG5cdFx0XHQ8L3ZpZXc+XHJcblx0XHRcdDx2aWV3IHYtaWY9XCJzaG93TWVudUJveFwiIDpzdHlsZT1cIntib3R0b206KHNhZmVBcmVhQm90dG9tKzYwKSsncHgnfVwiIGJsdXJFZmZlY3Q9XCJsaWdodFwiIGNsYXNzPVwibWVudUJveFwiPlxyXG5cdFx0XHRcdDxzY3JvbGwtdmlldyBzaG93LXNjcm9sbGJhcj1cImZhbHNlXCIgc2Nyb2xsLXdpdGgtYW5pbWF0aW9uPVwidHJ1ZVwiIHNjcm9sbC14PVwidHJ1ZVwiIGNsYXNzPVwibWVudUJvZHlcIj5cclxuXHRcdFx0XHRcdDx2aWV3IGNsYXNzPVwibWVudUl0ZW1cIiBAY2xpY2s9XCJjaG9vc2VJbWFnZVwiPlxyXG5cdFx0XHRcdFx0XHQ8dmlldyBjbGFzcz1cIm1lbnVNYWluXCI+XHJcblx0XHRcdFx0XHRcdFx0PGltYWdlIGNsYXNzPVwibWVudUltYWdlXCIgc3JjPVwiL3N0YXRpYy9pbWFnZS9pY29uX3Bob3RvX2ZpbGwucG5nXCI+PC9pbWFnZT5cclxuXHRcdFx0XHRcdFx0PC92aWV3PlxyXG5cdFx0XHRcdFx0XHQ8dGV4dCBjbGFzcz1cIm1lbnVUaXRsZVwiPuWPkeWbvjwvdGV4dD5cclxuXHRcdFx0XHRcdDwvdmlldz5cclxuXHRcdFx0XHRcdDx2aWV3IGNsYXNzPVwibWVudUl0ZW1cIiBAY2xpY2s9XCJkb09wZW5QYWdlKCdhZGRTb25nJylcIj5cclxuXHRcdFx0XHRcdFx0PHZpZXcgY2xhc3M9XCJtZW51TWFpblwiPlxyXG5cdFx0XHRcdFx0XHRcdDxpbWFnZSBjbGFzcz1cIm1lbnVJbWFnZVwiIHNyYz1cIi9zdGF0aWMvaW1hZ2UvaWNvbl9kaW5ndGFiLnBuZ1wiPjwvaW1hZ2U+XHJcblx0XHRcdFx0XHRcdDwvdmlldz5cclxuXHRcdFx0XHRcdFx0PHRleHQgY2xhc3M9XCJtZW51VGl0bGVcIj7ngrnmrYw8L3RleHQ+XHJcblx0XHRcdFx0XHQ8L3ZpZXc+XHJcblx0XHRcdFx0XHQ8dmlldyBjbGFzcz1cIm1lbnVJdGVtXCIgQGNsaWNrPVwiZG9PcGVuUGFnZSgnc29uZ0xpc3QnKVwiPlxyXG5cdFx0XHRcdFx0XHQ8dmlldyBjbGFzcz1cIm1lbnVNYWluXCI+XHJcblx0XHRcdFx0XHRcdFx0PGltYWdlIGNsYXNzPVwibWVudUltYWdlXCIgc3JjPVwiL3N0YXRpYy9pbWFnZS9pY29uX2ludml0ZV9maWxsLnBuZ1wiPjwvaW1hZ2U+XHJcblx0XHRcdFx0XHRcdDwvdmlldz5cclxuXHRcdFx0XHRcdFx0PHRleHQgY2xhc3M9XCJtZW51VGl0bGVcIj7lt7Lngrk8L3RleHQ+XHJcblx0XHRcdFx0XHQ8L3ZpZXc+XHJcblx0XHRcdFx0XHQ8dmlldyBjbGFzcz1cIm1lbnVJdGVtXCIgQGNsaWNrPVwiZG9PcGVuUGFnZSgnbXlTb25nJylcIj5cclxuXHRcdFx0XHRcdFx0PHZpZXcgY2xhc3M9XCJtZW51TWFpblwiPlxyXG5cdFx0XHRcdFx0XHRcdDxpbWFnZSBjbGFzcz1cIm1lbnVJbWFnZVwiIHNyYz1cIi9zdGF0aWMvaW1hZ2UvaWNvbl9wZW9wbGVfZmlsbC5wbmdcIj48L2ltYWdlPlxyXG5cdFx0XHRcdFx0XHQ8L3ZpZXc+XHJcblx0XHRcdFx0XHRcdDx0ZXh0IGNsYXNzPVwibWVudVRpdGxlXCI+5oiR55qEPC90ZXh0PlxyXG5cdFx0XHRcdFx0PC92aWV3PlxyXG5cdFx0XHRcdFx0PHZpZXcgY2xhc3M9XCJtZW51SXRlbVwiIEBjbGljaz1cImRvT3BlblBhZ2UoJ29uTGluZScpXCI+XHJcblx0XHRcdFx0XHRcdDx2aWV3IGNsYXNzPVwibWVudU1haW5cIj5cclxuXHRcdFx0XHRcdFx0XHQ8aW1hZ2UgY2xhc3M9XCJtZW51SW1hZ2VcIiBzcmM9XCIvc3RhdGljL2ltYWdlL2ljb25fbWVldGluZ19maWxsLnBuZ1wiPjwvaW1hZ2U+XHJcblx0XHRcdFx0XHRcdDwvdmlldz5cclxuXHRcdFx0XHRcdFx0PHRleHQgY2xhc3M9XCJtZW51VGl0bGVcIj7lnKjnur88L3RleHQ+XHJcblx0XHRcdFx0XHQ8L3ZpZXc+XHJcblx0XHRcdFx0XHQ8dmlldyBjbGFzcz1cIm1lbnVJdGVtXCIgQGNsaWNrPVwiZG9PcGVuUGFnZSgnaW52YXRlJylcIj5cclxuXHRcdFx0XHRcdFx0PHZpZXcgY2xhc3M9XCJtZW51TWFpblwiPlxyXG5cdFx0XHRcdFx0XHRcdDxpbWFnZSBjbGFzcz1cIm1lbnVJbWFnZVwiIHNyYz1cIi9zdGF0aWMvaW1hZ2UvaWNvbl9pbnZhdGUucG5nXCI+PC9pbWFnZT5cclxuXHRcdFx0XHRcdFx0PC92aWV3PlxyXG5cdFx0XHRcdFx0XHQ8dGV4dCBjbGFzcz1cIm1lbnVUaXRsZVwiPumCgOivtzwvdGV4dD5cclxuXHRcdFx0XHRcdDwvdmlldz5cclxuXHRcdFx0XHRcdDx2aWV3IGNsYXNzPVwibWVudUl0ZW1cIiBAY2xpY2s9XCJkb09wZW5QYWdlKCdzZXR0aW5nJylcIj5cclxuXHRcdFx0XHRcdFx0PHZpZXcgY2xhc3M9XCJtZW51TWFpblwiPlxyXG5cdFx0XHRcdFx0XHRcdDxpbWFnZSBjbGFzcz1cIm1lbnVJbWFnZVwiIHNyYz1cIi9zdGF0aWMvaW1hZ2UvaWNvbl9zZXR0aW5nLnBuZ1wiPjwvaW1hZ2U+XHJcblx0XHRcdFx0XHRcdDwvdmlldz5cclxuXHRcdFx0XHRcdFx0PHRleHQgY2xhc3M9XCJtZW51VGl0bGVcIj7nrqHnkIY8L3RleHQ+XHJcblx0XHRcdFx0XHQ8L3ZpZXc+XHJcblx0XHRcdFx0PC9zY3JvbGwtdmlldz5cclxuXHRcdFx0PC92aWV3PlxyXG5cdFx0PC9ibG9jaz5cclxuXHRcdDx2aWV3IGNsYXNzPVwiZm9ybVBhc3N3b3JkXCIgdi1pZj1cInNob3dQYXNzd29yZEZvcm1cIj5cclxuXHRcdFx0PGZvcm0gQHN1Ym1pdD1cImdldFJvb21JbmZvXCI+XHJcblx0XHRcdFx0PHZpZXcgY2xhc3M9XCJmb3JtUGFzc3dvcmRUaXRsZVwiPuivt+i+k+WFpeWvhueggei/m+WFpeaIv+mXtDwvdmlldz5cclxuXHRcdFx0XHQ8dmlldyBjbGFzcz1cImZvcm1QYXNzd29yZElucHV0XCI+XHJcblx0XHRcdFx0XHQ8aW5wdXQgdHlwZT1cIm51bWJlclwiIHBsYWNlaG9sZGVyPVwi6K+36L6T5YWl5a+G56CBXCIgcGFzc3dvcmQ9XCJ0cnVlXCIgdi1tb2RlbD1cInBhc3N3b3JkXCIgY29uZmlybS10eXBlPVwic2VhcmNoXCIgY29uZmlybS1ob2xkPVwidHJ1ZVwiIC8+XHJcblx0XHRcdFx0PC92aWV3PlxyXG5cdFx0XHQ8L2Zvcm0+XHJcblx0XHQ8L3ZpZXc+XHJcblx0PC92aWV3PlxyXG48L3RlbXBsYXRlPlxyXG5cclxuPHNjcmlwdD5cclxuXHRleHBvcnQgZGVmYXVsdCB7XHJcblx0XHRkYXRhKCkge1xyXG5cdFx0XHRyZXR1cm4ge1xyXG5cdFx0XHRcdHZpZXdJZDogXCJcIixcclxuXHRcdFx0XHRzYWZlQXJlYUJvdHRvbTogMCxcclxuXHRcdFx0XHRiZ0F1ZGlvTWFubmFnZXI6IG51bGwsXHJcblx0XHRcdFx0c2hvd0Vtb2ppQm94OiBmYWxzZSxcclxuXHRcdFx0XHRzaG93Um9vbVBhZ2U6IGZhbHNlLFxyXG5cdFx0XHRcdHNob3dNZW51Qm94OiBmYWxzZSxcclxuXHRcdFx0XHRzaG93UGFzc3dvcmRGb3JtOiBmYWxzZSxcclxuXHRcdFx0XHRhcHA6IGdldEFwcCgpLFxyXG5cdFx0XHRcdHVzZXJJbmZvOiBudWxsLFxyXG5cdFx0XHRcdHNvbmc6IHtcclxuXHRcdFx0XHRcdHNvbmc6IG51bGwsXHJcblx0XHRcdFx0XHR1c2VyOiBudWxsLFxyXG5cdFx0XHRcdH0sXHJcblx0XHRcdFx0cm9vbV9pZDogMCxcclxuXHRcdFx0XHRyb29tOiBmYWxzZSxcclxuXHRcdFx0XHRwYXNzd29yZDogXCJcIixcclxuXHRcdFx0XHRjaGF0VHlwZTogJ3RleHQnLFxyXG5cdFx0XHRcdGhpc3RvcnlMaXN0OiBbXSxcclxuXHRcdFx0XHRtZXNzYWdlT2JqOiB7XHJcblx0XHRcdFx0XHRtZXNzYWdlOiBcIlwiLFxyXG5cdFx0XHRcdFx0YXQ6IGZhbHNlLFxyXG5cdFx0XHRcdFx0Zm9jdXM6IGZhbHNlLFxyXG5cdFx0XHRcdH0sXHJcblx0XHRcdFx0bXVzaWNOb3RMaWtlOiBmYWxzZVxyXG5cdFx0XHR9XHJcblx0XHR9LFxyXG5cdFx0b25Mb2FkKCkge1xyXG5cdFx0XHRsZXQgdGhhdCA9IHRoaXM7XHJcblx0XHRcdGNvbnN0IHJlcyA9IHVuaS5nZXRTeXN0ZW1JbmZvU3luYygpO1xyXG5cdFx0XHR0aGF0LnNhZmVBcmVhQm90dG9tID0gcmVzLnNhZmVBcmVhSW5zZXRzLmJvdHRvbSA9PSAwID8gMCA6IHJlcy5zYWZlQXJlYUluc2V0cy5ib3R0b207XHJcblx0XHRcdHRoYXQuYmdBdWRpb01hbm5hZ2VyID0gdW5pLmdldEJhY2tncm91bmRBdWRpb01hbmFnZXIoKTtcclxuXHRcdFx0dGhpcy5yb29tX2lkID0gdW5pLmdldFN0b3JhZ2VTeW5jKCdyb29tX2lkJykgfHwgMTAwMDA7XHJcblx0XHRcdHRoYXQuYXBwLnVzZXIuZ2V0TXlJbmZvKHtcclxuXHRcdFx0XHRzdWNjZXNzKHVzZXJJbmZvKSB7XHJcblx0XHRcdFx0XHR0aGF0LnVzZXJJbmZvID0gdXNlckluZm87XHJcblx0XHRcdFx0XHR0aGF0LmdldFJvb21JbmZvKCk7XHJcblx0XHRcdFx0fVxyXG5cdFx0XHR9KTtcclxuXHRcdFx0dW5pLiRvbignV2ViU29ja2V0TWVzc2FnZScsIGZ1bmN0aW9uKGRhdGEpIHtcclxuXHRcdFx0XHQvLyB0cnkge1xyXG5cdFx0XHRcdHRoYXQubWVzc2FnZUNvbnRyb2xsZXIoSlNPTi5wYXJzZShkYXRhKSk7XHJcblx0XHRcdFx0dGhhdC5hdXRvU2Nyb2xsKCk7XHJcblx0XHRcdFx0Ly8gfSBjYXRjaCAoZXJyb3IpIHtcclxuXHRcdFx0XHQvLyBjb25zb2xlLmVycm9yKGVycm9yKTtcclxuXHRcdFx0XHQvLyB9XHJcblx0XHRcdH0pO1xyXG5cdFx0XHR1bmkuJG9uKCdJbmRleFJlbG9hZCcsIGZ1bmN0aW9uKCkge1xyXG5cdFx0XHRcdHRoYXQuYXBwLnVzZXIuZ2V0TXlJbmZvKHtcclxuXHRcdFx0XHRcdHN1Y2Nlc3ModXNlckluZm8pIHtcclxuXHRcdFx0XHRcdFx0dGhhdC51c2VySW5mbyA9IHVzZXJJbmZvO1xyXG5cdFx0XHRcdFx0XHR0aGF0LmdldFJvb21JbmZvKCk7XHJcblx0XHRcdFx0XHR9XHJcblx0XHRcdFx0fSk7XHJcblx0XHRcdH0pO1xyXG5cdFx0XHR1bmkuJG9uKCdBdFVzZXJFdmVudCcsIGZ1bmN0aW9uKHVzZXIpIHtcclxuXHRcdFx0XHR0aGF0LmRvQXRVc2VyKHVzZXIpO1xyXG5cdFx0XHR9KTtcclxuXHRcdFx0dW5pLiRvbignUm9vbUNoYW5nZWQnLCBmdW5jdGlvbihyb29tX2lkKSB7XHJcblx0XHRcdFx0Y29uc29sZS5sb2cocm9vbV9pZCk7XHJcblx0XHRcdFx0dW5pLnNldE5hdmlnYXRpb25CYXJUaXRsZSh7XHJcblx0XHRcdFx0XHR0aXRsZTogJ+ato+WcqOi/m+WFpSdcclxuXHRcdFx0XHR9KTtcclxuXHRcdFx0XHR0aGF0LnJvb21faWQgPSByb29tX2lkO1xyXG5cdFx0XHRcdHRoYXQuc2hvd1Bhc3N3b3JkRm9ybSA9IGZhbHNlO1xyXG5cdFx0XHRcdHRoYXQuc2hvd1Jvb21QYWdlID0gZmFsc2U7XHJcblx0XHRcdFx0dGhhdC5wYXNzd29yZCA9ICcnO1xyXG5cdFx0XHRcdHVuaS5zZXRTdG9yYWdlU3luYygncm9vbV9pZCcsIHBhcnNlSW50KHRoYXQucm9vbV9pZCkpO1xyXG5cdFx0XHRcdHRoYXQuZ2V0Um9vbUluZm8oKTtcclxuXHRcdFx0fSk7XHJcblx0XHRcdHRoYXQuYmdBdWRpb01hbm5hZ2VyLm9uQ2FucGxheShmdW5jdGlvbigpIHtcclxuXHRcdFx0XHRsZXQgdGltZSA9IHBhcnNlSW50KG5ldyBEYXRlKCkudmFsdWVPZigpIC8gMTAwMCkgLSB0aGF0LnNvbmcuc2luY2UgLSAzO1xyXG5cdFx0XHRcdHRoYXQuYmdBdWRpb01hbm5hZ2VyLnNlZWsodGltZSA+IDAgPyB0aW1lIDogMCk7XHJcblx0XHRcdH0pO1xyXG5cdFx0XHR0aGF0LmJnQXVkaW9NYW5uYWdlci5vbkVuZGVkKGZ1bmN0aW9uKCkge1xyXG5cdFx0XHRcdHRoYXQuc29uZyA9IHtcclxuXHRcdFx0XHRcdHNvbmc6IG51bGwsXHJcblx0XHRcdFx0XHR1c2VyOiBudWxsXHJcblx0XHRcdFx0fTtcclxuXHRcdFx0fSk7XHJcblx0XHR9LFxyXG5cdFx0b25TaG93KCkge1xyXG5cdFx0XHRsZXQgdGhhdCA9IHRoaXM7XHJcblx0XHRcdHBsdXMucHVzaC5jbGVhcigpO1xyXG5cdFx0XHRpZiAodGhhdC5iZ0F1ZGlvTWFubmFnZXIuc3JjKSB7XHJcblx0XHRcdFx0aWYgKCF0aGF0Lm11c2ljTm90TGlrZSkge1xyXG5cdFx0XHRcdFx0dGhhdC5iZ0F1ZGlvTWFubmFnZXIucGxheSgpO1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0fVxyXG5cdFx0XHR0aGF0LnBhc3N3b3JkID0gJyc7XHJcblx0XHRcdHRoYXQuYXV0b1Njcm9sbCgpO1xyXG5cdFx0fSxcclxuXHRcdG9uTmF2aWdhdGlvbkJhckJ1dHRvblRhcChyZXMpIHtcclxuXHRcdFx0bGV0IHRoYXQgPSB0aGlzO1xyXG5cdFx0XHRzd2l0Y2ggKHJlcy50ZXh0KSB7XHJcblx0XHRcdFx0Y2FzZSAn5o2i5oi/JzpcclxuXHRcdFx0XHRcdHVuaS5uYXZpZ2F0ZVRvKHtcclxuXHRcdFx0XHRcdFx0dXJsOiBcIi4uL3Jvb20vc2VsZWN0XCJcclxuXHRcdFx0XHRcdH0pO1xyXG5cdFx0XHRcdFx0YnJlYWs7XHJcblx0XHRcdFx0Y2FzZSAn5oiR55qEJzpcclxuXHRcdFx0XHRcdGlmICh0aGF0LnVzZXJJbmZvICYmIHRoYXQudXNlckluZm8udXNlcl9pZCA8PSAwKSB7XHJcblx0XHRcdFx0XHRcdHRoYXQuYXBwLnVzZXIubG9naW4oKTtcclxuXHRcdFx0XHRcdH0gZWxzZSB7XHJcblx0XHRcdFx0XHRcdHVuaS5uYXZpZ2F0ZVRvKHtcclxuXHRcdFx0XHRcdFx0XHR1cmw6ICcuLi91c2VyL2luZGV4JyxcclxuXHRcdFx0XHRcdFx0fSk7XHJcblx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHRicmVhaztcclxuXHRcdFx0XHRkZWZhdWx0OlxyXG5cdFx0XHR9XHJcblx0XHR9LFxyXG5cdFx0bWV0aG9kczoge1xyXG5cdFx0XHRkb1VzZXJIZWFkRXZlbnQ6IGZ1bmN0aW9uKGUpIHtcclxuXHRcdFx0XHR2YXIgdGhhdCA9IHRoaXNcclxuXHRcdFx0XHR0aGF0LnNob3dNZW51VXNlckhlYWQoZSk7XHJcblx0XHRcdH0sXHJcblx0XHRcdGRvU2hvd0Vtb2ppQm94KCkge1xyXG5cdFx0XHRcdGxldCB0aGF0ID0gdGhpcztcclxuXHRcdFx0XHR0aGF0LnNob3dFbW9qaUJveCA9ICF0aGF0LnNob3dFbW9qaUJveDtcclxuXHRcdFx0XHR0aGF0LnNob3dNZW51Qm94ID0gZmFsc2U7XHJcblx0XHRcdFx0dW5pLmhpZGVLZXlib2FyZCgpO1xyXG5cdFx0XHRcdGlmICghdGhhdC5zaG93RW1vamlCb3gpIHtcclxuXHRcdFx0XHRcdHRoYXQuYXV0b1Njcm9sbCgpO1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0fSxcclxuXHRcdFx0ZG9TaG93TWVudUJveCgpIHtcclxuXHRcdFx0XHRsZXQgdGhhdCA9IHRoaXM7XHJcblx0XHRcdFx0dGhhdC5zaG93TWVudUJveCA9ICF0aGF0LnNob3dNZW51Qm94O1xyXG5cdFx0XHRcdHRoYXQuc2hvd0Vtb2ppQm94ID0gZmFsc2U7XHJcblx0XHRcdFx0dW5pLmhpZGVLZXlib2FyZCgpO1xyXG5cdFx0XHRcdGlmICghdGhhdC5zaG93TWVudUJveCkge1xyXG5cdFx0XHRcdFx0dGhhdC5hdXRvU2Nyb2xsKCk7XHJcblx0XHRcdFx0fVxyXG5cdFx0XHR9LFxyXG5cdFx0XHRkb0tleURvd24oKSB7XHJcblx0XHRcdFx0bGV0IHRoYXQgPSB0aGlzO1xyXG5cdFx0XHRcdGlmICh0aGF0Lm1lc3NhZ2VPYmouYXQpIHtcclxuXHRcdFx0XHRcdGlmICh0aGF0Lm1lc3NhZ2VPYmoubWVzc2FnZS5pbmRleE9mKCdAJyArIGRlY29kZVVSSUNvbXBvbmVudCh0aGF0Lm1lc3NhZ2VPYmouYXQudXNlcl9uYW1lKSkgPCAwKSB7XHJcblx0XHRcdFx0XHRcdC8vQOeahOaYteensOW3sue7j+iiq+aUuei/h+S6hlxyXG5cdFx0XHRcdFx0XHR0aGF0Lm1lc3NhZ2VPYmouYXQgPSBmYWxzZTtcclxuXHRcdFx0XHRcdH1cclxuXHRcdFx0XHR9XHJcblx0XHRcdH0sXHJcblx0XHRcdGRvTXVzaWNDbGlja2VkKCkge1xyXG5cdFx0XHRcdGxldCB0aGF0ID0gdGhpcztcclxuXHRcdFx0XHRsZXQgbWVudSA9IFtcclxuXHRcdFx0XHRcdCfkuI3llpzmrKInLCAn5pS26JePJ1xyXG5cdFx0XHRcdF07XHJcblx0XHRcdFx0aWYgKHRoYXQudXNlckluZm8udXNlcl9hZG1pbiB8fCB0aGF0LnJvb20ucm9vbV91c2VyID09IHRoYXQudXNlckluZm8udXNlcl9pZCkge1xyXG5cdFx0XHRcdFx0bWVudSA9IFtcclxuXHRcdFx0XHRcdFx0J+WIh+atjCcsICfmlLbol48nLCAn56aB5q2iVGHngrnmrYwnXHJcblx0XHRcdFx0XHRdO1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0XHR1bmkuc2hvd0FjdGlvblNoZWV0KHtcclxuXHRcdFx0XHRcdGl0ZW1MaXN0OiBtZW51LFxyXG5cdFx0XHRcdFx0c3VjY2VzczogZnVuY3Rpb24ocmVzKSB7XHJcblx0XHRcdFx0XHRcdGNvbnNvbGUubG9nKHJlcy50YXBJbmRleCk7XHJcblx0XHRcdFx0XHRcdGxldCBidXR0b25OYW1lID0gbWVudVtyZXMudGFwSW5kZXhdO1xyXG5cdFx0XHRcdFx0XHRzd2l0Y2ggKGJ1dHRvbk5hbWUpIHtcclxuXHRcdFx0XHRcdFx0XHRjYXNlICfnpoHmraJUYeeCueatjCc6XHJcblx0XHRcdFx0XHRcdFx0XHR0aGF0LmFwcC5yZXF1ZXN0KHtcclxuXHRcdFx0XHRcdFx0XHRcdFx0dXJsOiAndXNlci9zb25nZG93bicsXHJcblx0XHRcdFx0XHRcdFx0XHRcdGRhdGE6IHtcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRyb29tX2lkOiB0aGF0LnJvb21faWQsXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0dXNlcl9pZDogdGhhdC5zb25nLnVzZXIudXNlcl9pZFxyXG5cdFx0XHRcdFx0XHRcdFx0XHR9LFxyXG5cdFx0XHRcdFx0XHRcdFx0XHRsb2FkaW5nOiBcIuemgeatjOS4rVwiLFxyXG5cdFx0XHRcdFx0XHRcdFx0XHRzdWNjZXNzOiBmdW5jdGlvbihyZXMpIHtcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHR1bmkuc2hvd01vZGFsKHtcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdHRpdGxlOiAn56aB5q2M5oiQ5YqfJyxcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdGNvbnRlbnQ6IHJlcy5tc2csXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRzaG93Q2FuY2VsOiBmYWxzZSxcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdHN1Y2Nlc3M6IGZ1bmN0aW9uKCkge31cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHR9KTtcclxuXHRcdFx0XHRcdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0XHRcdFx0fSk7XHJcblx0XHRcdFx0XHRcdFx0XHRicmVhaztcclxuXHRcdFx0XHRcdFx0XHRjYXNlICfliIfmrYwnOlxyXG5cdFx0XHRcdFx0XHRcdFx0dW5pLnNob3dNb2RhbCh7XHJcblx0XHRcdFx0XHRcdFx0XHRcdHRpdGxlOiAn5YiH5q2M5o+Q6YaSJyxcclxuXHRcdFx0XHRcdFx0XHRcdFx0Y29udGVudDogJ+aYr+WQpuehruiupOWIh+aOieW9k+WJjeaSreaUvueahOatjD8nLFxyXG5cdFx0XHRcdFx0XHRcdFx0XHRjYW5jZWxUZXh0OiAn5Y+W5raIJyxcclxuXHRcdFx0XHRcdFx0XHRcdFx0Y29uZmlybUNvbG9yOiAnI0ZGNDUwMCcsXHJcblx0XHRcdFx0XHRcdFx0XHRcdGNvbmZpcm1UZXh0OiAn5YiH5q2MJyxcclxuXHRcdFx0XHRcdFx0XHRcdFx0c3VjY2VzczogZnVuY3Rpb24ocmVzKSB7XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0aWYgKHJlcy5jb25maXJtKSB7XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHR0aGF0LmFwcC5yZXF1ZXN0KHtcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0dXJsOiBcInNvbmcvcGFzc1wiLFxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRkYXRhOiB7XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0cm9vbV9pZDogdGhhdC5yb29tX2lkLFxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdG1pZDogdGhhdC5zb25nLnNvbmcubWlkXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdH0sXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdHN1Y2Nlc3M6IGZ1bmN0aW9uKCkge31cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdH0pO1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0XHRcdFx0fSk7XHJcblx0XHRcdFx0XHRcdFx0XHRicmVhaztcclxuXHRcdFx0XHRcdFx0XHRjYXNlICfkuI3llpzmrKInOlxyXG5cdFx0XHRcdFx0XHRcdFx0dGhhdC5hcHAucmVxdWVzdCh7XHJcblx0XHRcdFx0XHRcdFx0XHRcdHVybDogXCJzb25nL3Bhc3NcIixcclxuXHRcdFx0XHRcdFx0XHRcdFx0ZGF0YToge1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdHJvb21faWQ6IHRoYXQucm9vbV9pZCxcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRtaWQ6IHRoYXQuc29uZy5zb25nLm1pZFxyXG5cdFx0XHRcdFx0XHRcdFx0XHR9LFxyXG5cdFx0XHRcdFx0XHRcdFx0XHRzdWNjZXNzOiBmdW5jdGlvbihyZXMpIHtcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHR0aGF0LmJnQXVkaW9NYW5uYWdlci5wYXVzZSgpO1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdHRoYXQuc29uZyA9IHtcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdHNvbmc6IG51bGwsXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHR1c2VyOiBudWxsXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0fTtcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHR0aGF0Lm11c2ljTm90TGlrZSA9IHRydWU7XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0dW5pLnNob3dNb2RhbCh7XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHR0aXRsZTogJ+S4jeWWnOasoicsXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRjb250ZW50OiByZXMubXNnLFxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0c2hvd0NhbmNlbDogZmFsc2UsXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRzdWNjZXNzOiBmdW5jdGlvbigpIHt9XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0fSk7XHJcblx0XHRcdFx0XHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdFx0XHRcdH0pO1xyXG5cdFx0XHRcdFx0XHRcdFx0YnJlYWs7XHJcblx0XHRcdFx0XHRcdFx0Y2FzZSAn5pS26JePJzpcclxuXHRcdFx0XHRcdFx0XHRcdHRoYXQuYXBwLnJlcXVlc3Qoe1xyXG5cdFx0XHRcdFx0XHRcdFx0XHR1cmw6IFwic29uZy9hZGRNeVNvbmdcIixcclxuXHRcdFx0XHRcdFx0XHRcdFx0ZGF0YToge1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdHJvb21faWQ6IHRoYXQucm9vbV9pZCxcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRtaWQ6IHRoYXQuc29uZy5zb25nLm1pZFxyXG5cdFx0XHRcdFx0XHRcdFx0XHR9LFxyXG5cdFx0XHRcdFx0XHRcdFx0XHRzdWNjZXNzOiBmdW5jdGlvbihyZXMpIHtcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHR1bmkuc2hvd1RvYXN0KHtcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdHRpdGxlOiBcIuaUtuiXj+aIkOWKn1wiXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0fSk7XHJcblx0XHRcdFx0XHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdFx0XHRcdH0pO1xyXG5cdFx0XHRcdFx0XHRcdFx0YnJlYWs7XHJcblx0XHRcdFx0XHRcdFx0ZGVmYXVsdDpcclxuXHRcdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0fVxyXG5cdFx0XHRcdH0pXHJcblx0XHRcdH0sXHJcblx0XHRcdGRvQXRVc2VyKHVzZXIpIHtcclxuXHRcdFx0XHRsZXQgdGhhdCA9IHRoaXM7XHJcblx0XHRcdFx0dGhhdC5tZXNzYWdlT2JqLmF0ID0gdXNlcjtcclxuXHRcdFx0XHR0aGF0Lm1lc3NhZ2VPYmoubWVzc2FnZSA9IFwiQFwiICsgZGVjb2RlVVJJQ29tcG9uZW50KHVzZXIudXNlcl9uYW1lKSArIFwiIFwiICsgdGhhdC5tZXNzYWdlT2JqLm1lc3NhZ2U7XHJcblx0XHRcdFx0dGhhdC5tZXNzYWdlT2JqLmZvY3VzID0gdHJ1ZTtcclxuXHRcdFx0fSxcclxuXHRcdFx0YXV0b1Njcm9sbCgpIHtcclxuXHRcdFx0XHRsZXQgdGhhdCA9IHRoaXM7XHJcblx0XHRcdFx0dGhpcy52aWV3SWQgPSBcIlwiO1xyXG5cdFx0XHRcdC8v6K6+572udmlld0luZGV45YC877yM5L2/6IGK5aSp5rua5Yqo5Yiw5bqV6YOoICBcclxuXHRcdFx0XHR0aGlzLiRuZXh0VGljaygoKSA9PiB7XHJcblx0XHRcdFx0XHR0aGlzLnZpZXdJZCA9IFwiaW1fXCIgKyB0aGlzLmhpc3RvcnlMaXN0Lmxlbmd0aDtcclxuXHRcdFx0XHR9KTtcclxuXHRcdFx0fSxcclxuXHRcdFx0aGlzdG9yeUNsaWNrZWQoKSB7XHJcblx0XHRcdFx0bGV0IHRoYXQgPSB0aGlzO1xyXG5cdFx0XHRcdHRoYXQuc2hvd01lbnVCb3ggPSBmYWxzZTtcclxuXHRcdFx0XHR0aGF0LnNob3dFbW9qaUJveCA9IGZhbHNlO1xyXG5cdFx0XHRcdHVuaS5oaWRlS2V5Ym9hcmQoKTtcclxuXHRcdFx0XHR0aGF0LmF1dG9TY3JvbGwoKTtcclxuXHRcdFx0fSxcclxuXHRcdFx0bWVzc2FnZUNvbnRyb2xsZXIobXNnKSB7XHJcblx0XHRcdFx0bGV0IHRoYXQgPSB0aGlzO1xyXG5cdFx0XHRcdHN3aXRjaCAobXNnLnR5cGUpIHtcclxuXHRcdFx0XHRcdGNhc2UgJ3RleHQnOlxyXG5cdFx0XHRcdFx0Y2FzZSAnaW1nJzpcclxuXHRcdFx0XHRcdGNhc2UgJ3N5c3RlbSc6XHJcblx0XHRcdFx0XHRcdGlmIChtc2cudHlwZSA9PSAndGV4dCcgJiYgbXNnLmF0KSB7XHJcblx0XHRcdFx0XHRcdFx0aWYgKG1zZy5hdC51c2VyX2lkID09IHRoYXQudXNlckluZm8udXNlcl9pZCkge1xyXG5cdFx0XHRcdFx0XHRcdFx0cGx1cy5wdXNoLmNyZWF0ZU1lc3NhZ2UoXCJAXCIgKyBkZWNvZGVVUklDb21wb25lbnQobXNnLmF0LnVzZXJfbmFtZSkgKyBcIiBcIiArIGRlY29kZVVSSUNvbXBvbmVudChtc2cuY29udGVudCksICcnLCB7XHJcblx0XHRcdFx0XHRcdFx0XHRcdHRpdGxlOiBkZWNvZGVVUklDb21wb25lbnQobXNnLnVzZXIudXNlcl9uYW1lKSxcclxuXHRcdFx0XHRcdFx0XHRcdH0pO1xyXG5cdFx0XHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdFx0XHRtc2cuY29udGVudCA9IFwiQFwiICsgZGVjb2RlVVJJQ29tcG9uZW50KG1zZy5hdC51c2VyX25hbWUpICsgXCIgXCIgKyBtc2cuY29udGVudDtcclxuXHRcdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0XHR0aGF0LmFkZE1lc3NhZ2VUb0xpc3QobXNnKTtcclxuXHRcdFx0XHRcdFx0YnJlYWs7XHJcblx0XHRcdFx0XHRjYXNlICdhZGRTb25nJzpcclxuXHRcdFx0XHRcdFx0aWYgKG1zZy5hdCkge1xyXG5cdFx0XHRcdFx0XHRcdHRoYXQuYWRkU3lzdGVtTWVzc2FnZShkZWNvZGVVUklDb21wb25lbnQobXNnLnVzZXIudXNlcl9uYW1lKSArIFwiIOmAgeS6huS4gOmmliDjgIpcIiArIG1zZy5zb25nLm5hbWUgKyBcIuOAiyDnu5kgXCIgK1xyXG5cdFx0XHRcdFx0XHRcdFx0ZGVjb2RlVVJJQ29tcG9uZW50KG1zZy5hdC51c2VyX25hbWUpLCAnIzMzMycpO1xyXG5cdFx0XHRcdFx0XHRcdGlmIChtc2cuYXQudXNlcl9pZCA9PSB0aGF0LnVzZXJJbmZvLnVzZXJfaWQpIHtcclxuXHRcdFx0XHRcdFx0XHRcdHBsdXMucHVzaC5jcmVhdGVNZXNzYWdlKFwi6YCB5L2g5LiA6aaW44CKXCIgKyBtc2cuc29uZy5uYW1lICsgXCLjgIsoXCIgKyBtc2cuc29uZy5zaW5nZXIgKyBcIilcIiwgJycsIHtcclxuXHRcdFx0XHRcdFx0XHRcdFx0dGl0bGU6IGRlY29kZVVSSUNvbXBvbmVudChtc2cudXNlci51c2VyX25hbWUpLFxyXG5cdFx0XHRcdFx0XHRcdFx0fSk7XHJcblx0XHRcdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0XHR9IGVsc2Uge1xyXG5cdFx0XHRcdFx0XHRcdHRoYXQuYWRkU3lzdGVtTWVzc2FnZShkZWNvZGVVUklDb21wb25lbnQobXNnLnVzZXIudXNlcl9uYW1lKSArIFwiIOeCueS6huS4gOmmluOAilwiICsgbXNnLnNvbmcubmFtZSArIFwi44CLXCIsICcjMzMzJyk7XHJcblx0XHRcdFx0XHRcdH1cclxuXHJcblx0XHRcdFx0XHRcdGJyZWFrO1xyXG5cdFx0XHRcdFx0Y2FzZSAncGFzcyc6XHJcblx0XHRcdFx0XHRcdHRoYXQuYWRkU3lzdGVtTWVzc2FnZShkZWNvZGVVUklDb21wb25lbnQobXNnLnVzZXIudXNlcl9uYW1lKSArIFwiIOWIh+aOieS6huOAilwiICsgbXNnLnNvbmcubmFtZSArIFwi44CLXCIsICcjZmY0NTAwJyk7XHJcblxyXG5cdFx0XHRcdFx0XHRicmVhaztcclxuXHRcdFx0XHRcdGNhc2UgJ2NoYXRfYmcnOlxyXG5cdFx0XHRcdFx0XHR0aGF0LmFkZFN5c3RlbU1lc3NhZ2UoZGVjb2RlVVJJQ29tcG9uZW50KG1zZy51c2VyLnVzZXJfbmFtZSkgKyBcIiDov5DmsJTlpKfniIblj5Es6Kem5Y+R5LqG54K55q2M6IOM5pmv5aKZ54m55pWIKDHlsI/ml7blhoXmkq3mlL7mrYzmm7Lml7bmnInmlYgpIVwiLCAnZ3JlZW4nLFxyXG5cdFx0XHRcdFx0XHRcdCcjZWVlJyk7XHJcblxyXG5cdFx0XHRcdFx0XHRicmVhaztcclxuXHRcdFx0XHRcdGNhc2UgJ3B1c2gnOlxyXG5cdFx0XHRcdFx0XHR0aGF0LmFkZFN5c3RlbU1lc3NhZ2UoZGVjb2RlVVJJQ29tcG9uZW50KG1zZy51c2VyLnVzZXJfbmFtZSkgKyBcIiDlsIbmrYzmm7Ig44CKXCIgKyBtc2cuc29uZy5uYW1lICsgXCLjgIsg6K6+5Li6572u6aG25YCZ5pKt5pS+XCIpO1xyXG5cclxuXHRcdFx0XHRcdFx0YnJlYWs7XHJcblx0XHRcdFx0XHRjYXNlICdyZW1vdmVTb25nJzpcclxuXHRcdFx0XHRcdFx0dGhhdC5hZGRTeXN0ZW1NZXNzYWdlKGRlY29kZVVSSUNvbXBvbmVudChtc2cudXNlci51c2VyX25hbWUpICsgXCIg5bCG5q2M5puyIOOAilwiICsgbXNnLnNvbmcubmFtZSArIFwi44CLIOS7jumYn+WIl+enu+mZpFwiKTtcclxuXHJcblx0XHRcdFx0XHRcdGJyZWFrO1xyXG5cdFx0XHRcdFx0Y2FzZSAncmVtb3ZlYmFuJzpcclxuXHRcdFx0XHRcdFx0dGhhdC5hZGRTeXN0ZW1NZXNzYWdlKGRlY29kZVVSSUNvbXBvbmVudChtc2cudXNlci51c2VyX25hbWUpICsgXCIg5bCGIFwiICsgZGVjb2RlVVJJQ29tcG9uZW50KG1zZy5iYW4udXNlcl9uYW1lKSArXHJcblx0XHRcdFx0XHRcdFx0XCIg6Kej56aBXCIpO1xyXG5cclxuXHRcdFx0XHRcdFx0YnJlYWs7XHJcblx0XHRcdFx0XHRjYXNlICdzaHV0ZG93bic6XHJcblx0XHRcdFx0XHRcdHRoYXQuYWRkU3lzdGVtTWVzc2FnZShkZWNvZGVVUklDb21wb25lbnQobXNnLnVzZXIudXNlcl9uYW1lKSArIFwiIOemgeatouS6hueUqOaItyBcIiArIGRlY29kZVVSSUNvbXBvbmVudChtc2cuYmFuLnVzZXJfbmFtZSkgK1xyXG5cdFx0XHRcdFx0XHRcdFwiIOWPkeiogFwiKTtcclxuXHJcblx0XHRcdFx0XHRcdGJyZWFrO1xyXG5cdFx0XHRcdFx0Y2FzZSAnc29uZ2Rvd24nOlxyXG5cdFx0XHRcdFx0XHR0aGF0LmFkZFN5c3RlbU1lc3NhZ2UoZGVjb2RlVVJJQ29tcG9uZW50KG1zZy51c2VyLnVzZXJfbmFtZSkgKyBcIiDnpoHmraLkuobnlKjmiLcgXCIgKyBkZWNvZGVVUklDb21wb25lbnQobXNnLmJhbi51c2VyX25hbWUpICtcclxuXHRcdFx0XHRcdFx0XHRcIiDngrnmrYxcIik7XHJcblxyXG5cdFx0XHRcdFx0XHRicmVhaztcclxuXHRcdFx0XHRcdGNhc2UgJ2JhY2snOlxyXG5cdFx0XHRcdFx0XHRmb3IgKGxldCBpID0gMDsgaSA8IHRoYXQuaGlzdG9yeUxpc3QubGVuZ3RoOyBpKyspIHtcclxuXHRcdFx0XHRcdFx0XHRpZiAodGhhdC5oaXN0b3J5TGlzdFtpXS5tZXNzYWdlX2lkID09IG1zZy5tZXNzYWdlX2lkKSB7XHJcblx0XHRcdFx0XHRcdFx0XHR0aGF0Lmhpc3RvcnlMaXN0LnNwbGljZShpLCAxKTtcclxuXHRcdFx0XHRcdFx0XHRcdGJyZWFrO1xyXG5cdFx0XHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0XHR0aGF0LmFkZFN5c3RlbU1lc3NhZ2UoZGVjb2RlVVJJQ29tcG9uZW50KG1zZy51c2VyLnVzZXJfbmFtZSkgKyBcIiDmkqTlm57kuobkuIDmnaHmtojmga9cIik7XHJcblxyXG5cdFx0XHRcdFx0XHRicmVhaztcclxuXHRcdFx0XHRcdGNhc2UgJ3BsYXlTb25nJzpcclxuXHRcdFx0XHRcdFx0dGhhdC5tdXNpY05vdExpa2UgPSBmYWxzZTtcclxuXHRcdFx0XHRcdFx0dGhhdC5wbGF5TXVzaWMobXNnKTtcclxuXHRcdFx0XHRcdFx0aWYgKG1zZy51c2VyLnVzZXJfaWQgPT0gdGhhdC51c2VySW5mby51c2VyX2lkKSB7XHJcblx0XHRcdFx0XHRcdFx0cGx1cy5wdXNoLmNyZWF0ZU1lc3NhZ2UoXCLkvaDngrnnmoTjgIpcIiArIG1zZy5zb25nLm5hbWUgKyBcIuOAiyhcIiArIG1zZy5zb25nLnNpbmdlciArIFwiKVwiLCAnJywge1xyXG5cdFx0XHRcdFx0XHRcdFx0dGl0bGU6IFwi5q2j5Zyo5pKt5pS+XCIsXHJcblx0XHRcdFx0XHRcdFx0fSk7XHJcblx0XHRcdFx0XHRcdH0gZWxzZSBpZiAobXNnLmF0LnVzZXJfaWQgPT0gdGhhdC51c2VySW5mby51c2VyX2lkKSB7XHJcblx0XHRcdFx0XHRcdFx0cGx1cy5wdXNoLmNyZWF0ZU1lc3NhZ2UoZGVjb2RlVVJJQ29tcG9uZW50KG1zZy51c2VyLnVzZXJfbmFtZSkgKyBcIiDpgIHnu5nkvaDnmoTjgIpcIiArIG1zZy5zb25nLm5hbWUgKyBcIuOAiyhcIiArIG1zZy5zb25nLnNpbmdlciArXHJcblx0XHRcdFx0XHRcdFx0XHRcIilcIiwgJycsIHtcclxuXHRcdFx0XHRcdFx0XHRcdFx0dGl0bGU6IFwi5q2j5Zyo5pKt5pS+XCIsXHJcblx0XHRcdFx0XHRcdFx0XHR9KTtcclxuXHRcdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0XHRicmVhaztcclxuXHRcdFx0XHRcdGRlZmF1bHQ6XHJcblx0XHRcdFx0fVxyXG5cdFx0XHR9LFxyXG5cdFx0XHRwbGF5TXVzaWMobXNnKSB7XHJcblx0XHRcdFx0bGV0IHRoYXQgPSB0aGlzO1xyXG5cdFx0XHRcdGlmICh0aGF0LnNvbmcuc29uZyAmJiB0aGF0LnNvbmcuc29uZy5taWQgPT0gbXNnLnNvbmcubWlkKSB7XHJcblx0XHRcdFx0XHRyZXR1cm47XHJcblx0XHRcdFx0fVxyXG5cdFx0XHRcdHRoYXQuc29uZyA9IG1zZztcclxuXHRcdFx0XHR0aGF0LmJnQXVkaW9NYW5uYWdlci50aXRsZSA9IG1zZy5zb25nLm5hbWUgKyBcIiAtIFwiICsgbXNnLnNvbmcuc2luZ2VyO1xyXG5cdFx0XHRcdHRoYXQuYmdBdWRpb01hbm5hZ2VyLnNpbmdlciA9IFwi54K55q2M5Lq6OlwiICsgZGVjb2RlVVJJQ29tcG9uZW50KG1zZy51c2VyLnVzZXJfbmFtZSkgKyAnICgnICsgdGhhdC5yb29tLnJvb21fbmFtZSArICcpJztcclxuXHRcdFx0XHR0aGF0LmJnQXVkaW9NYW5uYWdlci5jb3ZlckltZ1VybCA9IG1zZy5zb25nLnBpYztcclxuXHRcdFx0XHR0aGF0LmJnQXVkaW9NYW5uYWdlci5zcmMgPSBcImh0dHBzOi8vYXBpLmJiYnVnLmNvbS9hcGkvc29uZy9wbGF5dXJsP21pZD1cIiArIG1zZy5zb25nLm1pZDtcclxuXHRcdFx0XHR0aGF0LmJnQXVkaW9NYW5uYWdlci5wbGF5KCk7XHJcblx0XHRcdH0sXHJcblx0XHRcdHNlbmRFbW9qaShpbmRleCkge1xyXG5cdFx0XHRcdGxldCB0aGF0ID0gdGhpcztcclxuXHRcdFx0XHRsZXQgdXJsID0gXCJodHRwczovL2Nkbi5iYmJ1Zy5jb20vaW1hZ2VzL2Vtb2ppL1wiICsgaW5kZXggKyBcIi5wbmdcIjtcclxuXHRcdFx0XHR0aGF0LmFwcC5yZXF1ZXN0KHtcclxuXHRcdFx0XHRcdHVybDogXCJtZXNzYWdlL3NlbmRcIixcclxuXHRcdFx0XHRcdGRhdGE6IHtcclxuXHRcdFx0XHRcdFx0d2hlcmU6ICdjaGFubmVsJyxcclxuXHRcdFx0XHRcdFx0dG86IHRoYXQucm9vbV9pZCxcclxuXHRcdFx0XHRcdFx0dHlwZTogJ2ltZycsXHJcblx0XHRcdFx0XHRcdG1zZzogdXJsLFxyXG5cdFx0XHRcdFx0XHRyZXNvdXJjZTogdXJsLFxyXG5cdFx0XHRcdFx0fSxcclxuXHRcdFx0XHRcdHN1Y2Nlc3MocmVzKSB7XHJcblx0XHRcdFx0XHRcdHRoYXQuc2hvd0Vtb2ppQm94ID0gZmFsc2U7XHJcblx0XHRcdFx0XHR9XHJcblx0XHRcdFx0fSk7XHJcblx0XHRcdH0sXHJcblx0XHRcdGRvU2VuZE1lc3NhZ2UoZSkge1xyXG5cdFx0XHRcdGxldCB0aGF0ID0gdGhpcztcclxuXHRcdFx0XHRsZXQgbWVzc2FnZV9vbGQgPSB0aGF0Lm1lc3NhZ2VPYmoubWVzc2FnZTtcclxuXHRcdFx0XHRsZXQgbWVzc2FnZSA9IG1lc3NhZ2Vfb2xkO1xyXG5cdFx0XHRcdHRoYXQubWVzc2FnZU9iai5tZXNzYWdlID0gJyc7XHJcblx0XHRcdFx0aWYgKG1lc3NhZ2Vfb2xkKSB7XHJcblx0XHRcdFx0XHRpZiAodGhhdC5tZXNzYWdlT2JqLmF0KSB7XHJcblx0XHRcdFx0XHRcdG1lc3NhZ2UgPSBtZXNzYWdlX29sZC5yZXBsYWNlKFwiQFwiICsgZGVjb2RlVVJJQ29tcG9uZW50KHRoYXQubWVzc2FnZU9iai5hdC51c2VyX25hbWUpLFxyXG5cdFx0XHRcdFx0XHRcdCcnKTtcclxuXHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdHRoYXQuYXBwLnJlcXVlc3Qoe1xyXG5cdFx0XHRcdFx0XHR1cmw6IFwibWVzc2FnZS9zZW5kXCIsXHJcblx0XHRcdFx0XHRcdGRhdGE6IHtcclxuXHRcdFx0XHRcdFx0XHR0eXBlOiAndGV4dCcsXHJcblx0XHRcdFx0XHRcdFx0d2hlcmU6IFwiY2hhbm5lbFwiLFxyXG5cdFx0XHRcdFx0XHRcdHRvOiB0aGF0LnJvb21faWQsXHJcblx0XHRcdFx0XHRcdFx0bXNnOiBlbmNvZGVVUklDb21wb25lbnQobWVzc2FnZSksXHJcblx0XHRcdFx0XHRcdFx0YXQ6IHRoYXQubWVzc2FnZU9iai5hdFxyXG5cdFx0XHRcdFx0XHR9LFxyXG5cdFx0XHRcdFx0XHRzdWNjZXNzOiBmdW5jdGlvbihyZXMpIHtcclxuXHRcdFx0XHRcdFx0XHR0aGF0Lm1lc3NhZ2VPYmouYXQgPSBmYWxzZTtcclxuXHRcdFx0XHRcdFx0fSxcclxuXHRcdFx0XHRcdFx0ZXJyb3I6IGZ1bmN0aW9uKHJlcykge1xyXG5cdFx0XHRcdFx0XHRcdHRoYXQubWVzc2FnZU9iai5tZXNzYWdlID0gbWVzc2FnZV9vbGQ7XHJcblx0XHRcdFx0XHRcdFx0dW5pLnNob3dNb2RhbCh7XHJcblx0XHRcdFx0XHRcdFx0XHR0aXRsZTogJ+WPkemAgeWksei0pScsXHJcblx0XHRcdFx0XHRcdFx0XHRjb250ZW50OiByZXMubXNnLFxyXG5cdFx0XHRcdFx0XHRcdFx0c2hvd0NhbmNlbDogZmFsc2VcclxuXHRcdFx0XHRcdFx0XHR9KTtcclxuXHRcdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0fSk7XHJcblx0XHRcdFx0fVxyXG5cdFx0XHR9LFxyXG5cdFx0XHRyYW5kb21TdHJpbmcobGVuKSB7XHJcblx0XHRcdFx0bGVuID0gbGVuIHx8IDMyO1xyXG5cdFx0XHRcdHZhciAkY2hhcnMgPSAnQUJDREVGR0hKS01OUFFSU1RXWFlaYWJjZGVmaGlqa21ucHJzdHd4eXoyMzQ1Njc4JzsgLyoqKirpu5jorqTljrvmjonkuoblrrnmmJPmt7fmt4bnmoTlrZfnrKZvT0xsLDlncSxWdixVdSxJMSoqKiovXHJcblx0XHRcdFx0dmFyIG1heFBvcyA9ICRjaGFycy5sZW5ndGg7XHJcblx0XHRcdFx0dmFyIHB3ZCA9ICcnO1xyXG5cdFx0XHRcdGZvciAoaSA9IDA7IGkgPCBsZW47IGkrKykge1xyXG5cdFx0XHRcdFx0cHdkICs9ICRjaGFycy5jaGFyQXQoTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogbWF4UG9zKSk7XHJcblx0XHRcdFx0fVxyXG5cdFx0XHRcdHJldHVybiBwd2Q7XHJcblx0XHRcdH0sXHJcblx0XHRcdGFkZE1lc3NhZ2VUb0xpc3QobXNnKSB7XHJcblx0XHRcdFx0bGV0IHRoYXQgPSB0aGlzO1xyXG5cdFx0XHRcdGlmICh0aGF0Lmhpc3RvcnlMaXN0Lmxlbmd0aCA+IDEwMCkge1xyXG5cdFx0XHRcdFx0dGhhdC5oaXN0b3J5TGlzdC5zaGlmdCgpO1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0XHR0aGF0Lmhpc3RvcnlMaXN0LnB1c2gobXNnKTtcclxuXHJcblx0XHRcdFx0dGhhdC5hdXRvU2Nyb2xsKCk7XHJcblx0XHRcdH0sXHJcblx0XHRcdHVybGRlY29kZShzdHIpIHtcclxuXHRcdFx0XHRyZXR1cm4gZGVjb2RlVVJJQ29tcG9uZW50KHN0cik7XHJcblx0XHRcdH0sXHJcblx0XHRcdGNvbm5lY3RXZWJzb2NrZXQoKSB7XHJcblx0XHRcdFx0bGV0IHRoYXQgPSB0aGlzO1xyXG5cdFx0XHRcdGlmICh0aGF0LmFwcC53ZWJTb2NrZXQuaXNDb25uZWN0ZWQpIHtcclxuXHRcdFx0XHRcdGNvbnNvbGUubG9nKFwi6ZyA6KaB5pa36ZaLXCIpXHJcblx0XHRcdFx0XHR0aGF0LmFwcC53ZWJTb2NrZXQuY2xvc2VXc3MoKTtcclxuXHRcdFx0XHRcdHNldFRpbWVvdXQoZnVuY3Rpb24oKSB7XHJcblx0XHRcdFx0XHRcdHRoYXQuY29ubmVjdFdlYnNvY2tldCgpO1xyXG5cdFx0XHRcdFx0fSwgMTAwMCk7XHJcblx0XHRcdFx0XHRyZXR1cm47XHJcblx0XHRcdFx0fVxyXG5cdFx0XHRcdHRoYXQuYXBwLndlYlNvY2tldC5jb25uZWN0V3NzKCk7XHJcblx0XHRcdFx0dW5pLmhpZGVMb2FkaW5nKCk7XHJcblx0XHRcdFx0dGhhdC5hZGRTeXN0ZW1NZXNzYWdlKHRoYXQucm9vbS5yb29tX25vdGljZSB8fCAn5pyN5Yqh5Zmo6L+e5o6l5oiQ5YqfJyk7XHJcblx0XHRcdFx0dGhhdC5zaG93UGFzc3dvcmRGb3JtID0gZmFsc2U7XHJcblx0XHRcdFx0dGhhdC5zaG93Um9vbVBhZ2UgPSB0cnVlO1xyXG5cdFx0XHRcdHRoYXQuYXBwLnJlcXVlc3Qoe1xyXG5cdFx0XHRcdFx0dXJsOiAnbWVzc2FnZS9nZXRNZXNzYWdlTGlzdCcsXHJcblx0XHRcdFx0XHRkYXRhOiB7XHJcblx0XHRcdFx0XHRcdHJvb21faWQ6IHRoYXQucm9vbV9pZCxcclxuXHRcdFx0XHRcdFx0cGVyX3BhZ2U6IDEwMCxcclxuXHRcdFx0XHRcdH0sXHJcblx0XHRcdFx0XHRzdWNjZXNzOiBmdW5jdGlvbihyZXMpIHtcclxuXHRcdFx0XHRcdFx0dGhhdC5oaXN0b3J5TGlzdCA9IFtdO1xyXG5cdFx0XHRcdFx0XHRmb3IgKGxldCBpID0gMDsgaSA8IHJlcy5kYXRhLmxlbmd0aDsgaSsrKSB7XHJcblx0XHRcdFx0XHRcdFx0bGV0IF9vYmogPSBmYWxzZTtcclxuXHRcdFx0XHRcdFx0XHR0cnkge1xyXG5cdFx0XHRcdFx0XHRcdFx0X29iaiA9IEpTT04ucGFyc2UoZGVjb2RlVVJJQ29tcG9uZW50KHJlcy5kYXRhW2ldLm1lc3NhZ2VfY29udGVudCkpO1xyXG5cdFx0XHRcdFx0XHRcdH0gY2F0Y2ggKGVycm9yKSB7fVxyXG5cdFx0XHRcdFx0XHRcdGlmICghX29iaikge1xyXG5cdFx0XHRcdFx0XHRcdFx0Y29udGludWU7XHJcblx0XHRcdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0XHRcdGlmIChfb2JqLnR5cGUgPT0gXCJ0ZXh0XCIpIHtcclxuXHRcdFx0XHRcdFx0XHRcdGlmIChfb2JqLmF0KSB7XHJcblx0XHRcdFx0XHRcdFx0XHRcdF9vYmouY29udGVudCA9ICdAJyArIF9vYmouYXQudXNlcl9uYW1lICsgXCIgXCIgKyBfb2JqLmNvbnRlbnQ7XHJcblx0XHRcdFx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0XHRcdF9vYmoudGltZSA9IHJlcy5kYXRhW2ldLm1lc3NhZ2VfY3JlYXRldGltZTtcclxuXHRcdFx0XHRcdFx0XHR0aGF0Lmhpc3RvcnlMaXN0LnVuc2hpZnQoX29iaik7XHJcblx0XHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdFx0dGhhdC5hZGRTeXN0ZW1NZXNzYWdlKHRoYXQucm9vbS5yb29tX25vdGljZSB8fCBcIuasoui/juadpeWIsFwiICsgdGhhdC5yb29tLnJvb21fbmFtZSk7XHJcblx0XHRcdFx0XHRcdHRoYXQuYXV0b1Njcm9sbCgpO1xyXG5cdFx0XHRcdFx0fSxcclxuXHJcblx0XHRcdFx0XHRlcnJvcjogZnVuY3Rpb24ocmVzKSB7XHJcblx0XHRcdFx0XHRcdGNvbnNvbGUubG9nKHJlcyk7XHJcblx0XHRcdFx0XHR9XHJcblx0XHRcdFx0fSk7XHJcblxyXG5cdFx0XHR9LFxyXG5cdFx0XHRnZXRSb29tSW5mbygpIHtcclxuXHRcdFx0XHRsZXQgdGhhdCA9IHRoaXM7XHJcblx0XHRcdFx0dW5pLnNob3dMb2FkaW5nKHtcclxuXHRcdFx0XHRcdHRpdGxlOiAn6L+e5o6l5oi/6Ze05pyN5Yqh5ZmoJ1xyXG5cdFx0XHRcdH0pO1xyXG5cdFx0XHRcdHRoYXQuYXBwLnJlcXVlc3Qoe1xyXG5cdFx0XHRcdFx0dXJsOiAncm9vbS9nZXRSb29tSW5mbycsXHJcblx0XHRcdFx0XHRkYXRhOiB7XHJcblx0XHRcdFx0XHRcdHJvb21faWQ6IHRoYXQucm9vbV9pZCxcclxuXHRcdFx0XHRcdFx0cm9vbV9wYXNzd29yZDogdGhhdC5wYXNzd29yZFxyXG5cdFx0XHRcdFx0fSxcclxuXHRcdFx0XHRcdHN1Y2Nlc3MocmVzKSB7XHJcblx0XHRcdFx0XHRcdHRoYXQucm9vbSA9IHJlcy5kYXRhO1xyXG5cdFx0XHRcdFx0XHR1bmkuc2V0TmF2aWdhdGlvbkJhclRpdGxlKHtcclxuXHRcdFx0XHRcdFx0XHR0aXRsZTogdGhhdC5yb29tLnJvb21fbmFtZVxyXG5cdFx0XHRcdFx0XHR9KTtcclxuXHRcdFx0XHRcdFx0dGhhdC5hcHAucmVxdWVzdCh7XHJcblx0XHRcdFx0XHRcdFx0dXJsOiAncm9vbS9nZXRXZWJzb2NrZXRVcmwnLFxyXG5cdFx0XHRcdFx0XHRcdGRhdGE6IHtcclxuXHRcdFx0XHRcdFx0XHRcdGNoYW5uZWw6IHRoYXQucm9vbV9pZFxyXG5cdFx0XHRcdFx0XHRcdH0sXHJcblx0XHRcdFx0XHRcdFx0c3VjY2VzczogZnVuY3Rpb24ocmVzKSB7XHJcblx0XHRcdFx0XHRcdFx0XHR0aGF0LmFwcC53ZWJTb2NrZXQuY29uZmlnLndzc1VybCA9ICd3c3M6Ly93ZWJzb2NrZXQuYmJidWcuY29tLz9hY2NvdW50PScgK1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRyZXMuZGF0YS5hY2NvdW50ICsgJyZjaGFubmVsPScgK1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRyZXMuZGF0YS5jaGFubmVsICsgJyZ0aWNrZXQ9JyArIHJlcy5kYXRhLnRpY2tldDtcclxuXHRcdFx0XHRcdFx0XHRcdHRoYXQuY29ubmVjdFdlYnNvY2tldCgpO1xyXG5cdFx0XHRcdFx0XHRcdH0sXHJcblxyXG5cdFx0XHRcdFx0XHRcdGVycm9yOiBmdW5jdGlvbihyZXMpIHtcclxuXHRcdFx0XHRcdFx0XHRcdGNvbnNvbGUubG9nKHJlcyk7XHJcblx0XHRcdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0XHR9KTtcclxuXHRcdFx0XHRcdH0sXHJcblx0XHRcdFx0XHRlcnJvcihyZXMpIHtcclxuXHRcdFx0XHRcdFx0dW5pLmhpZGVMb2FkaW5nKCk7XHJcblx0XHRcdFx0XHRcdGlmIChyZXMuY29kZSA9PSA0MDMpIHtcclxuXHRcdFx0XHRcdFx0XHR1bmkuc2V0TmF2aWdhdGlvbkJhclRpdGxlKHtcclxuXHRcdFx0XHRcdFx0XHRcdHRpdGxlOiAn5a+G56CB5oi/J1xyXG5cdFx0XHRcdFx0XHRcdH0pO1xyXG5cdFx0XHRcdFx0XHRcdHRoYXQuc2hvd1Bhc3N3b3JkRm9ybSA9IHRydWU7XHJcblx0XHRcdFx0XHRcdFx0dGhhdC5zaG93Um9vbVBhZ2UgPSBmYWxzZTtcclxuXHRcdFx0XHRcdFx0XHRpZiAodGhhdC5wYXNzd29yZCkge1xyXG5cdFx0XHRcdFx0XHRcdFx0dW5pLnNob3dNb2RhbCh7XHJcblx0XHRcdFx0XHRcdFx0XHRcdHNob3dDYW5jZWw6IGZhbHNlLFxyXG5cdFx0XHRcdFx0XHRcdFx0XHR0aXRsZTogJ+i/m+WFpeWksei0pScsXHJcblx0XHRcdFx0XHRcdFx0XHRcdGNvbnRlbnQ6IHJlcy5tc2csXHJcblx0XHRcdFx0XHRcdFx0XHRcdHN1Y2Nlc3M6IGZ1bmN0aW9uKCkge31cclxuXHRcdFx0XHRcdFx0XHRcdH0pO1xyXG5cdFx0XHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdFx0fSBlbHNlIHtcclxuXHRcdFx0XHRcdFx0XHR1bmkuc2hvd01vZGFsKHtcclxuXHRcdFx0XHRcdFx0XHRcdHNob3dDYW5jZWw6IGZhbHNlLFxyXG5cdFx0XHRcdFx0XHRcdFx0dGl0bGU6ICfov5vlhaXlpLHotKUnLFxyXG5cdFx0XHRcdFx0XHRcdFx0Y29udGVudDogcmVzLm1zZyxcclxuXHRcdFx0XHRcdFx0XHRcdHN1Y2Nlc3M6IGZ1bmN0aW9uKCkge1xyXG5cdFx0XHRcdFx0XHRcdFx0XHR1bmkubmF2aWdhdGVCYWNrKCk7XHJcblx0XHRcdFx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHRcdFx0fSk7XHJcblx0XHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdH1cclxuXHRcdFx0XHR9KTtcclxuXHRcdFx0fSxcclxuXHRcdFx0YWRkU3lzdGVtTWVzc2FnZShtc2csIGNvbG9yID0gJyM5OTknLCBiZyA9ICd0YW5zcGFyZW50Jykge1xyXG5cdFx0XHRcdGxldCB0aGF0ID0gdGhpcztcclxuXHRcdFx0XHR0aGF0Lmhpc3RvcnlMaXN0LnB1c2goe1xyXG5cdFx0XHRcdFx0dHlwZTogXCJzeXN0ZW1cIixcclxuXHRcdFx0XHRcdGNvbnRlbnQ6IG1zZyxcclxuXHRcdFx0XHRcdGJnOiBiZyxcclxuXHRcdFx0XHRcdGNvbG9yOiBjb2xvclxyXG5cdFx0XHRcdH0pO1xyXG5cdFx0XHRcdHRoYXQuYXV0b1Njcm9sbCgpO1xyXG5cdFx0XHR9LFxyXG5cdFx0XHRkb09wZW5QYWdlKHBhZ2UpIHtcclxuXHRcdFx0XHRsZXQgdGhhdCA9IHRoaXM7XHJcblx0XHRcdFx0c3dpdGNoIChwYWdlKSB7XHJcblx0XHRcdFx0XHRjYXNlICdhZGRTb25nJzpcclxuXHRcdFx0XHRcdFx0dW5pLm5hdmlnYXRlVG8oe1xyXG5cdFx0XHRcdFx0XHRcdHVybDogJy4uL3Nvbmcvc2VhcmNoP3Jvb21faWQ9JyArIHRoYXQucm9vbV9pZFxyXG5cdFx0XHRcdFx0XHR9KTtcclxuXHRcdFx0XHRcdFx0YnJlYWs7XHJcblx0XHRcdFx0XHRjYXNlICdteVNvbmcnOlxyXG5cdFx0XHRcdFx0XHR1bmkubmF2aWdhdGVUbyh7XHJcblx0XHRcdFx0XHRcdFx0dXJsOiAnLi4vc29uZy9teT9yb29tX2lkPScgKyB0aGF0LnJvb21faWRcclxuXHRcdFx0XHRcdFx0fSk7XHJcblx0XHRcdFx0XHRcdGJyZWFrO1xyXG5cdFx0XHRcdFx0Y2FzZSAnc29uZ0xpc3QnOlxyXG5cdFx0XHRcdFx0XHR1bmkubmF2aWdhdGVUbyh7XHJcblx0XHRcdFx0XHRcdFx0dXJsOiAnLi4vc29uZy9saXN0P3Jvb21faWQ9JyArIHRoYXQucm9vbV9pZFxyXG5cdFx0XHRcdFx0XHR9KTtcclxuXHRcdFx0XHRcdFx0YnJlYWs7XHJcblx0XHRcdFx0XHRjYXNlICdvbkxpbmUnOlxyXG5cdFx0XHRcdFx0XHRsZXQgaXNNYXN0ZXIgPSAwO1xyXG5cdFx0XHRcdFx0XHRpZiAodGhhdC51c2VySW5mby51c2VyX2FkbWluIHx8IHRoYXQucm9vbS5yb29tX3VzZXIgPT0gdGhhdC51c2VySW5mby51c2VyX2lkKSB7XHJcblx0XHRcdFx0XHRcdFx0aXNNYXN0ZXIgPSAxO1xyXG5cdFx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHRcdHVuaS5uYXZpZ2F0ZVRvKHtcclxuXHRcdFx0XHRcdFx0XHR1cmw6ICcuLi9yb29tL29ubGluZT9yb29tX2lkPScgKyB0aGF0LnJvb21faWQgKyBcIiZyb29tX2FkbWluPVwiICsgaXNNYXN0ZXJcclxuXHRcdFx0XHRcdFx0fSk7XHJcblx0XHRcdFx0XHRcdGJyZWFrO1xyXG5cdFx0XHRcdFx0ZGVmYXVsdDpcclxuXHRcdFx0XHR9XHJcblx0XHRcdH0sXHJcblx0XHRcdHNob3dNZW51VXNlckhlYWQobXNnKSB7XHJcblx0XHRcdFx0bGV0IHVzZXIgPSBtc2cudXNlcjtcclxuXHRcdFx0XHRsZXQgdGhhdCA9IHRoaXM7XHJcblx0XHRcdFx0bGV0IG1lbnUgPSBbJ+i/m+WFpeS4u+mhtScsICdA5LiA5LiLVGEnLCAn6YCB5q2M57uZVGEnXTtcclxuXHRcdFx0XHRpZiAoKHRoYXQudXNlckluZm8udXNlcl9hZG1pbiB8fCB0aGF0LnJvb20ucm9vbV91c2VyID09IHRoYXQudXNlckluZm8udXNlcl9pZCkpIHtcclxuXHRcdFx0XHRcdG1lbnUgPSBbJ+i/m+WFpeS4u+mhtScsICdA5LiA5LiLVGEnLCAn6YCB5q2M57uZVGEnLCAn5pKk5Zue5raI5oGvJywgJ+emgeatoueCueatjCcsICfnpoHmraLlj5HoqIAnLCAn5YWo6YOo6Kej56aBJ107XHJcblx0XHRcdFx0fSBlbHNlIGlmICh1c2VyLnVzZXJfaWQgPT0gdGhhdC51c2VySW5mby51c2VyX2lkKSB7XHJcblx0XHRcdFx0XHQvL+WPkea2iOaBr+S6uuaYr+iHquW3sVxyXG5cdFx0XHRcdFx0bWVudSA9IFsn6L+b5YWl5Li76aG1JywgJ0DkuIDkuItUYScsICfpgIHmrYznu5lUYScsICfmkqTlm57mtojmga8nXTtcclxuXHRcdFx0XHR9IGVsc2Uge1xyXG5cdFx0XHRcdFx0Ly/lhbbku5bkurrnmoTmtojmga9cclxuXHRcdFx0XHRcdG1lbnUgPSBbJ+i/m+WFpeS4u+mhtScsICdA5LiA5LiLVGEnLCAn6YCB5q2M57uZVGEnXTtcclxuXHRcdFx0XHR9XHJcblxyXG5cdFx0XHRcdHVuaS5zaG93QWN0aW9uU2hlZXQoe1xyXG5cdFx0XHRcdFx0aXRlbUxpc3Q6IG1lbnUsXHJcblx0XHRcdFx0XHRzdWNjZXNzOiBmdW5jdGlvbihyZXMpIHtcclxuXHRcdFx0XHRcdFx0c3dpdGNoIChtZW51W3Jlcy50YXBJbmRleF0pIHtcclxuXHRcdFx0XHRcdFx0XHRjYXNlICfpgIHmrYznu5lUYSc6XHJcblx0XHRcdFx0XHRcdFx0XHR1bmkubmF2aWdhdGVUbyh7XHJcblx0XHRcdFx0XHRcdFx0XHRcdHVybDogJy4uL3Nvbmcvc2VhcmNoP3Jvb21faWQ9JyArIHRoYXQucm9vbV9pZCArIFwiJmF0PVwiICsgdXNlci51c2VyX2lkICsgXCImbmFtZT1cIiArIHVzZXIudXNlcl9uYW1lXHJcblx0XHRcdFx0XHRcdFx0XHR9KTtcclxuXHRcdFx0XHRcdFx0XHRcdGJyZWFrO1xyXG5cdFx0XHRcdFx0XHRcdGNhc2UgJ0DkuIDkuItUYSc6XHJcblx0XHRcdFx0XHRcdFx0XHR0aGF0LmRvQXRVc2VyKHVzZXIpO1xyXG5cdFx0XHRcdFx0XHRcdFx0YnJlYWs7XHJcblx0XHRcdFx0XHRcdFx0Y2FzZSAn5YWo6YOo6Kej56aBJzpcclxuXHRcdFx0XHRcdFx0XHRcdHRoYXQuYXBwLnJlcXVlc3Qoe1xyXG5cdFx0XHRcdFx0XHRcdFx0XHR1cmw6ICd1c2VyL3JlbW92ZWJhbicsXHJcblx0XHRcdFx0XHRcdFx0XHRcdGRhdGE6IHtcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRyb29tX2lkOiB0aGF0LnJvb21faWQsXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0dXNlcl9pZDogdXNlci51c2VyX2lkXHJcblx0XHRcdFx0XHRcdFx0XHRcdH0sXHJcblx0XHRcdFx0XHRcdFx0XHRcdGxvYWRpbmc6IFwi6Kej56aB5LitXCIsXHJcblx0XHRcdFx0XHRcdFx0XHRcdHN1Y2Nlc3M6IGZ1bmN0aW9uKHJlcykge1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdHVuaS5zaG93TW9kYWwoe1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0dGl0bGU6ICfop6PnpoHmiJDlip8nLFxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0Y29udGVudDogcmVzLm1zZyxcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdHNob3dDYW5jZWw6IGZhbHNlLFxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0c3VjY2VzczogZnVuY3Rpb24oKSB7fVxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdH0pO1xyXG5cdFx0XHRcdFx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHRcdFx0XHR9KTtcclxuXHRcdFx0XHRcdFx0XHRcdGJyZWFrO1xyXG5cdFx0XHRcdFx0XHRcdGNhc2UgJ+aSpOWbnua2iOaBryc6XHJcblx0XHRcdFx0XHRcdFx0XHRjb25zb2xlLmxvZyhtc2cpO1xyXG5cdFx0XHRcdFx0XHRcdFx0dGhhdC5hcHAucmVxdWVzdCh7XHJcblx0XHRcdFx0XHRcdFx0XHRcdHVybDogXCJtZXNzYWdlL2JhY2tcIixcclxuXHRcdFx0XHRcdFx0XHRcdFx0ZGF0YToge1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdG1lc3NhZ2VfaWQ6IG1zZy5tZXNzYWdlX2lkLFxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdHJvb21faWQ6IHRoYXQucm9vbV9pZFxyXG5cdFx0XHRcdFx0XHRcdFx0XHR9LFxyXG5cdFx0XHRcdFx0XHRcdFx0XHRzdWNjZXNzKCkge31cclxuXHRcdFx0XHRcdFx0XHRcdH0pO1xyXG5cdFx0XHRcdFx0XHRcdFx0YnJlYWs7XHJcblx0XHRcdFx0XHRcdFx0Y2FzZSAn56aB5q2i5Y+R6KiAJzpcclxuXHRcdFx0XHRcdFx0XHRcdHRoYXQuYXBwLnJlcXVlc3Qoe1xyXG5cdFx0XHRcdFx0XHRcdFx0XHR1cmw6ICd1c2VyL3NodXRkb3duJyxcclxuXHRcdFx0XHRcdFx0XHRcdFx0ZGF0YToge1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdHJvb21faWQ6IHRoYXQucm9vbV9pZCxcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHR1c2VyX2lkOiB1c2VyLnVzZXJfaWRcclxuXHRcdFx0XHRcdFx0XHRcdFx0fSxcclxuXHRcdFx0XHRcdFx0XHRcdFx0bG9hZGluZzogXCLnpoHoqIDkuK1cIixcclxuXHRcdFx0XHRcdFx0XHRcdFx0c3VjY2VzczogZnVuY3Rpb24ocmVzKSB7XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0dW5pLnNob3dNb2RhbCh7XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHR0aXRsZTogJ+emgeiogOaIkOWKnycsXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRjb250ZW50OiByZXMubXNnLFxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0c2hvd0NhbmNlbDogZmFsc2UsXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRzdWNjZXNzOiBmdW5jdGlvbigpIHt9XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0fSk7XHJcblx0XHRcdFx0XHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdFx0XHRcdH0pO1xyXG5cdFx0XHRcdFx0XHRcdFx0YnJlYWs7XHJcblx0XHRcdFx0XHRcdFx0Y2FzZSAn56aB5q2i54K55q2MJzpcclxuXHRcdFx0XHRcdFx0XHRcdHRoYXQuYXBwLnJlcXVlc3Qoe1xyXG5cdFx0XHRcdFx0XHRcdFx0XHR1cmw6ICd1c2VyL3Nvbmdkb3duJyxcclxuXHRcdFx0XHRcdFx0XHRcdFx0ZGF0YToge1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdHJvb21faWQ6IHRoYXQucm9vbV9pZCxcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHR1c2VyX2lkOiB1c2VyLnVzZXJfaWRcclxuXHRcdFx0XHRcdFx0XHRcdFx0fSxcclxuXHRcdFx0XHRcdFx0XHRcdFx0bG9hZGluZzogXCLnpoHmrYzkuK1cIixcclxuXHRcdFx0XHRcdFx0XHRcdFx0c3VjY2VzczogZnVuY3Rpb24ocmVzKSB7XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0dW5pLnNob3dNb2RhbCh7XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHR0aXRsZTogJ+emgeatjOaIkOWKnycsXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRjb250ZW50OiByZXMubXNnLFxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0c2hvd0NhbmNlbDogZmFsc2UsXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRzdWNjZXNzOiBmdW5jdGlvbigpIHt9XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0fSk7XHJcblx0XHRcdFx0XHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdFx0XHRcdH0pO1xyXG5cdFx0XHRcdFx0XHRcdFx0YnJlYWs7XHJcblx0XHRcdFx0XHRcdFx0ZGVmYXVsdDpcclxuXHRcdFx0XHRcdFx0XHRcdHVuaS5zaG93TW9kYWwoe1xyXG5cdFx0XHRcdFx0XHRcdFx0XHR0aXRsZTogXCJCQkJVR1wiLFxyXG5cdFx0XHRcdFx0XHRcdFx0XHRjb250ZW50OiBtZW51W3Jlcy50YXBJbmRleF0gKyBcIuWNs+WwhuS4iue6v1wiLFxyXG5cdFx0XHRcdFx0XHRcdFx0XHRzaG93Q2FuY2VsOiBmYWxzZVxyXG5cdFx0XHRcdFx0XHRcdFx0fSk7XHJcblx0XHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdH1cclxuXHRcdFx0XHR9KTtcclxuXHRcdFx0fSxcclxuXHRcdFx0Z2V0U3RhdGljVXJsKHVybCkge1xyXG5cdFx0XHRcdGlmICh1cmwuaW5kZXhPZignaHR0cHM6Ly8nKSA+IC0xIHx8IHVybC5pbmRleE9mKCdodHRwOi8vJykgPiAtMSkge1xyXG5cdFx0XHRcdFx0cmV0dXJuIHVybDtcclxuXHRcdFx0XHR9IGVsc2Uge1xyXG5cdFx0XHRcdFx0cmV0dXJuICdodHRwczovL2Nkbi5iYmJ1Zy5jb20vdXBsb2Fkcy8nICsgdXJsO1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0fSxcclxuXHRcdFx0ZG9Ub3VjaCh1c2VyKSB7XHJcblx0XHRcdFx0bGV0IHRoYXQgPSB0aGlzO1xyXG5cdFx0XHRcdHRoYXQucmVxdWVzdCh7XHJcblx0XHRcdFx0XHR1cmw6IFwibWVzc2FnZS90b3VjaFwiLFxyXG5cdFx0XHRcdFx0ZGF0YToge1xyXG5cdFx0XHRcdFx0XHRhdDogdXNlci51c2VyX2lkLFxyXG5cdFx0XHRcdFx0XHRyb29tX2lkOiB0aGF0LnJvb21faWRcclxuXHRcdFx0XHRcdH0sXHJcblx0XHRcdFx0XHRzdWNjZXNzKHJlcykge31cclxuXHRcdFx0XHR9KTtcclxuXHRcdFx0fSxcclxuXHRcdFx0Y2hvb3NlSW1hZ2UoKSB7XHJcblx0XHRcdFx0bGV0IHRoYXQgPSB0aGlzO1xyXG5cdFx0XHRcdHVuaS5jaG9vc2VJbWFnZSh7XHJcblx0XHRcdFx0XHRzaXplVHlwZTogXCJjb21wcmVzc2VkXCIsXHJcblx0XHRcdFx0XHRzb3VyY2VUeXBlOiBbJ2FsYnVtJ10sXHJcblx0XHRcdFx0XHRjb3VudDogMSxcclxuXHRcdFx0XHRcdGZhaWw6IGZ1bmN0aW9uKHJlcykge1xyXG5cdFx0XHRcdFx0XHRjb25zb2xlLmxvZyhyZXMpO1xyXG5cdFx0XHRcdFx0fSxcclxuXHRcdFx0XHRcdHN1Y2Nlc3M6IGZ1bmN0aW9uKHJlcykge1xyXG5cdFx0XHRcdFx0XHR1bmkuc2hvd0xvYWRpbmcoe1xyXG5cdFx0XHRcdFx0XHRcdHRpdGxlOiAn5aSE55CG5LitJ1xyXG5cdFx0XHRcdFx0XHR9KTtcclxuXHRcdFx0XHRcdFx0dW5pLmNvbXByZXNzSW1hZ2Uoe1xyXG5cdFx0XHRcdFx0XHRcdHNyYzogcmVzLnRlbXBGaWxlUGF0aHNbMF0sXHJcblx0XHRcdFx0XHRcdFx0cXVhbGl0eTogNTAsXHJcblx0XHRcdFx0XHRcdFx0c3VjY2VzczogZnVuY3Rpb24ocmVzKSB7XHJcblx0XHRcdFx0XHRcdFx0XHR1bmkudXBsb2FkRmlsZSh7XHJcblx0XHRcdFx0XHRcdFx0XHRcdHVybDogdGhhdC5hcHAuZ2xvYmFsRGF0YS5yZXF1ZXN0LmFwaVVybCArIFwiYXR0YWNoL3VwbG9hZGltYWdlXCIsXHJcblx0XHRcdFx0XHRcdFx0XHRcdGZpbGVQYXRoOiByZXMudGVtcEZpbGVQYXRoLFxyXG5cdFx0XHRcdFx0XHRcdFx0XHRuYW1lOiAnZmlsZScsXHJcblx0XHRcdFx0XHRcdFx0XHRcdGZvcm1EYXRhOiB0aGF0LmFwcC5nbG9iYWxEYXRhLnJlcXVlc3QuYmFzZURhdGEsXHJcblx0XHRcdFx0XHRcdFx0XHRcdHN1Y2Nlc3M6IGZ1bmN0aW9uKHVwbG9hZEZpbGVSZXMpIHtcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHR1bmkuaGlkZUxvYWRpbmcoKTtcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRsZXQgcmVzcG9uc2UgPSB7fTtcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHR0cnkge1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0cmVzcG9uc2UgPSBKU09OLnBhcnNlKHVwbG9hZEZpbGVSZXMuZGF0YSk7XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0fSBjYXRjaCAoZXJyKSB7XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHR1bmkuc2hvd01vZGFsKHtcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0c2hvd0NhbmNlbDogZmFsc2UsXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdHRpdGxlOiAn5LiK5Lyg5aSx6LSlJyxcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0Y29udGVudDogJ+acjeWKoeWZqOWPkeeUn+mUmeivrycsXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdHN1Y2Nlc3M6IGZ1bmN0aW9uKCkge31cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdH0pO1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRpZiAocmVzcG9uc2UuY29kZSA9PSAyMDApIHtcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdHRoYXQuYXBwLnJlcXVlc3Qoe1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHR1cmw6IFwibWVzc2FnZS9zZW5kXCIsXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdGRhdGE6IHtcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHR3aGVyZTogJ2NoYW5uZWwnLFxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdHRvOiB0aGF0LnJvb21faWQsXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0dHlwZTogJ2ltZycsXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0bXNnOiByZXNwb25zZS5kYXRhLmF0dGFjaF90aHVtYixcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRyZXNvdXJjZTogcmVzcG9uc2UuZGF0YS5hdHRhY2hfcGF0aCxcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0fSxcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0c3VjY2VzczogZnVuY3Rpb24ocmVzKSB7fSxcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0ZXJyb3I6IGZ1bmN0aW9uKHJlcykge1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdHRoYXQubWVzc2FnZU9iai5tZXNzYWdlID0gbWVzc2FnZV9vbGQ7XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0dW5pLnNob3dNb2RhbCh7XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHR0aXRsZTogJ+WPkemAgeWksei0pScsXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRjb250ZW50OiByZXMubXNnLFxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0c2hvd0NhbmNlbDogZmFsc2VcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHR9KTtcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0fSk7XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0fSBlbHNlIHtcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdHVuaS5zaG93TW9kYWwoe1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRzaG93Q2FuY2VsOiBmYWxzZSxcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0dGl0bGU6ICfkuIrkvKDlpLHotKUnLFxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRjb250ZW50OiByZXNwb25zZS5tc2csXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdHN1Y2Nlc3M6IGZ1bmN0aW9uKCkge31cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdH0pO1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0XHRcdFx0fSk7XHJcblx0XHRcdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0XHR9KVxyXG5cdFx0XHRcdFx0fVxyXG5cdFx0XHRcdH0pO1xyXG5cdFx0XHR9LFxyXG5cdFx0XHRmdWxsVmlld0ltYWdlKHVybCkge1xyXG5cdFx0XHRcdHVuaS5wcmV2aWV3SW1hZ2Uoe1xyXG5cdFx0XHRcdFx0dXJsczogW3VybF0sXHJcblx0XHRcdFx0XHRsb25nUHJlc3NBY3Rpb25zOiB7XHJcblx0XHRcdFx0XHRcdGl0ZW1MaXN0OiBbJ+S/neWtmOWbvueJhycsICfkuL7miqXlm77niYcnXSxcclxuXHRcdFx0XHRcdFx0c3VjY2VzczogZnVuY3Rpb24oZGF0YSkge30sXHJcblx0XHRcdFx0XHRcdGZhaWw6IGZ1bmN0aW9uKGVycikge31cclxuXHRcdFx0XHRcdH1cclxuXHRcdFx0XHR9KTtcclxuXHRcdFx0fVxyXG5cdFx0fVxyXG5cdH1cclxuPC9zY3JpcHQ+XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///8\n");

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
/*!********************************************************************************************************************!*\
  !*** /Users/Hamm/Code/UniAppProjects/BBBUG APP/pages/index/index.nvue?vue&type=style&index=0&lang=css&mpType=page ***!
  \********************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_0_1_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_0_2_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_0_3_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_index_nvue_vue_type_style_index_0_lang_css_mpType_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-hbuilderx/packages/webpack-uni-nvue-loader/lib/style.js!../../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--8-oneOf-0-1!../../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/postcss-loader/src??ref--8-oneOf-0-2!../../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--8-oneOf-0-3!../../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./index.nvue?vue&type=style&index=0&lang=css&mpType=page */ 11);
/* harmony import */ var _Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_0_1_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_0_2_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_0_3_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_index_nvue_vue_type_style_index_0_lang_css_mpType_page__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_0_1_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_0_2_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_0_3_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_index_nvue_vue_type_style_index_0_lang_css_mpType_page__WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_0_1_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_0_2_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_0_3_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_index_nvue_vue_type_style_index_0_lang_css_mpType_page__WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_0_1_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_0_2_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_0_3_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_index_nvue_vue_type_style_index_0_lang_css_mpType_page__WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_0_1_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_0_2_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_0_3_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_index_nvue_vue_type_style_index_0_lang_css_mpType_page__WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),
/* 11 */
/*!******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-hbuilderx/packages/webpack-uni-nvue-loader/lib/style.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--8-oneOf-0-1!./node_modules/postcss-loader/src??ref--8-oneOf-0-2!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--8-oneOf-0-3!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!/Users/Hamm/Code/UniAppProjects/BBBUG APP/pages/index/index.nvue?vue&type=style&index=0&lang=css&mpType=page ***!
  \******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
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