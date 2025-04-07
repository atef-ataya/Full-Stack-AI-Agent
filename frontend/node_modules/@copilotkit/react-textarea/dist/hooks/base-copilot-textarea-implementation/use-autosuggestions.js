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
var __async = (__this, __arguments, generator) => {
  return new Promise((resolve, reject) => {
    var fulfilled = (value) => {
      try {
        step(generator.next(value));
      } catch (e) {
        reject(e);
      }
    };
    var rejected = (value) => {
      try {
        step(generator.throw(value));
      } catch (e) {
        reject(e);
      }
    };
    var step = (x) => x.done ? resolve(x.value) : Promise.resolve(x.value).then(fulfilled, rejected);
    step((generator = generator.apply(__this, __arguments)).next());
  });
};

// src/hooks/base-copilot-textarea-implementation/use-autosuggestions.ts
var use_autosuggestions_exports = {};
__export(use_autosuggestions_exports, {
  useAutosuggestions: () => useAutosuggestions
});
module.exports = __toCommonJS(use_autosuggestions_exports);
var import_react = require("react");

// src/lib/debouncer.ts
var Debouncer = class {
  constructor(wait) {
    this.wait = wait;
    this.debounce = (func, ...args) => __async(this, null, function* () {
      this.cancel();
      this.timeoutId = setTimeout(() => __async(this, null, function* () {
        try {
          this.activeAbortController = new AbortController();
          yield func(...args, this.activeAbortController.signal);
          this.activeAbortController = void 0;
        } catch (error) {
        }
      }), this.wait);
    });
    this.cancel = () => {
      if (this.activeAbortController) {
        this.activeAbortController.abort();
        this.activeAbortController = void 0;
      }
      if (this.timeoutId !== void 0) {
        clearTimeout(this.timeoutId);
        this.timeoutId = void 0;
      }
    };
  }
};

// src/lib/utils.ts
var import_clsx = require("clsx");
var import_tailwind_merge = require("tailwind-merge");
var arraysAreEqual = (arr1, arr2) => arr1.length === arr2.length && arr1.every((value, index) => value === arr2[index]);
function nullableCompatibleEqualityCheck(naiveEqualityCheck, a, b) {
  if (a === null || a === void 0 || b === null || b === void 0) {
    return a === b;
  }
  return naiveEqualityCheck(a, b);
}

// src/types/base/editor-autocomplete-state.ts
function areEqual_autocompleteState(prev, next) {
  return prev.cursorPoint.offset === next.cursorPoint.offset && arraysAreEqual(prev.cursorPoint.path, next.cursorPoint.path) && prev.textBeforeCursor === next.textBeforeCursor && prev.textAfterCursor === next.textAfterCursor;
}

// src/hooks/base-copilot-textarea-implementation/use-autosuggestions.ts
function useAutosuggestions(debounceTime, shouldAcceptAutosuggestionOnKeyPress, shouldAcceptAutosuggestionOnTouch, autosuggestionFunction, insertAutocompleteSuggestion, disableWhenEmpty, disabled) {
  const [previousAutocompleteState, setPreviousAutocompleteState] = (0, import_react.useState)(null);
  const [currentAutocompleteSuggestion, setCurrentAutocompleteSuggestion] = (0, import_react.useState)(null);
  const awaitForAndAppendSuggestion = (0, import_react.useCallback)(
    (editorAutocompleteState, abortSignal) => __async(this, null, function* () {
      if (disabled) {
        return;
      }
      if (disableWhenEmpty && editorAutocompleteState.textBeforeCursor === "" && editorAutocompleteState.textAfterCursor === "") {
        return;
      }
      const suggestion = yield autosuggestionFunction(editorAutocompleteState, abortSignal);
      if (!suggestion || abortSignal.aborted) {
        throw new DOMException("Aborted", "AbortError");
      }
      setCurrentAutocompleteSuggestion({
        text: suggestion,
        point: editorAutocompleteState.cursorPoint
      });
    }),
    [autosuggestionFunction, setCurrentAutocompleteSuggestion, disableWhenEmpty, disabled]
  );
  const debouncedFunction = (0, import_react.useMemo)(
    () => new Debouncer(debounceTime),
    [debounceTime]
  );
  (0, import_react.useEffect)(() => {
    return () => {
      debouncedFunction.cancel();
      setCurrentAutocompleteSuggestion(null);
    };
  }, [debouncedFunction, disabled]);
  const onChange = (0, import_react.useCallback)(
    (newEditorState) => {
      const editorStateHasChanged = !nullableCompatibleEqualityCheck(
        areEqual_autocompleteState,
        previousAutocompleteState,
        newEditorState
      );
      setPreviousAutocompleteState(newEditorState);
      if (!editorStateHasChanged) {
        return;
      }
      setCurrentAutocompleteSuggestion(null);
      if (newEditorState) {
        debouncedFunction.debounce(awaitForAndAppendSuggestion, newEditorState);
      } else {
        debouncedFunction.cancel();
      }
    },
    [
      previousAutocompleteState,
      setPreviousAutocompleteState,
      debouncedFunction,
      awaitForAndAppendSuggestion,
      setCurrentAutocompleteSuggestion
    ]
  );
  const keyDownOrTouchHandler = (0, import_react.useCallback)(
    (event) => {
      if (currentAutocompleteSuggestion) {
        const shouldAcceptSuggestion = event.type === "touchstart" ? shouldAcceptAutosuggestionOnTouch(event) : shouldAcceptAutosuggestionOnKeyPress(event);
        if (shouldAcceptSuggestion) {
          event.preventDefault();
          insertAutocompleteSuggestion(currentAutocompleteSuggestion);
          setCurrentAutocompleteSuggestion(null);
        }
      }
    },
    [
      currentAutocompleteSuggestion,
      setCurrentAutocompleteSuggestion,
      insertAutocompleteSuggestion,
      shouldAcceptAutosuggestionOnKeyPress
    ]
  );
  return {
    currentAutocompleteSuggestion,
    onChangeHandler: onChange,
    onKeyDownHandler: keyDownOrTouchHandler,
    onTouchStartHandler: keyDownOrTouchHandler
  };
}
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  useAutosuggestions
});
//# sourceMappingURL=use-autosuggestions.js.map