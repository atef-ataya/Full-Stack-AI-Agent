import {
  addAutocompletionsToEditor
} from "./chunk-2C7O2EVM.mjs";
import {
  clearAutocompletionsFromEditor
} from "./chunk-GQN2HYFJ.mjs";
import {
  useAutosuggestions
} from "./chunk-23Q6A46J.mjs";
import {
  useCopilotTextareaEditor
} from "./chunk-DRV2FOHZ.mjs";
import {
  usePopulateCopilotTextareaRef
} from "./chunk-QJNFNPWH.mjs";
import {
  replaceEditorText
} from "./chunk-5UNJXFUO.mjs";
import {
  TrackerTextEditedSinceLastCursorMovement
} from "./chunk-LQ2OWQU7.mjs";
import {
  useAddBrandingCss
} from "./chunk-7LSRNPNI.mjs";
import {
  HoveringToolbar
} from "./chunk-4XXU5BSA.mjs";
import {
  HoveringEditorProvider,
  useHoveringEditorContext
} from "./chunk-LYB4B6MK.mjs";
import {
  defaultBaseAutosuggestionsConfig
} from "./chunk-4CVSOOJY.mjs";
import {
  makeRenderElementFunction
} from "./chunk-7L6GIHDM.mjs";
import {
  makeRenderPlaceholderFunction
} from "./chunk-XW3ICO4S.mjs";
import {
  getFullEditorTextWithNewlines,
  getTextAroundCollapsedCursor
} from "./chunk-ECR45NSD.mjs";
import {
  __objRest,
  __spreadProps,
  __spreadValues
} from "./chunk-MRXNTQOX.mjs";

