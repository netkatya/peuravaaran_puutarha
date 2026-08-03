export type Product = {
  id: string;
  title: string;
  category: string;
  description: string;
  image: string;
  details?: {
    label?: string;
    value: string;
  }[];
};

export const products: Product[] = [
  {
    id: "classic-pyorea-tomaatti",
    title: "Classic pyöreä tomaatti",
    category: "Tomaatit",
    description:
      "Suosituin ja eniten viljelemämme päätuotteemme on perinteinen pyöreä, makeankirpsakka ja aromikas tomaatti.",
    image: "/products/tomaatti1.png",
    details: [
      {
        label: "Värit",
        value: "Punainen ja keltainen",
      },
      {
        label: "Myyntierät",
        value: "5 kg / 10 kg laatikko",
      },
    ],
  },
  {
    id: "kirsikkatomaatti",
    title: "Kirsikkatomaatti",
    category: "Tomaatit",
    description:
      "Erikoistomaateista suosituin on Suomessa jo hyvin tunnettu kirsikkatomaatti. Se tuli tilallemme viljelyyn jo parikymmentä vuotta sitten. Kirsikkatomaatti on perinteistä tomaattia makeampi, kiinteämpi ja pienempi.",
    image: "/products/kirsikkatomaatti.png",
    details: [
      {
        label: "Väri",
        value: "Punainen",
      },
      {
        label: "Pakkaukset",
        value: "250 g ja 500 g rasia",
      },
      {
        label: "Irtomyynti",
        value: "5 kg laatikko",
      },
    ],
  },
  {
    id: "muut-tomaatit",
    title: "Muut tomaatit",
    category: "Tomaatit",
    description:
      "Valikoimastamme löytyy useita maukkaita mini- ja erikoistomaatteja.",
    image: "/products/muut-tomaatit.png",
    details: [
      {
        value: "Punainen tai keltainen miniluumutomaatti – 250 g",
      },
      {
        value: "MinitomaattiMIX – 250 g",
      },
      {
        value: "Miniterttutomaatti – 300 g",
      },
    ],
  },
  {
    id: "perinteinen-paprika",
    title: "Perinteinen paprika",
    category: "Paprikat",
    description:
      "Paprika on toinen päätuotteistamme. Viljelemme sekä punaista, keltaista että oranssia paprikaa.",
    image: "/products/paprika.png",
    details: [
      {
        label: "Värit",
        value: "Punainen, keltainen ja oranssi",
      },
    ],
  },
  {
    id: "suippopaprika",
    title: "Suippopaprika",
    category: "Paprikat",
    description: "Suussasulavan makean suippopaprikan suosio nousee kohisten.",
    image: "/products/suippopaprika.png",
    details: [
      {
        label: "Pakkaus",
        value: "200 g pussi",
      },
    ],
  },
  {
    id: "kurkku",
    title: "Kurkku",
    category: "Kurkut",
    description:
      "Raikas ja rapea suomalainen kurkku kasvatetaan luonnonvalolla ja toimitetaan jälleenmyyjille mahdollisimman tuoreena.",
    image: "/products/kurkku.png",
  },
];
