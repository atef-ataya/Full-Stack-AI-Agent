"use strict";
var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
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
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  // If the importer is in node compatibility mode or this is not an ESM
  // file that has been converted to a CommonJS file using a Babel-
  // compatible transform (i.e. "__esModule" has not been set), then set
  // "default" to the CommonJS "module.exports" for node compatibility.
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
  mod
));
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

// src/hooks/base-copilot-textarea-implementation/use-populate-copilot-textarea-ref.ts
var use_populate_copilot_textarea_ref_exports = {};
__export(use_populate_copilot_textarea_ref_exports, {
  usePopulateCopilotTextareaRef: () => usePopulateCopilotTextareaRef
});
module.exports = __toCommonJS(use_populate_copilot_textarea_ref_exports);
var import_react = __toESM(require("react"));
var import_slate_react = require("slate-react");

// src/lib/get-text-around-cursor.ts
var import_slate = require("slate");
function getFullEditorTextWithNewlines(editor) {
  const fullDocumentRange = {
    anchor: import_slate.Editor.start(editor, []),
    focus: import_slate.Editor.end(editor, [])
  };
  return extractTextWithNewlines(editor, fullDocumentRange);
}
function extractTextWithNewlines(editor, range) {
  const voids = false;
  const [start, end] = import_slate.Range.edges(range);
  let text = "";
  let lastBlock = null;
  for (const [node, path] of import_slate.Editor.nodes(editor, {
    at: range,
    match: import_slate.Text.isText,
    voids
  })) {
    let t = node.text;
    const [block] = import_slate.Editor.above(editor, {
      at: path,
      match: (n) => import_slate.Element.isElement(n) && n.type === "paragraph"
    }) || [null];
    if (lastBlock !== block && block) {
      if (lastBlock) {
        text += "\n";
      }
      lastBlock = block;
    }
    if (import_slate.Path.equals(path, end.path)) {
      t = t.slice(0, end.offset);
    }
    if (import_slate.Path.equals(path, start.path)) {
      t = t.slice(start.offset);
    }
    text += t;
  }
  return text;
}

// src/lib/slatejs-edits/replace-text.ts
var import_slate2 = require("slate");
function replaceEditorText(editor, newText) {
  import_slate2.Transforms.delete(editor, {
    at: {
      anchor: import_slate2.Editor.start(editor, []),
      focus: import_slate2.Editor.end(editor, [])
    }
  });
  if (newText && newText !== "") {
    import_slate2.Transforms.insertNodes(
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
  import_react.default.useImperativeHandle(ref, () => {
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
        import_slate_react.ReactEditor.focus(this.editor);
      }
      blur() {
        import_slate_react.ReactEditor.blur(this.editor);
      }
      get value() {
        return getFullEditorTextWithNewlines(this.editor);
      }
      set value(value) {
        replaceEditorText(this.editor, value);
      }
    }
    const editorHtmlElement = import_slate_react.ReactEditor.toDOMNode(editor, editor);
    const customMethods = new CustomMethods(editor);
    const combined = new Combined(customMethods, editorHtmlElement);
    return new Proxy(combined, handler);
  }, [editor]);
}
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  usePopulateCopilotTextareaRef
});
//# sourceMappingURL=use-populate-copilot-textarea-ref.js.map