
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const menuItems = [
    { label: "Início", href: "#inicio", isInternal: true },
    { label: "Sobre", href: "#sobre", isInternal: true },
    { label: "Serviços", href: "#servicos", isInternal: true },
    { label: "Diferenciais", href: "#diferenciais", isInternal: true },
    { label: "Colaboradores", href: "/colaboradores", isInternal: false },
    { label: "Contato", href: "#contato", isInternal: true },
  ];

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center">
            <Link to="/">
              <div className="bg-notria-primary text-white px-4 py-2 rounded-lg font-poppins font-bold text-xl">
                Notriá
              </div>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            {menuItems.map((item) => (
              item.isInternal ? (
                <a
                  key={item.label}
                  href={item.href}
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
            <Button className="bg-notria-secondary hover:bg-notria-secondary/90 text-white font-poppins font-medium">
              Fale Conosco
            </Button>
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
                    href={item.href}
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
              <Button className="bg-notria-secondary hover:bg-notria-secondary/90 text-white font-poppins font-medium w-full mt-4">
                Fale Conosco
              </Button>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
