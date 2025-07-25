import AnimatedText from "@/components/AnimatedText3";
import Image from "next/image";
import React from "react";

export default function Contact() {
  return (
    <div>
      <section className="text-primary bg-secondary px-4 py-40 md:px-8">
        <div className="py-0">
          <AnimatedText isHero delay={0.0} stagger={0.3}>
            <h1 className="font-ITCGaramondN mb-6 max-w-3xl text-6xl">
              Thanks for your interest. Let us ask you a few questions and we’ll
              get back to you asap.
            </h1>
            <p className="font-NHD mt-20 max-w-2xl text-lg">
              Vous cherchez un artisan menuisier en Belgique pour créer des
              meubles en bois sur mesure ? Nemwood est spécialisé dans la
              fabrication artisanale de tables, chaises, garde-robes, escaliers
              et même de décors pour le cinéma.
            </p>
          </AnimatedText>
        </div>
        <div className="wrapper mt-20 flex h-svh w-full gap-8">
          <div className="relative bg-amber-200 md:w-1/2">
            <Image
              className="absolute inset-0 h-full w-full object-cover"
              src="/images/nemward.webp"
              alt="Hero Image"
              fill
              sizes="100vw"
              quality={100}
              priority
            />
          </div>
          <div className="bg-red-800 md:w-1/2"></div>
        </div>
        <section className="mx-auto px-4 py-30 text-center md:px-8">
          <AnimatedText>
            <p className="font-HelveticaNow mx-auto text-lg md:w-1/2">
              Vous cherchez un artisan menuisier en Belgique pour créer des
              meubles en bois sur mesure ? Nemwood est spécialisé dans la
              fabrication artisanale de tables, chaises, garde-robes, escaliers
              et même de décors pour le cinéma.
            </p>
          </AnimatedText>
        </section>
      </section>
    </div>
  );
}
