import React, { useState, useEffect } from "react";
import getTimeDiff from "./utils";

const Timer = props => {
  const [eventName, eventDate, eventTime] = props.data;

  const [days, updateDays] = useState(getTimeDiff(eventDate, eventTime).days);
  const [hours, updateHours] = useState(
    getTimeDiff(eventDate, eventTime).hours
  );
  const [minutes, updateMinutes] = useState(
    getTimeDiff(eventDate, eventTime).minutes
  );
  const [seconds, updateSeconds] = useState(
    getTimeDiff(eventDate, eventTime).seconds
  );

  useEffect(() => {
    const interval = setInterval(() => {
      const { days, hours, minutes, seconds } = getTimeDiff(
        eventDate,
        eventTime
      );
      updateDays(days);
      updateHours(hours);
      updateMinutes(minutes);
      updateSeconds(seconds);
      // console.log(days, hours, minutes, seconds);
      // console.log(outerSecs.current);
    }, 1000);
    return () => clearInterval(interval);
  }, [eventDate, eventTime]);

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
