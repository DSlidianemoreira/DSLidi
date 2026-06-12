import { MessageCircle, Phone } from 'lucide-react';

export default function FinalCTA() {
  return (
    <section id="contato" className="py-24 px-6 bg-brand-gold border-t border-brand-navy/10 relative overflow-hidden">
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-white opacity-5 rotate-45 transform translate-x-1/2 -translate-y-1/2 rounded-3xl"></div>
      
      <div className="max-w-4xl mx-auto text-center relative z-10">
        <h2 className="text-3xl md:text-5xl font-bold text-brand-navy mb-6 leading-tight font-heading">
          Vamos elevar o patamar da sua marca hoje?
        </h2>
        
        <p className="text-brand-navy/80 text-lg md:text-xl max-w-2xl mx-auto mb-12 font-medium">
          Não deixe sua empresa invisível no Google. O design que você merece está a um clique de distância.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-5 justify-center items-center">
          <a
            href="https://wa.me/5519971151728"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto flex items-center justify-center gap-2 bg-brand-navy text-brand-gold px-10 py-5 rounded font-bold uppercase tracking-wider hover:bg-white hover:text-brand-navy transition-all duration-300 shadow-xl"
          >
            <MessageCircle className="w-5 h-5" />
            Falar com a Lidi no WhatsApp
          </a>

          <a
            href="tel:5519971151728"
            className="w-full sm:w-auto flex items-center justify-center gap-2 bg-transparent text-brand-navy border-2 border-brand-navy px-8 py-4 rounded font-bold uppercase tracking-wider hover:bg-brand-navy hover:text-brand-gold transition-all duration-300"
          >
            <Phone className="w-5 h-5" />
            Ligar agora
          </a>
        </div>
        
        <p className="mt-8 text-sm text-brand-navy/70 font-medium">
          Respondemos rapidamente com toda a atenção que seu projeto exige.
        </p>
      </div>
    </section>
  );
}
