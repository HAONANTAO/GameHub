import React from "react";
import useData from "../hooks/useData";
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
