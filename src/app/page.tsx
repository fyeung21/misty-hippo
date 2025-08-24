import Image from "next/image";

export default function Home() {
  return (
    <div className="font-sans grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20">
      <header>
        <nav>this will be navigation</nav>
      </header>
      <main>
        <p>call list of anime here</p>
        <section className="grid">
          <article>card</article>
          <article>card</article>
          <article>card</article>
        </section>
      </main>
      <footer>footer</footer>
    </div>
  );
}
