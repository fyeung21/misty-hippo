import Link from "next/link";
import { Heart, User } from "lucide-react";

export default function GeneralNav() {
  return (
    <ul className="flex flex-col text-center capitalize lg:flex-row lg:justify-between lg:bg-indigo-700">
      <Link href="/favourites">
        <li className="flex flex-row justify-center p-5 hover:bg-indigo-700 lg:hover:bg-indigo-800">
          <Heart className="mr-2" />
          <p>favourites</p>
        </li>
      </Link>
      <Link href="/user">
        <li className="flex flex-row justify-center p-5 hover:bg-indigo-700 lg:hover:bg-indigo-800">
          <User className="mr-2" />
          <p>user</p>
        </li>
      </Link>
    </ul>
  );
}
