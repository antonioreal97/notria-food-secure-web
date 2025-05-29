
import { Target, Users, Heart, Lightbulb } from "lucide-react";

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

  return (
    <section id="sobre" className="py-20 bg-notria-light">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <h2 className="font-poppins font-bold text-4xl md:text-5xl text-notria-primary mb-6">
              Quem Somos
            </h2>
            <p className="font-yrsa text-xl text-notria-primary/80 max-w-3xl mx-auto leading-relaxed">
              A Notriá Consultoria é especializada em Segurança Alimentar e Nutricional, 
              dedicada a transformar políticas públicas e gerar impacto real na vida das pessoas.
            </p>
          </div>

          {/* Objectives Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            {objectives.map((objective, index) => (
              <div 
                key={index} 
                className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow group"
              >
                <div className="bg-notria-secondary/10 w-16 h-16 rounded-full flex items-center justify-center mb-4 group-hover:bg-notria-secondary/20 transition-colors">
                  <objective.icon className="text-notria-secondary" size={32} />
                </div>
                <h3 className="font-poppins font-semibold text-lg text-notria-primary mb-3">
                  {objective.title}
                </h3>
                <p className="font-yrsa text-notria-primary/70 leading-relaxed">
                  {objective.description}
                </p>
              </div>
            ))}
          </div>

          {/* Mission Statement */}
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
        </div>
      </div>
    </section>
  );
};

export default About;
