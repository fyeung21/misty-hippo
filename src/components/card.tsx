import Image from "next/image";
import { monthFormat } from "@/lib/monthFormat";

export type CardProps = {
  mediaId: number;
  title: string;
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
      <h2 className="truncate text-2xl text-ellipsis">{title}</h2>

      {/* entire filled card */}
      <article className="flex h-62 bg-indigo-900">
        {/* card image side */}
        <section className="relative h-auto w-[185px]">
          <Image
            className="object-cover"
            src={imgSrc}
            alt={`thumbnail of ${title}`}
            fill={true}
            priority
          />
        </section>

        {/* card text side */}
        <section className="group relative flex h-full w-full flex-col">
          {/* card description on hover */}
          <article className="hidden w-41 group-hover:block">
            <p dangerouslySetInnerHTML={{ __html: description }} />
          </article>
          {/* card details */}
          <article className="m-3 group-hover:hidden">
            <ul>
              <li className="text-sm">
                <p>{`${numberEpisodes} episodes airing in`}</p>
              </li>
              <li className="text-xl">
                <p>{`${monthFormat[startDate.month]} ${startDate.day}, ${startDate.year}`}</p>
              </li>
              <li>
                <p className="text-sm">
                  by{" "}
                  <span className="font-semibold text-yellow-500">
                    {studioName}
                  </span>
                </p>
              </li>
            </ul>
          </article>

          {/* bottom section of card containing genre and favourites button */}
          <article className="m-3 flex justify-between space-x-4">
            <ul className="flex space-x-2">
              {genres.map((genre, id) => (
                <li key={id} className="text-indigo-200">
                  {genre}
                </li>
              ))}
            </ul>
            <button className="bg-pink-400">faves</button>
          </article>
        </section>
      </article>
    </section>
  );
}
