import Image from "next/image";
import { monthFormat } from "@/lib/monthFormat";
import FavesButton from "@/components/favesButton";
import Link from "next/link";

export type CardProps = {
  mediaId: number;
  title: {
    english?: string;
    romaji: string;
    native: string;
  };
  imgSrc: string;
  startDate: {
    day: number;
    month: number;
    year: number;
  };
  numberEpisodes: number;
  studioName: string;
  description: string;
  genres: string[];
};

export default function Card({
  mediaId,
  title,
  imgSrc,
  startDate,
  numberEpisodes,
  studioName,
  description,
  genres,
}: CardProps) {
  return (
    <section>
      <Link href={`/anime/${mediaId}`} className="hover:cursor-pointer">
        <h2 className="truncate text-2xl text-ellipsis hover:text-indigo-500">
          {title.english ? title.english : title.romaji}
        </h2>
      </Link>

      {/* entire filled card */}
      <article className="flex h-55 flex-row rounded-r-sm bg-indigo-900">
        {/* card image side */}
        <section className="relative h-auto w-36 shrink-0 overflow-hidden rounded-l-sm">
          <Image
            className="object-cover"
            src={imgSrc}
            alt={`thumbnail of ${title}`}
            fill={true}
            priority
          />
        </section>

        {/* card text side */}
        <section className="flex h-full w-full flex-col justify-between">
          <section className="group relative h-48">
            {/* card description on hover */}
            <article className="mt-3 mr-1 ml-3 hidden h-44 overflow-auto group-hover:block">
              <p
                dangerouslySetInnerHTML={{ __html: description }}
                className="pr-1.5 text-sm md:text-base"
              />
            </article>
            {/* card details */}
            <article className="m-3 group-hover:hidden">
              <ul>
                <li className="text-sm md:text-base">
                  <p>
                    {numberEpisodes ? `${numberEpisodes} e` : "E"}pisodes airing
                    in
                  </p>
                </li>
                <li className="text-xl md:text-xl">
                  <p>{`${monthFormat[startDate.month]} ${startDate.day}, ${startDate.year}`}</p>
                </li>
                <li>
                  <p className="text-sm md:text-base">
                    by{" "}
                    <span className="font-semibold text-yellow-500">
                      {studioName}
                    </span>
                  </p>
                </li>
              </ul>
            </article>
          </section>

          {/* bottom section of card containing genre and favourites button */}
          <article className="flex justify-between space-x-4 rounded-br-sm bg-indigo-800 px-3 py-1">
            <ul className="flex space-x-2">
              {genres.map((genre, id) => (
                <li key={id} className="text-indigo-200">
                  {genre}
                  {id < genres.length - 1 ? "," : ""}
                </li>
              ))}
            </ul>
            <FavesButton />
          </article>
        </section>
      </article>
    </section>
  );
}
