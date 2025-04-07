"use strict";
var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getOwnPropSymbols = Object.getOwnPropertySymbols;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __propIsEnum = Object.prototype.propertyIsEnumerable;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp.call(b, prop))
      __defNormalProp(a, prop, b[prop]);
  if (__getOwnPropSymbols)
    for (var prop of __getOwnPropSymbols(b)) {
      if (__propIsEnum.call(b, prop))
        __defNormalProp(a, prop, b[prop]);
    }
  return a;
};
var __objRest = (source, exclude) => {
  var target = {};
  for (var prop in source)
    if (__hasOwnProp.call(source, prop) && exclude.indexOf(prop) < 0)
      target[prop] = source[prop];
  if (source != null && __getOwnPropSymbols)
    for (var prop of __getOwnPropSymbols(source)) {
      if (exclude.indexOf(prop) < 0 && __propIsEnum.call(source, prop))
        target[prop] = source[prop];
    }
  return target;
};
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
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  // If the importer is in node compatibility mode or this is not an ESM
  // file that has been converted to a CommonJS file using a Babel-
  // compatible transform (i.e. "__esModule" has not been set), then set
  // "default" to the CommonJS "module.exports" for node compatibility.
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
  mod
));
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

// src/components/hovering-toolbar/text-insertion-prompt-box/hovering-insertion-prompt-box-core.tsx
var hovering_insertion_prompt_box_core_exports = {};
__export(hovering_insertion_prompt_box_core_exports, {
  HoveringInsertionPromptBoxCore: () => HoveringInsertionPromptBoxCore
});
module.exports = __toCommonJS(hovering_insertion_prompt_box_core_exports);

// src/hooks/misc/use-autosize-textarea.tsx
var import_react = require("react");
var useAutosizeTextArea = (textAreaRef, value) => {
  (0, import_react.useEffect)(() => {
    if (textAreaRef.current !== null) {
      textAreaRef.current.style.height = "0px";
      const scrollHeight = textAreaRef.current.scrollHeight;
      textAreaRef.current.style.height = scrollHeight + "px";
    }
  }, [textAreaRef, value]);
};
var use_autosize_textarea_default = useAutosizeTextArea;

// src/components/source-search-box/source-search-box.tsx
var import_react2 = require("react");

// src/components/ui/command.tsx
var React = __toESM(require("react"));
var import_cmdk = require("cmdk");

// src/lib/utils.ts
var import_clsx = require("clsx");
var import_tailwind_merge = require("tailwind-merge");
function cn(...inputs) {
  return (0, import_tailwind_merge.twMerge)((0, import_clsx.clsx)(inputs));
}

// src/components/ui/command.tsx
var import_jsx_runtime = require("react/jsx-runtime");
var Command = React.forwardRef((_a, ref) => {
  var _b = _a, { className } = _b, props = __objRest(_b, ["className"]);
  return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
    import_cmdk.Command,
    __spreadValues({
      ref,
      className: cn(
        "flex h-full w-full flex-col overflow-hidden rounded-md bg-popover text-popover-foreground",
        className
      )
    }, props)
  );
});
Command.displayName = import_cmdk.Command.displayName;
var CommandInput = React.forwardRef((_a, ref) => {
  var _b = _a, { className } = _b, props = __objRest(_b, ["className"]);
  return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "flex items-center border-b px-3", "cmdk-input-wrapper": "", children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
    import_cmdk.Command.Input,
    __spreadValues({
      ref,
      className: cn(
        "flex h-11 w-full rounded-md bg-transparent py-3 text-sm outline-none placeholder:text-muted-foreground disabled:cursor-not-allowed disabled:opacity-50",
        className
      )
    }, props)
  ) });
});
CommandInput.displayName = import_cmdk.Command.Input.displayName;
var CommandList = React.forwardRef((_a, ref) => {
  var _b = _a, { className } = _b, props = __objRest(_b, ["className"]);
  return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
    import_cmdk.Command.List,
    __spreadValues({
      ref,
      className: cn("max-h-[300px] overflow-y-auto overflow-x-hidden pb-2", className)
    }, props)
  );
});
CommandList.displayName = import_cmdk.Command.List.displayName;
var CommandEmpty = React.forwardRef((props, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_cmdk.Command.Empty, __spreadValues({ ref, className: "py-6 text-center text-sm" }, props)));
CommandEmpty.displayName = import_cmdk.Command.Empty.displayName;
var CommandGroup = React.forwardRef((_a, ref) => {
  var _b = _a, { className } = _b, props = __objRest(_b, ["className"]);
  return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
    import_cmdk.Command.Group,
    __spreadValues({
      ref,
      className: cn(
        "overflow-hidden p-1 text-foreground [&_[cmdk-group-heading]]:px-2 [&_[cmdk-group-heading]]:py-1.5 [&_[cmdk-group-heading]]:text-xs [&_[cmdk-group-heading]]:font-medium [&_[cmdk-group-heading]]:text-muted-foreground",
        className
      )
    }, props)
  );
});
CommandGroup.displayName = import_cmdk.Command.Group.displayName;
var CommandSeparator = React.forwardRef((_a, ref) => {
  var _b = _a, { className } = _b, props = __objRest(_b, ["className"]);
  return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
    import_cmdk.Command.Separator,
    __spreadValues({
      ref,
      className: cn("-mx-1 h-px bg-border", className)
    }, props)
  );
});
CommandSeparator.displayName = import_cmdk.Command.Separator.displayName;
var CommandItem = React.forwardRef((_a, ref) => {
  var _b = _a, { className } = _b, props = __objRest(_b, ["className"]);
  return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
    import_cmdk.Command.Item,
    __spreadValues({
      ref,
      className: cn(
        "relative flex cursor-default select-none items-center rounded-sm text-sm outline-none aria-selected:bg-accent aria-selected:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
        className
      )
    }, props)
  );
});
CommandItem.displayName = import_cmdk.Command.Item.displayName;
var CommandShortcut = (_a) => {
  var _b = _a, { className } = _b, props = __objRest(_b, ["className"]);
  return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
    "span",
    __spreadValues({
      className: cn("ml-auto text-xs tracking-widest text-muted-foreground", className)
    }, props)
  );
};
CommandShortcut.displayName = "CommandShortcut";

