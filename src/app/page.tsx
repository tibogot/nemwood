"use client";
import Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from "react";
import client from "@/sanityClient";

import HorizScroll from "@/components/HorizScroll7";
import CardsScroll from "@/components/CardsScroll5";
import { ArrowRight, ChevronDown } from "lucide-react";
import Testimonial from "@/components/Testimonial";
import AnimatedText from "@/components/AnimatedText3";
import BlurryTextReveal from "@/components/TextReveal";
import ReverseCards from "@/components/ReverseCards2";
import BlogPreview from "@/components/BlogPreview";

export default function Home() {
  const [blogPosts, setBlogPosts] = useState<any[]>([]);

  useEffect(() => {
    async function fetchPosts() {
      const posts = await client.fetch(
        `*[_type == "post"]|order(_createdAt desc)[0...3]{
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
      setBlogPosts(posts);
    }
    fetchPosts();
  }, []);

  return (
    <div className="wrapper bg-secondary">
      {/* Hero Section */}
      <section className="bg-secondary relative flex h-[100svh] flex-col items-center justify-between px-4 pt-20 pb-10 md:px-8">
        <Image
          className="absolute inset-0 h-full w-full object-cover"
          src="/images/nemward.webp"
          alt="Hero Image"
          fill
          sizes="100vw"
          quality={100}
          priority
        />
        {/* <div className="absolute inset-0 h-full w-full bg-gradient-to-b from-transparent to-black opacity-50"></div> */}
        <Image
          className="relative z-10 h-auto w-full"
          src="/logonew2.svg"
          alt="Logo"
          width={1200} // use a large width for SVG
          height={300} // adjust height proportionally
          quality={100}
          priority
        />
        <AnimatedText isHero={true} duration={1.2}>
          <p className="font-NHD text-secondary relative z-10 max-w-2xl text-center text-sm uppercase">
            Mobilier sur mesure
          </p>
        </AnimatedText>

        {/* <div className="relative z-10 mx-auto flex flex-col items-center text-center select-none">
          <p className="font-ITCGaramondN text-2xl leading-tight text-white">
            Scroll
          </p>
          <ChevronDown color="white" />
        </div> */}
      </section>

      <section className="text-primary section2 px-4 md:px-8">
        {/* <div className="py-40"></div> */}
        <div className="mx-auto py-20 text-center md:py-40">
          <AnimatedText delay={0.0} stagger={0.3}>
            <h1 className="font-ITCGaramondN mb-6 text-6xl">
              Meubles en bois <br /> sur mesure
            </h1>
            <p className="font-HelveticaNow mx-auto max-w-2xl text-lg">
              Vous cherchez un artisan menuisier en Belgique pour créer des
              meubles en bois sur mesure ? Nemwood est spécialisé dans la
              fabrication artisanale de tables, chaises, garde-robes, escaliers
              et même de décors pour le cinéma.
            </p>
            <p className="font-HelveticaNow text-primary/70 mx-auto mt-4 max-w-2xl text-sm leading-tight">
              Operating since 2016.
            </p>
          </AnimatedText>
        </div>

        {/*Big Image */}
        {/* <div className="flex w-full justify-center pb-20">
          <div className="relative h-[600px] w-full md:h-[800px] md:w-4/5">
            <Image
              src="/images/nem1.png"
              alt="Random from Picsum"
              fill
              className="rounded-sm object-cover"
              sizes="(max-width: 768px) 100vw, 80vw"
              priority
            />
          </div>
        </div> */}
      </section>
      <ReverseCards />
      <section className="text-primary flex w-full flex-col px-4 py-10 pb-20 md:flex-row md:px-8 md:py-20 md:pb-40">
        <div className="left md:w-1/2">
          <div>
            <AnimatedText>
              {/* <h4 className="font-HelveticaNow text-primary/70 text-sm">
                FROM IDEA TO IMPACT
              </h4> */}
              <h1 className="font-ITCGaramondN mt-8 text-4xl leading-none md:max-w-xl md:text-6xl">
                Designing experiences that resonate and scale
              </h1>
            </AnimatedText>
            <p className="font-HelveticaNow mt-8 text-lg">
              Vous cherchez un artisan menuisier en Belgique pour créer des
              meubles en bois sur mesure ? <br />
              Nemwood est spécialisé dans la fabrication artisanale de tables,
              chaises, garde-robes, escaliers et même de décors pour le cinéma.
              Vous cherchez un artisan menuisier en Belgique pour créer des
              meubles en bois sur mesure ? <br />
              Nemwood est spécialisé dans la fabrication artisanale de tables,
              chaises, garde-robes, escaliers et même de décors pour le cinéma.
            </p>
            <button className="font-HelveticaNow mt-10">
              <div className="border-primary hover:bg-primary hover:text-secondary flex cursor-pointer items-center border border-solid px-4 py-2 transition-colors duration-300 ease-in-out">
                <span>Read more</span>
                <div className="mt-0.5 ml-1">
                  <ArrowRight size={18} strokeWidth={1.5} />
                </div>
              </div>
            </button>
          </div>
        </div>
      </section>

      <HorizScroll />

      <section className="text-primary mx-auto px-4 py-20 text-center md:px-8 md:py-40">
        {/* <h1 className="font-ITCGaramondN mb-6 text-6xl">
          Creativity to design
        </h1> */}
        <AnimatedText>
          <p className="font-HelveticaNow mx-auto text-lg leading-tight md:w-1/3">
            Vous cherchez un artisan menuisier en Belgique pour créer des
            meubles en bois sur mesure ? Nemwood est spécialisé dans la
            fabrication artisanale de tables, chaises, garde-robes, escaliers et
            même de décors pour le cinéma.
          </p>
        </AnimatedText>
      </section>
      <CardsScroll />

      <section className="py-40">
        <BlurryTextReveal />
      </section>

      <Testimonial />
      {/* Blog Previews Section */}
      <section className="px-4 py-10 md:px-8 md:py-20">
        <div className="flex w-full flex-col items-center">
          <h2 className="font-ITCGaramondN text-primary text-8xl">
            Actualités
          </h2>
        </div>

        <ul className="mt-20 flex list-none flex-col gap-8 p-0 md:flex-row md:justify-center md:gap-6">
          {blogPosts.map((post) => (
            <BlogPreview key={post._id} post={post} />
          ))}
        </ul>
        <div className="mt-6">
          <Link href="/blog" className="font-medium underline">
            See all blog posts
          </Link>
        </div>
      </section>
    </div>
  );
}
