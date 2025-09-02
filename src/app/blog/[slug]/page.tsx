import type { Metadata } from "next";
import client from "../../../sanityClient";
import { PortableText } from "@portabletext/react";
import { notFound } from "next/navigation";
import AnimatedText from "@/components/AnimatedText3";
import { generateMetadata as generatePageMetadata } from "@/app/metadata";
import Image from "next/image";
import imageUrlBuilder from "@sanity/image-url";

// Force revalidation every 60 seconds to match blog page
export const revalidate = 60;

// Initialize Sanity image URL builder
const builder = imageUrlBuilder(client);

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
    { cache: "no-store" }, // Force fresh data every time
  );

  if (!post) return generatePageMetadata();

  // Extract first paragraph for description
  const firstParagraph = post.body?.[0]?.children?.[0]?.text || "";
  const description =
    firstParagraph.length > 160
      ? firstParagraph.substring(0, 160) + "..."
      : firstParagraph;

  return generatePageMetadata(
    `${post.title} | Blog Nemwood`,
    description,
    post.mainImage?.asset?.url || "/images/nemohero.webp",
    `https://www.nemwood.be/blog/${slug}`,
  );
}

// Removed generateStaticParams to force server-side rendering
// This ensures immediate updates from Sanity

// PortableText components configuration
const portableTextComponents = {
  types: {
    image: ({ value }: any) => {
      // Handle Sanity image references
      const imageUrl = value?.asset
        ? builder.image(value.asset).url()
        : value?.url;
      const altText = value?.alt || value?.caption || "Blog image";

      // Don't render if no image URL
      if (!imageUrl) {
        return null;
      }

      return (
        <div className="my-8">
          <img
            src={imageUrl}
            alt={altText}
            className="w-full rounded-sm object-cover"
            loading="lazy"
          />
          {value.caption && (
            <p className="mt-2 text-center text-sm text-gray-500">
              {value.caption}
            </p>
          )}
        </div>
      );
    },
  },
};

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
    { cache: "no-store" }, // Force fresh data every time
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
      <div className="font-HelveticaNow max-w-2xl text-xl">
        <PortableText value={post.body} components={portableTextComponents} />
      </div>
    </main>
  );
}
