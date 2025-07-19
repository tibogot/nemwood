import Link from "next/link";
import Image from "next/image";
import HorizScroll from "@/components/HorizScroll4";
import CardsScroll from "@/components/CardsScroll2";

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
      <section className="relative flex h-screen flex-col items-center justify-between px-4 py-20 md:px-8">
        <Image
          className="absolute inset-0 h-full w-full object-cover"
          src="/images/hero2.webp"
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
        <p className="font-HelveticaNow relative z-10 text-center text-xl text-white md:w-1/3">
          Découvrez l'excellence de l'artisanat du bois avec Nemwood, votre
          partenaire privilégié pour la création de meubles sur mesure en
          Belgique.{" "}
        </p>
      </section>

      <section className="text-primary px-4 md:px-8">
        {/* <div className="py-40"></div> */}
        <div className="mx-auto py-40 text-center">
          <h1 className="font-ITCGaramondN mb-6 text-6xl">
            Meubles en bois sur mesure
          </h1>
          <p className="font-HelveticaNow mx-auto text-lg leading-tight md:w-1/3">
            Vous cherchez un artisan menuisier en Belgique pour créer des
            meubles en bois sur mesure ? Nemwood est spécialisé dans la
            fabrication artisanale de tables, chaises, garde-robes, escaliers et
            même de décors pour le cinéma.
          </p>
        </div>
        <div className="flex w-full justify-center pb-20">
          <div className="relative w-full md:w-4/5" style={{ height: "800px" }}>
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

      <HorizScroll />

      <section className="mx-auto py-40 text-center">
        <h1 className="font-ITCGaramondN text-primary mb-6 text-6xl">
          Creativity to design
        </h1>
      </section>
      <CardsScroll />

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
      <section className="px:4 text-primary mx-auto py-40 text-center md:px-8">
        <h1 className="font-ITCGaramondN text-5xl md:text-8xl">
          Info@nemwood.com
        </h1>
        <h1 className="font-ITCGaramondN text-5xl md:text-8xl">
          +33 1 83 90 43 23
        </h1>
      </section>
    </div>
  );
}
