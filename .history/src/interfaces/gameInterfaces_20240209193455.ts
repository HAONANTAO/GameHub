//basic return result json format

interface platform{
  id: number;
  name: string;
  slug: string
}
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
