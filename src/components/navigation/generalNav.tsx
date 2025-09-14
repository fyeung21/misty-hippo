import Link from "next/link";

export default function GeneralNav() {
  return (
    <ul>
      <Link href="/favourites">
        <li>favourites</li>
      </Link>
      <Link href="/user">
        <li>user</li>
      </Link>
    </ul>
  );
}
