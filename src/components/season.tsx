import { MediaItem } from "@/components/types";

export default async function Season() {
  const query = `
query Query($seasonYear: Int, $sort: [MediaSort], $page: Int, $perPage: Int, $type: MediaType, $season: MediaSeason) {
  Page(page: $page, perPage: $perPage) {
    media(seasonYear: $seasonYear, sort: $sort, type: $type, season: $season) {
      title {
        english
        romaji
        native
      }
      id
      genres
      format
      description
      episodes
      coverImage {
        color
        medium
      }
    }
    pageInfo {
      hasNextPage
      currentPage
    }
  }
}
  `;

  const variables = {
    season: "FALL",
    seasonYear: 2025,
    sort: "POPULARITY_DESC",
    page: 1,
    perPage: 9,
    type: "ANIME",
  };

  const response = await fetch("https://graphql.anilist.co", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      query: query,
      variables: variables,
    }),
  });

  const { data } = await response.json();

  return (
    <ul>
      {data.Page.media.map((media: MediaItem) => (
        <li key={media.id}>{media.title.romaji}</li>
      ))}
    </ul>
  );
}
