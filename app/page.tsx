import { Metadata } from "next";
import Contact from "@/components/contact";
import Intro from "@/components/intro";
import Quotation from "@/components/quotation";
import Services from "@/components/services";
import Testimonials from "@/components/testimonials";
import type { Page } from "@/interfaces/page";
import { Testimonial } from "@/interfaces/testimonial";
import { client } from "@/utils/sanity";
import Menu from "@/components/menu";
import Collaboration from "@/components/collaboration";
import { CollaborationLogo } from "@/interfaces/collaborationLogo";
import SanityImage from "@/components/SanityImage";

export const metadata: Metadata = {
  title: "Kuunteleva kumppanisi vastuullisuusviestintään | Murrosmedia",
  description:
    "Kilpailuetua vastuullisuusviestinnällä! Ulkoista yrityksesi sisällöntuotanto kokeneelle freelancerille tai ota itse haltuun vastuullisen viestinnän salat.",
  alternates: {
    canonical: "https://murrosmedia.fi",
  },
};

const IndexPage = async () => {
  const testimonials = await client.fetch<Testimonial[]>(
    `*[_type == "testimonial"]`
  );
  const quote1 = (
    await client.fetch<Page[]>(`*[_type == "page" && pageKey == "quote1"]`)
  )[0];
  const quote2 = (
    await client.fetch<Page[]>(`*[_type == "page" && pageKey == "quote2"]`)
  )[0];
  const contactContent = (
    await client.fetch<Page[]>(`*[_type == "page" && pageKey == "contact"]`)
  )[0];
  const logos = await client.fetch<CollaborationLogo[]>(
    `*[_type == "collaborationLogo"]`
  );
  const frontpageContent = (
    await client.fetch<Page[]>(`*[_type == "page" && pageKey == "frontpage"]`)
  )[0];

  return (
    <>
      <Menu currentPage="" />
      <Intro />
      <Quotation content={quote1.content} />
      <Services />
      {frontpageContent.image && (
        <SanityImage
          className="mt-0"
          alt={frontpageContent.imageAlt || ""}
          src={frontpageContent.image}
          width="2000"
          height="1334"
        />
      )}
      <Collaboration logos={logos} />
      <Testimonials testimonials={testimonials} />
      <Quotation content={quote2.content} />
      <Contact
        title={contactContent.title}
        content={contactContent.content}
        image={contactContent.image}
        imageAlt={contactContent.imageAlt}
      />
    </>
  );
};

export default IndexPage;
