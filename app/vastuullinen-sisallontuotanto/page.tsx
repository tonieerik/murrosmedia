import { Metadata } from "next";
import Menu from "@/components/menu";
import ResponsibilityCommunication from "@/components/responsibilityCommunication";

export const metadata: Metadata = {
  title: "Mandariinimedia",
  description: "Mandariinimedia",
};

const Page = async () => (
  <>
    <Menu
      currentPage="vastuullinen-sisallontuotanto"
      headerText="Vastuullinen sisällöntuotanto"
      subHeader={[
        "Sisällöntuotanto vastuullisuusraportin pohjalta",
        "Vastuullisuusraportti helppolukuiseen kuntoon",
        "Vastuullisuusviestinnän sparraus ja suunnittelu",
      ]}
    />
    <ResponsibilityCommunication />
  </>
);

export default Page;
