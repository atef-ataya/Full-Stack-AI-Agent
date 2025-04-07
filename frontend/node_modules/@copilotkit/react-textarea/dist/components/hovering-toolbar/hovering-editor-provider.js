"use strict";
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __hasOwnProp = Object.prototype.hasOwnProperty;
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

// src/components/hovering-toolbar/hovering-editor-provider.tsx
var hovering_editor_provider_exports = {};
__export(hovering_editor_provider_exports, {
  HoveringEditorProvider: () => HoveringEditorProvider,
  useHoveringEditorContext: () => useHoveringEditorContext
});
module.exports = __toCommonJS(hovering_editor_provider_exports);
var import_react = require("react");
var import_jsx_runtime = require("react/jsx-runtime");
var HoveringEditorContext = (0, import_react.createContext)({
  isDisplayed: false,
  setIsDisplayed: () => {
  }
});
var HoveringEditorProvider = ({ children }) => {
  const [isDisplayed, setIsDisplayed] = (0, import_react.useState)(false);
  return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(HoveringEditorContext.Provider, { value: { isDisplayed, setIsDisplayed }, children });
};
var useHoveringEditorContext = () => (0, import_react.useContext)(HoveringEditorContext);
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  HoveringEditorProvider,
  useHoveringEditorContext
});
//# sourceMappingURL=hovering-editor-provider.js.map