import { createChatBotMessage } from "react-chatbot-kit";
import Options from "./Options";
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
  ],
};

export default config;
