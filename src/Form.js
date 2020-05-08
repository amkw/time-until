import React, { useState } from "react";

const Form = () => {
  const [eventName, setEventName] = useState("");
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
        <label>
          Date:
          <input />
        </label>
        <label>
          Time (optional):
          <input />
        </label>
        <button>Start</button>
      </form>
    </div>
  );
};
export default Form;
