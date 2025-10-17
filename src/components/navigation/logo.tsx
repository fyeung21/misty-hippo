import Link from "next/link";

export default function Logo() {
  return (
    <article>
      <Link href="/">
        <h1 className="px-5 py-4 hover:bg-indigo-800 lg:py-5">logo</h1>
      </Link>
    </article>
  );
}
