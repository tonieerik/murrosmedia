import { Metadata } from "next";
import Portfolio from "@/components/portfolio";
import Menu from "@/components/menu";

export const metadata: Metadata = {
  title: "Mandariinimedia",
  description: "Mandariinimedia",
};

const Page = async () => (
  <>
    <Menu currentPage="portfolio" />
    <Portfolio />
  </>
);

export default Page;
