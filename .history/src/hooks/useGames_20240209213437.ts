import useData from "./useData.ts";
import Game from "../"
const useGames = () => {
  return useData<Game>("/games");
};
export default useGames;
