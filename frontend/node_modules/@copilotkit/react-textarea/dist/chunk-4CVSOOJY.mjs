// src/types/base/base-autosuggestions-config.tsx
import { defaultCopilotContextCategories } from "@copilotkit/react-core";
var defaultShouldToggleHoveringEditorOnKeyPress = (event, shortcut) => {
  if (event.key === shortcut && event.metaKey) {
    return true;
  }
  return false;
};
var defaultShouldAcceptAutosuggestionOnKeyPress = (event) => {
  if (event.key === "Tab") {
    return true;
  }
  return false;
};
var defaultShouldAcceptAutosuggestionOnTouch = () => false;
var defaultBaseAutosuggestionsConfig = {
  debounceTime: 250,
  contextCategories: defaultCopilotContextCategories,
  disableWhenEmpty: true,
  disabled: false,
  temporarilyDisableWhenMovingCursorWithoutChangingText: true,
  shouldToggleHoveringEditorOnKeyPress: defaultShouldToggleHoveringEditorOnKeyPress,
  shouldAcceptAutosuggestionOnKeyPress: defaultShouldAcceptAutosuggestionOnKeyPress,
  shouldAcceptAutosuggestionOnTouch: defaultShouldAcceptAutosuggestionOnTouch
};

export {
  defaultBaseAutosuggestionsConfig
};
//# sourceMappingURL=chunk-4CVSOOJY.mjs.map