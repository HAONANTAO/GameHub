import React, { useEffect, useState } from "react";
import apiClient from "../services/apiClient.ts";

//basic return result json format

interface Games{
  
}
interface s {
  count: number;
  results: { id: string; name: string };
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
