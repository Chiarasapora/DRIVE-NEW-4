
import React from 'react';
import { NavLink } from 'react-router-dom';
import { ArrowRight, Database, CreditCard, BrainCircuit } from 'lucide-react';
import Button from '../components/Button';

const productsData = [
  {
    id: 'sostrato-web',
    title: 'Sostrato Web',
    subtitle: 'Il Sistema Operativo della Tua Azienda',
    category: 'SOFTWARE CLOUD & ERP',
    description: "Una piattaforma all-in-one che centralizza magazzino, ordini, fatturazione e CRM. Elimina i silos di dati e connetti ogni reparto in tempo reale.",
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=80',
    link: '/prodotti/sostrato-web',
    icon: <Database size={24} />,
    features: ['Gestione Magazzino', 'Integrazione E-commerce', 'Business Intelligence']
  },
  {
    id: 'shipyo',
    title: 'Shipyo',
    subtitle: 'Gestione Abbonamenti Semplificata',
    category: 'FINTECH & PAYMENTS',
    description: "La soluzione definitiva per gestire pagamenti ricorrenti e abbonamenti. Integra Stripe e PayPal in minuti, gestisci i rinnovi e scala il tuo modello SaaS o Service-based.",
    image: 'https://images.unsplash.com/photo-1620121692029-d088224ddc74?auto=format&fit=crop&w=800&q=80',
    link: '/prodotti/shipyo',
    icon: <CreditCard size={24} />,
    features: ['Gateway Multipli', 'Gestione Rinnovi', 'Dashboard Ricavi']
  },
  {
    id: 'aiamica',
    title: 'Aiamica',
    subtitle: 'Formazione AI per Aziende',
    category: 'EDUTECH & AI',
    description: "La piattaforma formativa per portare l'Intelligenza Artificiale nella tua azienda. Corsi pratici, tutoraggio e strumenti per trasformare il tuo team in esperti di automazione.",
    image: 'https://images.unsplash.com/photo-1616469829941-c7200edec809?auto=format&fit=crop&w=800&q=80',
    link: '/prodotti/aiamica',
    icon: <BrainCircuit size={24} />,
    features: ['Corsi Asincroni', 'Tutoraggio Live', 'Certificazioni']
  }
];

const Products: React.FC = () => {
  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="py-24 bg-[#080a10] relative overflow-hidden">
        <div className="absolute inset-0 z-0">
           <img 
             src="/PRODOTTI/Hero_Section_Prodotti.webp" 
             alt="Products Ecosystem" 
             className="w-full h-full object-cover opacity-30" 
           />
           <div className="absolute inset-0 bg-gradient-to-r from-[#080a10] via-[#080a10]/80 to-transparent"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <span className="text-drive-accent text-xs font-bold tracking-widest uppercase mb-4 block">ECOSISTEMA DRIVE</span>
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-8 leading-tight">
            I Nostri <span className="text-drive-accent">Prodotti</span>.
          </h1>
          <p className="text-gray-300 text-lg md:text-xl mb-10 max-w-3xl leading-relaxed">
            Soluzioni tecnologiche proprietarie sviluppate per accelerare la trasformazione digitale, automatizzare i processi e formare le competenze del futuro.
          </p>
        </div>
      </section>

      {/* Grid Section */}
      <section className="py-20 bg-[#050608] relative">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-[#11141d] to-[#050608]"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {productsData.map((product) => (
              <NavLink 
                key={product.id} 
                to={product.link}
                className="group block h-full"
              >
                <div className="bg-[#0f1219]/80 backdrop-blur-sm border border-gray-800 rounded-xl overflow-hidden hover:border-drive-accent/50 transition-all flex flex-col h-full cursor-pointer relative shadow-lg hover:shadow-2xl hover:-translate-y-1 duration-300">
                  
                  {/* Image Area */}
                  <div className="relative h-64 overflow-hidden">
                     <div className="absolute inset-0 bg-gradient-to-t from-[#0f1219] via-transparent to-transparent z-10 opacity-80"></div>
                     <img 
                       src={product.image} 
                       alt={product.title} 
                       className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" 
                     />
                     <div className="absolute top-4 right-4 z-20 bg-gray-900/80 backdrop-blur-sm p-2 rounded-lg text-drive-accent border border-gray-700">
                        {product.icon}
                     </div>
                     <div className="absolute bottom-4 left-4 z-20">
                        <span className="bg-drive-accent/90 text-white text-[10px] font-bold px-3 py-1 rounded uppercase tracking-wider">
                          {product.category}
                        </span>
                     </div>
                  </div>

                  {/* Content Area */}
                  <div className="p-8 flex-1 flex flex-col">
                     <h3 className="text-2xl font-bold text-white mb-1 group-hover:text-drive-accent transition-colors">
                       {product.title}
                     </h3>
                     <p className="text-sm text-gray-500 font-medium mb-4 uppercase tracking-wide">{product.subtitle}</p>
                     
                     <p className="text-gray-400 text-sm leading-relaxed mb-6 flex-grow">
                        {product.description}
                     </p>

                     {/* Mini Feature List */}
                     <div className="space-y-2 mb-8 border-t border-gray-800 pt-4">
                        {product.features.map((feat, i) => (
                            <div key={i} className="flex items-center text-xs text-gray-300">
                                <div className="w-1.5 h-1.5 bg-drive-accent rounded-full mr-2"></div>
                                {feat}
                            </div>
                        ))}
                     </div>

                     <div className="mt-auto">
                        <div className="inline-flex items-center justify-center w-full px-6 py-3 border border-gray-700 text-white bg-gray-800/50 hover:bg-drive-accent hover:border-drive-accent text-sm font-medium rounded transition-all duration-200">
                           Esplora Prodotto <ArrowRight size={16} className="ml-2 group-hover:translate-x-1 transition-transform" />
                        </div>
                     </div>
                  </div>
                </div>
              </NavLink>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Bottom */}
      <section className="relative py-24 text-center overflow-hidden border-t border-gray-800">
         {/* Background Image */}
         <div className="absolute inset-0 z-0">
          <img
            src="/PRODOTTI/CTA_Prodotti.webp"
            alt="Tech Products Background"
            className="w-full h-full object-cover"
          />
          {/* Dark Overlay */}
          <div className="absolute inset-0 bg-[#080a10]/90"></div>
        </div>

         <div className="max-w-3xl mx-auto px-4 relative z-10">
            <h2 className="text-3xl font-bold text-white mb-6">Non sai quale soluzione fa per te?</h2>
            <p className="text-gray-400 mb-8">
               I nostri consulenti possono analizzare le tue esigenze e consigliarti il prodotto più adatto per scalare il tuo business.
            </p>
            <NavLink to="/contatti">
               <Button variant="primary" className="px-10 py-4 text-base shadow-xl shadow-black/50">Parla con un Esperto</Button>
            </NavLink>
         </div>
      </section>
    </div>
  );
};

export default Products;
