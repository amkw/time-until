import React, { useState } from "react";
import { render } from "react-dom";
import Form from "./Form";
import Timer from "./Timer";

const App = () => {
  const [eventName, setEventName] = useState("");
  const [eventDate, setEventDate] = useState(new Date());
  const [eventTime, setEventTime] = useState(new Date());
  const [timers, updateTimers] = useState([]);

  return (
    <div>
      <h1>Time Until . . . </h1>
      <Form
        eventName={eventName}
        setEventName={setEventName}
        eventDate={eventDate}
        setEventDate={setEventDate}
        eventTime={eventTime}
        setEventTime={setEventTime}
        timers={timers}
        updateTimers={updateTimers}
      />
      {timers.map((data, index) => (
        <Timer key={index} data={data} />
      ))}
    </div>
  );
};

render(<App />, document.getElementById("root"));
