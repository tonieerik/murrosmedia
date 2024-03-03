import Image from "next/image";
import React from "react";
import { CollaborationLogo } from "@/interfaces/collaborationLogo";
import { client, urlFor } from "@/utils/sanity";

const Collaboration = async () => {
  const logos = await client.fetch<CollaborationLogo[]>(
    `*[_type == "collaborationLogo"]`
  );

  return (
    <section
      className="bg-white flex flex-col mx-4 md:mx-0 my-12"
      id="collaboration"
    >
      <h2 className="text-2xl text-teal flex justify-center mt-4 mb-0">
        KÄDENJÄLKEENI OVAT LUOTTANEET MUUN MUASSA
      </h2>
      <div className="w-full md:w-2/3 mx-auto p-8 bg-white">
        <div className="grid gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {logos
            .sort((a, b) => a.order - b.order)
            .map((logo, i) => (
              <div key={`collaborationLogo-${i}`}>
                <a
                  className="underline flex flex-col justify-center items-center"
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
    </section>
  );
};

export default Collaboration;
