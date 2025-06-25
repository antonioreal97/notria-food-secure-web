import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import SEO from "@/components/SEO";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Services from "@/components/Services";
import Team from "@/components/Team";
import Differentials from "@/components/Differentials";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

const Index = () => {
  const location = useLocation();
  useEffect(() => {
    if (location.state && location.state.hash) {
      const hash = location.state.hash.replace('#', '');
      setTimeout(() => {
        const el = document.getElementById(hash);
        if (el) {
          el.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
    }
  }, [location.state]);

  return (
    <div className="min-h-screen">
      <SEO 
        title="Notriá Consultoria - Especialistas em Segurança Alimentar e Nutricional | Consultoria SAN"
        description="Consultoria especializada em Segurança Alimentar e Nutricional (SAN). Soluções estratégicas, capacitação e avaliação de políticas públicas para combater a insegurança alimentar. Especialistas em segurança alimentar e nutricional no Brasil."
        keywords="consultoria em segurança alimentar, segurança alimentar e nutricional, segurança e insegurança alimentar, notria, notria consultoria, consultoria SAN, políticas públicas alimentação, capacitação segurança alimentar, avaliação segurança alimentar, combate fome, bancos de alimentos, restaurantes populares, cozinhas comunitárias, gestão segurança alimentar, consultoria nutricional, segurança alimentar Brasil"
        url="/"
      />
      <Header />
      <Hero />
      <About />
      <Services />
      <Team />
      <Differentials />
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;
