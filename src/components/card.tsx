import Image from "next/image";

export default function Card() {
  return (
    <div className="my-8">
      <h2 className="text-2xl">name of anime</h2>
      <article className="bg-blue-400 flex justify-end">
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
        <section>
          <section>
            <ul className="pb-8">
              <li className="text-sm">
                <p>{"12"} episodes airing in</p>
              </li>
              <li className="text-2xl">
                <p>October 21, 2025</p>
              </li>
              <li>
                <p>by {"name of studio"}</p>
              </li>
            </ul>
          </section>
          <section className="flex justify-end space-x-4 ">
            <ul className="flex space-x-2">
              <li className="bg-yellow-400">adventure</li>
              <li className="bg-yellow-400">fantasy</li>
            </ul>
            <button className="bg-pink-400">faves</button>
          </section>
        </section>
      </article>
    </div>
  );
}
