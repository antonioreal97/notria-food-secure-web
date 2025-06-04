import { CheckCircle, Users, FileText, BookOpen, Handshake, Search } from "lucide-react";

const Services = () => {
  const services = [
    {
      icon: Search,
      title: "Diagnóstico da Segurança Alimentar",
      description: "Realizamos análises detalhadas para identificar e mapear a insegurança alimentar em municípios e estados, utilizando metodologias reconhecidas e dados atualizados.",
      features: [
        "Mapeamento de vulnerabilidades",
        "Análise de dados socioeconômicos",
        "Relatórios estratégicos para tomada de decisão"
      ]
    },
    {
      icon: FileText,
      title: "Adesão e manutenção do Sisan",
      description: "Apoiamos municípios e estados em todo o processo de adesão, estruturação e manutenção do Sistema Nacional de Segurança Alimentar e Nutricional (Sisan), promovendo a integração de políticas e ações.",
      features: [
        "Orientação para adesão ao Sisan",
        "Acompanhamento de processos e documentação",
        "Capacitação de equipes gestoras"
      ]
    },
    {
      icon: CheckCircle,
      title: "Estruturação e manutenção dos Equipamentos de Segurança Alimentar e Nutricional",
      description: "Oferecemos suporte completo para implantação, reestruturação e gestão de equipamentos como bancos de alimentos, cozinhas comunitárias e restaurantes populares.",
      features: [
        "Implantação e reestruturação de equipamentos",
        "Capacitação de equipes operacionais",
        "Monitoramento e avaliação de resultados"
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
              Oferecemos soluções completas em segurança alimentar e nutricional, 
              desde diagnósticos técnicos até implementação de políticas públicas eficazes.
            </p>
          </div>

          {/* Services Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div 
                key={index} 
                className="bg-notria-light/50 p-8 rounded-xl hover:shadow-lg transition-shadow group border border-notria-light"
              >
                <div className="bg-notria-primary w-16 h-16 rounded-full flex items-center justify-center mb-6 group-hover:bg-notria-secondary transition-colors">
                  <service.icon className="text-white" size={32} />
                </div>
                
                <h3 className="font-poppins font-semibold text-xl text-notria-primary mb-4">
                  {service.title}
                </h3>
                
                <p className="font-yrsa text-notria-primary/70 mb-6 leading-relaxed">
                  {service.description}
                </p>

                <ul className="space-y-2">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-sm">
                      <div className="w-2 h-2 bg-notria-secondary rounded-full mr-3 flex-shrink-0"></div>
                      <span className="font-yrsa text-notria-primary/80">{feature}</span>
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
