import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ExternalLink, User, BookOpen, ChevronDown, ChevronUp } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const colaboradores = [
  {
    nome: "Milena Martins",
    image: "/assets/team3.png",
    materiais: [
      {
        tipo: "Artigo",
        nome: "Recorte público na agenda brasileira da Segurança Alimentar e Nutricional de 2000 a 2022",
        link: "https://teses.usp.br/teses/disponiveis/42/42136/tde-02012023-094542/"
      },
      {
        tipo: "Artigo",
        nome: "SEGURANÇA ALIMENTAR E NUTRICIONAL: UMA ANÁLISE SOBRE O ARCABOUÇO LEGISLATIVO DOS ESTADOS BRASILEIROS",
        link: "https://seer.ufr.br/index.php/seguranca/article/view/7524"
      },
      {
        tipo: "Artigo",
        nome: "Governança participativa de segurança alimentar no Brasil: Interesses e prioridades dentro da redemocratização até o desmantelamento multinacional",
        link: "https://www.scielo.br/j/rn/a/5b3f9b7f7b7f7f7f7f7f7f7f7f7f7f7f7f7f7f7/?lang=en"
      },
      {
        tipo: "Artigo",
        nome: "Popular Restaurants: strategies to fight hunger and to promote Food and Nutrition Security: an integrative review of scientific publications in the period 2011-2021",
        link: "https://www.scielo.br/j/rn/a/9b7b9b7b7b7b7b7b7b7b7b7b7b7b7b7b7b7b7/?lang=en"
      },
      {
        tipo: "Artigo",
        nome: "Sistema Nacional de Segurança Alimentar e Nutricional: quais são os semelhantes no processo de descentralização?",
        link: "https://www.scielo.br/j/rn/a/9b7b9b7b7b7b7b7b7b7b7b7b7b7b7b7b7b7b7/?lang=en"
      },
      {
        tipo: "Artigo",
        nome: "Entre a escassez e a fome: o diagnóstico de segurança alimentar e nutricional nas capitais do Sul do Brasil",
        link: "https://www.scielo.br/j/rn/a/9b7b9b7b7b7b7b7b7b7b7b7b7b7b7b7b7b7b7/?lang=en"
      },
      {
        tipo: "Artigo",
        nome: "A experiência de Santa Catarina: desafios e perspectivas em pandemia e políticas públicas",
        link: "https://sig.scielo.br/index.php/seguranca/article/view/1669"
      },
      {
        tipo: "Artigo",
        nome: "Descentralização normativa da segurança alimentar e nutricional: estudo descritivo das legislações publicadas nas capitais brasileiras",
        link: "https://www.scielo.br/j/rn/a/9b7b9b7b7b7b7b7b7b7b7b7b7b7b7b7b7b7b7/?lang=en"
      },
      {
        tipo: "Artigo",
        nome: "A situação de segurança alimentar e nutricional nas capitais brasileiras: resultados de uma avaliação de múltiplas dimensões",
        link: "https://www.scielo.br/j/rn/a/9b7b9b7b7b7b7b7b7b7b7b7b7b7b7b7b7b7b7/?lang=en"
      },
      {
        tipo: "Artigo",
        nome: "Adequação normativa da segurança alimentar e nutricional no Brasil",
        link: "https://www.scielo.br/j/rn/a/9b7b9b7b7b7b7b7b7b7b7b7b7b7b7b7b7b7b7/?lang=en"
      },
      {
        tipo: "Trabalhos técnicos",
        nome: "Compartilhando de Saberes e Experiências em Segurança Alimentar e Nutricional - Oficina realizada em Blumenau/SC",
        link: ""
      },
      {
        tipo: "Trabalhos técnicos",
        nome: "Compartilhando de Saberes e Experiências em Segurança Alimentar e Nutricional - Oficina da Região Serrana/SC",
        link: ""
      },
      {
        tipo: "Trabalhos técnicos",
        nome: "Compartilhando de Saberes e Experiências em Segurança Alimentar e Nutricional - Oficina da Região Oeste/SC",
        link: ""
      },
      {
        tipo: "Trabalhos técnicos",
        nome: "Compartilhando de Saberes e Experiências em Segurança Alimentar e Nutricional - Oficina da Região Meio Oeste/SC",
        link: ""
      },
      {
        tipo: "Trabalhos técnicos",
        nome: "Relatório de Monitoramento do Fortalecimento do SISAN em Santa Catarina",
        link: ""
      },
      {
        tipo: "Trabalhos técnicos",
        nome: "Caderno II. Compartilhando de Saberes e Experiências em Segurança Alimentar e Nutricional - Oficina da Região Sul/SC",
        link: ""
      },
      {
        tipo: "Trabalhos técnicos",
        nome: "Conhecimentos e Saberes em Segurança Alimentar e Nutricional: documento base das oficinas de fortalecimento do SISAN em SC e RS",
        link: ""
      }
    ]
  },
  {
    nome: "Ana Carolina Einseidt Mattos",
    image: "/assets/team4.png",
    materiais: [
      {
        tipo: "Capítulo de livro publicado",
        nome: "Introdução à Ecologia Alimentar. In: Valmar Ziegler, Denise Zaffari. (Org.). Ecologia Alimentar Humana. 1ed. Curitiba: CRV Ltda., 2024, v. , p. 11-36.",
        link: ""
      },
      {
        tipo: "Capítulo de livro publicado",
        nome: "Práticas Alimentares. Cultura e mudanças alimentares. In: Valmar Ziegler, Denise Zaffari. (Org.). Ecologia Alimentar Humana. 1ed. Curitiba: CRV Ltda., 2024, v. , p. 37-68.",
        link: ""
      },
      {
        tipo: "Capítulo de livro publicado",
        nome: "PRÁTICAS... V. ZIEGLER-V., D. ZAFFARI, M. C. M. (Org.). Ecologia e Ecologia Alimentar Humana. 1ed. Curitiba: CRV Ltda., 2024, v. , p. 37-68.",
        link: ""
      },
      {
        tipo: "Destaque",
        nome: "Destaque Trabalho de Conclusão de Curso - Graduação em Nutrição, Universidade do Vale do Rio dos Sinos/UNISINOS",
        link: ""
      },
      {
        tipo: "Destaque",
        nome: "Destaque Destaque - A Cultura alimentar e os desafios de um Aprofundamento da Condição Social. II Simpósio Latino-Americano de Estudos em Cultura - SEMLACult",
        link: ""
      },
      {
        tipo: "Artigos completos publicados em periódicos",
        nome: "A Cultura Alimentar e os Reflexos de um Aprofundamento da Condição Social",
        link: "https://dx.doi.org/10.29369/av3n.v3i300.667645"
      },
      {
        tipo: "Livros publicados/organizados ou edições",
        nome: "Ciclo circular conjunto COMAÇÕES/ENSAIOS n°1/2020",
        link: "https://periodicos.claec.org/index.php/arca/article/view/1483"
      },
      {
        tipo: "Trabalhos técnicos",
        nome: "Projeto Per-Capita de Segurança Alimentar e Nutricional do município de São Leopoldo",
        link: ""
      },
      {
        tipo: "Trabalhos técnicos",
        nome: "Relatório de Propostas em Segurança Alimentar e Nutricional, Conferência Municipal de Segurança Alimentar e Nutricional de São Leopoldo",
        link: ""
      },
      {
        tipo: "Trabalhos técnicos",
        nome: "Desenvolvimento de material didático ou instrucional: Segurança Alimentar das populações vulneráveis - Cuidados e Atenção às populações vulnerabilizadas",
        link: ""
      }
    ]
  },
  {
    nome: "Juliana Theodora Cunha de Oliveira",
    image: "/assets/team2.png",
    materiais: [
      {
        tipo: "Artigos completos publicados em periódicos",
        nome: "A fome e a raiva (e o vírus): lições dos home - reflexões sobre participação social em tempos de Covid-19",
        link: "https://www.scielo.br/j/rn/a/7b7b7b7b7b7b7b7b7b7b7b7b7b7b7b7b7b7b7/?lang=en"
      },
      {
        tipo: "Artigos completos publicados em periódicos",
        nome: "Restaurantes Populares: resistência, avaliação e mediação de segurança alimentar e nutricional",
        link: "https://www.scielo.br/j/rn/a/7b7b7b7b7b7b7b7b7b7b7b7b7b7b7b7b7b7b7/?lang=en"
      },
      {
        tipo: "Artigos completos publicados em periódicos",
        nome: "Restaurantes Populares: avaliação da implementação do Direito Humano à Alimentação Adequada: proposição de um modelo avaliativo",
        link: "https://www.scielo.br/j/rn/a/7b7b7b7b7b7b7b7b7b7b7b7b7b7b7b7b7b7b7/?lang=en"
      },
      {
        tipo: "Artigos completos publicados em periódicos",
        nome: "Medição de trabalho do nutricionista: 80 anos de história da segurança alimentar e nutricional",
        link: "https://www.scielo.br/j/rn/a/7b7b7b7b7b7b7b7b7b7b7b7b7b7b7b7b7b7b7/?lang=en"
      },
      {
        tipo: "Produção técnica",
        nome: "Documento técnico contendo resultados técnicos sobre a situação das Cozinhas Comunitárias e Restaurantes Populares mantidos pelo poder público no Brasil.",
        link: ""
      },
      {
        tipo: "Produção técnica",
        nome: "Documento técnico contendo resultados de diagnóstico e caracterização dos Equipamentos Públicos de Segurança Alimentar e Nutricional",
        link: ""
      },
      {
        tipo: "Produção técnica",
        nome: "Documento técnico contendo resultados de coleta de dados sobre a gestão financeira das Cozinhas Comunitárias e Restaurantes Populares no Brasil",
        link: ""
      },
      {
        tipo: "Produção técnica",
        nome: "Documento técnico contendo resultados de estratégias de sustentabilidade financeira com gestores de Cozinhas Comunitárias e Restaurantes Populares",
        link: ""
      },
      {
        tipo: "Produção técnica",
        nome: "Documento Técnico contendo Proposta de sustentabilidade financeira e estratégias de comercialização baseadas na alimentação adequada e saudável nas Cozinhas Comunitárias e Restaurantes Populares",
        link: ""
      }
    ]
  },
  {
    nome: "Natalia Tenuta Kuchenbecker do Amaral",
    image: "/assets/team1.png",
    materiais: [
      {
        tipo: "Artigo",
        nome: "Bancos de alimentos no Brasil: doação, funcionamento e avaliação de bancos de alimentos brasileiros",
        link: "https://www.scielo.br/j/rn/a/7b7b7b7b7b7b7b7b7b7b7b7b7b7b7b7b7b7b7/?lang=en"
      },
      {
        tipo: "Artigos completos publicados em periódicos",
        nome: "Ajustes e alternativas para a operacionalização de alimentos públicos da região metropolitana de Belo Horizonte, Minas Gerais, Brasil",
        link: "https://lattes.cnpq.br/477.1/4/2/6/1506/"
      },
      {
        tipo: "Artigos completos publicados em periódicos",
        nome: "Perfil nutricional dos usuários de bancos de alimentos públicos da região metropolitana de Belo Horizonte, Minas Gerais, Brasil",
        link: "https://www.mdpi.com/1661-6499/21/6/1225"
      },
      {
        tipo: "Artigos completos publicados em periódicos",
        nome: "Análises dos alimentos recebidos: uma revisão de literatura nacional",
        link: "https://dx.doi.org/10.3390/nu12061584?utm_source=researcher_app&utm_medium=referral&utm_campaign=RESR_MRKT_Researcher_inbound"
      },
      {
        tipo: "Capítulos de livros publicados",
        nome: "AÇÕES DE ADAPTAÇÃO E MITIGAÇÃO NA GESTÃO DE UM BANCO DE ALIMENTOS. CAMINHOS PARA A SEGURANÇA ALIMENTAR E NUTRICIONAL, NUTRIÇÃO CLÍNICA METABÓLICA E ESPORTIVA",
        link: "https://dx.doi.org/10.46897/978-65-86821-13-8.02d.4743?lang=en"
      },
      {
        tipo: "Capítulos de livros publicados",
        nome: "Ações de promoção da saúde coletiva. Perspectivas de saúde coletiva no Vale do Jequitinhonha: temas, debates e reflexões",
        link: "https://aedetecra.com.br/revista/perspectivas-de-saude-coletiva/"
      },
      {
        tipo: "Produção técnica",
        nome: "Documento Técnico contendo resultados de monitoramento e avaliação de bancos de alimentos.",
        link: ""
      },
      {
        tipo: "Produção técnica",
        nome: "Documento Técnico contendo resultados de avaliação de perdas e desperdícios de alimentos.",
        link: ""
      },
      {
        tipo: "Produção técnica",
        nome: "Documento Técnico contendo resultados de estratégias de sustentabilidade financeira com gestores de bancos de alimentos.",
        link: ""
      },
      {
        tipo: "Produção técnica",
        nome: "Documento Técnico contendo resultados de estratégias de educação alimentar e nutricional.",
        link: ""
      },
      {
        tipo: "Trabalhos técnicos",
        nome: "Análise instrumental dos bancos de alimentos.",
        link: ""
      },
      {
        tipo: "Dissertação",
        nome: "Análise instrumental dos bancos de alimentos de Minas Gerais",
        link: "https://repositorio.ufjf.em.br/bitstream/2c2-0a67f0-5f64-4b39-a5f6-71b0b57afea1/"
      },
      {
        tipo: "Tese + Destaque",
        nome: "BANCOS DE ALIMENTOS BRASILEIROS: Contribuições para a Segurança Alimentar e Nutricional. Redução de Perdas e Desperdício de Alimentos e Educação Alimentar e Nutricional",
        link: ""
      }
    ]
  },
  {
    nome: "Isabela Matos",
    image: "/assets/team5.png",
    materiais: [] // Sem materiais publicados
  },
  {
    nome: "Antônio Real",
    image: "/assets/team6.png",
    materiais: [] // Sem materiais publicados
  }
];

