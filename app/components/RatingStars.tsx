type RatingStarsProps = {
  rating: number;
  max?: number;
  size?: "sm" | "md" | "lg";
  showValue?: boolean;
};

const sizeClasses = {
  sm: "text-base",
  md: "text-xl",
  lg: "text-2xl",
};

export default function RatingStars({
  rating,
  max = 5,
  size = "md",
  showValue = false,
}: RatingStarsProps) {
  const filledCount = Math.round(rating);

  return (
    <div className="inline-flex items-center gap-2">
      <div className="flex items-center gap-1">
        {Array.from({ length: max }).map((_, index) => {
          const filled = index < filledCount;
          return (
            <span
              key={index}
              aria-hidden="true"
              className={`${sizeClasses[size]} ${
                filled ? "text-amber-300" : "text-white/30"
              }`}
            >
              ★
            </span>
          );
        })}
      </div>
      {showValue && (
        <span className="text-sm uppercase tracking-[0.25em] text-gray-300">
          {rating.toFixed(1)} / {max}
        </span>
      )}
    </div>
  );
}
