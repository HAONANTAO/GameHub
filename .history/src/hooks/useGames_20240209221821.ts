import useData from "./useData.ts";
import { Games, Genres } from "../interfaces/gameInterfaces.ts";
const useGames = (selectedGenre: Genres) => {
  return useData<Games>("/games");
};
export default useGames;
