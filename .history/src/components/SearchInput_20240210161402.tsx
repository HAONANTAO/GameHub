import { Input, InputGroup, InputLeftElement } from "@chakra-ui/react";


const SearchInput = () => {
  return (
    <InputGroup>
    <InputLeftElement></InputLeftElement
    ></InputGroup>
    <Input borderRadius={20} placeholder="Search Gnmes..." variant="filed" />
  );
};

export default SearchInput;
