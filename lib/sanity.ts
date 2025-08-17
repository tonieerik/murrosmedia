import { createClient } from "next-sanity";
import imageUrlBuilder from "@sanity/image-url";
import { SanityImageSource } from "@sanity/image-url/lib/types/types";

const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || "mi3tm6qo";
const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET || "production";
const apiVersion = process.env.NEXT_PUBLIC_SANITY_API_VERSION || "2024-04-12";

export const client = createClient({
  projectId,
  dataset,
  apiVersion,
  useCdn: false,
});

const builder = imageUrlBuilder(client);

export const urlForImage = (source: SanityImageSource) => builder.image(source);

export const fetchPageBySlug = async (slug: string) => {
  return client.fetch(
    `*[_type == "page" && slug.current == $slug][0]{
      title,
      template,
      slug,
      metaDescription,
      headerImage,
      headerTitle,
      pageBuilder[]{
        ...,
        image{
          asset->{
            url,
            metadata{
              dimensions{
                width,
                height
              }
            }
          }
        },
        imageAlt,
        imagePosition,
        customWidth,
        noTopPadding,
        noBottomPadding,
        content[]{
          ...,
          children[]{..., _type}
        }
      }
    }`,
    { slug }
  );
};
