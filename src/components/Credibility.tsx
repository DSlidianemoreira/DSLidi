import { MapPin, Target, ShieldCheck, Diamond } from 'lucide-react';

export default function Credibility() {
  const items = [
    { icon: MapPin, text: 'Especialista em SEO e GMN' },
    { icon: Target, text: 'Projetos focados em conversão real' },
    { icon: ShieldCheck, text: 'Atendimento ético e personalizado' },
    { icon: Diamond, text: 'Foco em empresas de médio porte' },
  ];

  return (
    <section id="credibilidade" className="bg-brand-gold py-8 border-t-4 border-brand-navy">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {items.map((item, index) => (
            <div key={index} className="flex items-center gap-4 justify-center md:justify-start lg:justify-center p-4 bg-brand-navy/5 rounded-lg">
              <div className="w-12 h-12 flex items-center justify-center bg-brand-navy text-brand-gold rounded-full flex-shrink-0 shadow-sm border border-brand-navy/10">
                <item.icon className="w-6 h-6" strokeWidth={1.5} />
              </div>
              <span className="font-semibold text-brand-navy text-sm md:text-base leading-tight">
                {item.text}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
