import Image from "next/image";

export type CardProps = {
  title: string;
  imgSrc: string;
  // airDate: string;
  numberEpisodes: number;
  // studioName: string;
  description: string;
  genres: string[];
};

export default function Card({
  title,
  imgSrc,
  // airDate,
  numberEpisodes,
  // studioName,
  description,
  genres,
}: CardProps) {
  return (
    <section>
      <h2 className="text-2xl">{title}</h2>

      {/* entire card */}
      <article className="bg-blue-400 flex justify-between h-50">
        {/* card image side */}
        <section>
          <Image
            className=""
            src={imgSrc}
            alt="Next.js logo"
            width={180}
            height={300}
            priority
          />
        </section>

        {/* card text side */}
        <section className="group relative flex-col justify-between p-3">
          {/* card description on hover */}
          <article className="hidden group-hover:block w-41">
            <p>{description}</p>
          </article>

          {/* card details */}
          <article className="group-hover:hidden">
            <ul className="pb-20">
              <li className="text-sm">
                <p>{numberEpisodes} episodes airing in</p>
              </li>
              <li className="text-xl">
                <p>{"airDate"}</p>
              </li>
              <li>
                <p>
                  by <span className="text-blue-500">{"studioName"}</span>
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
