"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
exports.id = "vendor-chunks/unist-util-generated";
exports.ids = ["vendor-chunks/unist-util-generated"];
exports.modules = {

/***/ "(ssr)/./node_modules/unist-util-generated/lib/index.js":
/*!********************************************************!*\
  !*** ./node_modules/unist-util-generated/lib/index.js ***!
  \********************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   generated: () => (/* binding */ generated)\n/* harmony export */ });\n/**\n * @typedef PointLike\n * @property {number | null | undefined} [line]\n * @property {number | null | undefined} [column]\n * @property {number | null | undefined} [offset]\n *\n * @typedef PositionLike\n * @property {PointLike | null | undefined} [start]\n * @property {PointLike | null | undefined} [end]\n *\n * @typedef NodeLike\n * @property {PositionLike | null | undefined} [position]\n */\n\n/**\n * Check if `node` is generated.\n *\n * @param {NodeLike | null | undefined} [node]\n *   Node to check.\n * @returns {boolean}\n *   Whether `node` is generated (does not have positional info).\n */\nfunction generated(node) {\n  return (\n    !node ||\n    !node.position ||\n    !node.position.start ||\n    !node.position.start.line ||\n    !node.position.start.column ||\n    !node.position.end ||\n    !node.position.end.line ||\n    !node.position.end.column\n  )\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHNzcikvLi9ub2RlX21vZHVsZXMvdW5pc3QtdXRpbC1nZW5lcmF0ZWQvbGliL2luZGV4LmpzIiwibWFwcGluZ3MiOiI7Ozs7QUFBQTtBQUNBO0FBQ0EsY0FBYywyQkFBMkI7QUFDekMsY0FBYywyQkFBMkI7QUFDekMsY0FBYywyQkFBMkI7QUFDekM7QUFDQTtBQUNBLGNBQWMsOEJBQThCO0FBQzVDLGNBQWMsOEJBQThCO0FBQzVDO0FBQ0E7QUFDQSxjQUFjLGlDQUFpQztBQUMvQzs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLDZCQUE2QjtBQUN4QztBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ087QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwic291cmNlcyI6WyIvVXNlcnMvYXRlZmF0YXlhL0RvY3VtZW50cy9EYXRhIFNjaWVuY2UvQ29waWxvdEtpdC9GcmVzaC9mcm9udGVuZC9ub2RlX21vZHVsZXMvdW5pc3QtdXRpbC1nZW5lcmF0ZWQvbGliL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogQHR5cGVkZWYgUG9pbnRMaWtlXG4gKiBAcHJvcGVydHkge251bWJlciB8IG51bGwgfCB1bmRlZmluZWR9IFtsaW5lXVxuICogQHByb3BlcnR5IHtudW1iZXIgfCBudWxsIHwgdW5kZWZpbmVkfSBbY29sdW1uXVxuICogQHByb3BlcnR5IHtudW1iZXIgfCBudWxsIHwgdW5kZWZpbmVkfSBbb2Zmc2V0XVxuICpcbiAqIEB0eXBlZGVmIFBvc2l0aW9uTGlrZVxuICogQHByb3BlcnR5IHtQb2ludExpa2UgfCBudWxsIHwgdW5kZWZpbmVkfSBbc3RhcnRdXG4gKiBAcHJvcGVydHkge1BvaW50TGlrZSB8IG51bGwgfCB1bmRlZmluZWR9IFtlbmRdXG4gKlxuICogQHR5cGVkZWYgTm9kZUxpa2VcbiAqIEBwcm9wZXJ0eSB7UG9zaXRpb25MaWtlIHwgbnVsbCB8IHVuZGVmaW5lZH0gW3Bvc2l0aW9uXVxuICovXG5cbi8qKlxuICogQ2hlY2sgaWYgYG5vZGVgIGlzIGdlbmVyYXRlZC5cbiAqXG4gKiBAcGFyYW0ge05vZGVMaWtlIHwgbnVsbCB8IHVuZGVmaW5lZH0gW25vZGVdXG4gKiAgIE5vZGUgdG8gY2hlY2suXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn1cbiAqICAgV2hldGhlciBgbm9kZWAgaXMgZ2VuZXJhdGVkIChkb2VzIG5vdCBoYXZlIHBvc2l0aW9uYWwgaW5mbykuXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBnZW5lcmF0ZWQobm9kZSkge1xuICByZXR1cm4gKFxuICAgICFub2RlIHx8XG4gICAgIW5vZGUucG9zaXRpb24gfHxcbiAgICAhbm9kZS5wb3NpdGlvbi5zdGFydCB8fFxuICAgICFub2RlLnBvc2l0aW9uLnN0YXJ0LmxpbmUgfHxcbiAgICAhbm9kZS5wb3NpdGlvbi5zdGFydC5jb2x1bW4gfHxcbiAgICAhbm9kZS5wb3NpdGlvbi5lbmQgfHxcbiAgICAhbm9kZS5wb3NpdGlvbi5lbmQubGluZSB8fFxuICAgICFub2RlLnBvc2l0aW9uLmVuZC5jb2x1bW5cbiAgKVxufVxuIl0sIm5hbWVzIjpbXSwiaWdub3JlTGlzdCI6WzBdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(ssr)/./node_modules/unist-util-generated/lib/index.js\n");

/***/ })

};
;