"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
exports.id = "vendor-chunks/direction";
exports.ids = ["vendor-chunks/direction"];
exports.modules = {

/***/ "(ssr)/./node_modules/direction/index.js":
/*!*****************************************!*\
  !*** ./node_modules/direction/index.js ***!
  \*****************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = direction\n\nvar RTL = '\\u0591-\\u07FF\\uFB1D-\\uFDFD\\uFE70-\\uFEFC'\nvar LTR =\n  'A-Za-z\\u00C0-\\u00D6\\u00D8-\\u00F6' +\n  '\\u00F8-\\u02B8\\u0300-\\u0590\\u0800-\\u1FFF\\u200E\\u2C00-\\uFB1C' +\n  '\\uFE00-\\uFE6F\\uFEFD-\\uFFFF'\n\nvar rtl = new RegExp('^[^' + LTR + ']*[' + RTL + ']')\nvar ltr = new RegExp('^[^' + RTL + ']*[' + LTR + ']')\n\nfunction direction(value) {\n  value = String(value || '')\n\n  if (rtl.test(value)) {\n    return 'rtl'\n  }\n\n  if (ltr.test(value)) {\n    return 'ltr'\n  }\n\n  return 'neutral'\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHNzcikvLi9ub2RlX21vZHVsZXMvZGlyZWN0aW9uL2luZGV4LmpzIiwibWFwcGluZ3MiOiJBQUFZOztBQUVaOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSIsInNvdXJjZXMiOlsiL1VzZXJzL2F0ZWZhdGF5YS9Eb2N1bWVudHMvRGF0YSBTY2llbmNlL0NvcGlsb3RLaXQvRnJlc2gvZnJvbnRlbmQvbm9kZV9tb2R1bGVzL2RpcmVjdGlvbi9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHN0cmljdCdcblxubW9kdWxlLmV4cG9ydHMgPSBkaXJlY3Rpb25cblxudmFyIFJUTCA9ICdcXHUwNTkxLVxcdTA3RkZcXHVGQjFELVxcdUZERkRcXHVGRTcwLVxcdUZFRkMnXG52YXIgTFRSID1cbiAgJ0EtWmEtelxcdTAwQzAtXFx1MDBENlxcdTAwRDgtXFx1MDBGNicgK1xuICAnXFx1MDBGOC1cXHUwMkI4XFx1MDMwMC1cXHUwNTkwXFx1MDgwMC1cXHUxRkZGXFx1MjAwRVxcdTJDMDAtXFx1RkIxQycgK1xuICAnXFx1RkUwMC1cXHVGRTZGXFx1RkVGRC1cXHVGRkZGJ1xuXG52YXIgcnRsID0gbmV3IFJlZ0V4cCgnXlteJyArIExUUiArICddKlsnICsgUlRMICsgJ10nKVxudmFyIGx0ciA9IG5ldyBSZWdFeHAoJ15bXicgKyBSVEwgKyAnXSpbJyArIExUUiArICddJylcblxuZnVuY3Rpb24gZGlyZWN0aW9uKHZhbHVlKSB7XG4gIHZhbHVlID0gU3RyaW5nKHZhbHVlIHx8ICcnKVxuXG4gIGlmIChydGwudGVzdCh2YWx1ZSkpIHtcbiAgICByZXR1cm4gJ3J0bCdcbiAgfVxuXG4gIGlmIChsdHIudGVzdCh2YWx1ZSkpIHtcbiAgICByZXR1cm4gJ2x0cidcbiAgfVxuXG4gIHJldHVybiAnbmV1dHJhbCdcbn1cbiJdLCJuYW1lcyI6W10sImlnbm9yZUxpc3QiOlswXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(ssr)/./node_modules/direction/index.js\n");

/***/ })

};
;