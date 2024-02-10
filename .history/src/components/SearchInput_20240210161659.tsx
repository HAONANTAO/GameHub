import { Input, InputGroup, InputLeftElement } from "@chakra-ui/react";
import { BsSearch } from "react-icons/bs";

const SearchInput = () => {
  const ref = useRef<HTMLInputElement>(null);
  return (
    <form
      onSubmit={(event) => {
        event.preventDefault();
      }}>
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
