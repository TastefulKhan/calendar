import React from "react";

import { Flex } from "@mantine/core";
import Day from "./Day";

export default function Week(props) {
  const { schedule, setSchedule, onClickHour } = props;
  return (
    <Flex
      mih={50}
      bg="rgba(0, 0, 0, .3)"
      gap="xs"
      justify="center"
      align="center"
      direction="row"
      wrap="nowrap"
    >
      {schedule.map((s, i) => (
        <Day
          schedule={schedule}
          key={`${s}${i}`}
          onClickHour={onClickHour}
          setSchedule={setSchedule}
          dayName={s.name}
          dayOfTheWeek={i}
          hourStatus={s.hourStatus}
        />
      ))}
    </Flex>
  );
}
