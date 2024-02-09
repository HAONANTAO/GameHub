import React, { useEffect, useState } from "react";
import apiClient from "../services/apiClient.ts";

interface s{
  count: number;
  next: string;
  previous: string
  results:
}
const GameGrid = () => {
  const [game, setGame] = useState([]);
  const [error, setError] = useState("");

  useEffect(() => {
    apiClient.get("/games").then(res.json());
  }, []);
  return <></>;
};

export default GameGrid;
