import { Instagram, Facebook } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-brand-navy pt-20 pb-8 px-6 border-t-[8px] border-brand-gold text-gray-300">
      <div className="max-w-7xl mx-auto space-y-12">
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Logo & Description */}
          <div className="space-y-6 lg:col-span-1">
            <a href="#inicio" className="block text-brand-gold font-heading font-bold text-3xl tracking-tight">
              DS<span className="text-white">Lidi</span>
            </a>
            <p className="text-sm leading-relaxed text-gray-400">
              Transformando visão em design e soluções reais. Consultoria premium de Marketing Digital para empresas que buscam resultados em Artur Nogueira e região.
            </p>
            <div className="flex gap-4">
              <a href="https://instagram.com/dslidianemoreira" target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-white/5 border border-white/10 rounded-full flex items-center justify-center hover:bg-brand-gold hover:text-brand-navy transition-colors text-white">
                <Instagram className="w-4 h-4" />
              </a>
              <a href="https://facebook.com/lidianemoreiranascimennto" target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-white/5 border border-white/10 rounded-full flex items-center justify-center hover:bg-brand-gold hover:text-brand-navy transition-colors text-white">
                <Facebook className="w-4 h-4" />
              </a>
            </div>
          </div>
          
          {/* Navegação */}
          <div>
            <h3 className="font-heading font-bold text-white text-lg mb-6">Navegação Rápida</h3>
            <ul className="space-y-3 text-sm">
              <li><a href="#inicio" className="hover:text-brand-gold transition-colors">Início</a></li>
              <li><a href="#sobre" className="hover:text-brand-gold transition-colors">Quem Somos</a></li>
              <li><a href="#servicos" className="hover:text-brand-gold transition-colors">Nossos Serviços</a></li>
              <li><a href="#beneficios" className="hover:text-brand-gold transition-colors">Diferenciais</a></li>
              <li><a href="#faq" className="hover:text-brand-gold transition-colors">FAQ</a></li>
            </ul>
          </div>
          
          {/* Serviços */}
          <div>
            <h3 className="font-heading font-bold text-white text-lg mb-6">Especialidades</h3>
            <ul className="space-y-3 text-sm">
              <li className="text-gray-400">Web Design Premium</li>
              <li className="text-gray-400">SEO Local</li>
              <li className="text-gray-400">Google Meu Negócio</li>
              <li className="text-gray-400">Estratégias de Marketing</li>
            </ul>
          </div>
          
          {/* Contato */}
          <div>
            <h3 className="font-heading font-bold text-white text-lg mb-6">Contato</h3>
            <ul className="space-y-4 text-sm">
              <li>
                <span className="block text-brand-gold font-bold mb-1">WhatsApp & Telefone</span>
                <a href="https://wa.me/5519971151728" className="hover:text-white transition-colors">(19) 97115-1728</a>
              </li>
              <li>
                <span className="block text-brand-gold font-bold mb-1">Endereço</span>
                <span>Rua 7 de Setembro - Jardim Rezek II<br/>Artur Nogueira/SP</span>
              </li>
              <li>
                <span className="block text-brand-gold font-bold mb-1">Funcionamento</span>
                <span>Seg a Sex, 09h às 17h</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-gray-500">
          <p>© {new Date().getFullYear()} DS Lidi. Todos os direitos reservados.</p>
          <div className="flex gap-1 items-center">
            <span>Desenvolvido por</span>
            <span className="font-bold text-brand-gold ml-1">OFS Digital</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
