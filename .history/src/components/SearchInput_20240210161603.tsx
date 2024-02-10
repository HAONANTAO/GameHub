import { Input, InputGroup, InputLeftElement } from "@chakra-ui/react";
import { BsSearch } from "react-icons/bs";

const SearchInput = () => {
  return (
    <form onSubmit={={(event)=}}>
     
      <InputGroup>
        <InputLeftElement children={<BsSearch></BsSearch>}></InputLeftElement>
        <Input
          borderRadius={20}
          placeholder="Search Games..."
          variant="filed"
        />
      </InputGroup>
    </form>
  );
};

export default SearchInput;
