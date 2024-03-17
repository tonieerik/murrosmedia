import type { Page } from "@/interfaces/page";
import { Service } from "@/interfaces/service";
import { client } from "@/utils/sanity";
import { PortableText } from "@portabletext/react";
import React from "react";

const MainServices = async () => {
  const mainService = (
    await client.fetch<Page[]>(`*[_type == "page" && pageKey == "mainService"]`)
  )[0];

  return (
    <section className="services">
      <h1>{mainService.title}</h1>
      <div className="flex flex-col md:flex-row">
        <div className="w-full md:w-1/2">
          {mainService.header?.map((content, i) => (
            <PortableText
              key={`responsibility-communication-header-b${i}`}
              value={content}
            />
          ))}
        </div>
        <div className="w-full mt-6 md:mt-0 md:w-1/2 md:ml-8">
          {mainService.content.map((content, i) => (
            <PortableText
              key={`responsibility-communication-content-b${i}`}
              value={content}
            />
          ))}
          <button className="mt-8">
            <a
              href={mainService?.ctaUrl}
              className="bg-orange text-white rounded font-bold p-2"
            >
              {mainService?.ctaText}
            </a>
          </button>
        </div>
      </div>
    </section>
  );
};

const OtherServices = async () => {
  const otherServicesTitle = await client.fetch<Page[]>(
    `*[_type == "page" && pageKey == "otherServicesTitle"]`
  );
  const otherServices = await client.fetch<Service[]>(`*[_type == "service"]`);

  return (
    <div className="mt-12 mb-8">
      {otherServicesTitle.map((paragraph, index) =>
        paragraph.content.map((content, i) => (
          <PortableText
            key={`other-services-header-p${index}-b${i}`}
            value={content}
          />
        ))
      )}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-8">
        {otherServices.map((service, index) => (
          <div key={service.title} className="">
            <h2 className="text-teal text-xl font-bold">{service.title}</h2>
            {service.text.map((content, i) => (
              <PortableText
                key={`other-service-p${index}-b${i}`}
                value={content}
              />
            ))}
            <button className="my-8">
              <a
                href={service.url}
                className="bg-orange text-white rounded font-bold p-2"
              >
                {service.cta}
              </a>
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

const Services = () => {
  return (
    <section className="bg-orange flex mx-0" id="mita-teen">
      <div className="hidden md:block self-center text-xl text-white whitespace-no-wrap transform -rotate-90 tracking-widest w-1/6">
        MITEN&nbsp;VOIN&nbsp;AUTTAA?
      </div>
      <div className="w-full bg-white py-12 px-12">
        <MainServices />
        <hr className="mt-16" />
        <OtherServices />
      </div>
    </section>
  );
};

export default Services;
