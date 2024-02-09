import { HStack, List, ListItem, Image, Text, Spinner } from "@chakra-ui/react";
import useGenres from "../hooks/useGenres";
import getCroppedImageUrl from "../services/image-url";
const GenreList = () => {
  const { data, isLoading } = useGenres();
  if (isLoading) return <Spinner></Spinner>;
  return (
    <List>
      {data.map((g) => (
        <ListItem fontSize="lg" paddingY="5px" key={g.id}>
          <HStack>
            <Image
              boxSize="32px"
              borderRadius={8}
              src={getCroppedImageUrl(g.image_background)}></Image>
            <Text>{g.name}</Text>
          </HStack>
        </ListItem>
      ))}
    </List>
  );
};

export default GenreList;
