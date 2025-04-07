"use strict";
var __create = Object.create;
var __defProp = Object.defineProperty;
var __defProps = Object.defineProperties;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropDescs = Object.getOwnPropertyDescriptors;
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
var __spreadProps = (a, b) => __defProps(a, __getOwnPropDescs(b));
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

// src/components/base-copilot-textarea/base-copilot-textarea.tsx
var base_copilot_textarea_exports = {};
__export(base_copilot_textarea_exports, {
  BaseCopilotTextarea: () => BaseCopilotTextarea
});
module.exports = __toCommonJS(base_copilot_textarea_exports);
var import_react12 = __toESM(require("react"));
var import_slate10 = require("slate");
var import_slate_react5 = require("slate-react");
var import_tailwind_merge2 = require("tailwind-merge");

// src/hooks/base-copilot-textarea-implementation/use-autosuggestions.ts
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
function cn(...inputs) {
  return (0, import_tailwind_merge.twMerge)((0, import_clsx.clsx)(inputs));
}
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

// src/hooks/base-copilot-textarea-implementation/use-copilot-textarea-editor.tsx
var import_react2 = require("react");
var import_slate2 = require("slate");
var import_slate_react = require("slate-react");

// src/lib/slatejs-edits/with-partial-history.ts
var import_slate = require("slate");
var import_slate_history = require("slate-history");
var withPartialHistory = (editor, shouldSave2) => {
  const e = editor;
  const { apply } = e;
  e.history = { undos: [], redos: [] };
  e.redo = () => {
    const { history } = e;
    const { redos } = history;
    if (redos.length > 0) {
      const batch = redos[redos.length - 1];
      if (batch.selectionBefore) {
        import_slate.Transforms.setSelection(e, batch.selectionBefore);
      }
      import_slate_history.HistoryEditor.withoutSaving(e, () => {
        import_slate.Editor.withoutNormalizing(e, () => {
          for (const op of batch.operations) {
            e.apply(op);
          }
        });
      });
      history.redos.pop();
      e.writeHistory("undos", batch);
    }
  };
  e.undo = () => {
    const { history } = e;
    const { undos } = history;
    if (undos.length > 0) {
      const batch = undos[undos.length - 1];
      import_slate_history.HistoryEditor.withoutSaving(e, () => {
        import_slate.Editor.withoutNormalizing(e, () => {
          const inverseOps = batch.operations.map(import_slate.Operation.inverse).reverse();
          for (const op of inverseOps) {
            e.apply(op);
          }
          if (batch.selectionBefore) {
            import_slate.Transforms.setSelection(e, batch.selectionBefore);
          }
        });
      });
      e.writeHistory("redos", batch);
      history.undos.pop();
    }
  };
  e.apply = (op) => {
    const { operations, history } = e;
    const { undos } = history;
    const lastBatch = undos[undos.length - 1];
    const lastOp = lastBatch && lastBatch.operations[lastBatch.operations.length - 1];
    let save = import_slate_history.HistoryEditor.isSaving(e);
    let merge = import_slate_history.HistoryEditor.isMerging(e);
    if (save == null) {
      save = shouldSave2(op, lastOp);
    }
    if (save) {
      if (merge == null) {
        if (lastBatch == null) {
          merge = false;
        } else if (operations.length !== 0) {
          merge = true;
        } else {
          merge = shouldMerge(op, lastOp);
        }
      }
      if (lastBatch && merge) {
        lastBatch.operations.push(op);
      } else {
        const batch = {
          operations: [op],
          selectionBefore: e.selection
        };
        e.writeHistory("undos", batch);
      }
      while (undos.length > 100) {
        undos.shift();
      }
      history.redos = [];
    }
    apply(op);
  };
  e.writeHistory = (stack, batch) => {
    e.history[stack].push(batch);
  };
  return e;
};
var shouldMerge = (op, prev) => {
  if (prev && op.type === "insert_text" && prev.type === "insert_text" && op.offset === prev.offset + prev.text.length && import_slate.Path.equals(op.path, prev.path)) {
    return true;
  }
  if (prev && op.type === "remove_text" && prev.type === "remove_text" && op.offset + op.text.length === prev.offset && import_slate.Path.equals(op.path, prev.path)) {
    return true;
  }
  return false;
};
var defaultShouldSave = (op, prev) => {
  if (op.type === "set_selection") {
    return false;
  }
  return true;
};

