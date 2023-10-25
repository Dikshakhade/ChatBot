import React from "react";
import "./option.css";
function Options(props) {
  console.log(props);
  const options = [
    { text: "Enroll Now", handler: () => props.actionProvider.handleMessage },
  ];

  const optionsMarkup = options.map((option) => (
    <button className="learning-option-button" onClick={option.handler}>
      {option.text}
    </button>
  ));

  return <div className="learning-options-container">{optionsMarkup}</div>;
}

export default Options;
