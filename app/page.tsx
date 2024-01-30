import { Metadata } from "next";
import Image from "next/image";
import Contact from "@/components/contact";
import Intro from "@/components/intro";
import Quotation from "@/components/quotation";
import Services from "@/components/services";
import Testimonials from "@/components/testimonials";
import { Testimonial } from "@/interfaces/testimonial";
import { client } from "@/utils/sanity";
import Menu from "@/components/menu";
import Collaboration from "@/components/collaboration";

export const metadata: Metadata = {
  title: "Mandariinimedia",
  description: "Mandariinimedia",
};

const quotation1 = [
  "Vain viestinnän avulla vastuulliset teot tulevat näkyviksi – sekä organisaation sisällä",
  "että ulkoisille sidosryhmille. Ilman viestintää vastuullisuus jää auttamatta pimentoon.",
];
const quotation2 = [
  "Avoin, ymmärrettävä ja uskottava vastuullisuusviestintä herättää luottamusta.",
  "Luottamus taas vahvistaa potentiaalisen asiakkaan halua ostaa juuri sinulta.",
];

const Page = async () => {
  const testimonials = await client.fetch<Testimonial[]>(
    `*[_type == "testimonial"]`
  );

  return (
    <>
      <Menu currentPage="" />
      <Intro />
      <Quotation content={quotation1} />
      <Services />
      <Image
        className="mt-0"
        alt="Sisällöntuottaja Jyväskylästä"
        src="/sisallontuottaja-jyvaskyla.jpg"
        width="2000"
        height="1334"
      />
      <Collaboration />
      <Testimonials testimonials={testimonials} />
      <Quotation content={quotation2} />
      <Contact />
    </>
  );
};

export default Page;