// src/hooks/base-copilot-textarea-implementation/use-copilot-textarea-editor.tsx
var shouldSave = (op, prev) => {
  const excludedNodeType = "suggestion";
  if (op.type === "insert_node" && import_slate2.Element.isElement(op.node) && op.node.type === excludedNodeType) {
    return false;
  }
  if (op.type === "remove_node" && import_slate2.Element.isElement(op.node) && op.node.type === excludedNodeType) {
    return false;
  }
  if (op.type === "set_node" && "type" in op.newProperties && op.newProperties.type === excludedNodeType) {
    return false;
  }
  if (op.type == "set_node" && "type" in op.properties && op.properties.type === excludedNodeType) {
    return false;
  }
  if (op.type === "merge_node" && "type" in op.properties && op.properties.type === excludedNodeType) {
    return false;
  }
  if (op.type === "split_node" && "type" in op.properties && op.properties.type === excludedNodeType) {
    return false;
  }
  return defaultShouldSave(op, prev);
};
function useCopilotTextareaEditor() {
  const editor = (0, import_react2.useMemo)(() => {
    const editor2 = withPartialHistory((0, import_slate_react.withReact)((0, import_slate2.createEditor)()), shouldSave);
    const { isVoid } = editor2;
    editor2.isVoid = (element) => {
      switch (element.type) {
        case "suggestion":
          return true;
        default:
          return isVoid(element);
      }
    };
    const { markableVoid } = editor2;
    editor2.markableVoid = (element) => {
      switch (element.type) {
        case "suggestion":
          return true;
        default:
          return markableVoid(element);
      }
    };
    const { isInline } = editor2;
    editor2.isInline = (element) => {
      switch (element.type) {
        case "suggestion":
          return element.inline;
        default:
          return isInline(element);
      }
    };
    return editor2;
  }, []);
  return editor;
}

// src/hooks/base-copilot-textarea-implementation/use-populate-copilot-textarea-ref.ts
var import_react3 = __toESM(require("react"));
var import_slate_react2 = require("slate-react");

// src/lib/get-text-around-cursor.ts
var import_slate3 = require("slate");
function getTextAroundCollapsedCursor(editor) {
  const { selection } = editor;
  if (!selection || !import_slate3.Range.isCollapsed(selection)) {
    return null;
  }
  const cursorPoint = selection.anchor;
  const beforeRange = {
    anchor: import_slate3.Editor.start(editor, []),
    focus: cursorPoint
  };
  const afterRange = {
    anchor: cursorPoint,
    focus: import_slate3.Editor.end(editor, [])
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
    anchor: import_slate3.Editor.start(editor, []),
    focus: wellOrderedSelection.anchor
  };
  const afterRange = {
    anchor: wellOrderedSelection.focus,
    focus: import_slate3.Editor.end(editor, [])
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
    anchor: import_slate3.Editor.start(editor, []),
    focus: import_slate3.Editor.end(editor, [])
  };
  return extractTextWithNewlines(editor, fullDocumentRange);
}
function extractTextWithNewlines(editor, range) {
  const voids = false;
  const [start, end] = import_slate3.Range.edges(range);
  let text = "";
  let lastBlock = null;
  for (const [node, path] of import_slate3.Editor.nodes(editor, {
    at: range,
    match: import_slate3.Text.isText,
    voids
  })) {
    let t = node.text;
    const [block] = import_slate3.Editor.above(editor, {
      at: path,
      match: (n) => import_slate3.Element.isElement(n) && n.type === "paragraph"
    }) || [null];
    if (lastBlock !== block && block) {
      if (lastBlock) {
        text += "\n";
      }
      lastBlock = block;
    }
    if (import_slate3.Path.equals(path, end.path)) {
      t = t.slice(0, end.offset);
    }
    if (import_slate3.Path.equals(path, start.path)) {
      t = t.slice(start.offset);
    }
    text += t;
  }
  return text;
}
function wellOrderedRange(range) {
  const { anchor, focus } = range;
  if (import_slate3.Point.isBefore(anchor, focus)) {
    return range;
  }
  return {
    anchor: focus,
    focus: anchor
  };
}

// src/lib/slatejs-edits/replace-text.ts
var import_slate4 = require("slate");
function replaceEditorText(editor, newText) {
  import_slate4.Transforms.delete(editor, {
    at: {
      anchor: import_slate4.Editor.start(editor, []),
      focus: import_slate4.Editor.end(editor, [])
    }
  });
  if (newText && newText !== "") {
    import_slate4.Transforms.insertNodes(
      editor,
      [
        {
          type: "paragraph",
          children: [{ text: newText }]
        }
      ],
      {
        at: [0]
      }
    );
  }
}

