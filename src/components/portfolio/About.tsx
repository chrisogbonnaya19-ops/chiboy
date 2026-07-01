import { motion } from "framer-motion";
import { Counter } from "./Counter";
import portrait from "@/assets/chris-portrait.jpg";


const stats = [
  { value: 50, suffix: "+", label: "Projects Completed" },
  { value: 20, suffix: "+", label: "Happy Clients" },
  { value: 3, suffix: "+", label: "Years Experience" },
  { value: 100, suffix: "%", label: "Client Satisfaction" },
];

const timeline = [
  { year: "2022", title: "Started design journey", body: "Fell in love with UI/UX and product design." },
  { year: "2023", title: "Front-end developer", body: "Shipped my first production React apps for real clients." },
  { year: "2024", title: "Full-stack craftsman", body: "Added Node.js, MongoDB and scalable APIs to the toolkit." },
  { year: "2025", title: "Freelance studio", body: "Working with international clients on premium digital products." },
];

export default function About() {
  return (
    <section id="about" className="relative py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="grid gap-12 lg:grid-cols-12">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-5"
          >
            <div className="relative">
              <div className="absolute -inset-4 rounded-3xl bg-gradient-to-br from-primary/30 to-transparent blur-2xl" />
              <div className="relative overflow-hidden rounded-3xl glass-strong p-2">
                <img src={portrait} loading="lazy" width={896} height={1152} alt="Chris Ogbonnaya portrait" className="aspect-[4/5] w-full rounded-2xl object-cover" />
              </div>
              <div className="absolute -bottom-6 -right-6 rounded-2xl glass-strong px-5 py-4 shadow-elegant text-center">
                <div className="text-xs uppercase tracking-widest text-muted-foreground">Certificate</div>
                <div className="mt-1 text-sm font-semibold">Coming soon</div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="lg:col-span-7"
          >
            <span className="text-xs font-semibold uppercase tracking-[0.25em] text-primary">About</span>
            <h2 className="mt-3 font-display text-4xl font-bold leading-tight sm:text-5xl">
              About <span className="text-gradient" style={{ backgroundImage: "var(--gradient-primary)" }}>Chris</span>
            </h2>
            <p className="mt-5 text-lg leading-relaxed text-muted-foreground">
              I'm a passionate Web Designer, UI/UX Designer, Graphic Designer, Front-End
              Developer and Back-End Developer dedicated to crafting exceptional digital
              experiences. I combine creativity, strategy and technology to help businesses
              build strong online identities and scalable digital products.
            </p>
            <p className="mt-4 text-muted-foreground">
              My mission is to design products that are beautiful, user-friendly and
              performance-driven.
            </p>

            <div className="mt-8 grid grid-cols-2 gap-3 sm:grid-cols-4">
              {stats.map((s) => (
                <div key={s.label} className="rounded-2xl glass p-4 text-center transition hover:-translate-y-1 hover:glow-primary">
                  <div className="font-display text-3xl font-bold text-gradient" style={{ backgroundImage: "var(--gradient-primary)" }}>
                    <Counter to={s.value} suffix={s.suffix} />
                  </div>
                  <div className="mt-1 text-xs text-muted-foreground">{s.label}</div>
                </div>
              ))}
            </div>

            <div className="mt-10">
              <h3 className="mb-5 text-sm font-semibold uppercase tracking-widest text-muted-foreground">My Journey</h3>
              <ol className="relative space-y-5 border-l border-border pl-6">
                {timeline.map((t) => (
                  <li key={t.year} className="relative">
                    <span className="absolute -left-[31px] top-1.5 grid h-4 w-4 place-items-center rounded-full bg-gradient-to-br from-primary to-primary-glow shadow-glow">
                      <span className="h-1.5 w-1.5 rounded-full bg-white" />
                    </span>
                    <div className="text-xs font-semibold uppercase tracking-widest text-primary">{t.year}</div>
                    <div className="font-display text-lg font-semibold">{t.title}</div>
                    <div className="text-sm text-muted-foreground">{t.body}</div>
                  </li>
                ))}
              </ol>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