// src/components/source-search-box/source-search-box.tsx
var import_jsx_runtime2 = require("react/jsx-runtime");
function SourceSearchBox(props) {
  const [selectedValue, setSelectedValue] = (0, import_react2.useState)("");
  return /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)(
    Command,
    {
      className: "rounded-lg border shadow-md",
      value: selectedValue,
      onValueChange: (value) => {
        setSelectedValue(value);
      },
      filter: (value, search) => {
        if (props.searchTerm === "")
          return 1;
        if (value.startsWith(props.searchTerm))
          return 1;
        return 0;
      },
      children: [
        /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(
          CommandInput,
          {
            value: props.searchTerm,
            className: "rounded-t-lg hidden",
            placeholder: "Search for a command..."
          }
        ),
        /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)(CommandList, { children: [
          /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(CommandEmpty, { children: "No results found." }),
          /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(CommandGroup, { heading: "Available resources", children: props.suggestedFiles.map((filePointer) => {
            return /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(
              CommandItem,
              {
                value: filePointer.name,
                onSelect: (value) => {
                  props.onSelectedFile(filePointer);
                },
                children: /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)("div", { className: " px-3  flex flex-row gap-1 items-center", children: [
                  /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(Logo, { width: "20px", height: "20px", children: /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(
                    "img",
                    {
                      src: filePointer.iconImageUri,
                      alt: filePointer.sourceApplication,
                      className: "w-full h-full"
                    }
                  ) }),
                  filePointer.name
                ] })
              },
              `word-${filePointer.sourceApplication}.${filePointer.name}`
            );
          }) }),
          /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(CommandSeparator, {})
        ] })
      ]
    }
  );
}
function Logo({
  children,
  width,
  height
}) {
  return /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("div", { className: "flex items-center justify-center", style: { width, height }, children });
}

// src/components/hovering-toolbar/text-insertion-prompt-box/hovering-insertion-prompt-box-core.tsx
var import_react_core = require("@copilotkit/react-core");

// src/components/ui/button.tsx
var React2 = __toESM(require("react"));
var import_react_slot = require("@radix-ui/react-slot");
var import_class_variance_authority = require("class-variance-authority");
var import_jsx_runtime3 = require("react/jsx-runtime");
var buttonVariants = (0, import_class_variance_authority.cva)(
  "inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        default: "bg-primary text-primary-foreground hover:bg-primary/90",
        destructive: "bg-destructive text-destructive-foreground hover:bg-destructive/90",
        outline: "border border-input bg-background hover:bg-accent hover:text-accent-foreground",
        secondary: "bg-secondary text-secondary-foreground hover:bg-secondary/80",
        ghost: "hover:bg-accent hover:text-accent-foreground",
        link: "text-primary underline-offset-4 hover:underline"
      },
      size: {
        default: "h-10 px-4 py-2",
        sm: "h-9 rounded-md px-3",
        lg: "h-11 rounded-md px-8",
        icon: "h-10 w-10"
      }
    },
    defaultVariants: {
      variant: "default",
      size: "default"
    }
  }
);
var Button = React2.forwardRef(
  (_a, ref) => {
    var _b = _a, { className, variant, size, asChild = false } = _b, props = __objRest(_b, ["className", "variant", "size", "asChild"]);
    const Comp = asChild ? import_react_slot.Slot : "button";
    return /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(Comp, __spreadValues({ className: cn(buttonVariants({ variant, size, className })), ref }, props));
  }
);
Button.displayName = "Button";

