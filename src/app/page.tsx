import Card from "@/components/card";
import CardDetails, { MediaItem } from "@/services/cardDetails";

export default async function Home() {
  const { data } = await CardDetails();

  return (
    <section className="grid w-full grid-cols-1 justify-center gap-y-6 md:grid-cols-2 md:gap-10 lg:grid-cols-3 lg:gap-y-16">
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
