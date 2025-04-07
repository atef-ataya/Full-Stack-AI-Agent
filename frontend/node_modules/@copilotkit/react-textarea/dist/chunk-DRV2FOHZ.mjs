import {
  defaultShouldSave,
  withPartialHistory
} from "./chunk-4NHVQZ67.mjs";

// src/hooks/base-copilot-textarea-implementation/use-copilot-textarea-editor.tsx
import { useMemo } from "react";
import { createEditor, Element } from "slate";
import { withReact } from "slate-react";
var shouldSave = (op, prev) => {
  const excludedNodeType = "suggestion";
  if (op.type === "insert_node" && Element.isElement(op.node) && op.node.type === excludedNodeType) {
    return false;
  }
  if (op.type === "remove_node" && Element.isElement(op.node) && op.node.type === excludedNodeType) {
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
  const editor = useMemo(() => {
    const editor2 = withPartialHistory(withReact(createEditor()), shouldSave);
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

export {
  useCopilotTextareaEditor
};
//# sourceMappingURL=chunk-DRV2FOHZ.mjs.map