import Image from "next/image";
import Link from "next/link";
import { BsInstagram, BsYoutube } from "react-icons/bs";
import { FaFacebook } from "react-icons/fa";

const navigation = [
  { name: "Etusivu", href: "/" },
  { name: "Tuotteet", href: "/tuotteet" },
  { name: "Meistä", href: "/meista" },
  { name: "Yhteystiedot", href: "/yhteystiedot" },
];

export default function Footer() {
  return (
    <footer className="relative overflow-hidden text-cream">
      <Image
        src="/footer/footer-bg.jpg"
        alt=""
        fill
        priority={false}
        className="object-cover"
      />
      <div className="absolute inset-0 bg-primary/60 backdrop-blur-[1px]" />

      <div className="relative mx-auto max-w-7xl px-6 py-20 lg:px-8">
        <div className="grid gap-14 lg:grid-cols-[1.2fr_1fr_1fr_1fr]">
          {/* Logo */}

          <div>
            <Image
              src="/header/logo.png"
              alt="Peuravaaran Puutarha Oy"
              width={95}
              height={95}
            />

            <p className="mt-8 max-w-xs text-base leading-8 text-cream/80">
              Suomalaisia tomaatteja
              <br />
              rakkaudesta luontoon.
            </p>

            <div className="mt-8 flex gap-4">
              <a
                href="https://fi-fi.facebook.com/peuravaaranpuutarha"
                target="_blank"
                className="flex h-11 w-11 items-center justify-center rounded-full border border-cream/20 transition hover:bg-cream hover:text-primary"
              >
                <FaFacebook size={18} />
              </a>

              <a
                href="https://www.instagram.com/peuravaaran_puutarha/"
                target="_blank"
                className="flex h-11 w-11 items-center justify-center rounded-full border border-cream/20 transition hover:bg-cream hover:text-primary"
              >
                <BsInstagram size={18} />
              </a>

              <a
                href="https://www.youtube.com/channel/UC5lqr6HU5bspe1fx6GpBz0w"
                target="_blank"
                className="flex h-11 w-11 items-center justify-center rounded-full border border-cream/20 transition hover:bg-cream hover:text-primary"
              >
                <BsYoutube size={18} />
              </a>
            </div>
          </div>

          {/* Navigation */}

          <div>
            <h3 className="font-heading text-2xl">Sivut</h3>

            <ul className="mt-6 space-y-4">
              {navigation.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="text-cream/80 transition hover:text-white"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}

          <div>
            <h3 className="font-heading text-2xl">Yhteystiedot</h3>

            <div className="mt-6 space-y-3 text-cream/80 leading-7">
              <p>Peuravaaran Puutarha Oy</p>

              <p>
                Sauvon-Kemiöntie 814
                <br />
                21570 Sauvo
              </p>

              <p>044 4910299</p>

              <p>tuomas@tomaatit.fi</p>
            </div>
          </div>

          {/* Billing */}

          <div>
            <h3 className="font-heading text-2xl">Laskutus</h3>

            <div className="mt-6 space-y-3 text-sm leading-7 text-cream/80">
              <p>
                <strong>Y-tunnus</strong>
                <br />
                2656638-7
              </p>

              <p>
                <strong>OVT</strong>
                <br />
                003726566387
              </p>

              <p>
                <strong>Verkkolasku</strong>
                <br />
                003726566387
              </p>

              <p>
                <strong>Operaattori</strong>
                <br />
                Apix Messaging Oy
              </p>
            </div>
          </div>
        </div>

        <div className="mt-16 border-t border-cream/15 pt-8 text-center text-sm text-cream/60">
          © {new Date().getFullYear()} Peuravaaran Puutarha Oy. All rights
          reserved.
        </div>
      </div>
    </footer>
  );
}
