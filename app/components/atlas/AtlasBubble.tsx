type AtlasBubbleProps = {
  quote: string;
  title?: string;
  position?: "left" | "right" | "center";
  className?: string;
};

export default function AtlasBubble({ quote, title, position = "right", className = "" }: AtlasBubbleProps) {
  const positionClasses = {
    left: "mr-4",
    right: "ml-4",
    center: "mx-auto",
  };

  const tailClasses = {
    left: "absolute -right-3 top-6 w-0 h-0 border-l-8 border-t-4 border-b-4 border-l-amber-100 border-t-transparent border-b-transparent",
    right: "absolute -left-3 top-6 w-0 h-0 border-r-8 border-t-4 border-b-4 border-r-amber-100 border-t-transparent border-b-transparent",
    center: "hidden",
  };

  return (
    <div className={`rounded-[2rem] border-2 border-amber-300/30 bg-amber-50 px-6 py-8 shadow-2xl shadow-black/20 ${positionClasses[position]} ${className}`}>
      <div className="relative">
        {/* Tail */}
        <div className={tailClasses[position]} />

        {/* Content */}
        {title && <p className="text-xs uppercase tracking-[0.35em] text-amber-700">{title}</p>}
        <p className="mt-4 font-serif text-xl leading-9 text-amber-900 italic">{quote}</p>
      </div>
    </div>
  );
}
