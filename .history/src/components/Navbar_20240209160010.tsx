import { HStack, Image, Text } from "@chakra-ui/react";
//first import as jsObject
import logo from "../assets/logo.webp";
const Navbar = () => {
  return (
    <>
      {/*Hstack = horizontal stack line */}
      <HStack justifyContent={"space-between"} padding={"10px"}>
        <Image src={logo} boxSize={"60px"}></Image>
        {/* <Text>NavBar</Text> */}
      </HStack>
    </>
  );
};

export default Navbar;
