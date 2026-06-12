import { MapPin, Clock, Phone } from 'lucide-react';

export default function Location() {
  return (
    <section id="area-atuacao" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <span className="text-brand-gold font-bold text-xs uppercase tracking-widest mb-2 inline-block">Área de Atuação</span>
          <h2 className="text-3xl md:text-4xl font-bold text-brand-navy leading-tight font-heading mb-6">
            Marketing Digital em Artur Nogueira e Região
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg">
            Atendemos empresas em toda a cidade de Artur Nogueira e em todo o Estado de São Paulo, levando soluções de marketing que respeitam as particularidades do seu negócio.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Info Details */}
          <div className="space-y-8 p-10 bg-gray-50 rounded-2xl border border-gray-100">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center text-brand-navy shadow-sm flex-shrink-0">
                <MapPin className="w-6 h-6 text-brand-gold" />
              </div>
              <div>
                <h3 className="font-bold text-brand-navy text-lg mb-1">Endereço</h3>
                <p className="text-gray-600">Rua 7 de Setembro - Jardim Rezek II<br/>Artur Nogueira/SP</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center text-brand-navy shadow-sm flex-shrink-0">
                <Clock className="w-6 h-6 text-brand-gold" />
              </div>
              <div>
                <h3 className="font-bold text-brand-navy text-lg mb-1">Horário de Funcionamento</h3>
                <p className="text-gray-600">Segunda a sexta, das 9:00 às 17:00</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center text-brand-navy shadow-sm flex-shrink-0">
                <Phone className="w-6 h-6 text-brand-gold" />
              </div>
              <div>
                <h3 className="font-bold text-brand-navy text-lg mb-1">WhatsApp</h3>
                <a href="https://wa.me/5519971151728" className="text-brand-gold font-semibold hover:underline">
                  (19) 97115-1728
                </a>
              </div>
            </div>
            
            <div className="pt-6">
              <a 
                href="https://wa.me/5519971151728"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto inline-flex justify-center items-center bg-brand-navy text-white px-8 py-4 rounded font-bold uppercase tracking-wider hover:bg-brand-gold hover:text-brand-navy transition-colors shadow-md"
              >
                Agende uma visita
              </a>
            </div>
          </div>

          {/* Map Placeholder */}
          <div className="w-full h-[400px] lg:h-full min-h-[400px] bg-gray-200 rounded-2xl overflow-hidden relative border border-gray-200">
            {/* The user will need to place the iframe here, this acts as a placeholder if iframe is empty */}
            <div className="absolute inset-0 flex flex-col items-center justify-center text-gray-500 bg-gray-100 p-6 text-center">
              <MapPin className="w-12 h-12 mb-4 text-brand-gold/50" />
              <p className="font-medium font-heading text-xl">Mapa do Google</p>
              <p className="text-sm mt-2">Substitua este bloco pelo iframe do Google Maps da sua empresa.</p>
            </div>
            {/* Use an actual iframe if user provides later: 
            <iframe src="..." className="w-full h-full border-0" allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
            */}
          </div>
        </div>
      </div>
    </section>
  );
}
