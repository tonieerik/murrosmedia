"use server";

import { Page } from "@/interfaces/page";
import { client } from "@/utils/sanity";
import { PortableText } from "@portabletext/react";

const Intro = async () => {
  const introContent = await client.fetch<Page[]>(
    `*[_type == "page" && pageKey == "intro"]`
  );

  return (
    <section className="mx-8 my-8 md:mx-48 md:my-16">
      {introContent.map((paragraph, index) =>
        paragraph.content.map((content, i) => (
          <PortableText key={`intro-p${index}-b${i}`} value={content} />
        ))
      )}
    </section>
  );
};

export default Intro;
