import { HStack, Switch, Button, Text, useColorMode } from "@chakra-ui/react";

const ColormodeSwtich = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  return (
    <HStack>
      <Switch
        // 这里的ischeck表示true就是选中了，默认就是dark和light
        isChecked={colorMode === "dark"}
        onChange={toggleColorMode}></Switch>
      {colorMode === "dark" ? <Text>Dark Mode</Text> : <Text>Light Mode</Text>}
    </HStack>
  );
};

export default ColormodeSwtich;
