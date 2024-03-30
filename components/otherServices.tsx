import type { Page } from "@/interfaces/page";
import { Service } from "@/interfaces/service";
import { client } from "@/utils/sanity";
import { PortableText } from "@portabletext/react";

const OtherServices = async () => {
  const pageContent = (
    await client.fetch<Page[]>(
      `*[_type == "page" && pageKey == "otherServices"]`
    )
  )[0];
  const services = await client.fetch<Service[]>(`*[_type == "service"]`);

  return (
    <section className="services mx-8 my-8 md:mx-48 md:my-16">
      <h1>{pageContent.title}</h1>
      {pageContent.header?.map((content, i) => (
        <PortableText key={`other-services-header-b${i}`} value={content} />
      ))}
      {services.map((service, index) => (
        <div
          key={`service-${index}`}
          className="service-block w-full xl:w-2/3 mt-12 bg-teal rounded-xl p-6 lg:p-12 text-white"
        >
          <h2 className="text-2xl color-white font-bold">{service.title}</h2>
          {service.longText.map((content, i) => (
            <PortableText
              key={`other-services-block-p${index}-b${i}`}
              value={content}
            />
          ))}
        </div>
      ))}
      <div className="mt-12">
        {pageContent.footer?.map((content, i) => (
          <PortableText key={`other-services-footer-b${i}`} value={content} />
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

export default OtherServices;
