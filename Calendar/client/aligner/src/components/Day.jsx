import React from "react";

import { Flex } from "@mantine/core";
import Hour from "./Hour";

export default function Day() {
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
      <Hour />
      <Hour />
      <Hour />
      <Hour />
      <Hour />
      <Hour />
      <Hour />
      <Hour />
      <Hour />
      <Hour />
      <Hour />
      <Hour />
    </Flex>
  );
}
