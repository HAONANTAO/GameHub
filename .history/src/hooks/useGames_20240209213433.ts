import useData from "./useData.ts";
import 
const useGames = () => {
  return useData<Game>("/games");
};
export default useGames;
