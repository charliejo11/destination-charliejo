import AtlasSeal from "@/app/components/ui/AtlasSeal";
import { AtlasFloating } from "@/app/components/atlas";

export default function EditorsChoice() {
  return (
    <section className="bg-[#0a0a0a] py-28 text-white">
      <div className="mx-auto max-w-[1700px] px-8">

        {/* Section Heading */}
        <div className="mb-8 flex flex-col items-start gap-6 lg:flex-row lg:items-end lg:justify-between">
          <div className="flex flex-col gap-4">
            <AtlasSeal />

            <h2 className="mt-3 font-serif text-6xl font-bold">
              Grand Harbor Isle
            </h2>

            <p className="mt-3 max-w-2xl text-lg text-gray-400">
              Personally explored, photographed, and recommended.
            </p>
          </div>

          <div className="hidden lg:block">
            <AtlasFloating size="sm" showBalloon={false} />
          </div>
        </div>

        {/* Hero Image */}
        <div className="overflow-hidden rounded-3xl shadow-2xl">
          <img
            src="/images/destinations/grand-harbor-isle.jpg"
            alt="Grand Harbor Isle"
            className="h-[750px] w-full object-cover transition duration-700 hover:scale-105"
          />
        </div>

        {/* Story */}
        <div className="mx-auto mt-12 max-w-4xl">

          <div className="mb-8 flex flex-wrap gap-3">

            <span className="rounded-full border border-amber-300 px-4 py-2 text-xs uppercase tracking-[0.25em] text-amber-300">
              Historic Waterfront
            </span>

            <span className="rounded-full border border-amber-300 px-4 py-2 text-xs uppercase tracking-[0.25em] text-amber-300">
              Photography</span>

            <span className="rounded-full border border-amber-300 px-4 py-2 text-xs uppercase tracking-[0.25em] text-amber-300">
              Exploration
            </span>

          </div>

          <p className="text-xl leading-10 text-gray-300">
            Grand Harbor Isle captures the charm of a timeless waterfront,
            inviting visitors to slow down and wander through beautifully
            crafted streets, elegant architecture, and peaceful harbors.
            Whether you're searching for your next photography location or
            simply looking to enjoy a relaxing afternoon, this destination
            rewards every visit.
          </p>

          <div className="mt-12 flex flex-wrap gap-6">

            <button className="rounded-full bg-amber-300 px-10 py-4 font-semibold text-black transition hover:bg-white">
              Read the Story
            </button>

            <button className="rounded-full border border-white/20 px-10 py-4 transition hover:border-amber-300 hover:text-amber-300">
              Explore
            </button>

          </div>

        </div>

      </div>
    </section>
  );
}