// src/components/ui/label.tsx
var React3 = __toESM(require("react"));
var LabelPrimitive = __toESM(require("@radix-ui/react-label"));
var import_class_variance_authority2 = require("class-variance-authority");
var import_jsx_runtime4 = require("react/jsx-runtime");
var labelVariants = (0, import_class_variance_authority2.cva)(
  "text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
);
var Label = React3.forwardRef((_a, ref) => {
  var _b = _a, { className } = _b, props = __objRest(_b, ["className"]);
  return /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(LabelPrimitive.Root, __spreadValues({ ref, className: cn(labelVariants(), className) }, props));
});
Label.displayName = LabelPrimitive.Root.displayName;

// src/components/hovering-toolbar/text-insertion-prompt-box/hovering-insertion-prompt-box-core.tsx
var import_react4 = require("react");

// src/lib/stream-promise-flatten.ts
function streamPromiseFlatten(promise) {
  return new ReadableStream({
    start(controller) {
      return __async(this, null, function* () {
        try {
          const stream = yield promise;
          const reader = stream.getReader();
          while (true) {
            const { done, value } = yield reader.read();
            if (done) {
              controller.close();
              return;
            }
            controller.enqueue(value);
          }
        } catch (error) {
          controller.error(error);
        }
      });
    }
  });
}

// src/components/hovering-toolbar/text-insertion-prompt-box/included-files-preview.tsx
var import_Chip = __toESM(require("@mui/material/Chip/Chip.js"));
var import_Avatar = __toESM(require("@mui/material/Avatar/Avatar.js"));
var import_jsx_runtime5 = require("react/jsx-runtime");
var IncludedFilesPreview = ({
  includedFiles,
  setIncludedFiles
}) => {
  return /* @__PURE__ */ (0, import_jsx_runtime5.jsxs)("div", { className: "flex flex-col gap-2 mt-2", children: [
    /* @__PURE__ */ (0, import_jsx_runtime5.jsx)(Label, { className: "", children: "Included context:" }),
    /* @__PURE__ */ (0, import_jsx_runtime5.jsx)("div", { className: "flex flex-wrap gap-2", children: includedFiles.map((filePointer, index) => {
      return /* @__PURE__ */ (0, import_jsx_runtime5.jsx)(
        FileChipPreview,
        {
          filePointer,
          onDelete: () => {
            setIncludedFiles((prev) => prev.filter((fp) => fp !== filePointer));
          }
        },
        `file-${filePointer.sourceApplication}.${filePointer.name}`
      );
    }) })
  ] });
};
var FileChipPreview = ({ filePointer, onDelete }) => {
  return /* @__PURE__ */ (0, import_jsx_runtime5.jsx)(
    import_Chip.default,
    {
      label: filePointer.name,
      onDelete,
      avatar: /* @__PURE__ */ (0, import_jsx_runtime5.jsx)(
        import_Avatar.default,
        {
          src: filePointer.iconImageUri,
          alt: filePointer.sourceApplication,
          sx: { backgroundColor: "transparent" }
        }
      )
    }
  );
};

// src/components/hovering-toolbar/hovering-editor-provider.tsx
var import_react3 = require("react");
var import_jsx_runtime6 = require("react/jsx-runtime");
var HoveringEditorContext = (0, import_react3.createContext)({
  isDisplayed: false,
  setIsDisplayed: () => {
  }
});
var useHoveringEditorContext = () => (0, import_react3.useContext)(HoveringEditorContext);

