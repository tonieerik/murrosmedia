import type { PortableTextBlock } from "@portabletext/types";

export type ContactBlockWithSidebarType = {
  _type: "contactBlockWithSidebar";
  sidebarHeader: string;
  content: PortableTextBlock[];
  image?: any;
  imageAlt?: string;
};

export type CtaBlockType = {
  _type: "ctaBlock";
  text: string;
  url: string;
  variant?: string;
};

export type ImageBlockType = {
  _type: "imageBlock";
  image?: any;
  alt?: string;
  fullWidth?: boolean;
};

export type PortfolioBlockType = {
  _type: "portfolioBlock";
  content: PortableTextBlock[];
};

export type QuoteBlockType = {
  _type: "quoteBlock";
  content: PortableTextBlock[];
};

export type ReferenceBlockType = {
  _type: "referenceBlock";
  title: string;
};

export type SeparatorBlockType = {
  _type: "separatorBlock";
};

export type ServiceBlockType = {
  _type: "serviceBlock";
  title: string;
};

export type ServiceBlockWithSidebarType = {
  _type: "serviceBlockWithSidebar";
  sidebarHeader: string;
  title: string;
};

export type TestimonialBlockType = {
  _type: "testimonialBlock";
  title: string;
};

export type TextBlockType = {
  _type: "textBlock";
  content: PortableTextBlock[];
  image?: any;
  imageAlt?: string;
  imagePosition?: "left" | "right";
  customWidth?: number;
  noTopPadding?: boolean;
  noBottomPadding?: boolean;
};

type ColumnBlockType = TextBlockType | ImageBlockType | GreenBlockType;

export type TwoColumnContentBlockType = {
  _type: "twoColumnContentBlock";
  header: string;
  items: ColumnBlockType[];
};

export type GreenBlockType = {
  _type: "greenBlock";
  header: string;
  content: PortableTextBlock[];
};

export type PageBlock =
  | ContactBlockWithSidebarType
  | CtaBlockType
  | GreenBlockType
  | ImageBlockType
  | PortfolioBlockType
  | QuoteBlockType
  | ReferenceBlockType
  | SeparatorBlockType
  | ServiceBlockType
  | ServiceBlockWithSidebarType
  | TestimonialBlockType
  | TextBlockType
  | TwoColumnContentBlockType;
