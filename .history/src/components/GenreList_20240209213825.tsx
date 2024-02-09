import { List } from "@chakra-ui/react";
import useGenres from "../hooks/useGenres";
const GenreList = () => {
  const { data } = useGenres();
  return (
    <List>
      {data.map((g) => (
        <Lis key={g.id}>{g.name}</Lis>
      ))}
    </List>
  );
};

export default GenreList;
