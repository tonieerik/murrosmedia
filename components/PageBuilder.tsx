import ContactBlockWithSidebar from "./blocks/ContactBlockWithSidebar";
import CtaBlock from "./blocks/CtaBlock";
import GreenBlock from "./blocks/GreenBlock";
import ImageBlock from "./blocks/ImageBlock";
import PortfolioBlock from "./blocks/PortfolioBlock";
import QuoteBlock from "./blocks/QuoteBlock";
import ReferenceBlock from "./blocks/ReferenceBlock";
import SeparatorBlock from "./blocks/SeparatorBlock";
import ServiceBlock from "./blocks/ServiceBlock";
import ServiceBlockWithSidebar from "./blocks/ServiceBlockWithSidebar";
import TestimonialBlock from "./blocks/TestimonialBlock";
import TextBlock from "./blocks/TextBlock";
import TwoColumnContentBlock from "./blocks/TwoColumnContentBlock";
import { PageBlock, TextBlockType } from "@/interfaces/pageBlocks";

const renderBlock = (block: PageBlock) => {
  switch (block._type) {
    case "contactBlockWithSidebar":
      return (
        <ContactBlockWithSidebar
          sidebarHeader={block.sidebarHeader}
          content={block.content}
          image={block.image}
          imageAlt={block.imageAlt}
        />
      );
    case "ctaBlock":
      return <CtaBlock {...block} />;
    case "greenBlock":
      return <GreenBlock {...block} />;
    case "imageBlock":
      return <ImageBlock {...block} />;
    case "portfolioBlock":
      return <PortfolioBlock value={block.content} />;
    case "quoteBlock":
      return <QuoteBlock value={block.content} />;
    case "referenceBlock":
      return <ReferenceBlock value={block.title} />;
    case "separatorBlock":
      return <SeparatorBlock />;
    case "serviceBlock":
      return <ServiceBlock value={block.title} />;
    case "serviceBlockWithSidebar":
      return (
        <ServiceBlockWithSidebar
          value={block.title}
          sidebarHeader={block.sidebarHeader}
        />
      );
    case "testimonialBlock":
      return <TestimonialBlock value={block.title} />;
    case "textBlock":
      return (
        <TextBlock
          value={block.content}
          image={block.image}
          imageAlt={block.imageAlt}
          imagePosition={block.imagePosition}
          customWidth={block.customWidth}
        />
      );
    case "twoColumnContentBlock":
      return (
        <TwoColumnContentBlock header={block.header} items={block.items} />
      );
    default:
      return null;
  }
};

const PageBuilder = ({ blocks }: { blocks: PageBlock[] }) => (
  <div>
    {blocks?.map((block, index) => {
      const noTopPadding =
        (block._type === "greenBlock" ||
          block._type === "textBlock" ||
          block._type === "twoColumnContentBlock") &&
        (block as TextBlockType).noTopPadding;
      const noBottomPadding =
        (block._type === "greenBlock" ||
          block._type === "textBlock" ||
          block._type === "twoColumnContentBlock") &&
        (block as TextBlockType).noBottomPadding;

      const key = `block-${index}`;

      switch (block._type) {
        case "ctaBlock":
        case "greenBlock":
        case "separatorBlock":
        case "serviceBlock":
        case "textBlock":
        case "twoColumnContentBlock":
          return (
            <div
              key={key}
              className={`px-4 md:px-16 max-w-6xl mx-auto${
                noTopPadding ? "" : " mt-16"
              }${noBottomPadding ? "" : " mb-16"}`}
            >
              {renderBlock(block)}
            </div>
          );

        case "contactBlockWithSidebar":
        case "imageBlock":
        case "portfolioBlock":
        case "quoteBlock":
        case "referenceBlock":
        case "serviceBlockWithSidebar":
        case "testimonialBlock":
          return <div key={key}>{renderBlock(block)}</div>;

        default:
          return null;
      }
    })}
  </div>
);

export default PageBuilder;
