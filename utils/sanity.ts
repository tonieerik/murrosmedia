import { createClient } from "next-sanity";
import imageUrlBuilder from "@sanity/image-url";
import { SanityImageSource } from "@sanity/image-url/lib/types/types";

const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || "q265orxf";
const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET || "mandariinimedia";
const apiVersion = process.env.NEXT_PUBLIC_SANITY_API_VERSION || "2024-01-27";

export const client = createClient({
  projectId,
  dataset,
  apiVersion,
  useCdn: false,
});

const builder = imageUrlBuilder(client);

export const urlFor = (source: SanityImageSource) =>
  builder.image(source).url();

export function urlForImage(source: SanityImageSource) {
  return builder.image(source);
}
