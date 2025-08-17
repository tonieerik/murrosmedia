import Link from "next/link";

type CtaBlockProps = {
  text: string;
  url: string;
};

const CtaBlock = ({ text, url }: CtaBlockProps) => (
  <Link
    href={url}
    className="mt-12 mb-6 md:mb-0 inline-block bg-orange text-white py-3 px-6 rounded-lg shadow-md hover:bg-orange-600 transition-all"
  >
    {text}
  </Link>
);

export default CtaBlock;
