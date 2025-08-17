import { Metadata } from "next";
import { fetchPageBySlug } from "@/lib/sanity";
import Menu from "@/components/menu";
import PageBuilder from "@/components/PageBuilder";

export const dynamic = "force-dynamic";

export const metadata: Metadata = {
  title: "Kuunteleva kumppanisi vastuullisuusviestintään | Murrosmedia",
  description:
    "Kilpailuetua vastuullisuusviestinnällä! Ulkoista yrityksesi sisällöntuotanto kokeneelle freelancerille tai ota itse haltuun vastuullisen viestinnän salat.",
  alternates: {
    canonical: "https://murrosmedia.fi",
  },
  openGraph: {
    siteName: "Murrosmedia",
  },
};

const IndexPage = async () => {
  const page = await fetchPageBySlug("etusivu");

  return (
    <>
      <Menu currentPage="" />
      <PageBuilder blocks={page.pageBuilder} />
    </>
  );
};

export default IndexPage;
