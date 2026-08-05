"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight, ChevronLeft, ChevronRight } from "lucide-react";
import { Autoplay, Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import { products } from "@/app/data/products";

import "swiper/css";
import "swiper/css/navigation";

export default function ProductsSlider() {
  return (
    <section
      id="tuotteet"
      className="bg-section px-4 py-20 sm:px-6 sm:py-28 lg:px-8 lg:py-32"
    >
      <div className="mx-auto max-w-7xl">
        <div className="flex flex-col gap-8 sm:flex-row sm:items-end sm:justify-between">
          <div className="max-w-3xl">
            <p className="mb-4 text-sm font-medium uppercase tracking-[0.24em] text-accent">
              Tuotteemme
            </p>

            <h2 className="font-heading text-4xl font-medium leading-[1.08] text-primary-dark sm:text-5xl lg:text-6xl">
              Tuoreita kotimaisia vihanneksia
            </h2>

            <p className="mt-6 max-w-2xl text-base leading-8 text-text sm:text-lg">
              Viljelemme tomaatteja, erikoistomaatteja, paprikaa ja kurkkua
              luonnonvalolla Sauvon kasvihuoneillamme.
            </p>
          </div>

          <div className="hidden shrink-0 gap-3 sm:flex">
            <button
              type="button"
              aria-label="Edelliset tuotteet"
              className="products-prev flex size-12 items-center justify-center rounded-full border border-border bg-background text-primary-dark transition-colors hover:bg-cream disabled:cursor-not-allowed disabled:opacity-30"
            >
              <ChevronLeft className="size-5" />
            </button>

            <button
              type="button"
              aria-label="Seuraavat tuotteet"
              className="products-next flex size-12 items-center justify-center rounded-full bg-primary text-cream transition-colors hover:bg-primary-dark disabled:cursor-not-allowed disabled:opacity-30"
            >
              <ChevronRight className="size-5" />
            </button>
          </div>
        </div>

        <Swiper
          modules={[Navigation, Autoplay]}
          slidesPerView={1}
          spaceBetween={16}
          watchOverflow
          navigation={{
            prevEl: ".products-prev",
            nextEl: ".products-next",
          }}
          autoplay={{
            delay: 5000,
            disableOnInteraction: false,
            pauseOnMouseEnter: true,
          }}
          breakpoints={{
            640: {
              slidesPerView: 2,
              spaceBetween: 20,
            },
            1024: {
              slidesPerView: 3,
              spaceBetween: 24,
            },
          }}
          className="mt-12 overflow-hidden sm:mt-16"
        >
          {products.map((product) => (
            <SwiperSlide key={product.title} className="h-auto">
              <article className="group h-full">
                <div className="h-full overflow-hidden rounded-4xl border border-border bg-background">
                  <div className="relative aspect-4/3 bg-cream/40">
                    <Image
                      src={product.image}
                      alt={product.title}
                      fill
                      sizes="(min-width:1024px) 33vw, (min-width:640px) 50vw, 100vw"
                      className="object-contain p-6 transition-transform duration-500 group-hover:scale-105 sm:p-8"
                    />
                  </div>

                  <div className="p-6">
                    <h3 className="font-heading text-3xl font-medium text-primary-dark">
                      {product.title}
                    </h3>
                  </div>
                </div>
              </article>
            </SwiperSlide>
          ))}
        </Swiper>

        <div className="mt-8 flex justify-end">
          <Link
            href="/tuotteet"
            className="inline-flex items-center gap-2 font-medium text-primary-dark transition-colors hover:text-accent"
          >
            Katso kaikki tuotteet
            <ArrowRight className="size-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}
