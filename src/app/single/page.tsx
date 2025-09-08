import Image from "next/image";

export default function Single() {
  return (
    <section className="min-h-screen p-8 pb-20 gap-16">
      {/* name of anime */}
      <h2 className="my-8 text-3xl">name of anime</h2>

      {/* main image */}
      <section>
        <Image
          className="dark:invert"
          src="/next.svg"
          alt="Next.js logo"
          width={280}
          height={400}
          priority
        />
      </section>

      {/* anime details */}
      <section>
        <article className="flex justify-between my-8">
          <ul>
            <li>
              <p>{"12"} episodes airing in</p>
            </li>
            <li>
              <p className="text-xl">October 21, 2025</p>
            </li>
            <li>
              <p>
                by <span className="text-blue-500">{"name of studio"}</span>
              </p>
            </li>
          </ul>

          {/* favourites button */}
          <button className="bg-pink-400">faves</button>
        </article>
        <article className="my-8">
          <p>
            description Lorem Ipsum is that it has a more-or-less normal
            distribution of letters, as opposed to using "Content here, content
            here", making it look like readable English. Many desktop publishing
            packages and web page editors now use Lorem Ipsum as their default
            model text, and a search for 'lorem ipsum' will uncover many web
            sites still in their infancy. Various versions have evolved over the
            years, sometimes by accident, sometimes on purpose (injected humour
            and the like).
          </p>
        </article>
        <article>
          <ul className="flex space-x-2">
            <li className="bg-yellow-400">adventure</li>
            <li className="bg-yellow-400">fantasy</li>
          </ul>
        </article>
      </section>
    </section>
  );
}
