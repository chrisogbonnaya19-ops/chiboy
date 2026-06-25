import { motion } from "framer-motion";
import { Brain, Clock, Code, Eye, Headphones, MessageSquare, Sparkles, Users } from "lucide-react";

const items = [
  { icon: Brain, title: "Creative Problem Solving", body: "I turn fuzzy ideas into crisp products." },
  { icon: Users, title: "User-Centered Design", body: "Decisions backed by research, tested with real users." },
  { icon: Code, title: "Clean & Scalable Code", body: "Maintainable architecture that grows with you." },
  { icon: Clock, title: "Fast Delivery", body: "Tight feedback loops, weekly shipping." },
  { icon: MessageSquare, title: "Professional Communication", body: "Clear updates, no surprises." },
  { icon: Eye, title: "Attention to Detail", body: "Pixel-perfect UI, micro-interactions, edge cases." },
  { icon: Sparkles, title: "Modern Design Standards", body: "Trends that age well, never gimmicks." },
  { icon: Headphones, title: "Long-Term Support", body: "Post-launch care and continuous improvement." },
];

export default function WhyMe() {
  return (
    <section className="relative py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="mx-auto max-w-2xl text-center">
          <span className="text-xs font-semibold uppercase tracking-[0.25em] text-primary">Why choose me</span>
          <h2 className="mt-3 font-display text-4xl font-bold sm:text-5xl">
            Built for <span className="text-gradient" style={{ backgroundImage: "var(--gradient-primary)" }}>partnership</span>, not just delivery
          </h2>
        </div>
        <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {items.map((it, i) => {
            const Icon = it.icon;
            return (
              <motion.div
                key={it.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.04 }}
                className="group relative rounded-2xl glass p-6 transition hover:-translate-y-1 hover:glow-primary"
              >
                <div className="mb-4 grid h-11 w-11 place-items-center rounded-xl bg-primary/15 text-primary transition group-hover:bg-gradient-to-br group-hover:from-primary group-hover:to-primary-glow group-hover:text-primary-foreground">
                  <Icon className="size-5" />
                </div>
                <h3 className="font-display text-lg font-semibold">{it.title}</h3>
                <p className="mt-1.5 text-sm text-muted-foreground">{it.body}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
