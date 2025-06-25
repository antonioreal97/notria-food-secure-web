import { useEffect, useRef } from "react";
import EmblaCarousel from "embla-carousel";
import { Button } from "@/components/ui/button";
import { ArrowDown } from "lucide-react";
import { AnimatedSection } from "@/components/ui/animated-section";

const mosaicImages = [
  "/assets/mosaic-1.jpg",
  "/assets/mosaic-2.jpg",
  "/assets/mosaic-3.jpg",
  "/assets/mosaic-4.jpg",
  "/assets/mosaic-5.jpg",
  "/assets/mosaic-6.jpg",
  "/assets/mosaic-7.jpg",
  "/assets/mosaic-8.jpg",
];

const Hero = () => {
  const emblaRef = useRef(null);

  useEffect(() => {
    if (emblaRef.current) {
      const embla = EmblaCarousel(emblaRef.current, {
        loop: true,
        align: "center",
        skipSnaps: false,
      });
      let autoplay = setInterval(() => {
        embla.scrollNext();
      }, 2500);
      embla.on("pointerDown", () => clearInterval(autoplay));
      embla.on("pointerUp", () => {
        autoplay = setInterval(() => embla.scrollNext(), 2500);
      });
      return () => {
        clearInterval(autoplay);
        embla.destroy();
      };
    }
  }, []);

  return (
    <section id="inicio" className="bg-gradient-to-br from-notria-primary via-notria-primary to-notria-secondary min-h-screen flex items-center">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center text-white mt-16">
          <AnimatedSection animation="slide-up" delay={200}>
            <h1 className="font-poppins font-bold text-4xl md:text-6xl mb-6 leading-tight">
              <span className="block">Consultoria em</span>
              <span className="text-notria-secondary block mt-2">
                Segurança Alimentar e Nutricional
              </span>
            </h1>
          </AnimatedSection>
          
          <AnimatedSection animation="fade-in" delay={400}>
            <p className="font-yrsa text-xl md:text-2xl mb-8 text-white/90 max-w-3xl mx-auto leading-relaxed">
            Mais do que uma consultoria, somos uma parceira estratégica de quem busca 
            gerar impacto com resultados claros, alinhando eficiência operacional e 
            progresso social.
            </p>
          </AnimatedSection>

          {/* Carrossel de Imagens */}
          <AnimatedSection animation="scale-in" delay={600}>
            <div className="mb-12">
              <div className="overflow-hidden rounded-xl" ref={emblaRef}>
                <div className="flex">
                  {mosaicImages.map((src, idx) => (
                    <div
                      key={idx}
                      className="min-w-full max-w-full sm:min-w-[33.33%] sm:max-w-[33.33%] px-1 sm:px-3 flex-shrink-0 flex-grow-0"
                    >
                      <img
                        src={src}
                        alt={`Mosaico ${idx + 1}`}
                        className="w-full h-40 sm:h-64 object-cover rounded-xl shadow-md"
                        loading="lazy"
                      />
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </AnimatedSection>

          <AnimatedSection animation="slide-up" delay={800}>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <a
                href="#servicos"
                className="bg-notria-secondary hover:bg-notria-secondary/90 text-white font-poppins font-semibold px-8 py-4 text-lg rounded-lg flex items-center justify-center transition-colors"
              >
                Conheça Nossos Serviços
              </a>
              <a
                href="#contato"
                className="border-white text-notria-primary bg-white hover:bg-white hover:text-notria-secondary font-poppins font-semibold px-8 py-4 text-lg rounded-lg flex items-center justify-center transition-colors"
              >
                Fale Conosco
              </a>
            </div>
          </AnimatedSection>

          <AnimatedSection animation="bounce-in" delay={1000}>
            <div className="animate-bounce">
              <ArrowDown className="mx-auto text-white/70" size={32} />
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
};

export default Hero;
