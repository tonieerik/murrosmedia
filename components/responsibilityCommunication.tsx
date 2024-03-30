import type { Page } from "@/interfaces/page";
import { client } from "@/utils/sanity";
import { PortableText } from "@portabletext/react";

const ResponsibilityCommunication = async () => {
  const pageContent = (
    await client.fetch<Page[]>(
      `*[_type == "page" && pageKey == "responsibilityCommunication"]`
    )
  )[0];
  const block1Content = (
    await client.fetch<Page[]>(
      `*[_type == "page" && pageKey == "responsibilityCommunication1"]`
    )
  )[0];
  const block2Content = (
    await client.fetch<Page[]>(
      `*[_type == "page" && pageKey == "responsibilityCommunication2"]`
    )
  )[0];
  const block3Content = (
    await client.fetch<Page[]>(
      `*[_type == "page" && pageKey == "responsibilityCommunication3"]`
    )
  )[0];

  return (
    <section className="services mx-8 my-8 md:mx-48 md:my-16">
      <div className="my-12">
        {pageContent.header?.map((content, i) => (
          <PortableText
            key={`responsibility-communication-header-b${i}`}
            value={content}
          />
        ))}
      </div>
      <h2 className="">{pageContent.title}</h2>
      <div className="w-full xl:w-2/3 bg-teal rounded-xl p-6 lg:p-12 text-white drop-shadow-xl">
        {block1Content.content.map((content, i) => (
          <PortableText
            key={`responsibility-communication-block1-b${i}`}
            value={content}
          />
        ))}
      </div>
      <div className="w-full xl:w-2/3 bg-teal rounded-xl p-6 lg:p-12 text-white my-12 drop-shadow-xl">
        {block2Content.content.map((content, i) => (
          <PortableText
            key={`responsibility-communication-block2-b${i}`}
            value={content}
          />
        ))}
      </div>
      <div className="w-full xl:w-2/3 bg-teal rounded-xl p-6 lg:p-12 text-white drop-shadow-xl">
        {block3Content.content.map((content, i) => (
          <PortableText
            key={`responsibility-communication-block3-b${i}`}
            value={content}
          />
        ))}
      </div>
      <div className="mt-12">
        {pageContent.footer?.map((content, i) => (
          <PortableText
            key={`responsibility-communication-footer-b${i}`}
            value={content}
          />
        ))}
      </div>
      <button className="mt-8">
        <a
          href={pageContent?.ctaUrl}
          className="bg-orange text-white rounded p-4 drop-shadow"
        >
          {pageContent?.ctaText}
        </a>
      </button>
    </section>
  );
};

export default ResponsibilityCommunication;
