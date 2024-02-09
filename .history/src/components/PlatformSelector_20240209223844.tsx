import { Button, Menu, MenuButton, MenuList } from "@chakra-ui/react";
import React from "react";
import { BsChevronDown } from "react-icons/bs";

const PlatformSelector = () => {
  return <Menu>
    <MenuButton as={Button} rightIcon={<BsChevronDown/>}
    <MenuList></MenuList>
  </Menu>;
};

export default PlatformSelector;
