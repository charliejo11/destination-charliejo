import Header from "@/app/components/Header";
import EditorialHero from "@/app/components/EditorialHero";
import EditorialPanel from "@/app/components/EditorialPanel";
import DestinationCard from "@/app/components/DestinationCard";
import { destinations } from "@/app/data/destinations";
import { getAtlasQuote } from "@/app/data/atlasQuotes";

export default function TravelPage() {
  const atlasQuote = getAtlasQuote("travel");
  const travelHighlights = destinations.slice(0, 4);

  return (
    <main className="bg-[#050505] text-white min-h-screen">
      <Header />

      <EditorialHero
        label="Travel"
        title="Journeys designed for atmosphere and intention."
        description="Travel experiences shaped around elegant destinations, thoughtful pacing, and a sense of discovery." 
        quote={atlasQuote}
        actions={[
          { href: "/destinations", label: "Browse Destinations" },
          { href: "/photography", label: "See Photography" },
        ]}
      />

      <section className="mx-auto max-w-7xl px-6 pb-24">
        <div className="grid gap-8 lg:grid-cols-2">
          <EditorialPanel title="Travel with intention">
            <p className="text-gray-300">
              The best journeys are measured not in distance but in feeling. These travel stories are built around places that reward your attention and slow down the rhythm of the day.
            </p>
            <p className="mt-6 text-gray-300">
              From quiet harbors to rain-dampened roads, each route is recommended for its mood, light, and unexpected moments of calm.
            </p>
          </EditorialPanel>

          <EditorialPanel title="Planning your next visit">
            <p className="text-gray-300">
              Start with destinations that feel gently cinematic. Allow time to wander, to pause at view points, and to experience each location as a series of memorable scenes.
            </p>
          </EditorialPanel>
        </div>

        <div className="mt-12">
          <h2 className="font-serif text-4xl font-semibold text-white">Travel Highlights</h2>
          <p className="mt-4 max-w-3xl text-gray-400">
            A selection of destinations that are ideal for a thoughtful travel itinerary.
          </p>

          <div className="mt-10 grid gap-8 sm:grid-cols-2 xl:grid-cols-4">
            {travelHighlights.map((destination) => (
              <DestinationCard key={destination.slug} destination={destination} />
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
