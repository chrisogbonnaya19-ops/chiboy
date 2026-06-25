import { useEffect, useState } from "react";
import { Moon, Sun } from "lucide-react";

function ThemeToggle() {
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    const stored = localStorage.getItem("theme");
    const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
    const dark = stored ? stored === "dark" : prefersDark;
    document.documentElement.classList.toggle("dark", dark);
    setIsDark(dark);
  }, []);

  const toggle = () => {
    const next = !isDark;
    setIsDark(next);
    document.documentElement.classList.toggle("dark", next);
    localStorage.setItem("theme", next ? "dark" : "light");
  };

  return (
    <button
      aria-label="Toggle theme"
      onClick={toggle}
      className="grid h-10 w-10 place-items-center rounded-full glass transition hover:scale-105"
    >
      {isDark ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
    </button>
  );
}

const NAV = [
  { id: "home", label: "Home" },
  { id: "about", label: "About" },
  { id: "services", label: "Services" },
  { id: "skills", label: "Skills" },
  { id: "portfolio", label: "Portfolio" },
  { id: "testimonials", label: "Testimonials" },
  { id: "contact", label: "Contact" },
];

export default function Navbar() {
  const [active, setActive] = useState("home");
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 20);
      const y = window.scrollY + 120;
      let current = "home";
      for (const n of NAV) {
        const el = document.getElementById(n.id);
        if (el && el.offsetTop <= y) current = n.id;
      }
      setActive(current);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
    setOpen(false);
  };

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled ? "py-3" : "py-5"
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 sm:px-6">
        <button
          onClick={() => scrollTo("home")}
          className="group flex items-center gap-2"
        >
          <span className="grid h-9 w-9 place-items-center rounded-xl bg-gradient-to-br from-primary to-primary-glow text-sm font-bold text-primary-foreground shadow-glow">
            C
          </span>
          <span className="font-display text-lg font-bold tracking-tight">
            Chris<span className="text-primary">.</span>
          </span>
        </button>

        <nav
          className={`hidden items-center gap-1 rounded-full px-2 py-1.5 lg:flex glass-strong transition-all duration-300 ${
            scrolled ? "shadow-elegant" : ""
          }`}
        >
          {NAV.map((n) => (
            <button
              key={n.id}
              onClick={() => scrollTo(n.id)}
              className={`relative rounded-full px-4 py-2 text-sm font-medium transition-colors ${
                active === n.id
                  ? "text-primary-foreground"
                  : "text-muted-foreground hover:text-foreground"
              }`}
            >
              {active === n.id && (
                <span className="absolute inset-0 rounded-full bg-gradient-to-r from-primary to-primary-glow shadow-glow" />
              )}
              <span className="relative">{n.label}</span>
            </button>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <ThemeToggle />
          <button
            onClick={() => scrollTo("contact")}
            className="hidden rounded-full bg-foreground px-5 py-2.5 text-sm font-semibold text-background transition hover:scale-105 sm:inline-flex"
          >
            Let's talk
          </button>

          <button
            aria-label="Open menu"
            onClick={() => setOpen((v) => !v)}
            className="grid h-10 w-10 place-items-center rounded-full glass lg:hidden"
          >
          <div className="flex flex-col gap-1.5">
            <span className={`h-0.5 w-5 bg-foreground transition ${open ? "translate-y-2 rotate-45" : ""}`} />
            <span className={`h-0.5 w-5 bg-foreground transition ${open ? "opacity-0" : ""}`} />
            <span className={`h-0.5 w-5 bg-foreground transition ${open ? "-translate-y-2 -rotate-45" : ""}`} />
          </div>
          </button>
        </div>
      </div>

      {open && (
        <div className="mx-4 mt-3 rounded-2xl glass-strong p-3 lg:hidden">
          <div className="flex flex-col">
            {NAV.map((n) => (
              <button
                key={n.id}
                onClick={() => scrollTo(n.id)}
                className={`rounded-xl px-4 py-3 text-left text-sm font-medium ${
                  active === n.id ? "bg-primary/15 text-primary" : "text-muted-foreground"
                }`}
              >
                {n.label}
              </button>
            ))}
          </div>
        </div>
      )}
    </header>
  );
}
