"use client";
import React, { useState, useRef, useEffect } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import gsap from "gsap";

interface Service {
  name: string;
  href: string;
  image: string;
  color: string;
}

interface ModalState {
  active: boolean;
  index: number;
}

const services: Service[] = [
  {
    name: "Escaliers",
    href: "/services/escaliers",
    image: "/images/stairs.webp",
    color: "#f3f4f6",
  },
  {
    name: "Gardes-robes",
    href: "/services/garde-robes",
    image: "/images/wardrobe.webp",
    color: "#fef3c7",
  },
  {
    name: "Tables",
    href: "/services/tables",
    image: "/images/table.webp",
    color: "#ddd6fe",
  },
  {
    name: "Cuisines",
    href: "/services/cuisines",
    image: "/images/kitchen.webp",
    color: "#fecaca",
  },
  {
    name: "Bibliothèque",
    href: "/services/bibliotheque",
    image: "/images/woodshelf.webp",
    color: "#e0f2fe",
  },
  {
    name: "Bureau",
    href: "/services/bureau",
    image: "/images/desk.webp",
    color: "#f0fdf4",
  },
  {
    name: "Salle de bain",
    href: "/services/salle-de-bain",
    image: "/images/bathroom.webp",
    color: "#fef7ff",
  },
];

// Animation variants for Framer Motion
const scaleAnimation = {
  initial: { scale: 0, x: "-50%", y: "-50%" },
  enter: {
    scale: 1,
    x: "-50%",
    y: "-50%",
    transition: { duration: 0.4, ease: [0.76, 0, 0.24, 1] as any },
  },
  closed: {
    scale: 0,
    x: "-50%",
    y: "-50%",
    transition: { duration: 0.4, ease: [0.32, 0, 0.67, 0] as any },
  },
};

// Individual Service Component
interface ServiceItemProps {
  index: number;
  name: string;
  href: string;
  setModal: (modal: ModalState) => void;
}

function ServiceItem({ index, name, href, setModal }: ServiceItemProps) {
  return (
    <div
      onMouseEnter={() => setModal({ active: true, index })}
      onMouseLeave={() => setModal({ active: false, index })}
      className="group border-primary relative cursor-pointer overflow-hidden border-b transition-all duration-500 last:border-b-0"
    >
      <a href={href} className="relative z-10 block">
        {/* Background fill animation */}
        <div className="bg-primary absolute inset-0 origin-bottom scale-y-0 transform transition-transform duration-500 ease-out group-hover:scale-y-100"></div>

        <div className="relative z-10 flex items-center justify-between px-2 py-3 md:px-4 md:py-4">
          <span className="text-primary group-hover:text-secondary text-sm font-light transition-colors duration-500 md:text-lg lg:text-xl">
            {String(index + 1).padStart(2, "0")}
          </span>
          <h3 className="text-primary group-hover:text-secondary text-3xl transition-all duration-500 group-hover:translate-x-2 md:text-6xl lg:text-8xl">
            {name}
          </h3>
          <span className="text-primary group-hover:text-secondary text-xs font-light transition-colors duration-500 md:text-sm lg:text-base">
            En savoir plus →
          </span>
          {/* <div className="text-sm tracking-wide text-gray-400 uppercase">
            Explore
          </div> */}
        </div>
      </a>
    </div>
  );
}

// Modal Component with GSAP mouse following
interface ModalProps {
  modal: ModalState;
  services: Service[];
}

