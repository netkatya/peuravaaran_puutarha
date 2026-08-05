import Image from "next/image";
import { Sprout, Sun, Truck } from "lucide-react";

const qualityItems = [
  {
    icon: Sprout,
    title: "Kotimaista laatua",
    text: "Yrityksemme on laatutarha-auditoitu vuonna 2017. Kaikki tuotteemme ovat saaneet Sirkkalehtimerkin, joka takaa tuotteen kotimaisuuden.",
  },
  {
    icon: Sun,
    title: "Luonnonvalolla viljelty",
    text: "Viljelemme tomaatteja, erikoistomaatteja ja kurkkua luonnonvalolla huhtikuusta marraskuun loppuun.",
  },
  {
    icon: Truck,
    title: "Tuoreena poimintapäivänä",
    text: "Kuljetamme tasaisen laadukkaat tuotteemme itse jälleenmyyntipisteisiin jo niiden poimintapäivänä.",
  },
];

export default function QualitySection() {
  return (
    <section className="bg-background px-4 py-20 sm:px-6 sm:py-28 lg:px-8 lg:py-32">
      <div className="mx-auto max-w-7xl">
        <div className="mb-12 max-w-4xl lg:mb-16">
          <p className="mb-4 text-sm font-medium uppercase tracking-[0.24em] text-accent">
            Laatu ja tuoreus
          </p>

          <h2 className="font-heading text-4xl font-medium leading-[1.08] text-primary-dark sm:text-5xl lg:text-6xl">
            Suomalaisia tomaatteja rakkaudesta luontoon
          </h2>
        </div>

        <div className="grid items-center gap-12 lg:grid-cols-[1.15fr_0.85fr] lg:gap-20">
          <div className="relative aspect-[3/4] overflow-hidden rounded-[2rem]">
            <Image
              src="/quality/quality.jpg"
              alt="Tuoreita suomalaisia tomaatteja"
              fill
              sizes="(min-width: 1024px) 58vw, 100vw"
              className="object-cover"
            />
          </div>

          <div className="divide-y divide-border">
            {qualityItems.map(({ icon: Icon, title, text }) => (
              <article
                key={title}
                className="py-8 border-b border-border last:border-b-0"
              >
                <div className="flex gap-5">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-cream">
                    <Icon className="h-6 w-6 text-accent" strokeWidth={1.8} />
                  </div>

                  <div>
                    <h3 className="font-heading text-3xl font-medium text-primary-dark">
                      {title}
                    </h3>

                    <p className="mt-3 text-lg leading-8 text-text">{text}</p>
                  </div>
                </div>
              </article>
            ))}

            <p className="pt-8 text-base leading-8 text-text-light">
              Aidonmakuisia tuotteitamme löytyy Varsinais-Suomen, Turun ja
              Sauvon alueen marketeista. Toimitamme tuotteita kahdesta kolmeen
              kertaa viikossa ja tarvittaessa saman päivän aikana tilauksesta.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
