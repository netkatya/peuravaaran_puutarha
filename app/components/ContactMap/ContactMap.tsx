import { ExternalLink, MapPin, Navigation } from "lucide-react";

export default function ContactMap() {
  return (
    <section className="bg-section px-4 py-20 sm:px-6 sm:py-28 lg:px-8 lg:py-32">
      <div className="mx-auto max-w-7xl">
        <div className="grid overflow-hidden rounded-[2rem] bg-background lg:grid-cols-[0.82fr_1.18fr] lg:rounded-[3rem]">
          {/* Address */}
          <div className="flex flex-col justify-center px-6 py-12 sm:px-10 sm:py-16 lg:px-14 lg:py-20">
            <p className="text-sm font-medium uppercase tracking-[0.24em] text-accent">
              Sijainti
            </p>

            <h2 className="mt-4 font-heading text-4xl font-medium leading-[1.08] text-primary-dark sm:text-5xl lg:text-6xl">
              Löydät meidät Sauvosta
            </h2>

            <p className="mt-6 max-w-lg text-base leading-8 text-text sm:text-lg">
              Puutarhamme sijaitsee noin neljän kilometrin päässä Sauvon
              keskustasta Kemiön suuntaan.
            </p>

            <div className="mt-10 flex items-start gap-4 border-t border-border pt-8">
              <div className="flex size-12 shrink-0 items-center justify-center rounded-full bg-section">
                <MapPin className="size-5 text-accent" strokeWidth={1.8} />
              </div>

              <address className="not-italic text-lg leading-8 text-text">
                <span className="font-medium text-primary-dark">
                  Peuravaaran Puutarha Oy
                </span>
                <br />
                Sauvon-Kemiöntie 814
                <br />
                21570 Sauvo
              </address>
            </div>

            <a
              href="https://www.google.com/maps/search/?api=1&query=Sauvon-Kemiöntie+814,+21570+Sauvo"
              target="_blank"
              rel="noreferrer"
              className="mt-10 inline-flex w-fit items-center gap-3 rounded-full bg-primary px-7 py-3.5 font-medium text-cream transition-all duration-300 hover:-translate-y-0.5 hover:bg-primary-dark"
            >
              Avaa Google Mapsissa
              <ExternalLink className="size-4" strokeWidth={1.8} />
            </a>
          </div>

          {/* Map */}
          <div className="relative min-h-[420px] overflow-hidden bg-cream/40 sm:min-h-[520px] lg:min-h-[620px]">
            <iframe
              title="Peuravaaran Puutarha Oy kartalla"
              src="https://www.google.com/maps?q=Sauvon-Kemiöntie%20814%2C%2021570%20Sauvo&output=embed"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="absolute inset-0 h-full w-full border-0"
            />

            <div className="pointer-events-none absolute left-5 top-5 flex items-center gap-3 rounded-full bg-background/85 px-4 py-2.5 text-sm text-primary-dark shadow-sm backdrop-blur-md">
              <Navigation className="size-4 text-accent" strokeWidth={1.8} />
              Sauvo, Varsinais-Suomi
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
