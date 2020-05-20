import React from "react";
import getTimeDiff from "./utils";

const Timer = props => {
  const [eventName, eventDate, eventTime] = props.data;
  const { days, hours, minutes, seconds } = getTimeDiff(eventDate, eventTime);

  return (
    <div>
      <h2>{eventName}</h2>
      <h2>{`${days} days,
            ${hours} hours,
            ${minutes} minutes,
            ${seconds} seconds`}</h2>
    </div>
  );
};

export default Timer;
