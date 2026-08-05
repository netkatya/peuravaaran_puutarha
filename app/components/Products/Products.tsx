import Image from "next/image";

import { products } from "@/app/data/products";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function Products() {
  return (
    <section
      id="tuotteet"
      aria-labelledby="products-title"
      className="overflow-hidden bg-section px-4 py-20 sm:px-6 sm:py-28 lg:px-8 lg:py-32"
    >
      <div className="mx-auto max-w-7xl">
        <div className="mx-auto max-w-3xl text-center">
          <p className="mb-4 text-sm font-medium uppercase tracking-[0.24em] text-accent">
            Tuotteemme
          </p>

          <h1
            id="products-title"
            className="font-heading text-4xl font-medium leading-[1.08] text-primary-dark sm:text-5xl lg:text-6xl"
          >
            Tuoreita kotimaisia vihanneksia
          </h1>

          <p className="mx-auto mt-6 max-w-2xl text-base leading-8 text-text sm:text-lg">
            Viljelemme tomaatteja, erikoistomaatteja, paprikaa ja kurkkua
            luonnonvalolla Sauvon kasvihuoneillamme.
          </p>
        </div>

        <div className="mt-14 space-y-10 sm:mt-16 sm:space-y-14 lg:space-y-20">
          {products.map((product, index) => {
            const imageOnRight = index % 2 === 0;

            return (
              <article
                key={product.id}
                className="overflow-hidden rounded-4xl border border-border bg-background lg:rounded-[3rem]"
              >
                <div className="grid lg:grid-cols-2">
                  {/* Product image */}
                  <div
                    className={`relative flex min-h-90 items-center justify-center overflow-hidden bg-cream/40 p-6 sm:min-h-[460px] sm:p-10 lg:min-h-[580px] lg:p-14 ${
                      imageOnRight ? "lg:order-2" : "lg:order-1"
                    }`}
                  >
                    <div className="relative min-h-77.5 w-full flex-1 sm:min-h-95">
                      <Image
                        src={product.image}
                        alt={product.title}
                        fill
                        priority={index === 0}
                        sizes="(min-width: 1024px) 50vw, 100vw"
                        className="object-contain transition-transform duration-500 hover:scale-[1.03]"
                      />
                    </div>

                    <span className="absolute left-6 top-6 rounded-full bg-background/80 px-4 py-2 text-xs font-medium uppercase tracking-[0.18em] text-accent backdrop-blur-md sm:left-10 sm:top-10">
                      {product.category}
                    </span>
                  </div>

                  {/* Product information */}
                  <div
                    className={`flex items-center px-6 py-12 sm:px-10 sm:py-16 lg:min-h-145 lg:px-16 lg:py-20 ${
                      imageOnRight ? "lg:order-1" : "lg:order-2"
                    }`}
                  >
                    <div className="w-full max-w-xl">
                      <h2 className="mt-5 font-heading text-4xl font-medium leading-[1.05] text-primary-dark sm:text-5xl lg:text-6xl">
                        {product.title}
                      </h2>

                      <div
                        aria-hidden="true"
                        className="my-8 h-px w-20 bg-border"
                      />

                      {product.description && (
                        <p className="text-base leading-8 text-text sm:text-lg sm:leading-9">
                          {product.description}
                        </p>
                      )}

                      {product.details && product.details.length > 0 && (
                        <dl className="mt-8 space-y-3 border-t border-border pt-6">
                          {product.details.map((detail, detailIndex) => (
                            <div
                              key={`${product.id}-${detailIndex}`}
                              className="flex items-start gap-3"
                            >
                              <span
                                aria-hidden="true"
                                className="mt-[0.65rem] size-1.5 shrink-0 rounded-full bg-accent"
                              />

                              <div className="text-base leading-7 text-text">
                                {detail.label && (
                                  <dt className="inline font-medium text-primary-dark">
                                    {detail.label}:{" "}
                                  </dt>
                                )}

                                <dd className="inline">{detail.value}</dd>
                              </div>
                            </div>
                          ))}
                        </dl>
                      )}
                      <Link
                        href="/yhteystiedot"
                        className="mt-10 inline-flex items-center gap-3 rounded-full bg-primary px-7 py-3.5 font-medium text-cream transition-all duration-300 hover:-translate-y-0.5 hover:bg-primary-dark"
                      >
                        Ota yhteyttä
                        <ArrowRight className="size-4" strokeWidth={1.8} />
                      </Link>
                    </div>
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
