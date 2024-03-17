import type { Page } from "@/interfaces/page";
import { PortfolioText } from "@/interfaces/portfolioText";
import { client } from "@/utils/sanity";
import { PortableText } from "@portabletext/react";
import SanityImage from "./SanityImage";

const Portfolio = async () => {
  const portfolioContent = (
    await client.fetch<Page[]>(`*[_type == "page" && pageKey == "portfolio"]`)
  )[0];
  const portfolioTexts = await client.fetch<PortfolioText[]>(
    `*[_type == "portfolioText"]`
  );

  return (
    <section className="bg-orange flex mx-0" id="portfolio">
      <div className="w-full bg-white flex pb-8 px-2 lg:px-8 flex-row md:px-0 md:flex-col">
        <div className="bg-white p-8 md:p-16">
          <h1 className="text-teal text-2xl">{portfolioContent.title}</h1>
          {portfolioContent.content.map((content, i) => (
            <PortableText key={`portfolio-b${i}`} value={content} />
          ))}
          <div className="w-full grid gap-8 grid-cols-1 lg:grid-cols-2 mt-12 lg:mt-0">
            {portfolioTexts
              .sort((a, b) => a.order - b.order)
              .map((text, i) => (
                <div
                  key={`portfolioText-${i}`}
                  className="lg:mt-8 mb-4 lg:pl-8"
                >
                  <SanityImage
                    src={text.image}
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
    </section>
  );
};
export default Portfolio;
