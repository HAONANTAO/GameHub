import { HStack, Image } from "@chakra-ui/react";
import logo from "../assets/logo.webp";
const Navbar = () => {
  return (
    <>
      <HStack>
        <Image src={"../assets/logo.webp"}></Image>
      </HStack>
    </>
  );
};

export default Navbar;
