import Link from "next/link";

export default function Header() {
  return (
    <header>
      <section>
        <article>
            <Link href="/">
              <h1>logo</h1>
            </Link>
        </article>
        <nav>
          <ul>
            <li>{`${"winter"} ${"2024"}`}</li>
            <li>{`${"spring"} ${"2024"}`}</li>
            <li>{`${"summer"} ${"2024"}`}</li> 
            <li>{`${"fall"} ${"2024"}`}</li> 
          </ul> 
          <ul>
            <Link href="/favourites">
              <li>favourites</li>
            </Link>
            <Link href="/user">
              <li>user</li>
            </Link>
          </ul>
        </nav>
      </section>
    </header>
  );
}
