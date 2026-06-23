export interface DestinationReview {
  atlasRating: number;
  photography: number;
  atmosphere: number;
  exploration: number;
  accessibility: number;
  bestTimeToVisit: string;
  recommendedFor: string[];
  charliesNotes: string;
  atlasQuote: string;
  facts: string[];
}

export interface Destination {
  id: number;
  slug: string;
  title: string;
  owner: string;
  category: string;
  description: string;
  image: string;
  gallery: string[];
  slurl: string;
  articleUrl: string;
  featured: boolean;
  charliesChoice: boolean;
  tags: string[];
  review: DestinationReview;
}

export const destinations: Destination[] = [
  {
    id: 1,
    slug: "grand-harbor-isle",
    title: "Grand Harbor Isle",
    owner: "Imogen Strange",
    category: "Historic Waterfront",
    description:
      "Elegant streets, timeless architecture, and a welcoming waterfront make Grand Harbor Isle one of Second Life's most memorable places to wander.",
    image: "/images/destinations/grand-harbor-isle.jpg",
    gallery: [
      "/images/destinations/grand-harbor-isle.jpg",
      "/images/destinations/grand-harbor-isle.jpg",
      "/images/destinations/grand-harbor-isle.jpg",
      "/images/destinations/grand-harbor-isle.jpg",
    ],
    slurl:
      "https://maps.secondlife.com/secondlife/Grand%20Harbor%20Isle/24/148/25",
    articleUrl: "",
    featured: true,
    charliesChoice: true,
    tags: ["Photography", "Waterfront", "Historic"],
    review: {
      atlasRating: 4.8,
      photography: 5,
      atmosphere: 4.7,
      exploration: 4.4,
      accessibility: 4.0,
      bestTimeToVisit: "Golden hour on summer evenings",
      recommendedFor: ["Photography", "Romantic walks", "Quiet exploration"],
      charliesNotes:
        "Grand Harbor Isle feels like a timeless seaside gallery. Every turn reveals polished stonework, ivy-lined balconies, and reflections that seem to glow after sunset.",
      atlasQuote:
        "A harbor this peaceful is a reminder that the best journeys move at a softer pace.",
      facts: [
        "Victorian waterfront promenade",
        "Curated photography viewpoints",
        "Public gardens with lantern-lit paths",
        "Easy access to cafes and quiet piers",
      ],
    },
  },

  {
    id: 2,
    slug: "ash-aria",
    title: "Ash Aria",
    owner: "Algernon Bamaisin",
    category: "Rainy Escape",
    description:
      "A quiet coastal landscape where rain, forgotten roads, and peaceful scenery invite you to slow down and simply wander.",
    image: "/images/destinations/ash-aria.jpg",
    gallery: [
      "/images/destinations/ash-aria.jpg",
      "/images/destinations/ash-aria.jpg",
      "/images/destinations/ash-aria.jpg",
      "/images/destinations/ash-aria.jpg",
    ],
    slurl:
      "https://maps.secondlife.com/secondlife/Tropix/106/76/22",
    articleUrl: "",
    featured: false,
    charliesChoice: false,
    tags: ["Rain", "Nature", "Photography"],
    review: {
      atlasRating: 4.6,
      photography: 4.8,
      atmosphere: 4.9,
      exploration: 4.1,
      accessibility: 3.8,
      bestTimeToVisit: "After the first rain, when the air feels soft and the light is low",
      recommendedFor: ["Rain lovers", "Intimate strolls", "Moody landscapes"],
      charliesNotes:
        "Ash Aria is a quiet place where every raindrop becomes part of the scene. The path is best enjoyed slowly, with a camera ready and a warm coat close at hand.",
      atlasQuote:
        "Rain has a way of writing the landscape in silver. It is here that stillness speaks.",
      facts: [
        "Coastal cliffs and misty boardwalks",
        "Hidden art installations",
        "Secluded observation points",
        "Soft ambient soundscape with distant waves",
      ],
    },
  },
];