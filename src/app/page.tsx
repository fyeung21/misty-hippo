import Card from "@/components/card";
import CardDetails, { MediaItem } from "@/services/cardDetails";

export default async function Home() {
  const { data } = await CardDetails();

  return (
    <section className="grid grid-cols-1 gap-y-10 grid-cols-[175px auto] sm:grid-cols-2 sm:gap-10 lg:grid-cols-3 lg:gap-y-16">
      {data.Page.media.map((media: MediaItem, id: number) => (
        <Card
          key={id}
          mediaId={media.id}
          title={media.title.english}
          imgSrc={media.coverImage.large}
          startDate={media.startDate}
          numberEpisodes={media.episodes}
          studioName={media.studios.nodes[0].name}
          description={media.description}
          genres={media.genres.slice(0, 2)}
        />
      ))}
    </section>
  );
}
