import Image from "next/image";
import { notFound } from "next/navigation";
import AtlasApproved from "../../components/ui/AtlasApproved";
import Gallery from "@/app/components/Gallery";
import ReviewCard from "@/app/components/ReviewCard";
import { destinations } from "../../data/destinations";

type PageProps = {
  params: Promise<{
    slug: string;
  }>;
};

export function generateStaticParams() {
  return destinations.map((destination) => ({
    slug: destination.slug,
  }));
}

export default async function Page({ params }: PageProps) {
  const { slug } = await params;

  const destination = destinations.find((item) => item.slug === slug);

  if (!destination) {
    notFound();
  }

  return (
    <main className="bg-[#050505] text-white">
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-black/50" />

        <div className="relative h-screen w-full">
          <Image
            src={destination.image}
            alt={destination.title}
            fill
            className="object-cover"
            sizes="100vw"
            priority
          />
        </div>

        <div className="absolute inset-0 flex items-end">
          <div className="mx-auto w-full max-w-6xl px-6 pb-20">
            <p className="mb-4 text-sm uppercase tracking-[0.35em] text-amber-300">
              {destination.category}
            </p>

            <h1 className="font-serif text-5xl font-semibold sm:text-6xl">
              {destination.title}
            </h1>

            <p className="mt-4 text-lg text-gray-300">
              Owned by {destination.owner}
            </p>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-20">
        <AtlasApproved />

        <p className="mt-8 text-xl leading-9 text-gray-300">
          {destination.description}
        </p>

        <Gallery images={destination.gallery} />

        <div className="mt-20">
          <ReviewCard review={destination.review} />
        </div>
      </section>
    </main>
  );
}
