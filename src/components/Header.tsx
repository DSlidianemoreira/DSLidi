import { useState } from 'react';
import { Menu, X } from 'lucide-react';

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  const navLinks = [
    { href: '#inicio', label: 'Início' },
    { href: '#sobre', label: 'Sobre' },
    { href: '#servicos', label: 'Serviços' },
    { href: '#beneficios', label: 'Benefícios' },
    { href: '#faq', label: 'FAQ' },
  ];

  return (
    <header className="sticky top-0 z-50 bg-brand-navy shadow-md border-b border-brand-navy/80">
      <nav className="flex items-center justify-between px-6 py-4 max-w-7xl mx-auto">
        <a href="#inicio" className="flex items-center gap-2 group">
          {/* Logo Placeholder */}
          <div className="text-brand-gold font-heading font-bold text-2xl tracking-tight transition-transform group-hover:scale-105">
            DS<span className="text-white">Lidi</span>
          </div>
        </a>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center space-x-8">
          <div className="flex space-x-6">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-white/90 hover:text-brand-gold text-sm font-medium transition-colors"
              >
                {link.label}
              </a>
            ))}
          </div>
          <a
            href="https://wa.me/5519971151728"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-brand-gold text-brand-navy px-5 py-2.5 rounded text-sm font-semibold uppercase tracking-wider hover:bg-white transition-colors"
          >
            Falar no WhatsApp
          </a>
        </div>

        {/* Mobile menu button */}
        <button
          onClick={toggleMenu}
          className="md:hidden p-2 text-brand-gold hover:text-white transition-colors"
          aria-label="Toggle menu"
        >
          {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </nav>

      {/* Mobile Nav */}
      <div
        className={`md:hidden absolute w-full bg-brand-navy border-b border-white/10 transition-all duration-300 ${
          isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0 overflow-hidden'
        }`}
      >
        <div className="px-6 py-4 space-y-4 flex flex-col">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className="text-white hover:text-brand-gold font-medium w-full text-left"
            >
              {link.label}
            </a>
          ))}
          <a
            href="https://wa.me/5519971151728"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-brand-gold text-brand-navy px-4 py-3 rounded font-bold uppercase tracking-wide text-center mt-4"
          >
            Falar no WhatsApp
          </a>
        </div>
      </div>
    </header>
  );
}
