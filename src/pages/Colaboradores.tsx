import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ExternalLink, User, BookOpen, ChevronDown, ChevronUp, FileText } from "lucide-react";
import SEO from "@/components/SEO";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const colaboradores = [
  {
    nome: "Natalia Tenuta",
    image: "/assets/team1.png",
    curriculo: "Responsável pela gestão estratégica e operacional da Notriá; supervisiona a execução dos projetos e consultorias; atua na articulação com clientes, parceiros e instituições e lidera o desenvolvimento de novos serviços e oportunidades de negócio. Nutricionista, especialista em Gestão de Alimentos e Alimentação Coletiva, mestre em Saúde, Sociedade e Ambiente e doutora em Saúde Coletiva. Atuou como nutricionista e responsável técnica de bancos de alimentos mineiros. Foi consultora da Organização das Nações Unidas para Agricultura e Alimentação (FAO/ONU) e da UNESCO com atuação na Coordenação-Geral de Educação Alimentar e Nutricional do Ministério do Desenvolvimento Social (CGEAN/MDS) e na Coordenação-Geral de Equipamentos Públicos do Ministério da Cidadania (CGEP/MC). Atuou como assessora do Mesa Brasil Sesc. Foi docente temporária do Departamento de Nutrição e docente convidada no curso de pós-graduação Lato sensu em Educação em Direitos Humanos da Universidade Federal dos Vales do Jequitinhonha e Mucuri (UFVJM). Atuou como Coordenadora-Geral de Equipamentos Públicos de Segurança Alimentar e Nutricional do Ministério do Desenvolvimento e Assistência Social, Família e Combate à Fome. Possui experiência profissional e em pesquisas na área de segurança alimentar e nutricional, atuando, principalmente, nos seguintes temas: perdas e desperdícios de alimentos, bancos de alimentos, alimentação adequada e saudável e educação alimentar e nutricional.",
    materiais: [
      {
        tipo: "Artigos completos publicados em periódicos",
        nome: "Bancos de alimentos brasileiros: como avaliá-los? (2024)",
        link: "https://www.scielo.br/j/csc/a/JrkmcTBnRhgVKgNKcPk65MH/"
      },
      {
        tipo: "Artigos completos publicados em periódicos",
        nome: "A lógica da intervenção e os indicadores de monitoramento e avaliação de bancos de alimentos brasileiros (2023)",
        link: "https://dx.doi.org/10.9771/ns.v14i26.51056"
      },
      {
        tipo: "Artigos completos publicados em periódicos",
        nome: "Perfil nutricional dos alimentos doados por bancos de alimentos públicos da região metropolitana de Belo Horizonte, Minas Gerais, Brasil (2022)",
        link: ""
      },
      {
        tipo: "Artigos completos publicados em periódicos",
        nome: "Bancos de Alimentos Brasileiros: Panorama e Perspectivas (2022)",
        link: "https://www.mdpi.com/1660-4601/18/23/12598"
      },
      {
        tipo: "Artigos completos publicados em periódicos",
        nome: "Avaliação dos bancos de alimentos: uma revisão integrativa da literatura nacional (2021)",
        link: "https://dx.doi.org/10.20396/san.v28i00.%208665406"
      },
      {
        tipo: "Artigos completos publicados em periódicos",
        nome: "A eficácia dos Bancos de Alimentos de Minas Gerais no combate às perdas e desperdícios de alimentos (2017)",
        link: "https://periodicos.sbu.unicamp.br/ojs/index.php/san/article/view/8649720"
      },
      {
        tipo: "Livros publicados",
        nome: "Perspectivas da saúde coletiva no Vale do Jequitinhonha: temas, debates e reflexões (2021)",
        link: ""
      },
      {
        tipo: "Capítulos de livros publicados",
        nome: "A segurança dos alimentos nos bancos de alimentos brasileiros. In: Ednilson Sergio Ramalho de Souza. (Org.). Pesquisas em Temas de Ciências da Saúde (2023)",
        link: "https://dx.doi.org/10.46898/rfb.%20%20acd749f9-a0a8-4211-874a-d1000c2690f9"
      },
      {
        tipo: "Capítulos de livros publicados",
        nome: "AVALIAÇÃO E ADAPTAÇÃO DA ESTRUTURA FÍSICA DE UM BANCO DE ALIMENTOS: CAMINHOS PARA A SEGURANÇA ALIMENTAR E NUTRICIONAL. NUTRIÇÃO CLÍNICA METABÓLICA E ESPORTIVA (2022)",
        link: "https://editorascience.com.br/livros/ebook0014/"
      },
      {
        tipo: "Capítulos de livros publicados",
        nome: "Segurança Alimentar e Nutricional para a Promoção e a Proteção da Saúde Coletiva. Perspectivas da saúde coletiva no Vale do Jequitinhonha: temas, debates e reflexões (2020)",
        link: "https://aeditora.com.br/produto/perspectivas-da-saude-coletiva-no-vale-do-jequitinhonha-temas-debates-e-reflexoes/"
      },
      {
        tipo: "Trabalhos técnicos",
        nome: "Matriz de Fortalecimento da Rede Mesa Brasil Sesc (2020)",
        link: ""
      },
      {
        tipo: "Trabalhos técnicos",
        nome: "Documento Técnico contendo proposta de alinhamento de conceitos e processos no âmbito da Rede Brasileira de Bancos de Alimentos (2019)",
        link: ""
      },
      {
        tipo: "Trabalhos técnicos",
        nome: "Documento Técnico contendo proposta de revisão e atualização dos materiais educativos para os bancos de alimentos da Rede Brasileira de Bancos de Alimentos (Guia para Boas Práticas para Bancos de Alimentos) (2018)",
        link: ""
      },
      {
        tipo: "Trabalhos técnicos",
        nome: "Documento Técnico contendo subsídios para a Carta de Princípios do Comitê Gestor com vistas a subsidiar as negociações estratégicas com agentes externos à Rede Brasileira de Bancos de Alimentos (2018)",
        link: ""
      },
      {
        tipo: "Trabalhos técnicos",
        nome: "Documento Técnico contendo proposta de metodologia para o monitoramento das ações previstas na 'Estratégia Intersetorial de Prevenção e Controle da Obesidade', incluindo a elaboração de instrumento(s) por eixo e forma de aplicação no âmbito das CAISANs estaduais (2017)",
        link: ""
      },
      {
        tipo: "Trabalhos técnicos",
        nome: "Documento Técnico contendo análise e avaliação das ações de prevenção e controle da obesidade implantadas no âmbito estadual, com descrição das ações que se destacam e recomendações de aprimoramento (2017)",
        link: ""
      },
      {
        tipo: "Trabalhos técnicos",
        nome: "Documento Técnico contendo proposta de conteúdo para elaboração de material de sensibilização, incentivo e aperfeiçoamento das ações de prevenção e controle da obesidade, bem como as etapas metodológicas para mobilização das CAISANs estaduais (2017)",
        link: ""
      },
      {
        tipo: "Trabalhos técnicos",
        nome: "Documento técnico contendo proposta de metodologia para o monitoramento das ações previstas na 'Estratégia Intersetorial de Prevenção e Controle da Obesidade', incluindo a elaboração de instrumento(s) por eixo e forma de aplicação no âmbito das CAISANs estaduais (2017)",
        link: ""
      },
      {
        tipo: "Trabalhos técnicos",
        nome: "Documento Técnico contendo proposta de material e ações para o fomento e incentivo às ações de Educação Alimentar e Promoção da Alimentação Adequada e Saudável (2017)",
        link: ""
      },
      {
        tipo: "Trabalhos técnicos",
        nome: "Documento Técnico com sistematização da necessidade dos estados e municípios no que se refere à realização de ações de Educação Alimentar e Nutricional e Promoção da Alimentação Adequada e Saudável (2015)",
        link: ""
      },
      {
        tipo: "Trabalhos técnicos",
        nome: "Documento Técnico contendo proposta metodológica para o fomento e incentivo à realização de ações de Educação Alimentar e Promoção da Alimentação Adequada e Saudável nos estados e municípios por meio das Câmaras Intersetoriais de Segurança Alimentar e Nutricional Estaduais (2015)",
        link: ""
      },
      {
        tipo: "Trabalhos técnicos",
        nome: "Documento Técnico contendo plano de ação voltado aos municípios para o fomento de ações de Educação Alimentar e Promoção da Alimentação Adequada e Saudável (2014)",
        link: ""
      },
      {
        tipo: "Trabalhos técnicos",
        nome: "Relatório Técnico-Científico - Avaliação Nacional de Bancos de Alimentos (2022)",
        link: ""
      },
      {
        tipo: "Trabalhos técnicos",
        nome: "Relatório Final - Avaliação Nacional de Bancos de Alimentos (2021)",
        link: ""
      },
      {
        tipo: "Trabalhos técnicos",
        nome: "Relatório Preliminar - Avaliação Nacional de Bancos de Alimentos (2020)",
        link: ""
      },
      {
        tipo: "Trabalhos técnicos",
        nome: "Relatório Preliminar - Avaliação Nacional de Bancos de Alimentos (2019)",
        link: ""
      },
      {
        tipo: "Trabalhos técnicos",
        nome: "Folder - Doadores Parceiros de Bancos de Alimentos (2019)",
        link: ""
      },
      {
        tipo: "Trabalhos técnicos",
        nome: "Mapa Operacional para Bancos de Alimentos (2019)",
        link: ""
      },
      {
        tipo: "Dissertação",
        nome: "Análise instrumental da situação dos Bancos de Alimentos de Minas Gerais",
        link: "https://repositorio.ufvjm.edu.br/items/22c04d70-5f6d-4a39-abf5-71b80e57e5e1"
      },
      {
        tipo: "Tese - Destaque",
        nome: "BANCOS DE ALIMENTOS BRASILEIROS: Contribuições para a Segurança Alimentar e Nutricional, Redução de Perdas e Desperdícios de Alimentos e Educação Alimentar e Nutricional (2024)",
        link: ""
      },
      {
        tipo: "Destaque",
        nome: "Menção Honrosa pela apresentação na III Semana de Integração Ensino, Pesquisa e Extensão, Universidade Federal dos Vales do Jequitinhonha e Mucuri",
        link: ""
      }
    ]
  },
  {
    nome: "Juliana Theodora",
    image: "/assets/team2.png",
    curriculo: "Coordena o desenvolvimento de metodologias aplicadas à SAN; supervisiona a produção de relatórios técnicos, pareceres e estudos científicos; atua na inovação e aprimoramento das abordagens utilizadas pela consultoria e realiza interface entre pesquisa e implementação de políticas públicas. Nutricionista, Doutora, Mestre e Bacharel em Nutrição. Especialização pelo Programa de Residência Multiprofissional em Saúde da Família. Foi consultora da Organização das Nações Unidas para Agricultura e Alimentação (FAO/ONU) e do Instituto Interamericano de Cooperação para a Agricultura (IICA) na Coordenação de Equipamentos Públicos do Ministério do Desenvolvimento e Assistência Social, Família e Combate à Fome (CGESAN/MDS). Atuou como assessora do Centro Colaborador em Alimentação e Nutrição do Escolar (CECANE/SC). Possui experiência em Gestão de Saúde como Diretora Executiva de Saúde. Atuou como professora nos Cursos de Nutrição na UniSociesc de Jaraguá do Sul/SC e dos cursos de Nutrição e Enfermagem do Centro Universitário do Cerrado Patrocínio/MG (UNICERP). E atuou como conselheira do Conselho Estadual de Segurança Alimentar e Nutricional de Santa Catarina (CONSEA/SC) e como revisora do novo Guia Alimentar para Crianças Menores de 2 anos, na etapa das Oficinas Estaduais em Santa Catarina (2018). Possui experiência profissional, técnica e como pesquisadora na área de Políticas Públicas de Alimentação e Nutrição e Segurança Alimentar e Nutricional, atuando, principalmente, nos seguintes temas: Equipamentos Públicos de Segurança Alimentar e Nutricional (Restaurantes Populares, Cozinhas Comunitárias, Cozinhas Solidárias), Alimentação Adequada e Saudável, Educação Alimentar e Nutricional, Alimentação Escolar e Atuação do Nutricionista na Atenção Básica à Saúde.",
    materiais: [
      {
        tipo: "Artigos completos publicados em periódicos",
        nome: "A fome e a raiva (e o vírus) é coisas dos home\": reflexões sobre participação social em tempos de Covid-19 (2021)",
        link: "https://www.scielo.br/j/rn/a/7h6qDhWr9q88d34kSGq7Dkf/?lang=en"
      },
      {
        tipo: "Artigos completos publicados em periódicos",
        nome: "Restaurantes populares brasileiros: avaliação no âmbito da segurança alimentar e nutricional (2020)",
        link: "https://www.scielo.br/j/rn/a/6bNVNqPB7szGJ6NQpnb7DYx/?lang=en"
      },
      {
        tipo: "Artigos completos publicados em periódicos",
        nome: "Restaurantes Populares enquanto promotores da realização do Direito Humano à Alimentação Adequada: proposição de um modelo avaliativo (2019)",
        link: "https://www.scielo.br/j/rn/a/WSyRPMspZRRGK5qQ53YsMjd/?lang=en"
      },
      {
        tipo: "Artigos completos publicados em periódicos",
        nome: "Restaurantes populares brasileiros: avaliação no âmbito da segurança alimentar e nutricional (2020)",
        link: "https://www.scielo.br/j/rn/a/6bNVNqPB7szGJ6NQpnb7DYx/?lang=en"
      },
      {
        tipo: "Artigos completos publicados em periódicos",
        nome: "Mercado de trabalho do nutricionista: 80 anos de história (2019)",
        link: "https://www.scielo.br/j/rn/a/F5hBFWDCgrkdg6YJRpQNLdS/?lang=en"
      },
      {
        tipo: "Artigos completos publicados em periódicos",
        nome: "Revisão teórica sobre os Equipamentos Públicos de Segurança Alimentar e Nutricional (2018)",
        link: "https://www.scielo.br/j/rn/a/CLRSgm46rJnDwdFkMVhDwkk/?lang=en"
      },
      {
        tipo: "TESE Destaque",
        nome: "Restaurantes Populares e Segurança Alimentar e Nutricional nas capitais brasileiras: estudo de avaliação e de associação com características contextuais",
        link: ""
      },
      {
        tipo: "Livro publicado",
        nome: "Ações intersetoriais na prevenção e controle do sobrepeso e obesidade (2020)",
        link: ""
      },
      {
        tipo: "Trabalhos técnicos",
        nome: "Documento técnico contendo metodologia a ser utilizada para diagnóstico e caracterização dos Equipamentos Públicos de Segurança Alimentar e Nutricional (2024)",
        link: ""
      },
      {
        tipo: "Trabalhos técnicos",
        nome: "Documento técnico contendo mapeamento atualizado e resultados preliminares de diagnóstico e caracterização dos Equipamentos Públicos de Segurança Alimentar e Nutricional (2024)",
        link: ""
      },
      {
        tipo: "Trabalhos técnicos",
        nome: "Documento técnico contendo análise do funcionamento das Cozinhas Comunitárias e Restaurantes Populares mantidos pelo poder público no Brasil (2023)",
        link: ""
      },
      {
        tipo: "Trabalhos técnicos",
        nome: "Documento técnico contendo análise do funcionamento das Cozinhas Comunitárias e Restaurantes Populares mantidos pelo poder público no Brasil (2023)",
        link: ""
      },
      {
        tipo: "Trabalhos técnicos",
        nome: "Documento técnico contendo estudos de caso sobre a gestão financeira das Cozinhas Comunitárias e Restaurantes Populares no Brasil (2023)",
        link: ""
      },
      {
        tipo: "Trabalhos técnicos",
        nome: "Documento técnico contendo subsídios para discussão de estratégias de sustentabilidade financeira com gestores de Cozinhas Comunitárias e Restaurantes Populares (2023)",
        link: ""
      },
      {
        tipo: "Trabalhos técnicos",
        nome: "Documento Técnico contendo Propostas de sustentabilidade financeira e estratégias de comercialização baseadas na alimentação adequada e saudável nas Cozinhas Comunitárias e Restaurantes Populares (2023)",
        link: ""
      }
    ]
  },
  {
    nome: "Milena Martins",
    image: "/assets/team3.png",
    curriculo: "Desenvolve e coordena pesquisas na área de segurança alimentar e nutricional; responsável pela elaboração de diagnósticos e análises sobre políticas públicas e impacto social; atua na assessoria técnica para organizações governamentais, privadas e do terceiro setor e participa da construção de estratégias baseadas em evidências para a consultoria. Nutricionista, Mestra e Doutoranda pelo Programa de Pós-graduação em Nutrição. É integrante e fundadora do grupo de pesquisa e extensão Teia de Articulação pelo Fortalecimento da Segurança Alimentar e Nutricional (TearSAN/UFSC). Atualmente é bolsista do projeto de extensão \"Qualificação do processo formativo dos atores envolvidos no Sistema Nacional de Segurança Alimentar e Nutricional\", financiado pelo Ministério de Desenvolvimento e Assistência Social, Família e Combate à Fome (MDS). Apresenta experiência na área de Segurança Alimentar e Nutricional, com ênfase no Sistema e na Política Nacional de Segurança Alimentar e Nutricional.",
    materiais: [
      {
        tipo: "Artigos completos publicados em periódicos",
        nome: "Recurso público na agenda brasileira da Segurança Alimentar e Nutricional de 2000 a 2022 (2024)",
        link: "https://revistas.usp.br/rsp/article/view/232757"
      },
      {
        tipo: "Artigos completos publicados em periódicos",
        nome: "SEGURANÇA ALIMENTAR E NUTRICIONAL: UMA ANÁLISE SOBRE O ARCABOUÇO LEGISLATIVO DOS ESTADOS BRASILEIROS (2025)",
        link: "https://seer.ufu.br/index.php/hygeia/article/view/72542"
      },
      {
        tipo: "Artigos completos publicados em periódicos",
        nome: "Construcción participativa de la agenda de seguridad alimentaria en Brasil: Intereses y prioridades desde la redemocratización hasta el desmantelamiento institucional (2023)",
        link: "https://www.scielo.cl/scielo.php?script=sci_arttext&pid=S0717-75182023000100027&lng=en&nrm=iso&tlng=en"
      },
      {
        tipo: "Artigos completos publicados em periódicos",
        nome: "Popular Restaurants as strategies to fight hunger and to promote Food and Nutrition Security: an integrative review of scientific publications in the period 2011-2021 (2023)",
        link: "https://www.scielo.br/j/rn/a/S79Dh97RVYntNRTtVjBSSjS/?lang=en"
      },
      {
        tipo: "Artigos completos publicados em periódicos",
        nome: "Sistema Nacional de Segurança Alimentar e Nutricional: quais são as semelhanças no processo de descentralização? (2023)",
        link: "https://www.scielo.br/j/csp/a/M9zb7YYHYNHyHGVjF87wb6z/?lang=en"
      },
      {
        tipo: "Artigos completos publicados em periódicos",
        nome: "Entre a riqueza e a fome: condições para a promoção da segurança alimentar e nutricional nas capitais do Sul do Brasil (2023)",
        link: "https://www.scielo.br/j/rn/a/xdD7bvF3WtNhvgMCyVrD7Mz/?lang=en"
      },
      {
        tipo: "Artigos completos publicados em periódicos",
        nome: "Fome no estado de Santa Catarina: evolução, raízes e perspectivas em período de múltiplas crises (2022)",
        link: "https://ojs.sites.ufsc.br/index.php/revistanecat/article/view/5609"
      },
      {
        tipo: "Artigos completos publicados em periódicos",
        nome: "Descentralização normativa da agenda de segurança alimentar e nutricional: estudo descritivo das legislações publicadas nas capitais brasileiras (2022)",
        link: "https://www.scielo.br/j/rn/a/FTmNK6SV7fTr98ZZPDpyLMx/?lang=en"
      },
      {
        tipo: "Artigos completos publicados em periódicos",
        nome: "Qual a situação de segurança alimentar e nutricional dos municípios catarinenses? Resultados de uma avaliação de múltiplas dimensões (2020)",
        link: "https://www.scielo.br/j/rn/a/SGCqS3dwxdW9Rwt84jfSgSz/?lang=en"
      },
      {
        tipo: "Artigos completos publicados em periódicos",
        nome: "Adequação normativa dos planos estaduais de segurança alimentar e nutricional no Brasil (2028)",
        link: "https://www.scielo.br/j/csp/a/G8KS3cCv6c6hgmcpqGSm8fd/?lang=pt"
      },
      {
        tipo: "Trabalhos técnicos",
        nome: "Compartilhando de Saberes e Experiências em Segurança Alimentar e Nutricional - Oficina realizada em Blumenau/SC (2017)",
        link: ""
      },
      {
        tipo: "Trabalhos técnicos",
        nome: "Compartilhando de Saberes e Experiências em Segurança Alimentar e Nutricional - Oficina da Região Serrana/SC (2017)",
        link: ""
      },
      {
        tipo: "Trabalhos técnicos",
        nome: "Compartilhando de Saberes e Experiências em Segurança Alimentar e Nutricional - Oficina da Região Oeste/SC (2017)",
        link: ""
      },
      {
        tipo: "Trabalhos técnicos",
        nome: "Compartilhando de Saberes e Experiências em Segurança Alimentar e Nutricional - Oficina da Região Meio Oeste/SC (2017)",
        link: ""
      },
      {
        tipo: "Trabalhos técnicos",
        nome: "Oficinas Regionais de Fortalecimento do SISAN no Estado de Santa Catarina: Relatório Geral (2017)",
        link: ""
      },
      {
        tipo: "Trabalhos técnicos",
        nome: "Relatório de Monitoramento e Avaliação do Plano Estadual de Segurança Alimentar e Nutricional de Santa Catarina (2017)",
        link: ""
      },
      {
        tipo: "Trabalhos técnicos",
        nome: "Caderno II: Compartilhando de Saberes e Experiências em Segurança Alimentar e Nutricional - Oficina da Região Sul/SC (2017)",
        link: ""
      },
      {
        tipo: "Trabalhos técnicos",
        nome: "Conhecimentos e Saberes em Segurança Alimentar e Nutricional: documento base das oficinas de fortalecimento do SISAN em SC e RS (2017)",
        link: ""
      },
      {
        tipo: "Destaque",
        nome: "4º Lugar no Concurso Multiplicando Experiências e Estratégias Sustentáveis de Alimentação e Nutrição do Brasil, Centro de Excelência contra a Fome do Programa Mundial de Alimentos das Nações Unidas",
        link: ""
      },
      {
        tipo: "TESE Destaque",
        nome: "Tendências da Insegurança Alimentar e dos determinantes da Segurança Alimentar e Nutricional no Brasil e suas associações: um estudo ecológico de uma década",
        link: ""
      },
      {
        tipo: "Livro publicado",
        nome: "O legado econômico e social da COVID-19 no Brasil e em Santa Catarina (2023)",
        link: ""
      }
    ]
  },
  {
    nome: "Ana Mattos",
    image: "/assets/team4.png",
    curriculo: "Desenvolve e coordena pesquisas na área de segurança alimentar e nutricional; responsável pela elaboração de diagnósticos e análises sobre políticas públicas e impacto social atua na implementação de Políticas Públicas de SAN - Nível Federal e participa da construção de estratégias baseadas em evidências para a consultoria. Nutricionista, Pós-doc em Nutrição Alimentação e Saúde, Doutora em Políticas Públicas, Mestre em Ciências Sociais e Especialista em Saúde Mental pelo Programa de Residência Multiprofissional. PhD Student Universidad de Barcelona. Experiência como técnica no Ministério do Desenvolvimento Social, Família e Combate à Fome (MDS). Experiência em Docência como Professora Substituta na Faculdade de Medicina - Departamento de Medicina Social da Universidade Federal do Rio Grande do Sul/UFRGS; Experiência como Professora Tutora do Curso Técnico em Agente Comunitário de Saúde (ACS) e do Curso Técnico em Vigilância em Saúde com Ênfase no Combate às Endemias (ACE), promovidos pelo convênio do Ministério da Saúde e Conselho Nacional de Secretarias Municipais de Saúde (CONASEMS) com a UFRGS. Tem caminhada no controle social tendo sido Presidenta de Conselho Municipal de Segurança Alimentar e Nutricional e Vice-Presidência do Conselho Estadual de Segurança Alimentar e Nutricional ConseaRS.",
    materiais: [
      {
        tipo: "Capítulo de livro publicado",
        nome: "Introdução a Ecologia Alimentar. In: Valmor Ziegler; Denise Zaffari. (Org.). Ecologia Alimentar Humana (2024)",
        link: ""
      },
      {
        tipo: "Capítulo de livro publicado",
        nome: "Práticas Alimentares: Cultura e mudanças associadas. In: Valmor Ziegler; Denise Zaffari. (Org.). Ecologia Alimentar Humana (2024)",
        link: ""
      },
      {
        tipo: "Livro publicado",
        nome: "A Saúde Mental em Evidência: Narrativas de um Caminho Utópico (2020)",
        link: ""
      },
      {
        tipo: "Livro publicado",
        nome: "Temas emergentes das Ciências Sociais (2021)",
        link: ""
      },
      {
        tipo: "Livro publicado",
        nome: "Mas, se a Gente é o que Come, Quem Não Come Nada Some! É por isso que Ninguém Enxerga essa Gente que Passa Fome (2021)",
        link: ""
      },
      {
        tipo: "Destaque",
        nome: "1º lugar Área Saúde Coletiva: Intersetorialidade e Multidisciplinariedade: Uma Abordagem Integrativa em Educação Alimentar e Nutricional, VII Mostra Científica Luiz Santos Perry- UFRGS (2014)",
        link: ""
      },
      {
        tipo: "Destaque",
        nome: "Artigo Destaque- A Cultura Alimentar e os Reflexos de um Aprisionamento da Condição Social, II Seminário Latino-Americano de Estudos em Cultura - SEMLACult (2019)",
        link: ""
      },
      {
        tipo: "TESE Destaque",
        nome: "CONSTRUÇÕES SOCIAIS, CIDADANIA E POPULAÇÃO EM SITUAÇÃO DE RUA NA CIDADE DE PORTO ALEGRE/RS: O modelo de cidadão gerado em uma política pública de superação da fome (Programa Restaurante Popular)",
        link: ""
      },
      {
        tipo: "Artigos completos publicados em periódicos",
        nome: "Segurança alimentar e nutricional no Brasil (2023)",
        link: "http://dx.doi.org/10.20396/san.v30i00.8667645"
      },
      {
        tipo: "Artigos completos publicados em periódicos",
        nome: "A Cultura Alimentar e os Reflexos de um Aprisionamento da Condição Social (2019)",
        link: "https://periodicos.claec.org/index.php/relacult/article/view/1483"
      },
      {
        tipo: "Artigos completos publicados em periódicos",
        nome: "Pelas ruas, o ecoar da fome transcende o direito à alimentação. REVISTA INTERDISCIPLINAR DE DIREITOS HUMANOS (2021)",
        link: ""
      },
      {
        tipo: "Artigos completos publicados em periódicos",
        nome: "Dialogando alimentação e nutrição na saúde mental: Ações promotoras de saúde por meio de uma horta terapêutica. REVISTA DA ASSOCIAÇÃO BRASILEIRA DE NUTRIÇÃO (2018)",
        link: ""
      },
      {
        tipo: "Artigos completos publicados em periódicos",
        nome: "Experimentação da Intersetorialidade na Nutrição: potencialidades de Novas Tecituras Vivenciais no Fazer Profissional. SAÚDE E DESENVOLVIMENTO HUMANO (2016)",
        link: ""
      },
      {
        tipo: "Trabalhos técnicos",
        nome: "Parecer de artigo científico Revista Segurança Alimentar e Nutricional (2023)",
        link: ""
      },
      {
        tipo: "Trabalhos técnicos",
        nome: "Organização 8 Conferência Estadual de Soberania e Segurança Alimentar e Nutricional Sustentável do Rio Grande do Sul (2020)",
        link: ""
      },
      {
        tipo: "Trabalhos técnicos",
        nome: "Plano Estadual de Segurança Alimentar e Nutricional do Estado do Rio Grande do Sul (2019)",
        link: ""
      },
      {
        tipo: "Trabalhos técnicos",
        nome: "Projeto 3º Conferência Municipal de Segurança Alimentar e Nutricional no Município de São Leopoldo (2019)",
        link: ""
      },
      {
        tipo: "Trabalhos técnicos",
        nome: "Relatoria de Propostas em Segurança alimentar e nutricional, Conferência Municipal de Segurança Alimentar e Nutricional de São Leopoldo (2019)",
        link: ""
      },
      {
        tipo: "Trabalhos técnicos",
        nome: "Cartilha de orientações para doação de alimentos (2020)",
        link: ""
      },
      {
        tipo: "Trabalhos técnicos",
        nome: "Cartilha Segurança Alimentar das populações vulneráveis - Cuidado e Atenção as populações vulnerabilizadas (2020)",
        link: ""
      },
      {
        tipo: "Trabalhos técnicos",
        nome: "Relatório LEVANTAMENTO DAS AÇÕES DE DISTRIBUIÇÃO DE ALIMENTOS NOS MUNICÍPIOS DO RS - COVID-19 (2020)",
        link: ""
      }
    ]
  },
  {
    nome: "Ana Luiza Barros",
    image: "/assets/team8.png",
    curriculo: "Nutricionista graduada pela Universidade de Brasília (UnB), mestranda do Programa de Pós-Graduação em Saúde Coletiva do Instituto René Rachou (Fiocruz Minas). Desenvolve dissertação na área de avaliação de políticas públicas, com foco no Programa Cozinha Solidária. Atua em pesquisas e na elaboração de trabalhos técnicos relacionados à segurança alimentar e nutricional, proteção social, avaliação de impacto de políticas sociais e sistemas alimentares sustentáveis.",
    materiais: [
      {
        tipo: "Capítulos de livros publicados",
        nome: "Criança. In: Ramyne de Castro da Paz. (Org.). Manual de avaliação nutricional",
        link: "https://revistajrg.com/index.php/portaljrg/article/view/193"
      },
      {
        tipo: "Artigos completos publicados em periódicos",
        nome: "Escalas de funcionalidade e sintomas no manejo nutricional de pacientes em cuidados paliativos: revisão integrativa",
        link: "https://ojs.revistacontemporanea.com/ojs/index.php/home/article/view/5100"
      },
      {
        tipo: "Artigos completos publicados em periódicos",
        nome: "Cow's milk as an inflammatory factor, an exploratory study on the social network Instagram",
        link: "https://sevenpubl.com.br/ISJHR/article/view/3125"
      },
      {
        tipo: "Artigos completos publicados em periódicos",
        nome: "Validação do Mnemônico NUTRIFICO como Abordagem Nutricional e Comunicação de Notícias Difíceis em Cuidados Paliativos",
        link: "https://rbc.inca.gov.br/index.php/revista/article/view/4415"
      },
      {
        tipo: "Artigos completos publicados em periódicos",
        nome: "Hydroalcoholic extract of Brazilian green propolis modulates inflammatory process in mice submitted to a low protein diet",
        link: "https://www.sciencedirect.com/science/article/pii/S0753332218341623?via%3Dihub"
      }
    ]
  },
  {
    nome: "Isabela Matos",
    image: "/assets/team5.png",
    curriculo: "Apoia atividades técnicas e operacionais em projetos de segurança alimentar e nutricional; contribui com análises jurídicas sobre legislações e políticas públicas relacionadas à área; auxilia na elaboração de pareceres, relatórios e estudos regulatórios e atua na interface entre direito e nutrição, fornecendo suporte normativo para as consultorias.",
    materiais: [] // Sem materiais publicados
  },
  {
    nome: "Antônio Real",
    image: "/assets/team6.png",
    curriculo: "Pesquisa novas tecnologias e tendências de mercado para manter a Notriá atualizada e competitiva; como desenvolvedor atua na manutenção e aprimoramento do site da Notriá; analisa fluxos de trabalho e propõe melhorias tecnológicas para aumentar a eficiência operacional da Notriá e cria ferramentas sob medida para atender demandas específicas dos diferentes setores.",
    materiais: [] // Sem materiais publicados
  },
  {
    nome: "Eliana Rocha",
    image: "/assets/team7.png",
    curriculo: "Profissional pós-graduada em Administração de Empresas e técnica em Ciência de Dados, com sólida atuação em melhoria de processos nas áreas financeira, administrativa e de produção. Especialista em planejamento estratégico, utilizando ferramentas contemporâneas para análise e gestão de dados. Possui experiência na elaboração de demonstrativos comerciais, operacionais e financeiros, bem como na gestão de contratos, coordenação de rotinas e liderança de equipes multidisciplinares. Atua na integração entre dados, processos e resultados, com foco em eficiência, organização e entregas de valor.",
    materiais: [] // Sem materiais publicados
  },
  {
    nome: "Isabela Ewerton",
    image: "/assets/team10.png",
    curriculo: "Nutricionista. Consultora pleno em segurança alimentar e nutricional.",
    materiais: []
  },
  {
    nome: "Emanuelle Dias",
    image: "/assets/team11.png",
    curriculo: "Nutricionista. Consultora pleno em segurança alimentar e nutricional.",
    materiais: []
  },
  {
    nome: "Eduardo Rocha",
    image: "/assets/team12.png",
    curriculo: "Nutricionista. Consultor pleno em segurança alimentar e nutricional.",
    materiais: []
  }
];

