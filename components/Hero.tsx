import { Button } from "@/components/ui/button";
import { client } from "@/sanity/lib/client";
import { HERO_QUERY } from "@/sanity/lib/queries";
import { HERO_QUERYResult } from "@/sanity.types";
import Image from "next/image";
import { urlFor } from "@/sanity/lib/image";
import Link from "next/link";
import { AspectRatio } from "./ui/aspect-ratio";

export default async function Hero() {
  const hero: HERO_QUERYResult = await client.fetch(HERO_QUERY);
  const heroData = hero[0];
  return (
    <section
      id="hero"
      className="min-h-screen flex items-center bg-background text-foreground"
    >
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="w-full md:w-1/2 space-y-6">
            <h1 className="text-4xl md:text-5xl font-bold">
              {heroData.missionStatement}
            </h1>
            <p className="text-xl text-muted-foreground">{heroData.subtitle}</p>
            <div className="flex flex-col sm:flex-row gap-4">
              {heroData.primaryButtonSlug && (
                <Link href={heroData.primaryButtonSlug}>
                  <Button size="lg">{heroData.primaryButtonText}</Button>
                </Link>
              )}
              {heroData.secondaryButtonSlug && (
                <Link href={heroData.secondaryButtonSlug}>
                  <Button size="lg" variant="outline">
                    {heroData.secondaryButtonText}
                  </Button>
                </Link>
              )}
            </div>
          </div>
          <div className="w-full md:w-1/2 mt-8 md:mt-0">
            <div className="md:hidden">
              <AspectRatio ratio={16 / 9}>
                {heroData.backgroundImage && (
                  <Image
                    src={urlFor(heroData.backgroundImage).url()}
                    alt="Hero Image"
                    fill
                    className="object-cover rounded-lg"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                )}
              </AspectRatio>
            </div>
            <div className="hidden md:block aspect-[3/4] xl:aspect-[4/3] relative">
              {heroData.backgroundImage && (
                <Image
                  src={urlFor(heroData.backgroundImage).url()}
                  alt="Hero Image"
                  fill
                  className="object-cover rounded-lg"
                  sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 33vw"
                />
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
