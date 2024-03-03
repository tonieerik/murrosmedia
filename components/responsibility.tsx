import { Page } from "@/interfaces/page";
import { client, urlFor } from "@/utils/sanity";
import { PortableText } from "@portabletext/react";
import Image from "next/image";

const Responsibility = async () => {
  const pageContent = (
    await client.fetch<Page[]>(
      `*[_type == "page" && pageKey == "aboutResponsibility"]`
    )
  )[0];

  return (
    <>
      <section className="about-responsibility m-8 md:mx-48 md:my-16">
        <h1 className="text-teal text-2xl">{pageContent?.title}</h1>
        {pageContent.header?.map((content, i) => (
          <PortableText
            key={`about-responsibility-header-b${i}`}
            value={content}
          />
        ))}
        <div className="mt-12 bg-teal text-white lg:mr-12 p-12 rounded-xl drop-shadow">
          {pageContent.content.map((content, i) => (
            <PortableText
              key={`about-responsibility-content-b${i}`}
              value={content}
            />
          ))}
        </div>
        <button className="mt-12">
          <a
            href={pageContent?.ctaUrl}
            className="bg-orange text-white rounded font-bold p-4 drop-shadow"
          >
            {pageContent?.ctaText}
          </a>
        </button>
      </section>
      {pageContent.image && (
        <Image
          className="w-full"
          src={urlFor(pageContent.image)}
          alt={pageContent.imageAlt || "Sisällöntuottaja Nelli"}
          width={1334}
          height={2000}
        />
      )}
      <section className="about-responsibility m-8 md:mx-48 md:my-16">
        {pageContent.footer?.map((content, i) => (
          <PortableText
            key={`about-responsibility-footer-b${i}`}
            value={content}
          />
        ))}
      </section>
    </>
  );
};

export default Responsibility;
