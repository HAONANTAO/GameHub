rom "axios";import { useEffect, useState } from "react";

import apiClient from "../services/apiClient.ts";
import { Games, FetchGame } from "../interfaces/gameInterfaces.ts";
import { CanceledError } f
import useData from "./useData.ts";
const useGames = () => {
  return useData("/games");
};
export default useGames;
