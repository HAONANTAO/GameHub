import React, { useEffect, useState } from "react";

import { Button, SimpleGrid, Text } from "@chakra-ui/react";
import { Games, FetchGame } from "../interfaces/gameInterfaces.ts";

import useGames from "../hooks/useGames.ts";

const GameGrid = () => {
  const { error, game } = useGames();
  return (
    <>
      {error && <Text color={"red"}>{error}</Text>}

      <SimpleGrid>
        {game.map((g) => (
          <li key={g.id}>{g.name}</li>
        ))}
      </Simp>

      {/* <Button isLoading colorScheme="blue"></Button> */}
    </>
  );
};

export default GameGrid;
