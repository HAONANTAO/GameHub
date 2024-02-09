//basic return result json format

interface
interface Games {
  id: string;
  name: string;
  background_image: string;
  parent_platforms:
}
interface FetchGame {
  count: number;
  results: Games[];
}

export type { Games, FetchGame };
