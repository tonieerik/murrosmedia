import { Metadata } from "next";
import Menu from "@/components/menu";
import OtherServices from "@/components/otherServices";

export const metadata: Metadata = {
  title: "Mandariinimedia",
  description: "Mandariinimedia",
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
