import Link from "next/link";

export default function Header() {
  return (
    <header className="fixed top-0 left-0 z-50 w-full border-b border-white/10 bg-black/30 backdrop-blur-xl">
      <div className="mx-auto flex flex-wrap items-center justify-between gap-4 px-10 py-6 sm:flex-nowrap">

        {/* Brand */}
        <div className="flex flex-col">
          <h1 className="font-serif text-3xl font-bold tracking-wide text-white">
            Destination CharlieJo
          </h1>

          <p className="mt-1 text-xs uppercase tracking-[0.45em] text-amber-300">
            SECOND LIFE ◆ TRAVEL &amp; LIFESTYLE
          </p>
        </div>

        {/* Navigation */}
        <nav className="flex flex-wrap items-center gap-4 lg:gap-10">

          <Link
            href="/"
            className="text-sm uppercase tracking-[0.25em] text-white transition hover:text-amber-300"
          >
            Home
          </Link>

          <Link
            href="/explore"
            className="text-sm uppercase tracking-[0.25em] text-white transition hover:text-amber-300"
          >
            Explore
          </Link>

          <Link
            href="/collections"
            className="text-sm uppercase tracking-[0.25em] text-white transition hover:text-amber-300"
          >
            Collections
          </Link>

          <Link
            href="/lounge"
            className="text-sm uppercase tracking-[0.25em] text-white transition hover:text-amber-300"
          >
            The Lounge
          </Link>

          <Link
            href="/journal"
            className="text-sm uppercase tracking-[0.25em] text-white transition hover:text-amber-300"
          >
            Charlie's Journal
          </Link>

          <Link
            href="/photography"
            className="text-sm uppercase tracking-[0.25em] text-white transition hover:text-amber-300"
          >
            Photography
          </Link>

          <Link
            href="/about"
            className="text-sm uppercase tracking-[0.25em] text-white transition hover:text-amber-300"
          >
            About
          </Link>

        </nav>

      </div>
    </header>
  );
}