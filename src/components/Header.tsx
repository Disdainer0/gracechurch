import { Link } from "@tanstack/react-router";
import { useState } from "react";
import { Menu, X, Facebook, Youtube, Instagram } from "lucide-react";
import { Logo } from "./Logo";

const nav = [
  { to: "/", label: "Головна" },
  { to: "/history", label: "Історія" },
  { to: "/ministry", label: "Служіння" },
  { to: "/media", label: "Медіа" },
  { to: "/support", label: "Підтримка" },
  { to: "/contacts", label: "Контакти" },
] as const;

export function Header({ overlay = false }: { overlay?: boolean }) {
  const [open, setOpen] = useState(false);
  return (
    <header
      className={`${
        overlay ? "absolute" : "relative"
      } left-0 right-0 top-0 z-40 w-full`}
    >
      <div className="container-grace flex items-center justify-between py-5 md:py-7">
        <Logo />

        <nav className="hidden lg:flex items-center gap-7 xl:gap-10">
          {nav.map((n) => (
            <Link
              key={n.to}
              to={n.to}
              className="text-[13px] xl:text-[14px] font-bold uppercase tracking-[0.08em] text-foreground/90 hover:text-accent transition-colors"
              activeProps={{ className: "text-accent" }}
              activeOptions={{ exact: n.to === "/" }}
            >
              {n.label}
            </Link>
          ))}
        </nav>

        <div className="hidden lg:flex items-center gap-4 text-foreground">
          <a href="#" aria-label="Facebook" className="hover:text-accent transition-colors">
            <Facebook size={20} fill="currentColor" stroke="none" />
          </a>
          <a href="#" aria-label="YouTube" className="hover:text-accent transition-colors">
            <Youtube size={22} fill="currentColor" stroke="none" />
          </a>
          <a href="#" aria-label="Instagram" className="hover:text-accent transition-colors">
            <Instagram size={20} />
          </a>
        </div>

        <button
          className="lg:hidden text-foreground"
          aria-label="Меню"
          onClick={() => setOpen(true)}
        >
          <Menu size={28} />
        </button>
      </div>

      {open && (
        <div className="fixed inset-0 z-50 bg-background lg:hidden">
          <div className="container-grace flex items-center justify-between py-5">
            <Logo />
            <button onClick={() => setOpen(false)} aria-label="Закрити" className="text-foreground">
              <X size={28} />
            </button>
          </div>
          <nav className="container-grace flex flex-col gap-6 pt-10">
            {nav.map((n) => (
              <Link
                key={n.to}
                to={n.to}
                onClick={() => setOpen(false)}
                className="text-[20px] font-bold uppercase tracking-[0.08em]"
                activeProps={{ className: "text-accent" }}
                activeOptions={{ exact: n.to === "/" }}
              >
                {n.label}
              </Link>
            ))}
            <div className="mt-8 flex items-center gap-5">
              <a href="#" aria-label="Facebook"><Facebook size={22} fill="currentColor" stroke="none" /></a>
              <a href="#" aria-label="YouTube"><Youtube size={24} fill="currentColor" stroke="none" /></a>
              <a href="#" aria-label="Instagram"><Instagram size={22} /></a>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
