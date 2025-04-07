// src/lib/get-text-around-cursor.ts
import { Editor, Path, Range, Text, Element, Point } from "slate";
function getTextAroundCollapsedCursor(editor) {
  const { selection } = editor;
  if (!selection || !Range.isCollapsed(selection)) {
    return null;
  }
  const cursorPoint = selection.anchor;
  const beforeRange = {
    anchor: Editor.start(editor, []),
    focus: cursorPoint
  };
  const afterRange = {
    anchor: cursorPoint,
    focus: Editor.end(editor, [])
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
    anchor: Editor.start(editor, []),
    focus: wellOrderedSelection.anchor
  };
  const afterRange = {
    anchor: wellOrderedSelection.focus,
    focus: Editor.end(editor, [])
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
    anchor: Editor.start(editor, []),
    focus: Editor.end(editor, [])
  };
  return extractTextWithNewlines(editor, fullDocumentRange);
}
function extractTextWithNewlines(editor, range) {
  const voids = false;
  const [start, end] = Range.edges(range);
  let text = "";
  let lastBlock = null;
  for (const [node, path] of Editor.nodes(editor, {
    at: range,
    match: Text.isText,
    voids
  })) {
    let t = node.text;
    const [block] = Editor.above(editor, {
      at: path,
      match: (n) => Element.isElement(n) && n.type === "paragraph"
    }) || [null];
    if (lastBlock !== block && block) {
      if (lastBlock) {
        text += "\n";
      }
      lastBlock = block;
    }
    if (Path.equals(path, end.path)) {
      t = t.slice(0, end.offset);
    }
    if (Path.equals(path, start.path)) {
      t = t.slice(start.offset);
    }
    text += t;
  }
  return text;
}
function wellOrderedRange(range) {
  const { anchor, focus } = range;
  if (Point.isBefore(anchor, focus)) {
    return range;
  }
  return {
    anchor: focus,
    focus: anchor
  };
}

export {
  getTextAroundCollapsedCursor,
  getTextAroundSelection,
  getFullEditorTextWithNewlines,
  extractTextWithNewlines
};
//# sourceMappingURL=chunk-ECR45NSD.mjs.map