import { AnimatePresence, motion } from "framer-motion";
import { ChevronLeft, ChevronRight, Quote, Star } from "lucide-react";
import { useEffect, useState } from "react";

const items = [
  { name: "Adaeze K.", role: "Product Lead, Fintech", quote: "Chris transformed our vision into an amazing digital product. The attention to detail was exceptional." },
  { name: "Marcus L.", role: "Founder, AgencyOne", quote: "Professional, creative, and highly skilled. We would definitely work with Chris again." },
  { name: "Sofia R.", role: "Marketing Director", quote: "Outstanding design quality and development expertise. The new site doubled our inbound leads." },
];

export default function Testimonials() {
  const [i, setI] = useState(0);
  const next = () => setI((p) => (p + 1) % items.length);
  const prev = () => setI((p) => (p - 1 + items.length) % items.length);

  useEffect(() => {
    const t = setInterval(next, 6000);
    return () => clearInterval(t);
  }, []);

  const t = items[i];
  return (
    <section id="testimonials" className="relative py-28">
      <div className="mx-auto max-w-5xl px-4 sm:px-6">
        <div className="text-center">
          <span className="text-xs font-semibold uppercase tracking-[0.25em] text-primary">Testimonials</span>
          <h2 className="mt-3 font-display text-4xl font-bold sm:text-5xl">
            Words from <span className="text-gradient" style={{ backgroundImage: "var(--gradient-primary)" }}>clients</span>
          </h2>
        </div>

        <div className="relative mt-14">
          <div className="relative overflow-hidden rounded-3xl glass-strong p-10 sm:p-14">
            <Quote className="absolute right-8 top-8 size-16 text-primary/15" />
            <AnimatePresence mode="wait">
              <motion.div
                key={t.name}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.4 }}
              >
                <div className="flex gap-1 text-primary">
                  {Array.from({ length: 5 }).map((_, idx) => (
                    <Star key={idx} className="size-4 fill-current" />
                  ))}
                </div>
                <p className="mt-5 font-display text-2xl leading-snug sm:text-3xl">
                  "{t.quote}"
                </p>
                <div className="mt-6 flex items-center gap-4">
                  <div className="grid h-12 w-12 place-items-center rounded-full bg-gradient-to-br from-primary to-primary-glow font-bold text-primary-foreground">
                    {t.name[0]}
                  </div>
                  <div>
                    <div className="font-semibold">{t.name}</div>
                    <div className="text-sm text-muted-foreground">{t.role}</div>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>

            <div className="mt-10 flex items-center justify-between">
              <div className="flex gap-2">
                {items.map((_, idx) => (
                  <button
                    key={idx}
                    aria-label={`Go to testimonial ${idx + 1}`}
                    onClick={() => setI(idx)}
                    className={`h-1.5 rounded-full transition-all ${i === idx ? "w-8 bg-primary" : "w-3 bg-white/20"}`}
                  />
                ))}
              </div>
              <div className="flex gap-2">
                <button onClick={prev} aria-label="Previous" className="grid h-10 w-10 place-items-center rounded-full glass hover:text-primary">
                  <ChevronLeft className="size-4" />
                </button>
                <button onClick={next} aria-label="Next" className="grid h-10 w-10 place-items-center rounded-full glass hover:text-primary">
                  <ChevronRight className="size-4" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
