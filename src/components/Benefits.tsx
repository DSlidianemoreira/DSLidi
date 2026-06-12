import { Award, TrendingUp, Users, MapPin } from 'lucide-react';

export default function Benefits() {
  const benefits = [
    {
      title: 'Design e Soluções',
      desc: 'Transformando visão em design e soluções reais.',
      icon: Award
    },
    {
      title: 'Atendimento Exclusivo',
      desc: 'Atendimento ético e personalizado focado nas suas necessidades.',
      icon: Users
    },
    {
      title: 'Foco B2B',
      desc: 'Foco em empresas de médio porte buscando expansão.',
      icon: TrendingUp
    }
  ];

  return (
    <section id="beneficios" className="py-24 px-6 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <span className="text-brand-gold font-bold text-xs uppercase tracking-widest mb-2 inline-block">Diferenciais</span>
          <h2 className="text-3xl md:text-4xl font-bold text-brand-navy leading-tight font-heading">
            Por que escolher a DS Lidi?
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
          {benefits.map((benefit, i) => (
            <div key={i} className="flex gap-6 items-start p-6 rounded-2xl hover:bg-gray-50 transition-colors border border-transparent hover:border-gray-100 group">
              <div className="flex-shrink-0 w-16 h-16 rounded-full bg-brand-navy/5 flex items-center justify-center text-brand-gold group-hover:bg-brand-gold group-hover:text-brand-navy transition-colors duration-300">
                <benefit.icon className="w-8 h-8" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-brand-navy mb-3 font-heading">{benefit.title}</h3>
                <p className="text-gray-600 leading-relaxed text-sm md:text-base">{benefit.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
