import { HStack, Image, Text } from "@chakra-ui/react";
//first import as jsObject
import logo from "../assets/logo.webp";
import ColormodeSwtich from "./ColormodeSwtich";
import SearchInput from "./SearchInput";
const Navbar = () => {
  return (
    <>
      <HStack padding={"10px"}>
        <Image src={logo} boxSize={"60px"}></Image>
        <SearchInput></SearchInput>
        <ColormodeSwtich></ColormodeSwtich>
      </HStack>
    </>
  );
};

export default Navbar;
