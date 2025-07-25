import AnimatedText from "@/components/AnimatedText3";
import client from "@/sanityClient";
import { PortableText } from "@portabletext/react";
import Image from "next/image";
import Link from "next/link";

export default async function BlogPage() {
  const posts = await client.fetch(
    `*[_type == "post"]|order(_createdAt desc){
      _id,
      title,
      slug,
      mainImage {
        asset->{url}
      },
      publishedAt,
      body
    }`,
  );

  return (
    <>
      <main className="text-primary bg-secondary px-4 md:px-8">
        <div className="mx-auto py-40 text-center">
          <AnimatedText isHero delay={0.0} stagger={0.3}>
            <h1 className="font-ITCGaramondN mb-6 text-6xl">
              Latest news & updates
            </h1>
            <p className="font-HelveticaNow mx-auto max-w-2xl text-lg">
              Vous cherchez un artisan menuisier en Belgique pour créer des
              meubles en bois sur mesure ? Nemwood est spécialisé dans la
              fabrication artisanale de tables, chaises, garde-robes, escaliers
              et même de décors pour le cinéma.
            </p>
          </AnimatedText>
        </div>
        <ul className="mt-8 grid gap-10 md:grid-cols-3">
          {posts.map((post: any) => (
            <li key={post._id} className="flex flex-col overflow-hidden">
              <Link href={`/blog/${post.slug.current}`} className="group block">
                {post.mainImage && (
                  <div className="bg-secondary relative h-[400px] w-full overflow-hidden">
                    <img
                      src={post.mainImage.asset.url}
                      alt={post.title}
                      className="h-full w-full object-cover object-center transition-transform duration-500 group-hover:scale-105"
                      loading="lazy"
                    />
                  </div>
                )}
                <div className="flex flex-1 flex-col justify-between py-6">
                  <div>
                    {post.publishedAt && (
                      <p className="font-NHD mb-2 text-xs">
                        {new Date(post.publishedAt).toLocaleDateString()}
                      </p>
                    )}
                    <h5 className="font-ITCGaramondN mb-2 text-2xl leading-tight md:text-4xl">
                      {post.title}
                    </h5>

                    <div className="font-NHD mb-2 line-clamp-3 text-base md:text-lg">
                      {post.body && (
                        <PortableText value={post.body.slice(0, 1)} />
                      )}
                    </div>
                  </div>
                  <span className="font-NHD mt-2 inline-block text-base">
                    Read more →
                  </span>
                </div>
              </Link>
            </li>
          ))}
        </ul>
      </main>
      <section className="relative mt-30 h-svh w-full bg-amber-100">
        <Image
          className="absolute inset-0 h-full w-full object-cover"
          src="/images/nemward.webp"
          alt="Hero Image"
          fill
          sizes="100vw"
          quality={100}
          priority
        />
      </section>
    </>
  );
}
