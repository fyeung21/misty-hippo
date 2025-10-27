export const AnimeQuery = `
query AnimeQuery($isMain: Boolean, $mediaId: Int) {
  Media(id: $mediaId) {
    coverImage {
      large
    }
    description
    episodes
    genres
    season
    seasonYear
    source
    startDate {
      day
      month
      year
    }
    studios(isMain: $isMain) {
      nodes {
        name
      }
    }
    title {
      english
      native
      romaji
    }
  }
}
`;
