import { Metadata } from "next";
import Menu from "@/components/menu";
import ResponsibilityCommunication from "@/components/responsibilityCommunication";

export const metadata: Metadata = {
  title: "Kuunteleva kumppanisi vastuullisuusviestintään | Murrosmedia",
  description:
    "Kilpailuetua vastuullisuusviestinnällä! Ulkoista yrityksesi sisällöntuotanto kokeneelle freelancerille tai ota itse haltuun vastuullisen viestinnän salat.",
};

const Page = async () => (
  <>
    <Menu
      currentPage="vastuullisuusviestinta"
      headerText="Vastuullisuusviestintä"
      // subHeader={[
      //   "Sisällöntuotanto vastuullisuusraportin pohjalta",
      //   "Vastuullisuusraportti helppolukuiseen kuntoon",
      //   "Vastuullisuusviestinnän sparraus ja suunnittelu",
      // ]}
    />
    <ResponsibilityCommunication />
  </>
);

export default Page;
