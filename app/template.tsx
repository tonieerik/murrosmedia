import Footer from "@/components/footer";
import Header from "@/components/header";
import Menu from "@/components/menu";

import "@/styles/template.css";

const Template = ({ children }: { children: React.ReactNode }) => (
  <>
    <Header />
    <Menu />
    {children}
    <Footer />
  </>
);

export default Template;