// src/hooks/base-copilot-textarea-implementation/use-populate-copilot-textarea-ref.ts
function usePopulateCopilotTextareaRef(editor, ref) {
  import_react3.default.useImperativeHandle(ref, () => {
    class Combined {
      constructor(customMethods2, editorHtmlElement2) {
        this.customMethods = customMethods2;
        this.editorHtmlElement = editorHtmlElement2;
      }
      get(target, propKey) {
        if (this.isKeyOfCustomMethods(propKey)) {
          const value = this.customMethods[propKey];
          if (typeof value === "function") {
            return value.bind(this.customMethods);
          }
          return value;
        } else if (this.isKeyOfHTMLElement(propKey)) {
          const value = this.editorHtmlElement[propKey];
          if (typeof value === "function") {
            return value.bind(this.editorHtmlElement);
          }
          return value;
        }
      }
      set(target, propKey, value) {
        if (this.isKeyOfCustomMethods(propKey)) {
          this.customMethods[propKey] = value;
        } else if (this.isKeyOfHTMLElement(propKey)) {
          this.editorHtmlElement[propKey] = value;
        } else {
          target[propKey] = value;
        }
        return true;
      }
      isKeyOfCustomMethods(key) {
        return key in this.customMethods;
      }
      isKeyOfHTMLElement(key) {
        return key in this.editorHtmlElement;
      }
    }
    const handler = {
      get(target, propKey) {
        return target.get(target, propKey);
      },
      set(target, propKey, value) {
        return target.set(target, propKey, value);
      }
    };
    class CustomMethods {
      constructor(editor2) {
        this.editor = editor2;
      }
      focus() {
        import_slate_react2.ReactEditor.focus(this.editor);
      }
      blur() {
        import_slate_react2.ReactEditor.blur(this.editor);
      }
      get value() {
        return getFullEditorTextWithNewlines(this.editor);
      }
      set value(value) {
        replaceEditorText(this.editor, value);
      }
    }
    const editorHtmlElement = import_slate_react2.ReactEditor.toDOMNode(editor, editor);
    const customMethods = new CustomMethods(editor);
    const combined = new Combined(customMethods, editorHtmlElement);
    return new Proxy(combined, handler);
  }, [editor]);
}

// src/lib/slatejs-edits/add-autocompletions.ts
var import_slate5 = require("slate");
function addAutocompletionsToEditor(editor, newSuggestion, point) {
  const editorPosition = editor.selection;
  import_slate5.Transforms.insertNodes(
    editor,
    [
      {
        type: "suggestion",
        inline: true,
        content: newSuggestion,
        children: [{ text: "" }]
      }
    ],
    {
      at: point
    }
  );
  if (editorPosition) {
    editor.selection = editorPosition;
  }
}

// src/lib/slatejs-edits/clear-autocompletions.ts
var import_slate6 = require("slate");
function clearAutocompletionsFromEditor(editor) {
  const paths = [];
  for (const [node, path] of import_slate6.Node.nodes(editor)) {
    if (import_slate6.Element.isElement(node) && node.type === "suggestion") {
      paths.push(path);
    }
  }
  for (const path of paths) {
    try {
      import_slate6.Transforms.removeNodes(editor, { at: path });
    } catch (e) {
      console.log("CopilotTextarea.clearAutocompletionsFromEditor: error removing node", e);
    }
  }
}

// src/types/base/base-autosuggestions-config.tsx
var import_react_core = require("@copilotkit/react-core");
var defaultShouldToggleHoveringEditorOnKeyPress = (event, shortcut) => {
  if (event.key === shortcut && event.metaKey) {
    return true;
  }
  return false;
};
var defaultShouldAcceptAutosuggestionOnKeyPress = (event) => {
  if (event.key === "Tab") {
    return true;
  }
  return false;
};
var defaultShouldAcceptAutosuggestionOnTouch = () => false;
var defaultBaseAutosuggestionsConfig = {
  debounceTime: 250,
  contextCategories: import_react_core.defaultCopilotContextCategories,
  disableWhenEmpty: true,
  disabled: false,
  temporarilyDisableWhenMovingCursorWithoutChangingText: true,
  shouldToggleHoveringEditorOnKeyPress: defaultShouldToggleHoveringEditorOnKeyPress,
  shouldAcceptAutosuggestionOnKeyPress: defaultShouldAcceptAutosuggestionOnKeyPress,
  shouldAcceptAutosuggestionOnTouch: defaultShouldAcceptAutosuggestionOnTouch
};

// src/components/hovering-toolbar/hovering-toolbar.tsx
var import_react9 = require("react");
var import_slate7 = require("slate");
var import_slate_react3 = require("slate-react");

