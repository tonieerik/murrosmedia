"use server";

import { Page } from "@/interfaces/page";
import { client } from "@/utils/sanity";
import { PortableText } from "@portabletext/react";

const Intro = async () => {
  const introContent = (
    await client.fetch<Page[]>(`*[_type == "page" && pageKey == "frontpage"]`)
  )[0];

  return (
    <section className="mx-8 my-8 md:mx-48 md:my-16">
      {introContent.header?.map((content, i) => (
        <PortableText key={`intro-b${i}`} value={content} />
      ))}
    </section>
  );
};

export default Intro;
