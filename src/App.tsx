import Header from './components/Header';
import Hero from './components/Hero';
import Credibility from './components/Credibility';
import About from './components/About';
import Services from './components/Services';
import Benefits from './components/Benefits';
import Process from './components/Process';
import Testimonials from './components/Testimonials';
import Location from './components/Location';
import FAQ from './components/FAQ';
import FinalCTA from './components/FinalCTA';
import Footer from './components/Footer';
import WhatsAppFAB from './components/WhatsAppFAB';

export default function App() {
  return (
    <div className="min-h-screen font-body text-gray-800 bg-white selection:bg-brand-gold selection:text-brand-navy flex flex-col">
      <Header />
      <main className="flex-grow">
        <Hero />
        <Credibility />
        <About />
        <Services />
        <Benefits />
        <Process />
        <Location />
        <FAQ />
        <FinalCTA />
      </main>
      <Footer />
      <WhatsAppFAB />
    </div>
  );
}

