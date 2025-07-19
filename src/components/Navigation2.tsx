"use client";

import Link from "next/link";
import { useState, useRef } from "react";
import Image from "next/image";
import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";
import { SplitText } from "gsap/SplitText";

// Register the SplitText plugin
gsap.registerPlugin(SplitText);

export default function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);
  const menuItemsRef = useRef<HTMLDivElement[]>([]);
  const burgerLine1Ref = useRef<HTMLDivElement>(null);
  const burgerLine2Ref = useRef<HTMLDivElement>(null);

  const navItems = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Services", href: "/services" },
    { name: "Contact", href: "/contact" },
  ];

  // Store split text instances for cleanup
  const splitTextInstances = useRef<SplitText[]>([]);

  const { contextSafe } = useGSAP(() => {
    // Position burger lines properly - always visible as two lines
    gsap.set(burgerLine1Ref.current, {
      y: -3,
      rotation: 0,
      transformOrigin: "center",
    });
    gsap.set(burgerLine2Ref.current, {
      y: 3,
      rotation: 0,
      transformOrigin: "center",
    });

    // Initial state - menu items hidden (but don't hide the text yet)
    gsap.set(menuItemsRef.current, {
      y: -30,
      opacity: 0,
    });

    // Create SplitText instances for each navigation item
    menuItemsRef.current.forEach((item, index) => {
      if (item) {
        const linkElement = item.querySelector("a");
        if (linkElement) {
          // Make text visible first to avoid FOUC
          gsap.set(linkElement, { visibility: "visible" });

          const split = new SplitText(linkElement, {
            type: "chars",
            charsClass: "split-char",
          });
          splitTextInstances.current[index] = split;

          // Now set initial state for split characters after splitting
          gsap.set(split.chars, {
            y: 100,
            opacity: 0,
            rotationX: -90,
            transformOrigin: "0% 50% -50",
          });
        }
      }
    });

    // Cleanup function - this runs when component unmounts or dependencies change
    return () => {
      splitTextInstances.current.forEach((split) => {
        if (split) split.revert();
      });
      splitTextInstances.current = [];
    };
  }, []); // Remove isMenuOpen dependency to avoid recreating splits

  const openMenu = contextSafe(() => {
    const tl = gsap.timeline();

    // 1. Animate burger lines to form X
    tl.to(burgerLine1Ref.current, {
      rotation: 45,
      y: 0,
      duration: 0.6,
      ease: "power2.out",
    }).to(
      burgerLine2Ref.current,
      {
        rotation: -45,
        y: 0,
        duration: 0.6,
        ease: "power2.out",
      },
      0,
    );

    // 2. Stretch the navbar down
    tl.to(
      menuRef.current,
      {
        height: window.innerWidth >= 768 ? "50vh" : "100vh",
        duration: 0.8,
        ease: "power3.inOut",
      },
      0.1,
    );

    // 3. Show menu items container
    tl.to(
      menuItemsRef.current,
      {
        y: 0,
        opacity: 1,
        duration: 0.6,
        stagger: 0.15,
        ease: "power2.out",
      },
      0.5,
    );

    // 4. Animate individual letters with stagger
    splitTextInstances.current.forEach((split, index) => {
      if (split && split.chars) {
        tl.to(
          split.chars,
          {
            y: 0,
            opacity: 1,
            rotationX: 0,
            duration: 0.8,
            stagger: {
              each: 0.03,
              from: "start",
            },
            ease: "back.out(1.7)",
          },
          0.7 + index * 0.1,
        );
      }
    });
  });

  const closeMenu = contextSafe(() => {
    const tl = gsap.timeline();

    // Hide individual letters first - true revert animation (reverse stagger)
    splitTextInstances.current.forEach((split, index) => {
      if (split && split.chars) {
        tl.to(
          split.chars,
          {
            y: 100,
            opacity: 0,
            rotationX: -90,
            duration: 0.4,
            stagger: {
              each: 0.02,
              from: "end", // Start from the end (last letter first)
            },
            ease: "power2.in",
          },
          index * 0.05, // Stagger the hiding of each word
        );
      }
    });

    // Hide menu items container
    tl.to(
      menuItemsRef.current,
      {
        y: -30,
        opacity: 0,
        duration: 0.4,
        stagger: 0.08,
        ease: "power2.in",
      },
      0.3,
    );

    // Collapse navbar back to original size
    tl.to(
      menuRef.current,
      {
        height: "4rem", // h-16 = 64px = 4rem
        duration: 0.7,
        ease: "power3.in",
      },
      0.4,
    );

    // Reset burger lines to original positions
    tl.to(
      burgerLine1Ref.current,
      {
        rotation: 0,
        y: -3,
        duration: 0.6,
        ease: "power2.out",
      },
      0.5,
    ).to(
      burgerLine2Ref.current,
      {
        rotation: 0,
        y: 3,
        duration: 0.6,
        ease: "power2.out",
      },
      0.5,
    );

    // Reset characters to initial state after closing
    tl.call(() => {
      splitTextInstances.current.forEach((split) => {
        if (split && split.chars) {
          gsap.set(split.chars, {
            y: 100,
            opacity: 0,
            rotationX: -90,
            transformOrigin: "0% 50% -50",
          });
        }
      });
    });
  });

  const toggleMenu = () => {
    if (isMenuOpen) {
      closeMenu();
    } else {
      openMenu();
    }
    setIsMenuOpen(!isMenuOpen);
  };

  const handleLinkClick = () => {
    if (isMenuOpen) {
      closeMenu();
      setIsMenuOpen(false);
    }
  };

  return (
    <>
      <nav
        ref={menuRef}
        className="bg-secondary fixed top-0 right-0 left-0 z-50 h-16 overflow-hidden border-b border-[#504630]/50 select-none"
      >
        <div className="h-16 px-4 md:px-8">
          <div className="flex h-16 items-center justify-between">
            {/* Logo */}
            <Link href="/" className="flex items-center space-x-2">
              <Image
                src="/logonav2.svg"
                alt="Logo"
                width={32}
                height={32}
                className="h-32 w-32"
              />
            </Link>

            {/* Burger Menu Button - Now visible on all screen sizes */}
            <button
              onClick={toggleMenu}
              className="text-primary relative flex h-8 w-8 cursor-pointer flex-col items-center justify-center transition-colors duration-200 focus:outline-none"
              aria-label="Toggle menu"
            >
              <div
                ref={burgerLine1Ref}
                className="absolute h-px w-7 bg-current transition-colors duration-200"
              />
              <div
                ref={burgerLine2Ref}
                className="absolute h-px w-7 bg-current transition-colors duration-200"
              />
            </button>
          </div>
        </div>

        {/* Menu Content - Inside the same nav that stretches */}
        <div className="flex h-full items-end px-4 py-30 md:px-18">
          <div className="flex gap-16">
            {navItems.map((item, index) => (
              <div
                key={item.name}
                ref={(el) => {
                  if (el) menuItemsRef.current[index] = el;
                }}
              >
                <Link
                  href={item.href}
                  className="font-ITCGaramondN text-primary block text-4xl md:text-8xl"
                  onClick={handleLinkClick}
                  style={{ visibility: "hidden" }}
                >
                  {item.name}
                </Link>
              </div>
            ))}

            <div
              ref={(el) => {
                if (el) menuItemsRef.current[navItems.length] = el;
              }}
              className="pt-8"
            ></div>
          </div>
        </div>
      </nav>

      {/* Add some CSS for the split characters */}
      <style jsx>{`
        .split-char {
          display: inline-block;
        }
      `}</style>
    </>
  );
}
