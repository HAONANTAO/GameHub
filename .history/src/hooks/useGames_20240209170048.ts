import { useEffect, useState } from "react";
import { Games, FetchGame } from "../interfaces/gameInterfaces.ts";

const useGames = () => {
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
};
export default useGames;
