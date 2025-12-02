
import React, { useState, useEffect } from 'react';
import { NavLink as RouterLink, useLocation } from 'react-router-dom';
import { NavLink } from '../types';
import { ChevronDown, ChevronUp } from 'lucide-react';

const links: NavLink[] = [
  { label: 'Home', path: '/' },
  { 
    label: 'Prodotti', 
    path: '/prodotti',
    subItems: [
      { label: 'Sostrato Web', path: '/prodotti/sostrato-web' },
      { label: 'Shipyo', path: '/prodotti/shipyo' },
      { label: 'Aiamica', path: '/prodotti/aiamica' },
    ]
  },
  { 
    label: 'Servizi', 
    path: '/servizi',
    subItems: [
      { label: 'E-commerce & Marketplace Amazon', path: '/servizi/ecommerce-amazon' },
      { label: 'Realizzazione flussi AI', path: '/servizi/ai-flows' },
      { label: 'Consulenza Innovazione & Strategia', path: '/servizi/innovation-strategy' },
      { label: 'Trasformazione digitale', path: '/servizi/digital-transformation' },
      { label: 'Funding & Finanza Agevolata', path: '/servizi/funding' },
    ]
  },
  { label: 'Case Study', path: '/case-study' },
  { label: 'Azienda', path: '/azienda' },
  { label: 'Contatti', path: '/contatti' },
];

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [expandedItems, setExpandedItems] = useState<string[]>([]);
  const location = useLocation();

  const toggleMenu = () => setIsOpen(!isOpen);

  const toggleAccordion = (label: string) => {
    setExpandedItems(prev => 
      prev.includes(label) 
        ? prev.filter(item => item !== label) 
        : [...prev, label]
    );
  };

  // Close menu when route changes
  useEffect(() => {
    setIsOpen(false);
    setExpandedItems([]); // Reset accordion state on close
  }, [location]);

  // Prevent scrolling when menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  return (
    <>
      <nav className="fixed w-full z-50 bg-drive-bg/90 backdrop-blur-md border-b border-gray-800 transition-all duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-24">
            {/* Logo */}
            <div className="flex-shrink-0 z-50">
              <RouterLink to="/" className="text-sm md:text-base font-bold text-white tracking-widest uppercase hover:opacity-80 transition-opacity">
                WE <span className="text-drive-accent">DRIVE</span> YOUR BUSINESS
              </RouterLink>
            </div>
            
            {/* Hamburger / Close Button */}
            <div className="flex items-center z-50">
              <button
                onClick={toggleMenu}
                className="group flex flex-col justify-center items-end w-10 h-10 focus:outline-none"
                aria-label="Toggle Menu"
              >
                {isOpen ? (
                  // X Icon for Close State
                  <svg 
                    width="24" 
                    height="24" 
                    viewBox="0 0 24 24" 
                    fill="none" 
                    stroke="currentColor" 
                    strokeWidth="2" 
                    strokeLinecap="round" 
                    strokeLinejoin="round" 
                    className="text-white transition-transform duration-300 transform rotate-0 hover:rotate-90"
                  >
                    <line x1="18" y1="6" x2="6" y2="18"></line>
                    <line x1="6" y1="6" x2="18" y2="18"></line>
                  </svg>
                ) : (
                  // Custom 2-line Hamburger Icon
                  <div className="flex flex-col gap-1.5 items-end transition-all duration-300 group-hover:gap-2">
                    <span className="block w-8 h-0.5 bg-white transition-all duration-300 group-hover:w-6"></span>
                    <span className="block w-8 h-0.5 bg-white transition-all duration-300"></span>
                  </div>
                )}
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Fullscreen Overlay Menu */}
      <div 
        className={`fixed inset-0 bg-[#050608]/95 backdrop-blur-xl z-40 flex flex-col items-center justify-center overflow-y-auto transition-all duration-500 ease-in-out ${
          isOpen ? 'opacity-100 visible' : 'opacity-0 invisible pointer-events-none'
        }`}
      >
        <div className="flex flex-col items-center justify-center w-full max-w-2xl px-6 py-12 space-y-6">
          {links.map((link) => {
            const isExpanded = expandedItems.includes(link.label);
            const hasSubItems = link.subItems && link.subItems.length > 0;
            const isActive = location.pathname === link.path || location.pathname.startsWith(link.path);

            return (
              <div key={link.path} className="flex flex-col items-center w-full">
                {/* 
                   We use 'relative' and 'justify-center' to ensure the text is perfectly centered.
                   The chevron button is absolutely positioned to the right so it doesn't push the text off-center.
                */}
                <div className="relative flex items-center justify-center group">
                  {/* Main Link Text */}
                  <RouterLink
                    to={link.path}
                    onClick={() => setIsOpen(false)}
                    className={`text-2xl md:text-3xl font-bold tracking-tight transition-colors duration-300 relative ${
                      isActive ? 'text-white' : 'text-gray-400 hover:text-white'
                    }`}
                  >
                    {link.label}
                    {/* Animated Underline */}
                    <span className={`absolute -bottom-1 left-0 w-0 h-0.5 bg-drive-accent transition-all duration-300 group-hover:w-full ${isActive ? 'w-full' : ''}`}></span>
                  </RouterLink>

                  {/* Accordion Toggle - Absolutely Positioned */}
                  {hasSubItems && (
                     <button 
                       onClick={(e) => {
                         e.preventDefault();
                         e.stopPropagation();
                         toggleAccordion(link.label);
                       }}
                       className={`absolute left-[calc(100%+12px)] top-1/2 -translate-y-1/2 p-1 rounded-full hover:bg-white/10 transition-colors ${
                          isExpanded ? 'text-white' : 'text-gray-500'
                       }`}
                       aria-label="Toggle Submenu"
                     >
                       {isExpanded ? <ChevronUp size={24} /> : <ChevronDown size={24} />}
                     </button>
                  )}
                </div>
                
                {/* Accordion Content (Sub-items) */}
                <div 
                  className={`overflow-hidden transition-all duration-300 ease-in-out w-full flex flex-col items-center ${
                    isExpanded ? 'max-h-[500px] opacity-100 mt-4' : 'max-h-0 opacity-0'
                  }`}
                >
                  <div className="flex flex-col items-center space-y-3 py-2">
                    {link.subItems?.map((subLink) => (
                      <RouterLink
                        key={subLink.path}
                        to={subLink.path}
                        className={`text-base md:text-lg font-normal transition-colors duration-200 ${
                          location.pathname === subLink.path
                            ? 'text-drive-accent'
                            : 'text-gray-500 hover:text-gray-200'
                        }`}
                      >
                        {subLink.label}
                      </RouterLink>
                    ))}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Navbar;
