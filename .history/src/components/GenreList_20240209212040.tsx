import React from "react";
import useData from "../hooks/useGenres";
import { Genres } from "../interfaces/gameInterfaces";
const GenreList = () => {
  const { genres } = useData<Genres>("/genres");
  return (
    <>
      {genres.map((g) => (
        <li key={g.id}>{g.name}</li>
      ))}
    </>
  );
};

export default GenreList;
