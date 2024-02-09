import { Genres } from "../interfaces/gameInterfaces";
import useData from "../hooks/useData";

const useGenres = () => {
  useData<Genres>("genres");
};
export default useGenres;
