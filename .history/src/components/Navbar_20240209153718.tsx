import { HStack, Image } from "@chakra-ui/react";
//first import as js
import logo from "../assets/logo.webp";
const Navbar = () => {
  return (
    <>
      <HStack>
        <Image src={logo}></Image>
      </HStack>
    </>
  );
};

export default Navbar;
