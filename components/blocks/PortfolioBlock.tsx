import { PortableTextBlock } from "@portabletext/types";
import Portfolio from "../portfolio";

const PortfolioBlock = ({ value }: { value: PortableTextBlock[] }) => (
  <Portfolio content={value} />
);

export default PortfolioBlock;
