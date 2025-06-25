import { Button } from "@/components/ui/button";
import { Mail, Phone, MapPin, Send } from "lucide-react";
import { useState } from "react";
import { AnimatedSection } from "@/components/ui/animated-section";

const Contact = () => {
  const [form, setForm] = useState({
    nome: "",
    email: "",
    telefone: "",
    instituicao: "",
    tipo_servico: "",
    mensagem: "",
  });
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSuccess(false);
    setError(false);
    try {
      const response = await fetch("https://formspree.io/f/xzzryrop", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify(form),
      });
      if (response.ok) {
        setSuccess(true);
        setForm({
          nome: "",
          email: "",
          telefone: "",
          instituicao: "",
          tipo_servico: "",
          mensagem: "",
        });
      } else {
        setError(true);
      }
    } catch {
      setError(true);
    }
  };

  return (
    <section id="contato" className="py-20 relative bg-notria-light">
      {/* Imagem de fundo */}
      <div className="absolute inset-0 w-full h-full z-0">
        <img
          src="/assets/tomate.jpg"
          alt="Fundo tomate"
          className="w-full h-full object-cover object-center"
        />
      </div>
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <AnimatedSection animation="slide-up" delay={200}>
            <div className="text-center mb-16">
              <h2 className="font-poppins font-bold text-4xl md:text-5xl text-white mb-6">
                Entre em Contato
              </h2>
              <p className="font-yrsa text-xl text-white/90 max-w-3xl mx-auto leading-relaxed">
                Pronto para transformar suas políticas de segurança alimentar? 
                Entre em contato conosco e vamos construir soluções juntos.
              </p>
            </div>
          </AnimatedSection>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <AnimatedSection animation="slide-right" delay={400}>
              <div className="bg-white p-8 rounded-2xl shadow-lg">
                <h3 className="font-poppins font-semibold text-2xl text-notria-primary mb-6">
                  Solicite uma Consultoria
                </h3>
                
                <form className="space-y-6" onSubmit={handleSubmit}>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label className="block font-poppins font-medium text-notria-primary mb-2">
                        Nome *
                      </label>
                      <input 
                        type="text" 
                        name="nome"
                        value={form.nome}
                        onChange={handleChange}
                        className="w-full p-3 border border-notria-light rounded-lg focus:border-notria-secondary focus:outline-none transition-colors"
                        placeholder="Seu nome completo"
                        required
                      />
                    </div>
                    <div>
                      <label className="block font-poppins font-medium text-notria-primary mb-2">
                        E-mail *
                      </label>
                      <input 
                        type="email" 
                        name="email"
                        value={form.email}
                        onChange={handleChange}
                        className="w-full p-3 border border-notria-light rounded-lg focus:border-notria-secondary focus:outline-none transition-colors"
                        placeholder="seu@email.com"
                        required
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
                        name="telefone"
                        value={form.telefone}
                        onChange={handleChange}
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
                        name="instituicao"
                        value={form.instituicao}
                        onChange={handleChange}
                        className="w-full p-3 border border-notria-light rounded-lg focus:border-notria-secondary focus:outline-none transition-colors"
                        placeholder="Nome da instituição"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block font-poppins font-medium text-notria-primary mb-2">
                      Tipo de Serviço
                    </label>
                    <select name="tipo_servico" value={form.tipo_servico} onChange={handleChange} className="w-full p-3 border border-notria-light rounded-lg focus:border-notria-secondary focus:outline-none transition-colors">
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
                      name="mensagem"
                      value={form.mensagem}
                      onChange={handleChange}
                      rows={5}
                      className="w-full p-3 border border-notria-light rounded-lg focus:border-notria-secondary focus:outline-none transition-colors resize-none"
                      placeholder="Descreva brevemente sua necessidade ou projeto..."
                      required
                    ></textarea>
                  </div>

                  <Button type="submit" className="w-full bg-notria-secondary hover:bg-notria-secondary/90 text-white font-poppins font-semibold py-3 text-lg">
                    <Send className="mr-2" size={20} />
                    Enviar Mensagem
                  </Button>
                  {success && (
                    <p className="text-green-600 font-poppins text-center">Mensagem enviada com sucesso!</p>
                  )}
                  {error && (
                    <p className="text-red-600 font-poppins text-center">Ocorreu um erro ao enviar. Tente novamente.</p>
                  )}
                </form>
              </div>
            </AnimatedSection>

            {/* Contact Information */}
            <AnimatedSection animation="slide-left" delay={600}>
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
                        <a href="mailto:notriaconsultoria.01@gmail.com" className="font-yrsa text-notria-primary/70 hover:underline">notriaconsultoria.01@gmail.com</a>
                      </div>
                    </div>

                    <div className="flex items-center space-x-4">
                      <div className="bg-notria-secondary/10 w-12 h-12 rounded-full flex items-center justify-center">
                        <Phone className="text-notria-secondary" size={24} />
                      </div>
                      <div>
                        <p className="font-poppins font-medium text-notria-primary">Telefone</p>
                        <p className="font-yrsa text-notria-primary/70">(31) 99233-0826</p>
                      </div>
                    </div>

                    <div className="flex items-center space-x-4">
                      <div className="bg-notria-secondary/10 w-12 h-12 rounded-full flex items-center justify-center">
                        <MapPin className="text-notria-secondary" size={24} />
                      </div>
                      <div>
                        <p className="font-poppins font-medium text-notria-primary">Localização</p>
                        <p className="font-yrsa text-notria-primary/70">Minas Gerais - Brasil</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
