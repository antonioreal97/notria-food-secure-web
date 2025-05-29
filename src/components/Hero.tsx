
import { Button } from "@/components/ui/button";
import { ArrowDown } from "lucide-react";

const Hero = () => {
  return (
    <section id="inicio" className="bg-gradient-to-br from-notria-primary via-notria-primary to-notria-secondary min-h-screen flex items-center">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center text-white">
          <h1 className="font-poppins font-bold text-4xl md:text-6xl mb-6 leading-tight">
            Transformando Políticas Públicas em
            <span className="text-notria-secondary block mt-2">
              Segurança Alimentar
            </span>
          </h1>
          
          <p className="font-yrsa text-xl md:text-2xl mb-8 text-white/90 max-w-3xl mx-auto leading-relaxed">
            Especialistas em Segurança Alimentar e Nutricional, oferecendo soluções estratégicas, 
            capacitação e avaliação de políticas públicas para combater a insegurança alimentar.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Button 
              size="lg" 
              className="bg-notria-secondary hover:bg-notria-secondary/90 text-white font-poppins font-semibold px-8 py-4 text-lg"
            >
              Conheça Nossos Serviços
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="border-white text-white hover:bg-white hover:text-notria-primary font-poppins font-semibold px-8 py-4 text-lg"
            >
              Fale Conosco
            </Button>
          </div>

          <div className="animate-bounce">
            <ArrowDown className="mx-auto text-white/70" size={32} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
