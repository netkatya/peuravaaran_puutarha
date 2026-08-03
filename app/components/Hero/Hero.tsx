import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative flex min-h-screen items-center justify-center overflow-hidden">
      <Image
        src="/Hero/hero.jpg"
        alt="Fresh tomatoes"
        fill
        priority
        className="object-cover"
      />

      <div className="absolute inset-0 bg-black/10" />

      <div className="relative z-10 flex flex-col items-center px-4 text-center">
        <h1 className="animate-fade-up font-heading text-5xl font-semibold text-hero-title sm:text-7xl lg:text-8xl">
          Peuravaaran Puutarha Oy
        </h1>

        <p className="animate-fade-up-delay mt-6 max-w-2xl text-lg text-hero-subtitle sm:text-2xl">
          Suomalaisia tomaatteja rakkaudesta luontoon
        </p>
      </div>
    </section>
  );
}
