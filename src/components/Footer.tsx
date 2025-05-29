
const Footer = () => {
  return (
    <footer className="bg-notria-primary text-white py-12">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8">
            {/* Brand */}
            <div>
              <div className="bg-white text-notria-primary px-4 py-2 rounded-lg font-poppins font-bold text-xl inline-block mb-4">
                Notriá
              </div>
              <p className="font-yrsa text-white/80 leading-relaxed">
                Especializada em Segurança Alimentar e Nutricional, 
                transformando políticas públicas e gerando impacto real na vida das pessoas.
              </p>
            </div>

            {/* Quick Links */}
            <div>
              <h3 className="font-poppins font-semibold text-lg mb-4">Links Rápidos</h3>
              <ul className="space-y-2 font-yrsa">
                <li><a href="#inicio" className="text-white/80 hover:text-white transition-colors">Início</a></li>
                <li><a href="#sobre" className="text-white/80 hover:text-white transition-colors">Sobre</a></li>
                <li><a href="#servicos" className="text-white/80 hover:text-white transition-colors">Serviços</a></li>
                <li><a href="#diferenciais" className="text-white/80 hover:text-white transition-colors">Diferenciais</a></li>
                <li><a href="#contato" className="text-white/80 hover:text-white transition-colors">Contato</a></li>
              </ul>
            </div>

            {/* Contact Info */}
            <div>
              <h3 className="font-poppins font-semibold text-lg mb-4">Contato</h3>
              <div className="space-y-2 font-yrsa text-white/80">
                <p>contato@notriaconsultoria.com.br</p>
                <p>(11) 99999-9999</p>
                <p>São Paulo, SP - Brasil</p>
              </div>
            </div>
          </div>

          <div className="border-t border-white/20 mt-8 pt-8 text-center">
            <p className="font-yrsa text-white/60">
              © 2024 Notriá Consultoria. Todos os direitos reservados.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
