import { Metadata } from "next";
import Menu from "@/components/menu";
import OtherServices from "@/components/otherServices";

export const metadata: Metadata = {
  title: "Kuunteleva kumppanisi vastuullisuusviestintään | Murrosmedia",
  description:
    "Kilpailuetua vastuullisuusviestinnällä! Ulkoista yrityksesi sisällöntuotanto kokeneelle freelancerille tai ota itse haltuun vastuullisen viestinnän salat.",
  alternates: {
    canonical: "https://murrosmedia.fi/viestinnan-palvelut",
  },
};

const Page = async () => (
  <>
    <Menu
      currentPage="viestinnan-palvelut"
      headerText="Muut viestinnän palvelut"
      // subHeader={["Toimitustyö", "Copywriting", "Kielenhuolto"]}
    />
    <OtherServices />
  </>
);

export default Page;
