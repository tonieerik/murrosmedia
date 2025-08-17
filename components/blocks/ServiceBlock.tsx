import { PortableText } from "@portabletext/react";
import { Service } from "@/interfaces/service";
import { client } from "@/lib/sanity";

const ServiceBlock = async ({ value }: { value: string }) => {
  const services = await client.fetch<Service[]>(`*[_type == "service"]`);

  return (
    <div className="services">
      <h1>{value}</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-8">
        {services
          .sort((a, b) => a.order - b.order)
          .map((service, index) => (
            <div key={service.title} className="">
              <h2 className="text-teal text-xl font-bold">{service.title}</h2>
              {service.text.map((content, i) => (
                <PortableText
                  key={`other-service-p${index}-b${i}`}
                  value={content}
                />
              ))}
              <button className="mt-4 mb-8">
                <a
                  href={service.url}
                  className="bg-orange text-white rounded p-2"
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

export default ServiceBlock;
