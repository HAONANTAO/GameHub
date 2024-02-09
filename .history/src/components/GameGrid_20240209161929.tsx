import React, { useEffect, useState } from "react";
import apiClient from "../services/apiClient.ts";

interface s{
  count:
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
