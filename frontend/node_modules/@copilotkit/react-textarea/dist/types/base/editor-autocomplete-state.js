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

// src/types/base/editor-autocomplete-state.ts
var editor_autocomplete_state_exports = {};
__export(editor_autocomplete_state_exports, {
  areEqual_autocompleteState: () => areEqual_autocompleteState
});
module.exports = __toCommonJS(editor_autocomplete_state_exports);

// src/lib/utils.ts
var import_clsx = require("clsx");
var import_tailwind_merge = require("tailwind-merge");
var arraysAreEqual = (arr1, arr2) => arr1.length === arr2.length && arr1.every((value, index) => value === arr2[index]);

// src/types/base/editor-autocomplete-state.ts
function areEqual_autocompleteState(prev, next) {
  return prev.cursorPoint.offset === next.cursorPoint.offset && arraysAreEqual(prev.cursorPoint.path, next.cursorPoint.path) && prev.textBeforeCursor === next.textBeforeCursor && prev.textAfterCursor === next.textAfterCursor;
}
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  areEqual_autocompleteState
});
//# sourceMappingURL=editor-autocomplete-state.js.map