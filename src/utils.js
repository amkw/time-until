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
  const millisecsInSec = 1000;
  const millisecsInMin = millisecsInSec * 60;
  const millisecsInHour = millisecsInMin * 60;
  const millisecsInDay = millisecsInHour * 24;

  while (msecs >= millisecsInSec) {
    while (msecs >= millisecsInMin) {
      while (msecs >= millisecsInHour) {
        while (msecs >= millisecsInDay) {
          days++;
          msecs -= millisecsInDay;
        }
        hours++;
        msecs -= millisecsInHour;
      }
      minutes++;
      msecs -= millisecsInMin;
    }
    if (msecs >= millisecsInSec) {
      seconds++;
    }
    msecs -= 1000;
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

// console.log(parseMilliseconds(1001)); // 1 sec
// console.log(parseMilliseconds(120000)); // 2 min
// console.log(parseMilliseconds(3.48e6)); // 58 min
// console.log(parseMilliseconds(1.26e7)); // 3 hr, 30 min
// console.log(parseMilliseconds(2.998e10)); //346 days, 23 hours, 46 minutes, 40 secs
