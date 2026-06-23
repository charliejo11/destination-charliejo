import { destinations } from "@/app/data/destinations";

export default function StatsStrip() {
  const totalDestinations = destinations.length;
  const atlasApproved = destinations.filter((d) => d.charliesChoice).length;
  const totalPhotos = destinations.reduce((sum, d) => sum + (d.gallery?.length || 0), 0);
  const featuredArticles = destinations.filter((d) => (d.articleUrl || d.featured) && (d.articleUrl || "").trim() !== "").length;

  return (
    <div className="mt-12 flex flex-wrap items-center justify-center gap-8">
      <div className="flex flex-col items-center">
        <div className="text-3xl font-serif text-white">{totalDestinations}</div>
        <div className="mt-1 text-xs uppercase tracking-[0.35em] text-amber-300">DESTINATIONS</div>
      </div>

      <div className="h-8 w-px bg-white/10" />

      <div className="flex flex-col items-center">
        <div className="text-3xl font-serif text-white">{atlasApproved}</div>
        <div className="mt-1 text-xs uppercase tracking-[0.35em] text-amber-300">ATLAS APPROVED</div>
      </div>

      <div className="h-8 w-px bg-white/10" />

      <div className="flex flex-col items-center">
        <div className="text-3xl font-serif text-white">{totalPhotos.toLocaleString()}</div>
        <div className="mt-1 text-xs uppercase tracking-[0.35em] text-amber-300">PHOTOS</div>
      </div>

      <div className="h-8 w-px bg-white/10" />

      <div className="flex flex-col items-center">
        <div className="text-3xl font-serif text-white">{featuredArticles}</div>
        <div className="mt-1 text-xs uppercase tracking-[0.35em] text-amber-300">FEATURED ARTICLES</div>
      </div>
    </div>
  );
}
