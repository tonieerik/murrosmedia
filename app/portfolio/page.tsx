import { Metadata } from "next";
import Portfolio from "@/components/portfolio";
import Menu from "@/components/menu";

export const metadata: Metadata = {
  title: "Kuunteleva kumppanisi vastuullisuusviestintään | Murrosmedia",
  description:
    "Kilpailuetua vastuullisuusviestinnällä! Ulkoista yrityksesi sisällöntuotanto kokeneelle freelancerille tai ota itse haltuun vastuullisen viestinnän salat.",
};

const Page = async () => (
  <>
    <Menu currentPage="portfolio" />
    <Portfolio />
  </>
);

export default Page;
