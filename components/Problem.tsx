import { PROBLEM_QUERYResult } from "@/sanity.types";
import { client } from "../sanity/lib/client";
import { PROBLEM_QUERY } from "@/sanity/lib/queries";
import { PortableText } from "next-sanity";

export default async function Problem() {
  const problem = await client.fetch(PROBLEM_QUERY);
  const problemData: PROBLEM_QUERYResult[0] = problem[0];
  return (
    <section
      id="challenge"
      className="relative overflow-hidden bg-slate-950 py-24 text-white"
    >
      <div
        className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(59,130,246,0.15),_transparent_55%),radial-gradient(circle_at_bottom,_rgba(16,185,129,0.12),_transparent_60%)]"
        aria-hidden="true"
      />
      <div className="absolute -left-32 top-1/3 h-64 w-64 rounded-full bg-emerald-500/20 blur-3xl" />
      <div className="absolute -right-24 -top-24 h-72 w-72 rounded-full bg-blue-500/20 blur-3xl" />

      <div className="container relative z-10 mx-auto px-4">
        <div className="mx-auto max-w-4xl text-center">          
          <div className="inline-flex items-center gap-2 rounded-full border border-blue-400/40 bg-blue-500/10 px-4 py-2 text-sm font-semibold uppercase tracking-[0.3em] text-blue-100">
            The Challenge
          </div>

          <h2 className="mt-6 text-4xl font-bold leading-snug md:text-5xl">
            <span className="bg-gradient-to-r from-blue-200 via-white to-emerald-200 bg-clip-text text-transparent">
              {problemData.hook}
            </span>
          </h2>

          <div className="mt-10 rounded-[32px] border border-white/10 bg-white/5 p-8 shadow-[0_35px_120px_-50px_rgba(15,23,42,1)] backdrop-blur">
            <div className="space-y-6 text-left text-lg leading-relaxed text-slate-100 md:text-xl">
              {problemData?.description?.map((block, index: number) => (
                <PortableText
                  key={index}
                  value={block}
                  components={{
                    block: {
                      normal: ({ children }) => (
                        <p className="text-left text-lg leading-relaxed text-slate-200">
                          {children}
                        </p>
                      ),
                    },
                    marks: {
                      strong: ({ children }) => (
                        <span className="font-semibold text-emerald-200">{children}</span>
                      ),
                    },
                    list: {
                      bullet: ({ children }) => (
                        <ul className="ml-6 list-disc space-y-2 text-left text-slate-200">{children}</ul>
                      ),
                    },
                  }}
                />
              ))}
            </div>

            <div className="mt-8 grid gap-4 rounded-2xl border border-white/10 bg-slate-900/60 p-6">
              <p className="text-sm uppercase tracking-[0.35em] text-blue-200">What&rsquo;s at stake</p>
              <p className="text-base text-slate-200">
                We help leadership teams translate ambitious missions into measurable outcomes, bridging the gap between vision, partners, and the communities they serve.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
