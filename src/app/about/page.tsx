import Link from "next/link";
import Image from "next/image";
import { ArrowRight, ChevronDown } from "lucide-react";
import AnimatedText from "@/components/NOT USED/AnimatedText2";

export default function About() {
  return (
    <div className="wrapper bg-secondary">
      <section className="text-primary border-b-primary flex w-full flex-col gap-10 border-b border-solid px-4 pt-40 pb-20 md:flex-row md:px-8">
        <div className="left md:w-1/2">
          <div>
            <AnimatedText>
              <h4 className="font-HelveticaNow text-primary/70 text-sm">
                FROM IDEA TO IMPACT
              </h4>
              <h3 className="font-ITCGaramondN mt-8 text-6xl leading-none md:max-w-xl">
                A propos
              </h3>
            </AnimatedText>
            <p className="font-HelveticaNow pt-60 text-lg md:max-w-xl">
              Vous cherchez un artisan menuisier en Belgique pour créer des
              meubles en bois sur mesure ? Nemwood est spécialisé dans la
              fabrication artisanale de tables, chaises, garde-robes, escaliers
              et même de décors pour le cinéma.
            </p>
          </div>
        </div>
        <div className="right flex flex-col items-end text-left md:w-1/2">
          <div className="h-[600px] w-full bg-amber-400 select-none">
            <Image
              src="/images/kitchen.webp"
              alt=""
              width={1000}
              height={800}
              className="h-full w-[160%] object-cover transition-transform duration-500 ease-out group-hover:scale-110"
              priority
            />
          </div>
        </div>
      </section>
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
      <section className="relative flex h-[100svh] flex-col items-center justify-between bg-amber-200 pt-20 pb-10">
        <Image
          className="absolute inset-0 h-full w-full object-cover"
          src="/images/loft.webp"
          alt="Hero Image"
          fill
          sizes="100vw"
          quality={100}
          priority
        />
        {/* <div className="absolute inset-0 h-full w-full bg-gradient-to-b from-transparent to-black opacity-50"></div> */}
      </section>
      <section className="text-primary border-b-primary flex w-full flex-col gap-10 border-b border-solid px-4 pt-40 pb-20 md:flex-row-reverse md:px-8">
        <div className="left md:w-1/2">
          <div>
            <AnimatedText>
              <h4 className="font-HelveticaNow text-primary/70 text-sm">
                FROM IDEA TO IMPACT
              </h4>
              <h3 className="font-ITCGaramondN mt-8 text-6xl leading-none md:max-w-xl">
                A propos
              </h3>
            </AnimatedText>
            <p className="font-HelveticaNow pt-60 text-lg md:max-w-xl">
              Vous cherchez un artisan menuisier en Belgique pour créer des
              meubles en bois sur mesure ? Nemwood est spécialisé dans la
              fabrication artisanale de tables, chaises, garde-robes, escaliers
              et même de décors pour le cinéma.
            </p>
          </div>
        </div>
        <div className="right flex flex-col items-end text-left md:w-1/2">
          <div className="h-[600px] w-full bg-amber-400 select-none">
            <Image
              src="/images/loft.webp"
              alt=""
              width={1000}
              height={800}
              className="h-full w-[160%] object-cover transition-transform duration-500 ease-out group-hover:scale-110"
              priority
            />
          </div>
        </div>
      </section>
      <section className="text-primary border-primary mx-auto border-b px-4 py-30 text-center md:px-8">
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
      <section className="flex h-svh w-full items-center justify-center bg-amber-100 px-4 md:px-8">
        <div className="h-[600px] w-[400px] select-none">
          <Image
            src="/images/loft.webp"
            alt=""
            width={1000}
            height={800}
            priority
            className="h-full w-full rounded-sm object-cover"
          />
        </div>
      </section>
    </div>
  );
}
