import type { Page } from "@/interfaces/page";
import { client } from "@/utils/sanity";
import { PortableText } from "@portabletext/react";
import SanityImage from "./SanityImage";
import Quotation from "./quotation";

const AboutMe = async () => {
  const pageContent = (
    await client.fetch<Page[]>(`*[_type == "page" && pageKey == "aboutMe"]`)
  )[0];
  const quoteResponsibility = (
    await client.fetch<Page[]>(
      `*[_type == "page" && pageKey == "quoteResponsibility"]`
    )
  )[0];

  return (
    <>
      <section className="about-me flex flex-col lg:flex-row m-8 md:mx-48 md:my-16">
        <div className="w-full lg:w-1/2 lg:mr-12">
          {pageContent.content.map((content, i) => (
            <PortableText key={`about-me-b${i}`} value={content} />
          ))}
        </div>
        <div className="w-full lg:w-1/2 mt-6 lg:mt-12">
          {pageContent.image && (
            <SanityImage
              src={pageContent.image}
              alt={pageContent.imageAlt || "Sisällöntuottaja Nelli"}
              width={1334}
              height={2000}
            />
          )}
        </div>
      </section>
      <Quotation content={quoteResponsibility.content} />
      <section className="about-me mx-8 md:mx-48 my-16 flow-root">
        {pageContent.image2 && (
          <div className="hidden lg:block image-container float-left w-full lg:w-1/2 mt-12 mr-12 mb-12 lg:mb-0">
            <SanityImage
              src={pageContent.image2}
              alt={pageContent.image2Alt || "Sisällöntuottaja Nelli"}
              width={1334}
              height={2000}
            />
          </div>
        )}
        <div className="text-content">
          {pageContent.footer?.map((content, i) => (
            <PortableText key={`about-me-b${i}`} value={content} />
          ))}
        </div>
      </section>
    </>
  );
};

export default AboutMe;
