import { createChatBotMessage } from "react-chatbot-kit";
import Options from "./Options";
import Got from "./Got";
const config = {
  initialMessages: [
    createChatBotMessage("Enter into Student Info System", {
      widget: "options",
    }),
  ],
  widgets: [
    {
      widgetName: "options",
      widgetFunc: (props) => <Options {...props} />,
    },
    {
      widgetName: "got",
      widgetFunc: (props) => <Got {...props} />,
    },
  ],
};

export default config;
