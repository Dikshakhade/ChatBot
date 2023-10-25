import React from "react";

const MessageParser = ({ children, actions }) => {
  var letters = /^[A-Za-z]+$/;
  const parse = (message) => {
    if (message.includes("Enroll")) {
      actions.handleMessage();
    }
    if (message.includes("Got")) {
      actions.handleGot();
    }
    if (message.match(letters)) {
      actions.showAge();
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
