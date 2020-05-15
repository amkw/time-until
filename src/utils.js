// function getTimeDiff(futureDate, futureTime) {
//   let start = new Date();
//   console.table({
//     start: String(start),
//     event: String(futureDate),
//     days: "4",
//     hours: "3",
//     minutes: "2",
//     seconds: "1"
//   });
// }

function parseMilliseconds(msecs) {
  let days = 0,
    hours = 0,
    minutes = 0,
    seconds = 0;
  const millisecsInSecs = 1000;
  // const secsInMin = 60;
  // const minsInHour = 60;
  // const hoursInDay = 24;

  while (msecs > millisecsInSecs) {
    Math.floor(msecs / 1000);
    seconds++;
    console.log("in while loop");
  }
  return {
    days,
    hours,
    minutes,
    seconds
  };
}

// let fakeEventDate = new Date("November 15, 2020 23:00:00");
// getTimeDiff(fakeEventDate);

console.log(parseMilliseconds(1001));

// TODO investigate cases: daylight savings, leap years, etc.
// TODO Make work over time zones
