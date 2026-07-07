import { motion, AnimatePresence } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { useState } from "react";

import finwise from "@/assets/project-finwise.jpg";
import vistara from "@/assets/project-vistara.jpg";
import autocare from "@/assets/project-autocare.jpg";
import brand from "@/assets/project-brand.jpg";
import realestate from "@/assets/project-realestate.jpg";
import finance from "@/assets/project-finance.jpg";

type Cat = "All" | "Web Design" | "UI/UX" | "Development" | "Graphic Design" | "Real Estate" | "Finance";

const projects: { title: string; desc: string; tech: string[]; cats: Cat[]; img: string; url?: string }[] = [
  { title: "Luxury Real Estate Hub", desc: "Premium property marketplace with advanced search, map view, agent profiles and mortgage tools.", tech: ["React", "TypeScript", "Tailwind", "Framer Motion"], cats: ["Real Estate", "Web Design", "Development"], img: realestate, url: "https://luxury-real-estate-hub.vercel.app/" },
  { title: "WealthFlow Finance Dashboard", desc: "Modern fintech dashboard for portfolio tracking, market insights and AI-powered recommendations.", tech: ["React", "TypeScript", "Charts", "UI/UX"], cats: ["Finance", "UI/UX", "Development"], img: finance },
  { title: "Finwise Mobile Banking App", desc: "Modern fintech mobile application for digital banking.", tech: ["Figma", "React Native", "UI/UX"], cats: ["UI/UX", "Finance"], img: finwise },
  { title: "Vistara Mall", desc: "Modern e-commerce marketplace platform.", tech: ["React", "Node.js", "MongoDB"], cats: ["Development", "Web Design"], img: vistara },
  { title: "AutoCare Website", desc: "Automotive services website focused on customer acquisition.", tech: ["HTML", "CSS", "JavaScript"], cats: ["Web Design", "Development"], img: autocare },
  { title: "Brand Identity Project", desc: "Complete branding and graphic design project.", tech: ["Illustrator", "Photoshop"], cats: ["Graphic Design"], img: brand },
];

const CATS: Cat[] = ["All", "Web Design", "UI/UX", "Development", "Graphic Design"];

export default function Portfolio() {
  const [active, setActive] = useState<Cat>("All");
  const filtered = active === "All" ? projects : projects.filter((p) => p.cats.includes(active));

  return (
    <section id="portfolio" className="relative py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="flex flex-col items-start justify-between gap-6 lg:flex-row lg:items-end">
          <div className="max-w-2xl">
            <span className="text-xs font-semibold uppercase tracking-[0.25em] text-primary">Portfolio</span>
            <h2 className="mt-3 font-display text-4xl font-bold sm:text-5xl">
              Selected <span className="text-gradient" style={{ backgroundImage: "var(--gradient-primary)" }}>projects</span>
            </h2>
            <p className="mt-3 text-muted-foreground">A glimpse of recent work across design, brand and code.</p>
          </div>
          <div className="flex flex-wrap gap-2">
            {CATS.map((c) => (
              <button
                key={c}
                onClick={() => setActive(c)}
                className={`rounded-full px-4 py-2 text-sm font-medium transition ${
                  active === c
                    ? "bg-gradient-to-r from-primary to-primary-glow text-primary-foreground shadow-glow"
                    : "glass text-muted-foreground hover:text-foreground"
                }`}
              >
                {c}
              </button>
            ))}
          </div>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-2">
          <AnimatePresence mode="popLayout">
            {filtered.map((p, i) => (
              <motion.article
                layout
                key={p.title}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.45, delay: i * 0.05 }}
                whileHover={{ y: -6 }}
                className="group relative overflow-hidden rounded-3xl glass-strong"
              >
                <div className="relative aspect-[16/10] overflow-hidden">
                  <img src={p.img} loading="lazy" width={1280} height={960} alt={p.title} className="h-full w-full object-cover transition duration-700 group-hover:scale-110" />
                  <div className="absolute inset-0 bg-gradient-to-t from-background via-background/20 to-transparent" />
                  <div className="absolute right-4 top-4 grid h-10 w-10 place-items-center rounded-full glass-strong opacity-0 transition group-hover:opacity-100">
                    <ArrowUpRight className="size-4" />
                  </div>
                </div>
                <div className="p-7">
                  <h3 className="font-display text-2xl font-semibold">{p.title}</h3>
                  <p className="mt-2 text-sm text-muted-foreground">{p.desc}</p>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {p.tech.map((t) => (
                      <span key={t} className="rounded-full bg-primary/10 px-3 py-1 text-xs font-medium text-primary">{t}</span>
                    ))}
                  </div>
                </div>
              </motion.article>
            ))}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
