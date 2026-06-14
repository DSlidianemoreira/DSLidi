import { ArrowRight, Monitor, Search, Map, BarChart } from 'lucide-react';

export default function Services() {
  const services = [
    {
      title: 'Web Design',
      description: 'Desenvolvemos sites elegantes, rápidos e totalmente otimizados para converter visitantes em clientes. A vitrine digital que sua marca merece.',
      slug: 'web-design',
      icon: Monitor,
      image: '/WebDesign.png'
    },
    {
      title: 'SEO',
      description: 'Seja encontrado por quem realmente busca seus serviços. Colocamos sua empresa no topo das buscas orgânicas.',
      slug: 'seo',
      icon: Search,
      image: '/SEO.png'
    },
    {
      title: 'Google Meu Negócio',
      description: 'Domine o mapa da sua região. Facilitamos o contato direto dos seus clientes com sua empresa através de um perfil otimizado e profissional.',
      slug: 'gmn',
      icon: Map,
      image: '/GMNLIdi.png'
    },
    {
      title: 'Estratégias de Marketing',
      description: 'Planejamento integrado de canais e conteúdo para garantir que sua marca mantenha uma presença ativa e relevante no mercado.',
      slug: 'estrategias',
      icon: BarChart,
      image: '/Marketing.png'
    }
  ];

  return (
    <section id="servicos" className="py-24 px-6 bg-gray-50 border-y border-gray-200">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <span className="text-brand-gold font-bold text-xs uppercase tracking-widest mb-2 inline-block">Nossos Serviços</span>
          <h2 className="text-3xl md:text-4xl font-bold text-brand-navy leading-tight font-heading">
            Como podemos ajudar o seu negócio a crescer
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <div key={index} className="group bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 flex flex-col h-full">
              <div className="w-full overflow-hidden relative bg-gray-50 flex items-center justify-center border-b border-gray-100">
                <div className="absolute inset-0 bg-brand-navy/10 group-hover:bg-transparent transition-colors z-10 pointer-events-none"></div>
                <img 
                  src={service.image} 
                  alt={"Representação visual do serviço de " + service.title} 
                  className="w-full h-auto block transition-transform duration-700 group-hover:scale-105"
                  loading="lazy"
                  onError={(e) => {
                    e.currentTarget.style.display = 'none';
                  }}
                />
              </div>
              
              <div className="p-8 pt-10 flex flex-col flex-grow relative text-center items-center">
                {/* Floating Icon */}
                <div className="absolute -top-7 left-1/2 -translate-x-1/2 w-14 h-14 bg-brand-gold rounded-full flex items-center justify-center text-brand-navy shadow-lg border-4 border-white group-hover:bg-brand-navy group-hover:text-brand-gold transition-colors duration-300">
                  <service.icon className="w-6 h-6" />
                </div>

                <h3 className="font-heading font-bold text-xl text-brand-navy mb-4">
                  {service.title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed mb-8 flex-grow">
                  {service.description}
                </p>
                <a 
                  href="https://wa.me/5519971151728" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center text-xs font-bold uppercase tracking-wider text-brand-gold hover:text-brand-navy transition-colors mt-auto group/btn"
                >
                  Saiba mais 
                  <ArrowRight className="w-4 h-4 ml-2 group-hover/btn:translate-x-1 transition-transform" />
                </a>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-20 text-center bg-brand-navy rounded-2xl p-10 md:p-14 relative overflow-hidden">
          <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-5"></div>
          <div className="relative z-10">
            <h3 className="text-2xl md:text-3xl font-heading text-white mb-8">
              Precisa de uma solução personalizada para sua empresa?
            </h3>
            <a 
              href="https://wa.me/5519971151728"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-brand-gold text-brand-navy px-8 py-4 rounded font-bold uppercase tracking-wider hover:bg-white transition-colors shadow-lg"
            >
              Solicitar consultoria gratuita
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
