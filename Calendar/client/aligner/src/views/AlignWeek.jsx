import React, { useState, useEffect } from "react";

import Week from "../components/Week";
const weekNames = ["Sun", "Mon", "Tue", "Wed", "Thur", "Fri", "Sat"];
function AlignWeek() {
  const [schedule, setSchedule] = useState([
    { name: weekNames[0], hourStatus: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] },
    { name: weekNames[1], hourStatus: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] },
    { name: weekNames[2], hourStatus: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] },
    { name: weekNames[3], hourStatus: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] },
    { name: weekNames[4], hourStatus: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] },
    { name: weekNames[5], hourStatus: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] },
    { name: weekNames[6], hourStatus: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] },
  ]);

  function onClickHour(hourOfTheDay, dayOfTheWeek) {
    setSchedule(
      schedule.map((day) => {
        if (day.name === weekNames[dayOfTheWeek]) {
          if (day.hourStatus[hourOfTheDay] === 0) {
            day.hourStatus[hourOfTheDay] = 1;
          } else {
            day.hourStatus[hourOfTheDay] = 0;
          }
        } else {
          day = day;
        }
        return day;
      })
    );
  }

  useEffect(() => {
    console.log(schedule);
  }, [schedule]);
  return (
    <Week
      schedule={schedule}
      setSchedule={setSchedule}
      onClickHour={onClickHour}
    />
  );
}
export default AlignWeek;
