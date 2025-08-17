import { PortableText } from "@portabletext/react";
import { PortableTextBlock } from "@portabletext/types";

const QuoteBlock = ({ value }: { value: PortableTextBlock[] }) => (
  <section className="bg-teal flex justify-center items-center text-gray-100 tracking-wider h-64 md:h-72 text-xl md:text-md lg:text-xl xl:text-2xl px-8">
    <center>
      <i className="quotation w-1/2 m-0">
        <PortableText value={value} />
      </i>
    </center>
  </section>
);

export default QuoteBlock;
