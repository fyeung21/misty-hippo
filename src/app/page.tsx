import Card from "@/components/card";

export default function Home() {
  const animeInfo = [
    {
      name: "name of anime",
      imgSrc: "/next.svg",
      airDate: "October 21, 2025",
      numberEpisodes: 12,
      studioName: "studio name",
      description:
        "Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using &quote Content here, content &quot;",
      genres: ["adventure", "fantasy"],
    },
    {
      name: "different anime",
      imgSrc: "/next.svg",
      airDate: "December 21, 2025",
      numberEpisodes: 24,
      studioName: "studio name",
      description:
        "Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using &quote Content here, content &quot;",
      genres: ["action", "sports"],
    },
  ];
  return (
    <section className="grid gap-y-10 sm:grid-cols-2 sm:gap-10 lg:grid-cols-3 lg:gap-y-16">
      {/* call list of anime */}
      {animeInfo.map((anime, id) => (
        <Card
          key={id}
          name={anime.name}
          imgSrc={anime.imgSrc}
          airDate={anime.airDate}
          numberEpisodes={anime.numberEpisodes}
          studioName={anime.studioName}
          description={anime.description}
          genres={anime.genres}
        />
      ))}
    </section>
  );
}
