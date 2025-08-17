import { client } from "@/lib/sanity";
import { ReferenceLogo } from "@/interfaces/referenceLogo";
import References from "../references";

const ReferenceBlock = async ({ value }: { value: string }) => {
  const logos = await client.fetch<ReferenceLogo[]>(
    `*[_type == "collaborationLogo"]`
  );

  return <References title={value} logos={logos} />;
};

export default ReferenceBlock;
