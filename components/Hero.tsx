import { Button } from "@/components/ui/button";

export default function Hero() {
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
        <h1 className="text-5xl font-bold mb-4">Hero Section Title</h1>
        <p className="text-xl mb-8">Hero Section Subtitle</p>
        <Button size="lg">Button text</Button>
      </div>
    </section>
  );
}
