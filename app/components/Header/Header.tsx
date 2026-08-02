import Image from "next/image";
import Link from "next/link";

export default function Header() {
  return (
    <header className="fixed top-6 left-1/2 z-50 w-[calc(100%-2rem)] max-w-7xl -translate-x-1/2">
      <div className="flex h-22 items-center justify-between rounded-full border border-white/15 bg-white/10 px-4 shadow-xl backdrop-blur-xs sm:px-8">
        <Link href="/" className="flex items-center gap-4">
          <Image
            src="/Header/logo.png"
            alt="Peuravaaran Puutarha Oy"
            width={80}
            height={80}
            priority
          />
        </Link>

        <button
          type="button"
          aria-label="Open menu"
          className="
    flex items-center gap-3
    rounded-full
    bg-primary/50
    px-6 py-3
    text-xm
    font-medium
    text-hero-title
    transition-all
    duration-300
    hover:bg-primary-dark
    cursor-pointer
  "
        >
          <span>Valikko</span>

          <div className="flex flex-col gap-1">
            <span className="h-0.5 w-5 rounded-full bg-hero-title" />
            <span className="h-0.5 w-5 rounded-full bg-hero-title" />
            <span className="h-0.5 w-5 rounded-full bg-hero-title" />
          </div>
        </button>
      </div>
    </header>
  );
}
