import React from "react";
import useData from "../hooks/useData";
import { Genres } from "../interfaces/gameInterfaces";
import useGenres from "../hooks/useGenres";
const GenreList = () => {
  const { data } = useGenres<Genres>("/genres");
  return (
    <ul>
      {data.map((g) => (
        <li key={g.id}>{g.name}</li>
      ))}
    </ul>
  );
};

export default GenreList;
