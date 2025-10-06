import Card from "@/components/card";
import CardDetails from "@/services/cardDetails";
import { MediaItem } from "@/services/cardDetails";

export default async function Home() {
  const { data } = await CardDetails();

  return (
    <section className="grid gap-y-10 sm:grid-cols-2 sm:gap-10 lg:grid-cols-3 lg:gap-y-16">
      {data.Page.media.map((media: MediaItem) => (
        <Card
          key={media.id}
          title={media.title.english}
          imgSrc={media.coverImage.large}
          // airDate={anime.airDate}
          numberEpisodes={media.episodes}
          // studioName={anime.studioName}
          description={media.description}
          genres={media.genres}
        />
      ))}
    </section>
  );
}
