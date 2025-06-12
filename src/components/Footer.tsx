import { Link, useLocation, useNavigate } from "react-router-dom";

const Footer = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const isColaboradoresPage = location.pathname === "/colaboradores";

  const menuItems = [
    { label: "Início", href: "#inicio", isInternal: true },
    { label: "Sobre", href: "#sobre", isInternal: true },
    { label: "Serviços", href: "#servicos", isInternal: true },
    { label: "Diferenciais", href: "#diferenciais", isInternal: true },
    { label: "Contato", href: "#contato", isInternal: true },
  ];

  const handleMenuClick = (item: typeof menuItems[0]) => {
    if (!item.isInternal) return;
    if (isColaboradoresPage) {
      navigate("/", { state: { hash: item.href } });
    }
  };

  const getHref = (item: typeof menuItems[0]) => {
    if (!item.isInternal) return item.href;
    if (isColaboradoresPage) {
      return `/${item.href}`;
    }
    return item.href;
  };

  return (
    <footer className="bg-notria-primary text-white py-12">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8">
            {/* Brand */}
            <div>
              <Link to="/">
                <img src="/assets/logo-2.png" alt="Logo Notriá" className="h-17 mb-4" />
              </Link>
            </div>

            {/* Quick Links */}
            <div>
              <h3 className="font-poppins font-semibold text-lg mb-4">Links Rápidos</h3>
              <ul className="space-y-2 font-yrsa">
                {menuItems.map((item) => (
                  <li key={item.label}>
                    <a
                      href={getHref(item)}
                      className="text-white/80 hover:text-white transition-colors"
                      onClick={(e) => {
                        if (isColaboradoresPage) {
                          e.preventDefault();
                          handleMenuClick(item);
                        }
                      }}
                    >
                      {item.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact Info */}
            <div>
              <h3 className="font-poppins font-semibold text-lg mb-4">Contato</h3>
              <div className="space-y-2 font-yrsa text-white/80">
                <a href="mailto:notriaconsultoria.01@gmail.com" className="hover:underline">notriaconsultoria.01@gmail.com</a>
                <p>(31) 99233-0826</p>
                <p>Minas Gerais - Brasil</p>
              </div>
            </div>
          </div>

          <div className="border-t border-white/20 mt-8 pt-8 text-center">
            <div className="mb-4 flex justify-center gap-4">
              <a href="https://www.instagram.com/notriaconsultoria/" target="_blank" aria-label="Instagram" rel="noopener noreferrer">
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><rect width="24" height="24" rx="6" fill="#fff"/><path d="M12 7.2A4.8 4.8 0 1 0 12 16.8A4.8 4.8 0 1 0 12 7.2Z" stroke="#2f473f" stroke-width="1.5"/><circle cx="17.2" cy="6.8" r="1.2" fill="#2f473f"/><rect x="3.2" y="3.2" width="17.6" height="17.6" rx="5.8" stroke="#2f473f" stroke-width="1.5"/></svg>
              </a>
              <a href="https://www.linkedin.com/company/notria-consultoria-em-san/about/" target="_blank" aria-label="LinkedIn" rel="noopener noreferrer">
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><rect width="24" height="24" rx="6" fill="#fff"/><path d="M7.75 9.5V16.25" stroke="#2f473f" stroke-width="1.5" stroke-linecap="round"/><circle cx="7.75" cy="7.25" r="1.25" fill="#2f473f"/><path d="M11.5 12.5V16.25" stroke="#2f473f" stroke-width="1.5" stroke-linecap="round"/><path d="M11.5 12.5C11.5 11.3954 12.3954 10.5 13.5 10.5C14.6046 10.5 15.5 11.3954 15.5 12.5V16.25" stroke="#2f473f" stroke-width="1.5" stroke-linecap="round"/></svg>
              </a>
            </div>
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
