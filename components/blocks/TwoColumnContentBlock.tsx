"use client";

import type { PortableTextBlock } from "@portabletext/types";
import TextBlock from "./TextBlock";
import ImageBlock from "./ImageBlock";
import GreenBlock from "./GreenBlock";

type Block =
  | { _type: "textBlock"; content: PortableTextBlock[] }
  | { _type: "imageBlock"; image?: any; alt?: string; fullWidth?: boolean }
  | { _type: "greenBlock"; header: string; content: PortableTextBlock[] };

type TwoColumnContentBlockProps = {
  header: string;
  items: Block[];
};

const TwoColumnContentBlock = ({
  header,
  items,
}: TwoColumnContentBlockProps) => {
  const renderBlock = (block: Block, i: number) => {
    switch (block._type) {
      case "textBlock":
        return <TextBlock key={i} value={block.content} />;
      case "imageBlock":
        return <ImageBlock key={i} {...block} />;
      case "greenBlock":
        return (
          <GreenBlock key={i} header={block.header} content={block.content} />
        );
      default:
        return null;
    }
  };

  if (!items || items.length === 0) {
    return null;
  }

  return (
    <>
      {header && <h2 className="font-bold mt-4 mb-4 text-teal">{header}</h2>}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {items.map((block, i) => (
          <div key={i} className="w-full">
            {renderBlock(block, i)}
          </div>
        ))}
      </div>
    </>
  );
};

export default TwoColumnContentBlock;
