import Header from "@/app/components/Header";
import EditorialHero from "@/app/components/EditorialHero";

export default function JournalPage() {
  return (
    <main className="bg-[#050505] text-white min-h-screen">
      <Header />

      <EditorialHero
        label={"Charlie's Journal"}
        title={"Notes, stories, and explorations"}
        description={"A personal diary of journeys, brief observations, and photographic notes from CharlieJo."}
        quote={{ page: "lounge", quote: "A place to record the small discoveries that make travel meaningful.", title: "Journal", mood: "default" }}
        actions={[{ href: "/lounge", label: "Visit The Lounge" }]}
      />

      <section className="mx-auto max-w-7xl px-6 pb-24">
        <div className="rounded-[2rem] border border-white/10 bg-[#0b0b0b] p-10 shadow-2xl shadow-black/30">
          <h2 className="font-serif text-3xl font-semibold">A short note</h2>
          <p className="mt-6 text-gray-300">This is a placeholder for Charlie's Journal entries. More curated content will follow here.</p>
        </div>
      </section>
    </main>
  );
}
