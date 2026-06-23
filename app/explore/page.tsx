"use client";

import { useMemo, useState } from "react";
import Header from "@/app/components/Header";
import DestinationCard from "@/app/components/DestinationCard";
import { AtlasQuote } from "@/app/components/atlas";
import { destinations } from "@/app/data/destinations";
import { getAtlasQuote } from "@/app/data/atlasQuotes";

// Primary preferred order for filters — keep these first if present
const preferred = [
  "Photography",
  "Historic",
  "Nature",
  "Rain",
  "Fantasy",
  "Waterfront",
];

type Filter = string;

export default function ExplorePage() {
  const [search, setSearch] = useState("");
  const [activeFilter, setActiveFilter] = useState<Filter>("All");

  const atlasQuote = getAtlasQuote("explore");

  const filters = useMemo(() => {
    const set = new Set<string>();
    // include tags
    destinations.forEach((d) => d.tags.forEach((t) => set.add(t)));
    // include category tokens (split on non-word)
    destinations.forEach((d) =>
      d.category.split(/[^A-Za-z0-9]+/).forEach((tok) => {
        if (tok && tok.length > 1) set.add(tok);
      })
    );

    // Build ordered list: All, preferred (if present), then the rest alpha
    const rest = Array.from(set).filter((s) => !preferred.includes(s));
    rest.sort((a, b) => a.localeCompare(b));

    const ordered = ["All", ...preferred.filter((p) => set.has(p)), ...rest];
    return ordered;
  }, []);

  const filteredDestinations = useMemo(() => {
    const normalizedSearch = search.trim().toLowerCase();

    return destinations.filter((destination) => {
      const matchesSearch =
        normalizedSearch.length === 0 ||
        [
          destination.title,
          destination.owner,
          destination.category,
          ...destination.tags,
        ]
          .join(" ")
          .toLowerCase()
          .includes(normalizedSearch);

      const matchesFilter =
        activeFilter === "All" ||
        destination.category.toLowerCase().includes(activeFilter.toLowerCase()) ||
        destination.tags.some((tag) => tag.toLowerCase() === activeFilter.toLowerCase());

      return matchesSearch && matchesFilter;
    });
  }, [activeFilter, search]);

  return (
    <main className="bg-[#050505] text-white">
      <Header />

      <section className="relative overflow-hidden pt-28">
        <div className="absolute inset-0 bg-black/70" />
        <div className="relative mx-auto max-w-7xl px-6 py-24 text-white">
          <p className="text-sm uppercase tracking-[0.35em] text-amber-300">
            Explore Second Life
          </p>
          <h1 className="mt-6 max-w-4xl font-serif text-5xl font-semibold leading-tight sm:text-6xl">
            Explore Second Life
          </h1>
          <p className="mt-6 max-w-3xl text-lg text-gray-300">
            Discover extraordinary destinations personally explored and photographed by CharlieJo.
          </p>

          <div className="mt-16 grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-start">
            <div className="grid gap-4">
              <label className="relative block w-full">
                <span className="sr-only">Search destinations</span>
                <input
                  value={search}
                  onChange={(event) => setSearch(event.target.value)}
                  placeholder="Search destinations, owners, tags, categories"
                  className="w-full rounded-3xl border border-white/10 bg-[#111] px-6 py-4 text-white placeholder:text-gray-500 focus:border-amber-300 focus:outline-none"
                />
              </label>

              <div className="flex flex-wrap gap-3">
                {filters.map((filter) => (
                  <button
                    key={filter}
                    type="button"
                    onClick={() => setActiveFilter(filter)}
                    className={`rounded-full px-5 py-3 text-sm uppercase tracking-[0.3em] transition ${
                      activeFilter === filter
                        ? "bg-amber-300 text-black"
                        : "border border-white/10 bg-white/5 text-white hover:bg-white/10"
                    }`}
                  >
                    {filter}
                  </button>
                ))}
              </div>
            </div>

            <div className="flex justify-center lg:justify-end">
              <div className="w-full max-w-[360px]">
                <div className="rounded-[2rem] border border-white/10 bg-[#0b0b0b]/95 p-8 shadow-2xl shadow-black/30 lg:p-10">
                  <AtlasQuote
                    quote={atlasQuote.quote}
                    title={atlasQuote.title}
                    mood={atlasQuote.mood}
                    accessory={atlasQuote.accessory}
                    size="lg"
                    layout="inline"
                    position="right"
                    bubbleClassName="max-w-xl"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-20">
        <div className="mb-10 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <p className="text-sm uppercase tracking-[0.35em] text-amber-300">Results</p>
            <h2 className="mt-3 font-serif text-4xl font-semibold">
              {filteredDestinations.length} destinations found
            </h2>
          </div>
        </div>

        {filteredDestinations.length === 0 ? (
          <div className="rounded-3xl border border-white/10 bg-[#111] px-8 py-16 text-center text-lg text-gray-300">
            No destinations found.
          </div>
        ) : (
          <div className="grid gap-8 sm:grid-cols-2 xl:grid-cols-4">
            {filteredDestinations.map((destination) => (
              <DestinationCard key={destination.slug} destination={destination} />
            ))}
          </div>
        )}
      </section>
    </main>
  );
}
