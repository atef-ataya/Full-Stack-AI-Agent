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

// src/lib/editor-to-text.ts
var editor_to_text_exports = {};
__export(editor_to_text_exports, {
  editorToText: () => editorToText
});
module.exports = __toCommonJS(editor_to_text_exports);
var import_slate = require("slate");
function nodeChildrenToTextComponents(editor, nodes) {
  const indeciesOfInlineElements = new Set(
    nodes.map((node, index) => {
      if (import_slate.Element.isElement(node) && editor.isInline(node)) {
        return index;
      }
      return -1;
    }).filter((index) => index !== -1)
  );
  const nonIgnorableItems = nodes.filter((node, index) => {
    const isInline = indeciesOfInlineElements.has(index);
    if (isInline) {
      return false;
    }
    const isNeighbourOfInline = indeciesOfInlineElements.has(index - 1) || indeciesOfInlineElements.has(index + 1);
    if (isNeighbourOfInline) {
      return node.text !== "";
    }
    return true;
  });
  return nonIgnorableItems.map((node) => {
    if (import_slate.Element.isElement(node)) {
      switch (node.type) {
        case "paragraph":
          return nodeChildrenToTextComponents(editor, node.children);
        case "suggestion":
          return [];
      }
    } else {
      return [node];
    }
  }).reduce((acc, val) => acc.concat(val), []);
}
var editorToText = (editor) => {
  const flattened = nodeChildrenToTextComponents(editor, editor.children);
  const text = flattened.map((textComponent) => textComponent.text).join("\n");
  return text;
};
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  editorToText
});
//# sourceMappingURL=editor-to-text.js.map