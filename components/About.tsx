import Image from "next/image";
import { client } from "../sanity/lib/client";
import { ABOUT_QUERY } from "../sanity/lib/queries";
import { PortableText } from "@portabletext/react";
import { urlFor } from "@/sanity/lib/image";
import { ABOUT_QUERYResult } from "@/sanity.types";

export default async function About() {
  const about = await client.fetch(ABOUT_QUERY);
  const aboutData: ABOUT_QUERYResult[0] = about[0];
  return (
    <section id="about" className="py-20 bg-gray-100">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center max-w-4xl mx-auto">
          <div className="mb-8 flex justify-center">
            <div className="rounded-full overflow-hidden w-72 h-72">
              {aboutData.image && (
                <Image
                  src={urlFor(aboutData.image).url()}
                  alt={aboutData.name || "Carrie Thompson's photo"}
                  width={288}
                  height={288}
                  className="object-cover w-full h-full"
                />
              )}
            </div>
          </div>
          <h3 className="text-4xl text-primary font-semibold mb-6 text-center">
            {aboutData.name}
          </h3>
          <div className="text-center">
            {aboutData &&
              aboutData.body?.map((block, index: number) => (
                <PortableText
                  key={index}
                  value={block}
                  components={{
                    block: {
                      normal: ({ children }) => (
                        <p className="mb-4 text-lg leading-relaxed text-foreground">
                          {children}
                        </p>
                      ),
                    },
                  }}
                />
              ))}
          </div>
        </div>
      </div>
    </section>
  );
}
