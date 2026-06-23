export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-[#020202] text-white">
      <div className="mx-auto flex max-w-7xl flex-col gap-8 px-10 py-16 lg:flex-row lg:justify-between">
        <div className="space-y-4">
          <div className="inline-flex items-center gap-3 rounded-full border border-amber-300/30 bg-white/5 px-4 py-2 text-sm uppercase tracking-[0.35em] text-amber-300 shadow-sm shadow-black/20">
            <span className="text-lg">🐘</span>
            <span>Destination CharlieJo</span>
          </div>

          <p className="text-lg font-semibold text-white">
            Second Life 💎 Travel & Lifestyle
          </p>
          <p className="max-w-xl text-gray-400">
            Discover the Extraordinary. Photographed, explored & curated by CharlieJo.
          </p>
        </div>

        <div className="flex flex-col gap-4 text-sm text-gray-300">
          <p className="uppercase tracking-[0.35em] text-amber-300">Links</p>
          <div className="flex flex-wrap gap-4">
            <a href="https://www.flickr.com" target="_blank" rel="noreferrer" className="transition hover:text-white">
              Flickr
            </a>
            <a href="https://www.primfeed.com" target="_blank" rel="noreferrer" className="transition hover:text-white">
              Primfeed
            </a>
            <a href="https://www.slinsider.com" target="_blank" rel="noreferrer" className="transition hover:text-white">
              SL Insider
            </a>
            <a href="https://www.instagram.com" target="_blank" rel="noreferrer" className="transition hover:text-white">
              Instagram
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
