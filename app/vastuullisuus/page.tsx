import { Metadata } from "next";
import Menu from "@/components/menu";
import Responsibility from "@/components/responsibility";

export const metadata: Metadata = {
  title: "Kuunteleva kumppanisi vastuullisuusviestintään | Murrosmedia",
  description:
    "Kilpailuetua vastuullisuusviestinnällä! Ulkoista yrityksesi sisällöntuotanto kokeneelle freelancerille tai ota itse haltuun vastuullisen viestinnän salat.",
  alternates: {
    canonical: "https://murrosmedia.fi/vastuullisuus",
  },
  openGraph: {
    siteName: "Murrosmedia",
  },
};

const Page = async () => (
  <>
    <Menu currentPage="vastuullisuus" headerText="Vastuullisuudesta" />
    <Responsibility />
  </>
);

export default Page;
