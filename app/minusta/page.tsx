import { Metadata } from "next";
import Menu from "@/components/menu";
import AboutMe from "@/components/aboutMe";

export const metadata: Metadata = {
  title: "Luova kumppanisi vastuullisuusviestintään | Murrosmedia",
  description:
    "Kilpailuetua vastuullisuusviestinnällä! Ulkoista yrityksesi sisällöntuotanto kokeneelle freelancerille tai ota itse haltuun vastuullisen viestinnän salat.",
};

const Page = async () => (
  <>
    <Menu currentPage="minusta" headerText="Sananen minusta" />
    <AboutMe />
  </>
);

export default Page;
