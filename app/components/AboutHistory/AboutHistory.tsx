import Image from "next/image";

type HistoryItem = {
  period: string;
  title: string;
  description: string;
  image: string;
  imageAlt: string;
  imageFit?: "cover" | "contain";
};

const historyItems: HistoryItem[] = [
  {
    period: "1950-luku",
    title: "Viljely alkaa Peuravaaran tilalla",
    description:
      "Unto Peuravaara aloitti avomaanviljelyn Peuravaaran tilalla jo 1950-luvulla. Tuotanto oli monipuolista, ja tilalla viljeltiin erilaisia vihanneksia sekä kukkia.",
    image: "/about/maapohja-viljelya-1960.jpg",
    imageAlt: "Peuravaaran tilan varhaisia viljelyvuosia",
  },
  {
    period: "1960-luku",
    title: "Ensimmäiset kasvihuoneet",
    description:
      "Unto rakensi ensimmäiset kasvihuoneet 1960-luvulla. Viljelykasvit kuljetettiin myytäviksi Turun kauppatorille, jossa vihannesten lisäksi myytiin myös tilalla kasvatettuja kukkia.",
    image: "/about/tarha-vuonna-1969.jpg",
    imageAlt: "Peuravaaran Puutarhan ensimmäisiä kasvihuoneita",
  },
  {
    period: "1980-luku",
    title: "Tila siirtyy seuraavalle sukupolvelle",
    description:
      "Unton jälkeen toimintaa jatkoi Jarkko Peuravaara. Tuotanto keskittyi vähitellen kasvihuonevihanneksiin, ja kukkatuotanto jäi pois. Samalla torimyynti vaihtui yhteistyöhön Sauvon lähialueen ja Turun vähittäiskauppojen kanssa.",
    image: "/about/newspaper.jpg",
    imageAlt: "Vanha lehtileike Jarkko Peuravaarasta kasvihuoneessa",
    imageFit: "contain",
  },
  {
    period: "Nykyhetki",
    title: "Katse tulevaisuuteen",
    description:
      "Nykyisin tilaa johtaa Jarkon poika Tuomas Peuravaara. Tuotannossa keskitytään erityisesti tomaatteihin ja erikoistomaatteihin sekä ympäristöystävällisiin viljelyratkaisuihin. Tilalla on panostettu muun muassa energiatehokkuuteen ja täyteen LED-valaistukseen taimikasvatuksessa.",
    image: "/about/nowadays.jpg",
    imageAlt: "Peuravaaran Puutarhan nykyaikainen kasvihuone",
  },
];

export default function AboutHistory() {
  return (
    <section
      id="historia"
      aria-labelledby="history-title"
      className="bg-background px-4 py-20 sm:px-6 sm:py-28 lg:px-8 lg:py-32"
    >
      <div className="mx-auto max-w-7xl">
        {/* Heading */}
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-sm font-medium uppercase tracking-[0.24em] text-accent">
            Historiamme
          </p>

          <h2
            id="history-title"
            className="mt-5 font-heading text-4xl font-medium leading-[1.08] text-primary-dark sm:text-5xl lg:text-6xl"
          >
            Viljelytoimintaa Sauvossa jo yli 60 vuoden ajan
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-base leading-8 text-text sm:text-lg">
            Peuravaaran Puutarhan tarina on kulkenut sukupolvelta toiselle
            avomaanviljelystä nykyaikaiseen kasvihuonetuotantoon.
          </p>
        </div>

        {/* Timeline */}
        <div className="relative mt-16 sm:mt-20">
          {/* Desktop centre line */}
          <div
            aria-hidden="true"
            className="absolute bottom-0 left-1/2 top-0 hidden w-px -translate-x-1/2 bg-border lg:block"
          />

          <div className="space-y-16 sm:space-y-20 lg:space-y-28">
            {historyItems.map((item, index) => {
              const imageFirst = index % 2 !== 0;

              const image = (
                <div
                  className={`relative overflow-hidden rounded-[2rem] bg-section lg:rounded-[2.5rem] ${
                    item.imageFit === "contain"
                      ? "aspect-[4/3] p-4 sm:p-6"
                      : "aspect-[4/3]"
                  }`}
                >
                  <Image
                    src={item.image}
                    alt={item.imageAlt}
                    fill
                    sizes="(min-width: 1024px) 46vw, 100vw"
                    className={
                      item.imageFit === "contain"
                        ? "object-contain"
                        : "object-cover"
                    }
                  />
                </div>
              );

              const content = (
                <div className="relative">
                  {/* Mobile timeline */}
                  <div className="absolute bottom-0 left-0 top-0 w-px bg-border lg:hidden" />

                  <div className="relative pl-8 lg:pl-0">
                    <span
                      aria-hidden="true"
                      className="absolute left-0 top-2 size-3 -translate-x-[5.5px] rounded-full border-4 border-background bg-accent lg:hidden"
                    />

                    <p className="text-sm font-medium uppercase tracking-[0.22em] text-accent">
                      {item.period}
                    </p>

                    <h3 className="mt-4 font-heading text-3xl font-medium leading-tight text-primary-dark sm:text-4xl lg:text-5xl">
                      {item.title}
                    </h3>

                    <div
                      aria-hidden="true"
                      className="mt-7 h-px w-20 bg-border"
                    />

                    <p className="mt-7 text-base leading-8 text-text sm:text-lg sm:leading-9">
                      {item.description}
                    </p>
                  </div>
                </div>
              );

              return (
                <article
                  key={item.period}
                  className="relative grid items-center gap-10 lg:grid-cols-2 lg:gap-24"
                >
                  {/* Desktop marker */}
                  <span
                    aria-hidden="true"
                    className="absolute left-1/2 top-1/2 z-10 hidden size-4 -translate-x-1/2 -translate-y-1/2 rounded-full border-[5px] border-background bg-accent lg:block"
                  />

                  {imageFirst ? (
                    <>
                      <div className="order-2 lg:order-1">{image}</div>
                      <div className="order-1 lg:order-2">{content}</div>
                    </>
                  ) : (
                    <>
                      <div>{content}</div>
                      <div>{image}</div>
                    </>
                  )}
                </article>
              );
            })}
          </div>
        </div>

        {/* Employees note */}
        <div className="mt-20 border-t border-border pt-10 sm:mt-28 lg:grid lg:grid-cols-[0.65fr_1.35fr] lg:gap-16">
          <p className="font-heading text-3xl font-medium text-primary-dark sm:text-4xl">
            Ihmiset ovat aina olleet tärkeä osa tilan toimintaa
          </p>

          <p className="mt-6 text-base leading-8 text-text sm:text-lg sm:leading-9 lg:mt-0">
            Peuravaaran tilalla on ollut alusta lähtien mukana myös ulkopuolisia
            työntekijöitä. Nykyisin viljelyssä ja tilan muissa tehtävissä
            työskentelee sesongista riippuen kolmesta kahteentoista henkilöä.
          </p>
        </div>
      </div>
    </section>
  );
}
