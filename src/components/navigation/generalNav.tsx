import Link from "next/link";

export default function GeneralNav() {
  return (
    <ul className="flex flex-col text-center capitalize lg:flex-row lg:justify-between lg:bg-indigo-700">
      <Link href="/favourites">
        <li className="p-5 hover:bg-indigo-700 md:mx-2 lg:hover:bg-indigo-800">
          faves
        </li>
      </Link>
      <Link href="/user">
        <li className="p-5 hover:bg-indigo-700 md:ml-2 lg:hover:bg-indigo-800">
          user
        </li>
      </Link>
    </ul>
  );
}
