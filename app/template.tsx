import Footer from "@/components/footer";

import "@/styles/template.css";

const Template = ({ children }: { children: React.ReactNode }) => (
  <>
    {children}
    <Footer />
  </>
);

export default Template;
