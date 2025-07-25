import Link from "next/link";
import Image from "next/image";
import { ArrowRight, ChevronDown } from "lucide-react";
import AnimatedText from "@/components/AnimatedText2";

export default function Services() {
  return (
    <div className="wrapper bg-secondary">
      <section className="text-primary border-b-primary flex h-svh w-full flex-col border-b border-solid px-4 pt-40 pb-20 md:flex-row md:px-8"></section>
      <section className="text-primary mx-auto px-4 py-30 text-center md:px-8">
        {/* <h1 className="font-ITCGaramondN mb-6 text-6xl">
          Creativity to design
        </h1> */}
        <AnimatedText>
          <p className="font-HelveticaNow mx-auto text-lg md:w-1/2">
            Vous cherchez un artisan menuisier en Belgique pour créer des
            meubles en bois sur mesure ? Nemwood est spécialisé dans la
            fabrication artisanale de tables, chaises, garde-robes, escaliers et
            même de décors pour le cinéma.
          </p>
        </AnimatedText>
      </section>
      <section className="w-full bg-teal-300 px-4 py-20 md:px-8">
        <div className="wrapper flex w-full gap-4 md:flex-row">
          <div className="services-card h-[600px] flex-grow bg-red-400"></div>
          <div className="services-card h-[600px] flex-grow bg-red-400"></div>
          <div className="services-card h-[600px] flex-grow bg-red-400"></div>
        </div>
        <div className="wrapper mt-4 flex w-full gap-4 md:flex-row">
          <div className="services-card h-[600px] flex-grow bg-red-400"></div>
          <div className="services-card h-[600px] flex-grow bg-red-400"></div>
          <div className="services-card h-[600px] flex-grow bg-red-400"></div>
        </div>
      </section>
      <section className="relative flex h-[100svh] flex-col items-center justify-between bg-amber-200 pt-20 pb-10">
        <Image
          className="absolute inset-0 h-full w-full object-cover"
          src="/images/herobg3.webp"
          alt="Hero Image"
          fill
          sizes="100vw"
          quality={100}
          priority
        />
        <div className="absolute inset-0 h-full w-full bg-gradient-to-b from-transparent to-black opacity-50"></div>
      </section>
    </div>
  );
}
