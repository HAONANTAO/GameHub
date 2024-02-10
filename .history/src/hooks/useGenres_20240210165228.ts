import { Genres } from "../interfaces/gameInterfaces";
import useData from "../hooks/useData";

const useGenres = () => ({
  data: null,
  isLoading: false,
  error: null,
});
export default useGenres;
