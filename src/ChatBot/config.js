import { createChatBotMessage } from "react-chatbot-kit";
import Options from "./Options";
import Calender from "../ChatBot/Calender/Calender";
import Got from "./Got";
import Age from "./Age/Age";
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
    {
      widgetName: "date",
      widgetFunc: (props) => <Calender {...props} />,
    },
    {
      widgetName: "age",
      widgetFunc: (props) => <Age {...props} />,
    },
  ],
};

export default config;
