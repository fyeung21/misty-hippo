import { animeQuery } from "@/services/animeQuery";

export type Anime = {
  title: {
    english: string;
    romaji: string;
    native: string;
  };
  coverImage: {
    color: string;
    large: string; //img url src
  };
  description: string;
  episodes: number;
  genres: string[];
  season: string;
  seasonYear: number;
  source: string;
  startDate: {
    day: number;
    month: number;
    year: number;
  };
  studios: {
    nodes: [
      {
        name: string;
      },
    ];
  };
};

export default async function AnimeDetails(slug: number): Promise<Anime> {
  const variables = {
    mediaId: slug,
  };

  const data = await fetch("https://graphql.anilist.co", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      query: animeQuery, //graphql query
      variables: variables,
    }),
  });

  return data.json();
}
