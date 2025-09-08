import Card from "@/components/card";

export default function Home() {
  return (
    <section className="grid gap-y-10 sm:grid-cols-2 sm:gap-10 lg:grid-cols-3 lg:gap-y-16">
      {/* call list of anime */}
      <Card />
      <Card />
      <Card />
    </section>
  );
}
