import Link from "next/link";
import { PortableText } from "@portabletext/react";

interface BlogPreviewProps {
  post: {
    _id: string;
    title: string;
    slug: { current: string };
    mainImage?: any;
    publishedAt?: string;
    body?: any;
  };
}

export default function BlogPreview({ post }: BlogPreviewProps) {
  // Try to get the image URL safely (Sanity image may be deeply nested)
  let imageUrl = "";
  if (post.mainImage) {
    if (post.mainImage.asset && post.mainImage.asset.url) {
      imageUrl = post.mainImage.asset.url;
    } else if (typeof post.mainImage === "string") {
      imageUrl = post.mainImage;
    }
  }
  if (!imageUrl) imageUrl = "/logo.svg"; // fallback to your logo

  return (
    <li className="text-primary mb-10 w-full flex-1 md:mb-0 md:w-1/3">
      <Link href={`/blog/${post.slug.current}`} className="group block h-full">
        <div className="flex h-full flex-col items-stretch overflow-hidden">
          <div className="relative flex h-48 w-full items-center justify-center overflow-hidden md:h-56">
            <img
              src={imageUrl}
              alt={post.title}
              className="h-full w-full object-cover object-center transition-transform duration-500 group-hover:scale-105"
              style={{ fontFamily: "object-fit: cover" }}
              loading="lazy"
            />
          </div>
          <div className="flex flex-1 flex-col justify-between py-6">
            <div>
              {post.publishedAt && (
                <p className="font-NHD mb-2 text-xs">
                  {new Date(post.publishedAt).toLocaleDateString()}
                </p>
              )}
              <h5 className="font-ITCGaramondN mb-2 text-4xl leading-tight">
                {post.title}
              </h5>

              <div className="font-NHD mb-2 line-clamp-3 text-base md:text-lg">
                {post.body && <PortableText value={post.body.slice(0, 1)} />}
              </div>
            </div>
            <span className="font-NHD mt-2 inline-block text-base">
              Read more →
            </span>
          </div>
        </div>
      </Link>
    </li>
  );
}
