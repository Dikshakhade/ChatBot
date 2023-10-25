import React from "react";
import "./cal.css";
function Calender(props) {
  const dates = [
    {
      date: "15 MAY, MON 11AM",
      handler: props.actionProvider.handleSlot,
      id: 1,
    },
    {
      date: "18 MAY,  WED 4PM",
      handler: props.actionProvider.handleSlot,
      id: 2,
    },
    {
      date: "19 MAY, THUR 3PM",
      handler: props.actionProvider.handleSlot,
      id: 3,
    },
  ];
  const calMarkup = dates.map((date) => (
    <button className="cal-button" onClick={date.handler} key={date.id}>
      {date.date}
    </button>
  ));

  return <div className="cal-container">{calMarkup}</div>;
}

export default Calender;
