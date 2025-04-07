"use strict";
var __defProp = Object.defineProperty;
var __defProps = Object.defineProperties;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropDescs = Object.getOwnPropertyDescriptors;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getOwnPropSymbols = Object.getOwnPropertySymbols;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __propIsEnum = Object.prototype.propertyIsEnumerable;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp.call(b, prop))
      __defNormalProp(a, prop, b[prop]);
  if (__getOwnPropSymbols)
    for (var prop of __getOwnPropSymbols(b)) {
      if (__propIsEnum.call(b, prop))
        __defNormalProp(a, prop, b[prop]);
    }
  return a;
};
var __spreadProps = (a, b) => __defProps(a, __getOwnPropDescs(b));
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

// src/components/base-copilot-textarea/render-element.tsx
var render_element_exports = {};
__export(render_element_exports, {
  makeRenderElementFunction: () => makeRenderElementFunction
});
module.exports = __toCommonJS(render_element_exports);
var import_jsx_runtime = require("react/jsx-runtime");
function makeRenderElementFunction(suggestionsStyle) {
  return (props) => {
    switch (props.element.type) {
      case "paragraph":
        return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DefaultElement, __spreadValues({}, props));
      case "suggestion":
        return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SuggestionElement, __spreadProps(__spreadValues({}, props), { suggestionsStyle }));
    }
  };
}
var DefaultElement = (props) => {
  return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", __spreadProps(__spreadValues({}, props.attributes), { children: props.children }));
};
var SuggestionElement = (props) => {
  return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(
    "span",
    __spreadProps(__spreadValues({}, props.attributes), {
      style: __spreadValues({}, props.suggestionsStyle),
      "data-testid": "suggestion",
      contentEditable: false,
      children: [
        props.children,
        props.element.type === "suggestion" && props.element.content
      ]
    })
  );
};
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  makeRenderElementFunction
});
//# sourceMappingURL=render-element.js.map