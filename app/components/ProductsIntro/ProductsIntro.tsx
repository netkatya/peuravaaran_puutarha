import Image from "next/image";

export default function ProductsIntro() {
  return (
    <section className="relative isolate overflow-hidden bg-section">
      {/* Background image */}
      <Image
        src="/products/products-page-bg.jpg"
        alt=""
        fill
        priority
        sizes="100vw"
        className="object-cover object-right"
      />

      {/* White blur overlay */}
      <div className="absolute inset-0 bg-white/55 backdrop-blur-[3px]" />

      {/* Soft gradient for better readability */}
      <div className="absolute inset-0 bg-gradient-to-r from-white via-white/50 to-white/10" />

      <div className="relative mx-auto max-w-7xl px-4 py-20 sm:px-6 sm:py-28 lg:px-8 lg:py-32">
        <div className="max-w-3xl">
          <p className="text-sm font-medium uppercase tracking-[0.24em] text-accent">
            Tuotteemme
          </p>

          <blockquote className="mt-6 font-heading text-4xl font-medium leading-[1.15] text-primary-dark sm:text-5xl lg:text-6xl">
            ”Kasvihuoneen lämmössä kypsyneet tomaatit poimimme mahdollisimman
            kypsinä, jolloin niihin on tullut oikea tomaatin maku.”
          </blockquote>

          <div aria-hidden="true" className="mt-9 h-px w-24 bg-border" />

          <div className="mt-9 space-y-5">
            <p className="max-w-xl text-base leading-8 text-text sm:text-lg sm:leading-9">
              Peuravaaran Puutarhassa kasvatamme tomaatteja, paprikoita ja
              kurkkuja luonnonvalolla Sauvon kasvihuoneissa.
            </p>

            <p className="max-w-xl text-base leading-8 text-text sm:text-lg sm:leading-9">
              Poimimme tuotteet niiden parhaassa kypsyysvaiheessa, jotta niiden
              täyteläinen maku, raikkaus ja korkea laatu säilyvät.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
