
import React from 'react';
import { NavLink as RouterLink } from 'react-router-dom';
import { Facebook, Instagram, Linkedin } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-[#050608] border-t border-gray-800 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Layout: Flex on Desktop to handle 40% / 60% split */}
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-0 mb-16">
          
          {/* Column 1: Info & Legal (40% width) */}
          <div className="w-full lg:w-[40%] lg:pr-12">
            <h3 className="text-[20px] font-bold text-white mb-6 leading-tight">
              WE <span className="text-drive-accent">DRIVE</span> YOUR BUSINESS
            </h3>
            <p className="text-gray-400 text-[14px] leading-relaxed mb-6 max-w-sm">
              Partner strategico per la trasformazione digitale delle imprese italiane.
            </p>
            <div className="text-gray-500 text-[12px] space-y-2 leading-relaxed mb-8">
              <p className="font-semibold text-gray-400">TEYE S.R.L. - Partita IVA: 03490770546</p>
            </div>

            {/* Social Icons */}
            <div className="flex gap-4">
              <a 
                href="https://www.facebook.com/driveagency.it" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="w-10 h-10 rounded-full bg-gray-900 border border-gray-800 flex items-center justify-center text-gray-400 hover:bg-drive-accent hover:text-white hover:border-drive-accent transition-all duration-300"
                aria-label="Facebook"
              >
                <Facebook size={18} />
              </a>
              <a 
                href="https://www.instagram.com/driveagency.it/" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="w-10 h-10 rounded-full bg-gray-900 border border-gray-800 flex items-center justify-center text-gray-400 hover:bg-drive-accent hover:text-white hover:border-drive-accent transition-all duration-300"
                aria-label="Instagram"
              >
                <Instagram size={18} />
              </a>
              <a 
                href="https://www.linkedin.com/company/driveagency/" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="w-10 h-10 rounded-full bg-gray-900 border border-gray-800 flex items-center justify-center text-gray-400 hover:bg-drive-accent hover:text-white hover:border-drive-accent transition-all duration-300"
                aria-label="LinkedIn"
              >
                <Linkedin size={18} />
              </a>
            </div>
          </div>
          
          {/* Columns 2-5: Links Wrapper (60% width) */}
          <div className="w-full lg:w-[60%] grid grid-cols-2 md:grid-cols-4 gap-6">
            
            {/* Column 2: Prodotti */}
            <div>
              <h4 className="text-white font-semibold mb-6 text-[16px]">Prodotti</h4>
              <ul className="space-y-3 text-[14px] text-gray-400">
                <li><RouterLink to="/prodotti/sostrato-web" className="hover:text-drive-accent transition-colors">Sostrato Web</RouterLink></li>
                <li><RouterLink to="/prodotti/shipyo" className="hover:text-drive-accent transition-colors">Shipyo</RouterLink></li>
                <li><RouterLink to="/prodotti/aiamica" className="hover:text-drive-accent transition-colors">Aiamica</RouterLink></li>
              </ul>
            </div>

            {/* Column 3: Servizi */}
            <div>
              <h4 className="text-white font-semibold mb-6 text-[16px]">Servizi</h4>
              <ul className="space-y-3 text-[14px] text-gray-400">
                <li><RouterLink to="/servizi/ecommerce-amazon" className="hover:text-drive-accent transition-colors">E-commerce</RouterLink></li>
                <li><RouterLink to="/servizi/ai-flows" className="hover:text-drive-accent transition-colors">AI & Automazione</RouterLink></li>
                <li><RouterLink to="/servizi/digital-transformation" className="hover:text-drive-accent transition-colors">Trasformazione</RouterLink></li>
                <li><RouterLink to="/servizi/innovation-strategy" className="hover:text-drive-accent transition-colors">Strategia</RouterLink></li>
                <li><RouterLink to="/servizi/funding" className="hover:text-drive-accent transition-colors">Finanza</RouterLink></li>
              </ul>
            </div>

            {/* Column 4: Azienda */}
            <div>
              <h4 className="text-white font-semibold mb-6 text-[16px]">Azienda</h4>
              <ul className="space-y-3 text-[14px] text-gray-400">
                <li><RouterLink to="/azienda" className="hover:text-drive-accent transition-colors">Chi Siamo</RouterLink></li>
                <li><RouterLink to="/case-study" className="hover:text-drive-accent transition-colors">Case Study</RouterLink></li>
                <li><RouterLink to="/consulenza-trasformazione" className="hover:text-drive-accent transition-colors">Consulenza</RouterLink></li>
              </ul>
            </div>

            {/* Column 5: Contatti */}
            <div>
              <h4 className="text-white font-semibold mb-6 text-[16px]">Contatti</h4>
              <ul className="space-y-3 text-[14px] text-gray-400">
                <li>(+39) 075 3752589</li>
                <li><a href="mailto:info@driveagency.it" className="hover:text-drive-accent transition-colors">info@driveagency.it</a></li>
                <li>VIA DEL CONSERVIFICIO 28</li>
                <li>06132 - PERUGIA (PG)</li>
              </ul>
            </div>

          </div>
        </div>

        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center text-[12px] text-gray-500">
          <p>© 2025 DRIVE.IT - Tutti i diritti riservati.</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <RouterLink to="/privacy-policy" className="hover:text-gray-300">Privacy Policy</RouterLink>
            <RouterLink to="/cookie-policy" className="hover:text-gray-300">Cookie Policy</RouterLink>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
