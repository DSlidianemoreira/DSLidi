import { useState } from 'react';
import { ChevronDown } from 'lucide-react';

export default function FAQ() {
  const faqs = [
    {
      q: 'Quanto custa criar um site profissional?',
      a: 'O investimento varia conforme a complexidade, mas focamos em soluções com o melhor custo-benefício para médias empresas.'
    },
    {
      q: 'Como faço para minha empresa aparecer no topo do Google?',
      a: 'Utilizamos SEO Local e GMN para destacar seu negócio em buscas como "Soluções na sua região" ou categorias específicas da sua área, conectando você com clientes próximos.'
    },
    {
      q: 'Quanto tempo leva para ver resultados no SEO?',
      a: 'SEO é um trabalho de médio prazo, mas otimizações locais podem gerar frutos em poucas semanas.'
    },
    {
      q: 'Quais as formas de pagamento?',
      a: 'Facilitamos o pagamento para viabilizar o crescimento sustentável do seu projeto, entre em contato para discutirmos opções adequadas.'
    },
    {
      q: 'A DS Lidi atende apenas em Artur Nogueira?',
      a: 'Atendemos presencialmente em Artur Nogueira e digitalmente em todo o estado de São Paulo.'
    },
    {
      q: 'Como agendar uma reunião?',
      a: 'Basta clicar em qualquer botão de WhatsApp aqui no site; respondemos em até 30 minutos em horário comercial.'
    }
  ];

  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-24 bg-brand-navy text-white px-6">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <span className="text-brand-gold font-bold text-xs uppercase tracking-widest mb-2 inline-block">Dúvidas Comuns</span>
          <h2 className="text-3xl md:text-4xl font-bold text-white leading-tight font-heading">
            Perguntas Frequentes sobre Marketing
          </h2>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, i) => (
            <div 
              key={i} 
              className={`border rounded-lg overflow-hidden transition-colors duration-300 ${openIndex === i ? 'border-brand-gold bg-white/5' : 'border-white/10 bg-transparent'}`}
            >
              <button
                className="w-full text-left px-6 py-5 flex items-center justify-between focus:outline-none"
                onClick={() => toggle(i)}
              >
                <span className="font-bold pr-8 text-base md:text-lg">{faq.q}</span>
                <ChevronDown 
                  className={`w-5 h-5 text-brand-gold flex-shrink-0 transition-transform duration-300 ${openIndex === i ? 'rotate-180' : ''}`} 
                />
              </button>
              
              <div 
                className={`transition-all duration-300 ease-in-out ${openIndex === i ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}
              >
                <div className="px-6 pb-6 text-gray-300 text-sm md:text-base leading-relaxed">
                  {faq.a}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
