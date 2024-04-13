import { CollaborationLogo } from "@/interfaces/collaborationLogo";
import SanityImage from "./SanityImage";

const Collaboration = ({ logos }: { logos: CollaborationLogo[] }) => (
  <section
    className="bg-white flex flex-col mx-4 md:mx-0 my-12"
    id="collaboration"
  >
    <center>
      <h2 className="text-2xl text-teal flex justify-center mt-4 mb-8">
        KÄDENJÄLKEENI OVAT LUOTTANEET MUUN MUASSA
      </h2>
    </center>
    <div className="w-full md:w-2/3 mx-auto p-8 bg-white">
      <div className="grid gap-16 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 flex flex-col justify-center items-center">
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
                <SanityImage
                  src={logo.logo}
                  alt={logo.altText}
                  width={600}
                  height={100}
                />
              </a>
            </div>
          ))}
      </div>
    </div>
  </section>
);

export default Collaboration;
