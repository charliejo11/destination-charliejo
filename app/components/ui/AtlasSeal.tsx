import Image from "next/image";

export default function AtlasSeal() {
  return (
    <div className="inline-flex items-center gap-3 rounded-full border border-amber-300/30 bg-white/5 px-4 py-2 text-sm uppercase tracking-[0.35em] text-amber-300 shadow-sm shadow-black/20">
      <Image
        src="/atlas/atlas.png"
        alt="Atlas"
        width={20}
        height={20}
        className="w-5 h-5"
      />
      <span className="font-medium">CharlieJo&apos;s Choice</span>
    </div>
  );
}
