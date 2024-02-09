import React, { useEffect, useState } from "react";
import apiClient from "../services/apiClient.ts";

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
      .then((res) => setGame(res.data.results))
      .catch((error) => setError(error.message));
  }, []);
  return <>
  {game.map(g=>)}</>;
};

export default GameGrid;
