import Card from "@/components/card";
import CardDetails from "@/services/cardDetails";
import { MediaItem } from "@/services/cardDetails";

export default async function Home() {
  // const animeInfo = [
  //   {
  //     name: "name of anime",
  //     imgSrc: "/next.svg",
  //     airDate: "October 21, 2025",
  //     numberEpisodes: 12,
  //     studioName: "studio name",
  //     description:
  //       "Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using &quote Content here, content &quot;",
  //     genres: ["adventure", "fantasy"],
  //   },
  //   {
  //     name: "different anime",
  //     imgSrc: "/next.svg",
  //     airDate: "December 21, 2025",
  //     numberEpisodes: 24,
  //     studioName: "studio name",
  //     description:
  //       "Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using &quote Content here, content &quot;",
  //     genres: ["action", "sports"],
  //   },
  // ];

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
