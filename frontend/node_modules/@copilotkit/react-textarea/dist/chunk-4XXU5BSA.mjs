import {
  HoveringInsertionPromptBox
} from "./chunk-ABYCGF77.mjs";
import {
  useHoveringEditorContext
} from "./chunk-LYB4B6MK.mjs";
import {
  Menu,
  Portal
} from "./chunk-HDBI2WN5.mjs";
import {
  getFullEditorTextWithNewlines,
  getTextAroundSelection
} from "./chunk-ECR45NSD.mjs";

// src/components/hovering-toolbar/hovering-toolbar.tsx
import { useEffect, useRef, useState } from "react";
import { Transforms } from "slate";
import { useSlate, useSlateSelection } from "slate-react";
import { jsx } from "react/jsx-runtime";
var HoveringToolbar = (props) => {
  const ref = useRef(null);
  const editor = useSlate();
  const selection = useSlateSelection();
  const { isDisplayed, setIsDisplayed } = useHoveringEditorContext();
  const [isClient, setIsClient] = useState(false);
  useEffect(() => {
    setIsClient(true);
  }, []);
  useEffect(() => {
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
  useEffect(() => {
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
  return /* @__PURE__ */ jsx(Portal, { children: /* @__PURE__ */ jsx(
    Menu,
    {
      ref,
      className: "copilot-kit-textarea-css-scope " + (props.hoverMenuClassname || "p-2 absolute z-10 top-[-10000px] left-[-10000px] mt-[-6px] opacity-0 transition-opacity duration-700"),
      "data-testid": "hovering-toolbar",
      children: isDisplayed && selection && /* @__PURE__ */ jsx(
        HoveringInsertionPromptBox,
        {
          editorState: editorState(editor, selection),
          apiConfig: props.apiConfig,
          closeWindow: () => {
            setIsDisplayed(false);
          },
          performInsertion: (insertedText) => {
            Transforms.delete(editor, { at: selection });
            Transforms.insertText(editor, insertedText, {
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

export {
  HoveringToolbar
};
//# sourceMappingURL=chunk-4XXU5BSA.mjs.map