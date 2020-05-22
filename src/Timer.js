import React, { useState, useEffect } from "react";
import getTimeDiff from "./utils";

const Timer = props => {
  const [eventName, eventDate, eventTime] = props.data;
  const [displayLabel, setDisplayLabel] = useState(
    getTimeDiff(eventDate, eventTime)
  );

  useEffect(() => {
    const interval = setInterval(() => {
      setDisplayLabel(getTimeDiff(eventDate, eventTime));
    }, 1000);
    return () => clearInterval(interval);
  }, [eventDate, eventTime]);

  return (
    <div>
      <h2>{eventName}</h2>
      <h2>{displayLabel}</h2>
    </div>
  );
};

export default Timer;
