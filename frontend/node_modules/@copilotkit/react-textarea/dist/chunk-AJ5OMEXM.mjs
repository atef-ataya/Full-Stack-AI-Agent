import {
  arraysAreEqual
} from "./chunk-YLFAIYRY.mjs";

// src/types/base/editor-autocomplete-state.ts
function areEqual_autocompleteState(prev, next) {
  return prev.cursorPoint.offset === next.cursorPoint.offset && arraysAreEqual(prev.cursorPoint.path, next.cursorPoint.path) && prev.textBeforeCursor === next.textBeforeCursor && prev.textAfterCursor === next.textAfterCursor;
}

export {
  areEqual_autocompleteState
};
//# sourceMappingURL=chunk-AJ5OMEXM.mjs.map