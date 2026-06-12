import { MessageCircle, ArrowDown } from 'lucide-react';

export default function Hero() {
  return (
    <section id="inicio" className="relative min-h-[85vh] flex flex-col items-center justify-center">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0 bg-brand-navy">
        <img
          src="/assets/img/hero-bg.webp"
          alt="Foto de fundo representando estratégias de marketing digital para negócios em Artur Nogueira"
          className="w-full h-full object-cover opacity-30 mix-blend-overlay"
          loading="lazy"
        />
        {/* Fallback gradient if image fails/loads */}
        <div className="absolute inset-0 bg-gradient-to-tr from-brand-navy via-brand-navy/90 to-brand-navy/60"></div>
      </div>

      <div className="relative z-10 px-6 max-w-5xl mx-auto flex flex-col items-center text-center">
        <span className="text-brand-gold font-bold text-xs md:text-sm uppercase tracking-[0.2em] mb-6 inline-block bg-brand-gold/10 px-4 py-1.5 rounded-full border border-brand-gold/20">
          Marketing Digital de Resultados
        </span>
        
        <h1 className="text-white text-4xl md:text-6xl lg:text-7xl font-bold leading-tight mb-8">
          Marketing Digital em Artur Nogueira:<br/>
          <span className="text-brand-gold">Design que encanta e posiciona.</span>
        </h1>
        
        <p className="text-gray-300 text-base md:text-lg lg:text-xl font-body max-w-3xl mb-12 leading-relaxed">
          Transformamos a visão da sua empresa em resultados reais através de estratégias digitais de alta performance. Tenha um posicionamento de elite em Artur Nogueira e todo o Estado de São Paulo com quem entende de design e conversão.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
          <a
            href="https://wa.me/5519971151728"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2 bg-brand-gold text-brand-navy px-8 py-4 rounded font-bold uppercase tracking-wider hover:bg-white hover:text-brand-navy transition-all duration-300 shadow-[0_0_20px_rgba(197,160,89,0.3)] hover:shadow-[0_0_30px_rgba(197,160,89,0.5)]"
          >
            <MessageCircle className="w-5 h-5" />
            Vamos conversar sobre seu projeto?
          </a>
          
          <a
            href="#servicos"
            className="flex items-center justify-center gap-2 bg-transparent text-white border border-white/30 px-8 py-4 rounded font-bold uppercase tracking-wider hover:bg-white/10 transition-all duration-300"
          >
            Conhecer nossos serviços
          </a>
        </div>

        <p className="mt-8 text-sm text-gray-400">
          Atendimento ético, personalizado e focado no seu crescimento.
        </p>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-10 animate-bounce">
        <a href="#credibilidade" className="w-10 h-10 bg-white/5 rounded-full flex items-center justify-center text-brand-gold border border-brand-gold/20 hover:bg-brand-gold/20 transition-colors">
          <ArrowDown className="w-5 h-5" />
        </a>
      </div>
    </section>
  );
}
