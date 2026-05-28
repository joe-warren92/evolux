import { writeFile } from "node:fs/promises";
import { fileURLToPath } from "node:url";
import { dirname, resolve } from "node:path";

const apiKey = process.env.GOOGLE_MAPS_API_KEY;
const placeId = process.env.GOOGLE_PLACE_ID;

if (!apiKey || !placeId) {
  console.error("Missing GOOGLE_MAPS_API_KEY or GOOGLE_PLACE_ID.");
  console.error("Set both environment variables, then run npm run sync:google-reviews.");
  process.exit(1);
}

const endpoint = new URL("https://maps.googleapis.com/maps/api/place/details/json");
endpoint.searchParams.set("place_id", placeId);
endpoint.searchParams.set("fields", "name,rating,user_ratings_total,reviews,url");
endpoint.searchParams.set("reviews_sort", "newest");
endpoint.searchParams.set("key", apiKey);

const response = await fetch(endpoint);

if (!response.ok) {
  throw new Error(`Google Places request failed with ${response.status}`);
}

const payload = await response.json();

if (payload.status !== "OK") {
  throw new Error(`Google Places returned ${payload.status}: ${payload.error_message ?? "No details provided"}`);
}

const result = payload.result;
const reviews = (result.reviews ?? []).map((review) => {
  const names = String(review.author_name ?? "Google reviewer").trim().split(/\s+/);
  const initials = names.slice(0, 2).map((part) => part[0]).join("").toUpperCase();

  return {
    authorName: review.author_name ?? "Google reviewer",
    authorInitials: initials || "GR",
    company: "",
    rating: review.rating ?? 5,
    relativeTimeDescription: review.relative_time_description ?? "Google review",
    text: review.text ?? ""
  };
}).filter((review) => review.text);

const output = {
  businessName: result.name ?? "Evolux Web Design",
  rating: result.rating ?? 5,
  reviewCount: result.user_ratings_total ?? reviews.length,
  sourceUrl: result.url ?? "https://www.google.com/search?q=Evolux+Web+Design+reviews",
  lastSynced: new Date().toISOString(),
  reviews
};

const here = dirname(fileURLToPath(import.meta.url));
const target = resolve(here, "../src/data/googleReviews.json");

await writeFile(target, `${JSON.stringify(output, null, 2)}\n`);

console.log(`Synced ${reviews.length} Google reviews to ${target}`);
