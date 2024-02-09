import React, { useEffect, useState } from "react";
import apiClient from "../services/apiClient.ts";
const GameGrid = () => {
  const [game, setGame] = useState([]);
  const [error, setError] = useState("");

  useEffect(() => {
    apiClient.get
  }, []);
  return <></>;
};

export default GameGrid;
