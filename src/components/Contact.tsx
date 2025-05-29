
import { Button } from "@/components/ui/button";
import { Mail, Phone, MapPin, Send } from "lucide-react";

const Contact = () => {
  return (
    <section id="contato" className="py-20 bg-notria-light">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <h2 className="font-poppins font-bold text-4xl md:text-5xl text-notria-primary mb-6">
              Entre em Contato
            </h2>
            <p className="font-yrsa text-xl text-notria-primary/80 max-w-3xl mx-auto leading-relaxed">
              Pronto para transformar suas políticas de segurança alimentar? 
              Entre em contato conosco e vamos construir soluções juntos.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div className="bg-white p-8 rounded-2xl shadow-lg">
              <h3 className="font-poppins font-semibold text-2xl text-notria-primary mb-6">
                Solicite uma Consultoria
              </h3>
              
              <form className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block font-poppins font-medium text-notria-primary mb-2">
                      Nome *
                    </label>
                    <input 
                      type="text" 
                      className="w-full p-3 border border-notria-light rounded-lg focus:border-notria-secondary focus:outline-none transition-colors"
                      placeholder="Seu nome completo"
                    />
                  </div>
                  <div>
                    <label className="block font-poppins font-medium text-notria-primary mb-2">
                      E-mail *
                    </label>
                    <input 
                      type="email" 
                      className="w-full p-3 border border-notria-light rounded-lg focus:border-notria-secondary focus:outline-none transition-colors"
                      placeholder="seu@email.com"
                    />
                  </div>
                </div>
                
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block font-poppins font-medium text-notria-primary mb-2">
                      Telefone
                    </label>
                    <input 
                      type="tel" 
                      className="w-full p-3 border border-notria-light rounded-lg focus:border-notria-secondary focus:outline-none transition-colors"
                      placeholder="(00) 00000-0000"
                    />
                  </div>
                  <div>
                    <label className="block font-poppins font-medium text-notria-primary mb-2">
                      Instituição
                    </label>
                    <input 
                      type="text" 
                      className="w-full p-3 border border-notria-light rounded-lg focus:border-notria-secondary focus:outline-none transition-colors"
                      placeholder="Nome da instituição"
                    />
                  </div>
                </div>

                <div>
                  <label className="block font-poppins font-medium text-notria-primary mb-2">
                    Tipo de Serviço
                  </label>
                  <select className="w-full p-3 border border-notria-light rounded-lg focus:border-notria-secondary focus:outline-none transition-colors">
                    <option value="">Selecione o serviço de interesse</option>
                    <option value="diagnostico">Diagnóstico e Avaliação</option>
                    <option value="capacitacao">Capacitação de Gestores</option>
                    <option value="consultoria">Consultoria Estratégica</option>
                    <option value="materiais">Materiais Técnicos</option>
                    <option value="apoio">Apoio Científico</option>
                    <option value="outros">Outros</option>
                  </select>
                </div>

                <div>
                  <label className="block font-poppins font-medium text-notria-primary mb-2">
                    Mensagem *
                  </label>
                  <textarea 
                    rows={5}
                    className="w-full p-3 border border-notria-light rounded-lg focus:border-notria-secondary focus:outline-none transition-colors resize-none"
                    placeholder="Descreva brevemente sua necessidade ou projeto..."
                  ></textarea>
                </div>

                <Button className="w-full bg-notria-secondary hover:bg-notria-secondary/90 text-white font-poppins font-semibold py-3 text-lg">
                  <Send className="mr-2" size={20} />
                  Enviar Mensagem
                </Button>
              </form>
            </div>

            {/* Contact Information */}
            <div className="space-y-8">
              <div className="bg-white p-8 rounded-2xl shadow-lg">
                <h3 className="font-poppins font-semibold text-2xl text-notria-primary mb-6">
                  Informações de Contato
                </h3>
                
                <div className="space-y-6">
                  <div className="flex items-center space-x-4">
                    <div className="bg-notria-secondary/10 w-12 h-12 rounded-full flex items-center justify-center">
                      <Mail className="text-notria-secondary" size={24} />
                    </div>
                    <div>
                      <p className="font-poppins font-medium text-notria-primary">E-mail</p>
                      <p className="font-yrsa text-notria-primary/70">contato@notriaconsultoria.com.br</p>
                    </div>
                  </div>

                  <div className="flex items-center space-x-4">
                    <div className="bg-notria-secondary/10 w-12 h-12 rounded-full flex items-center justify-center">
                      <Phone className="text-notria-secondary" size={24} />
                    </div>
                    <div>
                      <p className="font-poppins font-medium text-notria-primary">Telefone</p>
                      <p className="font-yrsa text-notria-primary/70">(11) 99999-9999</p>
                    </div>
                  </div>

                  <div className="flex items-center space-x-4">
                    <div className="bg-notria-secondary/10 w-12 h-12 rounded-full flex items-center justify-center">
                      <MapPin className="text-notria-secondary" size={24} />
                    </div>
                    <div>
                      <p className="font-poppins font-medium text-notria-primary">Localização</p>
                      <p className="font-yrsa text-notria-primary/70">São Paulo, SP - Brasil</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-notria-primary p-8 rounded-2xl text-white">
                <h3 className="font-poppins font-semibold text-xl mb-4">
                  Horário de Atendimento
                </h3>
                <div className="space-y-2 font-yrsa">
                  <p>Segunda a Sexta: 8h às 18h</p>
                  <p>Sábado: 8h às 12h</p>
                  <p className="text-white/70">Domingo: Fechado</p>
                </div>
                
                <div className="mt-6 pt-6 border-t border-white/20">
                  <p className="font-yrsa text-sm text-white/80">
                    Resposta garantida em até 24 horas úteis
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
