import React, { useEffect, useState } from "react";
import apiClient from "../services/apiClient.ts";

//basic return result json format

interface Games {
  id: string;
  name: string;
}
interface FetchGame {
  count: number;
  results: Games;
}
const GameGrid = () => {
  const [game, setGame] = useState<FetchGame></FetchGame>([]);
  const [error, setError] = useState("");

  useEffect(() => {
    apiClient.get<FetchGame>("/games").then((res) => setGame(res.data.results));
  }, []);
  return <></>;
};

export default GameGrid;
