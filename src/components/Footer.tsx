import { Link } from "@tanstack/react-router";
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
        <div className="flex flex-col gap-8 md:flex-row md:justify-between md:items-start">

          <h2 className="text-[32px] md:text-[64px] leading-none font-light uppercase tracking-[0.08em]">
            Контакти
          </h2>

          <div className="flex flex-wrap items-center gap-6">
  <span className="text-base md:text-[24px] uppercase leading-none">
    Слідкуй за нами
  </span>

  <div className="flex items-center gap-3">
    <a href="https://www.facebook.com/blagodatkalush" target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="hover:text-accent transition-colors">
      <svg width="24" height="23" viewBox="0 0 32 31" fill="none" xmlns="http://www.w3.org/2000/svg" className="fill-current">
        <path d="M22 3.875H10C6.6916 3.875 4 6.5666 4 9.875V21.875C4 25.1834 6.6916 27.875 10 27.875H16V17.875H14.6C14.0477 17.875 13.6 17.4273 13.6 16.875C13.6 16.3227 14.0477 15.875 14.6 15.875H16V14.1001C16 11.7703 17.8953 9.875 20.2251 9.875H22.4C22.9523 9.875 23.4 10.3227 23.4 10.875C23.4 11.4273 22.9523 11.875 22.4 11.875H20.2251C18.9981 11.875 18 12.8731 18 14.1001V15.875H22C22.5523 15.875 23 16.3227 23 16.875C23 17.4273 22.5523 17.875 22 17.875H18V27.875H22C25.3084 27.875 28 25.1834 28 21.875V9.875C28 6.5666 25.3084 3.875 22 3.875Z"/>
      </svg>
    </a>

    <a href="https://www.youtube.com/channel/UCxAgeSNE3xZbtzN8rqkMCTA" target="_blank" rel="noopener noreferrer" aria-label="YouTube" className="hover:text-accent transition-colors">
      <svg width="24" height="23" viewBox="0 0 32 31" fill="none" xmlns="http://www.w3.org/2000/svg" className="fill-current">
        <path d="M31.2968 12.8004C31.2862 12.653 31.2764 12.5015 31.2664 12.3468C31.1673 10.8102 31.044 8.89792 29.9054 7.24995C29.8883 7.22541 29.8703 7.20152 29.8512 7.17842C29.1743 6.35798 28.065 5.74649 26.8858 5.54266C25.4846 5.29841 20.7724 5.1665 16.3441 5.1665C11.9152 5.1665 7.20284 5.29841 5.80577 5.5424C4.86716 5.70397 4.02605 6.09457 3.30222 6.70658C1.91033 7.8936 1.70278 9.70891 1.53614 11.1673C1.52019 11.3071 1.50437 11.4453 1.48787 11.581C1.48637 11.594 1.48487 11.607 1.48391 11.6202C1.28414 14.0602 1.28373 16.3982 1.48241 19.6898C1.48296 19.6989 1.48378 19.7083 1.48446 19.7176C1.59642 20.9755 1.68315 21.6237 1.92765 22.3746C2.22356 23.3097 2.62557 24.0019 3.14785 24.4831C3.80828 25.1046 4.69411 25.533 5.70568 25.7214C6.95643 25.9586 8.02526 26.0452 13.8019 26.1431L13.8046 26.1433C14.8501 26.1586 15.8539 26.1665 16.8291 26.1665C20.5667 26.1665 23.1288 26.0511 26.7155 25.8029C26.7505 25.8005 26.7853 25.7966 26.8199 25.7911C27.8184 25.6334 28.7293 25.2048 29.462 24.5444C29.9384 24.1068 30.2249 23.6901 30.5161 23.0136C30.9841 21.9495 31.1276 20.9138 31.2975 18.5216C31.3459 17.7475 31.3459 13.5836 31.2968 12.8004ZM21.1478 16.3555C19.2642 17.262 15.611 19.0273 12.8863 20.3876C12.4093 20.6257 11.8333 20.3026 11.8333 19.7976V11.6337C11.8333 11.134 12.4011 10.811 12.8776 11.0387C15.7451 12.4091 18.231 13.7536 21.1467 15.168C21.663 15.4184 21.6649 16.1065 21.1478 16.3555Z"/>
      </svg>
    </a>

    <a href="https://www.instagram.com/grace_church_kalush?igshid=YmMyMTA2M2Y%3D" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="hover:text-accent transition-colors">
      <svg width="24" height="23" viewBox="0 0 32 31" fill="none" xmlns="http://www.w3.org/2000/svg" className="fill-current">
        <path d="M20.3819 15.9026C20.3819 18.3339 18.4037 20.3121 15.9724 20.3121C13.5411 20.3121 11.5629 18.3339 11.5629 15.9026C11.5629 13.4713 13.5411 11.4931 15.9724 11.4931C18.4037 11.4931 20.3819 13.4711 20.3819 15.9026ZM28 9.875V21.875C28 25.1834 25.3084 27.875 22 27.875H10C6.6916 27.875 4 25.1834 4 21.875V9.875C4 6.5666 6.6916 3.875 10 3.875H22C25.3084 3.875 28 6.5666 28 9.875ZM22.5448 15.9026C22.5448 12.2785 19.5965 9.3302 15.9724 9.3302C12.3483 9.3302 9.4 12.2785 9.4 15.9026C9.4 19.5267 12.3483 22.475 15.9724 22.475C19.5965 22.475 22.5448 19.5267 22.5448 15.9026ZM25 8.4374C25 7.5746 24.3004 6.875 23.4376 6.875C22.5748 6.875 21.8752 7.5746 21.8752 8.4374C21.8752 9.3002 22.5748 9.9998 23.4376 9.9998C24.3004 9.99967 25 9.3002 25 8.4374Z"/>
      </svg>
    </a>
  </div>
</div>

        </div>

        {/* MENU */}
        <div className="mt-8 flex md:justify-end">
          <nav className="flex flex-wrap md:justify-end gap-x-6 md:gap-x-10 gap-y-4 text-base md:text-[24px] uppercase">
            {nav.map((item) => (
              <Link
                key={item.to}
                to={item.to}
                className="transition-colors hover:text-accent"
              >
                {item.label}
              </Link>
            ))}
          </nav>
        </div>

        {/* CONTACTS */}
        <div className="mt-12 space-y-6 text-sm md:text-[24px]">

          <div className="flex items-center gap-4 transition-colors hover:text-accent group cursor-default">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6 shrink-0">
              <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
              <circle cx="12" cy="10" r="3" />
            </svg>
            <span>
              м. Калуш, вул. Михайла Грушевського 25а
            </span>
          </div>

          <div className="flex items-center gap-4 group">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6 shrink-0 transition-colors group-hover:text-accent">
              <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
              <polyline points="22,6 12,13 2,6" />
            </svg>

            <a
              href="mailto:blagodatkalush@gmail.com"
              className="transition-colors hover:text-accent"
            >
              E-mail: blagodatkalush@gmail.com
            </a>
          </div>

        </div>

        {/* BOTTOM */}
        <div className="mt-20 flex flex-col-reverse gap-8 md:flex-row md:items-center md:justify-between text-sm md:text-[20px]">

          <span>
            Site by Nazarii P.
          </span>

          <div className="flex items-center gap-4">

            <DoveIcon className="h-8 w-8 shrink-0" />

            <span className="leading-tight">
              Церква «Благодать» Калуш, 2024. Усі права захищено.
            </span>

          </div>

        </div>

      </div>
    </footer>
  );
}