import Image from "next/image";

const yearImages = [
  {
    src: "/about/flowering.jpg",
    alt: "Kimalainen pölyttämässä tomaatinkukkia kasvihuoneessa",
  },
  {
    src: "/about/ripening.jpg",
    alt: "Kypsyviä punaisia ja vihreitä tomaatteja kasvihuoneessa",
  },
  {
    src: "/about/harvest.jpg",
    alt: "Tomaattien sadonkorjuu Peuravaaran Puutarhassa",
  },
];

export default function FarmYear() {
  return (
    <section
      id="vuodenkierto"
      aria-labelledby="farm-year-title"
      className="overflow-hidden bg-section px-4 py-20 sm:px-6 sm:py-28 lg:px-8 lg:py-32"
    >
      <div className="mx-auto max-w-7xl">
        <div className="mx-auto max-w-4xl text-center">
          <p className="text-sm font-medium uppercase tracking-[0.24em] text-accent">
            Vuodenkierto
          </p>

          <h2
            id="farm-year-title"
            className="mt-5 font-heading text-4xl font-medium leading-[1.08] text-primary-dark sm:text-5xl lg:text-6xl"
          >
            Vuodenkierto Peuravaaran tilalla
          </h2>
        </div>

        <div className="mx-auto mt-14 grid max-w-6xl grid-cols-1 justify-items-center gap-8 sm:mt-16 sm:grid-cols-3 sm:gap-6 lg:gap-12">
          {yearImages.map((image, index) => (
            <div
              key={image.src}
              className="group relative aspect-square w-full max-w-[280px] overflow-hidden rounded-full bg-background shadow-sm ring-8 ring-background sm:max-w-none"
            >
              <Image
                src={image.src}
                alt={image.alt}
                fill
                priority={index === 0}
                sizes="(min-width: 1024px) 28vw, (min-width: 640px) 30vw, 280px"
                className="object-cover transition-transform duration-700 group-hover:scale-105"
              />
            </div>
          ))}
        </div>

        <div
          aria-hidden="true"
          className="mx-auto mt-16 h-px w-24 bg-border sm:mt-20"
        />

        <div className="mx-auto mt-10 max-w-4xl space-y-7 text-center text-base leading-8 text-text sm:text-lg sm:leading-9">
          <p>
            Peuravaaran Puutarha käyttää viljelyssään ainoastaan luonnonvaloa.
            Näin ollen tuotteitamme löytää kaupoista huhtikuusta marraskuun
            loppuun. Talvi on aikaa tehdä huoltotöitä sekä valmistautua
            kiireiseen kesäkauteen.
          </p>

          <p>
            Kasvukausi alkaa joulukuussa, jolloin kylvämme ensimmäiset taimet
            taimihuoneisiin. Helmi–maaliskuussa taimet voidaan istuttaa, ja
            huhtikuusta alkaen voimme alkaa odottaa satoa. Joulukuu on
            Peuravaarassa perinteinen lomakuukausi.
          </p>
        </div>
      </div>
    </section>
  );
}