const Colaboradores = () => {
  const location = useLocation();
  const [selectedColaborador, setSelectedColaborador] = useState<number | null>(null);
  const [animating, setAnimating] = useState(false);
  const [lastColaborador, setLastColaborador] = useState<number | null>(null);
  const [materiaisExpanded, setMateriaisExpanded] = useState(false);

  useEffect(() => {
    // Verifica se há um índice de colaborador no state da navegação
    if (location.state && typeof location.state.colaboradorIndex === 'number') {
      const index = location.state.colaboradorIndex;
      if (index >= 0 && index < colaboradores.length) {
        setSelectedColaborador(index);
        setMateriaisExpanded(false); // Reset estado de expansão ao mudar colaborador
        // Scroll suave para a seção de detalhes após um pequeno delay
        setTimeout(() => {
          const detailsSection = document.querySelector('[data-colaborador-details]');
          if (detailsSection) {
            detailsSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
          }
        }, 300);
      }
    }
  }, [location.state]);

  // Reset estado de expansão quando o colaborador muda
  useEffect(() => {
    setMateriaisExpanded(false);
  }, [selectedColaborador]);

  const handleSelect = (idx: number) => {
    if (selectedColaborador === idx) return;
    setAnimating(true);
    setLastColaborador(selectedColaborador);
    setTimeout(() => {
      setSelectedColaborador(idx);
      setAnimating(false);
    }, 250); // duração da animação de saída
  };

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
            {/* Sidebar - visível apenas após clicar em uma foto */}
            {selectedColaborador !== null && (
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
                          className={`w-full justify-start transition-all duration-200 ${
                            selectedColaborador === idx
                              ? "bg-notria-primary text-white scale-105 shadow-lg"
                              : "hover:bg-notria-primary/10"
                          }`}
                          onClick={() => handleSelect(idx)}
                          style={{
                            transition: 'all 0.2s cubic-bezier(.4,0,.2,1)',
                          }}
                        >
                          <User size={16} className="mr-2" />
                          {colaborador.nome}
                        </Button>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </div>
            )}

            {/* Colaborador Details */}
            <div className="flex-1 min-h-[400px] flex items-center" data-colaborador-details>
              {selectedColaborador === null ? (
                <Card className="h-full w-full p-8">
                  <div className="text-center mb-8">
                    <p className="font-poppins text-lg text-notria-primary/80">
                      Selecione um colaborador para ver seus detalhes
                    </p>
                  </div>
                  <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-4 lg:grid-cols-4 gap-6 md:gap-8">
                    {colaboradores.map((colaborador, idx) => (
                      <button
                        key={idx}
                        type="button"
                        onClick={() => handleSelect(idx)}
                        className="flex flex-col items-center gap-3 group focus:outline-none focus-visible:ring-2 focus-visible:ring-notria-primary focus-visible:ring-offset-2 rounded-2xl p-2 transition-all duration-200 hover:scale-105 active:scale-100"
                      >
                        <div className="relative">
                          <img
                            src={colaborador.image}
                            alt={colaborador.nome}
                            className="w-20 h-20 sm:w-24 sm:h-24 md:w-28 md:h-28 object-cover rounded-full border-2 border-notria-primary/30 group-hover:border-notria-primary group-hover:shadow-lg transition-all duration-200"
                          />
                          <span className="absolute inset-0 rounded-full bg-notria-primary/0 group-hover:bg-notria-primary/10 transition-colors duration-200" aria-hidden />
                        </div>
                        <span className="font-yrsa text-sm text-notria-primary text-center line-clamp-2 group-hover:text-notria-secondary transition-colors">
                          {colaborador.nome}
                        </span>
                      </button>
                    ))}
                  </div>
                </Card>
              ) : (
                <div className={`w-full transition-all duration-300 ${animating ? 'opacity-0 translate-y-4 pointer-events-none' : 'opacity-100 translate-y-0'}`}>
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
                      {/* Currículo */}
                      {colaboradores[selectedColaborador].curriculo && (
                        <div className="mb-8">
                          <h4 className="font-poppins font-semibold text-notria-primary mb-3 flex items-center gap-2">
                            <FileText size={20} />
                            Currículo
                          </h4>
                          <div className="bg-notria-light/50 p-4 rounded-lg border-l-4 border-notria-primary">
                            <p className="font-yrsa text-gray-700 leading-relaxed text-justify">
                              {colaboradores[selectedColaborador].curriculo}
                            </p>
                          </div>
                        </div>
                      )}
                      
                      {/* Materiais */}
                      <div className="mb-6">
                        {colaboradores[selectedColaborador].materiais.length > 0 ? (
                          <>
                            <Button
                              variant="ghost"
                              className="w-full justify-between p-0 h-auto hover:bg-transparent mb-3 cursor-pointer group"
                              onClick={() => setMateriaisExpanded(!materiaisExpanded)}
                            >
                              <h4 className="font-poppins font-semibold text-notria-primary flex items-center gap-2 group-hover:text-notria-secondary transition-colors">
                                <BookOpen size={20} />
                                Materiais
                                <span className="text-sm font-normal text-notria-primary/60 group-hover:text-notria-secondary/60">
                                  ({colaboradores[selectedColaborador].materiais.length})
                                </span>
                              </h4>
                              <div 
                                className="transition-transform duration-300 ease-in-out" 
                                style={{ transform: materiaisExpanded ? 'rotate(180deg)' : 'rotate(0deg)' }}
                              >
                                <ChevronDown size={20} className="text-notria-primary group-hover:text-notria-secondary transition-colors" />
                              </div>
                            </Button>
                            
                            {materiaisExpanded && (
                              <div className="mt-4 animate-in fade-in slide-in-from-top-2 duration-300">
                                <div className="space-y-4">
                                  {colaboradores[selectedColaborador].materiais.map((material, index) => (
                                    <div
                                      key={index}
                                      className={`border-l-4 border-notria-secondary pl-4 animate-slide-up`}
                                      style={{
                                        animationDelay: `${index * 80}ms`,
                                        animationFillMode: 'forwards',
                                      }}
                                    >
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
                              </div>
                            )}
                          </>
                        ) : (
                          <div>
                            <h4 className="font-poppins font-semibold text-notria-primary mb-3 flex items-center gap-2">
                              <BookOpen size={20} />
                              Materiais
                            </h4>
                            <p className="text-gray-500 text-center">Nenhum material publicado até o momento.</p>
                          </div>
                        )}
                      </div>
                    </CardContent>
                  </Card>
                </div>
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