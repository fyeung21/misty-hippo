import Link from "next/link";

export default function GeneralNav() {
  return (
    <ul className="flex flex-col text-center capitalize md:flex-row md:justify-between">
      <Link href="/favourites">
        <li className="p-5 hover:bg-indigo-700 md:mx-2">faves</li>
      </Link>
      <Link href="/user">
        <li className="p-5 hover:bg-indigo-700 md:ml-2">user</li>
      </Link>
    </ul>
  );
}
