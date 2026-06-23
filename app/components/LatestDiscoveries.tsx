import DestinationCard from "./DestinationCard";
import { destinations } from "../data/destinations";

export default function LatestDiscoveries() {
  return (
    <section className="bg-[#050505] py-28 text-white">
      <div className="mx-auto max-w-[1700px] px-8">

        {/* Section Header */}
        <div className="mb-14 flex items-end justify-between">

          <div>
            <p className="text-sm uppercase tracking-[0.45em] text-amber-300">
              ◆ DISCOVER
            </p>

            <h2 className="mt-3 font-serif text-5xl font-bold">
              Discover Somewhere Extraordinary
            </h2>
          </div>

          <button className="hidden rounded-full border border-amber-300 px-6 py-3 text-sm uppercase tracking-[0.2em] text-amber-300 transition hover:bg-amber-300 hover:text-black md:block">
            View All
          </button>

        </div>

        <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-4">

          {destinations.map((destination) => (
            <DestinationCard
              key={destination.id}
              destination={destination}
            />
          ))}

        </div>

      </div>
    </section>
  );
}