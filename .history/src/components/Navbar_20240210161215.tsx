import { HStack, Image, Text } from "@chakra-ui/react";
//first import as jsObject
import logo from "../assets/logo.webp";
import ColormodeSwtich from "./ColormodeSwtich";
import SearchInput from "./SearchInput";
const Navbar = () => {o
    <>
      {/*Hstack = horizontal stack line */}
      <HStack justifyContent={"space-between"} padding={"10px"}>
        <Image src={logo} boxSize={"60px"}></Image>
        <SearchInput></SearchInput>
        {/* <Text>NavBar</Text> */} <ColormodeSwtich></ColormodeSwtich>
      </HStack>
    </>
  );
};

export default Navbar;