function Modal({ modal, services }: ModalProps) {
  const { active, index } = modal;
  const modalContainer = useRef<HTMLDivElement>(null);
  const cursor = useRef<HTMLDivElement>(null);
  const cursorLabel = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Check if elements exist before creating GSAP animations
    if (!modalContainer.current || !cursor.current || !cursorLabel.current)
      return;

    // GSAP quickTo functions for smooth mouse following - exactly like in Olivier's tutorial
    const xMoveContainer = gsap.quickTo(modalContainer.current, "left", {
      duration: 0.8,
      ease: "power3",
    });
    const yMoveContainer = gsap.quickTo(modalContainer.current, "top", {
      duration: 0.8,
      ease: "power3",
    });

    const xMoveCursor = gsap.quickTo(cursor.current, "left", {
      duration: 0.5,
      ease: "power3",
    });
    const yMoveCursor = gsap.quickTo(cursor.current, "top", {
      duration: 0.5,
      ease: "power3",
    });

    const xMoveCursorLabel = gsap.quickTo(cursorLabel.current, "left", {
      duration: 0.45,
      ease: "power3",
    });
    const yMoveCursorLabel = gsap.quickTo(cursorLabel.current, "top", {
      duration: 0.45,
      ease: "power3",
    });

    // Mouse move handler - keep modal at safe distance from cursor
    const handleMouseMove = (e: MouseEvent) => {
      const { clientX, clientY } = e;
      // Offset the modal position to keep it away from the cursor
      const offsetX = clientX + (window.innerWidth < 768 ? 200 : 400); // Smaller offset on mobile
      const offsetY = clientY; // Keep modal at same vertical level as cursor

      xMoveContainer(offsetX);
      yMoveContainer(offsetY);
      xMoveCursor(clientX);
      yMoveCursor(clientY);
      xMoveCursorLabel(clientX);
      yMoveCursorLabel(clientY);
    };

    window.addEventListener("mousemove", handleMouseMove);

    // Cleanup
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <>
      {/* Modal Container */}
      <motion.div
        ref={modalContainer}
        variants={scaleAnimation}
        initial="initial"
        animate={active ? "enter" : "closed"}
        className="pointer-events-none fixed z-50 h-32 w-48 overflow-hidden rounded-sm shadow-2xl md:h-40 md:w-60"
        style={{
          left: "50%",
          top: "50%",
          transform: "translate(-50%, -50%)",
        }}
      >
        {/* Modal Slider - slides based on index */}
        <div
          className="relative h-full w-full"
          style={{
            top: `${index * -100}%`,
            transition: "top 0.3s cubic-bezier(0.76, 0, 0.24, 1)",
          }}
        >
          {services.map((service, idx) => (
            <div
              key={`modal_${idx}`}
              className="absolute h-full w-full"
              style={{
                backgroundColor: service.color,
                top: `${idx * 100}%`,
              }}
            >
              <Image
                src={service.image}
                alt={service.name}
                fill
                className="object-cover"
                draggable={false}
                sizes="(max-width: 768px) 100vw, 384px"
                style={{ objectFit: "cover" }}
                priority={idx === index}
              />
            </div>
          ))}
        </div>
      </motion.div>

      {/* Custom Cursor */}
      <motion.div
        ref={cursor}
        variants={scaleAnimation}
        initial="initial"
        animate={active ? "enter" : "closed"}
        className="pointer-events-none fixed"
        style={{
          left: "0px",
          top: "0px",
        }}
      />

      {/* Cursor Label */}
      <motion.div
        ref={cursorLabel}
        variants={scaleAnimation}
        initial="initial"
        animate={active ? "enter" : "closed"}
        className="pointer-events-none fixed z-50 flex items-center justify-center"
        style={{
          left: "0px",
          top: "0px",
        }}
      ></motion.div>
    </>
  );
}

// Main Component
export default function ManyServices() {
  const [modal, setModal] = useState<ModalState>({ active: false, index: 0 });

  return (
    <section className="relative min-h-screen w-full px-2 py-16 md:px-8 md:py-20">
      {/* Title and Description */}
      <div className="mb-16 flex flex-col md:flex-row md:items-start md:justify-between md:gap-8">
        <h3 className="font-ITCGaramondN text-primary mb-4 text-3xl leading-tight md:mb-0 md:text-5xl lg:text-7xl">
          Nos services
        </h3>

        <p className="font-HelveticaNow text-primary text-base md:max-w-xl md:text-lg">
          Découvrez nos services de menuiserie sur mesure en Belgique. Nous vous
          accompagnons dans la réalisation de vos projets de menuiserie sur
          mesure en Belgique.
        </p>
      </div>

      {/* Services List */}
      <div className="font-HelveticaNow mt-20 md:mt-40">
        {services.map((service, index) => (
          <ServiceItem
            key={service.name}
            index={index}
            name={service.name}
            href={service.href}
            setModal={setModal}
          />
        ))}
      </div>

      {/* Modal */}
      <Modal modal={modal} services={services} />
    </section>
  );
}
