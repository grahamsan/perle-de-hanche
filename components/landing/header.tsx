import Link from "next/link";

export default function Header() {
  return (
    <header className="fixed top-3 left-1/2 -translate-x-1/2 z-50 w-[90%] max-w-6xl">
      <div
        className="
          backdrop-blur bg-amber-200/50 
          rounded-xl shadow-lg
          px-8 py-4
          flex items-center justify-between
        "
      >
        {/* Logo / Titre */}
        <div className="flex flex-col">
          <h1 className="text-[22px] font-style-script font-bold text-black leading-none">
            Baya
          </h1>
          <span className="text-[12px] tracking-widest text-black/70 uppercase">
            Héritage & Élégance
          </span>
        </div>

        {/* Navigation */}
        <nav>
          <ul className="flex gap-x-8 text-[14px] font-semibold">
            <li>
              <Link
                href="/"
                className="text-black/80 hover:text-black transition-colors"
              >
                Accueil
              </Link>
            </li>
            <li>
              <Link
                href="/catalogue"
                className="text-black/80 hover:text-black transition-colors whitespace-nowrap"
              >
                Album Photo
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
