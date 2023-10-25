import "./App.css";
import Chatbot from "react-chatbot-kit";
import "react-chatbot-kit/build/main.css";
import config from "./ChatBot/config";
import MessageParser from "./ChatBot/MessageParser";
import ActionProvider from "./ChatBot/ActionProvider";
import { Provider } from "react-redux";
import store from "./app/store";
function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <Chatbot
          config={config}
          messageParser={MessageParser}
          actionProvider={ActionProvider}
        />
      </Provider>
    </div>
  );
}

export default App;
