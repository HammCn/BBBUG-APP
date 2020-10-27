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
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _index_nvue_vue_type_template_id_7b909402_mpType_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.nvue?vue&type=template&id=7b909402&mpType=page */ 5);\n/* harmony import */ var _index_nvue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index.nvue?vue&type=script&lang=js&mpType=page */ 7);\n/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _index_nvue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_1__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _index_nvue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_1__[key]; }) }(__WEBPACK_IMPORT_KEY__));\n/* harmony import */ var _Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/runtime/componentNormalizer.js */ 10);\n\nvar renderjs\n\n\nfunction injectStyles (context) {\n  \n  if(!this.options.style){\n          this.options.style = {}\n      }\n      if(Vue.prototype.__merge_style && Vue.prototype.__$appStyle__){\n        Vue.prototype.__merge_style(Vue.prototype.__$appStyle__, this.options.style)\n      }\n      if(Vue.prototype.__merge_style){\n                Vue.prototype.__merge_style(__webpack_require__(/*! ./index.nvue?vue&type=style&index=0&lang=css&mpType=page */ 11).default, this.options.style)\n            }else{\n                Object.assign(this.options.style,__webpack_require__(/*! ./index.nvue?vue&type=style&index=0&lang=css&mpType=page */ 11).default)\n            }\n\n}\n\n/* normalize component */\n\nvar component = Object(_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(\n  _index_nvue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_1__[\"default\"],\n  _index_nvue_vue_type_template_id_7b909402_mpType_page__WEBPACK_IMPORTED_MODULE_0__[\"render\"],\n  _index_nvue_vue_type_template_id_7b909402_mpType_page__WEBPACK_IMPORTED_MODULE_0__[\"staticRenderFns\"],\n  false,\n  null,\n  null,\n  \"e0aaa326\",\n  false,\n  _index_nvue_vue_type_template_id_7b909402_mpType_page__WEBPACK_IMPORTED_MODULE_0__[\"components\"],\n  renderjs\n)\n\ninjectStyles.call(component)\ncomponent.options.__file = \"pages/index/index.nvue\"\n/* harmony default export */ __webpack_exports__[\"default\"] = (component.exports);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbbnVsbF0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBOEg7QUFDOUg7QUFDcUU7QUFDTDtBQUNoRTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDRDQUE0QyxtQkFBTyxDQUFDLGtFQUEwRDtBQUM5RyxhQUFhO0FBQ2IsaURBQWlELG1CQUFPLENBQUMsa0VBQTBEO0FBQ25IOztBQUVBOztBQUVBO0FBQ2dOO0FBQ2hOLGdCQUFnQixpTkFBVTtBQUMxQixFQUFFLHVGQUFNO0FBQ1IsRUFBRSw0RkFBTTtBQUNSLEVBQUUscUdBQWU7QUFDakI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUUsZ0dBQVU7QUFDWjtBQUNBOztBQUVBO0FBQ0E7QUFDZSxnRiIsImZpbGUiOiI0LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnMsIHJlY3ljbGFibGVSZW5kZXIsIGNvbXBvbmVudHMgfSBmcm9tIFwiLi9pbmRleC5udnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTdiOTA5NDAyJm1wVHlwZT1wYWdlXCJcbnZhciByZW5kZXJqc1xuaW1wb3J0IHNjcmlwdCBmcm9tIFwiLi9pbmRleC5udnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJm1wVHlwZT1wYWdlXCJcbmV4cG9ydCAqIGZyb20gXCIuL2luZGV4Lm52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmbXBUeXBlPXBhZ2VcIlxuZnVuY3Rpb24gaW5qZWN0U3R5bGVzIChjb250ZXh0KSB7XG4gIFxuICBpZighdGhpcy5vcHRpb25zLnN0eWxlKXtcbiAgICAgICAgICB0aGlzLm9wdGlvbnMuc3R5bGUgPSB7fVxuICAgICAgfVxuICAgICAgaWYoVnVlLnByb3RvdHlwZS5fX21lcmdlX3N0eWxlICYmIFZ1ZS5wcm90b3R5cGUuX18kYXBwU3R5bGVfXyl7XG4gICAgICAgIFZ1ZS5wcm90b3R5cGUuX19tZXJnZV9zdHlsZShWdWUucHJvdG90eXBlLl9fJGFwcFN0eWxlX18sIHRoaXMub3B0aW9ucy5zdHlsZSlcbiAgICAgIH1cbiAgICAgIGlmKFZ1ZS5wcm90b3R5cGUuX19tZXJnZV9zdHlsZSl7XG4gICAgICAgICAgICAgICAgVnVlLnByb3RvdHlwZS5fX21lcmdlX3N0eWxlKHJlcXVpcmUoXCIuL2luZGV4Lm52dWU/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MCZsYW5nPWNzcyZtcFR5cGU9cGFnZVwiKS5kZWZhdWx0LCB0aGlzLm9wdGlvbnMuc3R5bGUpXG4gICAgICAgICAgICB9ZWxzZXtcbiAgICAgICAgICAgICAgICBPYmplY3QuYXNzaWduKHRoaXMub3B0aW9ucy5zdHlsZSxyZXF1aXJlKFwiLi9pbmRleC5udnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmbGFuZz1jc3MmbXBUeXBlPXBhZ2VcIikuZGVmYXVsdClcbiAgICAgICAgICAgIH1cblxufVxuXG4vKiBub3JtYWxpemUgY29tcG9uZW50ICovXG5pbXBvcnQgbm9ybWFsaXplciBmcm9tIFwiIS4uLy4uLy4uLy4uLy4uLy4uLy4uL0FwcGxpY2F0aW9ucy9IQnVpbGRlclguYXBwL0NvbnRlbnRzL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL0BkY2xvdWRpby92dWUtY2xpLXBsdWdpbi11bmkvcGFja2FnZXMvdnVlLWxvYWRlci9saWIvcnVudGltZS9jb21wb25lbnROb3JtYWxpemVyLmpzXCJcbnZhciBjb21wb25lbnQgPSBub3JtYWxpemVyKFxuICBzY3JpcHQsXG4gIHJlbmRlcixcbiAgc3RhdGljUmVuZGVyRm5zLFxuICBmYWxzZSxcbiAgbnVsbCxcbiAgbnVsbCxcbiAgXCJlMGFhYTMyNlwiLFxuICBmYWxzZSxcbiAgY29tcG9uZW50cyxcbiAgcmVuZGVyanNcbilcblxuaW5qZWN0U3R5bGVzLmNhbGwoY29tcG9uZW50KVxuY29tcG9uZW50Lm9wdGlvbnMuX19maWxlID0gXCJwYWdlcy9pbmRleC9pbmRleC5udnVlXCJcbmV4cG9ydCBkZWZhdWx0IGNvbXBvbmVudC5leHBvcnRzIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///4\n");

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
                      attrs: {
                        id: "historyList",
                        scrollY: "true",
                        scrollWithAnimation: true,
                        scrollTop: _vm.scrollTop
                      },
                      on: { click: _vm.historyClicked }
                    },
                    [
                      _c(
                        "view",
                        { attrs: { id: "historyBox" } },
                        _vm._l(_vm.historyList, function(item, index) {
                          return _c("block", [
                            item.type == "text"
                              ? _c(
                                  "view",
                                  {
                                    class:
                                      item.user.user_id == _vm.userInfo.user_id
                                        ? "item_mine"
                                        : "item",
                                    attrs: { id: "sha_" + item.sha }
                                  },
                                  [
                                    _c(
                                      "view",
                                      { staticClass: ["user_head_box"] },
                                      [
                                        _c("u-image", {
                                          staticClass: ["user_head_image"],
                                          attrs: { src: item.user.user_head },
                                          on: {
                                            longtap: function($event) {
                                              _vm.doAtUser(item.user)
                                            },
                                            click: function($event) {
                                              _vm.showMenuUserHead(item)
                                            }
                                          }
                                        })
                                      ],
                                      1
                                    ),
                                    _c(
                                      "view",
                                      { staticClass: ["chat_item_body"] },
                                      [
                                        _c(
                                          "u-text",
                                          {
                                            staticClass: ["chat_item_user_name"]
                                          },
                                          [_vm._v(_vm._s(item.user.user_name))]
                                        ),
                                        !item.at
                                          ? _c("block", [
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
                                            ])
                                          : _vm._e(),
                                        item.at
                                          ? _c("block", [
                                              item.at.user_id ==
                                              _vm.userInfo.user_id
                                                ? _c("u-text", {
                                                    directives: [
                                                      {
                                                        name: "html",
                                                        rawName: "v-html",
                                                        value:
                                                          "@" +
                                                          _vm.urldecode(
                                                            item.at.user_name
                                                          ) +
                                                          " " +
                                                          _vm.urldecode(
                                                            item.content
                                                          ),
                                                        expression:
                                                          "'@'+urldecode(item.at.user_name)+' '+urldecode(item.content)"
                                                      }
                                                    ],
                                                    staticClass: [
                                                      "chat_item_text"
                                                    ],
                                                    staticStyle: {
                                                      backgroundColor: "#666",
                                                      color: "white"
                                                    }
                                                  })
                                                : _vm._e(),
                                              item.at.user_id !=
                                                _vm.userInfo.user_id &&
                                              item.user.user_id ==
                                                _vm.userInfo.user_id &&
                                              _vm.userInfo.user_sex == 1
                                                ? _c("u-text", {
                                                    directives: [
                                                      {
                                                        name: "html",
                                                        rawName: "v-html",
                                                        value:
                                                          "@" +
                                                          _vm.urldecode(
                                                            item.at.user_name
                                                          ) +
                                                          " " +
                                                          _vm.urldecode(
                                                            item.content
                                                          ),
                                                        expression:
                                                          "'@'+urldecode(item.at.user_name)+' '+urldecode(item.content)"
                                                      }
                                                    ],
                                                    staticClass: [
                                                      "chat_item_text"
                                                    ],
                                                    staticStyle: {
                                                      backgroundColor:
                                                        "#66CBFF",
                                                      color: "black"
                                                    }
                                                  })
                                                : _vm._e(),
                                              item.at.user_id !=
                                                _vm.userInfo.user_id &&
                                              item.user.user_id ==
                                                _vm.userInfo.user_id &&
                                              _vm.userInfo.user_sex == 0
                                                ? _c("u-text", {
                                                    directives: [
                                                      {
                                                        name: "html",
                                                        rawName: "v-html",
                                                        value:
                                                          "@" +
                                                          _vm.urldecode(
                                                            item.at.user_name
                                                          ) +
                                                          " " +
                                                          _vm.urldecode(
                                                            item.content
                                                          ),
                                                        expression:
                                                          "'@'+urldecode(item.at.user_name)+' '+urldecode(item.content)"
                                                      }
                                                    ],
                                                    staticClass: [
                                                      "chat_item_text"
                                                    ],
                                                    staticStyle: {
                                                      backgroundColor:
                                                        "#FE9898",
                                                      color: "white"
                                                    }
                                                  })
                                                : _vm._e(),
                                              item.at.user_id !=
                                                _vm.userInfo.user_id &&
                                              item.user.user_id !=
                                                _vm.userInfo.user_id
                                                ? _c("u-text", {
                                                    directives: [
                                                      {
                                                        name: "html",
                                                        rawName: "v-html",
                                                        value:
                                                          "@" +
                                                          _vm.urldecode(
                                                            item.at.user_name
                                                          ) +
                                                          " " +
                                                          _vm.urldecode(
                                                            item.content
                                                          ),
                                                        expression:
                                                          "'@'+urldecode(item.at.user_name)+' '+urldecode(item.content)"
                                                      }
                                                    ],
                                                    staticClass: [
                                                      "chat_item_text"
                                                    ]
                                                  })
                                                : _vm._e()
                                            ])
                                          : _vm._e()
                                      ],
                                      1
                                    )
                                  ]
                                )
                              : _vm._e(),
                            item.type == "img"
                              ? _c(
                                  "view",
                                  {
                                    class:
                                      item.user.user_id == _vm.userInfo.user_id
                                        ? "item_mine"
                                        : "item",
                                    attrs: { id: "sha_" + item.sha }
                                  },
                                  [
                                    _c(
                                      "view",
                                      { staticClass: ["user_head_box"] },
                                      [
                                        _c("u-image", {
                                          staticClass: ["user_head_image"],
                                          attrs: { src: item.user.user_head },
                                          on: {
                                            longpress: function($event) {
                                              _vm.doAtUser(item.user)
                                            }
                                          }
                                        })
                                      ],
                                      1
                                    ),
                                    _c(
                                      "view",
                                      { staticClass: ["chat_item_body"] },
                                      [
                                        _c(
                                          "u-text",
                                          {
                                            staticClass: ["chat_item_user_name"]
                                          },
                                          [_vm._v(_vm._s(item.user.user_name))]
                                        ),
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
                        1
                      )
                    ]
                  ),
                  _c(
                    "view",
                    { staticClass: ["chatForm"] },
                    [
                      _c(
                        "form",
                        { on: { submit: _vm.doSendMessage } },
                        [
                          _vm.chatType == "text" && _vm.room.room_sendmsg == 1
                            ? _c("u-input", {
                                staticClass: ["chatInput"],
                                attrs: {
                                  type: "text",
                                  confirmType: "send",
                                  confirmHold: "true",
                                  placeholder: "全员禁言中,你暂时无法发言",
                                  disabled: "disabled",
                                  value: _vm.messageObj.message
                                },
                                on: {
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
                          _vm.chatType == "voice"
                            ? _c("u-input", {
                                staticClass: ["chatInput"],
                                attrs: {
                                  disabled: "disabled",
                                  type: "text",
                                  confirmType: "send",
                                  confirmHold: "true",
                                  placeholder: "点击这里开始录音"
                                }
                              })
                            : _vm._e()
                        ],
                        1
                      ),
                      _c("view", { staticClass: ["chatButton"] }, [
                        _vm.chatType == "voice" && _vm.room.room_sendmsg == 0
                          ? _c(
                              "view",
                              {
                                staticClass: ["chatType", "chatIcon"],
                                on: {
                                  click: function($event) {
                                    _vm.chatType = "text"
                                  }
                                }
                              },
                              [
                                _c("i", {
                                  staticClass: [
                                    "iconfont",
                                    "icon-changyongtubiao-mianxing-21"
                                  ]
                                })
                              ],
                              1
                            )
                          : _vm._e(),
                        _vm.chatType == "text" && _vm.room.room_sendmsg == 0
                          ? _c(
                              "view",
                              {
                                staticClass: ["chatType", "chatIcon"],
                                on: {
                                  click: function($event) {
                                    _vm.chatType = "voice"
                                  }
                                }
                              },
                              [
                                _c("i", {
                                  staticClass: [
                                    "iconfont",
                                    "icon-changyongtubiao-mianxing-36"
                                  ]
                                })
                              ],
                              1
                            )
                          : _vm._e(),
                        _c(
                          "view",
                          {
                            staticClass: ["chatMore", "chatIcon"],
                            on: {
                              click: function($event) {
                                _vm.showMenuBox = true
                              }
                            }
                          },
                          [
                            _c("i", {
                              staticClass: [
                                "iconfont",
                                "icon-icon_roundadd_fill"
                              ]
                            })
                          ],
                          1
                        )
                      ])
                    ],
                    1
                  ),
                  _vm.song.song
                    ? _c(
                        "movable-area",
                        { attrs: { width: "800", height: "800" } },
                        [
                          _c(
                            "movable-view",
                            {
                              attrs: {
                                outOfBounds: "true",
                                inertia: "true",
                                width: "60px",
                                height: "60px",
                                direction: "all"
                              },
                              on: { click: _vm.doMusicClicked }
                            },
                            [
                              _c("u-image", {
                                staticClass: ["playerImage"],
                                attrs: {
                                  animation: _vm.animationData,
                                  src: _vm.song.song.pic
                                }
                              })
                            ],
                            1
                          )
                        ],
                        1
                      )
                    : _vm._e(),
                  _vm.showMenuBox
                    ? _c("view", { staticClass: ["menuBox"] }, [
                        _c("view", {
                          staticClass: ["menuShadow"],
                          on: {
                            click: function($event) {
                              _vm.showMenuBox = false
                            }
                          }
                        }),
                        _c("view", { staticClass: ["menuBody"] }, [
                          _c("view", { staticClass: ["menuItem"] }, [
                            _c(
                              "view",
                              {
                                staticClass: ["menuMain"],
                                on: { click: _vm.chooseImage }
                              },
                              [
                                _c("view", { staticClass: ["menuIcon"] }, [
                                  _c("view", {
                                    staticClass: [
                                      "iconfont",
                                      "icon-icon_photo_fill"
                                    ]
                                  })
                                ]),
                                _c("view", { staticClass: ["menuTitle"] }, [
                                  _c("u-text", [_vm._v("发图")])
                                ])
                              ]
                            )
                          ]),
                          _c("view", { staticClass: ["menuItem"] }, [
                            _c(
                              "view",
                              {
                                staticClass: ["menuMain"],
                                on: {
                                  click: function($event) {
                                    _vm.doOpenPage("addSong")
                                  }
                                }
                              },
                              [
                                _c("view", { staticClass: ["menuIcon"] }, [
                                  _c("view", {
                                    staticClass: [
                                      "iconfont",
                                      "icon-icon_invite_fill"
                                    ]
                                  })
                                ]),
                                _c("view", { staticClass: ["menuTitle"] }, [
                                  _c("u-text", [_vm._v("点歌")])
                                ])
                              ]
                            )
                          ]),
                          _c("view", { staticClass: ["menuItem"] }, [
                            _c(
                              "view",
                              {
                                staticClass: ["menuMain"],
                                on: {
                                  click: function($event) {
                                    _vm.doOpenPage("songList")
                                  }
                                }
                              },
                              [
                                _c("view", { staticClass: ["menuIcon"] }, [
                                  _c("view", {
                                    staticClass: [
                                      "iconfont",
                                      "icon-icon_dingtab"
                                    ]
                                  })
                                ]),
                                _c("view", { staticClass: ["menuTitle"] }, [
                                  _c("u-text", [_vm._v("已点")])
                                ])
                              ]
                            )
                          ]),
                          _c("view", { staticClass: ["menuItem"] }, [
                            _c(
                              "view",
                              {
                                staticClass: ["menuMain"],
                                on: {
                                  click: function($event) {
                                    _vm.doOpenPage("mySong")
                                  }
                                }
                              },
                              [
                                _c("view", { staticClass: ["menuIcon"] }, [
                                  _c("view", {
                                    staticClass: [
                                      "iconfont",
                                      "icon-icon_people_fill"
                                    ]
                                  })
                                ]),
                                _c("view", { staticClass: ["menuTitle"] }, [
                                  _c("u-text", [_vm._v("我的")])
                                ])
                              ]
                            )
                          ]),
                          _c("view", { staticClass: ["menuItem"] }, [
                            _c(
                              "view",
                              {
                                staticClass: ["menuMain"],
                                on: {
                                  click: function($event) {
                                    _vm.doOpenPage("onLine")
                                  }
                                }
                              },
                              [
                                _c("view", { staticClass: ["menuIcon"] }, [
                                  _c("view", {
                                    staticClass: [
                                      "iconfont",
                                      "icon-icon_meeting_fill"
                                    ]
                                  })
                                ]),
                                _c("view", { staticClass: ["menuTitle"] }, [
                                  _c("u-text", [_vm._v("在线")])
                                ])
                              ]
                            )
                          ]),
                          _c("view", { staticClass: ["menuItem"] }, [
                            _c(
                              "view",
                              {
                                staticClass: ["menuMain"],
                                on: {
                                  click: function($event) {
                                    _vm.doOpenPage("invate")
                                  }
                                }
                              },
                              [
                                _c("view", { staticClass: ["menuIcon"] }, [
                                  _c("view", {
                                    staticClass: [
                                      "iconfont",
                                      "icon-changyongtubiao-mianxing-37"
                                    ]
                                  })
                                ]),
                                _c("view", { staticClass: ["menuTitle"] }, [
                                  _c("u-text", [_vm._v("邀请")])
                                ])
                              ]
                            )
                          ]),
                          _c("view", { staticClass: ["menuItem"] }, [
                            _c(
                              "view",
                              {
                                staticClass: ["menuMain"],
                                on: {
                                  click: function($event) {
                                    _vm.doOpenPage("setting")
                                  }
                                }
                              },
                              [
                                _c("view", { staticClass: ["menuIcon"] }, [
                                  _c("view", {
                                    staticClass: [
                                      "iconfont",
                                      "icon-changyongtubiao-mianxing-32"
                                    ]
                                  })
                                ]),
                                _c("view", { staticClass: ["menuTitle"] }, [
                                  _c("u-text", [_vm._v("管理")])
                                ])
                              ]
                            )
                          ])
                        ])
                      ])
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
eval("/* WEBPACK VAR INJECTION */(function(__f__) {Object.defineProperty(exports, \"__esModule\", { value: true });exports.default = void 0; //\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\nvar _default =\n{\n  data: function data() {\n    return {\n      // 聊天页面时时滚动样式\n      scrollTop: 0,\n      style: {\n        pageHeight: 0,\n        contentViewHeight: 0,\n        footViewHeight: 90,\n        mitemHeight: 0 },\n\n      bgAudioMannager: null,\n      config: {\n        lockScreen: false },\n\n      showMenuBox: false,\n      loading: false,\n      showRoomPage: false,\n      showPasswordForm: false,\n      app: getApp(),\n      userInfo: null,\n      song: {\n        song: null,\n        user: null },\n\n      room_id: 0,\n      room: false,\n      password: \"\",\n      animationData: {},\n      rotate: 0,\n      playerTimer: null,\n      chatType: 'text',\n      historyKey: 'historyList_',\n      historyList: [],\n      messageObj: {\n        message: \"\",\n        at: false,\n        focus: false } };\n\n\n  },\n  onLoad: function onLoad() {\n    var that = this;\n    that.bgAudioMannager = uni.getBackgroundAudioManager();\n    this.room_id = uni.getStorageSync('room_id') || 888;\n    // this.runPlayAnimation();\n    that.app.user.getMyInfo({\n      success: function success(userInfo) {\n        that.userInfo = userInfo;\n        that.getRoomInfo();\n      } });\n\n    uni.$on('WebSocketMessage', function (data) {\n      __f__(\"log\", data, \" at pages/index/index.nvue:267\");\n      try {\n        that.messageController(JSON.parse(data));\n      } catch (error) {\n        __f__(\"error\", error, \" at pages/index/index.nvue:271\");\n      }\n    });\n    uni.$on('IndexReload', function () {\n      that.app.user.getMyInfo({\n        success: function success(userInfo) {\n          that.userInfo = userInfo;\n          that.getRoomInfo();\n        } });\n\n    });\n    uni.$on('AtUserEvent', function (user) {\n      that.doAtUser(user);\n    });\n    uni.$on('RoomChanged', function (room_id) {\n      uni.setNavigationBarTitle({\n        title: '正在进入' });\n\n      that.room_id = room_id;\n      that.showPasswordForm = false;\n      that.showRoomPage = false;\n      that.password = '';\n      uni.setStorageSync('room_id', parseInt(that.room_id));\n      that.getRoomInfo();\n    });\n    uni.onKeyboardHeightChange(function (e) {\n      var res = uni.getSystemInfoSync(); //获取手机可使用窗口高度\n      that.style.pageHeight = res.windowHeight;\n      that.style.contentViewHeight = res.windowHeight - uni.getSystemInfoSync().screenWidth / 750 * 100 - (e.height ==\n      0 ? 40 : 20) - e.height; //像素 \n      that.autoScroll();\n    });\n    that.bgAudioMannager.onCanplay(function () {\n      // that.runPlayAnimation();\n      var time = parseInt(new Date().valueOf() / 1000) - that.song.since - 3;\n      that.bgAudioMannager.seek(time > 0 ? time : 0);\n    });\n    that.bgAudioMannager.onEnded(function () {\n      that.stopPlayerAnimation();\n      that.song = {\n        song: null,\n        user: null };\n\n    });\n  },\n  onNavigationBarButtonTap: function onNavigationBarButtonTap(res) {\n    var that = this;\n    switch (res.text) {\n      case '换房':\n        uni.navigateTo({\n          url: \"../room/select\" });\n\n        break;\n      case '我的':\n        if (that.userInfo.user_id <= 0) {\n          that.app.user.login();\n        } else {\n          uni.navigateTo({\n            url: '../user/index' });\n\n        }\n        break;\n      default:}\n\n  },\n  methods: {\n    doKeyDown: function doKeyDown() {\n      var that = this;\n      if (that.messageObj.at) {\n        if (that.messageObj.message.indexOf('@' + decodeURIComponent(that.messageObj.at.user_name)) < 0) {\n          //@的昵称已经被改过了\n          that.messageObj.at = false;\n        }\n      }\n    },\n    doMusicClicked: function doMusicClicked() {\n      var that = this;\n      var menu = [\n      '不喜欢'];\n\n      if (that.userInfo.user_admin || that.room.room_user == that.userInfo.user_id) {\n        menu = [\n        '切歌'];\n\n      }\n      uni.showActionSheet({\n        itemList: menu,\n        success: function success(res) {\n          __f__(\"log\", res.tapIndex, \" at pages/index/index.nvue:359\");\n          var buttonName = menu[res.tapIndex];\n          switch (buttonName) {\n            case '切歌':\n              uni.showModal({\n                title: '切歌提醒',\n                content: '是否确认切掉当前播放的歌?',\n                cancelText: '取消',\n                confirmColor: '#FF4500',\n                confirmText: '切歌',\n                success: function success(res) {\n                  if (res.confirm) {\n                    that.app.request({\n                      url: \"song/pass\",\n                      data: {\n                        room_id: that.room_id,\n                        mid: that.song.song.mid },\n\n                      success: function success() {} });\n\n                  }\n                } });\n\n              break;\n            case '不喜欢':\n              that.app.request({\n                url: \"song/pass\",\n                data: {\n                  room_id: that.room_id,\n                  mid: that.song.song.mid },\n\n                success: function success(res) {\n                  that.bgAudioMannager.pause();\n                  that.stopPlayerAnimation();\n                  that.song = {\n                    song: null,\n                    user: null };\n\n                  uni.showModal({\n                    title: '不喜欢',\n                    content: res.msg,\n                    showCancel: false,\n                    success: function success() {} });\n\n                } });\n\n              break;\n            default:}\n\n        } });\n\n    },\n    doAtUser: function doAtUser(user) {\n      var that = this;\n      that.messageObj.at = user;\n      that.messageObj.message = \"@\" + decodeURIComponent(user.user_name) + \" \" + that.messageObj.message;\n      that.messageObj.focus = true;\n    },\n    autoScroll: function autoScroll() {\n      var that = this;\n      // that.$nextTick(function() {\n      // \tlet query = uni.createSelectorQuery();\n      // \tquery.select('#historyList').boundingClientRect();\n      // \tquery.select('#historyBox').boundingClientRect();\n      // \tquery.exec(function(res) {\n      // \t\tif (res[0] && res[1]) {\n      // \t\t\tconsole.log(res[0].height);\n      // \t\t\tconsole.log(res[1].height);\n      // \t\t\tthat.scrollTop = res[1].height - res[0].height + 150;\n      // \t\t}\n      // \t});\n      // });\n    },\n    historyClicked: function historyClicked() {\n      var that = this;\n      that.showMenuBox = false;\n      uni.hideKeyboard();\n    },\n    saveMessageHistory: function saveMessageHistory() {\n      var that = this;\n      uni.setStorageSync(that.historyKey + that.room_id, JSON.stringify(that.historyList));\n    },\n    messageController: function messageController(msg) {\n      var that = this;\n      __f__(\"log\", msg, \" at pages/index/index.nvue:443\");\n      switch (msg.type) {\n        case 'text':\n        case 'img':\n        case 'system':\n          that.addMessageToList(msg);\n          break;\n        case 'addSong':\n          if (msg.at) {\n            that.addSystemMessage(decodeURIComponent(msg.user.user_name) + \" 送了一首 《\" + msg.song.name + \"》 给 \" +\n            decodeURIComponent(msg.at.user_name), '#333');\n          } else {\n            that.addSystemMessage(decodeURIComponent(msg.user.user_name) + \" 点了一首《\" + msg.song.name + \"》\", '#333');\n          }\n          that.saveMessageHistory();\n          break;\n        case 'pass':\n          that.addSystemMessage(decodeURIComponent(msg.user.user_name) + \" 切掉了《\" + msg.song.name + \"》\", '#ff4500');\n          that.saveMessageHistory();\n          break;\n        case 'chat_bg':\n          that.addSystemMessage(decodeURIComponent(msg.user.user_name) + \" 运气大爆发,触发了点歌背景墙特效(1小时内播放歌曲时有效)!\", 'green', '#eee');\n          that.saveMessageHistory();\n          break;\n        case 'push':\n          that.addSystemMessage(decodeURIComponent(msg.user.user_name) + \" 将歌曲 《\" + msg.song.name + \"》 设为置顶候播放\");\n          that.saveMessageHistory();\n          break;\n        case 'removeSong':\n          that.addSystemMessage(decodeURIComponent(msg.user.user_name) + \" 将歌曲 《\" + msg.song.name + \"》 从队列移除\");\n          that.saveMessageHistory();\n          break;\n        case 'removeban':\n          that.addSystemMessage(decodeURIComponent(msg.user.user_name) + \" 将 \" + decodeURIComponent(msg.ban.user_name) +\n          \" 解禁\");\n          that.saveMessageHistory();\n          break;\n        case 'shutdown':\n          that.addSystemMessage(decodeURIComponent(msg.user.user_name) + \" 禁止了用户 \" + decodeURIComponent(msg.ban.user_name) +\n          \" 发言\");\n          that.saveMessageHistory();\n          break;\n        case 'songdown':\n          that.addSystemMessage(decodeURIComponent(msg.user.user_name) + \" 禁止了用户 \" + decodeURIComponent(msg.ban.user_name) +\n          \" 点歌\");\n          that.saveMessageHistory();\n          break;\n        case 'back':\n          for (var i = 0; i < that.historyList.length; i++) {\n            if (that.historyList[i].key == msg.key) {\n              that.historyList.splice(i, 1);\n              break;\n            }\n          }\n          that.addSystemMessage(decodeURIComponent(msg.user.user_name) + \" 撤回了一条消息\");\n          that.saveMessageHistory();\n          break;\n        case 'playSong':\n          that.playMusic(msg);\n          break;\n        default:}\n\n    },\n    playMusic: function playMusic(msg) {\n      var that = this;\n      if (that.song.song && that.song.song.mid == msg.song.mid) {\n        return;\n      }\n      __f__(\"log\", 'Play Music', \" at pages/index/index.nvue:511\");\n      that.song = msg;\n      that.bgAudioMannager.title = \"正在播放 \" + msg.song.name;\n      that.bgAudioMannager.singer = msg.song.singer + ' - ' + that.room.room_name;\n      that.bgAudioMannager.coverImgUrl = msg.song.pic;\n      that.bgAudioMannager.src = \"https://api.bbbug.com/api/song/playurl?mid=\" + msg.song.mid;\n      that.bgAudioMannager.play();\n      that.addSystemMessage('正在播放 ' + msg.song.name + '(' + msg.song.singer + ')');\n    },\n    doSendMessage: function doSendMessage(e) {\n      var that = this;\n      var message_old = that.messageObj.message;\n      var message = message_old;\n      that.messageObj.message = '';\n      if (message_old) {\n        if (that.messageObj.at) {\n          message = message_old.replace(\"@\" + decodeURIComponent(that.messageObj.at.user_name),\n          '');\n        }\n        that.app.request({\n          url: \"message/send\",\n          data: {\n            type: 'text',\n            where: \"channel\",\n            to: that.room_id,\n            msg: encodeURIComponent(message),\n            at: that.messageObj.at },\n\n          success: function success(res) {},\n          error: function error(res) {\n            that.messageObj.message = message_old;\n            uni.showModal({\n              title: '发送失败',\n              content: res.msg,\n              showCancel: false });\n\n          } });\n\n      }\n    },\n    addMessageToList: function addMessageToList(msg) {\n      var that = this;\n      if (that.historyList.length > 100) {\n        that.historyList.shift();\n      }\n      that.historyList.push(msg);\n      that.saveMessageHistory();\n      that.autoScroll();\n    },\n    runPlayAnimation: function runPlayAnimation() {\n      var that = this;\n      that.stopPlayerAnimation();\n      var animation = uni.createAnimation({\n        duration: 10000,\n        timingFunction: 'linear' });\n\n      that.rotate += 60;\n      if (that.rotate > 360) {\n        that.rotate = 0;\n      }\n      that.rotate -= 180;\n      animation.rotate(that.rotate).step();\n      that.animationData = animation.export();\n      clearTimeout(that.playerTimer);\n      that.playerTimer = setTimeout(function () {\n        that.runPlayAnimation();\n      }.bind(that), 10000);\n    },\n    stopPlayerAnimation: function stopPlayerAnimation() {\n      var that = this;\n      clearTimeout(that.playerTimer);\n      that.animationData = {};\n    },\n    urldecode: function urldecode(str) {\n      return decodeURIComponent(str);\n    },\n    getRoomInfo: function getRoomInfo() {\n      var that = this;\n      uni.showLoading({\n        title: '连接房间服务器' });\n\n      that.app.request({\n        url: 'room/getRoomInfo',\n        data: {\n          room_id: that.room_id,\n          room_password: that.password },\n\n        success: function success(res) {\n          that.room = res.data;\n          uni.setNavigationBarTitle({\n            title: that.room.room_name });\n\n          that.app.request({\n            url: 'room/getWebsocketUrl',\n            data: {\n              channel: that.room_id },\n\n            success: function success(res) {\n              uni.hideLoading();\n              that.app.webSocket.config.wssUrl = 'wss://websocket.bbbug.com/?account=' +\n              res.data.account + '&channel=' +\n              res.data.channel + '&ticket=' + res.data.ticket;\n              if (!that.app.webSocket.isConnected) {\n                that.app.webSocket.connectWss();\n              }\n              // let str = uni.getStorageSync(that.historyKey + that.room_id) || false;\n              // that.historyList = str ? JSON.parse(str) : [];\n              that.addSystemMessage(that.room.room_notice || '服务器连接成功');\n              that.showPasswordForm = false;\n              that.showRoomPage = true;\n              that.autoScroll();\n            },\n\n            error: function error(res) {\n              __f__(\"log\", res, \" at pages/index/index.nvue:625\");\n            } });\n\n        },\n        error: function error(res) {\n          uni.hideLoading();\n          if (res.code == 403) {\n            uni.setNavigationBarTitle({\n              title: '密码房' });\n\n            that.showPasswordForm = true;\n            that.showRoomPage = false;\n            if (that.password) {\n              uni.showModal({\n                showCancel: false,\n                title: '进入失败',\n                content: res.msg,\n                success: function success() {} });\n\n            }\n          } else {\n            uni.showModal({\n              showCancel: false,\n              title: '进入失败',\n              content: res.msg,\n              success: function success() {\n                uni.navigateBack();\n              } });\n\n          }\n        } });\n\n    },\n    addSystemMessage: function addSystemMessage(msg) {var color = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '#999';var bg = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 'tansparent';\n      var that = this;\n      that.historyList.push({\n        type: \"system\",\n        content: msg,\n        bg: bg,\n        color: color });\n\n      that.autoScroll();\n    },\n    doOpenPage: function doOpenPage(page) {\n      var that = this;\n      that.showMenuBox = false;\n      switch (page) {\n        case 'addSong':\n          uni.navigateTo({\n            url: '../song/search?room_id=' + that.room_id });\n\n          break;\n        case 'mySong':\n          uni.navigateTo({\n            url: '../song/my?room_id=' + that.room_id });\n\n          break;\n        case 'songList':\n          uni.navigateTo({\n            url: '../song/list?room_id=' + that.room_id });\n\n          break;\n        case 'onLine':\n          var isMaster = 0;\n          if (that.userInfo.user_admin || that.room.room_user == that.userInfo.user_id) {\n            isMaster = 1;\n          }\n          uni.navigateTo({\n            url: './online?room_id=' + that.room_id + \"&room_admin=\" + isMaster });\n\n          break;\n        default:}\n\n    },\n    showMenuUserHead: function showMenuUserHead(msg) {\n      __f__(\"log\", msg, \" at pages/index/index.nvue:700\");\n      var user = msg.user;\n      var that = this;\n      var menu = ['进入主页', '@一下Ta', '送歌给Ta'];\n      if (that.userInfo.user_admin || that.room.room_user == that.userInfo.user_id) {\n        menu = ['进入主页', '@一下Ta', '送歌给Ta', '撤回消息', '禁止点歌', '禁止发言', '全部解禁'];\n      } else if (user.user_id == that.userInfo.user_id) {\n        //发消息人是自己\n        menu = ['进入主页', '@一下Ta', '送歌给Ta', '撤回消息'];\n      } else {\n        //其他人的消息\n      }\n      uni.showActionSheet({\n        itemList: menu,\n        success: function success(res) {\n          switch (menu[res.tapIndex]) {\n            case '送歌给Ta':\n              uni.navigateTo({\n                url: '../song/search?room_id=' + that.room_id + \"&at=\" + user.user_id + \"&name=\" + user.user_name });\n\n              break;\n            case '@一下Ta':\n              that.doAtUser(user);\n              break;\n            case '全部解禁':\n              that.app.request({\n                url: 'user/removeban',\n                data: {\n                  room_id: that.room_id,\n                  user_id: user.user_id },\n\n                loading: \"解禁中\",\n                success: function success(res) {\n                  uni.showModal({\n                    title: '解禁成功',\n                    content: res.msg,\n                    showCancel: false,\n                    success: function success() {\n                      that.getuserList();\n                    } });\n\n                } });\n\n              break;\n            case '禁止发言':\n              that.app.request({\n                url: 'user/shutdown',\n                data: {\n                  room_id: that.room_id,\n                  user_id: user.user_id },\n\n                loading: \"禁言中\",\n                success: function success(res) {\n                  uni.showModal({\n                    title: '禁言成功',\n                    content: res.msg,\n                    showCancel: false,\n                    success: function success() {\n                      that.getuserList();\n                    } });\n\n                } });\n\n              break;\n            case '禁止点歌':\n              that.app.request({\n                url: 'user/songdown',\n                data: {\n                  room_id: that.room_id,\n                  user_id: user.user_id },\n\n                loading: \"禁歌中\",\n                success: function success(res) {\n                  uni.showModal({\n                    title: '禁歌成功',\n                    content: res.msg,\n                    showCancel: false,\n                    success: function success() {\n                      that.getuserList();\n                    } });\n\n                } });\n\n              break;\n            default:}\n\n        } });\n\n    },\n    getStaticUrl: function getStaticUrl(url) {\n      if (url.indexOf('https://') > -1 || url.indexOf('http://') > -1) {\n        return url;\n      } else {\n        return 'https://cdn.bbbug.com/uploads/' + url;\n      }\n    },\n    chooseImage: function chooseImage() {\n      var that = this;\n      that.showMenuBox = false;\n      uni.chooseImage({\n        sizeType: \"compressed\",\n        sourceType: ['album'],\n        count: 1,\n        fail: function fail(res) {\n          __f__(\"log\", res, \" at pages/index/index.nvue:804\");\n        },\n        success: function success(res) {\n          uni.showLoading({\n            title: '处理中' });\n\n          uni.compressImage({\n            src: res.tempFilePaths[0],\n            quality: 50,\n            success: function success(res) {\n              uni.uploadFile({\n                url: that.app.globalData.request.apiUrl + \"attach/uploadimage\",\n                filePath: res.tempFilePath,\n                name: 'file',\n                formData: that.app.globalData.request.baseData,\n                success: function success(uploadFileRes) {\n                  uni.hideLoading();\n                  var response = {};\n                  try {\n                    response = JSON.parse(uploadFileRes.data);\n                  } catch (err) {\n                    uni.showModal({\n                      showCancel: false,\n                      title: '上传失败',\n                      content: '服务器发生错误',\n                      success: function success() {} });\n\n                  }\n                  if (response.code == 200) {\n                    that.app.request({\n                      url: \"message/send\",\n                      data: {\n                        where: 'channel',\n                        to: that.room_id,\n                        type: 'img',\n                        msg: response.data.attach_thumb,\n                        resource: response.data.attach_path },\n\n                      success: function success(res) {},\n                      error: function error(res) {\n                        that.messageObj.message = message_old;\n                        uni.showModal({\n                          title: '发送失败',\n                          content: res.msg,\n                          showCancel: false });\n\n                      } });\n\n                  } else {\n                    uni.showModal({\n                      showCancel: false,\n                      title: '上传失败',\n                      content: response.msg,\n                      success: function success() {} });\n\n                  }\n                } });\n\n            } });\n\n        } });\n\n    },\n    fullViewImage: function fullViewImage(url) {\n      uni.previewImage({\n        urls: [url],\n        longPressActions: {\n          itemList: ['保存图片', '举报图片'],\n          success: function success(data) {},\n          fail: function fail(err) {} } });\n\n\n    } } };exports.default = _default;\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/vue-cli-plugin-uni/lib/format-log.js */ 9)[\"default\"]))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInVuaS1hcHA6Ly8vcGFnZXMvaW5kZXgvaW5kZXgubnZ1ZSJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFxTkE7QUFDQSxNQURBLGtCQUNBO0FBQ0E7QUFDQTtBQUNBLGtCQUZBO0FBR0E7QUFDQSxxQkFEQTtBQUVBLDRCQUZBO0FBR0EsMEJBSEE7QUFJQSxzQkFKQSxFQUhBOztBQVNBLDJCQVRBO0FBVUE7QUFDQSx5QkFEQSxFQVZBOztBQWFBLHdCQWJBO0FBY0Esb0JBZEE7QUFlQSx5QkFmQTtBQWdCQSw2QkFoQkE7QUFpQkEsbUJBakJBO0FBa0JBLG9CQWxCQTtBQW1CQTtBQUNBLGtCQURBO0FBRUEsa0JBRkEsRUFuQkE7O0FBdUJBLGdCQXZCQTtBQXdCQSxpQkF4QkE7QUF5QkEsa0JBekJBO0FBMEJBLHVCQTFCQTtBQTJCQSxlQTNCQTtBQTRCQSx1QkE1QkE7QUE2QkEsc0JBN0JBO0FBOEJBLGdDQTlCQTtBQStCQSxxQkEvQkE7QUFnQ0E7QUFDQSxtQkFEQTtBQUVBLGlCQUZBO0FBR0Esb0JBSEEsRUFoQ0E7OztBQXNDQSxHQXhDQTtBQXlDQSxRQXpDQSxvQkF5Q0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFEQSxtQkFDQSxRQURBLEVBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FKQTs7QUFNQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BRkEsQ0FFQTtBQUNBO0FBQ0E7QUFDQSxLQVBBO0FBUUE7QUFDQTtBQUNBLGVBREEsbUJBQ0EsUUFEQSxFQUNBO0FBQ0E7QUFDQTtBQUNBLFNBSkE7O0FBTUEsS0FQQTtBQVFBO0FBQ0E7QUFDQSxLQUZBO0FBR0E7QUFDQTtBQUNBLHFCQURBOztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBVkE7QUFXQTtBQUNBLHdDQURBLENBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FEQSxHQUNBLEVBREEsR0FDQSxFQURBLElBQ0EsUUFEQSxDQUhBLENBSUE7QUFDQTtBQUNBLEtBTkE7QUFPQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBSkE7QUFLQTtBQUNBO0FBQ0E7QUFDQSxrQkFEQTtBQUVBLGtCQUZBOztBQUlBLEtBTkE7QUFPQSxHQXJHQTtBQXNHQSwwQkF0R0Esb0NBc0dBLEdBdEdBLEVBc0dBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwrQkFEQTs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBRkEsTUFFQTtBQUNBO0FBQ0EsZ0NBREE7O0FBR0E7QUFDQTtBQUNBLGNBZkE7O0FBaUJBLEdBekhBO0FBMEhBO0FBQ0EsYUFEQSx1QkFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FUQTtBQVVBLGtCQVZBLDRCQVVBO0FBQ0E7QUFDQTtBQUNBLFdBREE7O0FBR0E7QUFDQTtBQUNBLFlBREE7O0FBR0E7QUFDQTtBQUNBLHNCQURBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsNkJBREE7QUFFQSx3Q0FGQTtBQUdBLGdDQUhBO0FBSUEsdUNBSkE7QUFLQSxpQ0FMQTtBQU1BO0FBQ0E7QUFDQTtBQUNBLHNDQURBO0FBRUE7QUFDQSw2Q0FEQTtBQUVBLCtDQUZBLEVBRkE7O0FBTUEsb0RBTkE7O0FBUUE7QUFDQSxpQkFqQkE7O0FBbUJBO0FBQ0E7QUFDQTtBQUNBLGdDQURBO0FBRUE7QUFDQSx1Q0FEQTtBQUVBLHlDQUZBLEVBRkE7O0FBTUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSw4QkFEQTtBQUVBLDhCQUZBOztBQUlBO0FBQ0EsZ0NBREE7QUFFQSxvQ0FGQTtBQUdBLHFDQUhBO0FBSUEsa0RBSkE7O0FBTUEsaUJBbkJBOztBQXFCQTtBQUNBLG9CQTdDQTs7QUErQ0EsU0FwREE7O0FBc0RBLEtBMUVBO0FBMkVBLFlBM0VBLG9CQTJFQSxJQTNFQSxFQTJFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FoRkE7QUFpRkEsY0FqRkEsd0JBaUZBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQS9GQTtBQWdHQSxrQkFoR0EsNEJBZ0dBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FwR0E7QUFxR0Esc0JBckdBLGdDQXFHQTtBQUNBO0FBQ0E7QUFDQSxLQXhHQTtBQXlHQSxxQkF6R0EsNkJBeUdBLEdBekdBLEVBeUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGdEQURBLEVBQ0EsTUFEQTtBQUVBLFdBSEEsTUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZUFEQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZUFEQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZUFEQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGdCQTNEQTs7QUE2REEsS0F6S0E7QUEwS0EsYUExS0EscUJBMEtBLEdBMUtBLEVBMEtBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0F2TEE7QUF3TEEsaUJBeExBLHlCQXdMQSxDQXhMQSxFQXdMQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsWUFEQTtBQUVBO0FBQ0E7QUFDQSw2QkFEQTtBQUVBO0FBQ0Esd0JBREE7QUFFQSw0QkFGQTtBQUdBLDRCQUhBO0FBSUEsNENBSkE7QUFLQSxrQ0FMQSxFQUZBOztBQVNBLDJDQVRBO0FBVUE7QUFDQTtBQUNBO0FBQ0EsMkJBREE7QUFFQSw4QkFGQTtBQUdBLCtCQUhBOztBQUtBLFdBakJBOztBQW1CQTtBQUNBLEtBdE5BO0FBdU5BLG9CQXZOQSw0QkF1TkEsR0F2TkEsRUF1TkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBL05BO0FBZ09BLG9CQWhPQSw4QkFnT0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx1QkFEQTtBQUVBLGdDQUZBOztBQUlBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FGQSxDQUVBLElBRkEsQ0FFQSxJQUZBLEdBRUEsS0FGQTtBQUdBLEtBbFBBO0FBbVBBLHVCQW5QQSxpQ0FtUEE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQXZQQTtBQXdQQSxhQXhQQSxxQkF3UEEsR0F4UEEsRUF3UEE7QUFDQTtBQUNBLEtBMVBBO0FBMlBBLGVBM1BBLHlCQTJQQTtBQUNBO0FBQ0E7QUFDQSx3QkFEQTs7QUFHQTtBQUNBLCtCQURBO0FBRUE7QUFDQSwrQkFEQTtBQUVBLHNDQUZBLEVBRkE7O0FBTUEsZUFOQSxtQkFNQSxHQU5BLEVBTUE7QUFDQTtBQUNBO0FBQ0Esc0NBREE7O0FBR0E7QUFDQSx1Q0FEQTtBQUVBO0FBQ0EsbUNBREEsRUFGQTs7QUFLQTtBQUNBO0FBQ0E7QUFDQSw4QkFEQSxHQUNBLFdBREE7QUFFQSw4QkFGQSxHQUVBLFVBRkEsR0FFQSxlQUZBO0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFuQkE7O0FBcUJBO0FBQ0E7QUFDQSxhQXZCQTs7QUF5QkEsU0FwQ0E7QUFxQ0EsYUFyQ0EsaUJBcUNBLEdBckNBLEVBcUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMEJBREE7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQ0FEQTtBQUVBLDZCQUZBO0FBR0EsZ0NBSEE7QUFJQSw4Q0FKQTs7QUFNQTtBQUNBLFdBZEEsTUFjQTtBQUNBO0FBQ0EsK0JBREE7QUFFQSwyQkFGQTtBQUdBLDhCQUhBO0FBSUE7QUFDQTtBQUNBLGVBTkE7O0FBUUE7QUFDQSxTQS9EQTs7QUFpRUEsS0FqVUE7QUFrVUEsb0JBbFVBLDRCQWtVQSxHQWxVQSxFQWtVQTtBQUNBO0FBQ0E7QUFDQSxzQkFEQTtBQUVBLG9CQUZBO0FBR0EsY0FIQTtBQUlBLG9CQUpBOztBQU1BO0FBQ0EsS0EzVUE7QUE0VUEsY0E1VUEsc0JBNFVBLElBNVVBLEVBNFVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHlEQURBOztBQUdBO0FBQ0E7QUFDQTtBQUNBLHFEQURBOztBQUdBO0FBQ0E7QUFDQTtBQUNBLHVEQURBOztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsK0VBREE7O0FBR0E7QUFDQSxnQkF6QkE7O0FBMkJBLEtBMVdBO0FBMldBLG9CQTNXQSw0QkEyV0EsR0EzV0EsRUEyV0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUZBLE1BRUE7QUFDQTtBQUNBO0FBQ0EsT0FIQSxNQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esc0JBREE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlIQURBOztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFDQURBO0FBRUE7QUFDQSx1Q0FEQTtBQUVBLHVDQUZBLEVBRkE7O0FBTUEsOEJBTkE7QUFPQTtBQUNBO0FBQ0EsaUNBREE7QUFFQSxvQ0FGQTtBQUdBLHFDQUhBO0FBSUE7QUFDQTtBQUNBLHFCQU5BOztBQVFBLGlCQWhCQTs7QUFrQkE7QUFDQTtBQUNBO0FBQ0Esb0NBREE7QUFFQTtBQUNBLHVDQURBO0FBRUEsdUNBRkEsRUFGQTs7QUFNQSw4QkFOQTtBQU9BO0FBQ0E7QUFDQSxpQ0FEQTtBQUVBLG9DQUZBO0FBR0EscUNBSEE7QUFJQTtBQUNBO0FBQ0EscUJBTkE7O0FBUUEsaUJBaEJBOztBQWtCQTtBQUNBO0FBQ0E7QUFDQSxvQ0FEQTtBQUVBO0FBQ0EsdUNBREE7QUFFQSx1Q0FGQSxFQUZBOztBQU1BLDhCQU5BO0FBT0E7QUFDQTtBQUNBLGlDQURBO0FBRUEsb0NBRkE7QUFHQSxxQ0FIQTtBQUlBO0FBQ0E7QUFDQSxxQkFOQTs7QUFRQSxpQkFoQkE7O0FBa0JBO0FBQ0Esb0JBckVBOztBQXVFQSxTQTFFQTs7QUE0RUEsS0FwY0E7QUFxY0EsZ0JBcmNBLHdCQXFjQSxHQXJjQSxFQXFjQTtBQUNBO0FBQ0E7QUFDQSxPQUZBLE1BRUE7QUFDQTtBQUNBO0FBQ0EsS0EzY0E7QUE0Y0EsZUE1Y0EseUJBNGNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsOEJBREE7QUFFQSw2QkFGQTtBQUdBLGdCQUhBO0FBSUE7QUFDQTtBQUNBLFNBTkE7QUFPQTtBQUNBO0FBQ0Esd0JBREE7O0FBR0E7QUFDQSxxQ0FEQTtBQUVBLHVCQUZBO0FBR0E7QUFDQTtBQUNBLDhFQURBO0FBRUEsMENBRkE7QUFHQSw0QkFIQTtBQUlBLDhEQUpBO0FBS0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG1CQUZBLENBRUE7QUFDQTtBQUNBLHVDQURBO0FBRUEsbUNBRkE7QUFHQSx3Q0FIQTtBQUlBLG9EQUpBOztBQU1BO0FBQ0E7QUFDQTtBQUNBLHlDQURBO0FBRUE7QUFDQSx3Q0FEQTtBQUVBLHdDQUZBO0FBR0EsbUNBSEE7QUFJQSx1REFKQTtBQUtBLDJEQUxBLEVBRkE7O0FBU0EsdURBVEE7QUFVQTtBQUNBO0FBQ0E7QUFDQSx1Q0FEQTtBQUVBLDBDQUZBO0FBR0EsMkNBSEE7O0FBS0EsdUJBakJBOztBQW1CQSxtQkFwQkEsTUFvQkE7QUFDQTtBQUNBLHVDQURBO0FBRUEsbUNBRkE7QUFHQSwyQ0FIQTtBQUlBLG9EQUpBOztBQU1BO0FBQ0EsaUJBOUNBOztBQWdEQSxhQXBEQTs7QUFzREEsU0FqRUE7O0FBbUVBLEtBbGhCQTtBQW1oQkEsaUJBbmhCQSx5QkFtaEJBLEdBbmhCQSxFQW1oQkE7QUFDQTtBQUNBLG1CQURBO0FBRUE7QUFDQSxvQ0FEQTtBQUVBLDRDQUZBO0FBR0EscUNBSEEsRUFGQTs7O0FBUUEsS0E1aEJBLEVBMUhBLEUiLCJmaWxlIjoiOC5qcyIsInNvdXJjZXNDb250ZW50IjpbIjxzdHlsZT5cclxuXHJcblx0LmNoYXRGb3JtIHtcclxuXHRcdHBvc2l0aW9uOiBmaXhlZDtcclxuXHRcdGxlZnQ6IDA7XHJcblx0XHRib3R0b206IDA7XHJcblx0XHRyaWdodDogMDtcclxuXHRcdGhlaWdodDogNjBweDtcclxuXHRcdGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xyXG5cdFx0cGFkZGluZzogMTBweDtcclxuXHR9XHJcblxyXG5cdC5jaGF0SW5wdXQge1xyXG5cdFx0cG9zaXRpb246IGZpeGVkO1xyXG5cdFx0bGVmdDogMTVweDtcclxuXHRcdGJvdHRvbTogMTVweDtcclxuXHRcdHJpZ2h0OiAxNXB4O1xyXG5cdFx0Zm9udC1zaXplOiAxNnB4O1xyXG5cdH1cclxuXHJcblxyXG5cdC5oaXN0b3J5TGlzdCB7XHJcblx0XHRwb3NpdGlvbjogZml4ZWQ7XHJcblx0XHRsZWZ0OiAwO1xyXG5cdFx0cmlnaHQ6IDA7XHJcblx0XHRib3R0b206IDA7XHJcblx0XHR0b3A6IDA7XHJcblx0fVxyXG5cdC5pdGVtX3N5c3RlbXtcclxuXHRcdHRleHQtYWxpZ246IGNlbnRlcjtcclxuXHRcdG1hcmdpbi10b3A6IDIwcHg7XHJcblx0fVxyXG5cdC5pdGVtX3N5c3RlbV90ZXh0e1xyXG5cdFx0Zm9udC1zaXplOiAxMnB4O1xyXG5cdFx0Y29sb3I6ICNhYWE7XHJcblx0XHR0ZXh0LWFsaWduOiBjZW50ZXI7XHJcblx0fVxyXG5cdC5pdGVte1xyXG5cdFx0ZmxleC1kaXJlY3Rpb246IHJvdztcclxuXHRcdG1hcmdpbjogMTBweDtcblx0XHRtYXJnaW4tdG9wOiAyMHB4O1xyXG5cdH1cclxuXHQudXNlcl9oZWFkX2JveHtcclxuXHRcdGRpc3BsYXk6IGZsZXg7XHJcblx0XHR3aWR0aDogNTBweDtcclxuXHR9XHJcblx0LnVzZXJfaGVhZF9pbWFnZXtcclxuXHRcdHdpZHRoOiA0MHB4O1xyXG5cdFx0aGVpZ2h0OiA0MHB4O1xyXG5cdH1cclxuXHQuY2hhdF9pdGVtX2JvZHl7XHJcblx0fVxuXHQuY2hhdF9pdGVtX3VzZXJfbmFtZXtcblx0XHRmb250LXNpemU6IDE2cHg7XG5cdFx0Y29sb3I6ICMzMzM7XG5cdH1cblx0LmNoYXRfaXRlbV90ZXh0e1xuXHRcdG1hcmdpbi10b3A6IDVweDtcblx0XHRib3JkZXItcmFkaXVzOiA1cHg7XG5cdFx0YmFja2dyb3VuZC1jb2xvcjogI0NDQ0NDQztcblx0XHRjb2xvcjogIzMzMztcblx0XHRwYWRkaW5nOiA1cHggMTBweDtcclxuXHRcdGZvbnQtc2l6ZTogMTVweDtcblx0fVxuXHQuY2hhdF9pdGVtX2ltYWdlX2JveHtcblx0XHRiYWNrZ3JvdW5kLWNvbG9yOiByZWQ7XG5cdH1cblx0LmNoYXRfaXRlbV9pbWFnZV9jb250ZW50e1xuXHRcdHdpZHRoOiAxMDAlO1xuXHRcdGhlaWdodDogMTAwJTtcblx0fVxyXG48L3N0eWxlPlxyXG48dGVtcGxhdGU+XHJcblx0PHZpZXcgY2xhc3M9XCJ1bmlhcHBcIj5cclxuXHRcdDxibG9jayB2LWlmPVwic2hvd1Jvb21QYWdlXCI+XHJcblx0XHRcdDxzY3JvbGwtdmlldyBAY2xpY2s9XCJoaXN0b3J5Q2xpY2tlZFwiIGNsYXNzPVwiaGlzdG9yeUxpc3RcIiBpZD1cImhpc3RvcnlMaXN0XCIgc2Nyb2xsLXk9XCJ0cnVlXCIgOnNjcm9sbC13aXRoLWFuaW1hdGlvbj1cInRydWVcIlxyXG5cdFx0XHQgOnNjcm9sbC10b3A9XCJzY3JvbGxUb3BcIj5cclxuXHRcdFx0XHQ8dmlldyBpZD1cImhpc3RvcnlCb3hcIj5cclxuXHRcdFx0XHRcdDxibG9jayB2LWZvcj1cIihpdGVtLGluZGV4KSBpbiBoaXN0b3J5TGlzdFwiPlxyXG5cdFx0XHRcdFx0XHQ8dmlldyA6Y2xhc3M9XCJpdGVtLnVzZXIudXNlcl9pZD09dXNlckluZm8udXNlcl9pZD8naXRlbV9taW5lJzonaXRlbSdcIiB2LWlmPVwiaXRlbS50eXBlPT0ndGV4dCdcIiA6aWQ9XCInc2hhXycraXRlbS5zaGFcIj5cclxuXHRcdFx0XHRcdFx0XHQ8dmlldyBjbGFzcz1cInVzZXJfaGVhZF9ib3hcIj5cclxuXHRcdFx0XHRcdFx0XHRcdDxpbWFnZSBjbGFzcz1cInVzZXJfaGVhZF9pbWFnZVwiIDpzcmM9XCJpdGVtLnVzZXIudXNlcl9oZWFkXCIgQGxvbmd0YXA9XCJkb0F0VXNlcihpdGVtLnVzZXIpXCIgQHRhcD1cInNob3dNZW51VXNlckhlYWQoaXRlbSlcIj48L2ltYWdlPlxyXG5cdFx0XHRcdFx0XHRcdDwvdmlldz5cclxuXHRcdFx0XHRcdFx0XHQ8dmlldyBjbGFzcz1cImNoYXRfaXRlbV9ib2R5XCI+XHJcblx0XHRcdFx0XHRcdFx0XHQ8dGV4dCBjbGFzcz1cImNoYXRfaXRlbV91c2VyX25hbWVcIj57e2l0ZW0udXNlci51c2VyX25hbWV9fTwvdGV4dD5cclxuXHRcdFx0XHRcdFx0XHRcdDxibG9jayB2LWlmPVwiIWl0ZW0uYXRcIj5cclxuXHRcdFx0XHRcdFx0XHRcdFx0PHRleHQgY2xhc3M9XCJjaGF0X2l0ZW1fdGV4dFwiIHYtaWY9XCJpdGVtLnVzZXIudXNlcl9pZD09dXNlckluZm8udXNlcl9pZCAmJiB1c2VySW5mby51c2VyX3NleD09MVwiIHN0eWxlPVwiYmFja2dyb3VuZC1jb2xvcjogIzY2Q0JGRjtjb2xvcjpibGFjaztcIj57e3VybGRlY29kZShpdGVtLmNvbnRlbnQpfX08L3RleHQ+XHJcblx0XHRcdFx0XHRcdFx0XHRcdDx0ZXh0IGNsYXNzPVwiY2hhdF9pdGVtX3RleHRcIiB2LWlmPVwiaXRlbS51c2VyLnVzZXJfaWQ9PXVzZXJJbmZvLnVzZXJfaWQgJiYgdXNlckluZm8udXNlcl9zZXg9PTBcIiBzdHlsZT1cImJhY2tncm91bmQtY29sb3I6ICNGRTk4OTg7Y29sb3I6d2hpdGU7XCI+e3t1cmxkZWNvZGUoaXRlbS5jb250ZW50KX19PC90ZXh0PlxyXG5cdFx0XHRcdFx0XHRcdFx0XHQ8dGV4dCBjbGFzcz1cImNoYXRfaXRlbV90ZXh0XCIgdi1pZj1cIml0ZW0udXNlci51c2VyX2lkIT11c2VySW5mby51c2VyX2lkXCI+e3t1cmxkZWNvZGUoaXRlbS5jb250ZW50KX19PC90ZXh0PlxyXG5cdFx0XHRcdFx0XHRcdFx0PC9ibG9jaz5cclxuXHRcdFx0XHRcdFx0XHRcdDxibG9jayB2LWlmPVwiaXRlbS5hdFwiPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHQ8dGV4dCBjbGFzcz1cImNoYXRfaXRlbV90ZXh0XCIgdi1pZj1cIml0ZW0uYXQudXNlcl9pZD09dXNlckluZm8udXNlcl9pZFwiIHN0eWxlPVwiYmFja2dyb3VuZC1jb2xvcjogIzY2Njtjb2xvcjp3aGl0ZTtcIlxyXG5cdFx0XHRcdFx0XHRcdFx0XHQgdi1odG1sPVwiJ0AnK3VybGRlY29kZShpdGVtLmF0LnVzZXJfbmFtZSkrJyAnK3VybGRlY29kZShpdGVtLmNvbnRlbnQpXCI+PC90ZXh0PlxyXG5cdFx0XHRcdFx0XHRcdFx0XHQ8dGV4dCBjbGFzcz1cImNoYXRfaXRlbV90ZXh0XCIgdi1pZj1cIml0ZW0uYXQudXNlcl9pZCE9dXNlckluZm8udXNlcl9pZCYmaXRlbS51c2VyLnVzZXJfaWQ9PXVzZXJJbmZvLnVzZXJfaWQgJiYgdXNlckluZm8udXNlcl9zZXg9PTFcIlxyXG5cdFx0XHRcdFx0XHRcdFx0XHQgc3R5bGU9XCJiYWNrZ3JvdW5kLWNvbG9yOiAjNjZDQkZGO2NvbG9yOmJsYWNrO1wiIHYtaHRtbD1cIidAJyt1cmxkZWNvZGUoaXRlbS5hdC51c2VyX25hbWUpKycgJyt1cmxkZWNvZGUoaXRlbS5jb250ZW50KVwiPjwvdGV4dD5cclxuXHRcdFx0XHRcdFx0XHRcdFx0PHRleHQgY2xhc3M9XCJjaGF0X2l0ZW1fdGV4dFwiIHYtaWY9XCJpdGVtLmF0LnVzZXJfaWQhPXVzZXJJbmZvLnVzZXJfaWQmJml0ZW0udXNlci51c2VyX2lkPT11c2VySW5mby51c2VyX2lkICYmIHVzZXJJbmZvLnVzZXJfc2V4PT0wXCJcclxuXHRcdFx0XHRcdFx0XHRcdFx0IHN0eWxlPVwiYmFja2dyb3VuZC1jb2xvcjogI0ZFOTg5ODtjb2xvcjp3aGl0ZTtcIiB2LWh0bWw9XCInQCcrdXJsZGVjb2RlKGl0ZW0uYXQudXNlcl9uYW1lKSsnICcrdXJsZGVjb2RlKGl0ZW0uY29udGVudClcIj48L3RleHQ+XHJcblx0XHRcdFx0XHRcdFx0XHRcdDx0ZXh0IGNsYXNzPVwiY2hhdF9pdGVtX3RleHRcIiB2LWlmPVwiaXRlbS5hdC51c2VyX2lkIT11c2VySW5mby51c2VyX2lkJiZpdGVtLnVzZXIudXNlcl9pZCE9dXNlckluZm8udXNlcl9pZFwiXHJcblx0XHRcdFx0XHRcdFx0XHRcdCB2LWh0bWw9XCInQCcrdXJsZGVjb2RlKGl0ZW0uYXQudXNlcl9uYW1lKSsnICcrdXJsZGVjb2RlKGl0ZW0uY29udGVudClcIj48L3RleHQ+XHJcblx0XHRcdFx0XHRcdFx0XHQ8L2Jsb2NrPlxyXG5cdFx0XHRcdFx0XHRcdDwvdmlldz5cclxuXHRcdFx0XHRcdFx0PC92aWV3PlxyXG5cdFx0XHRcdFx0XHQ8dmlldyA6Y2xhc3M9XCJpdGVtLnVzZXIudXNlcl9pZD09dXNlckluZm8udXNlcl9pZD8naXRlbV9taW5lJzonaXRlbSdcIiB2LWlmPVwiaXRlbS50eXBlPT0naW1nJ1wiIDppZD1cIidzaGFfJytpdGVtLnNoYVwiPlxyXG5cdFx0XHRcdFx0XHRcdDx2aWV3IGNsYXNzPVwidXNlcl9oZWFkX2JveFwiPlxyXG5cdFx0XHRcdFx0XHRcdFx0PGltYWdlIGNsYXNzPVwidXNlcl9oZWFkX2ltYWdlXCIgOnNyYz1cIml0ZW0udXNlci51c2VyX2hlYWRcIiBAbG9uZ3ByZXNzPVwiZG9BdFVzZXIoaXRlbS51c2VyKVwiPjwvaW1hZ2U+XHJcblx0XHRcdFx0XHRcdFx0PC92aWV3PlxyXG5cdFx0XHRcdFx0XHRcdDx2aWV3IGNsYXNzPVwiY2hhdF9pdGVtX2JvZHlcIj5cclxuXHRcdFx0XHRcdFx0XHRcdDx0ZXh0IGNsYXNzPVwiY2hhdF9pdGVtX3VzZXJfbmFtZVwiPnt7aXRlbS51c2VyLnVzZXJfbmFtZX19PC90ZXh0PlxyXG5cdFx0XHRcdFx0XHRcdFx0PHZpZXcgY2xhc3M9XCJjaGF0X2l0ZW1faW1hZ2VfYm94XCI+XHJcblx0XHRcdFx0XHRcdFx0XHRcdDxpbWFnZSBjbGFzcz1cImNoYXRfaXRlbV9pbWFnZV9jb250ZW50XCIgOnNyYz1cImdldFN0YXRpY1VybCh1cmxkZWNvZGUoaXRlbS5jb250ZW50KSlcIiBtb2RlPVwid2lkdGhGaXhcIiBAY2xpY2s9XCJmdWxsVmlld0ltYWdlKGdldFN0YXRpY1VybCh1cmxkZWNvZGUoaXRlbS5yZXNvdXJjZSkpKVwiPjwvaW1hZ2U+XHJcblx0XHRcdFx0XHRcdFx0XHQ8L3ZpZXc+XHJcblx0XHRcdFx0XHRcdFx0PC92aWV3PlxyXG5cdFx0XHRcdFx0XHQ8L3ZpZXc+XHJcblx0XHRcdFx0XHRcdDx2aWV3IGNsYXNzPVwiaXRlbV9zeXN0ZW1cIiB2LWlmPVwiaXRlbS50eXBlPT0nc3lzdGVtJ1wiPlxyXG5cdFx0XHRcdFx0XHRcdDx0ZXh0IGNsYXNzPVwiaXRlbV9zeXN0ZW1fdGV4dFwiPnt7aXRlbS5jb250ZW50fX08L3RleHQ+XHJcblx0XHRcdFx0XHRcdDwvdmlldz5cclxuXHRcdFx0XHRcdDwvYmxvY2s+XHJcblx0XHRcdFx0PC92aWV3PlxyXG5cdFx0XHQ8L3Njcm9sbC12aWV3PlxyXG5cdFx0XHQ8dmlldyBjbGFzcz1cImNoYXRGb3JtXCI+XHJcblx0XHRcdFx0PGZvcm0gQHN1Ym1pdD1cImRvU2VuZE1lc3NhZ2VcIj5cclxuXHRcdFx0XHRcdDxpbnB1dCBjbGFzcz1cImNoYXRJbnB1dFwiIHR5cGU9XCJ0ZXh0XCIgY29uZmlybS10eXBlPVwic2VuZFwiIGNvbmZpcm0taG9sZD1cInRydWVcIiBwbGFjZWhvbGRlcj1cIuWFqOWRmOemgeiogOS4rSzkvaDmmoLml7bml6Dms5Xlj5HoqIBcIiB2LW1vZGVsPVwibWVzc2FnZU9iai5tZXNzYWdlXCJcclxuXHRcdFx0XHRcdCB2LWlmPVwiY2hhdFR5cGU9PSd0ZXh0JyAmJiByb29tLnJvb21fc2VuZG1zZz09MVwiIGRpc2FibGVkPVwiZGlzYWJsZWRcIiAvPlxyXG5cdFx0XHRcdFx0PGlucHV0IGNsYXNzPVwiY2hhdElucHV0XCIgdHlwZT1cInRleHRcIiBjb25maXJtLXR5cGU9XCJzZW5kXCIgY29uZmlybS1ob2xkPVwidHJ1ZVwiIHBsYWNlaG9sZGVyPVwi6K+054K55LuA5LmI5ZCnLi4uXCIgdi1tb2RlbD1cIm1lc3NhZ2VPYmoubWVzc2FnZVwiXHJcblx0XHRcdFx0XHQgdi1pZj1cImNoYXRUeXBlPT0ndGV4dCcgJiYgcm9vbS5yb29tX3NlbmRtc2c9PTBcIiBAa2V5ZG93bj1cImRvS2V5RG93blwiIDpmb2N1cz1cIm1lc3NhZ2VPYmouZm9jdXNcIiAvPlxyXG5cdFx0XHRcdFx0PGlucHV0IGRpc2FibGVkPVwiZGlzYWJsZWRcIiB2LWlmPVwiY2hhdFR5cGU9PSd2b2ljZSdcIiBjbGFzcz1cImNoYXRJbnB1dFwiIHR5cGU9XCJ0ZXh0XCIgY29uZmlybS10eXBlPVwic2VuZFwiIGNvbmZpcm0taG9sZD1cInRydWVcIlxyXG5cdFx0XHRcdFx0IHBsYWNlaG9sZGVyPVwi54K55Ye76L+Z6YeM5byA5aeL5b2V6Z+zXCI+XHJcblx0XHRcdFx0PC9mb3JtPlxyXG5cdFx0XHRcdDx2aWV3IGNsYXNzPVwiY2hhdEJ1dHRvblwiPlxyXG5cdFx0XHRcdFx0PHZpZXcgY2xhc3M9XCJjaGF0VHlwZSBjaGF0SWNvblwiIHYtaWY9XCJjaGF0VHlwZT09J3ZvaWNlJyAmJiByb29tLnJvb21fc2VuZG1zZz09MFwiIEBjbGljaz1cImNoYXRUeXBlPSd0ZXh0J1wiPjxpIGNsYXNzPVwiaWNvbmZvbnQgaWNvbi1jaGFuZ3lvbmd0dWJpYW8tbWlhbnhpbmctMjFcIj48L2k+PC92aWV3PlxyXG5cdFx0XHRcdFx0PHZpZXcgY2xhc3M9XCJjaGF0VHlwZSBjaGF0SWNvblwiIHYtaWY9XCJjaGF0VHlwZT09J3RleHQnICYmIHJvb20ucm9vbV9zZW5kbXNnPT0wXCIgQGNsaWNrPVwiY2hhdFR5cGU9J3ZvaWNlJ1wiPjxpIGNsYXNzPVwiaWNvbmZvbnQgaWNvbi1jaGFuZ3lvbmd0dWJpYW8tbWlhbnhpbmctMzZcIj48L2k+PC92aWV3PlxyXG5cdFx0XHRcdFx0PHZpZXcgY2xhc3M9XCJjaGF0TW9yZSBjaGF0SWNvblwiIEBjbGljaz1cInNob3dNZW51Qm94PXRydWVcIj48aSBjbGFzcz1cImljb25mb250IGljb24taWNvbl9yb3VuZGFkZF9maWxsXCI+PC9pPjwvdmlldz5cclxuXHRcdFx0XHQ8L3ZpZXc+XHJcblx0XHRcdDwvdmlldz5cclxuXHRcdFx0PG1vdmFibGUtYXJlYSB3aWR0aD1cIjgwMFwiIGhlaWdodD1cIjgwMFwiIHYtaWY9XCJzb25nLnNvbmdcIj5cclxuXHRcdFx0XHQ8bW92YWJsZS12aWV3IG91dC1vZi1ib3VuZHM9XCJ0cnVlXCIgaW5lcnRpYT1cInRydWVcIiB3aWR0aD1cIjYwcHhcIiBoZWlnaHQ9XCI2MHB4XCIgZGlyZWN0aW9uPVwiYWxsXCIgQGNsaWNrPVwiZG9NdXNpY0NsaWNrZWRcIj5cclxuXHRcdFx0XHRcdDxpbWFnZSBjbGFzcz1cInBsYXllckltYWdlXCIgOmFuaW1hdGlvbj1cImFuaW1hdGlvbkRhdGFcIiA6c3JjPVwic29uZy5zb25nLnBpY1wiPjwvaW1hZ2U+XHJcblx0XHRcdFx0PC9tb3ZhYmxlLXZpZXc+XHJcblx0XHRcdDwvbW92YWJsZS1hcmVhPlxyXG5cdFx0XHQ8dmlldyBjbGFzcz1cIm1lbnVCb3hcIiB2LWlmPVwic2hvd01lbnVCb3hcIj5cclxuXHRcdFx0XHQ8dmlldyBjbGFzcz1cIm1lbnVTaGFkb3dcIiBAY2xpY2s9XCJzaG93TWVudUJveD1mYWxzZVwiPjwvdmlldz5cclxuXHRcdFx0XHQ8dmlldyBjbGFzcz1cIm1lbnVCb2R5XCI+XHJcblx0XHRcdFx0XHQ8dmlldyBjbGFzcz1cIm1lbnVJdGVtXCI+XHJcblx0XHRcdFx0XHRcdDx2aWV3IGNsYXNzPVwibWVudU1haW5cIiBAY2xpY2s9XCJjaG9vc2VJbWFnZVwiPlxyXG5cdFx0XHRcdFx0XHRcdDx2aWV3IGNsYXNzPVwibWVudUljb25cIj5cclxuXHRcdFx0XHRcdFx0XHRcdDx2aWV3IGNsYXNzPVwiaWNvbmZvbnQgaWNvbi1pY29uX3Bob3RvX2ZpbGxcIj48L3ZpZXc+XHJcblx0XHRcdFx0XHRcdFx0PC92aWV3PlxyXG5cdFx0XHRcdFx0XHRcdDx2aWV3IGNsYXNzPVwibWVudVRpdGxlXCI+5Y+R5Zu+PC92aWV3PlxyXG5cdFx0XHRcdFx0XHQ8L3ZpZXc+XHJcblx0XHRcdFx0XHQ8L3ZpZXc+XHJcblx0XHRcdFx0XHQ8dmlldyBjbGFzcz1cIm1lbnVJdGVtXCI+XHJcblx0XHRcdFx0XHRcdDx2aWV3IGNsYXNzPVwibWVudU1haW5cIiBAY2xpY2s9XCJkb09wZW5QYWdlKCdhZGRTb25nJylcIj5cclxuXHRcdFx0XHRcdFx0XHQ8dmlldyBjbGFzcz1cIm1lbnVJY29uXCI+XHJcblx0XHRcdFx0XHRcdFx0XHQ8dmlldyBjbGFzcz1cImljb25mb250IGljb24taWNvbl9pbnZpdGVfZmlsbFwiPjwvdmlldz5cclxuXHRcdFx0XHRcdFx0XHQ8L3ZpZXc+XHJcblx0XHRcdFx0XHRcdFx0PHZpZXcgY2xhc3M9XCJtZW51VGl0bGVcIj7ngrnmrYw8L3ZpZXc+XHJcblx0XHRcdFx0XHRcdDwvdmlldz5cclxuXHRcdFx0XHRcdDwvdmlldz5cclxuXHRcdFx0XHRcdDx2aWV3IGNsYXNzPVwibWVudUl0ZW1cIj5cclxuXHRcdFx0XHRcdFx0PHZpZXcgY2xhc3M9XCJtZW51TWFpblwiIEBjbGljaz1cImRvT3BlblBhZ2UoJ3NvbmdMaXN0JylcIj5cclxuXHRcdFx0XHRcdFx0XHQ8dmlldyBjbGFzcz1cIm1lbnVJY29uXCI+XHJcblx0XHRcdFx0XHRcdFx0XHQ8dmlldyBjbGFzcz1cImljb25mb250IGljb24taWNvbl9kaW5ndGFiXCI+PC92aWV3PlxyXG5cdFx0XHRcdFx0XHRcdDwvdmlldz5cclxuXHRcdFx0XHRcdFx0XHQ8dmlldyBjbGFzcz1cIm1lbnVUaXRsZVwiPuW3sueCuTwvdmlldz5cclxuXHRcdFx0XHRcdFx0PC92aWV3PlxyXG5cdFx0XHRcdFx0PC92aWV3PlxyXG5cdFx0XHRcdFx0PHZpZXcgY2xhc3M9XCJtZW51SXRlbVwiPlxyXG5cdFx0XHRcdFx0XHQ8dmlldyBjbGFzcz1cIm1lbnVNYWluXCIgQGNsaWNrPVwiZG9PcGVuUGFnZSgnbXlTb25nJylcIj5cclxuXHRcdFx0XHRcdFx0XHQ8dmlldyBjbGFzcz1cIm1lbnVJY29uXCI+XHJcblx0XHRcdFx0XHRcdFx0XHQ8dmlldyBjbGFzcz1cImljb25mb250IGljb24taWNvbl9wZW9wbGVfZmlsbFwiPjwvdmlldz5cclxuXHRcdFx0XHRcdFx0XHQ8L3ZpZXc+XHJcblx0XHRcdFx0XHRcdFx0PHZpZXcgY2xhc3M9XCJtZW51VGl0bGVcIj7miJHnmoQ8L3ZpZXc+XHJcblx0XHRcdFx0XHRcdDwvdmlldz5cclxuXHRcdFx0XHRcdDwvdmlldz5cclxuXHRcdFx0XHRcdDx2aWV3IGNsYXNzPVwibWVudUl0ZW1cIj5cclxuXHRcdFx0XHRcdFx0PHZpZXcgY2xhc3M9XCJtZW51TWFpblwiIEBjbGljaz1cImRvT3BlblBhZ2UoJ29uTGluZScpXCI+XHJcblx0XHRcdFx0XHRcdFx0PHZpZXcgY2xhc3M9XCJtZW51SWNvblwiPlxyXG5cdFx0XHRcdFx0XHRcdFx0PHZpZXcgY2xhc3M9XCJpY29uZm9udCBpY29uLWljb25fbWVldGluZ19maWxsXCI+PC92aWV3PlxyXG5cdFx0XHRcdFx0XHRcdDwvdmlldz5cclxuXHRcdFx0XHRcdFx0XHQ8dmlldyBjbGFzcz1cIm1lbnVUaXRsZVwiPuWcqOe6vzwvdmlldz5cclxuXHRcdFx0XHRcdFx0PC92aWV3PlxyXG5cdFx0XHRcdFx0PC92aWV3PlxyXG5cdFx0XHRcdFx0PHZpZXcgY2xhc3M9XCJtZW51SXRlbVwiPlxyXG5cdFx0XHRcdFx0XHQ8dmlldyBjbGFzcz1cIm1lbnVNYWluXCIgQGNsaWNrPVwiZG9PcGVuUGFnZSgnaW52YXRlJylcIj5cclxuXHRcdFx0XHRcdFx0XHQ8dmlldyBjbGFzcz1cIm1lbnVJY29uXCI+XHJcblx0XHRcdFx0XHRcdFx0XHQ8dmlldyBjbGFzcz1cImljb25mb250IGljb24tY2hhbmd5b25ndHViaWFvLW1pYW54aW5nLTM3XCI+PC92aWV3PlxyXG5cdFx0XHRcdFx0XHRcdDwvdmlldz5cclxuXHRcdFx0XHRcdFx0XHQ8dmlldyBjbGFzcz1cIm1lbnVUaXRsZVwiPumCgOivtzwvdmlldz5cclxuXHRcdFx0XHRcdFx0PC92aWV3PlxyXG5cdFx0XHRcdFx0PC92aWV3PlxyXG5cdFx0XHRcdFx0PHZpZXcgY2xhc3M9XCJtZW51SXRlbVwiPlxyXG5cdFx0XHRcdFx0XHQ8dmlldyBjbGFzcz1cIm1lbnVNYWluXCIgQGNsaWNrPVwiZG9PcGVuUGFnZSgnc2V0dGluZycpXCI+XHJcblx0XHRcdFx0XHRcdFx0PHZpZXcgY2xhc3M9XCJtZW51SWNvblwiPlxyXG5cdFx0XHRcdFx0XHRcdFx0PHZpZXcgY2xhc3M9XCJpY29uZm9udCBpY29uLWNoYW5neW9uZ3R1Ymlhby1taWFueGluZy0zMlwiPjwvdmlldz5cclxuXHRcdFx0XHRcdFx0XHQ8L3ZpZXc+XHJcblx0XHRcdFx0XHRcdFx0PHZpZXcgY2xhc3M9XCJtZW51VGl0bGVcIj7nrqHnkIY8L3ZpZXc+XHJcblx0XHRcdFx0XHRcdDwvdmlldz5cclxuXHRcdFx0XHRcdDwvdmlldz5cclxuXHRcdFx0XHQ8L3ZpZXc+XHJcblx0XHRcdDwvdmlldz5cclxuXHRcdDwvYmxvY2s+XHJcblx0XHQ8dmlldyBjbGFzcz1cImZvcm1QYXNzd29yZFwiIHYtaWY9XCJzaG93UGFzc3dvcmRGb3JtXCI+XHJcblx0XHRcdDxmb3JtIEBzdWJtaXQ9XCJnZXRSb29tSW5mb1wiPlxyXG5cdFx0XHRcdDx2aWV3IGNsYXNzPVwiZm9ybVBhc3N3b3JkVGl0bGVcIj7or7fovpPlhaXlr4bnoIHov5vlhaXmiL/pl7Q8L3ZpZXc+XHJcblx0XHRcdFx0PHZpZXcgY2xhc3M9XCJmb3JtUGFzc3dvcmRJbnB1dFwiPlxyXG5cdFx0XHRcdFx0PGlucHV0IHR5cGU9XCJudW1iZXJcIiBwbGFjZWhvbGRlcj1cIuivt+i+k+WFpeWvhueggVwiIHBhc3N3b3JkPVwidHJ1ZVwiIHYtbW9kZWw9XCJwYXNzd29yZFwiIGNvbmZpcm0tdHlwZT1cInNlYXJjaFwiIGNvbmZpcm0taG9sZD1cInRydWVcIiAvPlxyXG5cdFx0XHRcdDwvdmlldz5cclxuXHRcdFx0PC9mb3JtPlxyXG5cdFx0PC92aWV3PlxyXG5cdDwvdmlldz5cclxuPC90ZW1wbGF0ZT5cclxuXHJcbjxzY3JpcHQ+XHJcblx0ZXhwb3J0IGRlZmF1bHQge1xyXG5cdFx0ZGF0YSgpIHtcclxuXHRcdFx0cmV0dXJuIHtcclxuXHRcdFx0XHQvLyDogYrlpKnpobXpnaLml7bml7bmu5rliqjmoLflvI9cclxuXHRcdFx0XHRzY3JvbGxUb3A6IDAsXHJcblx0XHRcdFx0c3R5bGU6IHtcclxuXHRcdFx0XHRcdHBhZ2VIZWlnaHQ6IDAsXHJcblx0XHRcdFx0XHRjb250ZW50Vmlld0hlaWdodDogMCxcclxuXHRcdFx0XHRcdGZvb3RWaWV3SGVpZ2h0OiA5MCxcclxuXHRcdFx0XHRcdG1pdGVtSGVpZ2h0OiAwXHJcblx0XHRcdFx0fSxcclxuXHRcdFx0XHRiZ0F1ZGlvTWFubmFnZXI6IG51bGwsXHJcblx0XHRcdFx0Y29uZmlnOiB7XHJcblx0XHRcdFx0XHRsb2NrU2NyZWVuOiBmYWxzZSxcclxuXHRcdFx0XHR9LFxyXG5cdFx0XHRcdHNob3dNZW51Qm94OiBmYWxzZSxcclxuXHRcdFx0XHRsb2FkaW5nOiBmYWxzZSxcclxuXHRcdFx0XHRzaG93Um9vbVBhZ2U6IGZhbHNlLFxyXG5cdFx0XHRcdHNob3dQYXNzd29yZEZvcm06IGZhbHNlLFxyXG5cdFx0XHRcdGFwcDogZ2V0QXBwKCksXHJcblx0XHRcdFx0dXNlckluZm86IG51bGwsXHJcblx0XHRcdFx0c29uZzoge1xyXG5cdFx0XHRcdFx0c29uZzogbnVsbCxcclxuXHRcdFx0XHRcdHVzZXI6IG51bGwsXHJcblx0XHRcdFx0fSxcclxuXHRcdFx0XHRyb29tX2lkOiAwLFxyXG5cdFx0XHRcdHJvb206IGZhbHNlLFxyXG5cdFx0XHRcdHBhc3N3b3JkOiBcIlwiLFxyXG5cdFx0XHRcdGFuaW1hdGlvbkRhdGE6IHt9LFxyXG5cdFx0XHRcdHJvdGF0ZTogMCxcclxuXHRcdFx0XHRwbGF5ZXJUaW1lcjogbnVsbCxcclxuXHRcdFx0XHRjaGF0VHlwZTogJ3RleHQnLFxyXG5cdFx0XHRcdGhpc3RvcnlLZXk6ICdoaXN0b3J5TGlzdF8nLFxyXG5cdFx0XHRcdGhpc3RvcnlMaXN0OiBbXSxcclxuXHRcdFx0XHRtZXNzYWdlT2JqOiB7XHJcblx0XHRcdFx0XHRtZXNzYWdlOiBcIlwiLFxyXG5cdFx0XHRcdFx0YXQ6IGZhbHNlLFxyXG5cdFx0XHRcdFx0Zm9jdXM6IGZhbHNlLFxyXG5cdFx0XHRcdH0sXHJcblx0XHRcdH1cclxuXHRcdH0sXHJcblx0XHRvbkxvYWQoKSB7XHJcblx0XHRcdGxldCB0aGF0ID0gdGhpcztcclxuXHRcdFx0dGhhdC5iZ0F1ZGlvTWFubmFnZXIgPSB1bmkuZ2V0QmFja2dyb3VuZEF1ZGlvTWFuYWdlcigpO1xyXG5cdFx0XHR0aGlzLnJvb21faWQgPSB1bmkuZ2V0U3RvcmFnZVN5bmMoJ3Jvb21faWQnKSB8fCA4ODg7XHJcblx0XHRcdC8vIHRoaXMucnVuUGxheUFuaW1hdGlvbigpO1xyXG5cdFx0XHR0aGF0LmFwcC51c2VyLmdldE15SW5mbyh7XHJcblx0XHRcdFx0c3VjY2Vzcyh1c2VySW5mbykge1xyXG5cdFx0XHRcdFx0dGhhdC51c2VySW5mbyA9IHVzZXJJbmZvO1xyXG5cdFx0XHRcdFx0dGhhdC5nZXRSb29tSW5mbygpO1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0fSk7XHJcblx0XHRcdHVuaS4kb24oJ1dlYlNvY2tldE1lc3NhZ2UnLCBmdW5jdGlvbihkYXRhKSB7XHJcblx0XHRcdFx0Y29uc29sZS5sb2coZGF0YSk7XHJcblx0XHRcdFx0dHJ5IHtcclxuXHRcdFx0XHRcdHRoYXQubWVzc2FnZUNvbnRyb2xsZXIoSlNPTi5wYXJzZShkYXRhKSk7XHJcblx0XHRcdFx0fSBjYXRjaCAoZXJyb3IpIHtcclxuXHRcdFx0XHRcdGNvbnNvbGUuZXJyb3IoZXJyb3IpO1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0fSk7XHJcblx0XHRcdHVuaS4kb24oJ0luZGV4UmVsb2FkJywgZnVuY3Rpb24oKSB7XHJcblx0XHRcdFx0dGhhdC5hcHAudXNlci5nZXRNeUluZm8oe1xyXG5cdFx0XHRcdFx0c3VjY2Vzcyh1c2VySW5mbykge1xyXG5cdFx0XHRcdFx0XHR0aGF0LnVzZXJJbmZvID0gdXNlckluZm87XHJcblx0XHRcdFx0XHRcdHRoYXQuZ2V0Um9vbUluZm8oKTtcclxuXHRcdFx0XHRcdH1cclxuXHRcdFx0XHR9KTtcclxuXHRcdFx0fSk7XHJcblx0XHRcdHVuaS4kb24oJ0F0VXNlckV2ZW50JywgZnVuY3Rpb24odXNlcikge1xyXG5cdFx0XHRcdHRoYXQuZG9BdFVzZXIodXNlcik7XHJcblx0XHRcdH0pO1xyXG5cdFx0XHR1bmkuJG9uKCdSb29tQ2hhbmdlZCcsIGZ1bmN0aW9uKHJvb21faWQpIHtcclxuXHRcdFx0XHR1bmkuc2V0TmF2aWdhdGlvbkJhclRpdGxlKHtcclxuXHRcdFx0XHRcdHRpdGxlOiAn5q2j5Zyo6L+b5YWlJ1xyXG5cdFx0XHRcdH0pO1xyXG5cdFx0XHRcdHRoYXQucm9vbV9pZCA9IHJvb21faWQ7XHJcblx0XHRcdFx0dGhhdC5zaG93UGFzc3dvcmRGb3JtID0gZmFsc2U7XHJcblx0XHRcdFx0dGhhdC5zaG93Um9vbVBhZ2UgPSBmYWxzZTtcclxuXHRcdFx0XHR0aGF0LnBhc3N3b3JkID0gJyc7XHJcblx0XHRcdFx0dW5pLnNldFN0b3JhZ2VTeW5jKCdyb29tX2lkJywgcGFyc2VJbnQodGhhdC5yb29tX2lkKSk7XHJcblx0XHRcdFx0dGhhdC5nZXRSb29tSW5mbygpO1xyXG5cdFx0XHR9KTtcclxuXHRcdFx0dW5pLm9uS2V5Ym9hcmRIZWlnaHRDaGFuZ2UoZnVuY3Rpb24oZSkge1xyXG5cdFx0XHRcdGNvbnN0IHJlcyA9IHVuaS5nZXRTeXN0ZW1JbmZvU3luYygpOyAvL+iOt+WPluaJi+acuuWPr+S9v+eUqOeql+WPo+mrmOW6plxyXG5cdFx0XHRcdHRoYXQuc3R5bGUucGFnZUhlaWdodCA9IHJlcy53aW5kb3dIZWlnaHQ7XHJcblx0XHRcdFx0dGhhdC5zdHlsZS5jb250ZW50Vmlld0hlaWdodCA9IHJlcy53aW5kb3dIZWlnaHQgLSB1bmkuZ2V0U3lzdGVtSW5mb1N5bmMoKS5zY3JlZW5XaWR0aCAvIDc1MCAqICgxMDApIC0gKGUuaGVpZ2h0ID09XHJcblx0XHRcdFx0XHQwID8gNDAgOiAyMCkgLSBlLmhlaWdodDsgLy/lg4/ntKAgXHJcblx0XHRcdFx0dGhhdC5hdXRvU2Nyb2xsKCk7XHJcblx0XHRcdH0pO1xyXG5cdFx0XHR0aGF0LmJnQXVkaW9NYW5uYWdlci5vbkNhbnBsYXkoZnVuY3Rpb24oKSB7XHJcblx0XHRcdFx0Ly8gdGhhdC5ydW5QbGF5QW5pbWF0aW9uKCk7XHJcblx0XHRcdFx0bGV0IHRpbWUgPSBwYXJzZUludChuZXcgRGF0ZSgpLnZhbHVlT2YoKSAvIDEwMDApIC0gdGhhdC5zb25nLnNpbmNlIC0gMztcclxuXHRcdFx0XHR0aGF0LmJnQXVkaW9NYW5uYWdlci5zZWVrKHRpbWUgPiAwID8gdGltZSA6IDApO1xyXG5cdFx0XHR9KTtcclxuXHRcdFx0dGhhdC5iZ0F1ZGlvTWFubmFnZXIub25FbmRlZChmdW5jdGlvbigpIHtcclxuXHRcdFx0XHR0aGF0LnN0b3BQbGF5ZXJBbmltYXRpb24oKTtcclxuXHRcdFx0XHR0aGF0LnNvbmcgPSB7XHJcblx0XHRcdFx0XHRzb25nOiBudWxsLFxyXG5cdFx0XHRcdFx0dXNlcjogbnVsbFxyXG5cdFx0XHRcdH07XHJcblx0XHRcdH0pO1xyXG5cdFx0fSxcclxuXHRcdG9uTmF2aWdhdGlvbkJhckJ1dHRvblRhcChyZXMpIHtcclxuXHRcdFx0bGV0IHRoYXQgPSB0aGlzO1xyXG5cdFx0XHRzd2l0Y2ggKHJlcy50ZXh0KSB7XHJcblx0XHRcdFx0Y2FzZSAn5o2i5oi/JzpcclxuXHRcdFx0XHRcdHVuaS5uYXZpZ2F0ZVRvKHtcclxuXHRcdFx0XHRcdFx0dXJsOiBcIi4uL3Jvb20vc2VsZWN0XCJcclxuXHRcdFx0XHRcdH0pO1xyXG5cdFx0XHRcdFx0YnJlYWs7XHJcblx0XHRcdFx0Y2FzZSAn5oiR55qEJzpcclxuXHRcdFx0XHRcdGlmICh0aGF0LnVzZXJJbmZvLnVzZXJfaWQgPD0gMCkge1xyXG5cdFx0XHRcdFx0XHR0aGF0LmFwcC51c2VyLmxvZ2luKCk7XHJcblx0XHRcdFx0XHR9IGVsc2Uge1xyXG5cdFx0XHRcdFx0XHR1bmkubmF2aWdhdGVUbyh7XHJcblx0XHRcdFx0XHRcdFx0dXJsOiAnLi4vdXNlci9pbmRleCcsXHJcblx0XHRcdFx0XHRcdH0pO1xyXG5cdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0YnJlYWs7XHJcblx0XHRcdFx0ZGVmYXVsdDpcclxuXHRcdFx0fVxyXG5cdFx0fSxcclxuXHRcdG1ldGhvZHM6IHtcclxuXHRcdFx0ZG9LZXlEb3duKCkge1xyXG5cdFx0XHRcdGxldCB0aGF0ID0gdGhpcztcclxuXHRcdFx0XHRpZiAodGhhdC5tZXNzYWdlT2JqLmF0KSB7XHJcblx0XHRcdFx0XHRpZiAodGhhdC5tZXNzYWdlT2JqLm1lc3NhZ2UuaW5kZXhPZignQCcgKyBkZWNvZGVVUklDb21wb25lbnQodGhhdC5tZXNzYWdlT2JqLmF0LnVzZXJfbmFtZSkpIDwgMCkge1xyXG5cdFx0XHRcdFx0XHQvL0DnmoTmmLXnp7Dlt7Lnu4/ooqvmlLnov4fkuoZcclxuXHRcdFx0XHRcdFx0dGhhdC5tZXNzYWdlT2JqLmF0ID0gZmFsc2U7XHJcblx0XHRcdFx0XHR9XHJcblx0XHRcdFx0fVxyXG5cdFx0XHR9LFxyXG5cdFx0XHRkb011c2ljQ2xpY2tlZCgpIHtcclxuXHRcdFx0XHRsZXQgdGhhdCA9IHRoaXM7XHJcblx0XHRcdFx0bGV0IG1lbnUgPSBbXHJcblx0XHRcdFx0XHQn5LiN5Zac5qyiJ1xyXG5cdFx0XHRcdF07XHJcblx0XHRcdFx0aWYgKHRoYXQudXNlckluZm8udXNlcl9hZG1pbiB8fCB0aGF0LnJvb20ucm9vbV91c2VyID09IHRoYXQudXNlckluZm8udXNlcl9pZCkge1xyXG5cdFx0XHRcdFx0bWVudSA9IFtcclxuXHRcdFx0XHRcdFx0J+WIh+atjCdcclxuXHRcdFx0XHRcdF07XHJcblx0XHRcdFx0fVxyXG5cdFx0XHRcdHVuaS5zaG93QWN0aW9uU2hlZXQoe1xyXG5cdFx0XHRcdFx0aXRlbUxpc3Q6IG1lbnUsXHJcblx0XHRcdFx0XHRzdWNjZXNzOiBmdW5jdGlvbihyZXMpIHtcclxuXHRcdFx0XHRcdFx0Y29uc29sZS5sb2cocmVzLnRhcEluZGV4KTtcclxuXHRcdFx0XHRcdFx0bGV0IGJ1dHRvbk5hbWUgPSBtZW51W3Jlcy50YXBJbmRleF07XHJcblx0XHRcdFx0XHRcdHN3aXRjaCAoYnV0dG9uTmFtZSkge1xyXG5cdFx0XHRcdFx0XHRcdGNhc2UgJ+WIh+atjCc6XHJcblx0XHRcdFx0XHRcdFx0XHR1bmkuc2hvd01vZGFsKHtcclxuXHRcdFx0XHRcdFx0XHRcdFx0dGl0bGU6ICfliIfmrYzmj5DphpInLFxyXG5cdFx0XHRcdFx0XHRcdFx0XHRjb250ZW50OiAn5piv5ZCm56Gu6K6k5YiH5o6J5b2T5YmN5pKt5pS+55qE5q2MPycsXHJcblx0XHRcdFx0XHRcdFx0XHRcdGNhbmNlbFRleHQ6ICflj5bmtognLFxyXG5cdFx0XHRcdFx0XHRcdFx0XHRjb25maXJtQ29sb3I6ICcjRkY0NTAwJyxcclxuXHRcdFx0XHRcdFx0XHRcdFx0Y29uZmlybVRleHQ6ICfliIfmrYwnLFxyXG5cdFx0XHRcdFx0XHRcdFx0XHRzdWNjZXNzOiBmdW5jdGlvbihyZXMpIHtcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRpZiAocmVzLmNvbmZpcm0pIHtcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdHRoYXQuYXBwLnJlcXVlc3Qoe1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHR1cmw6IFwic29uZy9wYXNzXCIsXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdGRhdGE6IHtcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRyb29tX2lkOiB0aGF0LnJvb21faWQsXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0bWlkOiB0aGF0LnNvbmcuc29uZy5taWRcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0fSxcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0c3VjY2VzczogZnVuY3Rpb24oKSB7fVxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0fSk7XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHRcdFx0XHR9KTtcclxuXHRcdFx0XHRcdFx0XHRcdGJyZWFrO1xyXG5cdFx0XHRcdFx0XHRcdGNhc2UgJ+S4jeWWnOasoic6XHJcblx0XHRcdFx0XHRcdFx0XHR0aGF0LmFwcC5yZXF1ZXN0KHtcclxuXHRcdFx0XHRcdFx0XHRcdFx0dXJsOiBcInNvbmcvcGFzc1wiLFxyXG5cdFx0XHRcdFx0XHRcdFx0XHRkYXRhOiB7XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0cm9vbV9pZDogdGhhdC5yb29tX2lkLFxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdG1pZDogdGhhdC5zb25nLnNvbmcubWlkXHJcblx0XHRcdFx0XHRcdFx0XHRcdH0sXHJcblx0XHRcdFx0XHRcdFx0XHRcdHN1Y2Nlc3M6IGZ1bmN0aW9uKHJlcykge1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdHRoYXQuYmdBdWRpb01hbm5hZ2VyLnBhdXNlKCk7XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0dGhhdC5zdG9wUGxheWVyQW5pbWF0aW9uKCk7XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0dGhhdC5zb25nID0ge1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0c29uZzogbnVsbCxcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdHVzZXI6IG51bGxcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHR9O1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdHVuaS5zaG93TW9kYWwoe1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0dGl0bGU6ICfkuI3llpzmrKInLFxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0Y29udGVudDogcmVzLm1zZyxcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdHNob3dDYW5jZWw6IGZhbHNlLFxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0c3VjY2VzczogZnVuY3Rpb24oKSB7fVxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdH0pXHJcblx0XHRcdFx0XHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdFx0XHRcdH0pO1xyXG5cdFx0XHRcdFx0XHRcdFx0YnJlYWs7XHJcblx0XHRcdFx0XHRcdFx0ZGVmYXVsdDpcclxuXHRcdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0fVxyXG5cdFx0XHRcdH0pXHJcblx0XHRcdH0sXHJcblx0XHRcdGRvQXRVc2VyKHVzZXIpIHtcclxuXHRcdFx0XHRsZXQgdGhhdCA9IHRoaXM7XHJcblx0XHRcdFx0dGhhdC5tZXNzYWdlT2JqLmF0ID0gdXNlcjtcclxuXHRcdFx0XHR0aGF0Lm1lc3NhZ2VPYmoubWVzc2FnZSA9IFwiQFwiICsgZGVjb2RlVVJJQ29tcG9uZW50KHVzZXIudXNlcl9uYW1lKSArIFwiIFwiICsgdGhhdC5tZXNzYWdlT2JqLm1lc3NhZ2U7XHJcblx0XHRcdFx0dGhhdC5tZXNzYWdlT2JqLmZvY3VzID0gdHJ1ZTtcclxuXHRcdFx0fSxcclxuXHRcdFx0YXV0b1Njcm9sbCgpIHtcclxuXHRcdFx0XHRsZXQgdGhhdCA9IHRoaXM7XHJcblx0XHRcdFx0Ly8gdGhhdC4kbmV4dFRpY2soZnVuY3Rpb24oKSB7XHJcblx0XHRcdFx0Ly8gXHRsZXQgcXVlcnkgPSB1bmkuY3JlYXRlU2VsZWN0b3JRdWVyeSgpO1xyXG5cdFx0XHRcdC8vIFx0cXVlcnkuc2VsZWN0KCcjaGlzdG9yeUxpc3QnKS5ib3VuZGluZ0NsaWVudFJlY3QoKTtcclxuXHRcdFx0XHQvLyBcdHF1ZXJ5LnNlbGVjdCgnI2hpc3RvcnlCb3gnKS5ib3VuZGluZ0NsaWVudFJlY3QoKTtcclxuXHRcdFx0XHQvLyBcdHF1ZXJ5LmV4ZWMoZnVuY3Rpb24ocmVzKSB7XHJcblx0XHRcdFx0Ly8gXHRcdGlmIChyZXNbMF0gJiYgcmVzWzFdKSB7XHJcblx0XHRcdFx0Ly8gXHRcdFx0Y29uc29sZS5sb2cocmVzWzBdLmhlaWdodCk7XHJcblx0XHRcdFx0Ly8gXHRcdFx0Y29uc29sZS5sb2cocmVzWzFdLmhlaWdodCk7XHJcblx0XHRcdFx0Ly8gXHRcdFx0dGhhdC5zY3JvbGxUb3AgPSByZXNbMV0uaGVpZ2h0IC0gcmVzWzBdLmhlaWdodCArIDE1MDtcclxuXHRcdFx0XHQvLyBcdFx0fVxyXG5cdFx0XHRcdC8vIFx0fSk7XHJcblx0XHRcdFx0Ly8gfSk7XHJcblx0XHRcdH0sXHJcblx0XHRcdGhpc3RvcnlDbGlja2VkKCkge1xyXG5cdFx0XHRcdGxldCB0aGF0ID0gdGhpcztcclxuXHRcdFx0XHR0aGF0LnNob3dNZW51Qm94ID0gZmFsc2U7XHJcblx0XHRcdFx0dW5pLmhpZGVLZXlib2FyZCgpO1xyXG5cdFx0XHR9LFxyXG5cdFx0XHRzYXZlTWVzc2FnZUhpc3RvcnkoKSB7XHJcblx0XHRcdFx0bGV0IHRoYXQgPSB0aGlzO1xyXG5cdFx0XHRcdHVuaS5zZXRTdG9yYWdlU3luYyh0aGF0Lmhpc3RvcnlLZXkgKyB0aGF0LnJvb21faWQsIEpTT04uc3RyaW5naWZ5KHRoYXQuaGlzdG9yeUxpc3QpKTtcclxuXHRcdFx0fSxcclxuXHRcdFx0bWVzc2FnZUNvbnRyb2xsZXIobXNnKSB7XHJcblx0XHRcdFx0bGV0IHRoYXQgPSB0aGlzO1xyXG5cdFx0XHRcdGNvbnNvbGUubG9nKG1zZyk7XHJcblx0XHRcdFx0c3dpdGNoIChtc2cudHlwZSkge1xyXG5cdFx0XHRcdFx0Y2FzZSAndGV4dCc6XHJcblx0XHRcdFx0XHRjYXNlICdpbWcnOlxyXG5cdFx0XHRcdFx0Y2FzZSAnc3lzdGVtJzpcclxuXHRcdFx0XHRcdFx0dGhhdC5hZGRNZXNzYWdlVG9MaXN0KG1zZyk7XHJcblx0XHRcdFx0XHRcdGJyZWFrO1xyXG5cdFx0XHRcdFx0Y2FzZSAnYWRkU29uZyc6XHJcblx0XHRcdFx0XHRcdGlmIChtc2cuYXQpIHtcclxuXHRcdFx0XHRcdFx0XHR0aGF0LmFkZFN5c3RlbU1lc3NhZ2UoZGVjb2RlVVJJQ29tcG9uZW50KG1zZy51c2VyLnVzZXJfbmFtZSkgKyBcIiDpgIHkuobkuIDpppYg44CKXCIgKyBtc2cuc29uZy5uYW1lICsgXCLjgIsg57uZIFwiICtcclxuXHRcdFx0XHRcdFx0XHRcdGRlY29kZVVSSUNvbXBvbmVudChtc2cuYXQudXNlcl9uYW1lKSwgJyMzMzMnKTtcclxuXHRcdFx0XHRcdFx0fSBlbHNlIHtcclxuXHRcdFx0XHRcdFx0XHR0aGF0LmFkZFN5c3RlbU1lc3NhZ2UoZGVjb2RlVVJJQ29tcG9uZW50KG1zZy51c2VyLnVzZXJfbmFtZSkgKyBcIiDngrnkuobkuIDpppbjgIpcIiArIG1zZy5zb25nLm5hbWUgKyBcIuOAi1wiLCAnIzMzMycpO1xyXG5cdFx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHRcdHRoYXQuc2F2ZU1lc3NhZ2VIaXN0b3J5KCk7XHJcblx0XHRcdFx0XHRcdGJyZWFrO1xyXG5cdFx0XHRcdFx0Y2FzZSAncGFzcyc6XHJcblx0XHRcdFx0XHRcdHRoYXQuYWRkU3lzdGVtTWVzc2FnZShkZWNvZGVVUklDb21wb25lbnQobXNnLnVzZXIudXNlcl9uYW1lKSArIFwiIOWIh+aOieS6huOAilwiICsgbXNnLnNvbmcubmFtZSArIFwi44CLXCIsICcjZmY0NTAwJyk7XHJcblx0XHRcdFx0XHRcdHRoYXQuc2F2ZU1lc3NhZ2VIaXN0b3J5KCk7XHJcblx0XHRcdFx0XHRcdGJyZWFrO1xyXG5cdFx0XHRcdFx0Y2FzZSAnY2hhdF9iZyc6XHJcblx0XHRcdFx0XHRcdHRoYXQuYWRkU3lzdGVtTWVzc2FnZShkZWNvZGVVUklDb21wb25lbnQobXNnLnVzZXIudXNlcl9uYW1lKSArIFwiIOi/kOawlOWkp+eIhuWPkSzop6blj5HkuobngrnmrYzog4zmma/lopnnibnmlYgoMeWwj+aXtuWGheaSreaUvuatjOabsuaXtuacieaViCkhXCIsICdncmVlbicsICcjZWVlJyk7XHJcblx0XHRcdFx0XHRcdHRoYXQuc2F2ZU1lc3NhZ2VIaXN0b3J5KCk7XHJcblx0XHRcdFx0XHRcdGJyZWFrO1xyXG5cdFx0XHRcdFx0Y2FzZSAncHVzaCc6XHJcblx0XHRcdFx0XHRcdHRoYXQuYWRkU3lzdGVtTWVzc2FnZShkZWNvZGVVUklDb21wb25lbnQobXNnLnVzZXIudXNlcl9uYW1lKSArIFwiIOWwhuatjOabsiDjgIpcIiArIG1zZy5zb25nLm5hbWUgKyBcIuOAiyDorr7kuLrnva7pobblgJnmkq3mlL5cIik7XHJcblx0XHRcdFx0XHRcdHRoYXQuc2F2ZU1lc3NhZ2VIaXN0b3J5KCk7XHJcblx0XHRcdFx0XHRcdGJyZWFrO1xyXG5cdFx0XHRcdFx0Y2FzZSAncmVtb3ZlU29uZyc6XHJcblx0XHRcdFx0XHRcdHRoYXQuYWRkU3lzdGVtTWVzc2FnZShkZWNvZGVVUklDb21wb25lbnQobXNnLnVzZXIudXNlcl9uYW1lKSArIFwiIOWwhuatjOabsiDjgIpcIiArIG1zZy5zb25nLm5hbWUgKyBcIuOAiyDku47pmJ/liJfnp7vpmaRcIik7XHJcblx0XHRcdFx0XHRcdHRoYXQuc2F2ZU1lc3NhZ2VIaXN0b3J5KCk7XHJcblx0XHRcdFx0XHRcdGJyZWFrO1xyXG5cdFx0XHRcdFx0Y2FzZSAncmVtb3ZlYmFuJzpcclxuXHRcdFx0XHRcdFx0dGhhdC5hZGRTeXN0ZW1NZXNzYWdlKGRlY29kZVVSSUNvbXBvbmVudChtc2cudXNlci51c2VyX25hbWUpICsgXCIg5bCGIFwiICsgZGVjb2RlVVJJQ29tcG9uZW50KG1zZy5iYW4udXNlcl9uYW1lKSArXHJcblx0XHRcdFx0XHRcdFx0XCIg6Kej56aBXCIpO1xyXG5cdFx0XHRcdFx0XHR0aGF0LnNhdmVNZXNzYWdlSGlzdG9yeSgpO1xyXG5cdFx0XHRcdFx0XHRicmVhaztcclxuXHRcdFx0XHRcdGNhc2UgJ3NodXRkb3duJzpcclxuXHRcdFx0XHRcdFx0dGhhdC5hZGRTeXN0ZW1NZXNzYWdlKGRlY29kZVVSSUNvbXBvbmVudChtc2cudXNlci51c2VyX25hbWUpICsgXCIg56aB5q2i5LqG55So5oi3IFwiICsgZGVjb2RlVVJJQ29tcG9uZW50KG1zZy5iYW4udXNlcl9uYW1lKSArXHJcblx0XHRcdFx0XHRcdFx0XCIg5Y+R6KiAXCIpO1xyXG5cdFx0XHRcdFx0XHR0aGF0LnNhdmVNZXNzYWdlSGlzdG9yeSgpO1xyXG5cdFx0XHRcdFx0XHRicmVhaztcclxuXHRcdFx0XHRcdGNhc2UgJ3Nvbmdkb3duJzpcclxuXHRcdFx0XHRcdFx0dGhhdC5hZGRTeXN0ZW1NZXNzYWdlKGRlY29kZVVSSUNvbXBvbmVudChtc2cudXNlci51c2VyX25hbWUpICsgXCIg56aB5q2i5LqG55So5oi3IFwiICsgZGVjb2RlVVJJQ29tcG9uZW50KG1zZy5iYW4udXNlcl9uYW1lKSArXHJcblx0XHRcdFx0XHRcdFx0XCIg54K55q2MXCIpO1xyXG5cdFx0XHRcdFx0XHR0aGF0LnNhdmVNZXNzYWdlSGlzdG9yeSgpO1xyXG5cdFx0XHRcdFx0XHRicmVhaztcclxuXHRcdFx0XHRcdGNhc2UgJ2JhY2snOlxyXG5cdFx0XHRcdFx0XHRmb3IgKGxldCBpID0gMDsgaSA8IHRoYXQuaGlzdG9yeUxpc3QubGVuZ3RoOyBpKyspIHtcclxuXHRcdFx0XHRcdFx0XHRpZiAodGhhdC5oaXN0b3J5TGlzdFtpXS5rZXkgPT0gbXNnLmtleSkge1xyXG5cdFx0XHRcdFx0XHRcdFx0dGhhdC5oaXN0b3J5TGlzdC5zcGxpY2UoaSwgMSk7XHJcblx0XHRcdFx0XHRcdFx0XHRicmVhaztcclxuXHRcdFx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdFx0dGhhdC5hZGRTeXN0ZW1NZXNzYWdlKGRlY29kZVVSSUNvbXBvbmVudChtc2cudXNlci51c2VyX25hbWUpICsgXCIg5pKk5Zue5LqG5LiA5p2h5raI5oGvXCIpO1xyXG5cdFx0XHRcdFx0XHR0aGF0LnNhdmVNZXNzYWdlSGlzdG9yeSgpO1xyXG5cdFx0XHRcdFx0XHRicmVhaztcclxuXHRcdFx0XHRcdGNhc2UgJ3BsYXlTb25nJzpcclxuXHRcdFx0XHRcdFx0dGhhdC5wbGF5TXVzaWMobXNnKTtcclxuXHRcdFx0XHRcdFx0YnJlYWs7XHJcblx0XHRcdFx0XHRkZWZhdWx0OlxyXG5cdFx0XHRcdH1cclxuXHRcdFx0fSxcclxuXHRcdFx0cGxheU11c2ljKG1zZykge1xyXG5cdFx0XHRcdGxldCB0aGF0ID0gdGhpcztcclxuXHRcdFx0XHRpZiAodGhhdC5zb25nLnNvbmcgJiYgdGhhdC5zb25nLnNvbmcubWlkID09IG1zZy5zb25nLm1pZCkge1xyXG5cdFx0XHRcdFx0cmV0dXJuO1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0XHRjb25zb2xlLmxvZygnUGxheSBNdXNpYycpO1xyXG5cdFx0XHRcdHRoYXQuc29uZyA9IG1zZztcclxuXHRcdFx0XHR0aGF0LmJnQXVkaW9NYW5uYWdlci50aXRsZSA9IFwi5q2j5Zyo5pKt5pS+IFwiICsgbXNnLnNvbmcubmFtZTtcclxuXHRcdFx0XHR0aGF0LmJnQXVkaW9NYW5uYWdlci5zaW5nZXIgPSBtc2cuc29uZy5zaW5nZXIgKyAnIC0gJyArIHRoYXQucm9vbS5yb29tX25hbWU7XHJcblx0XHRcdFx0dGhhdC5iZ0F1ZGlvTWFubmFnZXIuY292ZXJJbWdVcmwgPSBtc2cuc29uZy5waWM7XHJcblx0XHRcdFx0dGhhdC5iZ0F1ZGlvTWFubmFnZXIuc3JjID0gXCJodHRwczovL2FwaS5iYmJ1Zy5jb20vYXBpL3NvbmcvcGxheXVybD9taWQ9XCIgKyBtc2cuc29uZy5taWQ7XHJcblx0XHRcdFx0dGhhdC5iZ0F1ZGlvTWFubmFnZXIucGxheSgpO1xyXG5cdFx0XHRcdHRoYXQuYWRkU3lzdGVtTWVzc2FnZSgn5q2j5Zyo5pKt5pS+ICcgKyBtc2cuc29uZy5uYW1lICsgJygnICsgbXNnLnNvbmcuc2luZ2VyICsgJyknKTtcclxuXHRcdFx0fSxcclxuXHRcdFx0ZG9TZW5kTWVzc2FnZShlKSB7XHJcblx0XHRcdFx0bGV0IHRoYXQgPSB0aGlzO1xyXG5cdFx0XHRcdGxldCBtZXNzYWdlX29sZCA9IHRoYXQubWVzc2FnZU9iai5tZXNzYWdlO1xyXG5cdFx0XHRcdGxldCBtZXNzYWdlID0gbWVzc2FnZV9vbGQ7XHJcblx0XHRcdFx0dGhhdC5tZXNzYWdlT2JqLm1lc3NhZ2UgPSAnJztcclxuXHRcdFx0XHRpZiAobWVzc2FnZV9vbGQpIHtcclxuXHRcdFx0XHRcdGlmICh0aGF0Lm1lc3NhZ2VPYmouYXQpIHtcclxuXHRcdFx0XHRcdFx0bWVzc2FnZSA9IG1lc3NhZ2Vfb2xkLnJlcGxhY2UoXCJAXCIgKyBkZWNvZGVVUklDb21wb25lbnQodGhhdC5tZXNzYWdlT2JqLmF0LnVzZXJfbmFtZSksXHJcblx0XHRcdFx0XHRcdFx0JycpO1xyXG5cdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0dGhhdC5hcHAucmVxdWVzdCh7XHJcblx0XHRcdFx0XHRcdHVybDogXCJtZXNzYWdlL3NlbmRcIixcclxuXHRcdFx0XHRcdFx0ZGF0YToge1xyXG5cdFx0XHRcdFx0XHRcdHR5cGU6ICd0ZXh0JyxcclxuXHRcdFx0XHRcdFx0XHR3aGVyZTogXCJjaGFubmVsXCIsXHJcblx0XHRcdFx0XHRcdFx0dG86IHRoYXQucm9vbV9pZCxcclxuXHRcdFx0XHRcdFx0XHRtc2c6IGVuY29kZVVSSUNvbXBvbmVudChtZXNzYWdlKSxcclxuXHRcdFx0XHRcdFx0XHRhdDogdGhhdC5tZXNzYWdlT2JqLmF0XHJcblx0XHRcdFx0XHRcdH0sXHJcblx0XHRcdFx0XHRcdHN1Y2Nlc3M6IGZ1bmN0aW9uKHJlcykge30sXHJcblx0XHRcdFx0XHRcdGVycm9yOiBmdW5jdGlvbihyZXMpIHtcclxuXHRcdFx0XHRcdFx0XHR0aGF0Lm1lc3NhZ2VPYmoubWVzc2FnZSA9IG1lc3NhZ2Vfb2xkO1xyXG5cdFx0XHRcdFx0XHRcdHVuaS5zaG93TW9kYWwoe1xyXG5cdFx0XHRcdFx0XHRcdFx0dGl0bGU6ICflj5HpgIHlpLHotKUnLFxyXG5cdFx0XHRcdFx0XHRcdFx0Y29udGVudDogcmVzLm1zZyxcclxuXHRcdFx0XHRcdFx0XHRcdHNob3dDYW5jZWw6IGZhbHNlXHJcblx0XHRcdFx0XHRcdFx0fSk7XHJcblx0XHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdH0pO1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0fSxcclxuXHRcdFx0YWRkTWVzc2FnZVRvTGlzdChtc2cpIHtcclxuXHRcdFx0XHRsZXQgdGhhdCA9IHRoaXM7XHJcblx0XHRcdFx0aWYgKHRoYXQuaGlzdG9yeUxpc3QubGVuZ3RoID4gMTAwKSB7XHJcblx0XHRcdFx0XHR0aGF0Lmhpc3RvcnlMaXN0LnNoaWZ0KCk7XHJcblx0XHRcdFx0fVxyXG5cdFx0XHRcdHRoYXQuaGlzdG9yeUxpc3QucHVzaChtc2cpO1xyXG5cdFx0XHRcdHRoYXQuc2F2ZU1lc3NhZ2VIaXN0b3J5KCk7XHJcblx0XHRcdFx0dGhhdC5hdXRvU2Nyb2xsKCk7XHJcblx0XHRcdH0sXHJcblx0XHRcdHJ1blBsYXlBbmltYXRpb24oKSB7XHJcblx0XHRcdFx0bGV0IHRoYXQgPSB0aGlzO1xyXG5cdFx0XHRcdHRoYXQuc3RvcFBsYXllckFuaW1hdGlvbigpO1xyXG5cdFx0XHRcdHZhciBhbmltYXRpb24gPSB1bmkuY3JlYXRlQW5pbWF0aW9uKHtcclxuXHRcdFx0XHRcdGR1cmF0aW9uOiAxMDAwMCxcclxuXHRcdFx0XHRcdHRpbWluZ0Z1bmN0aW9uOiAnbGluZWFyJyxcclxuXHRcdFx0XHR9KTtcclxuXHRcdFx0XHR0aGF0LnJvdGF0ZSArPSA2MDtcclxuXHRcdFx0XHRpZiAodGhhdC5yb3RhdGUgPiAzNjApIHtcclxuXHRcdFx0XHRcdHRoYXQucm90YXRlID0gMDtcclxuXHRcdFx0XHR9XHJcblx0XHRcdFx0dGhhdC5yb3RhdGUgLT0gMTgwO1xyXG5cdFx0XHRcdGFuaW1hdGlvbi5yb3RhdGUodGhhdC5yb3RhdGUpLnN0ZXAoKTtcclxuXHRcdFx0XHR0aGF0LmFuaW1hdGlvbkRhdGEgPSBhbmltYXRpb24uZXhwb3J0KCk7XHJcblx0XHRcdFx0Y2xlYXJUaW1lb3V0KHRoYXQucGxheWVyVGltZXIpO1xyXG5cdFx0XHRcdHRoYXQucGxheWVyVGltZXIgPSBzZXRUaW1lb3V0KGZ1bmN0aW9uKCkge1xyXG5cdFx0XHRcdFx0dGhhdC5ydW5QbGF5QW5pbWF0aW9uKCk7XHJcblx0XHRcdFx0fS5iaW5kKHRoYXQpLCAxMDAwMCk7XHJcblx0XHRcdH0sXHJcblx0XHRcdHN0b3BQbGF5ZXJBbmltYXRpb24oKSB7XHJcblx0XHRcdFx0bGV0IHRoYXQgPSB0aGlzO1xyXG5cdFx0XHRcdGNsZWFyVGltZW91dCh0aGF0LnBsYXllclRpbWVyKTtcclxuXHRcdFx0XHR0aGF0LmFuaW1hdGlvbkRhdGEgPSB7fTtcclxuXHRcdFx0fSxcclxuXHRcdFx0dXJsZGVjb2RlKHN0cikge1xyXG5cdFx0XHRcdHJldHVybiBkZWNvZGVVUklDb21wb25lbnQoc3RyKTtcclxuXHRcdFx0fSxcclxuXHRcdFx0Z2V0Um9vbUluZm8oKSB7XHJcblx0XHRcdFx0bGV0IHRoYXQgPSB0aGlzO1xyXG5cdFx0XHRcdHVuaS5zaG93TG9hZGluZyh7XHJcblx0XHRcdFx0XHR0aXRsZTogJ+i/nuaOpeaIv+mXtOacjeWKoeWZqCdcclxuXHRcdFx0XHR9KTtcclxuXHRcdFx0XHR0aGF0LmFwcC5yZXF1ZXN0KHtcclxuXHRcdFx0XHRcdHVybDogJ3Jvb20vZ2V0Um9vbUluZm8nLFxyXG5cdFx0XHRcdFx0ZGF0YToge1xyXG5cdFx0XHRcdFx0XHRyb29tX2lkOiB0aGF0LnJvb21faWQsXHJcblx0XHRcdFx0XHRcdHJvb21fcGFzc3dvcmQ6IHRoYXQucGFzc3dvcmRcclxuXHRcdFx0XHRcdH0sXHJcblx0XHRcdFx0XHRzdWNjZXNzKHJlcykge1xyXG5cdFx0XHRcdFx0XHR0aGF0LnJvb20gPSByZXMuZGF0YTtcclxuXHRcdFx0XHRcdFx0dW5pLnNldE5hdmlnYXRpb25CYXJUaXRsZSh7XHJcblx0XHRcdFx0XHRcdFx0dGl0bGU6IHRoYXQucm9vbS5yb29tX25hbWVcclxuXHRcdFx0XHRcdFx0fSk7XHJcblx0XHRcdFx0XHRcdHRoYXQuYXBwLnJlcXVlc3Qoe1xyXG5cdFx0XHRcdFx0XHRcdHVybDogJ3Jvb20vZ2V0V2Vic29ja2V0VXJsJyxcclxuXHRcdFx0XHRcdFx0XHRkYXRhOiB7XHJcblx0XHRcdFx0XHRcdFx0XHRjaGFubmVsOiB0aGF0LnJvb21faWRcclxuXHRcdFx0XHRcdFx0XHR9LFxyXG5cdFx0XHRcdFx0XHRcdHN1Y2Nlc3M6IGZ1bmN0aW9uKHJlcykge1xyXG5cdFx0XHRcdFx0XHRcdFx0dW5pLmhpZGVMb2FkaW5nKCk7XHJcblx0XHRcdFx0XHRcdFx0XHR0aGF0LmFwcC53ZWJTb2NrZXQuY29uZmlnLndzc1VybCA9ICd3c3M6Ly93ZWJzb2NrZXQuYmJidWcuY29tLz9hY2NvdW50PScgK1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRyZXMuZGF0YS5hY2NvdW50ICsgJyZjaGFubmVsPScgK1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRyZXMuZGF0YS5jaGFubmVsICsgJyZ0aWNrZXQ9JyArIHJlcy5kYXRhLnRpY2tldDtcclxuXHRcdFx0XHRcdFx0XHRcdGlmICghdGhhdC5hcHAud2ViU29ja2V0LmlzQ29ubmVjdGVkKSB7XHJcblx0XHRcdFx0XHRcdFx0XHRcdHRoYXQuYXBwLndlYlNvY2tldC5jb25uZWN0V3NzKCk7XHJcblx0XHRcdFx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHRcdFx0XHQvLyBsZXQgc3RyID0gdW5pLmdldFN0b3JhZ2VTeW5jKHRoYXQuaGlzdG9yeUtleSArIHRoYXQucm9vbV9pZCkgfHwgZmFsc2U7XHJcblx0XHRcdFx0XHRcdFx0XHQvLyB0aGF0Lmhpc3RvcnlMaXN0ID0gc3RyID8gSlNPTi5wYXJzZShzdHIpIDogW107XHJcblx0XHRcdFx0XHRcdFx0XHR0aGF0LmFkZFN5c3RlbU1lc3NhZ2UodGhhdC5yb29tLnJvb21fbm90aWNlIHx8ICfmnI3liqHlmajov57mjqXmiJDlip8nKTtcclxuXHRcdFx0XHRcdFx0XHRcdHRoYXQuc2hvd1Bhc3N3b3JkRm9ybSA9IGZhbHNlO1xyXG5cdFx0XHRcdFx0XHRcdFx0dGhhdC5zaG93Um9vbVBhZ2UgPSB0cnVlO1xyXG5cdFx0XHRcdFx0XHRcdFx0dGhhdC5hdXRvU2Nyb2xsKCk7XHJcblx0XHRcdFx0XHRcdFx0fSxcclxuXHJcblx0XHRcdFx0XHRcdFx0ZXJyb3I6IGZ1bmN0aW9uKHJlcykge1xyXG5cdFx0XHRcdFx0XHRcdFx0Y29uc29sZS5sb2cocmVzKTtcclxuXHRcdFx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHRcdH0pO1xyXG5cdFx0XHRcdFx0fSxcclxuXHRcdFx0XHRcdGVycm9yKHJlcykge1xyXG5cdFx0XHRcdFx0XHR1bmkuaGlkZUxvYWRpbmcoKTtcclxuXHRcdFx0XHRcdFx0aWYgKHJlcy5jb2RlID09IDQwMykge1xyXG5cdFx0XHRcdFx0XHRcdHVuaS5zZXROYXZpZ2F0aW9uQmFyVGl0bGUoe1xyXG5cdFx0XHRcdFx0XHRcdFx0dGl0bGU6ICflr4bnoIHmiL8nXHJcblx0XHRcdFx0XHRcdFx0fSk7XHJcblx0XHRcdFx0XHRcdFx0dGhhdC5zaG93UGFzc3dvcmRGb3JtID0gdHJ1ZTtcclxuXHRcdFx0XHRcdFx0XHR0aGF0LnNob3dSb29tUGFnZSA9IGZhbHNlO1xyXG5cdFx0XHRcdFx0XHRcdGlmICh0aGF0LnBhc3N3b3JkKSB7XHJcblx0XHRcdFx0XHRcdFx0XHR1bmkuc2hvd01vZGFsKHtcclxuXHRcdFx0XHRcdFx0XHRcdFx0c2hvd0NhbmNlbDogZmFsc2UsXHJcblx0XHRcdFx0XHRcdFx0XHRcdHRpdGxlOiAn6L+b5YWl5aSx6LSlJyxcclxuXHRcdFx0XHRcdFx0XHRcdFx0Y29udGVudDogcmVzLm1zZyxcclxuXHRcdFx0XHRcdFx0XHRcdFx0c3VjY2VzczogZnVuY3Rpb24oKSB7fVxyXG5cdFx0XHRcdFx0XHRcdFx0fSk7XHJcblx0XHRcdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0XHR9IGVsc2Uge1xyXG5cdFx0XHRcdFx0XHRcdHVuaS5zaG93TW9kYWwoe1xyXG5cdFx0XHRcdFx0XHRcdFx0c2hvd0NhbmNlbDogZmFsc2UsXHJcblx0XHRcdFx0XHRcdFx0XHR0aXRsZTogJ+i/m+WFpeWksei0pScsXHJcblx0XHRcdFx0XHRcdFx0XHRjb250ZW50OiByZXMubXNnLFxyXG5cdFx0XHRcdFx0XHRcdFx0c3VjY2VzczogZnVuY3Rpb24oKSB7XHJcblx0XHRcdFx0XHRcdFx0XHRcdHVuaS5uYXZpZ2F0ZUJhY2soKTtcclxuXHRcdFx0XHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdFx0XHR9KTtcclxuXHRcdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0fVxyXG5cdFx0XHRcdH0pO1xyXG5cdFx0XHR9LFxyXG5cdFx0XHRhZGRTeXN0ZW1NZXNzYWdlKG1zZywgY29sb3IgPSAnIzk5OScsIGJnID0gJ3RhbnNwYXJlbnQnKSB7XHJcblx0XHRcdFx0bGV0IHRoYXQgPSB0aGlzO1xyXG5cdFx0XHRcdHRoYXQuaGlzdG9yeUxpc3QucHVzaCh7XHJcblx0XHRcdFx0XHR0eXBlOiBcInN5c3RlbVwiLFxyXG5cdFx0XHRcdFx0Y29udGVudDogbXNnLFxyXG5cdFx0XHRcdFx0Ymc6IGJnLFxyXG5cdFx0XHRcdFx0Y29sb3I6IGNvbG9yXHJcblx0XHRcdFx0fSk7XHJcblx0XHRcdFx0dGhhdC5hdXRvU2Nyb2xsKCk7XHJcblx0XHRcdH0sXHJcblx0XHRcdGRvT3BlblBhZ2UocGFnZSkge1xyXG5cdFx0XHRcdGxldCB0aGF0ID0gdGhpcztcclxuXHRcdFx0XHR0aGF0LnNob3dNZW51Qm94ID0gZmFsc2U7XHJcblx0XHRcdFx0c3dpdGNoIChwYWdlKSB7XHJcblx0XHRcdFx0XHRjYXNlICdhZGRTb25nJzpcclxuXHRcdFx0XHRcdFx0dW5pLm5hdmlnYXRlVG8oe1xyXG5cdFx0XHRcdFx0XHRcdHVybDogJy4uL3Nvbmcvc2VhcmNoP3Jvb21faWQ9JyArIHRoYXQucm9vbV9pZFxyXG5cdFx0XHRcdFx0XHR9KTtcclxuXHRcdFx0XHRcdFx0YnJlYWs7XHJcblx0XHRcdFx0XHRjYXNlICdteVNvbmcnOlxyXG5cdFx0XHRcdFx0XHR1bmkubmF2aWdhdGVUbyh7XHJcblx0XHRcdFx0XHRcdFx0dXJsOiAnLi4vc29uZy9teT9yb29tX2lkPScgKyB0aGF0LnJvb21faWRcclxuXHRcdFx0XHRcdFx0fSk7XHJcblx0XHRcdFx0XHRcdGJyZWFrO1xyXG5cdFx0XHRcdFx0Y2FzZSAnc29uZ0xpc3QnOlxyXG5cdFx0XHRcdFx0XHR1bmkubmF2aWdhdGVUbyh7XHJcblx0XHRcdFx0XHRcdFx0dXJsOiAnLi4vc29uZy9saXN0P3Jvb21faWQ9JyArIHRoYXQucm9vbV9pZFxyXG5cdFx0XHRcdFx0XHR9KTtcclxuXHRcdFx0XHRcdFx0YnJlYWs7XHJcblx0XHRcdFx0XHRjYXNlICdvbkxpbmUnOlxyXG5cdFx0XHRcdFx0XHRsZXQgaXNNYXN0ZXIgPSAwO1xyXG5cdFx0XHRcdFx0XHRpZiAodGhhdC51c2VySW5mby51c2VyX2FkbWluIHx8IHRoYXQucm9vbS5yb29tX3VzZXIgPT0gdGhhdC51c2VySW5mby51c2VyX2lkKSB7XHJcblx0XHRcdFx0XHRcdFx0aXNNYXN0ZXIgPSAxO1xyXG5cdFx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHRcdHVuaS5uYXZpZ2F0ZVRvKHtcclxuXHRcdFx0XHRcdFx0XHR1cmw6ICcuL29ubGluZT9yb29tX2lkPScgKyB0aGF0LnJvb21faWQgKyBcIiZyb29tX2FkbWluPVwiICsgaXNNYXN0ZXJcclxuXHRcdFx0XHRcdFx0fSk7XHJcblx0XHRcdFx0XHRcdGJyZWFrO1xyXG5cdFx0XHRcdFx0ZGVmYXVsdDpcclxuXHRcdFx0XHR9XHJcblx0XHRcdH0sXHJcblx0XHRcdHNob3dNZW51VXNlckhlYWQobXNnKSB7XHJcblx0XHRcdFx0Y29uc29sZS5sb2cobXNnKTtcclxuXHRcdFx0XHRsZXQgdXNlciA9IG1zZy51c2VyO1xyXG5cdFx0XHRcdGxldCB0aGF0ID0gdGhpcztcclxuXHRcdFx0XHRsZXQgbWVudSA9IFsn6L+b5YWl5Li76aG1JywgJ0DkuIDkuItUYScsICfpgIHmrYznu5lUYSddO1xyXG5cdFx0XHRcdGlmICh0aGF0LnVzZXJJbmZvLnVzZXJfYWRtaW4gfHwgdGhhdC5yb29tLnJvb21fdXNlciA9PSB0aGF0LnVzZXJJbmZvLnVzZXJfaWQpIHtcclxuXHRcdFx0XHRcdG1lbnUgPSBbJ+i/m+WFpeS4u+mhtScsICdA5LiA5LiLVGEnLCAn6YCB5q2M57uZVGEnLCAn5pKk5Zue5raI5oGvJywgJ+emgeatoueCueatjCcsICfnpoHmraLlj5HoqIAnLCAn5YWo6YOo6Kej56aBJ107XHJcblx0XHRcdFx0fSBlbHNlIGlmICh1c2VyLnVzZXJfaWQgPT0gdGhhdC51c2VySW5mby51c2VyX2lkKSB7XHJcblx0XHRcdFx0XHQvL+WPkea2iOaBr+S6uuaYr+iHquW3sVxyXG5cdFx0XHRcdFx0bWVudSA9IFsn6L+b5YWl5Li76aG1JywgJ0DkuIDkuItUYScsICfpgIHmrYznu5lUYScsICfmkqTlm57mtojmga8nXTtcclxuXHRcdFx0XHR9IGVsc2Uge1xyXG5cdFx0XHRcdFx0Ly/lhbbku5bkurrnmoTmtojmga9cclxuXHRcdFx0XHR9XHJcblx0XHRcdFx0dW5pLnNob3dBY3Rpb25TaGVldCh7XHJcblx0XHRcdFx0XHRpdGVtTGlzdDogbWVudSxcclxuXHRcdFx0XHRcdHN1Y2Nlc3M6IGZ1bmN0aW9uKHJlcykge1xyXG5cdFx0XHRcdFx0XHRzd2l0Y2ggKG1lbnVbcmVzLnRhcEluZGV4XSkge1xyXG5cdFx0XHRcdFx0XHRcdGNhc2UgJ+mAgeatjOe7mVRhJzpcclxuXHRcdFx0XHRcdFx0XHRcdHVuaS5uYXZpZ2F0ZVRvKHtcclxuXHRcdFx0XHRcdFx0XHRcdFx0dXJsOiAnLi4vc29uZy9zZWFyY2g/cm9vbV9pZD0nICsgdGhhdC5yb29tX2lkICsgXCImYXQ9XCIgKyB1c2VyLnVzZXJfaWQgKyBcIiZuYW1lPVwiICsgdXNlci51c2VyX25hbWVcclxuXHRcdFx0XHRcdFx0XHRcdH0pO1xyXG5cdFx0XHRcdFx0XHRcdFx0YnJlYWs7XHJcblx0XHRcdFx0XHRcdFx0Y2FzZSAnQOS4gOS4i1RhJzpcclxuXHRcdFx0XHRcdFx0XHRcdHRoYXQuZG9BdFVzZXIodXNlcik7XHJcblx0XHRcdFx0XHRcdFx0XHRicmVhaztcclxuXHRcdFx0XHRcdFx0XHRjYXNlICflhajpg6jop6PnpoEnOlxyXG5cdFx0XHRcdFx0XHRcdFx0dGhhdC5hcHAucmVxdWVzdCh7XHJcblx0XHRcdFx0XHRcdFx0XHRcdHVybDogJ3VzZXIvcmVtb3ZlYmFuJyxcclxuXHRcdFx0XHRcdFx0XHRcdFx0ZGF0YToge1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdHJvb21faWQ6IHRoYXQucm9vbV9pZCxcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHR1c2VyX2lkOiB1c2VyLnVzZXJfaWRcclxuXHRcdFx0XHRcdFx0XHRcdFx0fSxcclxuXHRcdFx0XHRcdFx0XHRcdFx0bG9hZGluZzogXCLop6PnpoHkuK1cIixcclxuXHRcdFx0XHRcdFx0XHRcdFx0c3VjY2VzczogZnVuY3Rpb24ocmVzKSB7XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0dW5pLnNob3dNb2RhbCh7XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHR0aXRsZTogJ+ino+emgeaIkOWKnycsXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRjb250ZW50OiByZXMubXNnLFxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0c2hvd0NhbmNlbDogZmFsc2UsXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRzdWNjZXNzOiBmdW5jdGlvbigpIHtcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0dGhhdC5nZXR1c2VyTGlzdCgpO1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdH0pO1xyXG5cdFx0XHRcdFx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHRcdFx0XHR9KTtcclxuXHRcdFx0XHRcdFx0XHRcdGJyZWFrO1xyXG5cdFx0XHRcdFx0XHRcdGNhc2UgJ+emgeatouWPkeiogCc6XHJcblx0XHRcdFx0XHRcdFx0XHR0aGF0LmFwcC5yZXF1ZXN0KHtcclxuXHRcdFx0XHRcdFx0XHRcdFx0dXJsOiAndXNlci9zaHV0ZG93bicsXHJcblx0XHRcdFx0XHRcdFx0XHRcdGRhdGE6IHtcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRyb29tX2lkOiB0aGF0LnJvb21faWQsXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0dXNlcl9pZDogdXNlci51c2VyX2lkXHJcblx0XHRcdFx0XHRcdFx0XHRcdH0sXHJcblx0XHRcdFx0XHRcdFx0XHRcdGxvYWRpbmc6IFwi56aB6KiA5LitXCIsXHJcblx0XHRcdFx0XHRcdFx0XHRcdHN1Y2Nlc3M6IGZ1bmN0aW9uKHJlcykge1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdHVuaS5zaG93TW9kYWwoe1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0dGl0bGU6ICfnpoHoqIDmiJDlip8nLFxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0Y29udGVudDogcmVzLm1zZyxcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdHNob3dDYW5jZWw6IGZhbHNlLFxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0c3VjY2VzczogZnVuY3Rpb24oKSB7XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdHRoYXQuZ2V0dXNlckxpc3QoKTtcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHR9KTtcclxuXHRcdFx0XHRcdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0XHRcdFx0fSk7XHJcblx0XHRcdFx0XHRcdFx0XHRicmVhaztcclxuXHRcdFx0XHRcdFx0XHRjYXNlICfnpoHmraLngrnmrYwnOlxyXG5cdFx0XHRcdFx0XHRcdFx0dGhhdC5hcHAucmVxdWVzdCh7XHJcblx0XHRcdFx0XHRcdFx0XHRcdHVybDogJ3VzZXIvc29uZ2Rvd24nLFxyXG5cdFx0XHRcdFx0XHRcdFx0XHRkYXRhOiB7XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0cm9vbV9pZDogdGhhdC5yb29tX2lkLFxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdHVzZXJfaWQ6IHVzZXIudXNlcl9pZFxyXG5cdFx0XHRcdFx0XHRcdFx0XHR9LFxyXG5cdFx0XHRcdFx0XHRcdFx0XHRsb2FkaW5nOiBcIuemgeatjOS4rVwiLFxyXG5cdFx0XHRcdFx0XHRcdFx0XHRzdWNjZXNzOiBmdW5jdGlvbihyZXMpIHtcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHR1bmkuc2hvd01vZGFsKHtcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdHRpdGxlOiAn56aB5q2M5oiQ5YqfJyxcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdGNvbnRlbnQ6IHJlcy5tc2csXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRzaG93Q2FuY2VsOiBmYWxzZSxcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdHN1Y2Nlc3M6IGZ1bmN0aW9uKCkge1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHR0aGF0LmdldHVzZXJMaXN0KCk7XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0fSk7XHJcblx0XHRcdFx0XHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdFx0XHRcdH0pO1xyXG5cdFx0XHRcdFx0XHRcdFx0YnJlYWs7XHJcblx0XHRcdFx0XHRcdFx0ZGVmYXVsdDpcclxuXHRcdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0fVxyXG5cdFx0XHRcdH0pO1xyXG5cdFx0XHR9LFxyXG5cdFx0XHRnZXRTdGF0aWNVcmwodXJsKSB7XHJcblx0XHRcdFx0aWYgKHVybC5pbmRleE9mKCdodHRwczovLycpID4gLTEgfHwgdXJsLmluZGV4T2YoJ2h0dHA6Ly8nKSA+IC0xKSB7XHJcblx0XHRcdFx0XHRyZXR1cm4gdXJsO1xyXG5cdFx0XHRcdH0gZWxzZSB7XHJcblx0XHRcdFx0XHRyZXR1cm4gJ2h0dHBzOi8vY2RuLmJiYnVnLmNvbS91cGxvYWRzLycgKyB1cmw7XHJcblx0XHRcdFx0fVxyXG5cdFx0XHR9LFxyXG5cdFx0XHRjaG9vc2VJbWFnZSgpIHtcclxuXHRcdFx0XHRsZXQgdGhhdCA9IHRoaXM7XHJcblx0XHRcdFx0dGhhdC5zaG93TWVudUJveCA9IGZhbHNlO1xyXG5cdFx0XHRcdHVuaS5jaG9vc2VJbWFnZSh7XHJcblx0XHRcdFx0XHRzaXplVHlwZTogXCJjb21wcmVzc2VkXCIsXHJcblx0XHRcdFx0XHRzb3VyY2VUeXBlOiBbJ2FsYnVtJ10sXHJcblx0XHRcdFx0XHRjb3VudDogMSxcclxuXHRcdFx0XHRcdGZhaWw6IGZ1bmN0aW9uKHJlcykge1xyXG5cdFx0XHRcdFx0XHRjb25zb2xlLmxvZyhyZXMpO1xyXG5cdFx0XHRcdFx0fSxcclxuXHRcdFx0XHRcdHN1Y2Nlc3M6IGZ1bmN0aW9uKHJlcykge1xyXG5cdFx0XHRcdFx0XHR1bmkuc2hvd0xvYWRpbmcoe1xyXG5cdFx0XHRcdFx0XHRcdHRpdGxlOiAn5aSE55CG5LitJ1xyXG5cdFx0XHRcdFx0XHR9KTtcclxuXHRcdFx0XHRcdFx0dW5pLmNvbXByZXNzSW1hZ2Uoe1xyXG5cdFx0XHRcdFx0XHRcdHNyYzogcmVzLnRlbXBGaWxlUGF0aHNbMF0sXHJcblx0XHRcdFx0XHRcdFx0cXVhbGl0eTogNTAsXHJcblx0XHRcdFx0XHRcdFx0c3VjY2VzczogZnVuY3Rpb24ocmVzKSB7XHJcblx0XHRcdFx0XHRcdFx0XHR1bmkudXBsb2FkRmlsZSh7XHJcblx0XHRcdFx0XHRcdFx0XHRcdHVybDogdGhhdC5hcHAuZ2xvYmFsRGF0YS5yZXF1ZXN0LmFwaVVybCArIFwiYXR0YWNoL3VwbG9hZGltYWdlXCIsXHJcblx0XHRcdFx0XHRcdFx0XHRcdGZpbGVQYXRoOiByZXMudGVtcEZpbGVQYXRoLFxyXG5cdFx0XHRcdFx0XHRcdFx0XHRuYW1lOiAnZmlsZScsXHJcblx0XHRcdFx0XHRcdFx0XHRcdGZvcm1EYXRhOiB0aGF0LmFwcC5nbG9iYWxEYXRhLnJlcXVlc3QuYmFzZURhdGEsXHJcblx0XHRcdFx0XHRcdFx0XHRcdHN1Y2Nlc3M6IGZ1bmN0aW9uKHVwbG9hZEZpbGVSZXMpIHtcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHR1bmkuaGlkZUxvYWRpbmcoKTtcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRsZXQgcmVzcG9uc2UgPSB7fTtcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHR0cnkge1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0cmVzcG9uc2UgPSBKU09OLnBhcnNlKHVwbG9hZEZpbGVSZXMuZGF0YSk7XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0fSBjYXRjaCAoZXJyKSB7XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHR1bmkuc2hvd01vZGFsKHtcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0c2hvd0NhbmNlbDogZmFsc2UsXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdHRpdGxlOiAn5LiK5Lyg5aSx6LSlJyxcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0Y29udGVudDogJ+acjeWKoeWZqOWPkeeUn+mUmeivrycsXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdHN1Y2Nlc3M6IGZ1bmN0aW9uKCkge31cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdH0pO1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRpZiAocmVzcG9uc2UuY29kZSA9PSAyMDApIHtcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdHRoYXQuYXBwLnJlcXVlc3Qoe1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHR1cmw6IFwibWVzc2FnZS9zZW5kXCIsXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdGRhdGE6IHtcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHR3aGVyZTogJ2NoYW5uZWwnLFxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdHRvOiB0aGF0LnJvb21faWQsXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0dHlwZTogJ2ltZycsXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0bXNnOiByZXNwb25zZS5kYXRhLmF0dGFjaF90aHVtYixcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRyZXNvdXJjZTogcmVzcG9uc2UuZGF0YS5hdHRhY2hfcGF0aCxcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0fSxcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0c3VjY2VzczogZnVuY3Rpb24ocmVzKSB7fSxcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0ZXJyb3I6IGZ1bmN0aW9uKHJlcykge1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdHRoYXQubWVzc2FnZU9iai5tZXNzYWdlID0gbWVzc2FnZV9vbGQ7XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0dW5pLnNob3dNb2RhbCh7XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHR0aXRsZTogJ+WPkemAgeWksei0pScsXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRjb250ZW50OiByZXMubXNnLFxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0c2hvd0NhbmNlbDogZmFsc2VcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHR9KTtcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0fSk7XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0fSBlbHNlIHtcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdHVuaS5zaG93TW9kYWwoe1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRzaG93Q2FuY2VsOiBmYWxzZSxcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0dGl0bGU6ICfkuIrkvKDlpLHotKUnLFxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRjb250ZW50OiByZXNwb25zZS5tc2csXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdHN1Y2Nlc3M6IGZ1bmN0aW9uKCkge31cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdH0pO1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0XHRcdFx0fSk7XHJcblx0XHRcdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0XHR9KVxyXG5cdFx0XHRcdFx0fVxyXG5cdFx0XHRcdH0pO1xyXG5cdFx0XHR9LFxyXG5cdFx0XHRmdWxsVmlld0ltYWdlKHVybCkge1xyXG5cdFx0XHRcdHVuaS5wcmV2aWV3SW1hZ2Uoe1xyXG5cdFx0XHRcdFx0dXJsczogW3VybF0sXHJcblx0XHRcdFx0XHRsb25nUHJlc3NBY3Rpb25zOiB7XHJcblx0XHRcdFx0XHRcdGl0ZW1MaXN0OiBbJ+S/neWtmOWbvueJhycsICfkuL7miqXlm77niYcnXSxcclxuXHRcdFx0XHRcdFx0c3VjY2VzczogZnVuY3Rpb24oZGF0YSkge30sXHJcblx0XHRcdFx0XHRcdGZhaWw6IGZ1bmN0aW9uKGVycikge31cclxuXHRcdFx0XHRcdH1cclxuXHRcdFx0XHR9KTtcclxuXHRcdFx0fVxyXG5cdFx0fVxyXG5cdH1cclxuPC9zY3JpcHQ+XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///8\n");

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


/***/ }),
/* 11 */
/*!********************************************************************************************************************!*\
  !*** /Users/Hamm/Code/UniAppProjects/BBBUG APP/pages/index/index.nvue?vue&type=style&index=0&lang=css&mpType=page ***!
  \********************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_0_1_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_0_2_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_0_3_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_index_nvue_vue_type_style_index_0_lang_css_mpType_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-hbuilderx/packages/webpack-uni-nvue-loader/lib/style.js!../../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--8-oneOf-0-1!../../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/postcss-loader/src??ref--8-oneOf-0-2!../../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--8-oneOf-0-3!../../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./index.nvue?vue&type=style&index=0&lang=css&mpType=page */ 12);
/* harmony import */ var _Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_0_1_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_0_2_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_0_3_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_index_nvue_vue_type_style_index_0_lang_css_mpType_page__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_0_1_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_0_2_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_0_3_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_index_nvue_vue_type_style_index_0_lang_css_mpType_page__WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_0_1_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_0_2_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_0_3_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_index_nvue_vue_type_style_index_0_lang_css_mpType_page__WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_0_1_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_0_2_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_0_3_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_index_nvue_vue_type_style_index_0_lang_css_mpType_page__WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_0_1_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_0_2_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_0_3_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_index_nvue_vue_type_style_index_0_lang_css_mpType_page__WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),
/* 12 */
/*!******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-hbuilderx/packages/webpack-uni-nvue-loader/lib/style.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--8-oneOf-0-1!./node_modules/postcss-loader/src??ref--8-oneOf-0-2!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--8-oneOf-0-3!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!/Users/Hamm/Code/UniAppProjects/BBBUG APP/pages/index/index.nvue?vue&type=style&index=0&lang=css&mpType=page ***!
  \******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = {
  "chatForm": {
    "position": "fixed",
    "left": 0,
    "bottom": 0,
    "right": 0,
    "height": "60",
    "backgroundColor": "#FFFFFF",
    "paddingTop": "10",
    "paddingRight": "10",
    "paddingBottom": "10",
    "paddingLeft": "10"
  },
  "chatInput": {
    "position": "fixed",
    "left": "15",
    "bottom": "15",
    "right": "15",
    "fontSize": "16"
  },
  "historyList": {
    "position": "fixed",
    "left": 0,
    "right": 0,
    "bottom": 0,
    "top": 0
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
    "flexDirection": "row",
    "marginTop": "20",
    "marginRight": "10",
    "marginBottom": "10",
    "marginLeft": "10"
  },
  "user_head_box": {
    "display": "flex",
    "width": "50"
  },
  "user_head_image": {
    "width": "40",
    "height": "40"
  },
  "chat_item_user_name": {
    "fontSize": "16",
    "color": "#333333"
  },
  "chat_item_text": {
    "marginTop": "5",
    "borderRadius": "5",
    "backgroundColor": "#CCCCCC",
    "color": "#333333",
    "paddingTop": "5",
    "paddingRight": "10",
    "paddingBottom": "5",
    "paddingLeft": "10",
    "fontSize": "15"
  },
  "chat_item_image_box": {
    "backgroundColor": "#FF0000"
  },
  "chat_item_image_content": {
    "width": 100,
    "height": 100
  }
}

/***/ })
/******/ ]);