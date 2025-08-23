import type { Metadata } from "next";
import client from "../../../sanityClient";
import { PortableText } from "@portabletext/react";
import { notFound } from "next/navigation";
import AnimatedText from "@/components/AnimatedText3";
import { generateMetadata } from "@/app/metadata";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = await client.fetch(
    `*[_type == "post" && slug.current == $slug][0]{
      title,
      body,
      mainImage {
        asset->{url}
      },
      publishedAt
    }`,
    { slug },
  );

  if (!post) return generateMetadata();

  // Extract first paragraph for description
  const firstParagraph = post.body?.[0]?.children?.[0]?.text || "";
  const description =
    firstParagraph.length > 160
      ? firstParagraph.substring(0, 160) + "..."
      : firstParagraph;

  return generateMetadata(
    `${post.title} | Blog Nemwood`,
    description,
    post.mainImage?.asset?.url || "/images/nemohero.webp",
    `https://nemwood.be/blog/${slug}`,
  );
}

export async function generateStaticParams() {
  const slugs = await client.fetch(
    `*[_type == "post" && defined(slug.current)][].slug.current`,
  );
  return slugs.map((slug: string) => ({ slug }));
}

export default async function BlogPostPage(props: any) {
  const params = await props.params;
  const post = await client.fetch(
    `*[_type == "post" && slug.current == $slug][0]{
      title,
      body,
      mainImage {
        asset->{url}
      },
      publishedAt
    }`,
    { slug: params.slug },
  );

  if (!post) return notFound();

  return (
    <main className="bg-secondary text-primary px-4 pb-20 md:px-8">
      <div className="mx-auto py-60 text-center">
        <AnimatedText isHero delay={0.0} stagger={0.3}>
          <h1 className="font-ITCGaramondN mb-6 text-6xl md:text-8xl">
            {post.title}
          </h1>
        </AnimatedText>
      </div>
      {post.publishedAt && (
        <p className="mb-6 text-center text-sm text-gray-400">
          {new Date(post.publishedAt).toLocaleDateString()}
        </p>
      )}
      {post.mainImage && (
        <img
          src={post.mainImage.asset.url}
          alt={post.title}
          className="mb-8 max-h-[620px] w-full rounded-sm object-cover"
        />
      )}
      <div className="font-NHD max-w-2xl text-xl">
        <PortableText value={post.body} />
      </div>
    </main>
  );
}
