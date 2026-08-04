import { Building2, Mail, ReceiptText } from "lucide-react";

const billingItems = [
  {
    icon: ReceiptText,
    title: "Verkkolaskutus",
    details: [
      {
        label: "Verkkolaskuosoite",
        value: "003726566387",
      },
      {
        label: "OVT-tunnus",
        value: "003726566387",
      },
      {
        label: "Operaattori",
        value: "Apix Messaging Oy",
      },
      {
        label: "Välittäjätunnus",
        value: "003723327487",
      },
    ],
  },
  {
    icon: Building2,
    title: "Paperilaskut",
    details: [
      {
        label: "Vastaanottaja",
        value: "Peuravaaran Puutarha Oy",
      },
      {
        label: "Osoite",
        value: "PL 16112",
      },
      {
        label: "Postinumero",
        value: "00021 LASKUTUS",
      },
    ],
    note: "Emme vastaanota paperilaskuja yrityksen käynti- tai postiosoitteeseen.",
  },
  {
    icon: Mail,
    title: "Sähköpostiskannaus",
    details: [
      {
        label: "Sähköposti",
        value: "003726566387@procountor.apix.fi",
      },
    ],
    note: "Lähetä lasku PDF-muodossa. Yhdessä viestissä voi olla vain yksi lasku liitteineen.",
  },
];

export default function BillingDetails() {
  return (
    <section className="bg-background px-4 py-20 sm:px-6 sm:py-28 lg:px-8 lg:py-32">
      <div className="mx-auto max-w-7xl">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-sm font-medium uppercase tracking-[0.24em] text-accent">
            Laskutustiedot
          </p>

          <h2 className="mt-4 font-heading text-4xl font-medium leading-[1.08] text-primary-dark sm:text-5xl lg:text-6xl">
            Laskujen lähettäminen
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-base leading-8 text-text sm:text-lg">
            Toivomme ensisijaisesti verkkolaskuja. Voit lähettää laskun myös
            paperisena tai sähköpostiskannauksen kautta.
          </p>
        </div>

        <div className="mt-14 grid gap-6 lg:grid-cols-3">
          {billingItems.map((item) => {
            const Icon = item.icon;

            return (
              <article
                key={item.title}
                className="rounded-[2rem] border border-border bg-section p-7 sm:p-8"
              >
                <div className="flex size-12 items-center justify-center rounded-full bg-background">
                  <Icon className="size-5 text-accent" strokeWidth={1.8} />
                </div>

                <h3 className="mt-6 font-heading text-3xl font-medium text-primary-dark">
                  {item.title}
                </h3>

                <dl className="mt-7 space-y-5">
                  {item.details.map((detail) => (
                    <div
                      key={`${item.title}-${detail.label}`}
                      className="border-t border-border pt-4 first:border-t-0 first:pt-0"
                    >
                      <dt className="text-xs font-medium uppercase tracking-[0.16em] text-text-light">
                        {detail.label}
                      </dt>

                      <dd className="mt-1 break-words text-base leading-7 text-text">
                        {detail.value}
                      </dd>
                    </div>
                  ))}
                </dl>

                {item.note && (
                  <p className="mt-7 border-t border-border pt-5 text-sm leading-7 text-text-light">
                    {item.note}
                  </p>
                )}
              </article>
            );
          })}
        </div>

        <div className="mt-10 rounded-[2rem] bg-primary px-6 py-8 text-center text-cream sm:px-10">
          <p className="text-sm font-medium uppercase tracking-[0.2em] text-cream/65">
            Y-tunnus
          </p>

          <p className="mt-2 font-heading text-3xl">2656638-7</p>
        </div>
      </div>
    </section>
  );
}
