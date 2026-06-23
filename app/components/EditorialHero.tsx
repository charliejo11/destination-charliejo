import { AtlasQuoteData } from "@/app/data/atlasQuotes";
import AtlasQuote from "@/app/components/atlas/AtlasQuote";

type Action = {
  href: string;
  label: string;
};

type EditorialHeroProps = {
  label: string;
  title: string;
  description: string;
  quote: AtlasQuoteData;
  actions: Action[];
};

export default function EditorialHero({ label, title, description, quote, actions }: EditorialHeroProps) {
  return (
    <section className="relative overflow-hidden pt-28">
      <div className="absolute inset-0 bg-black/70" />
      <div className="relative mx-auto max-w-7xl px-6 py-24 text-white">
        <p className="text-sm uppercase tracking-[0.35em] text-amber-300">{label}</p>
        <h1 className="mt-6 max-w-4xl font-serif text-5xl font-semibold leading-tight sm:text-6xl">
          {title}
        </h1>
        <p className="mt-6 max-w-3xl text-lg text-gray-300">
          {description}
        </p>

        <div className="mt-16 grid gap-10 lg:grid-cols-[1.2fr_0.8fr] lg:items-start">
          <div className="grid gap-6">
            <div className="flex flex-wrap gap-4">
              {actions.map((action) => (
                <a
                  key={action.href}
                  href={action.href}
                  className="inline-flex rounded-full border border-amber-300 px-6 py-3 text-sm uppercase tracking-[0.25em] text-amber-300 transition hover:bg-amber-300 hover:text-black"
                >
                  {action.label}
                </a>
              ))}
            </div>

            <div className="rounded-[2rem] border border-white/10 bg-[#0b0b0b]/95 p-8 shadow-2xl shadow-black/30">
              <AtlasQuote
                quote={quote.quote}
                title={quote.title}
                mood={quote.mood}
                accessory={quote.accessory}
                size="md"
                layout="inline"
                position="right"
                bubbleClassName="max-w-xl"
              />
            </div>
          </div>

          <div className="rounded-[2rem] border border-white/10 bg-[#111] p-8 shadow-2xl shadow-black/30">
            <div className="space-y-6">
              <div className="rounded-3xl border border-white/10 bg-[#050505] p-6">
                <p className="text-xs uppercase tracking-[0.35em] text-amber-300">Editorial note</p>
                <p className="mt-4 text-gray-300 leading-8">
                  Stories here are designed to feel like pages from a luxury travel magazine: thoughtful, carefully composed, and rich in atmosphere.
                </p>
              </div>

              <div className="rounded-3xl border border-white/10 bg-[#050505] p-6">
                <p className="text-xs uppercase tracking-[0.35em] text-amber-300">Mood</p>
                <p className="mt-4 text-gray-300 leading-8">
                  Quiet luxury, slow discovery, and the curated feeling of a destination worth returning to.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
