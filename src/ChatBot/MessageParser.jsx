import React from "react";

const MessageParser = ({ children, actions }) => {
  console.log(actions);
  const parse = (message) => {
    if (message.includes("Enroll")) {
      actions.handleMessage();
    }
    if (message.includes("Got")) {
      actions.handleGot();
    }
  };

  return (
    <div>
      {React.Children.map(children, (child) => {
        return React.cloneElement(child, {
          parse: parse,
          actions,
        });
      })}
    </div>
  );
};

export default MessageParser;
