import {
  editorToText
} from "./chunk-T6MTDQZ7.mjs";

// src/components/base-copilot-textarea/track-cursor-moved-since-last-text-change.tsx
import { useEffect, useRef } from "react";
import { useSlateSelector } from "slate-react";
import { Range } from "slate";
import { Fragment, jsx } from "react/jsx-runtime";
function TrackerTextEditedSinceLastCursorMovement(props) {
  const cursorState = useSlateSelector((state) => ({
    selection: state.selection,
    text: editorToText(state)
  }));
  const previousState = usePrevious(cursorState);
  useEffect(() => {
    if (!previousState) {
      return;
    }
    if (cursorChangedWithoutTextChanged(previousState, cursorState)) {
      props.setCursorMovedSinceLastTextChange(true);
    }
  }, [props.setCursorMovedSinceLastTextChange, cursorState]);
  return /* @__PURE__ */ jsx(Fragment, {});
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
  return Range.equals(a, b);
};
function usePrevious(value) {
  const ref = useRef();
  useEffect(() => {
    ref.current = value;
  });
  return ref.current;
}

export {
  TrackerTextEditedSinceLastCursorMovement
};
//# sourceMappingURL=chunk-LQ2OWQU7.mjs.map