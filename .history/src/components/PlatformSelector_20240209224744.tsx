import { Button, Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react";

import { BsChevronDown } from "react-icons/bs";
import usePlatforms from "../hooks/usePlatforms";
import { Platform } from "../interfaces/gameInterfaces";
interface Props {
  onSelectedPlatform: (platform: Platform) => void;
}
const PlatformSelector = ({ onSelectedPlatform }: Props) => {
  const { data, error } = usePlatforms();
  if (error) return null;
  return (
    <Menu>
      <MenuButton as={Button} rightIcon={<BsChevronDown />} />
      <MenuList>
        {data.map((plat) => (
          <MenuItem onClick={onSelectedPlatform} key={plat.id}>
            {plat.name}
          </MenuItem>
        ))}
      </MenuList>
    </Menu>
  );
};

export default PlatformSelector;
