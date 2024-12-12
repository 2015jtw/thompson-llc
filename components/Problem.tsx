import { PROBLEM_QUERYResult } from "@/sanity.types";
import { client } from "../sanity/lib/client";
import { PROBLEM_QUERY } from "@/sanity/lib/queries";
import { PortableText } from "next-sanity";

export default async function Problem() {
  const problem = await client.fetch(PROBLEM_QUERY);
  const problemData: PROBLEM_QUERYResult[0] = problem[0];
  return (
    <section id="problem" className="py-20 bg-gray-100">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8 text-primary">
          {problemData.hook}
        </h2>
        {problemData &&
          problemData.description?.map((block, index: number) => (
            <PortableText
              key={index}
              value={block}
              components={{
                block: {
                  normal: ({ children }) => (
                    <p className="text-lg text-center text-foreground max-w-3xl mx-auto">
                      {children}
                    </p>
                  ),
                },
              }}
            />
          ))}
      </div>
    </section>
  );
}
