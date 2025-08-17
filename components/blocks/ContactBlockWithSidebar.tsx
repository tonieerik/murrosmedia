import { PortableTextBlock } from "@portabletext/types";
import Contact from "../contact";

const ContactBlockWithSidebar = async ({
  sidebarHeader,
  content,
  image,
  imageAlt,
}: {
  sidebarHeader: string;
  content: PortableTextBlock[];
  image?: any;
  imageAlt?: string;
}) => (
  <Contact
    title={sidebarHeader}
    content={content}
    image={image}
    imageAlt={imageAlt}
  />
);

export default ContactBlockWithSidebar;
