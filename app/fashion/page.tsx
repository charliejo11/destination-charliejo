import Header from "@/app/components/Header";
import EditorialHero from "@/app/components/EditorialHero";
import EditorialPanel from "@/app/components/EditorialPanel";
import { getAtlasQuote } from "@/app/data/atlasQuotes";

export default function FashionPage() {
  const atlasQuote = getAtlasQuote("fashion");

  return (
    <main className="bg-[#050505] text-white min-h-screen">
      <Header />

      <EditorialHero
        label="Fashion"
        title="Travel style through the lens of editorial luxury."
        description="A fashion-forward perspective on the textures, silhouettes, and atmospheres that define a refined Second Life wardrobe." 
        quote={atlasQuote}
        actions={[
          { href: "/collections", label: "See Collections" },
          { href: "/about", label: "About CharlieJo" },
        ]}
      />

      <section className="mx-auto max-w-7xl px-6 pb-24">
        <div className="grid gap-8 lg:grid-cols-2">
          <EditorialPanel title="Style as storytelling">
            <p className="text-gray-300">
              Fashion is an extension of place. These stories explore how a tailored look can mirror architecture, weather, and the mood of a journey.
            </p>
            <p className="mt-6 text-gray-300">
              From understated elegance to dramatic silhouettes, fashion here is informed by the same quiet luxury that shapes every destination.
            </p>
          </EditorialPanel>

          <EditorialPanel title="A curated wardrobe">
            <p className="text-gray-300">
              The pages that follow are designed to inspire outfits for evening promenades, gallery visits, and refined escapes across Second Life.
            </p>
          </EditorialPanel>
        </div>

        <div className="mt-12 grid gap-8 lg:grid-cols-2">
          <div className="overflow-hidden rounded-3xl border border-white/10 bg-[#111] shadow-2xl shadow-black/40">
            <img
              src="/images/destinations/grand-harbor-isle.jpg"
              alt="Fashion editorial mood"
              className="h-full w-full object-cover"
            />
          </div>
          <div className="flex flex-col justify-between rounded-3xl border border-white/10 bg-[#111] p-10 shadow-2xl shadow-black/40">
            <div>
              <p className="text-sm uppercase tracking-[0.35em] text-amber-300">Editorial</p>
              <h2 className="mt-6 font-serif text-4xl font-semibold text-white">Modern elegance for city and coast.</h2>
              <p className="mt-6 text-gray-300 leading-8">
                Quiet luxury is never loud. It is composed, intentional, and suited to the environments shown in our destination stories.
              </p>
            </div>
            <div className="mt-8 text-sm uppercase tracking-[0.35em] text-gray-400">
              Thoughtful silhouettes. Rich textures. Deliberate details.
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
