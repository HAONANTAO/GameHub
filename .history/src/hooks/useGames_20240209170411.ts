import { useEffect, useState } from "react";

import apiClient from "../services/apiClient.ts";
import { Games, FetchGame } from "../interfaces/gameInterfaces.ts";
const useGames = () => {
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
  return { error, game };
};
export default useGames;
