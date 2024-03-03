import { Metadata } from "next";
import Menu from "@/components/menu";
import AboutMe from "@/components/aboutMe";

export const metadata: Metadata = {
  title: "Mandariinimedia",
  description: "Mandariinimedia",
};

const Page = async () => (
  <>
    <Menu currentPage="minusta" headerText="Sananen minusta" />
    <AboutMe />
  </>
);

export default Page;
