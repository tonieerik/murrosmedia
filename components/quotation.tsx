import { PortableText } from "@portabletext/react";
import { PortableTextBlock } from "@portabletext/types";

const Quotation = ({ content }: { content: PortableTextBlock[] }) => (
  <section className="bg-teal flex justify-center items-center text-gray-100 font-bold tracking-wider h-64 md:h-56 md:text-md lg:text-xl xl:text-2xl px-10">
    <center>
      <i className="quotation w-1/2 m-0">
        <PortableText value={content} />
      </i>
    </center>
  </section>
);

export default Quotation;
