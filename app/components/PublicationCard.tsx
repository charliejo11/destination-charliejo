type PublicationCardProps = {
  title: string;
  publication: string;
  year: string;
  description?: string;
  featured?: boolean;
};

export default function PublicationCard({ title, publication, year, description, featured = false }: PublicationCardProps) {
  return (
    <div className={`flex flex-col gap-6 ${featured ? "lg:col-span-2" : ""}`}>
      <div className={`rounded-xl overflow-hidden border ${featured ? "border-amber-300/30 bg-[#111]" : "border-white/10 bg-[#050505]"} p-8 ${featured ? "lg:p-12" : ""}`}>
        <p className="text-xs uppercase tracking-[0.35em] text-amber-300">{publication}</p>
        <h3 className={`mt-4 font-serif text-xl ${featured ? "lg:text-3xl" : ""} font-semibold text-white`}>{title}</h3>
        {description && <p className="mt-4 text-gray-300 leading-8">{description}</p>}
        <p className="mt-6 text-xs uppercase tracking-[0.35em] text-gray-500">{year}</p>
      </div>
    </div>
  );
}
