import type { PortableTextBlock } from "@portabletext/types";

export interface Page {
  _id: string;
  pageKey: string;
  title: string;
  header?: PortableTextBlock[];
  content: PortableTextBlock[];
  footer?: PortableTextBlock[];
  image?: string;
  imageAlt?: string;
  ctaText?: string;
  ctaUrl?: string;
}
