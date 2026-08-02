export default function AboutSection() {
  return (
    <section className="bg-section px-4 py-20 sm:px-6 sm:py-28 lg:px-8 lg:py-32">
      <div className="mx-auto max-w-5xl text-center">
        <p className="mb-5 text-sm font-medium uppercase tracking-[0.24em] text-accent">
          Tietoa meistä
        </p>

        <h2 className="font-heading text-4xl font-medium leading-[1.08] text-primary-dark sm:text-5xl lg:text-6xl">
          Varsinais-Suomessa luonnonvalolla viljellyt laadukkaat suomalaiset
          tomaatit, paprikat ja kurkut
        </h2>

        <div
          aria-hidden="true"
          className="mx-auto my-9 h-px w-24 bg-border sm:my-11 sm:w-28"
        />

        <p className="mx-auto max-w-3xl text-base leading-8 text-text sm:text-lg sm:leading-9 lg:text-xl">
          Peuravaaran Puutarha Oy on sauvolainen kasvihuoneviljelytila. Se
          sijaitsee Sauvon keskustassa noin 4 km Kemiöön päin. Perheyrityksemme
          ensimmäiset kasvihuoneet rakennettiin 1960-luvun alussa, ja nyt
          tuotannosta vastaa jo kolmas sukupolvi.
        </p>
      </div>
    </section>
  );
}
