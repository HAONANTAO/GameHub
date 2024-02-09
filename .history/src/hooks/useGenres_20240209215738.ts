import { Genres } from "../interfaces/gameInterfaces";
import useData from "../hooks/useData";

const useGenres = () => {
  return useData<Genres>("genress");
};
export default useGenres;
