import { Search, PenTool, Layout, Settings } from 'lucide-react';

export default function Process() {
  const steps = [
    {
      title: 'Diagnóstico',
      desc: 'Entendemos sua visão, seus valores e os objetivos do seu negócio.',
      icon: Search
    },
    {
      title: 'Estratégia',
      desc: 'Planejamos o design e as palavras-chave que trarão o melhor retorno.',
      icon: PenTool
    },
    {
      title: 'Execução',
      desc: 'Criamos sua presença digital com foco total em estética e performance.',
      icon: Layout
    },
    {
      title: 'Otimização',
      desc: 'Ajustamos cada detalhe para garantir que o resultado seja sustentável.',
      icon: Settings
    }
  ];

  return (
    <section id="como-funciona" className="py-24 bg-brand-navy text-white relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-brand-gold/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-brand-gold/5 rounded-full blur-3xl"></div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center mb-20">
          <span className="text-brand-gold font-bold text-xs uppercase tracking-widest mb-2 inline-block">Processo</span>
          <h2 className="text-3xl md:text-4xl font-bold text-white leading-tight font-heading">
            Nosso processo de trabalho
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 relative">
          {/* Connector line for desktop */}
          <div className="hidden md:block absolute top-10 left-[10%] right-[10%] h-0.5 bg-brand-gold/20 -z-10"></div>

          {steps.map((step, i) => (
            <div key={i} className="flex flex-col items-center text-center relative">
              <div className="w-20 h-20 rounded-full bg-brand-navy border-4 border-brand-gold flex items-center justify-center text-brand-gold shadow-[0_0_15px_rgba(197,160,89,0.3)] mb-6 z-10">
                <step.icon className="w-8 h-8" />
              </div>
              <span className="text-brand-gold/70 font-bold text-xs uppercase tracking-wider mb-2">Passo 0{i + 1}</span>
              <h3 className="text-xl font-heading font-bold text-white mb-3">{step.title}</h3>
              <p className="text-gray-400 text-sm leading-relaxed">{step.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
