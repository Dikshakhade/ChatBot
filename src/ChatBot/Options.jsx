import React from "react";
import "./option.css";
function Options(props) {
  const options = [
    { text: "Enroll Now", handler: props.actionProvider.handleMessage, id: 1 },
  ];

  const optionsMarkup = options.map((option) => (
    <button
      className="learning-option-button"
      onClick={option.handler}
      key={option.id}
    >
      {option.text}
    </button>
  ));

  return <div className="learning-options-container">{optionsMarkup}</div>;
}

export default Options;
