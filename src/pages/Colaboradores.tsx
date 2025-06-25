import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ExternalLink, User, BookOpen, ChevronDown, ChevronUp } from "lucide-react";
import SEO from "@/components/SEO";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const colaboradores = [
  {
    nome: "Natalia Tenuta",
    image: "/assets/team1.png",
    materiais: [
      {
        tipo: "Artigo",
        nome: "Bancos de alimentos brasileiros: como avaliá-los? (2024).",
        link: "https://www.scielo.br/j/csc/a/JkrmcT8nRhgVdKjcKPk65MH/"
      },
      {
        tipo: "Artigos completos publicados em periódicos",
        nome: "A lógica da intervenção e dos indicadores de monitoramento e avaliação de bancos de alimentos brasileiros (2023).",
        link: "https://dx.doi.org/10.5771/vi/1426.51056"
      },
      {
        tipo: "Artigos completos publicados em periódicos",
        nome: "Perfil nutricional dos alimentos doados por bancos de alimentos públicos da região metropolitana de Belo Horizonte, Minas Gerais, Brasil (2022)",
        link: ""
      },
      {
        tipo: "Artigos completos publicados em periódicos",
        nome: "Bancos de Alimentos Brasileiros: Panorama e Perspectivas (2022)",
        link: "https://www.mdpi.com/1660-4601/18/32/12598"
      },
      {
        tipo: "Artigos completos publicados em periódicos",
        nome: "Avaliação dos Bancos de Alimentos de Minas Gerais no combate às perdas e desperdícios de alimentos (2021).",
        link: "https://dx.doi.org/10.20396/rbi.v20i0.92865405"
      },
      {
        tipo: "Artigos completos publicados em periódicos",
        nome: "A eficácia dos Bancos de Alimentos de Minas Gerais no combate às perdas e desperdícios de alimentos (2017).",
        link: "https://periodicos.sbu.unicamp.br/ojs/index.php/san/article/view/8649720"
      },
      {
        tipo: "Livros publicados/organizados ou edições",
        nome: "Perspectivas da saúde coletiva no Vale do Jequitinhonha: temas, debates e reflexões (2021).",
        link: "https://dx.doi.org/10.46898/rb.2020%20acd974f9-aa98-4211-87ad-d1000c26909"
      },
      {
        tipo: "Capítulos de livros publicados",
        nome: "A segurança dos alimentos brasileiros. In: Ednilson Sergio Ramalho de Souza. (Org.). Pesquisas em Temas de Ciências da Saúde (2023).",
        link: "https://editorascience.com.br/livros/ebook0041"
      },
      {
        tipo: "Capítulos de livros publicados",
        nome: "AVALIAÇÃO E ADAPTAÇÃO DA ESTRUTURA FÍSICA DE UM BANCO DE ALIMENTOS: CAMINHOS PARA A SEGURANÇA ALIMENTAR E NUTRICIONAL. NUTRIÇÃO CLÍNICA METABÓLICA E ESPORTIVA (2022).",
        link: "https://editorascience.com.br/livros/ebook0041"
      },
      {
        tipo: "Capítulos de livros publicados",
        nome: "Segurança Alimentar e Nutricional. Perspectivas da Saúde Coletiva. Perspectivas da saúde coletiva no Vale do Jequitinhonha: temas, debates e reflexões (2020).",
        link: "https://aedetora.com.br/produto/perspectivas-da-saude-coletiva-no-vale-do-jequitinhonha-temas-debates-e-reflexoes/"
      },
      {
        tipo: "Produção técnica",
        nome: "Matriz de Fortalecimento da Rede Mesa Brasil Sesc (2020).",
        link: ""
      },
      {
        tipo: "Produção técnica",
        nome: "Documento Técnico contendo proposta de alinhamento de conceitos e processos no âmbito da Rede Brasileira de Bancos de Alimentos (2019).",
        link: ""
      },
      {
        tipo: "Produção técnica",
        nome: "Documento Técnico contendo proposta de revisão e atualização dos materiais educativos para os bancos de alimentos da Rede Brasileira de Bancos de Alimentos (Guia para Boas Práticas para Bancos de Alimentos) (2018).",
        link: ""
      },
      {
        tipo: "Produção técnica",
        nome: "Documento Técnico contendo subsídios para a Carta de Princípios do Comitê Gestor com vistas a subsidiar as negociações estratégicas com agentes externos à Rede Brasileira de Bancos de Alimentos (2018).",
        link: ""
      },
      {
        tipo: "Produção técnica",
        nome: "Documento Técnico contendo proposta de metodologia para o monitoramento das ações previstas na 'Estratégia Intersetorial de Prevenção e Controle da Obesidade', incluindo a elaboração de instrumento(s) por eixo e forma de aplicação no âmbito das CAISANs estaduais (2017).",
        link: ""
      },
      {
        tipo: "Produção técnica",
        nome: "Documento Técnico contendo análise e avaliação das ações de prevenção e controle da obesidade implantadas no âmbito estadual, com descrição das ações que se destacam e recomendações de aprimoramento (2017).",
        link: ""
      },
      {
        tipo: "Produção técnica",
        nome: "Documento Técnico contendo proposta de conteúdo para elaboração de material de sensibilização, incentivo e aperfeiçoamento das ações de prevenção e controle da obesidade, bem como as etapas metodológicas para mobilização das CAISANs estaduais (2017).",
        link: ""
      },
      {
        tipo: "Produção técnica",
        nome: "Documento técnico contendo proposta de metodologia para o monitoramento das ações previstas na 'Estratégia Intersetorial de Prevenção e Controle da Obesidade', incluindo a elaboração de instrumento(s) por eixo e forma de aplicação no âmbito das CAISANs estaduais (2017).",
        link: ""
      },
      {
        tipo: "Produção técnica",
        nome: "Documento Técnico contendo proposta de material e ações para o fomento e incentivo às ações de Educação Alimentar e Promoção da Alimentação Adequada e Saudável (2017).",
        link: ""
      },
      {
        tipo: "Produção técnica",
        nome: "Documento Técnico com sistematização da necessidade dos estados e municípios no que se refere à realização de ações de Educação Alimentar e Nutricional e Promoção da Alimentação Adequada e Saudável (2015).",
        link: ""
      },
      {
        tipo: "Produção técnica",
        nome: "Documento Técnico contendo proposta metodológica para o fomento e incentivo à realização de ações de Educação Alimentar e Promoção da Alimentação Adequada e Saudável nos estados e municípios por meio das Câmaras Intersetoriais de Segurança Alimentar e Nutricional Estatuais (2015).",
        link: ""
      },
      {
        tipo: "Produção técnica",
        nome: "Documento Técnico contendo plano de ação voltado aos municípios para o fomento de ações de Educação Alimentar e Promoção da Alimentação Adequada e Saudável (2014).",
        link: ""
      },
      {
        tipo: "Trabalhos técnicos",
        nome: "Relatório Técnico-Científico - Avaliação Nacional de Bancos de Alimentos (2022).",
        link: ""
      },
      {
        tipo: "Trabalhos técnicos",
        nome: "Relatório Final - Avaliação Nacional de Bancos de Alimentos (2021).",
        link: ""
      },
      {
        tipo: "Trabalhos técnicos",
        nome: "Relatório Preliminar - Avaliação Nacional de Bancos de Alimentos (2020).",
        link: ""
      },
      {
        tipo: "Trabalhos técnicos",
        nome: "Relatório Preliminar - Avaliação Nacional de Bancos de Alimentos (2019).",
        link: ""
      },
      {
        tipo: "Trabalhos técnicos",
        nome: "Folder - Doadores Parceiros de Bancos de Alimentos (2019).",
        link: ""
      },
      {
        tipo: "Trabalhos técnicos",
        nome: "Mapa Operacional para Bancos de Alimentos (2019).",
        link: ""
      },
      {
        tipo: "Dissertação",
        nome: "Análise instrumental da situação dos Bancos de Alimentos de Minas Gerais",
        link: "https://repositorio.ufjm.edu.br/items/22c04d70-5f6d-4a39-ab5f-71b80e57e5e1"
      },
      {
        tipo: "Tese - Destaque",
        nome: "BANCOS DE ALIMENTOS BRASILEIROS: Contribuições para a Segurança Alimentar e Nutricional. Redução de Perdas e Desperdícios de Alimentos e Educação Alimentar e Nutricional",
        link: ""
      }
    ]
  },
  {
    nome: "Juliana Theodora",
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
    nome: "Ana Mattos",
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
  const [selectedColaborador, setSelectedColaborador] = useState<number | null>(null);

  return (
    <div className="min-h-screen">
      <SEO title="Nossa Equipe" description="Conheça os especialistas que fazem a diferença na segurança alimentar e nutricional" />
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

      {/* Main Content Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row gap-8">
            {/* Sidebar */}
            <div className="w-full md:w-1/3 lg:w-1/4">
              <Card className="sticky top-4">
                <CardHeader>
                  <CardTitle className="font-poppins text-notria-primary">
                    Colaboradores
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    {colaboradores.map((colaborador, idx) => (
                      <Button
                        key={idx}
                        variant={selectedColaborador === idx ? "default" : "ghost"}
                        className={`w-full justify-start ${
                          selectedColaborador === idx
                            ? "bg-notria-primary text-white"
                            : "hover:bg-notria-primary/10"
                        }`}
                        onClick={() => setSelectedColaborador(idx)}
                      >
                        <User size={16} className="mr-2" />
                        {colaborador.nome}
                      </Button>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Colaborador Details */}
            <div className="flex-1">
              {selectedColaborador === null ? (
                <Card className="h-full flex items-center justify-center p-8">
                  <div className="text-center text-gray-500">
                    <User size={48} className="mx-auto mb-4" />
                    <p className="text-lg">Selecione um colaborador para ver seus detalhes</p>
                  </div>
                </Card>
              ) : (
                <Card className="h-full">
                  <CardHeader className="flex flex-col items-center">
                    {colaboradores[selectedColaborador].image && (
                      <img
                        src={colaboradores[selectedColaborador].image}
                        alt={colaboradores[selectedColaborador].nome}
                        className="w-48 h-48 object-cover rounded-full mb-4 border-4 border-notria-primary"
                      />
                    )}
                    <CardTitle className="font-poppins text-notria-primary text-2xl">
                      {colaboradores[selectedColaborador].nome}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="mb-6">
                      <h4 className="font-poppins font-semibold text-notria-primary mb-3 flex items-center gap-2">
                        <BookOpen size={20} />
                        Materiais
                      </h4>
                      {colaboradores[selectedColaborador].materiais.length === 0 ? (
                        <p className="text-gray-500 text-center">Nenhum material publicado até o momento.</p>
                      ) : (
                        <div className="space-y-4">
                          {colaboradores[selectedColaborador].materiais.map((material, index) => (
                            <div key={index} className="border-l-4 border-notria-secondary pl-4">
                              <h5 className="font-medium text-notria-primary mb-1">
                                {material.tipo}
                              </h5>
                              <p className="text-gray-600 mb-2">
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
                </Card>
              )}
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Colaboradores;