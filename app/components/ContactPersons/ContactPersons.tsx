import Image from "next/image";
import { Clock3, Languages, Mail, Phone } from "lucide-react";

const people = [
  {
    name: "Tuomas Peuravaara",
    role: "Yritysmyynti",
    phone: "044 491 0299",
    phoneHref: "tel:+358444910299",
    email: "tuomas@tomaatit.fi",
    availability: "Ma–to klo 8.00–14.00",
    languages: "Suomi ja englanti",
  },
  {
    name: "Iryna Peuravaara",
    role: "Yhteydenotot",
    phone: "045 7875 9334",
    phoneHref: "tel:+3584578759334",
    email: "iryna@tomaatit.fi",
    languages: "Suomi, русский, українська ja englanti",
  },
];

export default function ContactPersons() {
  return (
    <section className="bg-background px-4 py-20 sm:px-6 sm:py-28 lg:px-8 lg:py-32">
      <div className="mx-auto max-w-7xl">
        <div className="grid items-center gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:gap-20">
          {/* Text and personal contacts */}
          <div>
            <p className="text-sm font-medium uppercase tracking-[0.24em] text-accent">
              Ota yhteyttä
            </p>

            <h2 className="mt-4 font-heading text-4xl font-medium leading-[1.08] text-primary-dark sm:text-5xl lg:text-6xl">
              Me palvelemme sinua
            </h2>

            <p className="mt-6 max-w-xl text-base leading-8 text-text sm:text-lg">
              Voit olla suoraan yhteydessä Tuomakseen tai Irynaan tuotteisiin,
              toimituksiin ja yhteistyöhön liittyvissä asioissa.
            </p>

            <div className="mt-12 divide-y divide-border border-y border-border">
              {people.map((person) => (
                <article
                  key={person.name}
                  className="py-9 first:pt-0 last:pb-0"
                >
                  <p className="text-sm font-medium uppercase tracking-[0.18em] text-accent">
                    {person.role}
                  </p>

                  <h3 className="mt-3 font-heading text-3xl font-medium text-primary-dark sm:text-4xl">
                    {person.name}
                  </h3>

                  <div className="mt-6 grid gap-4 text-text sm:grid-cols-2">
                    <a
                      href={person.phoneHref}
                      className="group flex items-start gap-3 transition-colors hover:text-accent"
                    >
                      <Phone
                        className="mt-1 size-4.5 shrink-0 text-accent"
                        strokeWidth={1.8}
                      />

                      <span>{person.phone}</span>
                    </a>

                    <a
                      href={`mailto:${person.email}`}
                      className="group flex items-start gap-3 break-all transition-colors hover:text-accent"
                    >
                      <Mail
                        className="mt-1 size-4.5 shrink-0 text-accent"
                        strokeWidth={1.8}
                      />

                      <span>{person.email}</span>
                    </a>

                    {person.availability && (
                      <div className="flex items-start gap-3">
                        <Clock3
                          className="mt-1 size-4.5 shrink-0 text-accent"
                          strokeWidth={1.8}
                        />

                        <span>{person.availability}</span>
                      </div>
                    )}

                    <div className="flex items-start gap-3">
                      <Languages
                        className="mt-1 size-4.5 shrink-0 text-accent"
                        strokeWidth={1.8}
                      />

                      <span>{person.languages}</span>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
          {/* Shared photo */}
          <div className="relative min-h-[430px] overflow-hidden rounded-[2rem] bg-section sm:min-h-[560px] lg:min-h-[680px] lg:rounded-[3rem]">
            <Image
              src="/contacts/owners.jpg"
              alt="Tuomas ja Iryna Peuravaara"
              fill
              sizes="(min-width: 1024px) 52vw, 100vw"
              className="object-cover"
            />

            <div className="absolute inset-0 bg-gradient-to-t from-primary-dark/30 via-transparent to-transparent" />
          </div>
        </div>
      </div>
    </section>
  );
}
