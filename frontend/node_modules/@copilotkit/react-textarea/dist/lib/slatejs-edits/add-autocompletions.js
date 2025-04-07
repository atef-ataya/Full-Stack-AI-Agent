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

// src/lib/slatejs-edits/add-autocompletions.ts
var add_autocompletions_exports = {};
__export(add_autocompletions_exports, {
  addAutocompletionsToEditor: () => addAutocompletionsToEditor
});
module.exports = __toCommonJS(add_autocompletions_exports);
var import_slate = require("slate");
function addAutocompletionsToEditor(editor, newSuggestion, point) {
  const editorPosition = editor.selection;
  import_slate.Transforms.insertNodes(
    editor,
    [
      {
        type: "suggestion",
        inline: true,
        content: newSuggestion,
        children: [{ text: "" }]
      }
    ],
    {
      at: point
    }
  );
  if (editorPosition) {
    editor.selection = editorPosition;
  }
}
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  addAutocompletionsToEditor
});
//# sourceMappingURL=add-autocompletions.js.map