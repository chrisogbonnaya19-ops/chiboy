import { motion } from "framer-motion";
import { Instagram, Linkedin, Mail, MapPin, MessageCircle, Send } from "lucide-react";
import { useState } from "react";
import { z } from "zod";

const schema = z.object({
  name: z.string().trim().min(1, "Name required").max(100),
  email: z.string().trim().email("Invalid email").max(255),
  type: z.string().trim().min(1, "Project type required").max(80),
  budget: z.string().trim().max(80).optional(),
  message: z.string().trim().min(1, "Message required").max(1000),
});

export default function Contact() {
  const [status, setStatus] = useState<"idle" | "ok" | "err">("idle");
  const [errors, setErrors] = useState<Record<string, string>>({});

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const fd = new FormData(e.currentTarget);
    const parsed = schema.safeParse(Object.fromEntries(fd));
    if (!parsed.success) {
      const errs: Record<string, string> = {};
      parsed.error.issues.forEach((i) => (errs[i.path[0] as string] = i.message));
      setErrors(errs);
      setStatus("err");
      return;
    }
    setErrors({});
    const { name, email, type, budget, message } = parsed.data;
    const text = `Hi Chris, I'm ${name} (${email}).%0A%0AProject: ${type}%0ABudget: ${budget || "—"}%0A%0A${encodeURIComponent(message)}`;
    window.open(`https://wa.me/2348062840158?text=${text}`, "_blank");
    setStatus("ok");
    (e.target as HTMLFormElement).reset();
  };

  return (
    <section id="contact" className="relative py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="mx-auto max-w-2xl text-center">
          <span className="text-xs font-semibold uppercase tracking-[0.25em] text-primary">Contact</span>
          <h2 className="mt-3 font-display text-4xl font-bold sm:text-5xl">
            Let's build something <span className="text-gradient" style={{ backgroundImage: "var(--gradient-primary)" }}>amazing</span> together
          </h2>
          <p className="mt-4 text-muted-foreground">Have a project in mind? Let's discuss how I can help bring your ideas to life.</p>
        </div>

        <div className="mt-14 grid gap-6 lg:grid-cols-12">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-4 lg:col-span-5"
          >
            <div className="rounded-3xl glass-strong p-7">
              <h3 className="font-display text-xl font-semibold">Get in touch</h3>
              <div className="mt-5 space-y-4 text-sm">
                <a href="https://wa.me/2348062840158" target="_blank" rel="noreferrer" className="flex items-center gap-3 rounded-2xl glass p-4 transition hover:-translate-y-0.5">
                  <span className="grid h-10 w-10 place-items-center rounded-xl bg-primary/15 text-primary"><MessageCircle className="size-5" /></span>
                  <div>
                    <div className="text-xs text-muted-foreground">WhatsApp</div>
                    <div className="font-semibold">+234 806 284 0158</div>
                  </div>
                </a>
                <a href="mailto:hello@chrisogbonnaya.com" className="flex items-center gap-3 rounded-2xl glass p-4 transition hover:-translate-y-0.5">
                  <span className="grid h-10 w-10 place-items-center rounded-xl bg-primary/15 text-primary"><Mail className="size-5" /></span>
                  <div>
                    <div className="text-xs text-muted-foreground">Email</div>
                    <div className="font-semibold">hello@chrisogbonnaya.com</div>
                  </div>
                </a>
                <div className="flex items-center gap-3 rounded-2xl glass p-4">
                  <span className="grid h-10 w-10 place-items-center rounded-xl bg-primary/15 text-primary"><MapPin className="size-5" /></span>
                  <div>
                    <div className="text-xs text-muted-foreground">Location</div>
                    <div className="font-semibold">Lagos, Nigeria</div>
                  </div>
                </div>
                <div className="flex gap-3 pt-2">
                  <a href="https://instagram.com/ogbonnaya_onyekachi_chris" target="_blank" rel="noreferrer" aria-label="Instagram" className="grid h-11 w-11 place-items-center rounded-xl glass transition hover:text-primary hover:scale-110">
                    <Instagram className="size-4" />
                  </a>
                  <a href="#" aria-label="LinkedIn" className="grid h-11 w-11 place-items-center rounded-xl glass transition hover:text-primary hover:scale-110">
                    <Linkedin className="size-4" />
                  </a>
                  <a href="https://wa.me/2348062840158" target="_blank" rel="noreferrer" aria-label="WhatsApp" className="grid h-11 w-11 place-items-center rounded-xl glass transition hover:text-primary hover:scale-110">
                    <MessageCircle className="size-4" />
                  </a>
                </div>
              </div>
            </div>

            <div className="overflow-hidden rounded-3xl glass-strong">
              <iframe
                title="Lagos, Nigeria map"
                src="https://www.openstreetmap.org/export/embed.html?bbox=3.30%2C6.40%2C3.50%2C6.55&layer=mapnik"
                className="h-64 w-full grayscale invert"
                loading="lazy"
              />
            </div>
          </motion.div>

          <motion.form
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            onSubmit={onSubmit}
            className="rounded-3xl glass-strong p-7 lg:col-span-7"
          >
            <div className="grid gap-4 sm:grid-cols-2">
              <Field name="name" label="Full Name" error={errors.name} />
              <Field name="email" label="Email Address" type="email" error={errors.email} />
              <Field name="type" label="Project Type" placeholder="Website, App, Branding…" error={errors.type} />
              <Field name="budget" label="Budget" placeholder="$2k — $10k" error={errors.budget} />
            </div>
            <div className="mt-4">
              <label className="mb-1.5 block text-xs font-semibold uppercase tracking-widest text-muted-foreground">Message</label>
              <textarea
                name="message"
                rows={5}
                className="w-full resize-none rounded-2xl border border-border bg-background/40 px-4 py-3 text-sm outline-none transition focus:border-primary focus:ring-2 focus:ring-primary/30"
                placeholder="Tell me about your project…"
              />
              {errors.message && <p className="mt-1 text-xs text-destructive">{errors.message}</p>}
            </div>
            <button type="submit" className="group mt-6 inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-primary to-primary-glow px-6 py-3 text-sm font-semibold text-primary-foreground shadow-glow transition hover:scale-[1.03]">
              Send Message <Send className="size-4 transition group-hover:translate-x-1" />
            </button>
            {status === "ok" && <p className="mt-3 text-sm text-primary">Opening WhatsApp… thanks for reaching out!</p>}
          </motion.form>
        </div>
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

function Field({ name, label, type = "text", placeholder, error }: { name: string; label: string; type?: string; placeholder?: string; error?: string }) {
  return (
    <div>
      <label className="mb-1.5 block text-xs font-semibold uppercase tracking-widest text-muted-foreground">{label}</label>
      <input
        name={name}
        type={type}
        placeholder={placeholder}
        className="w-full rounded-2xl border border-border bg-background/40 px-4 py-3 text-sm outline-none transition focus:border-primary focus:ring-2 focus:ring-primary/30"
      />
      {error && <p className="mt-1 text-xs text-destructive">{error}</p>}
    </div>
  );
}
