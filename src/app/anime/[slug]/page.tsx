import SingleDetails from "@/components/singleDetails";
import AnimeDetails from "@/services/animeDetails";

export default async function AnimeSingle({
  params,
}: {
  params: Promise<{ slug: number }>;
}) {
  const { slug } = await params;
  const { data } = await AnimeDetails(slug);
  const anime = data.Media;
  console.log(anime.episodes);
  return (
    <section className="xl:mx-20">
      <SingleDetails
        imgSrc={anime.coverImage.large}
        description={anime.description}
        numberEpisodes={anime.episodes}
        genres={anime.genres}
        season={anime.season}
        seasonYear={anime.seasonYear}
        source={anime.source}
        startDate={anime.startDate}
        studioName={anime.studios.nodes[0].name}
        title={anime.title}
      />
    </section>
  );
}
