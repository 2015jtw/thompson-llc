import Hero from "@/src/components/Hero";
import Problem from "@/src/components/Problem";
import About from "@/src/components/About";
import Services from "@/src/components/Services";
import SocialProof from "@/src/components/SocialProof";
import ContactForm from "@/src/components/ContactForm";
import Footer from "@/src/components/Footer";
import Navbar from "@/src/components/Navbar";

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen pt-16">
        <section id="hero">
          <Hero />
        </section>
        <section id="problem">
          <Problem />
        </section>

        <section id="services">
          <Services />
        </section>
        <section id="about">
          <About />
        </section>
        <section id="testimonials">
          <SocialProof />
        </section>
        <section id="contact">
          <ContactForm />
        </section>
      </main>
      <Footer />
    </>
  );
}
