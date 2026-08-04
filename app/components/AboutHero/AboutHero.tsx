import Image from "next/image";

export default function AboutHero() {
  return (
    <section className="relative overflow-hidden">
      <div className="relative min-h-[640px]">
        <Image
          src="/about/about-hero.jpg"
          alt="Kasvihuone Peuravaaran Puutarhassa"
          fill
          priority
          className="object-cover object-center"
        />

        {/* Light overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-section via-section/88 to-section/20" />

        <div className="relative mx-auto flex min-h-[640px] max-w-7xl items-center px-4 pt-36 pb-20 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <p className="text-sm font-medium uppercase tracking-[0.24em] text-accent">
              Meistä
            </p>

            <h1 className="mt-5 font-heading text-5xl font-medium leading-[1.02] text-primary-dark sm:text-6xl lg:text-7xl">
              Yli 60 vuotta
              <br />
              suomalaista viljelyä
            </h1>

            <div aria-hidden="true" className="mt-8 h-px w-24 bg-border" />

            <p className="mt-8 max-w-2xl text-base leading-8 text-text sm:text-lg sm:leading-9">
              Peuravaaran Puutarha on kolmen sukupolven perheyritys, jossa
              kotimaisia vihanneksia on kasvatettu luonnonvalossa jo yli kuuden
              vuosikymmenen ajan.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
