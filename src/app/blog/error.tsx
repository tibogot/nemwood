"use client";

import { useEffect } from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function BlogError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    // Log error to console in development
    if (process.env.NODE_ENV === "development") {
      console.error("Blog page error:", error);
    }
  }, [error]);

  return (
    <div className="bg-secondary text-primary flex min-h-[60vh] flex-col items-center justify-center px-4 py-20 md:px-8">
      <div className="mx-auto max-w-2xl text-center">
        <h2 className="font-ITCGaramondN mb-4 text-4xl md:text-6xl">
          Oups, une erreur est survenue
        </h2>
        <p className="font-HelveticaNow mb-8 text-lg text-primary/70">
          Nous n&apos;avons pas pu charger les articles du blog. Veuillez réessayer.
        </p>

        <div className="flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
          <button
            onClick={reset}
            className="font-HelveticaNow border-primary hover:bg-primary hover:text-secondary flex cursor-pointer items-center border border-solid px-6 py-3 transition-colors duration-300 ease-in-out"
          >
            <span>Réessayer</span>
          </button>

          <Link
            href="/"
            className="font-HelveticaNow text-primary hover:text-primary/70 flex items-center underline transition-colors"
          >
            <span>Retour à l&apos;accueil</span>
            <ArrowRight size={18} className="ml-1" strokeWidth={1.5} />
          </Link>
        </div>

        {error.digest && (
          <p className="font-HelveticaNow mt-8 text-xs text-primary/50">
            Code d&apos;erreur: {error.digest}
          </p>
        )}
      </div>
    </div>
  );
}

