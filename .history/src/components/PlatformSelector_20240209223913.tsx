import { Button, Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react";
import React from "react";
import { BsChevronDown } from "react-icons/bs";

const PlatformSelector = () => {
  return (
    <Menu>
      <MenuButton as={Button} rightIcon={<BsChevronDown />} />
      <MenuList>
        <MenuItem></MenuItem>
        <MenuItem></MenuItem>
        <MenuItem></MenuItem>
      </MenuList>
    </Menu>
  );
};

export default PlatformSelector;
