import Image from "next/image";
import React from "react";
import { CollaborationLogo } from "@/interfaces/collaborationLogo";
import { client, urlFor } from "@/utils/sanity";

const Content = async () => {
  const logos = await client.fetch<CollaborationLogo[]>(
    `*[_type == "collaborationLogo"]`
  );

  return (
    <div className="w-full md:w-2/3 mx-auto p-8 bg-white">
      <h2 className="text-2xl text-teal flex justify-center mb-12">
        KÄDENJÄLKEENI OVAT LUOTTANEET MUUN MUASSA
      </h2>
      <div className="grid gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {logos
          .sort((a, b) => a.order - b.order)
          .map((logo, i) => (
            <div key={`collaborationLogo-${i}`}>
              <a
                className="underline"
                href={logo.url}
                target="_blank"
                rel="noreferrer"
              >
                <Image
                  src={urlFor(logo.logo)}
                  alt={logo.altText}
                  width={250}
                  height={100}
                />
              </a>
            </div>
          ))}
      </div>
    </div>
  );
};

const Collaboration = () => (
  <section className="bg-white flex mx-0" id="collaboration">
    <Content />
  </section>
);

export default Collaboration;
