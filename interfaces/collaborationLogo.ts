import { SanityImageSource } from "@sanity/image-url/lib/types/types";

export interface CollaborationLogo {
  _id: string;
  order: number;
  altText: string;
  logo: SanityImageSource;
  url: string;
}
