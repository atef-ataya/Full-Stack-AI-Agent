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

// src/lib/slatejs-edits/clear-autocompletions.ts
var clear_autocompletions_exports = {};
__export(clear_autocompletions_exports, {
  clearAutocompletionsFromEditor: () => clearAutocompletionsFromEditor
});
module.exports = __toCommonJS(clear_autocompletions_exports);
var import_slate = require("slate");
function clearAutocompletionsFromEditor(editor) {
  const paths = [];
  for (const [node, path] of import_slate.Node.nodes(editor)) {
    if (import_slate.Element.isElement(node) && node.type === "suggestion") {
      paths.push(path);
    }
  }
  for (const path of paths) {
    try {
      import_slate.Transforms.removeNodes(editor, { at: path });
    } catch (e) {
      console.log("CopilotTextarea.clearAutocompletionsFromEditor: error removing node", e);
    }
  }
}
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  clearAutocompletionsFromEditor
});
//# sourceMappingURL=clear-autocompletions.js.map