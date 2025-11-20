import Image from "next/image";
import { monthFormat } from "@/lib/monthFormat";
import FavesButton from "@/components/favesButton";

export type SingleDetailsProps = {
  imgSrc: string;
  description: string;
  numberEpisodes?: number;
  genres: string[];
  season: string;
  seasonYear: number;
  source: string;
  startDate: {
    day: number;
    month: number;
    year: number;
  };
  studioName: string;
  title: {
    english?: string;
    romaji: string;
    native: string;
  };
};

export default function SingleDetails({
  imgSrc,
  description,
  numberEpisodes,
  startDate,
  studioName,
  genres,
  title,
  season,
  seasonYear,
}: SingleDetailsProps) {
  return (
    <>
      {/* name of anime */}
      <h2 className="my-8 text-3xl lg:text-center">{`${title.english ? title.english : title.romaji}`}</h2>

      {/* main image */}
      <article className="sm:flex sm:flex-row sm:justify-between">
        <section className="relative h-100 w-auto sm:mr-5 sm:max-h-400 sm:w-400">
          <Image
            className="object-cover"
            src={imgSrc}
            alt={`Poster image of ${title.english ? title.english : title.romaji}`}
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
                  {numberEpisodes ? `${numberEpisodes} e` : "E"}pisodes airing
                  in
                </p>
              </li>
              <li>
                <p>{`${monthFormat[startDate.month]} ${startDate.day}, ${startDate.year}`}</p>
              </li>
              <li>
                <p>
                  by <span className="text-blue-500">{studioName}</span>
                </p>
              </li>
            </ul>

            {/* favourites button */}
            <FavesButton />
          </article>
          <article className="my-8">
            <p dangerouslySetInnerHTML={{ __html: description }} />
          </article>
          <article className="flex justify-between text-orange-300">
            <ul className="flex space-x-2">
              {genres.map((genre: string, id: number) => (
                <li key={id} className="text-indigo-200">
                  {genre}
                  {id < genres.length - 1 ? "," : ""}
                </li>
              ))}
            </ul>
            <p>{`${season} ${seasonYear}`}</p>
          </article>
        </section>
      </article>
    </>
  );
}
