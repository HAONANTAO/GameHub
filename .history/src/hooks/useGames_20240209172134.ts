import { useEffect, useState } from "react";

import apiClient from "../services/apiClient.ts";
import { Games, FetchGame } from "../interfaces/gameInterfaces.ts";
import { CanceledError } from "axios";
const useGames = () => {
  const [game, setGame] = useState<Games[]>([]);
  const [error, setError] = useState("");

  //after first render running once
  useEffect(() => {
    //when abort fetch HTTP requests
    const controller = new AbortController();

    //先创建一个async函数 但是不可以直接用在effect上面
    const fetchData = async () => {
      try {
        const response = await apiClient.get<FetchGame>("/games", {
          signal: controller.signal,
        });
        console.log("Data received:", response.data.results);
        setGame(response.data.results);
      } catch (error) {
        console.error("Error fetching data:", error.message);
        //check the cancer error first
        if (error instanceof CanceledError) return;
        setError(error.message);
      }
    };
    fetchData();
    return () => controller.abort();
  }, []);
  return { error, game };
};
export default useGames;
