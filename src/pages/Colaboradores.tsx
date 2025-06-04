
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ExternalLink, User, BookOpen } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const colaboradores = [
  {
    id: 1,
    nome: "Dr. Ana Silva",
    cargo: "Coordenadora de Pesquisa",
    especialidade: "Segurança Alimentar e Nutricional",
    bio: "Doutora em Nutrição com mais de 15 anos de experiência em políticas públicas de alimentação. Especialista em avaliação de programas sociais.",
    artigos: [
      {
        titulo: "Avaliação de Políticas Públicas em Segurança Alimentar",
        revista: "Revista Brasileira de Nutrição",
        ano: "2023",
        link: "#"
      },
      {
        titulo: "Impacto dos Bancos de Alimentos na Redução da Insegurança Alimentar",
        revista: "Cadernos de Saúde Pública",
        ano: "2022",
        link: "#"
      }
    ],
    contribuicoes: [
      "Coordenação de 12 projetos de avaliação de equipamentos públicos",
      "Desenvolvimento de metodologias inovadoras de diagnóstico",
      "Capacitação de mais de 200 gestores públicos"
    ]
  },
  {
    id: 2,
    nome: "Prof. Carlos Santos",
    cargo: "Consultor Sênior",
    especialidade: "Gestão de Políticas Alimentares",
    bio: "Professor universitário e consultor com ampla experiência em gestão pública. Especialista em implementação de programas de combate à fome.",
    artigos: [
      {
        titulo: "Gestão Eficiente de Restaurantes Populares",
        revista: "Gestão Pública e Sociedade",
        ano: "2023",
        link: "#"
      },
      {
        titulo: "Inovações em Cozinhas Comunitárias",
        revista: "Revista de Administração Pública",
        ano: "2022",
        link: "#"
      }
    ],
    contribuicoes: [
      "Consultoria para 8 municípios na implementação de equipamentos",
      "Criação de manuais técnicos para gestão",
      "Formação de equipes técnicas multidisciplinares"
    ]
  },
  {
    id: 3,
    nome: "Dra. Marina Costa",
    cargo: "Especialista em Avaliação",
    especialidade: "Monitoramento e Avaliação de Programas",
    bio: "Nutricionista com mestrado em Saúde Coletiva. Especialista em desenvolvimento de indicadores e sistemas de monitoramento.",
    artigos: [
      {
        titulo: "Indicadores de Efetividade em Programas Alimentares",
        revista: "Ciência & Saúde Coletiva",
        ano: "2023",
        link: "#"
      }
    ],
    contribuicoes: [
      "Desenvolvimento de 15 sistemas de indicadores",
      "Avaliação de impacto em 25 equipamentos públicos",
      "Treinamento em metodologias de avaliação"
    ]
  }
];

const Colaboradores = () => {
  return (
    <div className="min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-notria-primary to-notria-primary/90 py-16">
        <div className="container mx-auto px-4">
          <div className="text-center text-white">
            <h1 className="font-poppins font-bold text-4xl md:text-5xl mb-4">
              Nossa Equipe
            </h1>
            <p className="font-yrsa text-xl md:text-2xl max-w-3xl mx-auto">
              Conheça os especialistas que fazem a diferença na segurança alimentar e nutricional
            </p>
          </div>
        </div>
      </section>

      {/* Colaboradores Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {colaboradores.map((colaborador) => (
              <Card key={colaborador.id} className="h-full flex flex-col">
                <CardHeader>
                  <div className="flex items-center gap-3 mb-4">
                    <div className="bg-notria-secondary/10 p-3 rounded-full">
                      <User className="text-notria-secondary" size={24} />
                    </div>
                    <div>
                      <CardTitle className="font-poppins text-notria-primary">
                        {colaborador.nome}
                      </CardTitle>
                      <p className="text-notria-secondary font-medium">
                        {colaborador.cargo}
                      </p>
                    </div>
                  </div>
                  <div className="bg-notria-light p-3 rounded-lg">
                    <p className="text-sm font-medium text-notria-primary">
                      {colaborador.especialidade}
                    </p>
                  </div>
                </CardHeader>

                <CardContent className="flex-1 flex flex-col">
                  <p className="font-yrsa text-gray-600 mb-6">
                    {colaborador.bio}
                  </p>

                  {/* Artigos */}
                  <div className="mb-6">
                    <h4 className="font-poppins font-semibold text-notria-primary mb-3 flex items-center gap-2">
                      <BookOpen size={18} />
                      Artigos Publicados
                    </h4>
                    <div className="space-y-3">
                      {colaborador.artigos.map((artigo, index) => (
                        <div key={index} className="border-l-3 border-notria-secondary pl-3">
                          <h5 className="font-medium text-sm text-notria-primary mb-1">
                            {artigo.titulo}
                          </h5>
                          <p className="text-xs text-gray-600 mb-1">
                            {artigo.revista} • {artigo.ano}
                          </p>
                          <Button
                            variant="ghost"
                            size="sm"
                            className="text-notria-secondary hover:text-notria-secondary/80 p-0 h-auto"
                            asChild
                          >
                            <a href={artigo.link} target="_blank" rel="noopener noreferrer">
                              <ExternalLink size={14} className="mr-1" />
                              Acessar artigo
                            </a>
                          </Button>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Contribuições */}
                  <div className="mt-auto">
                    <h4 className="font-poppins font-semibold text-notria-primary mb-3">
                      Principais Contribuições
                    </h4>
                    <ul className="space-y-2">
                      {colaborador.contribuicoes.map((contribuicao, index) => (
                        <li key={index} className="text-sm text-gray-600 flex items-start gap-2">
                          <div className="w-1.5 h-1.5 rounded-full bg-notria-secondary mt-2 flex-shrink-0"></div>
                          {contribuicao}
                        </li>
                      ))}
                    </ul>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Colaboradores;