// src/components/base-copilot-textarea/base-copilot-textarea.tsx
import React, { useCallback, useEffect, useMemo, useState } from "react";
import { Editor } from "slate";
import { Editable, Slate } from "slate-react";
import { twMerge } from "tailwind-merge";
import { jsx, jsxs } from "react/jsx-runtime";
var BaseCopilotTextarea = React.forwardRef(
  (props, ref) => {
    return /* @__PURE__ */ jsx(HoveringEditorProvider, { children: /* @__PURE__ */ jsx(BaseCopilotTextareaWithHoveringContext, __spreadProps(__spreadValues({}, props), { ref })) });
  }
);
var BaseCopilotTextareaWithHoveringContext = React.forwardRef(
  (props, ref) => {
    const autosuggestionsConfig = __spreadValues(__spreadValues({}, defaultBaseAutosuggestionsConfig), props.baseAutosuggestionsConfig);
    const valueOnInitialRender = useMemo(() => {
      var _a2;
      return (_a2 = props.value) != null ? _a2 : "";
    }, []);
    const [lastKnownFullEditorText, setLastKnownFullEditorText] = useState(valueOnInitialRender);
    const [cursorMovedSinceLastTextChange, setCursorMovedSinceLastTextChange] = useState(false);
    const initialValue = useMemo(() => {
      return [
        {
          type: "paragraph",
          children: [{ text: valueOnInitialRender }]
        }
      ];
    }, [valueOnInitialRender]);
    const editor = useCopilotTextareaEditor();
    const { isDisplayed: hoveringEditorIsDisplayed, setIsDisplayed: setHoveringEditorIsDisplayed } = useHoveringEditorContext();
    const insertText = useCallback(
      (autosuggestion) => {
        Editor.insertText(editor, autosuggestion.text, {
          at: autosuggestion.point
        });
      },
      [editor]
    );
    const shouldDisableAutosuggestions = (
      // textarea is manually disabled:
      autosuggestionsConfig.disabled || // hovering editor is displayed:
      hoveringEditorIsDisplayed || // the cursor has moved since the last text change AND we are configured to disable autosuggestions in this case:
      cursorMovedSinceLastTextChange && autosuggestionsConfig.temporarilyDisableWhenMovingCursorWithoutChangingText
    );
    const {
      currentAutocompleteSuggestion,
      onChangeHandler: onChangeHandlerForAutocomplete,
      onKeyDownHandler: onKeyDownHandlerForAutocomplete,
      onTouchStartHandler: onTouchStartHandlerForAutocomplete
    } = useAutosuggestions(
      autosuggestionsConfig.debounceTime,
      autosuggestionsConfig.shouldAcceptAutosuggestionOnKeyPress,
      autosuggestionsConfig.shouldAcceptAutosuggestionOnTouch,
      autosuggestionsConfig.apiConfig.autosuggestionsFunction,
      insertText,
      autosuggestionsConfig.disableWhenEmpty,
      shouldDisableAutosuggestions
    );
    const onKeyDownHandlerForHoveringEditor = useCallback(
      (event) => {
        var _a2;
        if (autosuggestionsConfig.shouldToggleHoveringEditorOnKeyPress(event, (_a2 = props.shortcut) != null ? _a2 : "k")) {
          event.preventDefault();
          setHoveringEditorIsDisplayed(!hoveringEditorIsDisplayed);
        }
      },
      [
        hoveringEditorIsDisplayed,
        setHoveringEditorIsDisplayed,
        autosuggestionsConfig.shouldToggleHoveringEditorOnKeyPress
      ]
    );
    useEffect(() => {
      clearAutocompletionsFromEditor(editor);
      if (currentAutocompleteSuggestion) {
        addAutocompletionsToEditor(
          editor,
          currentAutocompleteSuggestion.text,
          currentAutocompleteSuggestion.point
        );
      }
    }, [currentAutocompleteSuggestion]);
    const suggestionStyleAugmented = useMemo(() => {
      return __spreadValues({
        fontStyle: "italic",
        color: "gray"
      }, props.suggestionsStyle);
    }, [props.suggestionsStyle]);
    const renderElementMemoized = useMemo(() => {
      return makeRenderElementFunction(suggestionStyleAugmented);
    }, [suggestionStyleAugmented]);
    const renderPlaceholderMemoized = useMemo(() => {
      const placeholderStyleSlatejsOverrides = {
        top: void 0
      };
      const placeholderStyleAugmented = __spreadValues(__spreadValues({}, placeholderStyleSlatejsOverrides), props.placeholderStyle);
      return makeRenderPlaceholderFunction(placeholderStyleAugmented);
    }, [props.placeholderStyle]);
    useEffect(() => {
      var _a2, _b;
      if (props.value === lastKnownFullEditorText) {
        return;
      }
      setLastKnownFullEditorText((_a2 = props.value) != null ? _a2 : "");
      replaceEditorText(editor, (_b = props.value) != null ? _b : "");
    }, [props.value]);
    const _a = props, {
      placeholderStyle,
      value,
      hoverMenuClassname,
      onValueChange,
      baseAutosuggestionsConfig: autosuggestionsConfigFromProps,
      className,
      onChange,
      onKeyDown,
      disableBranding
    } = _a, propsToForward = __objRest(_a, [
      "placeholderStyle",
      "value",
      "hoverMenuClassname",
      "onValueChange",
      "baseAutosuggestionsConfig",
      "className",
      "onChange",
      "onKeyDown",
      "disableBranding"
    ]);
    useAddBrandingCss(suggestionStyleAugmented, disableBranding);
    usePopulateCopilotTextareaRef(editor, ref);
    const moddedClassName = (() => {
      const baseClassName = "copilot-textarea";
      const brandingClass = disableBranding ? "no-branding" : "with-branding";
      const defaultTailwindClassName = "bg-white overflow-y-auto resize-y";
      const mergedClassName = twMerge(defaultTailwindClassName, className != null ? className : "");
      return `${baseClassName} ${brandingClass} ${mergedClassName}`;
    })();
    return /* @__PURE__ */ jsxs(
      Slate,
      {
        editor,
        initialValue,
        onChange: (value2) => {
          var _a2, _b;
          const newEditorState = getTextAroundCollapsedCursor(editor);
          const fullEditorText = newEditorState ? newEditorState.textBeforeCursor + newEditorState.textAfterCursor : getFullEditorTextWithNewlines(editor);
          setLastKnownFullEditorText((prev) => {
            if (prev !== fullEditorText) {
              setCursorMovedSinceLastTextChange(false);
            }
            return fullEditorText;
          });
          onChangeHandlerForAutocomplete(newEditorState);
          (_a2 = props.onValueChange) == null ? void 0 : _a2.call(props, fullEditorText);
          (_b = props.onChange) == null ? void 0 : _b.call(props, makeSemiFakeReactTextAreaEvent(fullEditorText));
        },
        children: [
          /* @__PURE__ */ jsx(
            TrackerTextEditedSinceLastCursorMovement,
            {
              setCursorMovedSinceLastTextChange
            }
          ),
          /* @__PURE__ */ jsx(
            HoveringToolbar,
            {
              apiConfig: autosuggestionsConfig.apiConfig,
              contextCategories: autosuggestionsConfig.contextCategories,
              hoverMenuClassname
            }
          ),
          /* @__PURE__ */ jsx(
            Editable,
            __spreadValues({
              renderElement: renderElementMemoized,
              renderPlaceholder: renderPlaceholderMemoized,
              onKeyDown: (event) => {
                var _a2;
                onKeyDownHandlerForHoveringEditor(event);
                onKeyDownHandlerForAutocomplete(event);
                (_a2 = props.onKeyDown) == null ? void 0 : _a2.call(props, event);
              },
              onTouchStart: (event) => {
                onTouchStartHandlerForAutocomplete(event);
              },
              "data-testid": "copilot-textarea-editable",
              className: moddedClassName,
              onBlur: (ev) => {
                var _a2;
                (_a2 = props.onBlur) == null ? void 0 : _a2.call(props, ev);
                clearAutocompletionsFromEditor(editor);
              }
            }, propsToForward)
          )
        ]
      }
    );
  }
);
function makeSemiFakeReactTextAreaEvent(currentText) {
  return {
    target: {
      value: currentText,
      type: "copilot-textarea"
    },
    currentTarget: {
      value: currentText,
      type: "copilot-textarea"
    }
  };
}

export {
  BaseCopilotTextarea
};
//# sourceMappingURL=chunk-PZYM7K4Y.mjs.map