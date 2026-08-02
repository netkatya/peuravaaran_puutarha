import { Leaf, Sun, Truck, BadgeCheck } from "lucide-react";

const values = [
  {
    icon: BadgeCheck,
    title: "Laatu",
    text: "Laatutarha-auditoitu tila ja Sirkkalehtimerkki takaavat kotimaisen laadun.",
  },
  {
    icon: Sun,
    title: "Luonnonvalo",
    text: "Kasvatamme vihannekset luonnonvalossa huhtikuusta marraskuun loppuun.",
  },
  {
    icon: Leaf,
    title: "Vastuullisuus",
    text: "Viljelemme ympäristöä kunnioittaen ja käytämme vastuullisia ratkaisuja.",
  },
  {
    icon: Truck,
    title: "Tuoreus",
    text: "Toimitamme tuotteet jälleenmyyjille jo poimintapäivänä.",
  },
];

export default function ValuesSection() {
  return (
    <section className="bg-values-bg py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mx-auto max-w-3xl text-center">
          <p className="mb-4 text-sm uppercase tracking-[0.25em] text-hero-subtitle">
            Ekologiset arvot
          </p>

          <h2 className="font-heading text-5xl font-medium text-hero-title lg:text-6xl">
            Vastuullisesti kasvatettua laatua
          </h2>

          <p className="mt-8 text-lg leading-9 text-hero-subtitle">
            Lähtökohtana viljelyssämme ovat ekologiset arvot sekä luonnon
            kunnioittaminen. Haluamme tarjota mahdollisimman tuoreita ja
            laadukkaita kotimaisia vihanneksia vastuullisesti kasvatettuina.
          </p>
        </div>

        <div className="mt-20 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {values.map(({ icon: Icon, title, text }) => (
            <article
              key={title}
              className="
                rounded-[28px]
                border border-white/10
                bg-values-card
                p-8
                transition-all
                duration-300
                hover:-translate-y-1
                hover:bg-values-card-hover
              "
            >
              <Icon className="h-9 w-9 text-hero-title" strokeWidth={1.8} />

              <h3 className="mt-8 font-heading text-3xl text-hero-title">
                {title}
              </h3>

              <p className="mt-4 leading-8 text-hero-subtitle">{text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
