import { MessageCircle } from 'lucide-react';

export default function WhatsAppFAB() {
  return (
    <a
      href="https://wa.me/5519971151728"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 flex items-center justify-center w-14 h-14 bg-[#25D366] text-white rounded-full shadow-[0_4px_20px_rgba(37,211,102,0.4)] hover:scale-110 hover:bg-[#20bd5a] transition-all duration-300 group"
      aria-label="Falar conosco no WhatsApp"
    >
      <MessageCircle strokeWidth={2.5} className="w-7 h-7" />
      
      {/* Tooltip toltip on hover (desktop only) */}
      <span className="absolute right-full mr-4 bg-white text-gray-800 text-xs font-bold px-3 py-2 rounded shadow-lg opacity-0 pointer-events-none group-hover:opacity-100 transition-opacity hidden md:block whitespace-nowrap">
        Fale conosco!
        {/* Subtle triangle pointing right */}
        <span className="absolute left-full top-1/2 -translate-y-1/2 border-[6px] border-transparent border-l-white"></span>
      </span>
    </a>
  );
}
