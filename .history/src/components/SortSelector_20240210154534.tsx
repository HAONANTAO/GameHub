import { Button, Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react";
import React from "react";

const SortSelector = () => {
  return (
    <Menu>
      <MenuButton as={Button} rightIcon={<BsChevronDown />}>
        Order by: Relevance
      </MenuButton>
      <MenuList>
       <MenuItem></MenuItem>
      
      </MenuList>
    </Menu>
  );
};

export default SortSelector;
