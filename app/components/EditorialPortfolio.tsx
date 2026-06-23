import Link from "next/link";

export default function EditorialPortfolio() {
  return (
    <div className="rounded-[2rem] border border-white/10 bg-[#111] p-8 shadow-2xl shadow-black/30">
      <p className="text-xs uppercase tracking-[0.35em] text-amber-300">Editorial Portfolio</p>
      <h3 className="mt-4 font-serif text-2xl font-semibold text-white">Fashion editorials & mature magazine work</h3>
      <p className="mt-4 text-gray-300">
        CharlieJo also produces fashion editorials and mature magazine photography. For discretion, mature imagery is hosted separately and not embedded here.
      </p>

      <div className="mt-6">
        <Link
          href="/placeholder-portfolio"
          className="inline-flex rounded-full border border-amber-300 px-6 py-3 text-sm uppercase tracking-[0.25em] text-amber-300 transition hover:bg-amber-300 hover:text-black"
        >
          View Editorial Portfolio
        </Link>
      </div>
    </div>
  );
}
