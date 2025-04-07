// src/components/hovering-toolbar/hovering-editor-provider.tsx
import { createContext, useState, useContext } from "react";
import { jsx } from "react/jsx-runtime";
var HoveringEditorContext = createContext({
  isDisplayed: false,
  setIsDisplayed: () => {
  }
});
var HoveringEditorProvider = ({ children }) => {
  const [isDisplayed, setIsDisplayed] = useState(false);
  return /* @__PURE__ */ jsx(HoveringEditorContext.Provider, { value: { isDisplayed, setIsDisplayed }, children });
};
var useHoveringEditorContext = () => useContext(HoveringEditorContext);

export {
  HoveringEditorProvider,
  useHoveringEditorContext
};
//# sourceMappingURL=chunk-LYB4B6MK.mjs.map