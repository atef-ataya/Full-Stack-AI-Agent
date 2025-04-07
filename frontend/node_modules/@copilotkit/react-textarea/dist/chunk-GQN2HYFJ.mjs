// src/lib/slatejs-edits/clear-autocompletions.ts
import { Element, Node, Transforms } from "slate";
function clearAutocompletionsFromEditor(editor) {
  const paths = [];
  for (const [node, path] of Node.nodes(editor)) {
    if (Element.isElement(node) && node.type === "suggestion") {
      paths.push(path);
    }
  }
  for (const path of paths) {
    try {
      Transforms.removeNodes(editor, { at: path });
    } catch (e) {
      console.log("CopilotTextarea.clearAutocompletionsFromEditor: error removing node", e);
    }
  }
}

export {
  clearAutocompletionsFromEditor
};
//# sourceMappingURL=chunk-GQN2HYFJ.mjs.map