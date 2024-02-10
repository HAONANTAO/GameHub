import { Input, InputGroup, InputLeftElement } from "@chakra-ui/react";
import { BsSearch } from "react-icons/bs";

const SearchInput = () => {
  return (
    <InputGroup>
      <InputLeftElement children={<BsSearch></BsSearch>}></InputLeftElement>
      <Input
        borderRadius={20}
        placeholder="Search Gnmes..."
        variant="filed"
      />{" "}
    </InputGroup>
  );
};

export default SearchInput;
