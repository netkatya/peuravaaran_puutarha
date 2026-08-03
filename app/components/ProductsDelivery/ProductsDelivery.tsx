export default function ProductsDelivery() {
  return (
    <section className="bg-values-bg px-4 py-20 sm:px-6 sm:py-24 lg:px-8 lg:py-28">
      <div className="mx-auto max-w-5xl text-center">
        <p className="mb-4 text-sm font-medium uppercase tracking-[0.24em] text-cream/70">
          Omat toimitukset
        </p>

        <h2 className="font-heading text-4xl font-medium leading-[1.15] text-cream sm:text-5xl lg:text-6xl">
          Tekemällä toimitukset itse varmistamme laadun
          <br className="hidden lg:block" /> ja autamme kauppiasta
        </h2>

        <div
          aria-hidden="true"
          className="mx-auto mt-10 h-px w-24 bg-white/20"
        />

        <p className="mx-auto mt-10 max-w-4xl text-lg leading-9 text-cream/80">
          Kuljetamme tilaukset kaksi–kolme kertaa viikossa paikallisille
          kauppiaille omalla kalustollamme. Haluamme palvella kauppoja niin
          hyvin kuin mahdollista: jos tavara loppuu kesken, toimitamme sitä
          mahdollisuuksien mukaan jo saman päivän aikana.
        </p>
      </div>
    </section>
  );
}
