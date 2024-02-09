import React, { useEffect, useState } from "react";
import apiClient from "../services/apiClient.ts";
import { Button, Text } from "@chakra-ui/react";

//basic return result json format

interface Games {
  id: string;
  name: string;
}
interface FetchGame {
  count: number;
  results: Games[];
}
const GameGrid = () => {
  const [game, setGame] = useState<Games[]>([]);
  const [error, setError] = useState("");

  //after first render running once
  useEffect(() => {
    apiClient
      .get<FetchGame>("/games")
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
      {error && <Text>{error}</Text>}

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
