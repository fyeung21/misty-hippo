import Card from "@/components/card";

export default function Home() {
  return (
    <section className="grid sm:grid-cols-2 sm:gap-4">
      {/* call list of anime */}
      <Card />
      <Card />
      <Card />
    </section>
  );
}
