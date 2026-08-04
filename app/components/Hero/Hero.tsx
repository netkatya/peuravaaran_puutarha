import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { DM_Serif_Display } from "next/font/google";

const dmSerif = DM_Serif_Display({
  variable: "--font-dm-serif",
  subsets: ["latin"],
  weight: "400",
});

export default function Hero() {
  return (
    <section className="relative flex min-h-screen items-center justify-center overflow-hidden">
      <Image
        src="/Hero/hero.jpg"
        alt="Peuravaaran Puutarhan tomaatteja"
        fill
        priority
        sizes="100vw"
        className="object-cover"
      />

      <div className="absolute inset-0 bg-black/10" />

      <div className="relative z-10 mx-auto flex max-w-6xl flex-col items-center px-4 text-center sm:px-6">
        <h1
          className={`${dmSerif.className} animate-fade-up text-[3.5rem] leading-[0.95] tracking-[-0.02em] text-hero-title sm:text-[5.5rem] lg:text-[5rem]`}
        >
          Peuravaaran Puutarha Oy
        </h1>

        <p className="animate-fade-up-delay mt-6 max-w-2xl text-lg leading-8 text-hero-subtitle sm:text-2xl">
          Suomalaisia tomaatteja rakkaudesta luontoon
        </p>

        <Link
          href="/tuotteet"
          className="animate-fade-up-delay mt-9 inline-flex items-center gap-3 rounded-full border border-cream/30 bg-cream/90 px-7 py-3.5 font-medium text-primary-dark backdrop-blur-md transition-all duration-300 hover:-translate-y-0.5 hover:bg-cream"
        >
          Tutustu tuotteisiin
          <ArrowRight className="size-4" strokeWidth={1.8} />
        </Link>
      </div>
    </section>
  );
}
