import Header from "@/app/components/Header";
import EditorialHero from "@/app/components/EditorialHero";
import EditorialPanel from "@/app/components/EditorialPanel";
import DestinationCard from "@/app/components/DestinationCard";
import { destinations } from "@/app/data/destinations";
import { getAtlasQuote } from "@/app/data/atlasQuotes";

export default function PhotographyPage() {
  const atlasQuote = getAtlasQuote("photography");
  const photographyDestinations = destinations.filter((destination) =>
    destination.tags.some((tag) => tag.toLowerCase() === "photography")
  );

  return (
    <main className="bg-[#050505] text-white min-h-screen">
      <Header />

      <EditorialHero
        label="Photography"
        title="Beautiful scenes for the discerning lens."
        description="A collection of destinations chosen for their light, texture, and camera-ready composition." 
        quote={atlasQuote}
        actions={[
          { href: "/explore", label: "Explore Destinations" },
          { href: "/collections", label: "See Collections" },
        ]}
      />

      <section className="mx-auto max-w-7xl px-6 pb-24">
        <div className="grid gap-8 lg:grid-cols-2">
          <EditorialPanel title="Picture-perfect places">
            <p className="text-gray-300">
              Photography is about more than light and framing — it is the way a place makes you feel. These destinations were selected for their ability to hold a moment and invite you to return.
            </p>
            <p className="mt-6 text-gray-300">
              Whether you are working with natural light, evening shadows, or reflective water, these locations offer a refined gallery of scenes that are made to be captured.
            </p>
          </EditorialPanel>

          <EditorialPanel title="Visual storytelling">
            <p className="text-gray-300">
              Each place in this collection has distinctive details: architectural line, atmospheric weather, or a palette that feels intentional. These are the destinations where every frame tells a story.
            </p>
          </EditorialPanel>
        </div>

        <div className="mt-12 grid gap-8 sm:grid-cols-2 xl:grid-cols-4">
          {photographyDestinations.map((destination) => (
            <DestinationCard key={destination.slug} destination={destination} />
          ))}
        </div>
      </section>
    </main>
  );
}
