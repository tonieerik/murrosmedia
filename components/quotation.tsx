import { PortableText } from "@portabletext/react";
import { PortableTextBlock } from "@portabletext/types";

const Quotation = ({ content }: { content: PortableTextBlock[] }) => (
  <section className="bg-teal flex justify-center items-center text-gray-100 font-bold tracking-wider leading-10 h-64 text-2xl md:h-56 md:text-xl md:px-10">
    <center>
      <i className="w-1/2">
        <PortableText value={content} />
      </i>
    </center>
  </section>
);

export default Quotation;
