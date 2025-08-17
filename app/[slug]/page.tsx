import { fetchPageBySlug } from "@/lib/sanity";
import { notFound } from "next/navigation";
import PageBuilder from "@/components/PageBuilder";
import Menu from "@/components/menu";
import type { Metadata } from "next";

export const dynamic = "force-dynamic";

export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Promise<Metadata> {
  const page = await fetchPageBySlug(params.slug);

  if (!page) return { title: "Not Found" };

  return {
    title: page.title || "Murrosmedia",
    description: page.metaDescription
      ? page.metaDescription + " | Murrosmedia"
      : undefined,
    openGraph: {
      title: page.title + " | Murrosmedia",
      description: page.metaDescription,
      url: `https://murrosmedia.fi/${params.slug}`,
      siteName: "Murrosmedia",
    },
  };
}

const Page = async ({ params }: { params: { slug: string } }) => {
  const page = await fetchPageBySlug(params.slug);

  if (!page) notFound();

  return (
    <>
      <Menu currentPage={params.slug} headerText={page.headerTitle} />
      <PageBuilder blocks={page.pageBuilder} />
    </>
  );
};

export default Page;
