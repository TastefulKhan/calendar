import React from "react";
import { Flex } from "@mantine/core";
import { UnstyledButton, Avatar } from "@mantine/core";

export default function Day(props) {
  const { dayName, hourStatus, schedule, onClickHour, dayOfTheWeek } = props;
  // console.log(dayName, hourStatus, schedule);
  return (
    <Flex
      mih={50}
      bg="rgba(0, 0, 0, .3)"
      gap="xs"
      justify="center"
      align="center"
      direction="column"
      wrap="nowrap"
    >
      <UnstyledButton>
        <Avatar size={40} color="blue">
          {dayName}
        </Avatar>
      </UnstyledButton>
      {hourStatus.map((h, i) => (
        <Hour
          key={`${h}${i}`}
          status={h}
          onClickHour={onClickHour}
          hourOfTheDay={i}
          dayOfTheWeek={dayOfTheWeek}
        />
      ))}
    </Flex>
  );
}

function Hour(props) {
  const { status, onClickHour, hourOfTheDay, dayOfTheWeek } = props;
  // console.log(status);
  // return day and hour
  return (
    <UnstyledButton onClick={() => onClickHour(hourOfTheDay, dayOfTheWeek)}>
      {status}
    </UnstyledButton>
  );
}