// src/components/hovering-toolbar/text-insertion-prompt-box/hovering-insertion-prompt-box-core.tsx
var import_jsx_runtime7 = require("react/jsx-runtime");
var HoveringInsertionPromptBoxCore = ({
  performInsertion,
  state,
  insertionOrEditingFunction,
  contextCategories
}) => {
  const { getDocumentsContext } = (0, import_react_core.useCopilotContext)();
  const [editSuggestion, setEditSuggestion] = (0, import_react4.useState)("");
  const [suggestionIsLoading, setSuggestionIsLoading] = (0, import_react4.useState)(false);
  const [adjustmentPrompt, setAdjustmentPrompt] = (0, import_react4.useState)("");
  const [generatingSuggestion, setGeneratingSuggestion] = (0, import_react4.useState)(
    null
  );
  const adjustmentTextAreaRef = (0, import_react4.useRef)(null);
  const suggestionTextAreaRef = (0, import_react4.useRef)(null);
  const [filePointers, setFilePointers] = (0, import_react4.useState)([]);
  const [suggestedFiles, setSuggestedFiles] = (0, import_react4.useState)([]);
  (0, import_react4.useEffect)(() => {
    setSuggestedFiles(getDocumentsContext(contextCategories));
  }, [contextCategories, getDocumentsContext]);
  use_autosize_textarea_default(suggestionTextAreaRef, editSuggestion || "");
  use_autosize_textarea_default(adjustmentTextAreaRef, adjustmentPrompt || "");
  (0, import_react4.useEffect)(() => {
    var _a;
    (_a = adjustmentTextAreaRef.current) == null ? void 0 : _a.focus();
  }, []);
  (0, import_react4.useEffect)(() => {
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
  const beginGeneratingAdjustment = (0, import_react4.useCallback)(() => __async(void 0, null, function* () {
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
  const AdjustmentPromptComponent = /* @__PURE__ */ (0, import_jsx_runtime7.jsxs)(import_jsx_runtime7.Fragment, { children: [
    /* @__PURE__ */ (0, import_jsx_runtime7.jsx)(Label, { className: "", children: adjustmentLabel }),
    /* @__PURE__ */ (0, import_jsx_runtime7.jsxs)("div", { className: "relative w-full flex items-center", children: [
      /* @__PURE__ */ (0, import_jsx_runtime7.jsx)(
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
      /* @__PURE__ */ (0, import_jsx_runtime7.jsx)(
        "button",
        {
          onClick: beginGeneratingAdjustment,
          className: "absolute right-2 bg-blue-500 text-white w-8 h-8 rounded-full flex items-center justify-center",
          "data-testid": "generate-button",
          children: /* @__PURE__ */ (0, import_jsx_runtime7.jsx)("i", { className: "material-icons", children: "arrow_forward" })
        }
      )
    ] })
  ] });
  const SuggestionComponent = /* @__PURE__ */ (0, import_jsx_runtime7.jsxs)(import_jsx_runtime7.Fragment, { children: [
    /* @__PURE__ */ (0, import_jsx_runtime7.jsxs)("div", { className: "flex justify-between items-end w-full", children: [
      /* @__PURE__ */ (0, import_jsx_runtime7.jsx)(Label, { className: "mt-4", children: "Suggested:" }),
      /* @__PURE__ */ (0, import_jsx_runtime7.jsx)("div", { className: "ml-auto", children: isLoading && /* @__PURE__ */ (0, import_jsx_runtime7.jsx)("div", { className: "flex justify-center items-center", children: /* @__PURE__ */ (0, import_jsx_runtime7.jsx)(
        "div",
        {
          className: "inline-block h-4 w-4 animate-spin rounded-full border-4 border-solid border-current border-r-transparent align-[-0.125em] motion-reduce:animate-[spin_1.5s_linear_infinite]",
          role: "status",
          children: /* @__PURE__ */ (0, import_jsx_runtime7.jsx)("span", { className: "!absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]", children: "Loading..." })
        }
      ) }) })
    ] }),
    /* @__PURE__ */ (0, import_jsx_runtime7.jsx)(
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
  const SubmitComponent = /* @__PURE__ */ (0, import_jsx_runtime7.jsx)("div", { className: "flex w-full gap-4 justify-start", children: /* @__PURE__ */ (0, import_jsx_runtime7.jsxs)(
    Button,
    {
      "data-testid": "insert-button",
      className: " bg-green-700 text-white",
      onClick: () => {
        performInsertion(editSuggestion);
      },
      children: [
        "Insert ",
        /* @__PURE__ */ (0, import_jsx_runtime7.jsx)("i", { className: "material-icons", children: "check" })
      ]
    }
  ) });
  const sourceSearchCandidate = adjustmentPrompt.split(" ").pop();
  const sourceSearchWord = (sourceSearchCandidate == null ? void 0 : sourceSearchCandidate.startsWith("@")) ? sourceSearchCandidate.slice(1) : void 0;
  return /* @__PURE__ */ (0, import_jsx_runtime7.jsxs)("div", { className: "w-full flex flex-col items-start relative gap-2", children: [
    AdjustmentPromptComponent,
    filePointers.length > 0 && /* @__PURE__ */ (0, import_jsx_runtime7.jsx)(IncludedFilesPreview, { includedFiles: filePointers, setIncludedFiles: setFilePointers }),
    sourceSearchWord !== void 0 && /* @__PURE__ */ (0, import_jsx_runtime7.jsx)(
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
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  HoveringInsertionPromptBoxCore
});
//# sourceMappingURL=hovering-insertion-prompt-box-core.js.map