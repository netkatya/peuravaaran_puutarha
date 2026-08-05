import { Phone } from "lucide-react";

export default function CallButton() {
  return (
    <a
      href="tel:+358444910299"
      aria-label="Soita Peuravaaran Puutarhaan"
      title="Soita meille"
      className="
        fixed bottom-5 right-5 z-40
        flex size-14 items-center justify-center
        rounded-full
        border border-cream/30
        bg-primary
        text-cream
        shadow-[0_12px_35px_rgba(63,75,45,0.35)]
        transition-all duration-300
        hover:-translate-y-1
        hover:bg-primary-dark
        focus-visible:outline-none
        focus-visible:ring-2
        focus-visible:ring-accent
        focus-visible:ring-offset-4
        sm:bottom-7 sm:right-7 sm:size-14
      "
    >
      <Phone className="size-5 sm:size-6" strokeWidth={1.8} />

      <span
        aria-hidden="true"
        className="absolute inset-0 -z-10 animate-ping rounded-full bg-primary/25"
      />
    </a>
  );
}
