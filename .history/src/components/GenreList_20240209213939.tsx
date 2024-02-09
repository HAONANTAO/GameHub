import { HStack, List, ListItem, Image } from "@chakra-ui/react";
import useGenres from "../hooks/useGenres";
const GenreList = () => {
  const { data } = useGenres();
  return (
    <List>
      {data.map((g) => (
        <ListItem key={g.id}>
          <HStack>
            <Image box-size="32px" borderRadius={}></Image>
          </HStack>
        </ListItem>
      ))}
    </List>
  );
};

export default GenreList;
