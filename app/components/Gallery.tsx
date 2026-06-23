"use client";

import { useMemo, useState } from "react";
import Image from "next/image";

type GalleryProps = {
  images: string[];
};

export default function Gallery({ images }: GalleryProps) {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const columns = useMemo(() => {
    if (images.length <= 3) return 1;
    if (images.length <= 6) return 2;
    return 3;
  }, [images.length]);

  return (
    <div className="mt-12">
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {images.map((src, index) => (
          <button
            key={src + index}
            type="button"
            onClick={() => setActiveIndex(index)}
            className="group overflow-hidden rounded-3xl border border-white/10 bg-white/5 shadow-xl shadow-black/10 transition hover:-translate-y-1"
          >
            <div className="relative h-64 w-full">
              <Image
                src={src}
                alt={`Gallery image ${index + 1}`}
                fill
                className="object-cover transition duration-700 group-hover:scale-105"
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
              />
            </div>
          </button>
        ))}
      </div>

      {activeIndex !== null ? (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-6">
          <button
            type="button"
            onClick={() => setActiveIndex(null)}
            className="absolute right-6 top-6 rounded-full border border-white/20 bg-black/80 px-4 py-2 text-white transition hover:bg-white/10"
          >
            Close
          </button>

          <div className="relative max-h-full w-full max-w-6xl overflow-hidden rounded-3xl border border-white/10 bg-black/90 shadow-2xl shadow-black/50">
            <Image
              src={images[activeIndex]}
              alt={`Gallery image ${activeIndex + 1}`}
              fill
              className="object-contain"
              sizes="100vw"
            />
          </div>
        </div>
      ) : null}
    </div>
  );
}
