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

// src/lib/slatejs-edits/with-partial-history.ts
var with_partial_history_exports = {};
__export(with_partial_history_exports, {
  defaultShouldSave: () => defaultShouldSave,
  withPartialHistory: () => withPartialHistory
});
module.exports = __toCommonJS(with_partial_history_exports);
var import_slate = require("slate");
var import_slate_history = require("slate-history");
var withPartialHistory = (editor, shouldSave) => {
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
      save = shouldSave(op, lastOp);
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
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  defaultShouldSave,
  withPartialHistory
});
//# sourceMappingURL=with-partial-history.js.map