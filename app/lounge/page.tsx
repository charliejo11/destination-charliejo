import Header from "@/app/components/Header";
import Link from "next/link";
import { loungeEntries } from "@/app/data/lounge";
import { AtlasQuote } from "@/app/components/atlas";
import { getAtlasQuote } from "@/app/data/atlasQuotes";

export default function Page() {
  // Group entries by type
  const entryTypes = Array.from(new Set(loungeEntries.map((e) => e.type)));
  const entriesByType = Object.fromEntries(
    entryTypes.map((type) => [type, loungeEntries.filter((e) => e.type === type)])
  );

  const atlasQuote = getAtlasQuote("lounge-atlas-says");

  return (
    <main className="bg-[#050505] text-white min-h-screen">
      <Header />

      <section className="relative overflow-hidden pt-28">
        <div className="absolute inset-0 bg-black/70" />
        <div className="relative mx-auto max-w-7xl px-6 py-24 text-white">
          <p className="text-sm uppercase tracking-[0.35em] text-amber-300">The Lounge</p>
          <h1 className="mt-6 max-w-4xl font-serif text-5xl font-semibold leading-tight sm:text-6xl">
            Conversations, Notes & Stories from CharlieJo
          </h1>
          <p className="mt-6 max-w-3xl text-lg text-gray-300">
            Photography notes, behind-the-shot stories, region of the week, hidden gems,
            Atlas recommendations, and curated music for exploring Second Life.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-24">
        <div className="grid gap-8 lg:grid-cols-3">
          {entryTypes.map((type) => (
            <article key={type} className="rounded-3xl border border-white/10 bg-[#0b0b0b] p-8">
              <h2 className="font-serif text-2xl font-semibold text-white">{type}</h2>
              <p className="mt-4 text-gray-300">{entriesByType[type][0].subtitle || entriesByType[type][0].content.substring(0, 100)}...</p>
              <Link
                href={`#${type.toLowerCase().replace(/\s+/g, "-")}`}
                className="mt-6 inline-block rounded-full border border-amber-300 px-6 py-2 text-sm uppercase tracking-[0.25em] text-amber-300 transition hover:bg-amber-300 hover:text-black"
              >
                Read
              </Link>
            </article>
          ))}
        </div>

        <div className="mt-16 space-y-20">
          {entryTypes.map((type) => (
            <section key={type} id={type.toLowerCase().replace(/\s+/g, "-")}>
              <h3 className="font-serif text-3xl font-semibold">{type}</h3>

              {/* Special rendering for Atlas Says */}
              {type === "Atlas Says" && (
                <div className="mt-12 flex justify-center">
                  <AtlasQuote quote={atlasQuote.quote} title={atlasQuote.title} size="md" layout="stacked" />
                </div>
              )}

              <div className="mt-8 space-y-12">
                {entriesByType[type].map((entry) => (
                  <article key={entry.id} className="rounded-2xl border border-white/10 bg-[#0b0b0b] p-8">
                    <div className="flex flex-col gap-6 lg:flex-row">
                      <div className="flex-1">
                        <h4 className="font-serif text-2xl font-semibold text-white">{entry.title}</h4>
                        {entry.subtitle && <p className="mt-2 text-sm text-amber-300">{entry.subtitle}</p>}
                        {entry.date && <p className="mt-2 text-xs text-gray-500">{new Date(entry.date).toLocaleDateString()}</p>}
                        {entry.quote ? (
                          <blockquote className="mt-4 border-l-2 border-amber-300 pl-4 italic text-gray-300">
                            "{entry.quote}"
                          </blockquote>
                        ) : (
                          <p className="mt-4 leading-8 text-gray-300">{entry.content}</p>
                        )}
                        {entry.destinationSlug && (
                          <Link
                            href={`/discover/${entry.destinationSlug}`}
                            className="mt-6 inline-block rounded-full border border-amber-300 px-6 py-2 text-sm uppercase tracking-[0.25em] text-amber-300 transition hover:bg-amber-300 hover:text-black"
                          >
                            Visit Destination
                          </Link>
                        )}
                      </div>
                      {entry.image && (
                        <div className="h-64 w-full lg:h-auto lg:w-80 flex-shrink-0">
                          <img
                            src={entry.image}
                            alt={entry.title}
                            className="h-full w-full rounded-xl object-cover"
                          />
                        </div>
                      )}
                    </div>
                  </article>
                ))}
              </div>
            </section>
          ))}
        </div>
      </section>
    </main>
  );
}
