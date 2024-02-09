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
      .then((res) => {
        console.log("Data received:", res.data.results);
        setGame(res.data.results);
      })
      .catch((error) => {
        console.error("Error fetching data:", error.message);
        setError(error.message);
      });
  }, []);

  return (
    <>
       {game !== null ? 
        <ul>
          {game.map((g) => (
            <li key={g.id}>{g.name}</li>
          ))}
        </ul>
      ) : (
        <p>Loading...</p>
      )}
    </>
  );
};

export default GameGrid;
