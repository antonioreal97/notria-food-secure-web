import React, { useState } from "react";
import { AnimatedSection } from "@/components/ui/animated-section";
import { useIsMobile } from "@/hooks/use-is-mobile";
import { MapPin } from "lucide-react";

// Dados dos projetos por estado
interface Projeto {
  titulo: string;
  descricao: string;
}

interface EstadoProjeto {
  codigo: string;
  nome: string;
  projetos: Projeto[];
  coordenadas: { x: number; y: number };
}

const estadosComProjetos: EstadoProjeto[] = [
  {
    codigo: "PA",
    nome: "PARÁ",
    coordenadas: { x: 680, y: 260 },
    projetos: [
      {
        titulo: "Formação em Segurança Alimentar e Nutricional",
        descricao: "Capacitação de lideranças de SAN em municípios do estado, com fornecimento de materiais de apoio, ferramentas para diagnóstico, monitoramento e permanência no SISAN."
      },
      {
        titulo: "Diagnóstico em SAN",
        descricao: "Levantamento de demandas para elaboração de Planos Municipais de SAN."
      }
    ]
  },
  // Adicione mais estados conforme necessário
];

const Notrimaps = () => {
  const [estadoSelecionado, setEstadoSelecionado] = useState<EstadoProjeto | null>(null);
  const isMobile = useIsMobile();

  // Cores para estados com projetos
  const getEstadoColor = (codigo: string) => {
    const estado = estadosComProjetos.find(e => e.codigo === codigo);
    return estado ? "#69C655" : "#E5E7EB"; // Verde Notriá para estados com projetos, cinza para outros
  };

  // Verifica se um estado tem projetos
  const temProjetos = (codigo: string) => {
    return estadosComProjetos.some(e => e.codigo === codigo);
  };

  const handleEstadoClick = (codigo: string) => {
    const estado = estadosComProjetos.find(e => e.codigo === codigo);
    if (estado) {
      setEstadoSelecionado(estado);
    }
  };

  return (
    <section id="notrimaps" className="py-20 bg-white relative">
      <div className="container mx-auto px-4">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <AnimatedSection {...(!isMobile ? {animation: 'slide-up', delay: 200, duration: 500} : {})}>
            <div className="text-center mb-12">
              <h2 className="font-poppins font-bold text-4xl md:text-5xl text-notria-primary mb-6">
                Notrimaps
              </h2>
              <p className="font-yrsa text-xl text-notria-primary/80 max-w-3xl mx-auto leading-relaxed">
                Explore os estados onde a Notriá já entregou projetos e conheça nosso impacto em Segurança Alimentar e Nutricional
              </p>
            </div>
          </AnimatedSection>

          {/* Mapa e Painel */}
          <div className="flex flex-col lg:flex-row gap-8 items-start">
            {/* Mapa */}
            <AnimatedSection 
              {...(!isMobile ? {animation: 'scale-in', delay: 400, duration: 500} : {})}
              className="flex-1 w-full lg:w-auto"
            >
              <div className="bg-notria-light rounded-xl p-6 lg:p-8 shadow-lg relative">
                <div className="relative w-full" style={{ aspectRatio: '1.2/1' }}>
                  <svg
                    viewBox="0 0 1000 1000"
                    className="w-full h-full"
                    style={{ maxHeight: '600px' }}
                  >
                    {/* Estados do Brasil - SVG mais preciso */}
                    {/* Acre */}
                    <path
                      d="M 180 200 L 240 180 L 280 220 L 260 280 L 220 300 L 180 280 Z"
                      fill={getEstadoColor("AC")}
                      stroke="#fff"
                      strokeWidth="2"
                      className={temProjetos("AC") ? "cursor-pointer hover:opacity-80 transition-opacity" : ""}
                      onClick={() => handleEstadoClick("AC")}
                    />
                    
                    {/* Rondônia */}
                    <path
                      d="M 300 220 L 380 200 L 420 240 L 400 300 L 360 320 L 300 300 Z"
                      fill={getEstadoColor("RO")}
                      stroke="#fff"
                      strokeWidth="2"
                      className={temProjetos("RO") ? "cursor-pointer hover:opacity-80 transition-opacity" : ""}
                      onClick={() => handleEstadoClick("RO")}
                    />

                    {/* Amazonas */}
                    <path
                      d="M 420 200 L 520 180 L 580 220 L 560 300 L 500 320 L 440 300 L 420 260 Z"
                      fill={getEstadoColor("AM")}
                      stroke="#fff"
                      strokeWidth="2"
                      className={temProjetos("AM") ? "cursor-pointer hover:opacity-80 transition-opacity" : ""}
                      onClick={() => handleEstadoClick("AM")}
                    />

                    {/* Roraima */}
                    <path
                      d="M 580 180 L 680 160 L 720 200 L 700 280 L 640 300 L 580 280 Z"
                      fill={getEstadoColor("RR")}
                      stroke="#fff"
                      strokeWidth="2"
                      className={temProjetos("RR") ? "cursor-pointer hover:opacity-80 transition-opacity" : ""}
                      onClick={() => handleEstadoClick("RR")}
                    />

                    {/* Amapá */}
                    <path
                      d="M 680 140 L 760 120 L 800 160 L 780 220 L 720 240 L 680 220 Z"
                      fill={getEstadoColor("AP")}
                      stroke="#fff"
                      strokeWidth="2"
                      className={temProjetos("AP") ? "cursor-pointer hover:opacity-80 transition-opacity" : ""}
                      onClick={() => handleEstadoClick("AP")}
                    />

                    {/* Pará - Estado com projetos */}
                    <path
                      d="M 600 240 L 720 220 L 780 260 L 760 340 L 700 360 L 640 340 L 600 300 Z"
                      fill={getEstadoColor("PA")}
                      stroke="#fff"
                      strokeWidth="2"
                      className="cursor-pointer hover:opacity-80 transition-opacity"
                      onClick={() => handleEstadoClick("PA")}
                    />

                    {/* Tocantins */}
                    <path
                      d="M 700 360 L 760 380 L 800 420 L 780 480 L 740 500 L 700 480 Z"
                      fill={getEstadoColor("TO")}
                      stroke="#fff"
                      strokeWidth="2"
                      className={temProjetos("TO") ? "cursor-pointer hover:opacity-80 transition-opacity" : ""}
                      onClick={() => handleEstadoClick("TO")}
                    />

                    {/* Maranhão */}
                    <path
                      d="M 760 320 L 840 300 L 880 340 L 860 400 L 820 420 L 780 400 Z"
                      fill={getEstadoColor("MA")}
                      stroke="#fff"
                      strokeWidth="2"
                      className={temProjetos("MA") ? "cursor-pointer hover:opacity-80 transition-opacity" : ""}
                      onClick={() => handleEstadoClick("MA")}
                    />

                    {/* Piauí */}
                    <path
                      d="M 860 400 L 940 380 L 980 420 L 960 480 L 920 500 L 880 480 Z"
                      fill={getEstadoColor("PI")}
                      stroke="#fff"
                      strokeWidth="2"
                      className={temProjetos("PI") ? "cursor-pointer hover:opacity-80 transition-opacity" : ""}
                      onClick={() => handleEstadoClick("PI")}
                    />

                    {/* Ceará */}
                    <path
                      d="M 960 480 L 1000 460 L 1000 520 L 980 560 L 940 580 L 920 540 Z"
                      fill={getEstadoColor("CE")}
                      stroke="#fff"
                      strokeWidth="2"
                      className={temProjetos("CE") ? "cursor-pointer hover:opacity-80 transition-opacity" : ""}
                      onClick={() => handleEstadoClick("CE")}
                    />

                    {/* Rio Grande do Norte */}
                    <path
                      d="M 920 540 L 960 560 L 980 600 L 960 660 L 920 680 L 900 640 Z"
                      fill={getEstadoColor("RN")}
                      stroke="#fff"
                      strokeWidth="2"
                      className={temProjetos("RN") ? "cursor-pointer hover:opacity-80 transition-opacity" : ""}
                      onClick={() => handleEstadoClick("RN")}
                    />

                    {/* Paraíba */}
                    <path
                      d="M 900 640 L 940 660 L 960 700 L 940 760 L 900 780 L 880 740 Z"
                      fill={getEstadoColor("PB")}
                      stroke="#fff"
                      strokeWidth="2"
                      className={temProjetos("PB") ? "cursor-pointer hover:opacity-80 transition-opacity" : ""}
                      onClick={() => handleEstadoClick("PB")}
                    />

                    {/* Pernambuco */}
                    <path
                      d="M 880 740 L 920 760 L 940 800 L 920 860 L 880 880 L 860 840 Z"
                      fill={getEstadoColor("PE")}
                      stroke="#fff"
                      strokeWidth="2"
                      className={temProjetos("PE") ? "cursor-pointer hover:opacity-80 transition-opacity" : ""}
                      onClick={() => handleEstadoClick("PE")}
                    />

                    {/* Alagoas */}
                    <path
                      d="M 860 840 L 900 860 L 920 900 L 900 960 L 860 980 L 840 940 Z"
                      fill={getEstadoColor("AL")}
                      stroke="#fff"
                      strokeWidth="2"
                      className={temProjetos("AL") ? "cursor-pointer hover:opacity-80 transition-opacity" : ""}
                      onClick={() => handleEstadoClick("AL")}
                    />

                    {/* Sergipe */}
                    <path
                      d="M 840 940 L 880 960 L 900 1000 L 880 1000 L 840 1000 L 820 980 Z"
                      fill={getEstadoColor("SE")}
                      stroke="#fff"
                      strokeWidth="2"
                      className={temProjetos("SE") ? "cursor-pointer hover:opacity-80 transition-opacity" : ""}
                      onClick={() => handleEstadoClick("SE")}
                    />

                    {/* Bahia */}
                    <path
                      d="M 780 480 L 860 500 L 900 540 L 880 620 L 840 660 L 800 640 L 780 580 Z"
                      fill={getEstadoColor("BA")}
                      stroke="#fff"
                      strokeWidth="2"
                      className={temProjetos("BA") ? "cursor-pointer hover:opacity-80 transition-opacity" : ""}
                      onClick={() => handleEstadoClick("BA")}
                    />

                    {/* Mato Grosso */}
                    <path
                      d="M 680 400 L 740 420 L 780 460 L 760 520 L 720 540 L 680 500 Z"
                      fill={getEstadoColor("MT")}
                      stroke="#fff"
                      strokeWidth="2"
                      className={temProjetos("MT") ? "cursor-pointer hover:opacity-80 transition-opacity" : ""}
                      onClick={() => handleEstadoClick("MT")}
                    />

                    {/* Mato Grosso do Sul */}
                    <path
                      d="M 720 540 L 780 560 L 820 600 L 800 660 L 760 680 L 720 640 Z"
                      fill={getEstadoColor("MS")}
                      stroke="#fff"
                      strokeWidth="2"
                      className={temProjetos("MS") ? "cursor-pointer hover:opacity-80 transition-opacity" : ""}
                      onClick={() => handleEstadoClick("MS")}
                    />

                    {/* Goiás */}
                    <path
                      d="M 760 680 L 820 700 L 860 740 L 840 800 L 800 820 L 760 780 Z"
                      fill={getEstadoColor("GO")}
                      stroke="#fff"
                      strokeWidth="2"
                      className={temProjetos("GO") ? "cursor-pointer hover:opacity-80 transition-opacity" : ""}
                      onClick={() => handleEstadoClick("GO")}
                    />

                    {/* Distrito Federal */}
                    <path
                      d="M 800 820 L 840 840 L 860 880 L 840 920 L 800 940 L 780 900 Z"
                      fill={getEstadoColor("DF")}
                      stroke="#fff"
                      strokeWidth="2"
                      className={temProjetos("DF") ? "cursor-pointer hover:opacity-80 transition-opacity" : ""}
                      onClick={() => handleEstadoClick("DF")}
                    />

                    {/* Minas Gerais */}
                    <path
                      d="M 840 800 L 920 820 L 960 860 L 940 920 L 900 940 L 860 900 Z"
                      fill={getEstadoColor("MG")}
                      stroke="#fff"
                      strokeWidth="2"
                      className={temProjetos("MG") ? "cursor-pointer hover:opacity-80 transition-opacity" : ""}
                      onClick={() => handleEstadoClick("MG")}
                    />

                    {/* Espírito Santo */}
                    <path
                      d="M 940 920 L 980 940 L 1000 980 L 980 1020 L 940 1040 L 920 1000 Z"
                      fill={getEstadoColor("ES")}
                      stroke="#fff"
                      strokeWidth="2"
                      className={temProjetos("ES") ? "cursor-pointer hover:opacity-80 transition-opacity" : ""}
                      onClick={() => handleEstadoClick("ES")}
                    />

                    {/* Rio de Janeiro */}
                    <path
                      d="M 900 940 L 940 960 L 960 1000 L 940 1040 L 900 1060 L 880 1020 Z"
                      fill={getEstadoColor("RJ")}
                      stroke="#fff"
                      strokeWidth="2"
                      className={temProjetos("RJ") ? "cursor-pointer hover:opacity-80 transition-opacity" : ""}
                      onClick={() => handleEstadoClick("RJ")}
                    />

                    {/* São Paulo */}
                    <path
                      d="M 860 900 L 920 920 L 960 960 L 940 1020 L 900 1040 L 860 1000 Z"
                      fill={getEstadoColor("SP")}
                      stroke="#fff"
                      strokeWidth="2"
                      className={temProjetos("SP") ? "cursor-pointer hover:opacity-80 transition-opacity" : ""}
                      onClick={() => handleEstadoClick("SP")}
                    />

                    {/* Paraná */}
                    <path
                      d="M 720 640 L 780 660 L 820 700 L 800 760 L 760 780 L 720 740 Z"
                      fill={getEstadoColor("PR")}
                      stroke="#fff"
                      strokeWidth="2"
                      className={temProjetos("PR") ? "cursor-pointer hover:opacity-80 transition-opacity" : ""}
                      onClick={() => handleEstadoClick("PR")}
                    />

                    {/* Santa Catarina */}
                    <path
                      d="M 760 780 L 820 800 L 860 840 L 840 900 L 800 920 L 760 880 Z"
                      fill={getEstadoColor("SC")}
                      stroke="#fff"
                      strokeWidth="2"
                      className={temProjetos("SC") ? "cursor-pointer hover:opacity-80 transition-opacity" : ""}
                      onClick={() => handleEstadoClick("SC")}
                    />

                    {/* Rio Grande do Sul */}
                    <path
                      d="M 720 740 L 760 760 L 800 800 L 780 860 L 740 880 L 720 840 Z"
                      fill={getEstadoColor("RS")}
                      stroke="#fff"
                      strokeWidth="2"
                      className={temProjetos("RS") ? "cursor-pointer hover:opacity-80 transition-opacity" : ""}
                      onClick={() => handleEstadoClick("RS")}
                    />

                    {/* Pino de localização para estado selecionado */}
                    {estadoSelecionado && (
                      <g>
                        {/* Linha conectora horizontal */}
                        <line
                          x1={estadoSelecionado.coordenadas.x}
                          y1={estadoSelecionado.coordenadas.y}
                          x2="0"
                          y2={estadoSelecionado.coordenadas.y}
                          stroke="#9CA3AF"
                          strokeWidth="2"
                          strokeDasharray="5,5"
                        />
                        {/* Círculo do pino */}
                        <circle
                          cx={estadoSelecionado.coordenadas.x}
                          cy={estadoSelecionado.coordenadas.y}
                          r="18"
                          fill="#EF4444"
                          stroke="#fff"
                          strokeWidth="3"
                        />
                        {/* Ícone de pino (simplificado) */}
                        <path
                          d={`M ${estadoSelecionado.coordenadas.x} ${estadoSelecionado.coordenadas.y - 12} L ${estadoSelecionado.coordenadas.x - 8} ${estadoSelecionado.coordenadas.y + 4} L ${estadoSelecionado.coordenadas.x + 8} ${estadoSelecionado.coordenadas.y + 4} Z`}
                          fill="#fff"
                        />
                      </g>
                    )}
                  </svg>
                </div>
              </div>
            </AnimatedSection>

            {/* Painel de Informações */}
            <AnimatedSection 
              {...(!isMobile ? {animation: 'slide-left', delay: 600, duration: 500} : {})}
              className="w-full lg:w-96"
            >
              <div className="bg-notria-light rounded-xl p-6 shadow-lg h-full">
                {estadoSelecionado ? (
                  <div>
                    <h3 className="font-poppins font-bold text-2xl text-notria-primary mb-4">
                      {estadoSelecionado.nome}
                    </h3>
                    <div className="space-y-6">
                      {estadoSelecionado.projetos.map((projeto, index) => (
                        <div key={index} className="border-l-4 border-notria-primary pl-4">
                          <h4 className="font-poppins font-semibold text-lg text-notria-primary mb-2">
                            {projeto.titulo}
                          </h4>
                          <p className="font-yrsa text-notria-primary/80 leading-relaxed">
                            {projeto.descricao}
                          </p>
                        </div>
                      ))}
                    </div>
                  </div>
                ) : (
                  <div className="text-center py-12">
                    <MapPin className="mx-auto mb-4 text-notria-primary/40" size={48} />
                    <p className="font-yrsa text-notria-primary/60 text-lg">
                      Clique em um estado no mapa para ver os projetos entregues pela Notriá
                    </p>
                  </div>
                )}
              </div>
            </AnimatedSection>
          </div>

          {/* Legenda */}
          <AnimatedSection {...(!isMobile ? {animation: 'fade-in', delay: 800, duration: 500} : {})}>
            <div className="mt-8 flex flex-wrap justify-center gap-6">
              <div className="flex items-center gap-2">
                <div className="w-6 h-6 rounded" style={{ backgroundColor: '#69C655' }}></div>
                <span className="font-yrsa text-notria-primary/80">Estados com projetos</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-6 h-6 bg-gray-300 rounded"></div>
                <span className="font-yrsa text-notria-primary/80">Outros estados</span>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
};

export default Notrimaps;
