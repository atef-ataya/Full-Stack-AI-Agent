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

// src/hooks/misc/use-autosize-textarea.tsx
var use_autosize_textarea_exports = {};
__export(use_autosize_textarea_exports, {
  default: () => use_autosize_textarea_default
});
module.exports = __toCommonJS(use_autosize_textarea_exports);
var import_react = require("react");
var useAutosizeTextArea = (textAreaRef, value) => {
  (0, import_react.useEffect)(() => {
    if (textAreaRef.current !== null) {
      textAreaRef.current.style.height = "0px";
      const scrollHeight = textAreaRef.current.scrollHeight;
      textAreaRef.current.style.height = scrollHeight + "px";
    }
  }, [textAreaRef, value]);
};
var use_autosize_textarea_default = useAutosizeTextArea;
//# sourceMappingURL=use-autosize-textarea.js.map