import { Award, Lightbulb, Users, Target } from "lucide-react";

const Differentials = () => {
  const handleWhatsAppRedirect = () => {
    const phoneNumber = "5531992330826";
    const message = "Olá! Gostaria de solicitar uma consultoria sobre segurança alimentar e nutricional.";
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  const differentials = [
    {
      icon: Award,
      title: "Experiência Técnica",
      description: "Equipe especializada com vasta experiência em segurança alimentar e nutricional, garantindo soluções baseadas em conhecimento científico e prática consolidada."
    },
    {
      icon: Lightbulb,
      title: "Inovação",
      description: "Desenvolvemos metodologias inovadoras e utilizamos as melhores práticas do mercado para criar soluções eficazes e sustentáveis."
    },
    {
      icon: Users,
      title: "Abordagem Personalizada",
      description: "Cada projeto é único. Desenvolvemos estratégias customizadas que atendem às necessidades específicas de cada cliente e contexto."
    },
    {
      icon: Target,
      title: "Impacto Sustentável",
      description: "Nosso compromisso é gerar transformações duradouras que promovam dignidade, autonomia e segurança alimentar para toda a população."
    }
  ];

  return (
    <section id="diferenciais" className="py-20 bg-gradient-to-br from-notria-primary to-notria-primary/90">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <h2 className="font-poppins font-bold text-4xl md:text-5xl text-white mb-6">
              Nossos Diferenciais
            </h2>
            <p className="font-yrsa text-xl text-white/90 max-w-3xl mx-auto leading-relaxed">
              O que nos torna únicos na transformação de políticas públicas de segurança alimentar e nutricional.
            </p>
          </div>

          {/* Differentials Grid */}
          <div className="grid md:grid-cols-2 gap-8">
            {differentials.map((differential, index) => (
              <div 
                key={index} 
                className="bg-white/10 backdrop-blur-sm p-8 rounded-xl hover:bg-white/20 transition-all duration-300 transform hover:-translate-y-1 hover:scale-[1.02] group border border-white/20 hover:border-white/40"
              >
                <div className="bg-notria-secondary w-16 h-16 rounded-full flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 group-hover:bg-white/20">
                  <differential.icon className="text-white group-hover:text-notria-secondary transition-colors duration-300" size={32} />
                </div>
                
                <h3 className="font-poppins font-semibold text-2xl text-white mb-4 group-hover:text-notria-secondary transition-colors duration-300">
                  {differential.title}
                </h3>
                
                <p className="font-yrsa text-white/90 leading-relaxed text-lg group-hover:text-white transition-colors duration-300">
                  {differential.description}
                </p>
              </div>
            ))}
          </div>

          {/* Call to Action */}
          <div className="text-center mt-16">
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 md:p-12 border border-white/20">
              <h3 className="font-poppins font-bold text-2xl md:text-3xl text-white mb-4">
                Pronto para Transformar sua Instituição?
              </h3>
              <p className="font-yrsa text-lg text-white/90 mb-8 max-w-2xl mx-auto">
                Entre em contato conosco e descubra como podemos ajudar a fortalecer 
                suas políticas de segurança alimentar e nutricional.
              </p>
              <button 
                onClick={handleWhatsAppRedirect}
                className="bg-notria-secondary hover:bg-notria-secondary/90 text-white font-poppins font-semibold px-8 py-4 rounded-lg text-lg transition-colors"
              >
                Solicitar Consultoria
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Differentials;
