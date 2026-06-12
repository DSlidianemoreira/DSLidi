export default function About() {
  return (
    <section id="sobre" className="py-24 px-6 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          <div className="lg:w-1/2 relative">
            <div className="absolute inset-0 bg-brand-navy rounded-2xl transform translate-x-4 translate-y-4"></div>
            <img 
              src="/assets/img/sobre.webp" 
              alt="Equipe da DS Lidi trabalhando em soluções e estratégias de marketing digital em Artur Nogueira" 
              className="relative rounded-2xl w-full h-auto object-cover shadow-2xl border-4 border-white"
              loading="lazy"
            />
            {/* Decal */}
            <div className="absolute -bottom-6 -left-6 bg-brand-gold text-brand-navy p-6 rounded-lg shadow-xl hidden md:block">
              <span className="block text-3xl font-heading font-bold mb-1">Ética &</span>
              <span className="block text-sm uppercase tracking-widest font-bold">Resultados</span>
            </div>
          </div>
          
          <div className="lg:w-1/2 flex flex-col items-start text-left">
            <span className="text-brand-gold font-bold text-xs uppercase tracking-widest bg-brand-gold/10 px-4 py-1.5 rounded inline-block mb-4">
              Quem Somos
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-brand-navy mb-6 leading-tighest font-heading">
              DS Lidi: Excelência em Consultoria de Marketing Digital
            </h2>
            
            <div className="space-y-5 text-gray-600 font-body text-base leading-relaxed mb-8">
              <p>
                Com uma trajetória pautada por valores éticos e familiares, a DS Lidi nasceu para oferecer um atendimento próximo e transparente. Acreditamos que o sucesso de uma marca começa na confiança e na clareza de propósito.
              </p>
              <p>
                Atuamos há anos transformando a presença digital de empresas de médio porte que buscam mais do que apenas um site, mas um parceiro estratégico. Nossa missão é elevar o patamar do seu negócio, unindo a sofisticação visual à inteligência que o Google exige.
              </p>
            </div>
            
            <a 
              href="#contato"
              className="inline-flex items-center gap-3 bg-brand-navy text-white px-8 py-4 rounded font-bold uppercase tracking-wider text-sm hover:bg-brand-gold hover:text-brand-navy transition-colors duration-300 shadow-md"
            >
              Fale conosco
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
