import { HStack, Image} from "@chakra-ui/react";
//first import as jsObject
import logo from "../assets/logo.webp";
import ColormodeSwtich from "./ColormodeSwitch";
import SearchInput from "./SearchInput";

interface Props {
  onSearch: (searchText: string) => void;
}
const Navbar = ({ onSearch }: Props) => {
  return (
    <>
      <HStack padding={"10px"}>
        <Image src={logo} boxSize={"60px"}></Image>
        <SearchInput onSearch={onSearch}></SearchInput>
        <ColormodeSwtich></ColormodeSwtich>
      </HStack>
    </>
  );
};

export default Navbar;
