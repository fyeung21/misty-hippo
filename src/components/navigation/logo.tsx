import Link from "next/link";

export default function Logo() {
  return (
    <article>
      <Link href="/">
        <h1 className="p-5 hover:bg-indigo-800">logo</h1>
      </Link>
    </article>
  );
}
