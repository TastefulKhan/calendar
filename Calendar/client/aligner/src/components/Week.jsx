import React from "react";

import { Flex } from "@mantine/core";
import Day from "./Day";

export default function Week() {
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
      <Day />
      <Day />
      <Day />
      <Day />
      <Day />
      <Day />
      <Day />
    </Flex>
  );
}
