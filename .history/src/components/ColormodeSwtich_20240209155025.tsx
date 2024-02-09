import { HStack, Switch, Button, Text, useColorMode } from "@chakra-ui/react";
import React from "react";

const ColormodeSwtich = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  return (
    <HStack>
      <Button onClick={toggleColorMode}>
        Toggle {colorMode === "light" ? "Dark" : "Light"}
      </Button>
      <Text>Dark Mode</Text>
    </HStack>
  );
};

export default ColormodeSwtich;
