import Link from "next/link";
import Image from "next/image";
import HorizScroll from "@/components/HorizScroll5";
import CardsScroll from "@/components/CardsScroll5";
import { ArrowRight, ChevronDown } from "lucide-react";
import Testimonial from "@/components/Testimonial";
import AnimatedText from "@/components/AnimatedText";

export default function Home() {
  return (
    <div className="wrapper bg-secondary">
      {/* Hero Section */}
      {/* <section className="relative flex h-screen items-center justify-center px-4 md:px-8">
        <Image
          className="absolute inset-0 h-full w-full object-cover"
          src="/images/nemohero.webp"
          alt="Hero Image"
          // placeholder="blur"
          fill
          sizes="100vw"
          quality={100}
          // width={1600}
          // height={800}
          priority
        />
        <div className="absolute inset-0 h-full w-full bg-gradient-to-b from-transparent to-black opacity-50"></div>
        <div className="text-secondary z-10 text-center">
          <span className="font-ITCGaramondN mb-6 text-6xl leading-none md:text-8xl">
            Le bois notre passion, <br /> votre style notre création
          </span>
          <p className="font-HelveticaNow mx-auto mt-8 max-w-2xl text-xl">
            We create exceptional digital experiences that drive results. From
            concept to deployment, we bring your vision to life with
            cutting-edge technology.
          </p>
        </div>
      </section> */}
      <section className="relative flex h-[100svh] flex-col items-center justify-between px-4 pt-20 pb-10 md:px-8">
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
        <Image
          className="relative z-10 h-auto w-full"
          src="/logonew2.svg"
          alt="Logo"
          width={1200} // use a large width for SVG
          height={300} // adjust height proportionally
          quality={100}
          priority
        />
        {/* <AnimatedText> */}
        <p className="font-NHD relative z-10 text-center text-base leading-tight text-balance text-white md:w-1/4">
          Découvrez l'excellence de l'artisanat du bois avec Nemwood, votre
          partenaire privilégié pour la création de meubles sur mesure en
          Belgique.{" "}
        </p>
        {/* </AnimatedText> */}

        {/* <p className="font-HelveticaNow relative z-10 text-center text-xl leading-tight text-white md:w-1/4">
          Découvrez l'excellence de l'artisanat du bois avec Nemwood, votre
          partenaire privilégié pour la création de meubles sur mesure en
          Belgique.{" "}
        </p> */}
        {/* <div className="relative z-10 mx-auto flex flex-col items-center text-center select-none">
          <p className="font-ITCGaramondN text-2xl leading-tight text-white">
            Scroll
          </p>
          <ChevronDown color="white" />
        </div> */}
      </section>

      <section className="text-primary section2 px-4 md:px-8">
        {/* <div className="py-40"></div> */}
        <div className="mx-auto py-40 text-center">
          <AnimatedText delay={0.2} stagger={0.3}>
            <h1 className="font-ITCGaramondN mb-6 text-6xl">
              Meubles en bois sur mesure
            </h1>

            <p className="font-HelveticaNow mx-auto text-lg leading-tight md:w-1/3">
              Vous cherchez un artisan menuisier en Belgique pour créer des
              meubles en bois sur mesure ? Nemwood est spécialisé dans la
              fabrication artisanale de tables, chaises, garde-robes, escaliers
              et même de décors pour le cinéma.
            </p>

            <p className="font-HelveticaNow text-primary/70 mx-auto mt-4 text-sm leading-tight md:w-1/3">
              Operating since 2016.
            </p>
          </AnimatedText>
          {/* <p className="font-HelveticaNow mx-auto text-3xl md:w-1/2">
            Vous cherchez un artisan menuisier en Belgique pour créer des
            meubles en bois sur mesure ? Nemwood est spécialisé dans la
            fabrication artisanale de tables, chaises, garde-robes, escaliers et
            même de décors pour le cinéma.
          </p>
          <p className="font-HelveticaNow text-primary/70 mx-auto mt-6 text-sm leading-tight md:w-1/3">
            Operating since 2016. Formerly Monday Agency.
          </p> */}
        </div>

        <div className="flex w-full justify-center pb-20">
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
        </div>
      </section>
      {/* <section className="text-primary flex w-full px-4 py-20 pb-40 md:px-8">
        <div className="left md:w-1/2">
          <div>
            <h4 className="font-HelveticaNow text-primary/70 text-sm">
              FROM IDEA TO IMPACT
            </h4>
            <h1 className="font-ITCGaramondN mt-8 text-6xl">
              Designing experiences that resonate and scale
            </h1>
          </div>
        </div>
        <div className="right md:w-1/2">
          <h4 className="font-HelveticaNow text-primary/70 invisible text-sm">
            FROM IDEA TO IMPACT
          </h4>
          <p className="font-HelveticaNow mt-8 text-lg leading-tight md:w-3/4">
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
            <div className="border-primary hover:bg-primary hover:text-secondary flex cursor-pointer items-center justify-center border border-solid px-4 py-2 transition-colors duration-300 ease-in-out">
              <span>Read more</span>
              <div className="mt-0.5 ml-1">
                <ArrowRight size={18} strokeWidth={1.5} />
              </div>
            </div>
          </button>
        </div>
      </section> */}

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

      <section className="text-primary mx-auto -mt-80 w-full px-4 py-40 text-center md:px-8 md:py-60">
        <h1 className="font-ITCGaramondN mx-auto text-5xl md:w-3/4 md:text-9xl">
          Créons quelque chose
          <span className="font-ITCGaramondNI"> d’incroyable</span> ensemble
        </h1>
      </section>

      <section className="cardo text-secondary z-10 flex flex-col gap-8 px-4 py-12 md:flex-row md:gap-6 md:px-8">
        <div className="relative min-h-[300px] w-full overflow-hidden rounded-sm md:h-[600px]">
          <Image
            src="https://picsum.photos/600/400?random=1"
            alt="Custom Furniture"
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, 33vw"
            priority
          />
          <div className="absolute inset-0 flex items-center justify-center bg-black/40">
            <h2 className="font-ITCGaramondN px-2 text-center text-5xl md:text-4xl">
              Custom Furniture
            </h2>
          </div>
        </div>

        <div className="relative min-h-[300px] w-full overflow-hidden md:h-[600px]">
          <Image
            src="https://picsum.photos/600/400?random=2"
            alt="Artisan Craftsmanship"
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, 33vw"
            priority
          />
          <div className="absolute inset-0 flex items-center justify-center bg-black/40">
            <h2 className="font-ITCGaramondN px-2 text-center text-5xl md:text-4xl">
              Artisan Craftsmanship
            </h2>
          </div>
        </div>

        <div className="relative min-h-[300px] w-full overflow-hidden md:h-[600px]">
          <Image
            src="https://picsum.photos/600/400?random=3"
            alt="Sustainable Materials"
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, 33vw"
            priority
          />
          <div className="absolute inset-0 flex items-center justify-center bg-black/40">
            <h2 className="font-ITCGaramondN px-2 text-center text-5xl md:text-4xl">
              Sustainable Materials
            </h2>
          </div>
        </div>
      </section>
      <section className="text-secondary mx-auto py-20 text-center">
        <h1 className="font-ITCGaramondN mb-6 text-6xl">
          Creativity to design
        </h1>
        <p className="font-HelveticaNow mx-auto mt-8 text-lg leading-tight md:w-1/3">
          Vous cherchez un artisan menuisier en Belgique pour créer des meubles
          en bois sur mesure ? Nemwood est spécialisé dans la fabrication
          artisanale de tables, chaises, garde-robes, escaliers et même de
          décors pour le cinéma.
        </p>
        <div className="relative mx-auto mt-40 h-[800px] w-full flex-1 overflow-hidden md:w-1/3">
          <Image
            src="https://picsum.photos/600/400?random=3"
            alt="Sustainable Materials"
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, 33vw"
            priority
          />
          <div className="absolute inset-0 flex items-center justify-center bg-black/40">
            <h2 className="font-ITCGaramondN text-center text-2xl md:text-4xl">
              Sustainable Materials
            </h2>
          </div>
        </div>
      </section>

      <Testimonial />
    </div>
  );
}
