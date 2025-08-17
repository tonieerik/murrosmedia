import { PortableText } from "@portabletext/react";
import { PortableTextBlock } from "@portabletext/types";
import SanityImage from "../SanityImage";

type TextBlockProps = {
  value: PortableTextBlock[];
  image?: any;
  imageAlt?: string;
  imagePosition?: "left" | "right";
  customWidth?: number;
  noTopPadding?: boolean;
  noBottomPadding?: boolean;
};

const TextBlock = ({
  value,
  image,
  imageAlt,
  imagePosition = "left",
  customWidth,
}: TextBlockProps) => {
  const id = `text-block-${Math.floor(Math.random() * 10000)}`;

  return (
    <>
      {customWidth && (
        <style>{`
          @media (min-width: 768px) {
            #${id} {
              width: ${customWidth}%;
            }
          }
        `}</style>
      )}

      <div id={id} className="w-full flow-root">
        {image && (
          <div
            className={`hidden lg:block w-full lg:w-1/2 mb-12 lg:mb-0${
              imagePosition === "right"
                ? " float-right ml-12"
                : " float-left mr-12"
            }`}
          >
            <SanityImage
              src={image}
              alt={imageAlt || ""}
              width={image.asset.metadata.dimensions.width}
              height={image.asset.metadata.dimensions.height}
            />
          </div>
        )}
        <PortableText value={value} />
      </div>
    </>
  );
};

export default TextBlock;
