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

// src/lib/get-text-around-cursor.ts
var get_text_around_cursor_exports = {};
__export(get_text_around_cursor_exports, {
  extractTextWithNewlines: () => extractTextWithNewlines,
  getFullEditorTextWithNewlines: () => getFullEditorTextWithNewlines,
  getTextAroundCollapsedCursor: () => getTextAroundCollapsedCursor,
  getTextAroundSelection: () => getTextAroundSelection
});
module.exports = __toCommonJS(get_text_around_cursor_exports);
var import_slate = require("slate");
function getTextAroundCollapsedCursor(editor) {
  const { selection } = editor;
  if (!selection || !import_slate.Range.isCollapsed(selection)) {
    return null;
  }
  const cursorPoint = selection.anchor;
  const beforeRange = {
    anchor: import_slate.Editor.start(editor, []),
    focus: cursorPoint
  };
  const afterRange = {
    anchor: cursorPoint,
    focus: import_slate.Editor.end(editor, [])
  };
  const before = extractTextWithNewlines(editor, beforeRange);
  const after = extractTextWithNewlines(editor, afterRange);
  return {
    cursorPoint,
    textBeforeCursor: before,
    textAfterCursor: after
  };
}
function getTextAroundSelection(editor) {
  const { selection } = editor;
  if (!selection) {
    return null;
  }
  const wellOrderedSelection = wellOrderedRange(selection);
  const beforeRange = {
    anchor: import_slate.Editor.start(editor, []),
    focus: wellOrderedSelection.anchor
  };
  const afterRange = {
    anchor: wellOrderedSelection.focus,
    focus: import_slate.Editor.end(editor, [])
  };
  const before = extractTextWithNewlines(editor, beforeRange);
  const after = extractTextWithNewlines(editor, afterRange);
  const selectedText = extractTextWithNewlines(editor, wellOrderedSelection);
  return {
    selection: wellOrderedSelection,
    textBeforeCursor: before,
    selectedText,
    textAfterCursor: after
  };
}
function getFullEditorTextWithNewlines(editor) {
  const fullDocumentRange = {
    anchor: import_slate.Editor.start(editor, []),
    focus: import_slate.Editor.end(editor, [])
  };
  return extractTextWithNewlines(editor, fullDocumentRange);
}
function extractTextWithNewlines(editor, range) {
  const voids = false;
  const [start, end] = import_slate.Range.edges(range);
  let text = "";
  let lastBlock = null;
  for (const [node, path] of import_slate.Editor.nodes(editor, {
    at: range,
    match: import_slate.Text.isText,
    voids
  })) {
    let t = node.text;
    const [block] = import_slate.Editor.above(editor, {
      at: path,
      match: (n) => import_slate.Element.isElement(n) && n.type === "paragraph"
    }) || [null];
    if (lastBlock !== block && block) {
      if (lastBlock) {
        text += "\n";
      }
      lastBlock = block;
    }
    if (import_slate.Path.equals(path, end.path)) {
      t = t.slice(0, end.offset);
    }
    if (import_slate.Path.equals(path, start.path)) {
      t = t.slice(start.offset);
    }
    text += t;
  }
  return text;
}
function wellOrderedRange(range) {
  const { anchor, focus } = range;
  if (import_slate.Point.isBefore(anchor, focus)) {
    return range;
  }
  return {
    anchor: focus,
    focus: anchor
  };
}
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  extractTextWithNewlines,
  getFullEditorTextWithNewlines,
  getTextAroundCollapsedCursor,
  getTextAroundSelection
});
//# sourceMappingURL=get-text-around-cursor.js.map