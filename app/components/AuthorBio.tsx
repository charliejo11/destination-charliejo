import Link from "next/link";

export default function AuthorBio() {
  return (
    <div className="rounded-[2rem] border border-white/10 bg-[#0b0b0b] p-8 shadow-2xl shadow-black/30">
      <div className="flex items-center gap-6">
        <div className="flex-shrink-0">
          <picture>
            <source srcSet="/images/author/charliejo.jpg" type="image/jpeg" />
            <img
              src="/images/author/charliejo.svg"
              alt="CharlieJo"
              className="h-32 w-32 rounded-full object-cover"
            />
          </picture>
        </div>

        <div className="flex-1">
          <p className="text-xs uppercase tracking-[0.35em] text-amber-300">Author</p>
          <h3 className="mt-2 font-serif text-2xl font-semibold text-white">CharlieJo</h3>
          <p className="mt-3 text-gray-300">Explorer, photographer, and storyteller. CharlieJo curates quiet, atmospheric destinations in Second Life and captures them through thoughtful editorial photography.</p>

          <div className="mt-6">
            <Link
              href="/journal"
              className="inline-flex rounded-full border border-amber-300 px-6 py-2 text-sm uppercase tracking-[0.25em] text-amber-300 transition hover:bg-amber-300 hover:text-black"
            >
              Read the Journal
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
