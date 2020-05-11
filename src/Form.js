import React, { useState } from "react";
import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";

const Form = () => {
  const [eventName, setEventName] = useState("");
  const [eventDate, setEventDate] = useState(new Date());
  return (
    <div>
      <form>
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
          <input />
        </label>
        <button>Start</button>
      </form>
    </div>
  );
};
export default Form;
