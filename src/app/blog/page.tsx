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
        <div className="mx-auto py-60 text-center">
          <AnimatedText isHero delay={0.0} stagger={0.3}>
            <h1 className="font-ITCGaramondN mb-6 text-6xl md:text-8xl">
              Nos dernières actualités
            </h1>
            <p className="font-HelveticaNow mx-auto max-w-2xl text-lg">
              Découvrez nos dernières actualités et conseils pour améliorer
              votre intérieur.
            </p>
          </AnimatedText>
        </div>
        <ul className="mt-8 grid gap-8 md:grid-cols-3 md:gap-6">
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
                    <h5 className="font-ITCGaramondN mb-2 text-4xl md:text-4xl">
                      {post.title}
                    </h5>

                    <div className="font-NHD mb-2 line-clamp-3 text-base md:max-w-md md:text-lg">
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
      <section className="bg-secondary relative h-svh w-full">
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
