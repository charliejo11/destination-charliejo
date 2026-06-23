import Header from "@/app/components/Header";
import DestinationCard from "@/app/components/DestinationCard";
import { getAtlasQuote } from "@/app/data/atlasQuotes";
import { destinations } from "@/app/data/destinations";
import AtlasQuote from "@/app/components/atlas/AtlasQuote";

const collectionMeta: Record<string, { title: string; description: string }> = {
  photography: {
    title: "Photography",
    description:
      "A curated collection for the most photogenic places worth wandering with your lens.",
  },
  historic: {
    title: "Historic",
    description:
      "Timeless architecture, quiet streets, and the kind of places that feel rooted in story.",
  },
  nature: {
    title: "Nature",
    description:
      "Lush landscapes, hidden trails, and gentle environments made for slow exploration.",
  },
  rain: {
    title: "Rain",
    description:
      "Atmospheric destinations where soft weather turns every scene into a memory.",
  },
  waterfront: {
    title: "Waterfront",
    description:
      "Elegant harbors, quiet docks, and serene shorelines in Second Life.",
  },
  fantasy: {
    title: "Fantasy",
    description:
      "Otherworldly escapes, enchanted details, and places that invite imagination.",
  },
  "editors-choice": {
    title: "Editor's Choice",
    description:
      "Destinations hand-selected for their luxury appeal, storytelling, and refined atmosphere.",
  },
  "atlas-approved": {
    title: "Atlas Approved",
    description:
      "Places that have earned Atlas's seal of approval for exceptional quality and charm.",
  },
};

const preferredCollections = [
  "photography",
  "historic",
  "nature",
  "rain",
  "waterfront",
  "fantasy",
  "editors-choice",
  "atlas-approved",
];

function getCollections() {
  const tags = new Set<string>();
  destinations.forEach((destination) => {
    destination.tags.forEach((tag) => tags.add(tag.toLowerCase()));
  });

  const collections = Array.from(tags).sort((a, b) => {
    const aIndex = preferredCollections.indexOf(a);
    const bIndex = preferredCollections.indexOf(b);

    if (aIndex !== -1 || bIndex !== -1) {
      return (aIndex === -1 ? Infinity : aIndex) - (bIndex === -1 ? Infinity : bIndex);
    }

    return a.localeCompare(b);
  });

  const autoCollections = collections.map((slug) => ({
    slug,
    title: collectionMeta[slug]?.title || slug.replace(/-/g, " ").replace(/\b\w/g, (match) => match.toUpperCase()),
    description:
      collectionMeta[slug]?.description ||
      `A curated selection of destinations tagged with ${slug}.`,
    destinations: destinations.filter((destination) =>
      destination.tags.some((tag) => tag.toLowerCase() === slug)
    ),
  })).filter((collection) => collection.destinations.length > 0);

  const editorsChoice = {
    slug: "editors-choice",
    title: collectionMeta["editors-choice"].title,
    description: collectionMeta["editors-choice"].description,
    destinations: destinations.filter((destination) => destination.charliesChoice),
  };

  const atlasApproved = {
    slug: "atlas-approved",
    title: collectionMeta["atlas-approved"].title,
    description: collectionMeta["atlas-approved"].description,
    destinations: destinations.filter((destination) => destination.charliesChoice),
  };

  const finalCollections = [
    ...autoCollections.filter((collection) => collection.slug !== "editors-choice" && collection.slug !== "atlas-approved"),
    editorsChoice,
    atlasApproved,
  ];

  return finalCollections;
}

export default function CollectionsPage() {
  const collections = getCollections();
  const pageQuote = getAtlasQuote("collections");

  return (
    <main className="bg-[#050505] text-white min-h-screen">
      <Header />

      <section className="relative overflow-hidden pt-28">
        <div className="absolute inset-0 bg-black/70" />
        <div className="relative mx-auto max-w-7xl px-6 py-24 text-white">
          <p className="text-sm uppercase tracking-[0.35em] text-amber-300">Collections</p>
          <h1 className="mt-6 max-w-4xl font-serif text-5xl font-semibold leading-tight sm:text-6xl">
            Editorial Collections by Atlas
          </h1>
          <p className="mt-6 max-w-3xl text-lg text-gray-300">
            Discover elegant destination collections generated automatically from tags and curated categories.
          </p>

          <div className="mt-12 rounded-[2rem] border border-white/10 bg-[#0b0b0b]/95 p-8 shadow-2xl shadow-black/30">
            <AtlasQuote
              quote={pageQuote.quote}
              title={pageQuote.title}
              mood={pageQuote.mood}
              accessory={pageQuote.accessory}
              size="md"
              layout="inline"
              position="right"
              bubbleClassName="max-w-2xl"
            />
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-24">
        <div className="space-y-20">
          {collections.map((collection) => (
            <div key={collection.slug} className="rounded-[2rem] border border-white/10 bg-[#0b0b0b]/95 p-8 shadow-2xl shadow-black/30">
              <div className="mb-10 grid gap-6 lg:grid-cols-[1.5fr_1fr] lg:items-center">
                <div>
                  <p className="text-xs uppercase tracking-[0.35em] text-amber-300">
                    {collection.title}
                  </p>
                  <h2 className="mt-4 font-serif text-4xl font-semibold text-white">
                    {collection.title}
                  </h2>
                  <p className="mt-4 max-w-2xl text-gray-300">
                    {collection.description}
                  </p>
                </div>
                <div className="flex justify-start lg:justify-end">
                  <div className="w-full max-w-md">
                    <AtlasQuote
                      quote={getAtlasQuote(collection.slug).quote}
                      title={getAtlasQuote(collection.slug).title}
                      mood={getAtlasQuote(collection.slug).mood}
                      accessory={getAtlasQuote(collection.slug).accessory}
                      size="sm"
                      layout="inline"
                      position="right"
                      bubbleClassName="max-w-full"
                    />
                  </div>
                </div>
              </div>

              <div className="grid gap-8 sm:grid-cols-2 xl:grid-cols-4">
                {collection.destinations.map((destination) => (
                  <DestinationCard key={destination.slug} destination={destination} />
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
