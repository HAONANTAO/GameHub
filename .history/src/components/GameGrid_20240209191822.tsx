import React, { useEffect, useState } from "react";

import { Button, SimpleGrid, Text } from "@chakra-ui/react";
import { Games, FetchGame } from "../interfaces/gameInterfaces.ts";

import useGames from "../hooks/useGames.ts";

const GameGrid = () => {
  const { error, game } = useGames();
  return (
    <>
      {error && <Text color={"red"}>{error}</Text>}

      <SimpleGrid columns={3} spacing={10}>
        {game.map((g) => (
          <GameCard key={g.id}>{g.name}</GameCard>
        ))}
      </SimpleGrid>

      {/* <Button isLoading colorScheme="blue"></Button> */}
    </>
  );
};

export default GameGrid;
