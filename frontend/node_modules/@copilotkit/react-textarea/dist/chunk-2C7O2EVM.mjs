// src/lib/slatejs-edits/add-autocompletions.ts
import { Transforms } from "slate";
function addAutocompletionsToEditor(editor, newSuggestion, point) {
  const editorPosition = editor.selection;
  Transforms.insertNodes(
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

export {
  addAutocompletionsToEditor
};
//# sourceMappingURL=chunk-2C7O2EVM.mjs.map