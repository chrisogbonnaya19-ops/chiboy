import { ArrowUp } from "lucide-react";

const links = [
  { id: "home", label: "Home" },
  { id: "about", label: "About" },
  { id: "services", label: "Services" },
  { id: "portfolio", label: "Portfolio" },
  { id: "contact", label: "Contact" },
];

export default function Footer() {
  const scrollTo = (id: string) => document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  return (
    <footer className="relative border-t border-border py-14">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="grid gap-10 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <div className="flex items-center gap-2">
              <span className="grid h-9 w-9 place-items-center rounded-xl bg-gradient-to-br from-primary to-primary-glow text-sm font-bold text-primary-foreground shadow-glow">C</span>
              <span className="font-display text-lg font-bold">Chris Ogbonnaya<span className="text-primary">.</span></span>
            </div>
            <p className="mt-4 max-w-md text-sm text-muted-foreground">
              Web Design · UI/UX Design · Graphic Design · Front-End Development · Back-End Development
            </p>
          </div>
          <div className="lg:col-span-4">
            <h4 className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">Navigation</h4>
            <ul className="mt-4 grid grid-cols-2 gap-2 text-sm">
              {links.map((l) => (
                <li key={l.id}>
                  <button onClick={() => scrollTo(l.id)} className="text-muted-foreground transition hover:text-primary">{l.label}</button>
                </li>
              ))}
            </ul>
          </div>
          <div className="lg:col-span-3">
            <h4 className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">Elsewhere</h4>
            <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
              <li><a href="https://wa.me/2348062840158" target="_blank" rel="noreferrer" className="hover:text-primary">WhatsApp</a></li>
              <li><a href="https://instagram.com/ogbonnaya_onyekachi_chris" target="_blank" rel="noreferrer" className="hover:text-primary">Instagram</a></li>
              <li><a href="#" className="hover:text-primary">LinkedIn</a></li>
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-border pt-6 sm:flex-row">
          <p className="text-xs text-muted-foreground">© 2026 Chris Ogbonnaya. All rights reserved.</p>
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="inline-flex items-center gap-2 rounded-full glass px-4 py-2 text-xs font-medium transition hover:text-primary"
          >
            Back to top <ArrowUp className="size-3.5" />
          </button>
        </div>
      </div>
    </footer>
  );
}
