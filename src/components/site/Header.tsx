import { nav } from "@/content/site";

export function Header() {
  return (
    <header className="header-glass sticky top-0 z-10 border-b border-border">
      <div className="wrap flex h-[70px] items-center justify-between">
        <a href="#top" className="font-display text-[1.1rem] font-extrabold tracking-[0.02em] no-underline">
          NAYERA SAEED AHMED<span className="text-rec">.</span>
        </a>
        <nav className="flex items-center gap-[30px]">
          {nav.map((l, i) => (
            <a
              key={l.href}
              href={l.href}
              className={`text-[0.9rem] text-muted-foreground no-underline transition-colors hover:text-foreground ${
                i < nav.length - 1 ? "hidden min-[901px]:inline" : ""
              }`}
            >
              {l.label}
            </a>
          ))}
        </nav>
      </div>
    </header>
  );
}
