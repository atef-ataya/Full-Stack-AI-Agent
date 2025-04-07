import {
  replaceEditorText
} from "./chunk-5UNJXFUO.mjs";
import {
  getFullEditorTextWithNewlines
} from "./chunk-ECR45NSD.mjs";

// src/hooks/base-copilot-textarea-implementation/use-populate-copilot-textarea-ref.ts
import React from "react";
import { ReactEditor } from "slate-react";
function usePopulateCopilotTextareaRef(editor, ref) {
  React.useImperativeHandle(ref, () => {
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
        ReactEditor.focus(this.editor);
      }
      blur() {
        ReactEditor.blur(this.editor);
      }
      get value() {
        return getFullEditorTextWithNewlines(this.editor);
      }
      set value(value) {
        replaceEditorText(this.editor, value);
      }
    }
    const editorHtmlElement = ReactEditor.toDOMNode(editor, editor);
    const customMethods = new CustomMethods(editor);
    const combined = new Combined(customMethods, editorHtmlElement);
    return new Proxy(combined, handler);
  }, [editor]);
}

export {
  usePopulateCopilotTextareaRef
};
//# sourceMappingURL=chunk-QJNFNPWH.mjs.map