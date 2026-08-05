export default function OwnerMessage() {
  return (
    <section className="bg-values-bg px-4 py-20 text-cream sm:px-6 sm:py-28 lg:px-8 lg:py-32">
      <div className="mx-auto max-w-4xl text-center">
        <h2 className="mt-5 font-heading text-4xl font-medium text-cream sm:text-5xl">
          Tuomas Peuravaara
        </h2>

        <p className="mt-2 text-sm font-medium uppercase tracking-[0.2em] text-cream/55">
          Yrittäjä
        </p>

        <div
          aria-hidden="true"
          className="mx-auto mt-9 h-px w-20 bg-cream/25"
        />

        <blockquote className="mt-10">
          <div className="space-y-7">
            <p className="font-heading text-3xl italic leading-[1.35] text-cream sm:text-4xl lg:text-[2.75rem]">
              ”Haluan pitää yllä Suomen omavaraisuutta ja työllistää ihmisiä.
              Haluan myös tarjota parempia vihanneksia kuin mitä ulkomailta saa.
            </p>

            <p className="text-base leading-8 text-cream/80 sm:text-lg sm:leading-9">
              Työni on mielenkiintoista, eikä siinä tule koskaan valmiiksi. Aina
              oppii uutta, ja vuodenkierto pitää työn vaihtelevana.
            </p>

            <p className="text-base leading-8 text-cream/80 sm:text-lg sm:leading-9">
              Lempityövaiheeni on kevät, kun aurinko alkaa paistaa pitkän ja
              rauhallisen talven jälkeen ja kasvihuoneilla alkaa jälleen
              tapahtua.
            </p>

            <p className="text-base leading-8 text-cream/80 sm:text-lg sm:leading-9">
              Tämänhetkiset tomaattisuosikkini ovat kaikki pienikokoiset makeat
              tomaatit!”
            </p>
          </div>
        </blockquote>
      </div>
    </section>
  );
}
