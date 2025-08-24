import Image from "next/image";

export default function Card() {
  return (
    <div className="bg-blue-400">
      <article>
        <section>
          <Image
            className="dark:invert"
            src="/next.svg"
            alt="Next.js logo"
            width={180}
            height={38}
            priority
          />
          <h2>name of anime</h2>
          <p>name of studio</p>
        </section>
        <section>
          <ul>
            <li>
              <p>number of episodes or countdown</p>
            </li>
            <li>
              <p>air date or countdown</p>
            </li>
            <li>
              <p>sequel or original?</p>
            </li>
          </ul>
          <p>description</p>
        </section>
        <section>
          <ul>
            <li className="bg-yellow-400">genre tag</li>
            <li className="bg-yellow-400">genre tag</li>
          </ul>
        </section>
        <section>
          <button className="bg-pink-400">add to favourites</button>
        </section>
      </article>
    </div>
  );
}
