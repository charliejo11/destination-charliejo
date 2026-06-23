import Link from "next/link";

export default function EditorialPortfolioBanner() {
  return (
    <section className="relative overflow-hidden border-y border-white/10 bg-[#0a0a0a] py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid gap-12 lg:grid-cols-3 lg:items-center">
          <div className="lg:col-span-2">
            <p className="text-sm uppercase tracking-[0.35em] text-amber-300">Editorial Portfolio</p>
            <h2 className="mt-6 font-serif text-5xl font-semibold leading-tight text-white">
              Fashion editorials & mature magazine work
            </h2>
            <p className="mt-8 max-w-2xl text-lg leading-8 text-gray-300">
              CharlieJo produces elegant editorial photography and fashion concepts. For discretion, mature imagery is curated separately and hosted in a dedicated portfolio space.
            </p>
          </div>

          <div className="flex items-center justify-start lg:justify-center">
            <Link
              href="/placeholder-portfolio"
              className="inline-flex rounded-full border-2 border-amber-300 px-10 py-5 text-sm uppercase tracking-[0.25em] text-amber-300 transition hover:bg-amber-300 hover:text-black font-semibold"
            >
              View Portfolio
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
