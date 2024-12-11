import Hero from "@/components/Hero";
import Problem from "@/components/Problem";
import About from "@/components/About";
import Services from "@/components/Services";
import SocialProof from "@/components/SocialProof";
import ContactForm from "@/components/ContactForm";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen pt-16">
        <Hero />
        <Problem />
        <Services />

        <About />

        <SocialProof />

        <ContactForm />
      </main>
      <Footer />
    </>
  );
}
