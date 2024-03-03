import { Metadata } from "next";
import Menu from "@/components/menu";
import Responsibility from "@/components/responsibility";

export const metadata: Metadata = {
  title: "Mandariinimedia",
  description: "Mandariinimedia",
};

const Page = async () => (
  <>
    <Menu currentPage="vastuullisuus" headerText="Vastuullisuudesta" />
    <Responsibility />
  </>
);

export default Page;
