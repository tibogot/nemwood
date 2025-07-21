import React from "react";
import Image from "next/image";

function Testimonial() {
  return (
    <div className="h-svh w-full bg-amber-200">
      <div className="wrapper relative h-full w-full overflow-hidden">
        <Image
          className="absolute inset-0 h-full w-full object-cover"
          src="/images/hero2.webp"
          alt="Hero Image"
          fill
          sizes="100vw"
          quality={100}
          priority
        />
      </div>
    </div>
  );
}

export default Testimonial;
