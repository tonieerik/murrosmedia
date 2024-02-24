import Image from "next/image";
import React from "react";
import { Page } from "@/interfaces/page";
import { PortfolioText } from "@/interfaces/portfolioText";
import { client, urlFor } from "@/utils/sanity";
import { PortableText } from "@portabletext/react";

const Content = async () => {
  const portfolioContent = await client.fetch<Page[]>(
    `*[_type == "page" && pageKey == "portfolio"]`
  );
  const portfolioTexts = await client.fetch<PortfolioText[]>(
    `*[_type == "portfolioText"]`
  );

  return (
    <div className="w-full bg-white flex pb-8 px-8 flex-row md:px-0 md:flex-col">
      <div className="bg-white p-8 md:p-16">
        {portfolioContent.map((paragraph, index) =>
          paragraph.content.map((content, i) => (
            <PortableText key={`portfolio-p${index}-b${i}`} value={content} />
          ))
        )}
        <div className="w-full grid gap-8 grid-cols-1 lg:grid-cols-2">
          {portfolioTexts
            .sort((a, b) => a.order - b.order)
            .map((text, i) => (
              <div key={`portfolioText-${i}`} className="lg:mt-8 mb-4 lg:pl-8">
                <Image
                  src={urlFor(text.image)}
                  alt={text.altText}
                  width={1000}
                  height={484}
                  className="mb-4"
                />
                <p className="mb-2 text-md font-bold">
                  <a
                    className="underline"
                    href={text.url}
                    target="_blank"
                    rel="noreferrer"
                  >
                    {text.title}
                  </a>
                </p>
                <p className="text-sm">{text.lead}</p>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
};

const Portfolio = () => (
  <section className="bg-orange flex mx-0" id="portfolio">
    <Content />
  </section>
);

export default Portfolio;
