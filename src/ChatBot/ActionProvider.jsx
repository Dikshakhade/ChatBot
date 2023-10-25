import React from "react";
import { createClientMessage } from "react-chatbot-kit";
import { useSelector, useDispatch } from "react-redux";
import { ageReducer } from "../features/Profile/profileSlice";
const ActionProvider = ({ createChatBotMessage, setState, children }) => {
  const dispatch = useDispatch();
  const profile = useSelector((state) => state.profile);
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

    setState((prev) => ({
      ...prev,
      messages: [...prev.messages, botMessage],
    }));
  };

  const displayAge = (e) => {
    const clientMessage = createClientMessage(`${e.target.value}`, {
      delay: 1000,
    });

    const botMessage = createChatBotMessage("Thankyou");
    const botMessageProfile = createChatBotMessage(
      `Your name ${profile.userName} has been added to student system. You may now exit`,
      { delay: 1000 }
    );
    setState((prev) => ({
      ...prev,
      messages: [
        ...prev.messages,
        clientMessage,
        botMessage,
        botMessageProfile,
      ],
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
            // displayProfile,
          },
        });
      })}
    </div>
  );
};

export default ActionProvider;
