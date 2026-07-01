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

export default function Home() {
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
