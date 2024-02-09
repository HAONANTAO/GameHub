import { HStack, Switch, Button, Text, useColorMode } from "@chakra-ui/react";
import React from "react";

const ColormodeSwtich = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  return (
    <HStack>
      <Switch> </Switch>
      <Text>Dark Mode</Text>
    </HStack>
  );
};

export default ColormodeSwtich;
