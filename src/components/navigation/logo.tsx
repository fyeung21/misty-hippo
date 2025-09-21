import Link from "next/link";

export default function Logo() {
  return (
    <article>
      <Link href="/">
        <h1 className="hover:bg-indigo-800 p-4">logo</h1>
      </Link>
    </article>
  );
}
