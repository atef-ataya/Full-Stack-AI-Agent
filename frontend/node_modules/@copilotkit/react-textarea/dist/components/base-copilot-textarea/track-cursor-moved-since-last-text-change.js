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

// src/components/base-copilot-textarea/track-cursor-moved-since-last-text-change.tsx
var track_cursor_moved_since_last_text_change_exports = {};
__export(track_cursor_moved_since_last_text_change_exports, {
  TrackerTextEditedSinceLastCursorMovement: () => TrackerTextEditedSinceLastCursorMovement
});
module.exports = __toCommonJS(track_cursor_moved_since_last_text_change_exports);
var import_react = require("react");
var import_slate_react = require("slate-react");
var import_slate2 = require("slate");

// src/lib/editor-to-text.ts
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

// src/components/base-copilot-textarea/track-cursor-moved-since-last-text-change.tsx
var import_jsx_runtime = require("react/jsx-runtime");
function TrackerTextEditedSinceLastCursorMovement(props) {
  const cursorState = (0, import_slate_react.useSlateSelector)((state) => ({
    selection: state.selection,
    text: editorToText(state)
  }));
  const previousState = usePrevious(cursorState);
  (0, import_react.useEffect)(() => {
    if (!previousState) {
      return;
    }
    if (cursorChangedWithoutTextChanged(previousState, cursorState)) {
      props.setCursorMovedSinceLastTextChange(true);
    }
  }, [props.setCursorMovedSinceLastTextChange, cursorState]);
  return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_jsx_runtime.Fragment, {});
}
var cursorChangedWithoutTextChanged = (prev, next) => {
  const isSelectionChanged = !isSelectionEqual(prev.selection, next.selection);
  const isTextSame = prev.text === next.text;
  return isSelectionChanged && isTextSame;
};
var isSelectionEqual = (a, b) => {
  if (!a && !b)
    return true;
  if (!a || !b)
    return false;
  return import_slate2.Range.equals(a, b);
};
function usePrevious(value) {
  const ref = (0, import_react.useRef)();
  (0, import_react.useEffect)(() => {
    ref.current = value;
  });
  return ref.current;
}
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  TrackerTextEditedSinceLastCursorMovement
});
//# sourceMappingURL=track-cursor-moved-since-last-text-change.js.map