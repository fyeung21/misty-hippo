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

      {/* entire card */}
      <article className="flex justify-between bg-blue-400">
        {/* card image side */}
        <section className="relative h-[265px] w-[185px]">
          <Image
            className="object-cover"
            src={imgSrc}
            alt={`thumbnail of ${title}`}
            fill={true}
            priority
          />
        </section>

        {/* card text side */}
        <section className="group relative flex-col">
          {/* card description on hover */}
          <article className="hidden w-41 group-hover:block">
            <p dangerouslySetInnerHTML={{ __html: description }} />
          </article>

          {/* card details */}
          <article className="group-hover:hidden">
            <ul className="pb-20">
              <li className="text-sm">
                <p>{numberEpisodes} episodes airing in</p>
              </li>
              <li className="text-xl">
                <p>{`${monthFormat[startDate.month]} ${startDate.day}, ${startDate.year}`}</p>
              </li>
              <li>
                <p>
                  by <span className="text-blue-500">{studioName}</span>
                </p>
              </li>
            </ul>
          </article>

          {/* bottom section of card containing genre and favourites button */}
          <article className="flex justify-between space-x-4 justify-self-end">
            <ul className="flex space-x-2">
              {genres.map((genre, id) => (
                <li key={id} className="bg-yellow-400">
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
