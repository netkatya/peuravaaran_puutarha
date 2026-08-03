import { MapPin } from "lucide-react";

const retailerGroups = [
  {
    city: "Sauvo",
    stores: ["S-Market Sauvo", "K-Market Sauvo"],
  },
  {
    city: "Turku",
    stores: [
      "Prisma Itäharju",
      "Prisma Länsikeskus",
      "Torimyynti Sorri",
      "Torimyynti Sirkiä",
    ],
  },
  {
    city: "Raisio",
    stores: ["Prisma Mylly"],
  },
  {
    city: "Lieto",
    stores: ["S-Market Lieto"],
  },
  {
    city: "Kaarina",
    stores: ["K-Citymarket Ravattula"],
  },
  {
    city: "Kemiö",
    stores: ["S-Market Kemiö"],
  },
  {
    city: "Perniö",
    stores: ["S-Market Perniö"],
  },
  {
    city: "Taalintehdas",
    stores: ["Sale Taalintehdas"],
  },
  {
    city: "Salo",
    stores: ["Torimyynti Lehtinen"],
  },
];

export default function Retailers() {
  return (
    <section className="bg-background px-4 py-20 sm:px-6 sm:py-28 lg:px-8 lg:py-32">
      <div className="mx-auto max-w-7xl">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-sm font-medium uppercase tracking-[0.24em] text-accent">
            Jälleenmyyjät
          </p>

          <h2 className="mt-4 font-heading text-4xl font-medium text-primary-dark sm:text-5xl lg:text-6xl">
            Mistä tuotteitamme voi ostaa?
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-text">
            Tuotteitamme on saatavilla useissa Varsinais-Suomen myymälöissä ja
            torimyyntipisteissä.
          </p>
        </div>

        <div className="mt-16 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {retailerGroups.map((group) => (
            <article
              key={group.city}
              className="rounded-[2rem] border border-border bg-section p-7"
            >
              <div className="flex items-center gap-3">
                <div className="flex size-10 items-center justify-center rounded-full bg-background">
                  <MapPin className="size-5 text-accent" strokeWidth={1.8} />
                </div>

                <h3 className="font-heading text-3xl text-primary-dark">
                  {group.city}
                </h3>
              </div>

              <ul className="mt-6 space-y-3">
                {group.stores.map((store) => (
                  <li
                    key={store}
                    className="border-t border-border pt-3 text-text first:border-t-0 first:pt-0"
                  >
                    {store}
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
