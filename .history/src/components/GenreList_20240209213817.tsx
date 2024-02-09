import useGenres from "../hooks/useGenres";
const GenreList = () => {
  const { data } = useGenres();
  return (
    <List>
      {data.map((g) => (
        <li key={g.id}>{g.name}</li>
      ))}
    </List>
  );
};

export default GenreList;
