import {
  IncludedFilesPreview
} from "./chunk-KMVGEY7Q.mjs";
import {
  use_autosize_textarea_default
} from "./chunk-3PQ7GSFE.mjs";
import {
  Button
} from "./chunk-4PDYALMP.mjs";
import {
  Label
} from "./chunk-D47EKHIF.mjs";
import {
  useHoveringEditorContext
} from "./chunk-LYB4B6MK.mjs";
import {
  SourceSearchBox
} from "./chunk-WGWQRALG.mjs";
import {
  streamPromiseFlatten
} from "./chunk-2QDCE7PD.mjs";
import {
  __async
} from "./chunk-MRXNTQOX.mjs";

// src/components/hovering-toolbar/text-insertion-prompt-box/hovering-insertion-prompt-box-core.tsx
import { useCopilotContext } from "@copilotkit/react-core";
import { useCallback, useEffect, useRef, useState } from "react";
import { Fragment, jsx, jsxs } from "react/jsx-runtime";
var HoveringInsertionPromptBoxCore = ({
  performInsertion,
  state,
  insertionOrEditingFunction,
  contextCategories
}) => {
  const { getDocumentsContext } = useCopilotContext();
  const [editSuggestion, setEditSuggestion] = useState("");
  const [suggestionIsLoading, setSuggestionIsLoading] = useState(false);
  const [adjustmentPrompt, setAdjustmentPrompt] = useState("");
  const [generatingSuggestion, setGeneratingSuggestion] = useState(
    null
  );
  const adjustmentTextAreaRef = useRef(null);
  const suggestionTextAreaRef = useRef(null);
  const [filePointers, setFilePointers] = useState([]);
  const [suggestedFiles, setSuggestedFiles] = useState([]);
  useEffect(() => {
    setSuggestedFiles(getDocumentsContext(contextCategories));
  }, [contextCategories, getDocumentsContext]);
  use_autosize_textarea_default(suggestionTextAreaRef, editSuggestion || "");
  use_autosize_textarea_default(adjustmentTextAreaRef, adjustmentPrompt || "");
  useEffect(() => {
    var _a;
    (_a = adjustmentTextAreaRef.current) == null ? void 0 : _a.focus();
  }, []);
  useEffect(() => {
    if (!generatingSuggestion) {
      return;
    }
    if (generatingSuggestion.locked) {
      return;
    }
    setEditSuggestion("");
    const reader = generatingSuggestion.getReader();
    const read = () => __async(void 0, null, function* () {
      setSuggestionIsLoading(true);
      while (true) {
        const { done, value } = yield reader.read();
        if (done) {
          break;
        }
        setEditSuggestion((prev) => {
          const newSuggestion = prev + value;
          if (suggestionTextAreaRef.current) {
            suggestionTextAreaRef.current.scrollTop = suggestionTextAreaRef.current.scrollHeight;
          }
          return newSuggestion;
        });
      }
      setSuggestionIsLoading(false);
    });
    read();
    return () => {
      const releaseLockIfNotClosed = () => __async(void 0, null, function* () {
        try {
          yield reader.closed;
        } catch (e) {
          reader.releaseLock();
        }
      });
      releaseLockIfNotClosed();
    };
  }, [generatingSuggestion]);
  const beginGeneratingAdjustment = useCallback(() => __async(void 0, null, function* () {
    if (!adjustmentPrompt.trim()) {
      return;
    }
    let modificationState = state.editorState;
    if (editSuggestion !== "") {
      modificationState.selectedText = editSuggestion;
    }
    const adjustmentSuggestionTextStreamPromise = insertionOrEditingFunction(
      modificationState,
      adjustmentPrompt,
      filePointers,
      new AbortController().signal
    );
    const adjustmentSuggestionTextStream = streamPromiseFlatten(
      adjustmentSuggestionTextStreamPromise
    );
    setGeneratingSuggestion(adjustmentSuggestionTextStream);
  }), [
    adjustmentPrompt,
    editSuggestion,
    state.editorState,
    insertionOrEditingFunction,
    filePointers
  ]);
  const isLoading = suggestionIsLoading;
  const textToEdit = editSuggestion || state.editorState.selectedText;
  const adjustmentLabel = textToEdit === "" ? "Describe the text you want to insert" : "Describe adjustments to the suggested text";
  const placeholder = textToEdit === "" ? "e.g. 'summarize the client's top 3 pain-points from @CallTranscript'" : "e.g. 'make it more formal', 'be more specific', ...";
  const { setIsDisplayed } = useHoveringEditorContext();
  const AdjustmentPromptComponent = /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsx(Label, { className: "", children: adjustmentLabel }),
    /* @__PURE__ */ jsxs("div", { className: "relative w-full flex items-center", children: [
      /* @__PURE__ */ jsx(
        "textarea",
        {
          "data-testid": "adjustment-prompt",
          disabled: suggestionIsLoading,
          ref: adjustmentTextAreaRef,
          value: adjustmentPrompt,
          onChange: (e) => setAdjustmentPrompt(e.target.value),
          onKeyDown: (e) => {
            if (e.key === "Enter" && e.shiftKey) {
              e.preventDefault();
              setAdjustmentPrompt(adjustmentPrompt + "\n");
            } else if (e.key === "Enter") {
              e.preventDefault();
              beginGeneratingAdjustment();
            } else if (e.key == "Escape") {
              e.preventDefault();
              setIsDisplayed(false);
            }
          },
          placeholder,
          style: { minHeight: "3rem" },
          className: "w-full bg-slate-100 h-auto h-min-14 text-sm p-2 rounded-md resize-none overflow-visible focus:outline-none focus:ring-0 focus:border-non pr-[3rem]",
          rows: 1
        }
      ),
      /* @__PURE__ */ jsx(
        "button",
        {
          onClick: beginGeneratingAdjustment,
          className: "absolute right-2 bg-blue-500 text-white w-8 h-8 rounded-full flex items-center justify-center",
          "data-testid": "generate-button",
          children: /* @__PURE__ */ jsx("i", { className: "material-icons", children: "arrow_forward" })
        }
      )
    ] })
  ] });
  const SuggestionComponent = /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsxs("div", { className: "flex justify-between items-end w-full", children: [
      /* @__PURE__ */ jsx(Label, { className: "mt-4", children: "Suggested:" }),
      /* @__PURE__ */ jsx("div", { className: "ml-auto", children: isLoading && /* @__PURE__ */ jsx("div", { className: "flex justify-center items-center", children: /* @__PURE__ */ jsx(
        "div",
        {
          className: "inline-block h-4 w-4 animate-spin rounded-full border-4 border-solid border-current border-r-transparent align-[-0.125em] motion-reduce:animate-[spin_1.5s_linear_infinite]",
          role: "status",
          children: /* @__PURE__ */ jsx("span", { className: "!absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]", children: "Loading..." })
        }
      ) }) })
    ] }),
    /* @__PURE__ */ jsx(
      "textarea",
      {
        "data-testid": "suggestion-result",
        ref: suggestionTextAreaRef,
        value: editSuggestion,
        disabled: suggestionIsLoading,
        onChange: (e) => setEditSuggestion(e.target.value),
        className: "w-full text-base p-2 border border-gray-300 rounded-md resize-none bg-green-50",
        style: { overflow: "auto", maxHeight: "10em" }
      }
    )
  ] });
  const SubmitComponent = /* @__PURE__ */ jsx("div", { className: "flex w-full gap-4 justify-start", children: /* @__PURE__ */ jsxs(
    Button,
    {
      "data-testid": "insert-button",
      className: " bg-green-700 text-white",
      onClick: () => {
        performInsertion(editSuggestion);
      },
      children: [
        "Insert ",
        /* @__PURE__ */ jsx("i", { className: "material-icons", children: "check" })
      ]
    }
  ) });
  const sourceSearchCandidate = adjustmentPrompt.split(" ").pop();
  const sourceSearchWord = (sourceSearchCandidate == null ? void 0 : sourceSearchCandidate.startsWith("@")) ? sourceSearchCandidate.slice(1) : void 0;
  return /* @__PURE__ */ jsxs("div", { className: "w-full flex flex-col items-start relative gap-2", children: [
    AdjustmentPromptComponent,
    filePointers.length > 0 && /* @__PURE__ */ jsx(IncludedFilesPreview, { includedFiles: filePointers, setIncludedFiles: setFilePointers }),
    sourceSearchWord !== void 0 && /* @__PURE__ */ jsx(
      SourceSearchBox,
      {
        searchTerm: sourceSearchWord,
        suggestedFiles,
        onSelectedFile: (filePointer) => {
          var _a;
          setAdjustmentPrompt(adjustmentPrompt.replace(new RegExp(`@${sourceSearchWord}$`), ""));
          setFilePointers((prev) => [...prev, filePointer]);
          (_a = adjustmentTextAreaRef.current) == null ? void 0 : _a.focus();
        }
      }
    ),
    generatingSuggestion ? SuggestionComponent : null,
    generatingSuggestion ? SubmitComponent : null
  ] });
};

export {
  HoveringInsertionPromptBoxCore
};
//# sourceMappingURL=chunk-2VMZ5ZWT.mjs.map