import Header from "@/app/components/Header";
import EditorialHero from "@/app/components/EditorialHero";
import EditorialPanel from "@/app/components/EditorialPanel";
import DestinationCard from "@/app/components/DestinationCard";
import { destinations } from "@/app/data/destinations";
import { getAtlasQuote } from "@/app/data/atlasQuotes";

export default function DestinationsPage() {
  const atlasQuote = getAtlasQuote("destinations");

  return (
    <main className="bg-[#050505] text-white min-h-screen">
      <Header />

      <EditorialHero
        label="Destinations"
        title="The world’s most captivating destinations."
        description="A carefully curated collection of Second Life places selected for their story, atmosphere, and visual elegance."
        quote={atlasQuote}
        actions={[
          { href: "/explore", label: "Browse Explore" },
          { href: "/collections", label: "View Collections" },
        ]}
      />

      <section className="mx-auto max-w-7xl px-6 pb-24">
        <EditorialPanel title="A destination for every mood">
          <p className="text-gray-300">
            Each destination is chosen with an eye for light, composition, and atmosphere. From rain-kissed promenades to timeless harbors, this is where travel and storytelling meet.
          </p>
        </EditorialPanel>

        <div className="mt-12 grid gap-8 sm:grid-cols-2 xl:grid-cols-4">
          {destinations.map((destination) => (
            <DestinationCard key={destination.slug} destination={destination} />
          ))}
        </div>

        <div className="mt-20 grid gap-8 lg:grid-cols-2">
          <EditorialPanel title="How we choose destinations" className="lg:col-span-1">
            <p className="text-gray-300">
              The most memorable places are those that feel lived-in, carefully composed, and quietly grand. CharlieJo seeks destinations with character, texture, and a sense of calm luxury.
            </p>
            <p className="mt-6 text-gray-300">
              Every entry is visited, photographed, and experienced before it earns a place here. The result is a collection that feels editorial, intimate, and endlessly inspiring.
            </p>
          </EditorialPanel>

          <EditorialPanel title="Traveler’s notes" className="lg:col-span-1">
            <p className="text-gray-300">
              These destinations are not only beautiful — they are places meant to be experienced slowly. Expect quiet corners, atmospheric lighting, and moments designed for your camera and your curiosity.
            </p>
          </EditorialPanel>
        </div>
      </section>
    </main>
  );
}
