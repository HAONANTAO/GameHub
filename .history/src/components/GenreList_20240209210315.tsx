import React from "react";
import useGenres from "../hooks/useGenres";

const GenreList = () => {
  const {genres} = useGenres()
  return <div>{genres.map(g)}</div>;
};

export default GenreList;
