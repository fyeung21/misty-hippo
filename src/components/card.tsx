import Image from "next/image";

export default function Card() {
  return (
    <section>
      <h2 className="text-2xl">name of anime</h2>

      {/* entire card */}
      <article className="bg-blue-400 flex justify-between h-50">
        {/* card image side */}
        <section>
          <Image
            className="dark:invert"
            src="/next.svg"
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
            <p>
              description Lorem Ipsum is that it has a more-or-less normal distribution of letters,
              as opposed to using "Content here, content
            </p>
          </article>

          {/* card details */}
          <article className="group-hover:hidden">
            <ul className="pb-20">
              <li className="text-sm">
                <p>{"12"} episodes airing in</p>
              </li>
              <li className="text-xl">
                <p>October 21, 2025</p>
              </li>
              <li>
                <p>
                  by <span className="text-blue-500">{"name of studio"}</span>
                </p>
              </li>
            </ul>
          </article>

          {/* bottom section of card containing genre and favourites button */}
          <article className="flex justify-between space-x-4 justify-self-end">
            <ul className="flex space-x-2">
              <li className="bg-yellow-400">adventure</li>
              <li className="bg-yellow-400">fantasy</li>
            </ul>
            <button className="bg-pink-400">faves</button>
          </article>
        </section>
      </article>
    </section>
  );
}
