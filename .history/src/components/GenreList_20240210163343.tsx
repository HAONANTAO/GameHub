import {
  HStack,
  List,
  ListItem,
  Image,
  Text,
  Spinner,
  Button,
} from "@chakra-ui/react";
import useGenres from "../hooks/useGenres";
import getCroppedImageUrl from "../services/image-url";
import { Genres } from "../interfaces/gameInterfaces";

interface Props {
  onSelectedGenre: (gener: Genres) => void;
  selectedGenre: Genres | null;
}

const GenreList = ({ selectedGenre, onSelectedGenre }: Props) => {
  const { data, isLoading, error } = useGenres();
  if (error) return null;
  if (isLoading) return <Spinner></Spinner>;
  return (
    <>
    <Heading>Genres</Heading>
    <List>
      {data.map((g) => (
        <ListItem paddingY="5px" key={g.id}>
          <HStack>
            <Image
              objectFit="cover"
              boxSize="32px"
              borderRadius={8}
              src={getCroppedImageUrl(g.image_background)}></Image>
            <Button
              whiteSpace="normal"
              textAlign="left"
              fontWeight={g.id === selectedGenre?.id ? "bold" : "normal"}
              onClick={() => onSelectedGenre(g)}
              fontSize="lg"
              variant="link">
              {g.name}
            </Button>
          </HStack>
        </ListItem>
      ))}
    </List>
  );
};

export default GenreList;
