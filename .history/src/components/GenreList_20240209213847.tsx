import { HStack, List, ListItem } from "@chakra-ui/react";
import useGenres from "../hooks/useGenres";
const GenreList = () => {
  const { data } = useGenres();
  return (
    <List>
      {data.map((g) => (
        <ListItem key={g.id}>
          <HStack>{g.name}</HStack>
        </ListItem>
      ))}
    </List>
  );
};

export default GenreList;