// src/hooks/misc/use-autosize-textarea.tsx
var import_react4 = require("react");
var useAutosizeTextArea = (textAreaRef, value) => {
  (0, import_react4.useEffect)(() => {
    if (textAreaRef.current !== null) {
      textAreaRef.current.style.height = "0px";
      const scrollHeight = textAreaRef.current.scrollHeight;
      textAreaRef.current.style.height = scrollHeight + "px";
    }
  }, [textAreaRef, value]);
};
var use_autosize_textarea_default = useAutosizeTextArea;

// src/components/source-search-box/source-search-box.tsx
var import_react5 = require("react");

// src/components/ui/command.tsx
var React2 = __toESM(require("react"));
var import_cmdk = require("cmdk");
var import_jsx_runtime = require("react/jsx-runtime");
var Command = React2.forwardRef((_a, ref) => {
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
var CommandInput = React2.forwardRef((_a, ref) => {
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
var CommandList = React2.forwardRef((_a, ref) => {
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
var CommandEmpty = React2.forwardRef((props, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_cmdk.Command.Empty, __spreadValues({ ref, className: "py-6 text-center text-sm" }, props)));
CommandEmpty.displayName = import_cmdk.Command.Empty.displayName;
var CommandGroup = React2.forwardRef((_a, ref) => {
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
var CommandSeparator = React2.forwardRef((_a, ref) => {
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
var CommandItem = React2.forwardRef((_a, ref) => {
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
  const [selectedValue, setSelectedValue] = (0, import_react5.useState)("");
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
var import_react_core2 = require("@copilotkit/react-core");

// src/components/ui/button.tsx
var React3 = __toESM(require("react"));
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
var Button = React3.forwardRef(
  (_a, ref) => {
    var _b = _a, { className, variant, size, asChild = false } = _b, props = __objRest(_b, ["className", "variant", "size", "asChild"]);
    const Comp = asChild ? import_react_slot.Slot : "button";
    return /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(Comp, __spreadValues({ className: cn(buttonVariants({ variant, size, className })), ref }, props));
  }
);
Button.displayName = "Button";

// src/components/ui/label.tsx
var React4 = __toESM(require("react"));
var LabelPrimitive = __toESM(require("@radix-ui/react-label"));
var import_class_variance_authority2 = require("class-variance-authority");
var import_jsx_runtime4 = require("react/jsx-runtime");
var labelVariants = (0, import_class_variance_authority2.cva)(
  "text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
);
var Label = React4.forwardRef((_a, ref) => {
  var _b = _a, { className } = _b, props = __objRest(_b, ["className"]);
  return /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(LabelPrimitive.Root, __spreadValues({ ref, className: cn(labelVariants(), className) }, props));
});
Label.displayName = LabelPrimitive.Root.displayName;

// src/components/hovering-toolbar/text-insertion-prompt-box/hovering-insertion-prompt-box-core.tsx
var import_react7 = require("react");

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
var import_react6 = require("react");
var import_jsx_runtime6 = require("react/jsx-runtime");
var HoveringEditorContext = (0, import_react6.createContext)({
  isDisplayed: false,
  setIsDisplayed: () => {
  }
});
var HoveringEditorProvider = ({ children }) => {
  const [isDisplayed, setIsDisplayed] = (0, import_react6.useState)(false);
  return /* @__PURE__ */ (0, import_jsx_runtime6.jsx)(HoveringEditorContext.Provider, { value: { isDisplayed, setIsDisplayed }, children });
};
var useHoveringEditorContext = () => (0, import_react6.useContext)(HoveringEditorContext);

// src/components/hovering-toolbar/text-insertion-prompt-box/hovering-insertion-prompt-box-core.tsx
var import_jsx_runtime7 = require("react/jsx-runtime");
var HoveringInsertionPromptBoxCore = ({
  performInsertion,
  state,
  insertionOrEditingFunction,
  contextCategories
}) => {
  const { getDocumentsContext } = (0, import_react_core2.useCopilotContext)();
  const [editSuggestion, setEditSuggestion] = (0, import_react7.useState)("");
  const [suggestionIsLoading, setSuggestionIsLoading] = (0, import_react7.useState)(false);
  const [adjustmentPrompt, setAdjustmentPrompt] = (0, import_react7.useState)("");
  const [generatingSuggestion, setGeneratingSuggestion] = (0, import_react7.useState)(
    null
  );
  const adjustmentTextAreaRef = (0, import_react7.useRef)(null);
  const suggestionTextAreaRef = (0, import_react7.useRef)(null);
  const [filePointers, setFilePointers] = (0, import_react7.useState)([]);
  const [suggestedFiles, setSuggestedFiles] = (0, import_react7.useState)([]);
  (0, import_react7.useEffect)(() => {
    setSuggestedFiles(getDocumentsContext(contextCategories));
  }, [contextCategories, getDocumentsContext]);
  use_autosize_textarea_default(suggestionTextAreaRef, editSuggestion || "");
  use_autosize_textarea_default(adjustmentTextAreaRef, adjustmentPrompt || "");
  (0, import_react7.useEffect)(() => {
    var _a;
    (_a = adjustmentTextAreaRef.current) == null ? void 0 : _a.focus();
  }, []);
  (0, import_react7.useEffect)(() => {
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
  const beginGeneratingAdjustment = (0, import_react7.useCallback)(() => __async(void 0, null, function* () {
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

// src/components/hovering-toolbar/text-insertion-prompt-box/hovering-insertion-prompt-box.tsx
var import_jsx_runtime8 = require("react/jsx-runtime");
var HoveringInsertionPromptBox = (props) => {
  return /* @__PURE__ */ (0, import_jsx_runtime8.jsx)(
    "div",
    {
      className: "flex flex-col justify-center items-center space-y-4 rounded-md border shadow-lg p-4 border-gray- bg-white",
      style: { width: "35rem" },
      children: /* @__PURE__ */ (0, import_jsx_runtime8.jsx)(
        HoveringInsertionPromptBoxCore,
        {
          state: {
            editorState: props.editorState
          },
          insertionOrEditingFunction: props.apiConfig.insertionOrEditingFunction,
          performInsertion: props.performInsertion,
          contextCategories: props.contextCategories
        }
      )
    }
  );
};

// src/components/hovering-toolbar/hovering-toolbar-components.tsx
var import_css = require("@emotion/css");
var import_react8 = __toESM(require("react"));
var import_react_dom = __toESM(require("react-dom"));
var import_jsx_runtime9 = require("react/jsx-runtime");
var Button2 = import_react8.default.forwardRef(
  (_a, ref) => {
    var _b = _a, {
      className,
      active,
      reversed
    } = _b, props = __objRest(_b, [
      "className",
      "active",
      "reversed"
    ]);
    return /* @__PURE__ */ (0, import_jsx_runtime9.jsx)(
      "span",
      __spreadProps(__spreadValues({}, props), {
        ref,
        className: (0, import_css.cx)(
          className,
          import_css.css`
          cursor: pointer;
          color: ${reversed ? active ? "white" : "#aaa" : active ? "black" : "#ccc"};
        `
        )
      })
    );
  }
);
var Icon = import_react8.default.forwardRef(
  (_a, ref) => {
    var _b = _a, { className } = _b, props = __objRest(_b, ["className"]);
    return /* @__PURE__ */ (0, import_jsx_runtime9.jsx)(
      "span",
      __spreadProps(__spreadValues({}, props), {
        ref,
        className: (0, import_css.cx)(
          "material-icons",
          className,
          import_css.css`
          font-size: 18px;
          vertical-align: text-bottom;
        `
        )
      })
    );
  }
);
var Menu = import_react8.default.forwardRef(
  (_a, ref) => {
    var _b = _a, { className } = _b, props = __objRest(_b, ["className"]);
    return /* @__PURE__ */ (0, import_jsx_runtime9.jsx)(
      "div",
      __spreadProps(__spreadValues({}, props), {
        "data-testid": "menu",
        ref,
        className: (0, import_css.cx)(
          className,
          import_css.css`
            & > * {
              display: inline-block;
            }

            & > * + * {
              margin-left: 15px;
            }
          `
        )
      })
    );
  }
);
var Portal = ({ children }) => {
  return typeof document === "object" ? import_react_dom.default.createPortal(children, document.body) : null;
};
var Toolbar = import_react8.default.forwardRef(
  (_a, ref) => {
    var _b = _a, { className } = _b, props = __objRest(_b, ["className"]);
    return /* @__PURE__ */ (0, import_jsx_runtime9.jsx)(
      Menu,
      __spreadProps(__spreadValues({}, props), {
        ref,
        className: (0, import_css.cx)(
          className,
          import_css.css`
          position: relative;
          padding: 1px 18px 17px;
          margin: 0 -20px;
          border-bottom: 2px solid #eee;
          margin-bottom: 20px;
        `
        )
      })
    );
  }
);

// src/components/hovering-toolbar/hovering-toolbar.tsx
var import_jsx_runtime10 = require("react/jsx-runtime");
var HoveringToolbar = (props) => {
  const ref = (0, import_react9.useRef)(null);
  const editor = (0, import_slate_react3.useSlate)();
  const selection = (0, import_slate_react3.useSlateSelection)();
  const { isDisplayed, setIsDisplayed } = useHoveringEditorContext();
  const [isClient, setIsClient] = (0, import_react9.useState)(false);
  (0, import_react9.useEffect)(() => {
    setIsClient(true);
  }, []);
  (0, import_react9.useEffect)(() => {
    const el = ref.current;
    const { selection: selection2 } = editor;
    if (!el) {
      return;
    }
    if (!selection2) {
      el.removeAttribute("style");
      return;
    }
    const domSelection = window.getSelection();
    if (!domSelection || domSelection.rangeCount === 0) {
      return;
    }
    const domRange = domSelection.getRangeAt(0);
    const rect = domRange.getBoundingClientRect();
    if (rect.top === 0 && rect.left === 0 && rect.width === 0 && rect.height === 0) {
      return;
    }
    const minGapFromEdge = 60;
    const verticalOffsetFromCorner = 35;
    const horizontalOffsetFromCorner = 15;
    let top = rect.top + window.scrollY - el.offsetHeight + verticalOffsetFromCorner;
    if (top < minGapFromEdge) {
      top = rect.bottom + window.scrollY + minGapFromEdge;
    } else if (top + el.offsetHeight > window.innerHeight - minGapFromEdge) {
      top = rect.top + window.scrollY - el.offsetHeight - minGapFromEdge;
    }
    let left = rect.left + window.scrollX - el.offsetWidth / 2 + rect.width / 2 + horizontalOffsetFromCorner;
    if (left < minGapFromEdge) {
      left = minGapFromEdge;
    } else if (left + el.offsetWidth > window.innerWidth - minGapFromEdge) {
      left = window.innerWidth - el.offsetWidth - minGapFromEdge;
    }
    el.style.opacity = "1";
    el.style.position = "absolute";
    el.style.top = `${top}px`;
    el.style.left = `${left}px`;
  });
  (0, import_react9.useEffect)(() => {
    const handleClickOutside = (event) => {
      if (ref.current && !ref.current.contains(event.target)) {
        setIsDisplayed(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [ref, setIsDisplayed]);
  if (!isClient) {
    return null;
  }
  return /* @__PURE__ */ (0, import_jsx_runtime10.jsx)(Portal, { children: /* @__PURE__ */ (0, import_jsx_runtime10.jsx)(
    Menu,
    {
      ref,
      className: "copilot-kit-textarea-css-scope " + (props.hoverMenuClassname || "p-2 absolute z-10 top-[-10000px] left-[-10000px] mt-[-6px] opacity-0 transition-opacity duration-700"),
      "data-testid": "hovering-toolbar",
      children: isDisplayed && selection && /* @__PURE__ */ (0, import_jsx_runtime10.jsx)(
        HoveringInsertionPromptBox,
        {
          editorState: editorState(editor, selection),
          apiConfig: props.apiConfig,
          closeWindow: () => {
            setIsDisplayed(false);
          },
          performInsertion: (insertedText) => {
            import_slate7.Transforms.delete(editor, { at: selection });
            import_slate7.Transforms.insertText(editor, insertedText, {
              at: selection
            });
            setIsDisplayed(false);
          },
          contextCategories: props.contextCategories
        }
      )
    }
  ) });
};
function editorState(editor, selection) {
  const textAroundCursor = getTextAroundSelection(editor);
  if (textAroundCursor) {
    return textAroundCursor;
  }
  return {
    textBeforeCursor: getFullEditorTextWithNewlines(editor),
    textAfterCursor: "",
    selectedText: ""
  };
}

// src/components/base-copilot-textarea/render-element.tsx
var import_jsx_runtime11 = require("react/jsx-runtime");
function makeRenderElementFunction(suggestionsStyle) {
  return (props) => {
    switch (props.element.type) {
      case "paragraph":
        return /* @__PURE__ */ (0, import_jsx_runtime11.jsx)(DefaultElement, __spreadValues({}, props));
      case "suggestion":
        return /* @__PURE__ */ (0, import_jsx_runtime11.jsx)(SuggestionElement, __spreadProps(__spreadValues({}, props), { suggestionsStyle }));
    }
  };
}
var DefaultElement = (props) => {
  return /* @__PURE__ */ (0, import_jsx_runtime11.jsx)("div", __spreadProps(__spreadValues({}, props.attributes), { children: props.children }));
};
var SuggestionElement = (props) => {
  return /* @__PURE__ */ (0, import_jsx_runtime11.jsxs)(
    "span",
    __spreadProps(__spreadValues({}, props.attributes), {
      style: __spreadValues({}, props.suggestionsStyle),
      "data-testid": "suggestion",
      contentEditable: false,
      children: [
        props.children,
        props.element.type === "suggestion" && props.element.content
      ]
    })
  );
};

// src/components/base-copilot-textarea/render-placeholder.tsx
var import_jsx_runtime12 = require("react/jsx-runtime");
function makeRenderPlaceholderFunction(placeholderStyle) {
  return (props) => {
    const _a = props.attributes, { style } = _a, restAttributes = __objRest(_a, ["style"]);
    return /* @__PURE__ */ (0, import_jsx_runtime12.jsx)(
      "div",
      __spreadProps(__spreadValues({}, restAttributes), {
        style: __spreadValues(__spreadValues({}, style), placeholderStyle),
        children: props.children
      })
    );
  };
}

// src/components/base-copilot-textarea/use-add-branding-css.tsx
var import_react10 = require("react");
function useAddBrandingCss(suggestionStyleAugmented, disableBranding) {
  const cssSelector = ".copilot-textarea.with-branding";
  (0, import_react10.useEffect)(() => {
    if (disableBranding) {
      return;
    }
    const styleEl = document.createElement("style");
    styleEl.id = "dynamic-styles";
    let dynamicStyles = Object.entries(suggestionStyleAugmented).map(([key, value]) => {
      const kebabCaseKey = key.replace(/([a-z0-9]|(?=[A-Z]))([A-Z])/g, "$1-$2").toLowerCase();
      return `${kebabCaseKey}: ${value};`;
    }).join(" ");
    dynamicStyles += `font-style: normal; font-size: x-small;`;
    dynamicStyles += `content: "CopilotKit";`;
    dynamicStyles += `bottom: 6px;`;
    dynamicStyles += `right: 6px;`;
    dynamicStyles += `pointer-events: none;`;
    dynamicStyles += `font-weight: 200;`;
    dynamicStyles += `padding: 0;`;
    dynamicStyles += `margin: 0;`;
    dynamicStyles += `border: 0;`;
    dynamicStyles += `line-height: 1;`;
    dynamicStyles += `position: absolute;`;
    styleEl.innerHTML = `
      ${cssSelector}::after {
        ${dynamicStyles}
      }
    `;
    document.head.appendChild(styleEl);
    const textarea = document.querySelector(cssSelector);
    const handleScroll = () => {
      const styleEl2 = document.getElementById("dynamic-styles");
      if (styleEl2 && textarea) {
        const offsetFromBottom = -textarea.scrollTop + 6;
        const offsetFromRight = -textarea.scrollLeft + 6;
        styleEl2.innerHTML = `
          ${cssSelector}::after {
            ${dynamicStyles}
            bottom: ${offsetFromBottom}px;
            right: ${offsetFromRight}px;
          }
        `;
      }
    };
    textarea == null ? void 0 : textarea.addEventListener("scroll", handleScroll);
    return () => {
      var _a;
      (_a = document.getElementById("dynamic-styles")) == null ? void 0 : _a.remove();
      textarea == null ? void 0 : textarea.removeEventListener("scroll", handleScroll);
    };
  }, [disableBranding, suggestionStyleAugmented]);
}

// src/components/base-copilot-textarea/track-cursor-moved-since-last-text-change.tsx
var import_react11 = require("react");
var import_slate_react4 = require("slate-react");
var import_slate9 = require("slate");

// src/lib/editor-to-text.ts
var import_slate8 = require("slate");
function nodeChildrenToTextComponents(editor, nodes) {
  const indeciesOfInlineElements = new Set(
    nodes.map((node, index) => {
      if (import_slate8.Element.isElement(node) && editor.isInline(node)) {
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
    if (import_slate8.Element.isElement(node)) {
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
var import_jsx_runtime13 = require("react/jsx-runtime");
function TrackerTextEditedSinceLastCursorMovement(props) {
  const cursorState = (0, import_slate_react4.useSlateSelector)((state) => ({
    selection: state.selection,
    text: editorToText(state)
  }));
  const previousState = usePrevious(cursorState);
  (0, import_react11.useEffect)(() => {
    if (!previousState) {
      return;
    }
    if (cursorChangedWithoutTextChanged(previousState, cursorState)) {
      props.setCursorMovedSinceLastTextChange(true);
    }
  }, [props.setCursorMovedSinceLastTextChange, cursorState]);
  return /* @__PURE__ */ (0, import_jsx_runtime13.jsx)(import_jsx_runtime13.Fragment, {});
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
  return import_slate9.Range.equals(a, b);
};
function usePrevious(value) {
  const ref = (0, import_react11.useRef)();
  (0, import_react11.useEffect)(() => {
    ref.current = value;
  });
  return ref.current;
}

// src/components/base-copilot-textarea/base-copilot-textarea.tsx
var import_jsx_runtime14 = require("react/jsx-runtime");
var BaseCopilotTextarea = import_react12.default.forwardRef(
  (props, ref) => {
    return /* @__PURE__ */ (0, import_jsx_runtime14.jsx)(HoveringEditorProvider, { children: /* @__PURE__ */ (0, import_jsx_runtime14.jsx)(BaseCopilotTextareaWithHoveringContext, __spreadProps(__spreadValues({}, props), { ref })) });
  }
);
var BaseCopilotTextareaWithHoveringContext = import_react12.default.forwardRef(
  (props, ref) => {
    const autosuggestionsConfig = __spreadValues(__spreadValues({}, defaultBaseAutosuggestionsConfig), props.baseAutosuggestionsConfig);
    const valueOnInitialRender = (0, import_react12.useMemo)(() => {
      var _a2;
      return (_a2 = props.value) != null ? _a2 : "";
    }, []);
    const [lastKnownFullEditorText, setLastKnownFullEditorText] = (0, import_react12.useState)(valueOnInitialRender);
    const [cursorMovedSinceLastTextChange, setCursorMovedSinceLastTextChange] = (0, import_react12.useState)(false);
    const initialValue = (0, import_react12.useMemo)(() => {
      return [
        {
          type: "paragraph",
          children: [{ text: valueOnInitialRender }]
        }
      ];
    }, [valueOnInitialRender]);
    const editor = useCopilotTextareaEditor();
    const { isDisplayed: hoveringEditorIsDisplayed, setIsDisplayed: setHoveringEditorIsDisplayed } = useHoveringEditorContext();
    const insertText = (0, import_react12.useCallback)(
      (autosuggestion) => {
        import_slate10.Editor.insertText(editor, autosuggestion.text, {
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
    const onKeyDownHandlerForHoveringEditor = (0, import_react12.useCallback)(
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
    (0, import_react12.useEffect)(() => {
      clearAutocompletionsFromEditor(editor);
      if (currentAutocompleteSuggestion) {
        addAutocompletionsToEditor(
          editor,
          currentAutocompleteSuggestion.text,
          currentAutocompleteSuggestion.point
        );
      }
    }, [currentAutocompleteSuggestion]);
    const suggestionStyleAugmented = (0, import_react12.useMemo)(() => {
      return __spreadValues({
        fontStyle: "italic",
        color: "gray"
      }, props.suggestionsStyle);
    }, [props.suggestionsStyle]);
    const renderElementMemoized = (0, import_react12.useMemo)(() => {
      return makeRenderElementFunction(suggestionStyleAugmented);
    }, [suggestionStyleAugmented]);
    const renderPlaceholderMemoized = (0, import_react12.useMemo)(() => {
      const placeholderStyleSlatejsOverrides = {
        top: void 0
      };
      const placeholderStyleAugmented = __spreadValues(__spreadValues({}, placeholderStyleSlatejsOverrides), props.placeholderStyle);
      return makeRenderPlaceholderFunction(placeholderStyleAugmented);
    }, [props.placeholderStyle]);
    (0, import_react12.useEffect)(() => {
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
      const mergedClassName = (0, import_tailwind_merge2.twMerge)(defaultTailwindClassName, className != null ? className : "");
      return `${baseClassName} ${brandingClass} ${mergedClassName}`;
    })();
    return /* @__PURE__ */ (0, import_jsx_runtime14.jsxs)(
      import_slate_react5.Slate,
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
          /* @__PURE__ */ (0, import_jsx_runtime14.jsx)(
            TrackerTextEditedSinceLastCursorMovement,
            {
              setCursorMovedSinceLastTextChange
            }
          ),
          /* @__PURE__ */ (0, import_jsx_runtime14.jsx)(
            HoveringToolbar,
            {
              apiConfig: autosuggestionsConfig.apiConfig,
              contextCategories: autosuggestionsConfig.contextCategories,
              hoverMenuClassname
            }
          ),
          /* @__PURE__ */ (0, import_jsx_runtime14.jsx)(
            import_slate_react5.Editable,
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
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  BaseCopilotTextarea
});
//# sourceMappingURL=base-copilot-textarea.js.map