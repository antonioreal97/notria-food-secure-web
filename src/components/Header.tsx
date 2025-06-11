import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const menuItems = [
    { label: "Início", href: "#inicio", isInternal: true },
    { label: "Sobre Nós", href: "#sobre", isInternal: true },
    { label: "Soluções", href: "#servicos", isInternal: true },
    { label: "Diferenciais", href: "#diferenciais", isInternal: true },
    { label: "Colaboradores", href: "/colaboradores", isInternal: false },
    { label: "Contato", href: "#contato", isInternal: true },
  ];

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <div className="flex items-center">
            <Link to="/">
              <img
                src="/assets/logo-primary.png"
                alt="Logo Notriá"
                className="h-20 w-auto mr-2"
              />
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            {menuItems.map((item) => (
              item.isInternal ? (
                <a
                  key={item.label}
                  href={"/" + item.href}
                  className="text-notria-primary hover:text-notria-secondary transition-colors font-poppins font-medium"
                >
                  {item.label}
                </a>
              ) : (
                <Link
                  key={item.label}
                  to={item.href}
                  className="text-notria-primary hover:text-notria-secondary transition-colors font-poppins font-medium"
                >
                  {item.label}
                </Link>
              )
            ))}
          </nav>

          {/* CTA Button */}
          <div className="hidden md:block">
            <a
              href="https://wa.me/5531992330826"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button className="bg-notria-secondary hover:bg-notria-secondary/90 text-white font-poppins font-medium">
                Fale Conosco
              </Button>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-notria-primary"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t">
            <nav className="flex flex-col space-y-4">
              {menuItems.map((item) => (
                item.isInternal ? (
                  <a
                    key={item.label}
                    href={"/" + item.href}
                    className="text-notria-primary hover:text-notria-secondary transition-colors font-poppins font-medium"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {item.label}
                  </a>
                ) : (
                  <Link
                    key={item.label}
                    to={item.href}
                    className="text-notria-primary hover:text-notria-secondary transition-colors font-poppins font-medium"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {item.label}
                  </Link>
                )
              ))}
              <a
                href="https://wa.me/5531992330826"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button className="bg-notria-secondary hover:bg-notria-secondary/90 text-white font-poppins font-medium w-full mt-4">
                  Fale Conosco
                </Button>
              </a>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
