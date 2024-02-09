import React from "react";
import useData from "../hooks/useData";
import { Genres } from "../interfaces/gameInterfaces";
const GenreList = () => {
  const { data } = useData<Genres>("/genres");
  return (
    <>
      {data.map((g) => (
        <li key={g.id}>{g.name}</li>
      ))}
    </>
  );
};

export default GenreList;
