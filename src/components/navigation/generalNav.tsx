import Link from "next/link";
import { Heart, User } from "lucide-react";

export default function GeneralNav() {
  return (
    <ul className="flex flex-col text-center capitalize lg:flex-row lg:justify-between lg:bg-indigo-700">
      <Link href="/favourites">
        <li className="flex flex-row justify-center p-5 hover:bg-indigo-700 lg:mr-2 lg:flex-col lg:items-center lg:p-2 lg:py-2.5 lg:text-xs lg:hover:bg-indigo-800">
          <Heart className="mr-2 lg:mr-0 lg:mb-1" />
          <p>faves</p>
        </li>
      </Link>
      <Link href="/user">
        <li className="flex flex-row justify-center p-5 hover:bg-indigo-700 lg:flex-col lg:items-center lg:p-2 lg:px-3.5 lg:py-2.5 lg:text-xs lg:hover:bg-indigo-800">
          <User className="mr-2 lg:mr-0 lg:mb-1" />
          <p>user</p>
        </li>
      </Link>
    </ul>
  );
}
