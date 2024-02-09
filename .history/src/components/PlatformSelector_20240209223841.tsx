import { Button, Menu, MenuButton } from "@chakra-ui/react";
import React from "react";
import { BsChevronDown } from "react-icons/bs";

const PlatformSelector = () => {
  return <Menu>
    <MenuButton as={Button} rightIcon={<BsChevronDown/>}
    <Menu
  </Menu>;
};

export default PlatformSelector;
