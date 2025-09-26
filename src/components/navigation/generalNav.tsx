import Link from "next/link";
import { Heart, User } from "lucide-react";

export default function GeneralNav() {
  return (
    <ul className="flex flex-col text-center capitalize lg:flex-row lg:justify-between lg:bg-indigo-700">
      <Link href="/favourites">
        <li className="p-5 hover:bg-indigo-700 md:mx-2 lg:hover:bg-indigo-800">
          <Heart />
        </li>
      </Link>
      <Link href="/user">
        <li className="p-5 hover:bg-indigo-700 md:ml-2 lg:hover:bg-indigo-800">
          <User />
        </li>
      </Link>
    </ul>
  );
}
