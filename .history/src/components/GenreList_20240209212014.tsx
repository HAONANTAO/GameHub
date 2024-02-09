import React from "react";
import useGenres from "../hooks/useGenres";
import { genre } from "../interfaces/gameInterfaces";
const GenreList = () => {
  const { genres } = useData<Genres>();
  return (
    <>
      {genres.map((g) => (
        <li key={g.id}>{g.name}</li>
      ))}
    </>
  );
};

export default GenreList;