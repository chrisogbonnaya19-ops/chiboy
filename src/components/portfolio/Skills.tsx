import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const groups = [
  {
    name: "Design",
    skills: [
      { label: "Figma", value: 95 },
      { label: "Adobe Photoshop", value: 88 },
      { label: "Adobe Illustrator", value: 85 },
    ],
  },
  {
    name: "Frontend",
    skills: [
      { label: "React", value: 92 },
      { label: "Tailwind CSS", value: 95 },
      { label: "JavaScript / TS", value: 90 },
    ],
  },
  {
    name: "Backend",
    skills: [
      { label: "Node.js", value: 85 },
      { label: "Express.js", value: 82 },
      { label: "MongoDB", value: 80 },
      { label: "MySQL", value: 75 },
    ],
  },
];

const tools = ["Git", "GitHub", "REST APIs", "Responsive Design", "Vite", "Framer Motion", "Zod", "Vercel"];

function Bar({ value, label }: { value: number; label: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true });
  return (
    <div ref={ref}>
      <div className="mb-2 flex items-center justify-between text-sm">
        <span className="font-medium">{label}</span>
        <span className="text-muted-foreground">{value}%</span>
      </div>
      <div className="h-2 overflow-hidden rounded-full bg-white/5">
        <motion.div
          initial={{ width: 0 }}
          animate={{ width: inView ? `${value}%` : 0 }}
          transition={{ duration: 1.1, ease: "easeOut" }}
          className="h-full rounded-full bg-gradient-to-r from-primary to-primary-glow shadow-glow"
        />
      </div>
    </div>
  );
}

export default function Skills() {
  return (
    <section id="skills" className="relative py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="mx-auto max-w-2xl text-center">
          <span className="text-xs font-semibold uppercase tracking-[0.25em] text-primary">Skills</span>
          <h2 className="mt-3 font-display text-4xl font-bold sm:text-5xl">A toolkit refined by <span className="text-gradient" style={{ backgroundImage: "var(--gradient-primary)" }}>real work</span></h2>
        </div>

        <div className="mt-14 grid gap-6 lg:grid-cols-3">
          {groups.map((g) => (
            <div key={g.name} className="rounded-3xl glass-strong p-7">
              <h3 className="mb-6 font-display text-xl font-semibold">{g.name}</h3>
              <div className="space-y-5">
                {g.skills.map((s) => <Bar key={s.label} {...s} />)}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-10 flex flex-wrap justify-center gap-2.5">
          {tools.map((t) => (
            <span key={t} className="rounded-full glass px-4 py-2 text-sm text-muted-foreground transition hover:text-foreground hover:scale-105">
              {t}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
