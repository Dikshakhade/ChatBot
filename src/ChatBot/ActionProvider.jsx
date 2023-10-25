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

  const handleGot = (e) => {
    const clientMessage = createClientMessage(`${e.target.innerText}`);
    const botMessage = createChatBotMessage("Pick Slot", { widget: "date" });
    setState((prev) => ({
      ...prev,
      messages: [...prev.messages, clientMessage, botMessage],
    }));
  };

  const handleSlot = (e) => {
    const clientMessage = createClientMessage(`${e.target.innerText}`);
    const botMessage = createChatBotMessage("Enter your Name");
    setState((prev) => ({
      ...prev,
      messages: [...prev.messages, clientMessage, botMessage],
    }));
  };
  const showAge = (e) => {
    const botMessage = createChatBotMessage("Enter your Age", {
      widget: "age",
    });
    console.log(e);
    setState((prev) => ({
      ...prev,
      messages: [...prev.messages, botMessage],
    }));
  };
  const displayAge = (e) => {
    const clientMessage = createClientMessage(`${e.target.value}`);
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
            handleSlot,
            showAge,
            displayAge,
          },
        });
      })}
    </div>
  );
};

export default ActionProvider;
