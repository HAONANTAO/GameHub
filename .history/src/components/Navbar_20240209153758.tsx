import { HStack, Image } from "@chakra-ui/react";
//first import as jsObject
import logo from "../assets/logo.webp";
const Navbar = () => {
  return (
    <>
      <HStack>
        <Image src={logo} boxSize={"60px"}></Image>
        <Text
      </HStack>
    </>
  );
};

export default Navbar;
