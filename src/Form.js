import React from "react";
import DatePicker from "react-datepicker";
import TimePicker from "rc-time-picker";

import moment from "moment";
// TODO what is this moment? can I do without it?

import "react-datepicker/dist/react-datepicker.css";
import "rc-time-picker/assets/index.css";

const Form = props => {
  // Settings for TimePicker
  const format = "h:mm a";
  const now = moment()
    .hour(0)
    .minute(0);
  // TODO calculate now myself

  // TODO fix, for no time given
  function startCountdown() {
    props.updateTimers(
      props.timers.concat([
        [props.eventName, props.eventDate, props.eventTime.toDate()]
      ])
    );
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
            value={props.eventName}
            placeholder="e.g. New Year's Eve"
            onChange={e => props.setEventName(e.target.value)}
          />
        </label>
        <label htmlFor="eventDate">
          Date:
          <DatePicker
            id="eventDate"
            selected={props.eventDate}
            onChange={date => props.setEventDate(date)}
          />
        </label>
        <label htmlFor="eventTime">
          Time (optional):
          <TimePicker
            showSecond={false}
            defaultValue={now}
            className="xxx" //from imported TimePicker style sheet
            onChange={time => props.setEventTime(time)}
            format={format}
            use12Hours
            inputReadOnly
          />
        </label>
        <button>Start</button>
      </form>
    </div>
  );
};
export default Form;
