import { CheckCircle, Users, FileText, BookOpen, Handshake, Search } from "lucide-react";

const Services = () => {
  const services = [
    {
      icon: Search,
      title: "Diagnóstico de Segurança Alimentar e Nutricional",
      description: "Realizamos análises detalhadas para mapear a segurança alimentar e nutricional de estados e municípios, utilizando metodologias cientificamente validadas, produzindo estudos técnicos de qualidade.",
      features: [
        "Mapeamento do estado de SAN e InSAN",
        "Análise de dados de contextos locais",
        "Relatórios estratégicos para tomada de decisão"
      ]
    },
    {
      icon: FileText,
      title: "Adesão e manutenção do Sisan",
      description: "Apoiamos estados e municípios em todo o processo de estruturação, adesão e manutenção do Sistema Nacional de Segurança Alimentar e Nutricional (Sisan), promovendo a integração de políticas e ações.",
      features: [
        "Orientação para fortalecimento do Sisan",
        "Elaboração de documentos estratégicos",
        "Capacitação de conselhos, e de equipes gestoras e técnicas"
      ]
    },
    {
      icon: CheckCircle,
      title: "Estruturação e manutenção dos Equipamentos de Segurança Alimentar e Nutricional",
      description: "Oferecemos suporte completo para implantação, reestruturação e gestão de equipamentos como bancos de alimentos, cozinhas comunitárias e restaurantes populares.",
      features: [
        "Implantação e reestruturação de equipamentos",
        "Capacitação de equipes gestoras e operacionais",
        "Monitoramento e avaliação dos equipamentos"
      ]
    }
  ];

  return (
    <section id="servicos" className="py-20 relative bg-white">
      {/* Imagem de fundo */}
      <div className="absolute inset-0 w-full h-full z-0">
        <img
          src="/assets/green.jpg"
          alt="Fundo verde"
          className="w-full h-full object-cover object-center opacity-100"
        />
      </div>
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <h2 className="font-poppins font-bold text-4xl md:text-5xl text-white mb-6">
              Nossos Serviços
            </h2>
            <p className="font-yrsa text-xl text-white/90 max-w-3xl mx-auto leading-relaxed font-bold">
              Oferecemos soluções completas em segurança alimentar e nutricional,<br /> desde diagnósticos técnicos até implementação de políticas públicas eficazes.
            </p>
          </div>

          {/* Services Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div 
                key={index} 
                className="bg-white/70 backdrop-blur-md p-8 rounded-xl hover:shadow-lg transition-shadow group border border-notria-light"
              >
                <div className="bg-notria-primary w-16 h-16 rounded-full flex items-center justify-center mb-6 group-hover:bg-notria-secondary transition-colors">
                  <service.icon className="text-white" size={32} />
                </div>
                
                <h3 className="font-poppins font-semibold text-xl text-[#222] mb-4 text-shadow-md">
                  {service.title}
                </h3>
                
                <p className="font-yrsa text-[#222]/70 mb-6 leading-relaxed text-shadow-sm">
                  {service.description}
                </p>

                <ul className="space-y-2">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-sm">
                      <div className="w-2 h-2 bg-notria-secondary rounded-full mr-3 flex-shrink-0"></div>
                      <span className="font-yrsa text-[#222]/70">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
