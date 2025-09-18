import Link from "next/link";

export default function GeneralNav() {
  return (
    <ul className="md:flex md:flex-row md:justify-between">
      <Link href="/favourites">
        <li className="md:mx-2">faves</li>
      </Link>
      <Link href="/user">
        <li className="md:ml-2">user</li>
      </Link>
    </ul>
  );
}
