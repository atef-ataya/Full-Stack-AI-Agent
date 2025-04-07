/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
exports.id = "vendor-chunks/style-to-object";
exports.ids = ["vendor-chunks/style-to-object"];
exports.modules = {

/***/ "(ssr)/./node_modules/style-to-object/index.js":
/*!***********************************************!*\
  !*** ./node_modules/style-to-object/index.js ***!
  \***********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("var parse = __webpack_require__(/*! inline-style-parser */ \"(ssr)/./node_modules/inline-style-parser/index.js\");\n\n/**\n * Parses inline style to object.\n *\n * @example\n * // returns { 'line-height': '42' }\n * StyleToObject('line-height: 42;');\n *\n * @param  {String}      style      - The inline style.\n * @param  {Function}    [iterator] - The iterator function.\n * @return {null|Object}\n */\nfunction StyleToObject(style, iterator) {\n  var output = null;\n  if (!style || typeof style !== 'string') {\n    return output;\n  }\n\n  var declaration;\n  var declarations = parse(style);\n  var hasIterator = typeof iterator === 'function';\n  var property;\n  var value;\n\n  for (var i = 0, len = declarations.length; i < len; i++) {\n    declaration = declarations[i];\n    property = declaration.property;\n    value = declaration.value;\n\n    if (hasIterator) {\n      iterator(property, value, declaration);\n    } else if (value) {\n      output || (output = {});\n      output[property] = value;\n    }\n  }\n\n  return output;\n}\n\nmodule.exports = StyleToObject;\nmodule.exports[\"default\"] = StyleToObject; // ESM support\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHNzcikvLi9ub2RlX21vZHVsZXMvc3R5bGUtdG8tb2JqZWN0L2luZGV4LmpzIiwibWFwcGluZ3MiOiJBQUFBLFlBQVksbUJBQU8sQ0FBQyw4RUFBcUI7O0FBRXpDO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZ0JBQWdCO0FBQ2hCLGtDQUFrQztBQUNsQztBQUNBLFlBQVksYUFBYTtBQUN6QixZQUFZLGFBQWE7QUFDekIsWUFBWTtBQUNaO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLDZDQUE2QyxTQUFTO0FBQ3REO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsTUFBTTtBQUNOLDRCQUE0QjtBQUM1QjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBLHlCQUFzQixrQkFBa0IiLCJzb3VyY2VzIjpbIi9Vc2Vycy9hdGVmYXRheWEvRG9jdW1lbnRzL0RhdGEgU2NpZW5jZS9Db3BpbG90S2l0L0ZyZXNoL2Zyb250ZW5kL25vZGVfbW9kdWxlcy9zdHlsZS10by1vYmplY3QvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsidmFyIHBhcnNlID0gcmVxdWlyZSgnaW5saW5lLXN0eWxlLXBhcnNlcicpO1xuXG4vKipcbiAqIFBhcnNlcyBpbmxpbmUgc3R5bGUgdG8gb2JqZWN0LlxuICpcbiAqIEBleGFtcGxlXG4gKiAvLyByZXR1cm5zIHsgJ2xpbmUtaGVpZ2h0JzogJzQyJyB9XG4gKiBTdHlsZVRvT2JqZWN0KCdsaW5lLWhlaWdodDogNDI7Jyk7XG4gKlxuICogQHBhcmFtICB7U3RyaW5nfSAgICAgIHN0eWxlICAgICAgLSBUaGUgaW5saW5lIHN0eWxlLlxuICogQHBhcmFtICB7RnVuY3Rpb259ICAgIFtpdGVyYXRvcl0gLSBUaGUgaXRlcmF0b3IgZnVuY3Rpb24uXG4gKiBAcmV0dXJuIHtudWxsfE9iamVjdH1cbiAqL1xuZnVuY3Rpb24gU3R5bGVUb09iamVjdChzdHlsZSwgaXRlcmF0b3IpIHtcbiAgdmFyIG91dHB1dCA9IG51bGw7XG4gIGlmICghc3R5bGUgfHwgdHlwZW9mIHN0eWxlICE9PSAnc3RyaW5nJykge1xuICAgIHJldHVybiBvdXRwdXQ7XG4gIH1cblxuICB2YXIgZGVjbGFyYXRpb247XG4gIHZhciBkZWNsYXJhdGlvbnMgPSBwYXJzZShzdHlsZSk7XG4gIHZhciBoYXNJdGVyYXRvciA9IHR5cGVvZiBpdGVyYXRvciA9PT0gJ2Z1bmN0aW9uJztcbiAgdmFyIHByb3BlcnR5O1xuICB2YXIgdmFsdWU7XG5cbiAgZm9yICh2YXIgaSA9IDAsIGxlbiA9IGRlY2xhcmF0aW9ucy5sZW5ndGg7IGkgPCBsZW47IGkrKykge1xuICAgIGRlY2xhcmF0aW9uID0gZGVjbGFyYXRpb25zW2ldO1xuICAgIHByb3BlcnR5ID0gZGVjbGFyYXRpb24ucHJvcGVydHk7XG4gICAgdmFsdWUgPSBkZWNsYXJhdGlvbi52YWx1ZTtcblxuICAgIGlmIChoYXNJdGVyYXRvcikge1xuICAgICAgaXRlcmF0b3IocHJvcGVydHksIHZhbHVlLCBkZWNsYXJhdGlvbik7XG4gICAgfSBlbHNlIGlmICh2YWx1ZSkge1xuICAgICAgb3V0cHV0IHx8IChvdXRwdXQgPSB7fSk7XG4gICAgICBvdXRwdXRbcHJvcGVydHldID0gdmFsdWU7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIG91dHB1dDtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBTdHlsZVRvT2JqZWN0O1xubW9kdWxlLmV4cG9ydHMuZGVmYXVsdCA9IFN0eWxlVG9PYmplY3Q7IC8vIEVTTSBzdXBwb3J0XG4iXSwibmFtZXMiOltdLCJpZ25vcmVMaXN0IjpbMF0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(ssr)/./node_modules/style-to-object/index.js\n");

/***/ }),

/***/ "(ssr)/./node_modules/style-to-object/index.mjs":
/*!************************************************!*\
  !*** ./node_modules/style-to-object/index.mjs ***!
  \************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.js */ \"(ssr)/./node_modules/style-to-object/index.js\");\n\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_index_js__WEBPACK_IMPORTED_MODULE_0__);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHNzcikvLi9ub2RlX21vZHVsZXMvc3R5bGUtdG8tb2JqZWN0L2luZGV4Lm1qcyIsIm1hcHBpbmdzIjoiOzs7OztBQUF1Qzs7QUFFdkMsaUVBQWUsc0NBQWEsRUFBQyIsInNvdXJjZXMiOlsiL1VzZXJzL2F0ZWZhdGF5YS9Eb2N1bWVudHMvRGF0YSBTY2llbmNlL0NvcGlsb3RLaXQvRnJlc2gvZnJvbnRlbmQvbm9kZV9tb2R1bGVzL3N0eWxlLXRvLW9iamVjdC9pbmRleC5tanMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFN0eWxlVG9PYmplY3QgZnJvbSAnLi9pbmRleC5qcyc7XG5cbmV4cG9ydCBkZWZhdWx0IFN0eWxlVG9PYmplY3Q7XG4iXSwibmFtZXMiOltdLCJpZ25vcmVMaXN0IjpbMF0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(ssr)/./node_modules/style-to-object/index.mjs\n");

/***/ })

};
;