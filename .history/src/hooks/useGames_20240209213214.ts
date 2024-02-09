import { useEffect, useState } from "react";

import apiClient from "../services/apiClient.ts";
import { Games, FetchGame } from "../interfaces/gameInterfaces.ts";
import { CanceledError } from "axios";
import useData from "./useData.ts";
const useGames = () => {
  return useData
};
export default useGames;
