import type { Page } from "@/interfaces/page";
import { client } from "@/utils/sanity";
import { PortableText } from "@portabletext/react";
import SanityImage from "./SanityImage";

const Responsibility = async () => {
  const pageContent = (
    await client.fetch<Page[]>(
      `*[_type == "page" && pageKey == "aboutResponsibility"]`
    )
  )[0];

  return (
    <>
      <section className="about-responsibility m-8 md:mx-48 md:my-16">
        {pageContent.header?.map((content, i) => (
          <PortableText
            key={`about-responsibility-header-b${i}`}
            value={content}
          />
        ))}
      </section>
      {pageContent.image && (
        <SanityImage
          className="w-full"
          src={pageContent.image}
          alt={pageContent.imageAlt || "Sisällöntuottaja Nelli"}
          width={1334}
          height={2000}
        />
      )}
      <section className="about-responsibility m-8 md:mx-48 md:my-16">
        {pageContent.content.map((content, i) => (
          <PortableText
            key={`about-responsibility-content-b${i}`}
            value={content}
          />
        ))}
      </section>
      <section className="about-responsibility m-8 md:mx-48 md:my-16">
        <div className="mt-12 bg-teal text-white lg:mr-12 p-12 pt-6 rounded-xl drop-shadow">
          {pageContent.footer?.map((content, i) => (
            <PortableText
              key={`about-responsibility-footer-b${i}`}
              value={content}
            />
          ))}
        </div>
        <button className="mt-20">
          <a
            href={pageContent?.ctaUrl}
            className="bg-orange text-white rounded p-4 drop-shadow"
          >
            {pageContent?.ctaText}
          </a>
        </button>
      </section>
    </>
  );
};

export default Responsibility;
