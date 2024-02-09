import React from "react";
import useGenres from "../hooks/useGenres";

const GenreList = () => {
  const { genres } = useGenres();
  return (
    <>
      {genres.map((g) => (
        <li key={}></li>
      ))}
    </>
  );
};

export default GenreList;
