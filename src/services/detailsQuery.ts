export const detailsQuery = `
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
        startDate {
          day
          month
          year
        }
        studios(isMain:true) {
          nodes {
            name
          }
        }
      }
      pageInfo {
        hasNextPage
        currentPage
      }
    }
  }
`;
