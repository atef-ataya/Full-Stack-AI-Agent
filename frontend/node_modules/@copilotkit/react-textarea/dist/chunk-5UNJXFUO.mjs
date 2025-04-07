// src/lib/slatejs-edits/replace-text.ts
import { Editor, Transforms } from "slate";
function replaceEditorText(editor, newText) {
  Transforms.delete(editor, {
    at: {
      anchor: Editor.start(editor, []),
      focus: Editor.end(editor, [])
    }
  });
  if (newText && newText !== "") {
    Transforms.insertNodes(
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

export {
  replaceEditorText
};
//# sourceMappingURL=chunk-5UNJXFUO.mjs.map