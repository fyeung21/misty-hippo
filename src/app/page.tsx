import Card from "@/components/card";

export default function Home() {
  return (
    <>
      <p>call list of anime here</p>
      <section className="grid sm:grid-cols-2 sm:gap-4">
        <Card />
        <Card />
        <Card />
      </section>
    </>
  );
}
