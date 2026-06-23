import StatsStrip from "./StatsStrip";

export default function Hero() {
  return (
    <section
      className="relative flex min-h-screen items-center justify-center bg-cover bg-center"
      style={{
        backgroundImage: "url('/images/hero/cover.jpg')",
      }}
    >
      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/35 to-black/70" />

      {/* Hero Content */}
      <div className="relative z-10 max-w-4xl px-8 text-center text-white">

        <p className="text-sm uppercase tracking-[0.5em] text-amber-300">
          SECOND LIFE ◆ TRAVEL &amp; LIFESTYLE
        </p>

        <h1 className="mt-8 font-serif text-6xl font-bold leading-tight md:text-8xl">
          Destination CharlieJo
        </h1>

        <p className="mx-auto mt-8 max-w-3xl text-xl leading-9 text-gray-200">
          Discover breathtaking destinations, hidden gems, luxury escapes,
          fashion, photography, nightlife, and unforgettable experiences
          across the world of Second Life.
        </p>

        <button className="mt-14 rounded-full border border-amber-300 bg-black/30 px-12 py-4 text-sm uppercase tracking-[0.25em] text-amber-300 transition duration-300 hover:bg-amber-300 hover:text-black">
          Explore Destinations
        </button>

        {/* Stats Strip */}
        <div className="mx-auto mt-8 w-full max-w-4xl px-4">
          {/* lazy import component to avoid changing layout significantly */}
          <StatsStrip />
        </div>

      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 text-center text-white/80 animate-bounce">

        <div className="text-2xl">⌄</div>

        <p className="mt-2 text-xs uppercase tracking-[0.35em]">
          Scroll
        </p>

      </div>
    </section>
  );
}