import Image from "next/image";

export default async function AnimeSingle({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  return (
    <section className="xl:mx-20">
      {/* name of anime */}
      <h2 className="my-8 text-3xl lg:text-center">{`${slug}: anime title`}</h2>

      {/* main image */}
      <article className="justify-between md:flex md:flex-row">
        <section className="h-auto sm:mr-8 sm:w-400 lg:mx-10 lg:w-600">
          <Image
            className="dark:invert"
            src={"/next.svg"}
            alt={`Poster image of ${"anime title"}`}
            width={280}
            height={400}
            priority
          />
        </section>

        {/* anime details */}
        <section>
          <article className="my-8 flex justify-between">
            <ul>
              <li>
                <p>{"12"} episodes airing in</p>
              </li>
              <li>
                <p className="text-xl">{`${"october"} ${"13"}, ${"2025"}`}</p>
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
              {`description Lorem Ipsum is that it has a more-or-less normal
              distribution of letters, as opposed to`}
            </p>
          </article>
          <article>
            <ul className="flex space-x-2">
              <li className="bg-yellow-400">adventure</li>
              <li className="bg-yellow-400">fantasy</li>
            </ul>
          </article>
        </section>
      </article>
    </section>
  );
}
