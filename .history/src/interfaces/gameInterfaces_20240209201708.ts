//basic return result json format

interface Platform {
  platform: any;
  id: number;
  name: string;
  slug: string;
}
interface Games {
  id: string;
  name: string;
  background_image: string;
  parent_platforms: {
    map: any; platform: Platform 
};
metacritic: number
}
interface FetchGame {
  count: number;
  results: Games[];
}

export type { Games, FetchGame, Platform };
