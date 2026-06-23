import RatingStars from "@/app/components/RatingStars";
import { AtlasQuote } from "@/app/components/atlas";
import { DestinationReview } from "@/app/data/destinations";

type ReviewCardProps = {
  review: DestinationReview;
};

export default function ReviewCard({ review }: ReviewCardProps) {
  return (
    <section className="grid gap-8 xl:grid-cols-[1.05fr_0.95fr]">
      <div className="rounded-[2rem] border border-white/10 bg-[#0b0b0b]/95 p-8 shadow-2xl shadow-black/30">
        <div className="mb-8 flex flex-col gap-4">
          <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="text-xs uppercase tracking-[0.35em] text-amber-300">Atlas Rating</p>
              <p className="mt-3 text-5xl font-serif font-semibold text-white">
                {review.atlasRating.toFixed(1)}
              </p>
            </div>
            <RatingStars rating={review.atlasRating} size="lg" showValue />
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            <div className="rounded-3xl border border-white/10 bg-white/5 p-5">
              <p className="text-xs uppercase tracking-[0.35em] text-amber-300">Photography</p>
              <div className="mt-3 flex items-center justify-between gap-4">
                <span className="text-xl font-semibold text-white">{review.photography}</span>
                <RatingStars rating={review.photography} size="sm" />
              </div>
            </div>

            <div className="rounded-3xl border border-white/10 bg-white/5 p-5">
              <p className="text-xs uppercase tracking-[0.35em] text-amber-300">Atmosphere</p>
              <div className="mt-3 flex items-center justify-between gap-4">
                <span className="text-xl font-semibold text-white">{review.atmosphere}</span>
                <RatingStars rating={review.atmosphere} size="sm" />
              </div>
            </div>

            <div className="rounded-3xl border border-white/10 bg-white/5 p-5">
              <p className="text-xs uppercase tracking-[0.35em] text-amber-300">Exploration</p>
              <div className="mt-3 flex items-center justify-between gap-4">
                <span className="text-xl font-semibold text-white">{review.exploration}</span>
                <RatingStars rating={review.exploration} size="sm" />
              </div>
            </div>

            <div className="rounded-3xl border border-white/10 bg-white/5 p-5">
              <p className="text-xs uppercase tracking-[0.35em] text-amber-300">Accessibility</p>
              <div className="mt-3 flex items-center justify-between gap-4">
                <span className="text-xl font-semibold text-white">{review.accessibility}</span>
                <RatingStars rating={review.accessibility} size="sm" />
              </div>
            </div>
          </div>
        </div>

        <div className="grid gap-4">
          <div className="rounded-3xl border border-white/10 bg-white/5 p-6">
            <p className="text-xs uppercase tracking-[0.35em] text-amber-300">Best time to visit</p>
            <p className="mt-3 text-white">{review.bestTimeToVisit}</p>
          </div>

          <div className="rounded-3xl border border-white/10 bg-white/5 p-6">
            <p className="text-xs uppercase tracking-[0.35em] text-amber-300">Recommended for</p>
            <div className="mt-3 flex flex-wrap gap-2">
              {review.recommendedFor.map((item) => (
                <span
                  key={item}
                  className="rounded-full border border-amber-300/25 bg-white/5 px-4 py-2 text-xs uppercase tracking-[0.25em] text-amber-200"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="space-y-6">
        <div className="rounded-[2rem] border border-white/10 bg-[#0b0b0b]/95 p-8 shadow-2xl shadow-black/30">
          <p className="text-xs uppercase tracking-[0.35em] text-amber-300">CharlieJo&apos;s Notes</p>
          <p className="mt-4 text-gray-300 leading-8">{review.charliesNotes}</p>
        </div>

        <div className="rounded-[2rem] border border-white/10 bg-[#0b0b0b]/95 p-8 shadow-2xl shadow-black/30">
          <p className="text-xs uppercase tracking-[0.35em] text-amber-300">Destination Facts</p>
          <ul className="mt-5 space-y-3 text-gray-300">
            {review.facts.map((fact) => (
              <li key={fact} className="rounded-2xl border border-white/10 bg-white/5 px-4 py-3">
                {fact}
              </li>
            ))}
          </ul>
        </div>

        <div className="rounded-[2rem] border border-white/10 bg-[#0b0b0b]/95 p-8 shadow-2xl shadow-black/30">
          <AtlasQuote
            quote={review.atlasQuote}
            title="Atlas Says"
            size="md"
            accessory="map"
            layout="inline"
            position="left"
            bubbleClassName="max-w-full"
          />
        </div>
      </div>
    </section>
  );
}
