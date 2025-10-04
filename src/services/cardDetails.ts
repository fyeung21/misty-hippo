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
          description
          episodes
          coverImage {
            color
            large
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

  const data = await fetch("https://graphql.anilist.co", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      query: query,
      variables: variables,
    }),
  });

  return data.json();
}
