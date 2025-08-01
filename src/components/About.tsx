import { Target, Users, Heart, Lightbulb } from "lucide-react";
import { AnimatedSection } from "@/components/ui/animated-section";
import { useIsMobile } from "@/hooks/use-is-mobile";

const About = () => {
  const objectives = [
    {
      icon: Target,
      title: "Transformar Políticas Públicas",
      description: "Geramos impacto mensurável na segurança alimentar e nutricional através de soluções estratégicas."
    },
    {
      icon: Users,
      title: "Capacitar Instituições",
      description: "Otimizamos processos para promover dignidade e autonomia nas organizações."
    },
    {
      icon: Heart,
      title: "Romper o Ciclo da Fome",
      description: "Desenvolvemos soluções inteligentes e práticas para combater a insegurança alimentar."
    },
    {
      icon: Lightbulb,
      title: "Inovar com Propósito",
      description: "Criamos estratégias personalizadas que geram transformação sustentável."
    }
  ];

  const values = [
    {
      title: "Excelência",
      description: "Buscamos sempre a mais alta qualidade em tudo o que fazemos, garantindo que nossos serviços e soluções sejam rigorosamente elaborados, entregues com precisão e superem as expectativas de nossos parceiros."
    },
    {
      title: "Baseada em evidências",
      description: "Nossa metodologia é baseada em evidências científicas e em práticas comprovadas, garantindo que as soluções que oferecemos sejam eficazes e sustentáveis."
    },
    {
      title: "Proatividade",
      description: "Antecipamos desafios e oportunidades, agindo de forma ágil e estratégica para oferecer soluções antes que os problemas se tornem obstáculos."
    },
    {
      title: "Adaptabilidade",
      description: "Estamos preparadas para nos ajustar a diferentes contextos e demandas, criando soluções flexíveis que se adequem às realidades específicas de cada cliente e projeto."
    },
    {
      title: "Ética",
      description: "Nossas decisões e ações são guiadas por um compromisso inabalável com a integridade, a transparência e o respeito às pessoas e às instituições com as quais colaboramos."
    },
    {
      title: "Impacto Sustentável",
      description: "Priorizamos práticas e soluções que geram benefícios de longo prazo, promovendo resultados que não apenas atendam às necessidades imediatas, mas que também construam um futuro mais equilibrado e sustentável."
    },
  ];

  const isMobile = useIsMobile();

  return (
    <section id="sobre" className="py-20 bg-notria-light">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <AnimatedSection {...(!isMobile ? {animation: 'slide-up', delay: 200, duration: 500} : {})}>
            <div className="text-center mb-16">
              <h2 className="font-poppins font-bold text-4xl md:text-5xl text-notria-primary mb-6">
                Quem Somos
              </h2>
              <p className="font-yrsa text-xl text-notria-primary/80 max-w-3xl mx-auto leading-relaxed">
                A Notriá Consultoria é especializada em Segurança Alimentar e Nutricional, <br />dedicada a transformar políticas públicas e gerar impacto real na vida das pessoas.
              </p>
            </div>
          </AnimatedSection>

          {/* Objectives Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {values.map((value, index) => (
              <AnimatedSection 
                key={index} 
                {...(!isMobile ? {animation: 'slide-up', delay: 300 + (index * 100), duration: 500} : {})}
                className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 hover:scale-[1.02] group"
              >
                <h3 className="font-poppins font-semibold text-lg text-notria-primary mb-3 group-hover:text-notria-secondary transition-colors duration-300">
                  {value.title}
                </h3>
                <p className="font-yrsa text-notria-primary/70 leading-relaxed group-hover:text-notria-primary/90 transition-colors duration-300">
                  {value.description}
                </p>
              </AnimatedSection>
            ))}
          </div>

          {/* Mission Statement */}
          <AnimatedSection {...(!isMobile ? {animation: 'scale-in', delay: 600, duration: 500} : {})}>
            <div className="bg-white rounded-2xl p-8 md:p-12 shadow-lg">
              <div className="text-center">
                <h3 className="font-poppins font-bold text-2xl md:text-3xl text-notria-primary mb-6">
                  Nossa Missão
                </h3>
                <p className="font-yrsa text-lg md:text-xl text-notria-primary/80 leading-relaxed max-w-4xl mx-auto">
                  Promover a segurança alimentar e nutricional através de consultoria especializada, 
                  capacitação de gestores e desenvolvimento de soluções estratégicas que fortaleçam 
                  políticas públicas e gerem impacto sustentável no combate à fome e à insegurança alimentar.
                </p>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
};

export default About;
