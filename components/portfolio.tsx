import { PortfolioText } from "@/interfaces/portfolioText";
import { client } from "@/lib/sanity";
import { PortableText } from "@portabletext/react";

const Portfolio = async ({ content }: { content: any }) => {
  const portfolioTexts = await client.fetch<PortfolioText[]>(
    `*[_type == "portfolioText"]`
  );

  return (
    <section className="bg-orange flex mx-0" id="portfolio">
      <div className="w-full bg-white flex pb-8 px-2 lg:px-8 flex-row md:px-0 md:flex-col">
        <div className="bg-white mx-8 my-8 md:mx-48 md:my-16">
          <PortableText value={content} />
          <hr className="mt-12 md:mb-12" />
          <div className="w-full grid gap-8 grid-cols-1 lg:grid-cols-2 mt-12 lg:mt-0">
            {portfolioTexts
              .sort((a, b) => a.order - b.order)
              .map((text, i) => (
                <div key={`portfolioText-${i}`}>
                  <p className="mb-2 text-md font-bold">
                    <a
                      className="underline text-teal"
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
