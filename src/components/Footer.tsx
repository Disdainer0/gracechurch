import { Link } from "@tanstack/react-router";
import {
  Facebook,
  Youtube,
  Instagram,
  MapPin,
  Mail,
} from "lucide-react";
import { DoveIcon } from "./Logo";

const nav = [
  { to: "/", label: "Головна" },
  { to: "/history", label: "Історія" },
  { to: "/ministry", label: "Служіння" },
  { to: "/media", label: "Медіа" },
  { to: "/support", label: "Підтримка" },
  { to: "/contacts", label: "Контакти" },
] as const;

export function Footer() {
  return (
    <footer className="bg-black text-white">
      <div className="container-grace pt-8 pb-8">

        {/* TOP ROW */}
        <div className="flex justify-between items-start">

          <h2 className="text-4xl md:text-[64px] leading-none font-light uppercase tracking-[0.08em]">
            Контакти
          </h2>

          <div className="flex items-center gap-6">
  <span className="text-base md:text-[24px] uppercase leading-none">
    Слідкуй за нами
  </span>

  <div className="flex items-center gap-3">
    <a href="#" aria-label="Facebook">
      <Facebook
        size={24}
        fill="currentColor"
        strokeWidth={0}
      />
    </a>

    <a href="#" aria-label="YouTube">
      <Youtube
        size={24}
        fill="currentColor"
        strokeWidth={0}
      />
    </a>

    <a href="#" aria-label="Instagram">
      <Instagram size={24} />
    </a>
  </div>
</div>

        </div>

        {/* MENU */}
        <div className="mt-8 flex justify-end">
          <nav className="flex flex-wrap justify-end gap-x-10 gap-y-4 text-base md:text-[24px] uppercase">
            {nav.map((item) => (
              <Link
                key={item.to}
                to={item.to}
                className="transition-opacity hover:opacity-70"
              >
                {item.label}
              </Link>
            ))}
          </nav>
        </div>

        {/* CONTACTS */}
        <div className="mt-12 space-y-6 text-base md:text-[24px]">

          <div className="flex items-center gap-4">
            <MapPin size={24} className="shrink-0" />
            <span>
              м. Калуш, вул. Михайла Грушевського 25а
            </span>
          </div>

          <div className="flex items-center gap-4">
            <Mail size={24} className="shrink-0" />

            <a
              href="mailto:blagodatkalush@gmail.com"
              className="transition-opacity hover:opacity-70"
            >
              E-mail: blagodatkalush@gmail.com
            </a>
          </div>

        </div>

        {/* BOTTOM */}
        <div className="mt-20 flex items-center justify-between text-sm md:text-[20px]">

          <span>
            Site by Nazarii P.
          </span>

          <div className="flex items-center gap-4">

            <DoveIcon className="h-8 w-8" />

            <span>
              Церква «Благодать» Калуш, 2024. Усі права захищено.
            </span>

          </div>

        </div>

      </div>
    </footer>
  );
}