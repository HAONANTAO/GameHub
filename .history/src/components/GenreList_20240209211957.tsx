import React from "react";
import useGenres from "../hooks/useGenres";
import {genre} from "../"
const GenreList = () => {
  const { genres } = useData<Genre>();
  return (
    <>
      {genres.map((g) => (
        <li key={g.id}>{g.name}</li>
      ))}
    </>
  );
};

export default GenreList;
