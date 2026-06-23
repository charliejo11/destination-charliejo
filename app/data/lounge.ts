export type LoungeEntry = {
  id: number;
  type: string;
  title: string;
  subtitle?: string;
  content: string;
  image?: string;
  quote?: string;
  destinationSlug?: string;
  date?: string;
};

export const loungeEntries: LoungeEntry[] = [
  {
    id: 1,
    type: "Photography Notes",
    title: "Lighting at Golden Hour",
    subtitle: "Techniques for capturing warm, directional light",
    content:
      "Golden hour—roughly one hour after sunrise or before sunset—provides the most forgiving light for photography. The low angle creates natural shadows that add depth. In Second Life, golden hour is easiest to simulate with directional lighting and windlight presets like Phototools. Tip: Reduce exposure compensation slightly to preserve highlights in water and reflective surfaces.",
    date: "2026-06-15",
  },

  {
    id: 2,
    type: "Behind the Shot",
    title: "Grand Harbor Isle at Dusk",
    subtitle: "How we captured the cover image",
    content:
      "This image was taken from the western dock of Grand Harbor Isle, facing the harbor at sunset. The scene is compositionally simple—leading lines from the dock guide the eye to the distant shoreline. We used Phototools to set the windlight to a warm preset, then adjusted post-processing to enhance the amber and blue tones. The key was patience: we waited for an avatar to walk past at just the right moment, creating a human anchor to the landscape.",
    image: "/images/destinations/grand-harbor-isle.jpg",
  },

  {
    id: 3,
    type: "Region of the Week",
    title: "Grand Harbor Isle",
    subtitle: "A timeless waterfront escape",
    content:
      "Grand Harbor Isle is a masterclass in region design. The architecture blends Victorian and Mediterranean styles; the streets feel lived-in yet peaceful. Best visited mid-to-late morning (SLT) when the lighting is clear but not harsh. Photographers should explore the western docks for dramatic compositions. Don't miss the library and town square. Average visit: 1–2 hours.",
    destinationSlug: "grand-harbor-isle",
    date: "2026-06-08",
  },

  {
    id: 4,
    type: "Hidden Gems",
    title: "Quiet Corners Worth Exploring",
    subtitle: "Small locations often overlooked",
    content:
      "Not every worthwhile location is famous. This week: a small sheltered cove south of Ash Aria, rarely visited but stunning for moody, overcast-sky photography. Access via teleport to Ash Aria then head south on foot. Bring windlight presets for rain and mist. Best time: early morning (SLT) for solitude.",
    destinationSlug: "ash-aria",
  },

  {
    id: 5,
    type: "Atlas Says",
    title: "Atlas-Approved: Imogen Strange's Builds",
    quote:
      "Imogen Strange is one of Second Life's finest architects. Every region she designs is thoughtful, detailed, and endlessly explorable.",
    content:
      "We continue to feature Imogen Strange's work. Her attention to weathering, aging, and narrative detail is unmatched. Whether it's peeling paint on a historic harbor or the gentle decay of ruins, Imogen's builds feel real. If you haven't explored her work, start at Grand Harbor Isle.",
    date: "2026-06-10",
  },

  {
    id: 6,
    type: "Music While Exploring",
    title: "Ambient Soundscapes for Wandering",
    subtitle: "Curated selections to enhance your journey",
    content:
      "We recommend exploring with ambient or lo-fi music playing softly. Suggested tracks: 'Ambient Study' by Erik Satie, 'Nuvole Bianche' by Ludovico Einaudi, or lo-fi hip-hop compilations available on most music platforms. The right soundtrack transforms a casual wander into a contemplative journey.",
  },
];
