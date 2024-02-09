import useData from "./useData.ts";
const useGames = () => {
  return useData("/games");
};
export default useGames;
