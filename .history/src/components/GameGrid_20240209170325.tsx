import React, { useEffect, useState } from "react";

import { Button, Text } from "@chakra-ui/react";
import { Games, FetchGame } from "../interfaces/gameInterfaces.ts";

import useGames from "../hooks/useGames.ts";

const GameGrid = () => {
  const[
  return (
    <>
      {error && <Text color={"red"}>{error}</Text>}

      <ul>
        {game.map((g) => (
          <li key={g.id}>{g.name}</li>
        ))}
      </ul>

      {/* <Button isLoading colorScheme="blue"></Button> */}
    </>
  );
};

export default GameGrid;
