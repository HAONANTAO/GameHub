import { useState, useEffect } from "react";
import apiClient from "../services/apiClient";
import { CanceledError } from "axios";
import { Genres } from "../interfaces/gameInterfaces";

interface FetchGenresResponse {
  count: number;
  results: Genres[];
}
const useGenres = () => {
  useDate<Genre>("genres")</Genre>
};
export default useGenres;
