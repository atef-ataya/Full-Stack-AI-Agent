"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
exports.id = "vendor-chunks/remark-parse";
exports.ids = ["vendor-chunks/remark-parse"];
exports.modules = {

/***/ "(ssr)/./node_modules/remark-parse/lib/index.js":
/*!************************************************!*\
  !*** ./node_modules/remark-parse/lib/index.js ***!
  \************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ remarkParse)\n/* harmony export */ });\n/* harmony import */ var mdast_util_from_markdown__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mdast-util-from-markdown */ \"(ssr)/./node_modules/mdast-util-from-markdown/dev/lib/index.js\");\n/**\n * @typedef {import('mdast').Root} Root\n * @typedef {import('mdast-util-from-markdown').Options} Options\n */\n\n\n\n/**\n * @this {import('unified').Processor}\n * @type {import('unified').Plugin<[Options?] | void[], string, Root>}\n */\nfunction remarkParse(options) {\n  /** @type {import('unified').ParserFunction<Root>} */\n  const parser = (doc) => {\n    // Assume options.\n    const settings = /** @type {Options} */ (this.data('settings'))\n\n    return (0,mdast_util_from_markdown__WEBPACK_IMPORTED_MODULE_0__.fromMarkdown)(\n      doc,\n      Object.assign({}, settings, options, {\n        // Note: these options are not in the readme.\n        // The goal is for them to be set by plugins on `data` instead of being\n        // passed by users.\n        extensions: this.data('micromarkExtensions') || [],\n        mdastExtensions: this.data('fromMarkdownExtensions') || []\n      })\n    )\n  }\n\n  Object.assign(this, {Parser: parser})\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHNzcikvLi9ub2RlX21vZHVsZXMvcmVtYXJrLXBhcnNlL2xpYi9pbmRleC5qcyIsIm1hcHBpbmdzIjoiOzs7OztBQUFBO0FBQ0EsYUFBYSxzQkFBc0I7QUFDbkMsYUFBYSw0Q0FBNEM7QUFDekQ7O0FBRXFEOztBQUVyRDtBQUNBLFVBQVU7QUFDVixVQUFVO0FBQ1Y7QUFDZTtBQUNmLGFBQWEsd0NBQXdDO0FBQ3JEO0FBQ0E7QUFDQSxnQ0FBZ0MsU0FBUzs7QUFFekMsV0FBVyxzRUFBWTtBQUN2QjtBQUNBLHNCQUFzQjtBQUN0QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7O0FBRUEsdUJBQXVCLGVBQWU7QUFDdEMiLCJzb3VyY2VzIjpbIi9Vc2Vycy9hdGVmYXRheWEvRG9jdW1lbnRzL0RhdGEgU2NpZW5jZS9Db3BpbG90S2l0L0ZyZXNoL2Zyb250ZW5kL25vZGVfbW9kdWxlcy9yZW1hcmstcGFyc2UvbGliL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogQHR5cGVkZWYge2ltcG9ydCgnbWRhc3QnKS5Sb290fSBSb290XG4gKiBAdHlwZWRlZiB7aW1wb3J0KCdtZGFzdC11dGlsLWZyb20tbWFya2Rvd24nKS5PcHRpb25zfSBPcHRpb25zXG4gKi9cblxuaW1wb3J0IHtmcm9tTWFya2Rvd259IGZyb20gJ21kYXN0LXV0aWwtZnJvbS1tYXJrZG93bidcblxuLyoqXG4gKiBAdGhpcyB7aW1wb3J0KCd1bmlmaWVkJykuUHJvY2Vzc29yfVxuICogQHR5cGUge2ltcG9ydCgndW5pZmllZCcpLlBsdWdpbjxbT3B0aW9ucz9dIHwgdm9pZFtdLCBzdHJpbmcsIFJvb3Q+fVxuICovXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiByZW1hcmtQYXJzZShvcHRpb25zKSB7XG4gIC8qKiBAdHlwZSB7aW1wb3J0KCd1bmlmaWVkJykuUGFyc2VyRnVuY3Rpb248Um9vdD59ICovXG4gIGNvbnN0IHBhcnNlciA9IChkb2MpID0+IHtcbiAgICAvLyBBc3N1bWUgb3B0aW9ucy5cbiAgICBjb25zdCBzZXR0aW5ncyA9IC8qKiBAdHlwZSB7T3B0aW9uc30gKi8gKHRoaXMuZGF0YSgnc2V0dGluZ3MnKSlcblxuICAgIHJldHVybiBmcm9tTWFya2Rvd24oXG4gICAgICBkb2MsXG4gICAgICBPYmplY3QuYXNzaWduKHt9LCBzZXR0aW5ncywgb3B0aW9ucywge1xuICAgICAgICAvLyBOb3RlOiB0aGVzZSBvcHRpb25zIGFyZSBub3QgaW4gdGhlIHJlYWRtZS5cbiAgICAgICAgLy8gVGhlIGdvYWwgaXMgZm9yIHRoZW0gdG8gYmUgc2V0IGJ5IHBsdWdpbnMgb24gYGRhdGFgIGluc3RlYWQgb2YgYmVpbmdcbiAgICAgICAgLy8gcGFzc2VkIGJ5IHVzZXJzLlxuICAgICAgICBleHRlbnNpb25zOiB0aGlzLmRhdGEoJ21pY3JvbWFya0V4dGVuc2lvbnMnKSB8fCBbXSxcbiAgICAgICAgbWRhc3RFeHRlbnNpb25zOiB0aGlzLmRhdGEoJ2Zyb21NYXJrZG93bkV4dGVuc2lvbnMnKSB8fCBbXVxuICAgICAgfSlcbiAgICApXG4gIH1cblxuICBPYmplY3QuYXNzaWduKHRoaXMsIHtQYXJzZXI6IHBhcnNlcn0pXG59XG4iXSwibmFtZXMiOltdLCJpZ25vcmVMaXN0IjpbMF0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(ssr)/./node_modules/remark-parse/lib/index.js\n");

/***/ })

};
;