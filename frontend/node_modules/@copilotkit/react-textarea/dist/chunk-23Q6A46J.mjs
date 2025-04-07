import {
  areEqual_autocompleteState
} from "./chunk-AJ5OMEXM.mjs";
import {
  nullableCompatibleEqualityCheck
} from "./chunk-YLFAIYRY.mjs";
import {
  Debouncer
} from "./chunk-DFTV4TST.mjs";
import {
  __async
} from "./chunk-MRXNTQOX.mjs";

// src/hooks/base-copilot-textarea-implementation/use-autosuggestions.ts
import { useCallback, useEffect, useMemo, useState } from "react";
function useAutosuggestions(debounceTime, shouldAcceptAutosuggestionOnKeyPress, shouldAcceptAutosuggestionOnTouch, autosuggestionFunction, insertAutocompleteSuggestion, disableWhenEmpty, disabled) {
  const [previousAutocompleteState, setPreviousAutocompleteState] = useState(null);
  const [currentAutocompleteSuggestion, setCurrentAutocompleteSuggestion] = useState(null);
  const awaitForAndAppendSuggestion = useCallback(
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
  const debouncedFunction = useMemo(
    () => new Debouncer(debounceTime),
    [debounceTime]
  );
  useEffect(() => {
    return () => {
      debouncedFunction.cancel();
      setCurrentAutocompleteSuggestion(null);
    };
  }, [debouncedFunction, disabled]);
  const onChange = useCallback(
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
  const keyDownOrTouchHandler = useCallback(
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

export {
  useAutosuggestions
};
//# sourceMappingURL=chunk-23Q6A46J.mjs.map