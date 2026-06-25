import { motion } from "framer-motion";
import { Code2, Layout, Palette, PenTool, Server, Smartphone } from "lucide-react";

const services = [
  {
    icon: Layout,
    title: "UI/UX Design",
    items: ["User Research", "Wireframing", "Prototyping", "Mobile App Design", "Web App Design"],
  },
  {
    icon: Smartphone,
    title: "Web Design",
    items: ["Responsive Websites", "Landing Pages", "Corporate Websites", "E-commerce Websites"],
  },
  {
    icon: Code2,
    title: "Front-End Development",
    items: ["HTML5", "CSS3", "JavaScript", "React", "Tailwind CSS"],
  },
  {
    icon: Server,
    title: "Back-End Development",
    items: ["Node.js", "Express.js", "API Development", "Database Architecture", "Authentication"],
  },
  {
    icon: PenTool,
    title: "Graphic Design",
    items: ["Logo Design", "Brand Identity", "Social Media Design", "Marketing Materials"],
  },
  {
    icon: Palette,
    title: "Brand & Strategy",
    items: ["Visual Direction", "Design Systems", "Style Guides", "Creative Consultation"],
  },
];

export default function Services() {
  return (
    <section id="services" className="relative py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="mx-auto max-w-2xl text-center">
          <span className="text-xs font-semibold uppercase tracking-[0.25em] text-primary">Services</span>
          <h2 className="mt-3 font-display text-4xl font-bold sm:text-5xl">
            Everything you need to <span className="text-gradient" style={{ backgroundImage: "var(--gradient-primary)" }}>ship & scale</span>
          </h2>
          <p className="mt-4 text-muted-foreground">From discovery to deployment — design, development and brand under one roof.</p>
        </div>

        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((s, i) => {
            const Icon = s.icon;
            return (
              <motion.div
                key={s.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.5, delay: i * 0.05 }}
                whileHover={{ y: -6, rotateX: 4, rotateY: -4 }}
                style={{ transformStyle: "preserve-3d" }}
                className="group relative overflow-hidden rounded-3xl glass-strong p-7 transition"
              >
                <div className="absolute inset-0 -z-10 opacity-0 transition group-hover:opacity-100" style={{ background: "radial-gradient(400px circle at 50% 0%, color-mix(in oklab, var(--primary) 22%, transparent), transparent 60%)" }} />
                <div className="mb-5 inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-primary to-primary-glow text-primary-foreground shadow-glow">
                  <Icon className="size-6" />
                </div>
                <h3 className="font-display text-xl font-semibold">{s.title}</h3>
                <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
                  {s.items.map((it) => (
                    <li key={it} className="flex items-center gap-2">
                      <span className="h-1.5 w-1.5 rounded-full bg-primary" /> {it}
                    </li>
                  ))}
                </ul>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
