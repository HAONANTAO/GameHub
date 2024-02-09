import React from "react";
import useGenres from "../hooks/useGenres";

const GenreList = () => {
  const { genres } = useData<Gnere();
  return (
    <>
      {genres.map((g) => (
        <li key={g.id}>{g.name}</li>
      ))}
    </>
  );
};

export default GenreList;
