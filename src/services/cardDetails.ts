import { detailsQuery } from "@/services/detailsQuery";

export type PageMedia = {
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

//defining types for the nested data object from api
type Page = {
  media: PageMedia[];
};
type ResponseData = {
  Page: Page;
};
type QueryResponse = {
  data: ResponseData;
};

//api call
export default async function CardDetails(): Promise<QueryResponse> {
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
      query: detailsQuery, //graphql query
      variables: variables,
    }),
  });

  return data.json();
}
