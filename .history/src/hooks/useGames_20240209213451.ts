import useData from "./useData.ts";
import { Games } from "../interfaces/gameInterfaces.ts";
const useGames = () => {
  return useData<Games>("/games");
};
export default useGames;
