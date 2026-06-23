import Header from "@/app/components/Header";
import { Atlas } from "@/app/components/atlas";
import PublicationCard from "@/app/components/PublicationCard";
import EditorialPortfolioBanner from "@/app/components/EditorialPortfolioBanner";
import { getAtlasQuote } from "@/app/data/atlasQuotes";

export default function AboutPage() {
  const atlasQuote = getAtlasQuote("about");

  return (
    <main className="bg-[#050505] text-white min-h-screen">
      <Header />

      {/* Hero Section */}
      <section className="relative overflow-hidden pt-28">
        <div className="absolute inset-0 bg-black/70" />
        <div className="relative mx-auto max-w-7xl px-6 py-32 text-white">
          <p className="text-sm uppercase tracking-[0.35em] text-amber-300">About</p>
          <h1 className="mt-6 max-w-4xl font-serif text-6xl font-semibold leading-tight sm:text-7xl">
            Destination CharlieJo
          </h1>
          <p className="mt-8 max-w-3xl text-xl leading-9 text-gray-300">
            A carefully curated editorial home for travel, photography, and lifestyle in Second Life.
          </p>
        </div>
      </section>

      {/* CharlieJo Introduction - Full Width */}
      <section className="border-t border-white/10 bg-[#0a0a0a]">
        <div className="mx-auto max-w-7xl px-6 py-32">
          <div className="grid gap-16 lg:grid-cols-2 lg:items-center">
            <div>
              <picture>
                <source srcSet="/images/author/charliejo.jpg" type="image/jpeg" />
                <img
                  src="/images/author/charliejo.svg"
                  alt="CharlieJo"
                  className="rounded-2xl w-full object-cover shadow-2xl shadow-black/50"
                />
              </picture>
            </div>

            <div className="space-y-8">
              <div>
                <p className="text-sm uppercase tracking-[0.35em] text-amber-300">Meet</p>
                <h2 className="mt-4 font-serif text-5xl font-semibold text-white">CharlieJo</h2>
              </div>

              <div className="space-y-6 text-lg leading-8 text-gray-300">
                <p>
                  CharlieJo is an explorer, photographer, and storyteller. For years, she has sought out the most atmospheric corners of Second Life — places that feel lived-in, carefully composed, and quietly luxurious.
                </p>
                <p>
                  This site is a personal curation of those discoveries: destinations worth visiting, light worth capturing, and moments worth remembering. Every entry reflects a deliberate eye for beauty, atmosphere, and editorial integrity.
                </p>
              </div>

              <div className="pt-4">
                <p className="text-sm uppercase tracking-[0.35em] text-amber-300">Featured in</p>
                <p className="mt-4 text-gray-300">SL Insider · Primfeed · PlayDolls</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Publications Section - Full Width */}
      <section className="border-t border-white/10 bg-[#050505]">
        <div className="mx-auto max-w-7xl px-6 py-32">
          <div className="mb-16">
            <p className="text-sm uppercase tracking-[0.35em] text-amber-300">Publications</p>
            <h2 className="mt-4 font-serif text-5xl font-semibold text-white">Selected Editorial Work</h2>
            <p className="mt-6 max-w-3xl text-lg text-gray-300">
              Photography and editorial features across Second Life's most respected publications and platforms.
            </p>
          </div>

          <div className="grid gap-8 lg:grid-cols-3">
            <PublicationCard
              title="Region Spotlight"
              publication="SL Insider"
              year="2026"
              description="Feature on emerging destinations and architectural design in Second Life."
              featured
            />
            <PublicationCard title="Timeless Harbor" publication="Primfeed" year="2025" />
            <PublicationCard title="Editorial Series" publication="PlayDolls" year="2025" />
            <PublicationCard title="Coastal Escapes" publication="SL Insider" year="2024" />
            <PublicationCard title="Light Studies" publication="Destination CharlieJo" year="2024" />
          </div>
        </div>
      </section>

      {/* Editorial Portfolio Banner */}
      <EditorialPortfolioBanner />

      {/* Atlas Introduction - Full Width */}
      <section className="border-t border-white/10 bg-[#0a0a0a]">
        <div className="mx-auto max-w-7xl px-6 py-32">
          <div className="grid gap-16 lg:grid-cols-2 lg:items-center">
            <div className="order-2 lg:order-1">
              <div className="space-y-8">
                <div>
                  <p className="text-sm uppercase tracking-[0.35em] text-amber-300">Meet</p>
                  <h2 className="mt-4 font-serif text-5xl font-semibold text-white">Atlas</h2>
                  <p className="mt-2 text-amber-300 uppercase tracking-[0.2em] text-sm">Chief Explorer</p>
                </div>

                <div className="space-y-6 text-lg leading-8 text-gray-300">
                  <p>
                    Atlas is the editorial voice and companion throughout Destination CharlieJo. Curious, observant, and endlessly enthusiastic, Atlas offers perspective on destinations, mood, and the stories that make travel meaningful.
                  </p>
                  <p className="italic">
                    "{atlasQuote.quote}"
                  </p>
                </div>
              </div>
            </div>

            <div className="order-1 lg:order-2 flex items-center justify-center lg:justify-end">
              <div className="flex flex-col items-center gap-8">
                <Atlas size="lg" showBalloon={false} />
                <div className="rounded-[1.4rem] border border-amber-300/30 bg-amber-50 px-8 py-6 shadow-sm max-w-sm">
                  <p className="text-xs uppercase tracking-[0.35em] text-amber-700">Atlas Says</p>
                  <p className="mt-4 font-serif text-lg leading-7 text-amber-900 italic">
                    "Charlie tells the stories... I make sure she doesn't miss the interesting roads."
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Social & Connect - Full Width */}
      <section className="border-t border-white/10 bg-[#050505]">
        <div className="mx-auto max-w-7xl px-6 py-32">
          <div className="space-y-8">
            <div>
              <p className="text-sm uppercase tracking-[0.35em] text-amber-300">Connect</p>
              <h2 className="mt-4 font-serif text-4xl font-semibold text-white">Follow the Journey</h2>
            </div>

            <div className="grid gap-8 lg:grid-cols-4">
              <a href="#" className="group rounded-xl border border-white/10 bg-[#111] p-8 transition hover:border-amber-300/50 hover:bg-[#0b0b0b]">
                <p className="uppercase text-xs tracking-[0.35em] text-gray-400 group-hover:text-amber-300">Instagram</p>
                <p className="mt-4 text-gray-300">Photography & stories</p>
              </a>
              <a href="#" className="group rounded-xl border border-white/10 bg-[#111] p-8 transition hover:border-amber-300/50 hover:bg-[#0b0b0b]">
                <p className="uppercase text-xs tracking-[0.35em] text-gray-400 group-hover:text-amber-300">Flickr</p>
                <p className="mt-4 text-gray-300">Full photo archive</p>
              </a>
              <a href="#" className="group rounded-xl border border-white/10 bg-[#111] p-8 transition hover:border-amber-300/50 hover:bg-[#0b0b0b]">
                <p className="uppercase text-xs tracking-[0.35em] text-gray-400 group-hover:text-amber-300">SL Insider</p>
                <p className="mt-4 text-gray-300">Featured articles</p>
              </a>
              <a href="#" className="group rounded-xl border border-white/10 bg-[#111] p-8 transition hover:border-amber-300/50 hover:bg-[#0b0b0b]">
                <p className="uppercase text-xs tracking-[0.35em] text-gray-400 group-hover:text-amber-300">Primfeed</p>
                <p className="mt-4 text-gray-300">Community updates</p>
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
