import React, { useEffect, useState } from "react";
import apiClient from "../services/apiClient.ts";
import { Button, Text } from "@chakra-ui/react";
import { Games, FetchGame } from "../interfaces/gameInterfaces.ts";

import useGames from "../"
const GameGrid = () => {
  const [game, setGame] = useState<Games[]>([]);
  const [error, setError] = useState("");

  //after first render running once
  useEffect(() => {
    apiClient
      .get<FetchGame>("/gamess")
      .then((res) => {
        console.log("Data received:", res.data.results);
        setGame(res.data.results);
        console.log();
      })
      .catch((error) => {
        console.error("Error fetching data:", error.message);
        setError(error.message);
      });
  }, []);

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
