// src/hooks/misc/use-autosize-textarea.tsx
import { useEffect } from "react";
var useAutosizeTextArea = (textAreaRef, value) => {
  useEffect(() => {
    if (textAreaRef.current !== null) {
      textAreaRef.current.style.height = "0px";
      const scrollHeight = textAreaRef.current.scrollHeight;
      textAreaRef.current.style.height = scrollHeight + "px";
    }
  }, [textAreaRef, value]);
};
var use_autosize_textarea_default = useAutosizeTextArea;

export {
  use_autosize_textarea_default
};
//# sourceMappingURL=chunk-3PQ7GSFE.mjs.map