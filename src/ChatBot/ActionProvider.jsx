import React from "react";

const ActionProvider = ({ createChatBotMessage, setState, children }) => {
  const handleMessage = () => {
    const botMessage = createChatBotMessage(
      "Hello, Welcome to student info system!"
    );

    setState((prev) => ({
      ...prev,
      messages: [...prev.messages, botMessage],
    }));
  };

  return (
    <div>
      {React.Children.map(children, (child) => {
        return React.cloneElement(child, {
          actions: {
            handleMessage,
          },
        });
      })}
    </div>
  );
};

export default ActionProvider;
