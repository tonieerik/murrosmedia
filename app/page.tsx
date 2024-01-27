import Contact from "@/components/contact";
import Intro from "@/components/intro";
import Quotation from "@/components/quotation";
import Services from "@/components/services";
import Testimonials from "@/components/testimonials";
import { Metadata } from "next";
import Image from "next/image";

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

const Page = () => (
  <>
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
    <Testimonials />
    <Quotation content={quotation2} />
    <Contact />
  </>
);

export default Page;
