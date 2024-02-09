import useData from "./useData.ts";
import { Games } from "../interfaces/gameInterfaces.ts";
const useGames = (selectedGenre) => {
  return useData<Games>("/games");
};
export default useGames;
