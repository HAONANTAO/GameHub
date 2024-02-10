import { HStack, Switch,  Text, useColorMode } from "@chakra-ui/react";

const ColormodeSwtich = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  return (
    <HStack>
      <Switch
        // 这里的ischeck表示true就是选中了，默认就是dark和light
        isChecked={colorMode === "dark"}
        onChange={toggleColorMode}
        colorScheme="blue"></Switch>
      {colorMode === "dark" ? (
        <Text>Dark Mode</Text>
      ) : (
        <Text whiteSpace="nowrap">Light Mode</Text>
      )}
    </HStack>
  );
};

export default ColormodeSwtich;
