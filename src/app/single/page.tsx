import Image from "next/image";

export default function Single() {
  return (
    <section className="font-sans grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20">
      <h2>name of anime</h2>
      <Image
        className="dark:invert"
        src="/next.svg"
        alt="Next.js logo"
        width={280}
        height={400}
        priority
      />

      <section>
        <button className="bg-pink-400">faves</button>
        <article>
          <ul>
            <li>
              <p>{"12"} episodes airing in</p>
            </li>
            <li>
              <p>October 21, 2025</p>
            </li>
            <li>
              <p>by {"name of studio"}</p>
            </li>
          </ul>
        </article>
        <article>
          <p>
            description Lorem Ipsum is that it has a more-or-less normal distribution of letters, as
            opposed to using "Content here, content
          </p>
        </article>
        <article>
          <ul>
            <li className="bg-yellow-400">adventure</li>
            <li className="bg-yellow-400">fantasy</li>
          </ul>
        </article>
      </section>
    </section>
  );
}
