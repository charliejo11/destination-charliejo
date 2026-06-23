import Image from "next/image";

export default function AtlasApproved() {
  return (
    <div className="inline-flex flex-col gap-3 rounded-3xl border border-amber-300/20 bg-white/5 p-6 text-sm text-gray-100 shadow-xl shadow-black/10">
      <div className="inline-flex items-center gap-3 text-amber-300">
        <Image
          src="/atlas/atlas.png"
          alt="Atlas"
          width={24}
          height={24}
          className="w-6 h-6"
        />
        <span className="font-semibold uppercase tracking-[0.35em]">Atlas Approved</span>
      </div>
      <p className="text-gray-300">
        Personally explored & recommended by CharlieJo.
      </p>
    </div>
  );
}
