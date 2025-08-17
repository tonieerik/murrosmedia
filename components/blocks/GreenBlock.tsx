"use client";

import { PortableText } from "@portabletext/react";

type GreenBlockProps = {
  header: string;
  content: any;
};

const GreenBlock = ({ header, content }: GreenBlockProps) => (
  <div className="w-full h-full flex flex-col green-block">
    {header && <h1 className="text-2xl font-bold mb-4 text-teal">{header}</h1>}
    <div className="bg-teal text-white p-6 lg:p-12 rounded-lg flex-1 flex flex-col">
      <div className="flex-1">
        <PortableText value={content} />
      </div>
    </div>
  </div>
);

export default GreenBlock;
