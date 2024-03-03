import { Metadata } from "next";
import Menu from "@/components/menu";
import OtherServices from "@/components/otherServices";

export const metadata: Metadata = {
  title: "Mandariinimedia",
  description: "Mandariinimedia",
};

const Page = async () => (
  <>
    <Menu currentPage="viestinnan-palvelut" headerText="Viestinnän palvelut" />
    <OtherServices />
  </>
);

export default Page;
