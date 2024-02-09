import { Button, Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react";

import { BsChevronDown } from "react-icons/bs";
import usePlatforms from "../hooks/usePlatforms";

const PlatformSelector = () => {
  const {data} = usePlatforms();
  return (
    <Menu>
      <MenuButton as={Button} rightIcon={<BsChevronDown />} />
      <MenuList>
        {data.map((plat) => (
          <MenuItem>{plat.name</MenuItem>
        ))}

        <MenuItem>2</MenuItem>
        <MenuItem>3</MenuItem>
      </MenuList>
    </Menu>
  );
};

export default PlatformSelector;
