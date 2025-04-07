// src/lib/editor-to-text.ts
import { Element } from "slate";
function nodeChildrenToTextComponents(editor, nodes) {
  const indeciesOfInlineElements = new Set(
    nodes.map((node, index) => {
      if (Element.isElement(node) && editor.isInline(node)) {
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
    if (Element.isElement(node)) {
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

export {
  editorToText
};
//# sourceMappingURL=chunk-T6MTDQZ7.mjs.map