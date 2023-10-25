import React from "react";
import { useDispatch } from "react-redux";
import { nameReducer, ageReducer } from "../features/Profile/profileSlice";
const MessageParser = ({ children, actions }) => {
  const dispatch = useDispatch();
  var letters = /^[A-Za-z]+$/;
  const parse = (message) => {
    if (message.includes("Enroll")) {
      actions.handleMessage();
    }
    if (message.includes("Got")) {
      actions.handleGot();
    }
    if (message.match(letters)) {
      dispatch(nameReducer(message));
      actions.showAge();
    }
    if (!isNaN(message)) {
      dispatch(ageReducer(message));
      actions.displayAge();
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
