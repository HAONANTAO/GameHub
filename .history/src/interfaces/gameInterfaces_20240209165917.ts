interface Games {
  id: string;
  name: string;
}
interface FetchGame {
  count: number;
  results: Games[];
}

export interface{ Games, FetchGame };
