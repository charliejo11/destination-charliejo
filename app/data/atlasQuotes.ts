export type AtlasMood = "default" | "rain" | "beach" | "autumn" | "winter" | "christmas" | "halloween" | "valentine";
export type AtlasAccessory = "camera" | "umbrella" | "scarf" | "flower" | "lantern" | "map" | "clipboard";

export type AtlasQuoteData = {
  quote: string;
  title?: string;
  page: string;
  mood?: AtlasMood;
  accessory?: AtlasAccessory;
};

export const atlasQuotes: AtlasQuoteData[] = [
  // Homepage
  {
    page: "home",
    quote: "The world's most beautiful moments hide in plain sight.",
    title: "Welcome to Destination CharlieJo",
    mood: "default",
  },

  // Explore
  {
    page: "explore",
    quote: "Every destination has a story. Let's find yours.",
    title: "Ready to Explore?",
    mood: "default",
    accessory: "map",
  },

  // Lounge
  {
    page: "lounge",
    quote: "The quietest roads usually lead to the best views.",
    title: "A Word from Atlas",
    mood: "default",
    accessory: "camera",
  },

  // Destination - Grand Harbor Isle
  {
    page: "destination",
    quote: "Grand Harbor Isle reminds us that timeless elegance never goes out of style.",
    title: "Atlas on Grand Harbor Isle",
    mood: "default",
  },

  // Destination - Ash Aria
  {
    page: "destination",
    quote: "Rain softens the world. It makes everything feel like a secret.",
    title: "Atlas on Ash Aria",
    mood: "rain",
    accessory: "umbrella",
  },

  // Photography
  {
    page: "photography",
    quote: "The best light is the one you're willing to wait for.",
    title: "Atlas Says",
    mood: "default",
    accessory: "camera",
  },

  // Photography
  {
    page: "photography",
    quote: "The best light is the one you're willing to wait for.",
    title: "Atlas Says",
    mood: "default",
    accessory: "camera",
  },

  // Historic
  {
    page: "historic",
    quote: "Great history is best discovered by walking slowly and looking closely.",
    title: "Atlas Says",
    mood: "default",
    accessory: "map",
  },

  // Nature
  {
    page: "nature",
    quote: "The quietest landscapes are often the most unforgettable.",
    title: "Atlas Says",
    mood: "default",
    accessory: "flower",
  },

  // Rain
  {
    page: "rain",
    quote: "Rain doesn't ruin adventures. It edits them.",
    title: "Atlas Says",
    mood: "rain",
    accessory: "umbrella",
  },

  // Waterfront
  {
    page: "waterfront",
    quote: "Where water meets land, there is always a story waiting.",
    title: "Atlas Says",
    mood: "default",
    accessory: "map",
  },

  // Fantasy
  {
    page: "fantasy",
    quote: "Some worlds are built for dreams, and others simply invite them.",
    title: "Atlas Says",
    mood: "default",
    accessory: "flower",
  },

  // Editor's Choice
  {
    page: "editors-choice",
    quote: "These destinations were selected for their craft, charm, and quiet luxury.",
    title: "Atlas Picks",
    mood: "default",
    accessory: "clipboard",
  },

  // Atlas Approved
  {
    page: "atlas-approved",
    quote: "Atlas approves places that feel timeless, inviting, and wonderfully vivid.",
    title: "Atlas Approved",
    mood: "default",
    accessory: "camera",
  },

  // Collections landing page
  {
    page: "collections",
    quote: "Every collection is a curated path through the best of Second Life.",
    title: "Atlas Collections",
    mood: "default",
    accessory: "map",
  },

  // Travel
  {
    page: "travel",
    quote: "The best journeys unfold when you travel slowly enough to see the details.",
    title: "Atlas Says",
    mood: "default",
    accessory: "map",
  },

  // Fashion
  {
    page: "fashion",
    quote: "Style is how you tell the world about yourself without saying a word.",
    title: "Atlas Says",
    mood: "default",
    accessory: "flower",
  },

  // About
  {
    page: "about",
    quote: "The story of a place is the most beautiful thing you can carry with you.",
    title: "Atlas Says",
    mood: "default",
    accessory: "camera",
  },

  // Atlas Says (Lounge subsection)
  {
    page: "lounge-atlas-says",
    quote: "Imogen Strange builds worlds that feel like home.",
    title: "Atlas Approved",
    mood: "default",
  },
];

/**
 * Get an Atlas quote by page and optional mood.
 * Falls back to default if exact mood match not found.
 */
export function getAtlasQuote(page: string, mood?: AtlasMood): AtlasQuoteData {
  const byPage = atlasQuotes.filter((q) => q.page === page);

  if (mood && byPage.length > 0) {
    const byMood = byPage.find((q) => q.mood === mood);
    if (byMood) return byMood;
  }

  if (byPage.length > 0) return byPage[0];
  if (page !== "collections") return getAtlasQuote("collections", mood);
  return atlasQuotes[0];
}

/**
 * Get all quotes for a page (useful for rotation or random selection).
 */
export function getAtlasQuotesForPage(page: string): AtlasQuoteData[] {
  return atlasQuotes.filter((q) => q.page === page);
}
