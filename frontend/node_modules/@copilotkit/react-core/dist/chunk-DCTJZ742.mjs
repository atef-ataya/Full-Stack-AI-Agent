// src/context/copilot-messages-context.tsx
import React from "react";
var emptyCopilotContext = {
  messages: [],
  setMessages: () => []
};
var CopilotMessagesContext = React.createContext(emptyCopilotContext);
function useCopilotMessagesContext() {
  const context = React.useContext(CopilotMessagesContext);
  if (context === emptyCopilotContext) {
    throw new Error(
      "A messages consuming component was not wrapped with `<CopilotMessages> {...} </CopilotMessages>`"
    );
  }
  return context;
}

export {
  CopilotMessagesContext,
  useCopilotMessagesContext
};
//# sourceMappingURL=chunk-DCTJZ742.mjs.map