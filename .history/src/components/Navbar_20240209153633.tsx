import { HStack, Image } from "@chakra-ui/react";
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
