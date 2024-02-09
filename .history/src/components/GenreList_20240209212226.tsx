import React from "react";
import useData from "../hooks/useData";
import { Genres } from "../interfaces/gameInterfaces";
const GenreList = () => {
  const { data } = useData<Genres>("/genres");
  return (
    <ul>
      {data.map((g) => (
        <li key={g.id}>{g.name}</li>
      ))}
    </ul>
  );
};

export default GenreList;