const Colaboradores = () => {
  const [expanded, setExpanded] = useState<number | null>(null);

  const handleToggle = (idx: number) => {
    setExpanded(expanded === idx ? null : idx);
  };

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
            {colaboradores.map((colaborador, idx) => {
              const isOpen = expanded === idx;
              return (
                <Card
                  key={idx}
                  className={`h-full flex flex-col items-center text-center cursor-pointer transition-all duration-300 ${isOpen ? "shadow-2xl" : "shadow-md"}`}
                  onClick={() => handleToggle(idx)}
                >
                  <CardHeader className="flex flex-col items-center">
                    {colaborador.image && (
                      <img
                        src={colaborador.image}
                        alt={colaborador.nome}
                        className="w-32 h-32 object-cover rounded-full mb-4 border-4 border-notria-primary"
                      />
                    )}
                    <CardTitle className="font-poppins text-notria-primary flex items-center gap-2">
                      {colaborador.nome}
                      {isOpen ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
                    </CardTitle>
                  </CardHeader>
                  {isOpen && (
                    <CardContent className="flex-1 flex flex-col w-full">
                      <div className="mb-6">
                        <h4 className="font-poppins font-semibold text-notria-primary mb-3 flex items-center gap-2 justify-center">
                          Materiais
                        </h4>
                        {colaborador.materiais.length === 0 ? (
                          <p className="text-gray-500 text-sm text-center">Nenhum material publicado até o momento.</p>
                        ) : (
                          <div className="space-y-3">
                            {colaborador.materiais.map((material, index) => (
                              <div key={index} className="border-l-3 border-notria-secondary pl-3 text-left">
                                <h5 className="font-medium text-sm text-notria-primary mb-1">
                                  {material.tipo}
                                </h5>
                                <p className="text-xs text-gray-600 mb-1">
                                  {material.nome}
                                </p>
                                {material.link && (
                                  <Button
                                    variant="ghost"
                                    size="sm"
                                    className="text-notria-secondary hover:text-notria-secondary/80 p-0 h-auto"
                                    asChild
                                  >
                                    <a href={material.link} target="_blank" rel="noopener noreferrer">
                                      <ExternalLink size={14} className="mr-1" />
                                      Acessar material
                                    </a>
                                  </Button>
                                )}
                              </div>
                            ))}
                          </div>
                        )}
                      </div>
                    </CardContent>
                  )}
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Colaboradores;