function setEventTime(futureDate, futureTime) {
  // if no time arg, set time to midnight
  futureTime
    ? futureDate.setHours(
        futureTime.getHours(),
        futureTime.getMinutes(),
        futureTime.getSeconds(),
        futureTime.getMilliseconds()
      )
    : futureDate.setHours(0, 0, 0, 0);
  return futureDate;
}

function getTimeDiff(futureDate) {
  let now = new Date();
  let elapsed = futureDate - now;
  return parseMilliseconds(elapsed);
}

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
          if (msecs >= millisecsInDay) {
            days++;
            msecs -= millisecsInDay;
          }
        }
        if (msecs >= millisecsInHour) {
          hours++;
          msecs -= millisecsInHour;
        }
      }
      if (msecs >= millisecsInMin) {
        minutes++;
        msecs -= millisecsInMin;
      }
    }
    if (msecs >= millisecsInSec) {
      seconds++;
      msecs -= 1000;
    }
  }
  return {
    days,
    hours,
    minutes,
    seconds
  };
}

// =========== FOR TESTING =======================

// let fakeEventDate = new Date(
//   "May 19, 2020 15:00:00 GMT-0700 (Pacific Daylight Time)"
// );
// // console.log(getTimeDiff(fakeEventDate));
// let fakeEventTime = new Date("May 18, 2020 23:45:00 GMT-0700");
// console.log("updatedTime: ", setEventTime(fakeEventDate)); // set to midnight
// console.log("updatedTime: ", setEventTime(fakeEventDate, fakeEventTime)); // set to given time

// console.log(parseMilliseconds(1001)); // 1 sec
// console.log(parseMilliseconds(120000)); // 2 min
// console.log(parseMilliseconds(3.48e6)); // 58 min
// console.log(parseMilliseconds(1.26e7)); // 3 hr, 30 min
// console.log(parseMilliseconds(2.998e10)); //346 days, 23 hours, 46 minutes, 40 secs
