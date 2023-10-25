import React from "react";
import { createClientMessage } from "react-chatbot-kit";

const ActionProvider = ({ createChatBotMessage, setState, children }) => {
  const handleMessage = () => {
    const botMessage = createChatBotMessage(
      "Hello, Welcome to student info system!",
      { widget: "got" }
    );
    setState((prev) => ({
      ...prev,
      messages: [...prev.messages, botMessage],
    }));
  };

  const handleGot = () => {
    const clientMessage = createClientMessage("Got It!");
    setState((prev) => ({
      ...prev,
      messages: [...prev.messages, clientMessage],
    }));
  };

  return (
    <div>
      {React.Children.map(children, (child) => {
        return React.cloneElement(child, {
          actions: {
            handleMessage,
            handleGot,
          },
        });
      })}
    </div>
  );
};

export default ActionProvider;
