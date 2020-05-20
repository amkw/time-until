import React, { useState } from "react";
import DatePicker from "react-datepicker";
import TimePicker from "rc-time-picker";
import Timer from "./Timer";

import moment from "moment";
// TODO what is this moment? can I do without it?

import "react-datepicker/dist/react-datepicker.css";
import "rc-time-picker/assets/index.css";

const Form = () => {
  const [eventName, setEventName] = useState("");
  const [eventDate, setEventDate] = useState(new Date());
  const [eventTime, setEventTime] = useState(new Date());
  const [timers, updateTimers] = useState([]);

  // Settings for TimePicker
  const format = "h:mm a";
  const now = moment()
    .hour(0)
    .minute(0);
  // TODO calculate now myself

  function startCountdown() {
    updateTimers(timers.concat([[eventName, eventDate, eventTime]]));
  }

  return (
    <div>
      <form
        onSubmit={e => {
          e.preventDefault();
          startCountdown();
        }}
      >
        <label htmlFor="eventName">
          Event Name:
          <input
            id="eventName"
            value={eventName}
            placeholder="e.g. New Year's Eve"
            onChange={e => setEventName(e.target.value)}
          />
        </label>
        <label htmlFor="eventDate">
          Date:
          <DatePicker
            id="eventDate"
            selected={eventDate}
            onChange={date => setEventDate(date)}
          />
        </label>
        <label htmlFor="eventTime">
          Time (optional):
          <TimePicker
            showSecond={false}
            defaultValue={now}
            className="xxx" //from imported TimePicker style sheet
            onChange={time => setEventTime(time)}
            format={format}
            use12Hours
            inputReadOnly
          />
        </label>
        <button>Start</button>
      </form>
      {timers.map((data, index) => (
        <Timer key={index} data={data} />
      ))}
    </div>
  );
};
export default Form;

// TODO move render of Timer to App, not Form
