import { useEffect, useState } from "react";

import apiClient from "../services/apiClient.ts";
import { Games, FetchGame } from "../interfaces/gameInterfaces.ts";
import { CanceledError } from "axios";
const useGames = () => {
  const [game, setGame] = useState<Games[]>([]);
  const [error, setError] = useState<string>("");
  const [isLoading, setLoading] = useState(false);
  //after first render running once
  useEffect(() => {
    setLoading(true);
    //when abort fetch HTTP requests
    const controller = new AbortController();

    //先创建一个async函数 但是不可以直接用在effect上面
    const fetchData = async () => {
      try {
        const response = await apiClient.get<FetchGame>("/games", {
          signal: controller.signal,
        });
        setLoading(false);
        console.log("Data received:", response.data.results);
        setGame(response.data.results);
      } catch (err: any) {
        setLoading(true);
        console.error("Error fetching data:", err.message);
        //check the cancer error first
        if (err instanceof CanceledError) return;
        setError(err.message);
      }
    };
    fetchData();
    return () => controller.abort();
  }, []);
  return { error, game };
};
export default useGames;
