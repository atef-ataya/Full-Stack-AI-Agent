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

// src/hooks/base-copilot-textarea-implementation/use-copilot-textarea-editor.tsx
var use_copilot_textarea_editor_exports = {};
__export(use_copilot_textarea_editor_exports, {
  useCopilotTextareaEditor: () => useCopilotTextareaEditor
});
module.exports = __toCommonJS(use_copilot_textarea_editor_exports);
var import_react = require("react");
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
  const editor = (0, import_react.useMemo)(() => {
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
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  useCopilotTextareaEditor
});
//# sourceMappingURL=use-copilot-textarea-editor.js.map