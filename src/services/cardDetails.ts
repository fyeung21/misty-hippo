import { detailsQuery } from "@/services/detailsQuery";

export type MediaItem = {
  id: number;
  title: {
    english: string;
    romaji: string;
    native: string;
  };
  genres: string[];
  description: string;
  episodes: number;
  coverImage: {
    color: string;
    large: string; //img url src
  };
};

export default async function CardDetails() {
  const variables = {
    season: "FALL",
    seasonYear: 2025,
    sort: "POPULARITY_DESC",
    page: 1,
    perPage: 9,
    type: "ANIME",
  };

  const data = await fetch("https://graphql.anilist.co", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      query: detailsQuery,
      variables: variables,
    }),
  });

  return data.json();
}
