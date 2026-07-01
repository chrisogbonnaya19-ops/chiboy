import { motion } from "framer-motion";
import { Instagram, Linkedin, Mail, MapPin, MessageCircle } from "lucide-react";

export default function Contact() {
  return (
    <section id="contact" className="relative py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="mx-auto max-w-2xl text-center">
          <span className="text-xs font-semibold uppercase tracking-[0.25em] text-primary">Contact</span>
          <h2 className="mt-3 font-display text-4xl font-bold sm:text-5xl">
            Let's build something{" "}
            <span className="text-gradient" style={{ backgroundImage: "var(--gradient-primary)" }}>amazing</span>{" "}
            together
          </h2>
          <p className="mt-4 text-muted-foreground">
            Reach out on WhatsApp or email — I usually reply within a few hours.
          </p>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mx-auto mt-14 max-w-2xl"
        >
          <div className="rounded-3xl glass-strong p-7">
            <h3 className="font-display text-xl font-semibold">Get in touch</h3>
            <div className="mt-5 space-y-4 text-sm">
              <a
                href="https://wa.me/2348062840158"
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-3 rounded-2xl glass p-4 transition hover:-translate-y-0.5"
              >
                <span className="grid h-10 w-10 place-items-center rounded-xl bg-primary/15 text-primary">
                  <MessageCircle className="size-5" />
                </span>
                <div>
                  <div className="text-xs text-muted-foreground">WhatsApp</div>
                  <div className="font-semibold">+234 806 284 0158</div>
                </div>
              </a>
              <a
                href="mailto:chrisogbonnaya19@gmail.com"
                className="flex items-center gap-3 rounded-2xl glass p-4 transition hover:-translate-y-0.5"
              >
                <span className="grid h-10 w-10 place-items-center rounded-xl bg-primary/15 text-primary">
                  <Mail className="size-5" />
                </span>
                <div>
                  <div className="text-xs text-muted-foreground">Email</div>
                  <div className="font-semibold">chrisogbonnaya19@gmail.com</div>
                </div>
              </a>
              <div className="flex items-center gap-3 rounded-2xl glass p-4">
                <span className="grid h-10 w-10 place-items-center rounded-xl bg-primary/15 text-primary">
                  <MapPin className="size-5" />
                </span>
                <div>
                  <div className="text-xs text-muted-foreground">Location</div>
                  <div className="font-semibold">Lagos, Nigeria</div>
                </div>
              </div>
              <div className="flex gap-3 pt-2">
                <a
                  href="https://instagram.com/ogbonnaya_onyekachi_chris"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="Instagram"
                  className="grid h-11 w-11 place-items-center rounded-xl glass transition hover:text-primary hover:scale-110"
                >
                  <Instagram className="size-4" />
                </a>
                <a
                  href="#"
                  aria-label="LinkedIn"
                  className="grid h-11 w-11 place-items-center rounded-xl glass transition hover:text-primary hover:scale-110"
                >
                  <Linkedin className="size-4" />
                </a>
                <a
                  href="https://wa.me/2348062840158"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="WhatsApp"
                  className="grid h-11 w-11 place-items-center rounded-xl glass transition hover:text-primary hover:scale-110"
                >
                  <MessageCircle className="size-4" />
                </a>
              </div>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Floating WhatsApp */}
      <a
        href="https://wa.me/2348062840158"
        target="_blank"
        rel="noreferrer"
        aria-label="Chat on WhatsApp"
        className="fixed bottom-6 right-6 z-40 grid h-14 w-14 place-items-center rounded-full bg-gradient-to-br from-primary to-primary-glow text-primary-foreground shadow-glow transition hover:scale-110"
      >
        <MessageCircle className="size-6" />
      </a>
    </section>
  );
}
