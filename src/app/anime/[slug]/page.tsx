import FavesButton from "@/components/favesButton";
import Image from "next/image";
import AnimeDetails from "@/services/animeDetails";
import { monthFormat } from "@/lib/monthFormat";

export default async function AnimeSingle({
  params,
}: {
  params: Promise<{ slug: number }>;
}) {
  const { slug } = await params;
  const { data } = await AnimeDetails(slug);
  const anime = data.Media;

  return (
    <section className="xl:mx-20">
      {/* name of anime */}
      <h2 className="my-8 text-3xl lg:text-center">{`${slug}: ${anime.title.english ? anime.title.english : anime.title.romaji}`}</h2>

      {/* main image */}
      <article className="justify-between md:flex md:flex-row">
        <section className="relative h-auto w-36 overflow-hidden sm:mr-8 sm:w-400">
          <Image
            className="object-cover"
            src={anime.coverImage.large}
            alt={`Poster image of ${anime.title.english ? anime.title.english : anime.title.romaji}`}
            fill={true}
            priority
          />
        </section>

        {/* anime details */}
        <section>
          <article className="my-8 flex justify-between">
            <ul>
              <li>
                <p>
                  {anime.episodes ? `${anime.episodes} e` : "E"}pisodes airing
                  in
                </p>
              </li>
              <li>
                <p>{`${monthFormat[anime.startDate.month]} ${anime.startDate.day}, ${anime.startDate.year}`}</p>
              </li>
              <li>
                <p>
                  by{" "}
                  <span className="text-blue-500">
                    {anime.studios.nodes[0].name}
                  </span>
                </p>
              </li>
            </ul>

            {/* favourites button */}
            <FavesButton />
          </article>
          <article className="my-8">
            <p dangerouslySetInnerHTML={{ __html: anime.description }} />
          </article>
          <article>
            <ul className="flex space-x-2">
              {anime.genres.map((genre: string, id: number) => (
                <li key={id} className="text-indigo-200">
                  {genre}
                  {id < anime.genres.length - 1 ? "," : ""}
                </li>
              ))}
            </ul>
          </article>
        </section>
      </article>
    </section>
  );
}
