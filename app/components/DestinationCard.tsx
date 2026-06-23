import Link from "next/link";
import Image from "next/image";
import { Destination } from "../data/destinations";

type Props = {
  destination: Destination;
};

export default function DestinationCard({ destination }: Props) {
  return (
    <Link
      href={`/discover/${destination.slug}`}
      className="group block overflow-hidden rounded-3xl bg-[#111] shadow-xl transition duration-300 hover:-translate-y-2 hover:shadow-2xl hover:shadow-black/40 focus-visible:-translate-y-2 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-300"
    >
      <div className="relative overflow-hidden">
        {destination.charliesChoice ? (
          <div className="absolute left-5 top-5 z-10 flex items-center gap-2 rounded-full border border-amber-300/25 bg-black/70 px-3 py-2 text-[11px] uppercase tracking-[0.35em] text-amber-300 shadow-sm shadow-black/20">
            <Image
              src="/atlas/atlas.png"
              alt="Atlas"
              width={16}
              height={16}
              className="w-4 h-4"
            />
            Atlas Approved
          </div>
        ) : null}

        <img
          src={destination.image}
          alt={destination.title}
          className="h-[420px] w-full object-cover transition duration-300 group-hover:scale-105"
        />
      </div>

      <div className="p-6">
        <p className="mb-2 text-xs uppercase tracking-[0.35em] text-amber-300">
          {destination.category}
        </p>

        <h3 className="font-serif text-3xl">
          {destination.title}
        </h3>

        <p className="mt-4 text-gray-400">
          {destination.description}
        </p>

        <div className="mt-8 inline-flex items-center text-amber-300 transition-transform duration-300 group-hover:translate-x-2">
          Discover →
        </div>
      </div>
    </Link>
  );
}