import { PortableTextBlock } from "@portabletext/types";

export interface Service {
  _id: string;
  order: number;
  title: string;
  text: PortableTextBlock[];
  longText: PortableTextBlock[];
  tags: string;
  cta: string;
  url: string;
}
