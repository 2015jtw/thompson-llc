import Hero from "@/components/Hero";
import Problem from "@/components/Problem";
import About from "@/components/About";
import Services from "@/components/Services";
import SocialProof from "@/components/SocialProof";
import ContactForm from "@/components/ContactForm";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";

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
