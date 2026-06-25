import { motion } from "framer-motion";
import { ArrowDown, ArrowRight, Github, Instagram, Linkedin, MessageCircle, Sparkles } from "lucide-react";

export default function Hero() {
  const scrollTo = (id: string) => document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  return (
    <section id="home" className="relative isolate flex min-h-screen items-center overflow-hidden pt-28">
      {/* Background mesh + floating shapes */}
      <div aria-hidden className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute inset-0" style={{ backgroundImage: "var(--gradient-mesh)" }} />
        <div className="absolute left-[8%] top-[18%] h-72 w-72 animate-blob animate-float bg-primary/30 blur-3xl" />
        <div className="absolute right-[10%] top-[10%] h-80 w-80 animate-blob animate-float-slow bg-primary-glow/25 blur-3xl" />
        <div className="absolute bottom-[10%] left-[40%] h-72 w-72 animate-blob bg-primary/20 blur-3xl" />
        {/* grid */}
        <div className="absolute inset-0 opacity-[0.08]" style={{
          backgroundImage: "linear-gradient(to right, white 1px, transparent 1px), linear-gradient(to bottom, white 1px, transparent 1px)",
          backgroundSize: "60px 60px",
          maskImage: "radial-gradient(ellipse at center, black 30%, transparent 75%)",
        }} />
      </div>

      <div className="mx-auto grid w-full max-w-7xl grid-cols-1 items-center gap-12 px-4 sm:px-6 lg:grid-cols-12">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="lg:col-span-7"
        >
          <div className="mb-6 inline-flex items-center gap-2 rounded-full glass px-4 py-1.5 text-xs font-medium text-muted-foreground">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-primary opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-primary" />
            </span>
            Available for freelance work · Lagos, Nigeria
          </div>

          <h1 className="font-display text-5xl font-bold leading-[1.05] sm:text-6xl lg:text-7xl">
            Hi, I'm Chris <span className="inline-block animate-float-slow">👋</span>
            <br />
            <span className="text-gradient animate-gradient" style={{ backgroundImage: "linear-gradient(90deg,var(--primary),var(--primary-glow),var(--primary))" }}>
              I design & build
            </span>
            <br />
            digital experiences.
          </h1>

          <p className="mt-4 text-sm font-medium uppercase tracking-[0.2em] text-muted-foreground">
            Web Designer · UI/UX · Graphic Design · Full-Stack Developer
          </p>

          <p className="mt-6 max-w-xl text-lg leading-relaxed text-muted-foreground">
            I craft beautiful interfaces and ship powerful web applications that help
            businesses grow, attract customers, and increase revenue.
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-4">
            <button
              onClick={() => scrollTo("portfolio")}
              className="group inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-primary to-primary-glow px-7 py-3.5 text-sm font-semibold text-primary-foreground shadow-glow transition hover:scale-[1.03]"
            >
              View My Work
              <ArrowRight className="size-4 transition group-hover:translate-x-1" />
            </button>
            <button
              onClick={() => scrollTo("contact")}
              className="inline-flex items-center gap-2 rounded-full glass-strong px-7 py-3.5 text-sm font-semibold transition hover:scale-[1.03]"
            >
              <Sparkles className="size-4 text-primary" />
              Contact Me
            </button>
          </div>

          <div className="mt-10 flex items-center gap-5 text-muted-foreground">
            <a href="https://wa.me/2348062840158" target="_blank" rel="noreferrer" aria-label="WhatsApp" className="transition hover:text-primary hover:scale-110">
              <MessageCircle className="size-5" />
            </a>
            <a href="https://instagram.com/ogbonnaya_onyekachi_chris" target="_blank" rel="noreferrer" aria-label="Instagram" className="transition hover:text-primary hover:scale-110">
              <Instagram className="size-5" />
            </a>
            <a href="#" aria-label="LinkedIn" className="transition hover:text-primary hover:scale-110">
              <Linkedin className="size-5" />
            </a>
            <a href="#" aria-label="GitHub" className="transition hover:text-primary hover:scale-110">
              <Github className="size-5" />
            </a>
            <div className="h-px flex-1 bg-border" />
            <span className="text-xs uppercase tracking-widest">Socials</span>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.9, delay: 0.2 }}
          className="relative lg:col-span-5"
        >
          <div className="relative mx-auto aspect-[4/5] w-full max-w-md">
            {/* glow ring */}
            <div className="absolute -inset-6 rounded-[2rem] bg-gradient-to-br from-primary/40 via-transparent to-primary-glow/40 blur-2xl" />
            <div className="relative h-full w-full overflow-hidden rounded-[2rem] glass-strong p-2">
              <img
                src="/src/assets/chris-portrait.jpg"
                alt="Chris Ogbonnaya"
                width={896}
                height={1152}
                className="h-full w-full rounded-[1.6rem] object-cover"
              />
              {/* floating chips */}
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 4, repeat: Infinity }}
                className="absolute -left-6 top-12 rounded-2xl glass-strong px-4 py-3 shadow-elegant"
              >
                <div className="text-xs uppercase tracking-widest text-muted-foreground">Currently</div>
                <div className="text-sm font-semibold">Building in React + TS</div>
              </motion.div>
              <motion.div
                animate={{ y: [0, 12, 0] }}
                transition={{ duration: 5, repeat: Infinity }}
                className="absolute -right-4 bottom-16 flex items-center gap-3 rounded-2xl glass-strong px-4 py-3 shadow-elegant"
              >
                <div className="grid h-9 w-9 place-items-center rounded-full bg-gradient-to-br from-primary to-primary-glow text-primary-foreground">
                  ✦
                </div>
                <div>
                  <div className="text-xs text-muted-foreground">100% client</div>
                  <div className="text-sm font-semibold">Satisfaction</div>
                </div>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>

      {/* scroll indicator */}
      <button
        onClick={() => scrollTo("about")}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-muted-foreground"
        aria-label="Scroll to about"
      >
        <ArrowDown className="size-5 animate-bounce" />
      </button>
    </section>
  );
}
