import type { Metadata } from "next";
import Link from "next/link";
import AnimatedText from "@/components/AnimatedText3";
import { ArrowRight } from "lucide-react";
import { generateMetadata as generatePageMetadata } from "@/app/metadata";

export const metadata: Metadata = {
  ...generatePageMetadata(
    "Page introuvable | Nemwood",
    "La page que vous recherchez n'existe pas ou a été déplacée.",
  ),
  robots: { index: false, follow: true },
};

export default function NotFound() {
  return (
    <main className="bg-secondary text-primary flex min-h-[100svh] flex-col items-center justify-center px-4 md:px-8">
      <div className="relative z-10 mx-auto w-full text-center">
        <AnimatedText isHero delay={0.0} stagger={0.1}>
          <div className="mb-1 flex justify-center md:mb-4">
            <svg
              viewBox="0 0 1200 500"
              className="text-primary h-[clamp(150px,25vh,400px)] w-full max-w-full md:h-[clamp(200px,40vh,400px)] md:w-[95vw]"
              fill="currentColor"
              aria-hidden="true"
            >
              <text
                x="50%"
                y="60%"
                textAnchor="middle"
                dominantBaseline="central"
                fontSize="600"
                style={{
                  fontFamily: "var(--font-ITCGaramondStdLtNarrow), serif",
                  fontWeight: "normal",
                }}
              >
                404
              </text>
            </svg>
          </div>
        </AnimatedText>

        <AnimatedText isHero delay={0.3} stagger={0.2}>
          <h1 className="font-ITCGaramondN mb-1 text-2xl md:mb-2 md:text-3xl">
            Page introuvable
          </h1>
        </AnimatedText>

        <AnimatedText isHero delay={0.6} stagger={0.1}>
          <p className="font-HelveticaNow text-primary/60 mx-auto mb-6 max-w-sm text-base leading-relaxed text-balance md:text-sm">
            Désolé, la page que vous recherchez n'existe pas ou a été déplacée.
          </p>
        </AnimatedText>

        <AnimatedText isHero delay={0.9} stagger={0.1}>
          <div className="flex flex-col items-center justify-center gap-3 sm:flex-row">
            <Link href="/">
              <button className="font-HelveticaNow cursor-pointer">
                <div className="border-primary hover:bg-primary hover:text-secondary flex items-center border border-solid px-4 py-2 transition-colors duration-300 ease-in-out">
                  <span>Retour à l'accueil</span>
                  <div className="mt-0.5 ml-1">
                    <ArrowRight size={16} strokeWidth={1.5} />
                  </div>
                </div>
              </button>
            </Link>
          </div>
        </AnimatedText>
      </div>
    </main>
  );
}
