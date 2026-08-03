"use client";

import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import { products } from "@/app/data/products";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

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

        <div className="relative mt-14 sm:mt-16">
          <Swiper
            modules={[Navigation, Pagination]}
            slidesPerView={1}
            spaceBetween={24}
            speed={700}
            watchOverflow
            navigation={{
              prevEl: ".products-page-prev",
              nextEl: ".products-page-next",
            }}
            pagination={{
              el: ".products-page-pagination",
              clickable: true,
            }}
            className="overflow-hidden rounded-[2rem] bg-background lg:rounded-[3rem]"
          >
            {products.map((product, index) => (
              <SwiperSlide key={product.id}>
                <article className="grid lg:grid-cols-[1.08fr_0.92fr]">
                  <div className="relative flex min-h-[380px] items-center justify-center overflow-hidden bg-cream/40 p-6 sm:min-h-[480px] sm:p-10 lg:min-h-[680px] lg:p-14">
                    <div className="relative min-h-[330px] w-full flex-1">
                      <Image
                        src={product.image}
                        alt={product.title}
                        fill
                        priority={index === 0}
                        sizes="(min-width: 1024px) 55vw, 100vw"
                        className="object-contain"
                      />
                    </div>

                    <span className="absolute left-6 top-6 rounded-full bg-background/80 px-4 py-2 text-xs font-medium uppercase tracking-[0.18em] text-accent backdrop-blur-md sm:left-10 sm:top-10">
                      {product.category}
                    </span>
                  </div>

                  <div className="relative flex items-center px-6 py-12 sm:px-10 sm:py-16 lg:min-h-[680px] lg:px-16 lg:py-20">
                    <div className="w-full max-w-xl">
                      <p className="text-sm font-medium uppercase tracking-[0.2em] text-text-light">
                        {String(index + 1).padStart(2, "0")} /{" "}
                        {String(products.length).padStart(2, "0")}
                      </p>

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
                    </div>
                  </div>
                </article>
              </SwiperSlide>
            ))}
          </Swiper>

          <button
            type="button"
            aria-label="Edellinen tuote"
            className="
              products-page-prev
              absolute bottom-4 left-4 z-20
              flex size-11 items-center justify-center
              rounded-full
              border border-border
              bg-background
              text-primary-dark
              shadow-sm
              transition-colors duration-300
              hover:bg-cream
              disabled:cursor-not-allowed
              disabled:opacity-30
              lg:bottom-auto
              lg:left-0
              lg:top-1/2
              lg:-translate-x-1/2
              lg:-translate-y-1/2
            "
          >
            <ChevronLeft className="size-4.5" strokeWidth={1.8} />
          </button>

          <button
            type="button"
            aria-label="Seuraava tuote"
            className="
              products-page-next
              absolute bottom-4 right-4 z-20
              flex size-11 items-center justify-center
              rounded-full
              bg-primary
              text-cream
              shadow-sm
              transition-colors duration-300
              hover:bg-primary-dark
              disabled:cursor-not-allowed
              disabled:opacity-30
              lg:bottom-auto
              lg:right-0
              lg:top-1/2
              lg:translate-x-1/2
              lg:-translate-y-1/2
            "
          >
            <ChevronRight className="size-4.5" strokeWidth={1.8} />
          </button>
        </div>

        <div className="mt-8 flex justify-center">
          <div className="products-page-pagination flex items-center" />
        </div>
      </div>
    </section>
  );
}
