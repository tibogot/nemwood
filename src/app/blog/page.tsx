import client from "@/sanityClient";
import { PortableText } from "@portabletext/react";
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
    <main className="text-primary bg-secondary px-4 py-30">
      <h2 className="font-ITCGaramondN mx-auto text-center text-8xl">
        Actualités
      </h2>
      <ul className="mt-8 grid gap-10 md:grid-cols-3">
        {posts.map((post: any) => (
          <li key={post._id} className="flex flex-col overflow-hidden">
            <Link href={`/blog/${post.slug.current}`} className="group block">
              {post.mainImage && (
                <div className="bg-secondary relative h-56 w-full overflow-hidden">
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
  );
}
