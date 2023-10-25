import React from "react";
import "./option.css";
function Got(props) {
  return (
    <div className="learning-options-container">
      <button
        className="learning-option-button"
        onClick={props.actionProvider.handleGot}
      >
        Got It!
      </button>
    </div>
  );
}

export default Got;
