import { Input, InputGroup, InputLeftElement } from "@chakra-ui/react";

const SearchInput = () => {
  return (
    <InputGroup>
      <InputLeftElement children={<BS}></InputLeftElement>
      <Input
        borderRadius={20}
        placeholder="Search Gnmes..."
        variant="filed"
      />{" "}
    </InputGroup>
  );
};

export default SearchInput;
