import { createFileRoute } from "@tanstack/react-router";
import Navbar from "@/components/portfolio/Navbar";
import Hero from "@/components/portfolio/Hero";
import About from "@/components/portfolio/About";
import Services from "@/components/portfolio/Services";
import Skills from "@/components/portfolio/Skills";
import Portfolio from "@/components/portfolio/Portfolio";
import WhyMe from "@/components/portfolio/WhyMe";
import Testimonials from "@/components/portfolio/Testimonials";
import Contact from "@/components/portfolio/Contact";
import Footer from "@/components/portfolio/Footer";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Chris Ogbonnaya — Web Designer & Full-Stack Developer" },
      { name: "description", content: "Premium portfolio of Chris Ogbonnaya — UI/UX, web design, graphic design & full-stack development. Based in Lagos, Nigeria. Available for international clients." },
      { property: "og:title", content: "Chris Ogbonnaya — Web Designer & Full-Stack Developer" },
      { property: "og:description", content: "I design beautiful digital experiences and build powerful web applications that help businesses grow." },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <div className="relative overflow-x-clip">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Services />
        <Skills />
        <Portfolio />
        <WhyMe />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
