import { Metadata } from "next";
import Image from "next/image";
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

export const metadata: Metadata = {
  title: "Mandariinimedia",
  description: "Mandariinimedia",
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

  return (
    <>
      <Menu currentPage="" />
      <Intro />
      <Quotation content={quote1.content} />
      <Services />
      <Image
        className="mt-0"
        alt="Sisällöntuottaja Jyväskylästä"
        src="/sisallontuottaja-jyvaskyla.jpg"
        width="2000"
        height="1334"
      />
      <Collaboration />
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
