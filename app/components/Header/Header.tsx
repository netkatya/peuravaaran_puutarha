"use client";

import Image from "next/image";
import Link from "next/link";
import { Mail, Phone, X } from "lucide-react";
import { useEffect, useState } from "react";
import { BsInstagram, BsYoutube } from "react-icons/bs";
import { FaFacebookF } from "react-icons/fa";

const navigation = [
  {
    label: "Etusivu",
    href: "/",
  },
  {
    label: "Tuotteet",
    href: "/tuotteet",
  },
  {
    label: "Meistä",
    href: "/meista",
  },
  {
    label: "Yhteystiedot",
    href: "/yhteystiedot",
  },
];

const socialLinks = [
  {
    label: "Facebook",
    href: "https://fi-fi.facebook.com/peuravaaranpuutarha",
    icon: FaFacebookF,
  },
  {
    label: "Instagram",
    href: "https://www.instagram.com/peuravaaran_puutarha/",
    icon: BsInstagram,
  },
  {
    label: "YouTube",
    href: "https://www.youtube.com/channel/UC5lqr6HU5bspe1fx6GpBz0w",
    icon: BsYoutube,
  },
];

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  useEffect(() => {
    if (!isMenuOpen) return;

    const previousOverflow = document.body.style.overflow;
    const previousPaddingRight = document.body.style.paddingRight;

    const scrollbarWidth =
      window.innerWidth - document.documentElement.clientWidth;

    document.body.style.overflow = "hidden";

    if (scrollbarWidth > 0) {
      document.body.style.paddingRight = `${scrollbarWidth}px`;
    }

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        closeMenu();
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      document.body.style.paddingRight = previousPaddingRight;
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isMenuOpen]);

  return (
    <>
      {/* Header */}
      <header className="fixed top-6 left-1/2 z-50 w-[calc(100%-2rem)] max-w-7xl -translate-x-1/2">
        <div className="flex h-22 items-center justify-between rounded-full border border-white/15 bg-white/10 px-4 shadow-xl backdrop-blur-xs sm:px-8">
          <Link
            href="/"
            aria-label="Peuravaaran Puutarha Oy – Etusivu"
            className="flex items-center gap-4"
          >
            <Image
              src="/Header/logo.png"
              alt="Peuravaaran Puutarha Oy"
              width={80}
              height={80}
              priority
              className="h-16 w-auto object-contain sm:h-20"
            />
          </Link>

          <button
            type="button"
            onClick={() => setIsMenuOpen(true)}
            aria-label="Avaa valikko"
            aria-expanded={isMenuOpen}
            aria-controls="fullscreen-menu"
            className="flex cursor-pointer items-center gap-3 rounded-full bg-primary/50 px-6 py-3 text-sm font-medium text-hero-title transition-all duration-300 hover:bg-primary-dark"
          >
            <span>Valikko</span>

            <span aria-hidden="true" className="flex flex-col gap-1">
              <span className="h-0.5 w-5 rounded-full bg-hero-title" />
              <span className="h-0.5 w-5 rounded-full bg-hero-title" />
              <span className="h-0.5 w-5 rounded-full bg-hero-title" />
            </span>
          </button>
        </div>
      </header>

      {/* Fullscreen menu */}
      <div
        id="fullscreen-menu"
        aria-hidden={!isMenuOpen}
        className={`fixed inset-0 z-[100] transition-all duration-500 ${
          isMenuOpen
            ? "visible opacity-100"
            : "invisible pointer-events-none opacity-0"
        }`}
      >
        <Image
          src="/Hero/hero.jpg"
          alt=""
          fill
          sizes="100vw"
          className={`object-cover transition-transform duration-700 ${
            isMenuOpen ? "scale-100" : "scale-105"
          }`}
        />

        <div className="absolute inset-0 bg-primary-dark/90" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/10 via-transparent to-black/30" />

        <div className="relative grid h-dvh grid-rows-[auto_1fr_auto] px-4 py-5 text-cream sm:px-6 lg:px-8">
          {/* Top row */}
          <div className="mx-auto flex w-full max-w-7xl items-center justify-between">
            <Link
              href="/"
              onClick={closeMenu}
              aria-label="Peuravaaran Puutarha Oy – Etusivu"
            >
              <Image
                src="/Header/logo.png"
                alt="Peuravaaran Puutarha Oy"
                width={90}
                height={90}
                className="h-14 w-auto object-contain sm:h-16"
              />
            </Link>

            <button
              type="button"
              onClick={closeMenu}
              aria-label="Sulje valikko"
              className="flex size-11 cursor-pointer items-center justify-center rounded-full border border-cream/25 bg-cream/10 text-cream backdrop-blur-sm transition-all duration-300 hover:bg-cream hover:text-primary-dark"
            >
              <X className="size-5" strokeWidth={1.8} />
            </button>
          </div>

          {/* Navigation */}
          <nav
            aria-label="Päävalikko"
            className="mx-auto flex min-h-0 w-full max-w-5xl items-center justify-center py-4"
          >
            <ul className="w-full text-center">
              {navigation.map((item) => (
                <li
                  key={item.href}
                  className="border-b border-cream/15 first:border-t"
                >
                  <Link
                    href={item.href}
                    onClick={closeMenu}
                    className="group flex items-center justify-center py-3 font-heading text-4xl leading-none text-cream/85 transition-colors duration-300 hover:text-hero-subtitle sm:py-4 sm:text-5xl lg:text-6xl"
                  >
                    <span className="relative">
                      {item.label}

                      <span className="absolute -bottom-2 left-0 h-px w-0 bg-accent transition-all duration-300 group-hover:w-full" />
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* Bottom contacts */}
          <div className="mx-auto w-full max-w-7xl border-t border-cream/20 pt-4">
            <div className="flex flex-col items-center justify-between gap-4 lg:flex-row">
              <div className="flex flex-col items-center gap-3 sm:flex-row sm:gap-6">
                <a
                  href="tel:+358444910299"
                  className="group inline-flex items-center gap-3 text-sm text-cream/75 transition-colors hover:text-cream sm:text-base"
                >
                  <span className="flex size-9 items-center justify-center rounded-full border border-cream/20 bg-cream/5">
                    <Phone className="size-4" strokeWidth={1.8} />
                  </span>

                  <span>044 491 0299</span>
                </a>

                <a
                  href="mailto:tuomas@tomaatit.fi"
                  className="group inline-flex items-center gap-3 text-sm text-cream/75 transition-colors hover:text-cream sm:text-base"
                >
                  <span className="flex size-9 items-center justify-center rounded-full border border-cream/20 bg-cream/5">
                    <Mail className="size-4" strokeWidth={1.8} />
                  </span>

                  <span>tuomas@tomaatit.fi</span>
                </a>
              </div>

              <div className="flex items-center gap-3">
                {socialLinks.map(({ label, href, icon: Icon }) => (
                  <a
                    key={label}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={label}
                    className="flex size-10 items-center justify-center rounded-full border border-cream/20 bg-cream/5 text-cream/75 transition-all duration-300 hover:-translate-y-0.5 hover:bg-cream hover:text-primary-dark"
                  >
                    <Icon className="size-4" />
                  </a>
                ))}
              </div>
            </div>

            <div className="mt-4 flex flex-col items-center justify-between gap-2 border-t border-cream/10 pt-4 text-center text-xs text-cream/45 sm:flex-row sm:text-left">
              <p>Suomalaisia tomaatteja rakkaudesta luontoon</p>
              <p>Peuravaaran Puutarha Oy · Sauvo</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
