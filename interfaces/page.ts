import type { PortableTextBlock } from "@portabletext/types";

export interface Page {
  _id: string;
  pageKey: string;
  content: PortableTextBlock[];
}
