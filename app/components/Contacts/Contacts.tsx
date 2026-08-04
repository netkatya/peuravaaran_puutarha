import { Clock3, Mail, MapPin, Phone } from "lucide-react";

const contactDetails = [
  {
    icon: MapPin,
    label: "Osoite",
    content: (
      <address className="not-italic">
        Peuravaaran Puutarha Oy
        <br />
        Sauvon-Kemiöntie 814
        <br />
        21570 Sauvo
      </address>
    ),
  },
  {
    icon: Phone,
    label: "Puhelin",
    content: (
      <a
        href="tel:+358444910299"
        className="transition-colors duration-300 hover:text-accent"
      >
        044 491 0299
      </a>
    ),
  },
  {
    icon: Mail,
    label: "Sähköposti",
    content: (
      <a
        href="mailto:tuomas@tomaatit.fi"
        className="break-all transition-colors duration-300 hover:text-accent"
      >
        tuomas@tomaatit.fi
      </a>
    ),
  },
  {
    icon: Clock3,
    label: "Yritysmyynti",
    content: <p>Ma–to klo 8.00–14.00</p>,
  },
];

export default function ContactSection() {
  return (
    <section className="bg-section px-4 py-20 sm:px-6 sm:py-28 lg:px-8 lg:py-32">
      <div className="mx-auto max-w-7xl">
        {/* Section heading */}
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-sm font-medium uppercase tracking-[0.24em] text-accent">
            Yhteystiedot
          </p>

          <h1 className="mt-4 font-heading text-4xl font-medium leading-[1.08] text-primary-dark sm:text-5xl lg:text-6xl">
            Ota meihin yhteyttä
          </h1>

          <p className="mx-auto mt-6 max-w-2xl text-base leading-8 text-text sm:text-lg">
            Kysy lisää tuotteistamme, toimituksista tai yhteistyöstä. Vastaamme
            mielellämme kaikkiin kysymyksiin.
          </p>
        </div>

        {/* Contact information and form */}
        <div className="mt-14 grid overflow-hidden rounded-[2rem] bg-background sm:mt-16 lg:grid-cols-[0.82fr_1.18fr] lg:rounded-[3rem]">
          {/* Contact information */}
          <div className="bg-primary px-6 py-12 text-cream sm:px-10 sm:py-16 lg:px-14 lg:py-20">
            <p className="text-sm font-medium uppercase tracking-[0.22em] text-cream/65">
              Peuravaaran Puutarha Oy
            </p>

            <h2 className="mt-5 max-w-md font-heading text-4xl font-medium leading-tight sm:text-5xl">
              Autamme mielellämme
            </h2>

            <p className="mt-6 max-w-md leading-8 text-cream/75">
              Voit ottaa meihin yhteyttä puhelimitse, sähköpostitse tai
              yhteydenottolomakkeella.
            </p>

            <div className="mt-12 space-y-8">
              {contactDetails.map(({ icon: Icon, label, content }) => (
                <div key={label} className="flex items-start gap-4">
                  <div className="flex size-11 shrink-0 items-center justify-center rounded-full border border-cream/15 bg-cream/10">
                    <Icon className="size-5 text-cream" strokeWidth={1.7} />
                  </div>

                  <div>
                    <p className="text-xs font-medium uppercase tracking-[0.18em] text-cream/55">
                      {label}
                    </p>

                    <div className="mt-2 leading-7 text-cream/90">
                      {content}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Contact form */}
          <div className="px-6 py-12 sm:px-10 sm:py-16 lg:px-16 lg:py-20">
            <div className="max-w-2xl">
              <p className="text-sm font-medium uppercase tracking-[0.22em] text-accent">
                Lähetä viesti
              </p>

              <h2 className="mt-4 font-heading text-4xl font-medium text-primary-dark sm:text-5xl">
                Miten voimme auttaa?
              </h2>

              <form className="mt-10 space-y-7">
                <div className="grid gap-7 sm:grid-cols-2">
                  <div>
                    <label
                      htmlFor="name"
                      className="text-sm font-medium text-primary-dark"
                    >
                      Nimi
                    </label>

                    <input
                      id="name"
                      name="name"
                      type="text"
                      autoComplete="name"
                      required
                      placeholder="Nimesi"
                      className="mt-3 w-full border-b border-border bg-transparent px-0 py-3 text-text outline-none transition-colors placeholder:text-text-light/60 focus:border-primary"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="phone"
                      className="text-sm font-medium text-primary-dark"
                    >
                      Puhelinnumero
                    </label>

                    <input
                      id="phone"
                      name="phone"
                      type="tel"
                      autoComplete="tel"
                      placeholder="Puhelinnumerosi"
                      className="mt-3 w-full border-b border-border bg-transparent px-0 py-3 text-text outline-none transition-colors placeholder:text-text-light/60 focus:border-primary"
                    />
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className="text-sm font-medium text-primary-dark"
                  >
                    Sähköposti
                  </label>

                  <input
                    id="email"
                    name="email"
                    type="email"
                    autoComplete="email"
                    required
                    placeholder="sahkoposti@esimerkki.fi"
                    className="mt-3 w-full border-b border-border bg-transparent px-0 py-3 text-text outline-none transition-colors placeholder:text-text-light/60 focus:border-primary"
                  />
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="text-sm font-medium text-primary-dark"
                  >
                    Viesti
                  </label>

                  <textarea
                    id="message"
                    name="message"
                    rows={5}
                    required
                    placeholder="Kirjoita viestisi tähän..."
                    className="mt-3 w-full resize-none border-b border-border bg-transparent px-0 py-3 text-text outline-none transition-colors placeholder:text-text-light/60 focus:border-primary"
                  />
                </div>

                <label className="flex cursor-pointer items-start gap-3 text-sm leading-6 text-text-light">
                  <input
                    type="checkbox"
                    name="privacy"
                    required
                    className="mt-1 size-4 shrink-0 accent-primary"
                  />

                  <span>
                    Hyväksyn, että antamiani tietoja käytetään yhteydenottooni
                    vastaamiseen.
                  </span>
                </label>

                <button
                  type="submit"
                  className="inline-flex items-center justify-center rounded-full bg-primary px-8 py-4 font-medium text-cream transition-all duration-300 hover:-translate-y-0.5 hover:bg-primary-dark"
                >
                  Lähetä viesti
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
