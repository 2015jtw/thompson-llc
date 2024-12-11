import { Button } from "@/components/ui/button";
import { client } from "@/sanity/lib/client";
import { HERO_QUERY } from "@/sanity/lib/queries";

export default async function Hero() {
  const hero = await client.fetch(HERO_QUERY);
  return (
    <section
      id="hero"
      className="relative h-screen flex items-center justify-center text-white"
    >
      <div
        className="absolute inset-0 bg-cover bg-center z-0"
        style={{ backgroundImage: "url('/hero-image.jpg')" }}
      ></div>
      <div className="absolute inset-0 bg-black opacity-50 z-10"></div>
      <div className="relative z-20 text-center">
        <h1 className="text-5xl font-bold mb-4">
          Thompson Environmental Consulting, LLC
        </h1>
        <p className="text-xl mb-8">
          Our overarching mission is to help countries and cities around the
          world achieve clean, green economic growth.
        </p>
        <p className="text-xl mb-8">
          The green energy revolution and low carbon urban development pathways
          offer significant economic opportunities; leaders at all levels should
          seize them.
        </p>
        <Button size="lg">Our Services</Button>
      </div>
    </section>
  );
}
