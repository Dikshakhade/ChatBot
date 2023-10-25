import "./App.css";
import Chatbot from "react-chatbot-kit";
import "react-chatbot-kit/build/main.css";
import config from "./ChatBot/config";
import MessageParser from "./ChatBot/MessageParser";
import ActionProvider from "./ChatBot/ActionProvider";
function App() {
  return (
    <div className="App">
      <Chatbot
        config={config}
        messageParser={MessageParser}
        actionProvider={ActionProvider}
      />
    </div>
  );
}

export default App;
