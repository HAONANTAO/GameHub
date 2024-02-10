import { Input, InputGroup, InputLeftElement } from "@chakra-ui/react";
import { useRef } from "react";
import { BsSearch } from "react-icons/bs";

const SearchInput = () => {
  const ref = useRef<HTMLInputElement>(null);
  return (
    <form style={{w}}
      onSubmit={(event) => {
        event.preventDefault();
        if (ref.current) console.log(ref.current.value);
      }}>
      <InputGroup>
        <InputLeftElement children={<BsSearch></BsSearch>}></InputLeftElement>
        <Input
          ref={ref}
          borderRadius={20}
          placeholder="Search Games..."
          variant="filed"
        />
      </InputGroup>
    </form>
  );
};

export default SearchInput;
