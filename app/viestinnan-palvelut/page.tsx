import { Metadata } from "next";
import Menu from "@/components/menu";
import OtherServices from "@/components/otherServices";

export const metadata: Metadata = {
  title: "Luova kumppanisi vastuullisuusviestintään | Mandariinimedia",
  description:
    "Kilpailuetua vastuullisuusviestinnällä! Ulkoista yrityksesi sisällöntuotanto kokeneelle freelancerille tai ota itse haltuun vastuullisen viestinnän salat.",
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
