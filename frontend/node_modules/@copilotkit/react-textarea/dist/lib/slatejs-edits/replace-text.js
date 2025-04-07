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

// src/lib/slatejs-edits/replace-text.ts
var replace_text_exports = {};
__export(replace_text_exports, {
  replaceEditorText: () => replaceEditorText
});
module.exports = __toCommonJS(replace_text_exports);
var import_slate = require("slate");
function replaceEditorText(editor, newText) {
  import_slate.Transforms.delete(editor, {
    at: {
      anchor: import_slate.Editor.start(editor, []),
      focus: import_slate.Editor.end(editor, [])
    }
  });
  if (newText && newText !== "") {
    import_slate.Transforms.insertNodes(
      editor,
      [
        {
          type: "paragraph",
          children: [{ text: newText }]
        }
      ],
      {
        at: [0]
      }
    );
  }
}
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  replaceEditorText
});
//# sourceMappingURL=replace-text.js.map