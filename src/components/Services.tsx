
import { CheckCircle, Users, FileText, BookOpen, Handshake, Search } from "lucide-react";

const Services = () => {
  const services = [
    {
      icon: CheckCircle,
      title: "Diagnóstico e Avaliação",
      description: "Análise completa de equipamentos públicos como bancos de alimentos, restaurantes populares e cozinhas comunitárias.",
      features: ["Avaliação de processos", "Identificação de gargalos", "Relatórios técnicos", "Recomendações estratégicas"]
    },
    {
      icon: Users,
      title: "Capacitação de Gestores",
      description: "Formação especializada para gestores e técnicos do setor de segurança alimentar e nutricional.",
      features: ["Treinamentos presenciais", "Workshops práticos", "Metodologias inovadoras", "Certificação técnica"]
    },
    {
      icon: FileText,
      title: "Soluções Estratégicas",
      description: "Desenvolvimento de estratégias personalizadas para otimização de políticas públicas.",
      features: ["Planejamento estratégico", "Implementação de projetos", "Monitoramento de resultados", "Avaliação de impacto"]
    },
    {
      icon: BookOpen,
      title: "Materiais Técnicos",
      description: "Produção de conteúdo especializado e publicações científicas para o setor.",
      features: ["Manuais técnicos", "Guias práticos", "Artigos científicos", "Relatórios de pesquisa"]
    },
    {
      icon: Handshake,
      title: "Consultoria Estratégica",
      description: "Assessoria especializada para governos, ONGs e instituições públicas e privadas.",
      features: ["Consultoria presencial", "Acompanhamento remoto", "Suporte técnico", "Orientação estratégica"]
    },
    {
      icon: Search,
      title: "Apoio Científico",
      description: "Suporte técnico-científico e revisão teórica para projetos e pesquisas.",
      features: ["Revisão bibliográfica", "Apoio metodológico", "Validação técnica", "Orientação científica"]
    }
  ];

  return (
    <section id="servicos" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <h2 className="font-poppins font-bold text-4xl md:text-5xl text-notria-primary mb-6">
              Nossos Serviços
            </h2>
            <p className="font-yrsa text-xl text-notria-primary/80 max-w-3xl mx-auto leading-relaxed">
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
