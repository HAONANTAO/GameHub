import { HStack, List, ListItem, Image } from "@chakra-ui/react";
import useGenres from "../hooks/useGenres";
import getCroppedImageUrl from "../services/image-url";
const GenreList = () => {
  const { data } = useGenres();
  return (
    <List>
      {data.map((g) => (
        <ListItem key={g.id}>
          <HStack>
            <Image box-size="32px" borderRadius={8}
            src={getCroppedImageUrl}></Image>
          </HStack>
        </ListItem>
      ))}
    </List>
  );
};

export default GenreList;
