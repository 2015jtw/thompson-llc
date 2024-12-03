import Hero from "../components/Hero";
import Problem from "../components/Problem";
import About from "../components/About";
import Services from "../components/Services";
import SocialProof from "../components/SocialProof";
import ContactForm from "../components/ContactForm";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Hero />
      <Problem />
      <About />
      <Services />
      <SocialProof />
      <ContactForm />
    </main>
  );
}
