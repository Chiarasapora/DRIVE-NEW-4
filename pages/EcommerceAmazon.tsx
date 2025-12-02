
import React from 'react';
import Button from '../components/Button';
import { 
  ShoppingBag, 
  Search, 
  TrendingUp, 
  Tags, 
  Package, 
  BarChart2, 
  MessageSquare, 
  ExternalLink,
  Award,
  ArrowRight,
  Globe,
  Shield,
  Zap,
  Briefcase
} from 'lucide-react';
import { NavLink } from 'react-router-dom';

const EcommerceAmazon: React.FC = () => {
  return (
    <div className="pt-20">
      {/* Hero Section (KEPT AS IS) */}
      <section className="py-24 bg-[#080a10] relative overflow-hidden">
        <div className="absolute inset-0 z-0">
           <img 
             src="https://images.unsplash.com/photo-1580674285054-bed31e145f59?auto=format&fit=crop&w=2000&q=80" 
             alt="Amazon Logistics and Ecommerce" 
             className="w-full h-full object-cover opacity-20" 
           />
           <div className="absolute inset-0 bg-gradient-to-r from-[#080a10] via-[#080a10]/80 to-transparent"></div>
           {/* Amazon Orange Glow */}
           <div className="absolute -bottom-20 right-0 w-96 h-96 bg-orange-500/10 rounded-full blur-[100px]"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="flex flex-col md:flex-row gap-4 items-start md:items-center mb-6">
            <span className="text-drive-accent text-xs font-bold tracking-widest uppercase block">SERVIZI / AMAZON & E-COMMERCE</span>
            <div className="bg-[#FF9900]/10 border border-[#FF9900]/30 px-3 py-1 rounded flex items-center gap-2">
                <Award size={14} className="text-[#FF9900]" />
                <span className="text-[#FF9900] text-xs font-bold uppercase tracking-wider">Partner Ufficiale Amazon SPN</span>
            </div>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-8 leading-tight">
            Dominio su <span className="text-drive-accent">Amazon</span>.
          </h1>
          <p className="text-gray-300 text-lg md:text-xl mb-10 max-w-3xl leading-relaxed">
            Massimizza le tue vendite sui marketplace ed e-commerce. Siamo il tuo Partner Ufficiale Amazon per la crescita data-driven.
          </p>
          
          <div className="flex flex-wrap gap-4">
            <a href="https://marketplace-arena.it/" target="_blank" rel="noopener noreferrer">
              <Button variant="primary" className="px-8 py-4 text-base shadow-xl shadow-[#9c2948]/30">
                Vai a Marketplace Arena <ExternalLink size={18} className="ml-2" />
              </Button>
            </a>
          </div>
        </div>
      </section>

      {/* Overview & Stat Highlight */}
      <section className="pb-20 pt-20 bg-gradient-to-b from-[#080a10] to-[#11141d]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-12">
             <h2 className="text-2xl font-bold text-white mb-4">Gestione Professionale Marketplace</h2>
             <p className="text-gray-400 max-w-4xl leading-relaxed text-lg">
               Dedicato a Brand che vogliono presidiare Amazon professionalmente. Non ci limitiamo a caricare prodotti: costruiamo una strategia di canale che protegge il marchio e massimizza i margini.
             </p>
          </div>
          
          {/* Highlight Stat Block (Requested) */}
          <div className="rounded-xl overflow-hidden shadow-2xl border border-[#FF9900]/30 relative group bg-[#0a0c12]">
            <div className="absolute inset-0 bg-gradient-to-r from-orange-500/10 to-transparent opacity-50"></div>
            <div className="grid md:grid-cols-2 items-center p-12 relative z-10">
                <div>
                     <div className="text-6xl md:text-8xl font-bold text-white mb-2 leading-none">+250%</div>
                     <div className="text-[#FF9900] font-bold uppercase tracking-widest text-sm mb-6">Fatturato Amazon Medio</div>
                </div>
                <div>
                    <p className="text-gray-300 text-xl font-light border-l-4 border-[#FF9900] pl-6">
                        "Incremento registrato dai nostri clienti nei primi 6 mesi di gestione full-service."
                    </p>
                </div>
            </div>
          </div>
        </div>
      </section>

      {/* Problem / Solution Section (3+1 Grid) */}
      <section className="py-24 bg-[#0b0e14] relative overflow-hidden">
        {/* Tech Grid Pattern */}
        <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: 'radial-gradient(#ffffff 1px, transparent 1px)', backgroundSize: '24px 24px' }}></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-white mb-4">Amazon è una giungla, non un parco giochi.</h2>
            <p className="text-gray-400 max-w-2xl mx-auto">Vendere su Amazon richiede competenze verticali. Il "fai da te" porta a blocchi account e perdita di fatturato.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: <Shield className="text-drive-accent" size={32} />,
                title: "Violazioni & Ban",
                desc: "Policy che cambiano ogni mese. Un errore nella scheda prodotto o nella risposta a un cliente può costarti la sospensione dell'account."
              },
              {
                icon: <TrendingUp className="text-drive-accent" size={32} />,
                title: "Pubblicità Costosa",
                desc: "Senza una gestione PPC professionale, il TACOS (Total Advertising Cost of Sales) erode tutto il tuo margine."
              },
              {
                icon: <Package className="text-drive-accent" size={32} />,
                title: "Incubo Logistico",
                desc: "Gestire resi, stoccaggio FBA e spedizioni internazionali richiede una precisione chirurgica per evitare costi di magazzino extra."
              },
              {
                icon: <Globe className="text-drive-accent" size={32} />,
                title: "Competizione Globale",
                desc: "Non competi solo con il negozio sotto casa, ma con brand cinesi e multinazionali. Ti serve una strategia di Brand Protection, contenuti A+ e SEO internazionale per emergere dalla massa."
              }
            ].map((item, i) => (
              <div 
                key={i} 
                className={`bg-[#151921]/50 backdrop-blur-sm p-8 rounded-lg border border-gray-800 hover:border-drive-accent/30 transition-colors ${i === 3 ? 'md:col-span-3' : ''}`}
              >
                <div className={`${i === 3 ? 'md:flex md:items-start md:gap-8' : ''}`}>
                    <div className={`mb-6 bg-drive-accent/10 w-fit p-3 rounded-lg ${i === 3 ? 'mb-0 flex-shrink-0' : ''}`}>
                        {item.icon}
                    </div>
                    <div>
                        <h3 className="text-xl font-bold text-white mb-4">{item.title}</h3>
                        <p className="text-gray-400 text-sm leading-relaxed">{item.desc}</p>
                    </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Use Cases - Immersive Panels */}
      <section className="py-24 bg-[#080a10] border-t border-gray-900 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
           <div className="mb-16 text-center lg:text-left">
             <span className="text-drive-accent text-xs font-bold tracking-widest uppercase mb-2 block">STRATEGIE</span>
             <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Strategie per ogni fase</h2>
             <p className="text-gray-400 text-lg max-w-2xl">Che tu debba lanciare un nuovo prodotto o scalare un brand consolidato.</p>
           </div>

           <div className="grid lg:grid-cols-2 gap-8 lg:gap-12">
             
             {/* Path 1: Private Label Launch - YELLOW THEME */}
             <div className="group relative rounded-2xl overflow-hidden min-h-[550px] border border-gray-800 hover:border-[#FF9900]/50 transition-all duration-500">
                {/* Background Image */}
                <div className="absolute inset-0">
                  <img 
                    src="https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&w=1000&q=80" 
                    alt="Brand Launch Planning" 
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/80 to-black/30"></div>
                  <div className="absolute inset-0 bg-[#FF9900]/20 mix-blend-overlay"></div>
                </div>

                {/* Content */}
                <div className="relative z-10 p-8 md:p-12 h-full flex flex-col justify-end">
                   <div className="mb-auto">
                      <div className="bg-[#FF9900]/90 w-fit p-3 rounded-xl mb-6 shadow-lg shadow-[#FF9900]/50 backdrop-blur-sm">
                        <Rocket className="text-white" size={32} />
                      </div>
                   </div>
                   
                   <h3 className="text-3xl font-bold text-white mb-4">Lancio Brand & Private Label</h3>
                   <p className="text-gray-300 mb-8 text-lg leading-relaxed">
                      Parti da zero con il piede giusto. Analisi di mercato e posizionamento premium.
                   </p>
                   
                   <ul className="space-y-4">
                     {[
                       "Analisi nicchia e competitor.",
                       "Registrazione Marchio & Brand Store.",
                       "Campagne lancio Honeymoon Period."
                     ].map((step, i) => (
                       <li key={i} className="flex items-center text-sm text-gray-200 bg-white/5 backdrop-blur-md p-4 rounded-lg border border-white/10 hover:bg-white/10 transition-colors">
                         <span className="bg-[#FF9900] text-white w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold mr-4 flex-shrink-0">{i+1}</span>
                         {step}
                       </li>
                     ))}
                   </ul>
                </div>
             </div>

             {/* Path 2: Reseller Scaling - BORDEAUX THEME */}
             <div className="group relative rounded-2xl overflow-hidden min-h-[550px] border border-gray-800 hover:border-drive-accent/50 transition-all duration-500">
                {/* Background Image */}
                <div className="absolute inset-0">
                  <img 
                    src="https://images.unsplash.com/photo-1578575437130-527eed3abbec?auto=format&fit=crop&w=1000&q=80" 
                    alt="Global Logistics Containers" 
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/80 to-black/30"></div>
                  <div className="absolute inset-0 bg-drive-accent/20 mix-blend-overlay"></div>
                </div>

                {/* Content */}
                <div className="relative z-10 p-8 md:p-12 h-full flex flex-col justify-end">
                   <div className="mb-auto">
                      <div className="bg-drive-accent/90 w-fit p-3 rounded-xl mb-6 shadow-lg shadow-drive-accent/30 backdrop-blur-sm">
                        <Briefcase className="text-white" size={32} />
                      </div>
                   </div>
                   
                   <h3 className="text-3xl font-bold text-white mb-4">Reseller & Espansione</h3>
                   <p className="text-gray-300 mb-8 text-lg leading-relaxed">
                      Ottimizza un account esistente, vinci la Buy Box e espanditi in Europa (Pan-EU).
                   </p>
                   
                   <ul className="space-y-4">
                     {[
                       "Ottimizzazione Logistica FBA.",
                       "Repricing automatico.",
                       "Gestione IVA e Compliance Pan-EU."
                     ].map((step, i) => (
                       <li key={i} className="flex items-center text-sm text-gray-200 bg-white/5 backdrop-blur-md p-4 rounded-lg border border-white/10 hover:bg-white/10 transition-colors">
                         <span className="bg-drive-accent text-white w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold mr-4 flex-shrink-0">{i+1}</span>
                         {step}
                       </li>
                     ))}
                   </ul>
                </div>
             </div>
           </div>
        </div>
      </section>

      {/* Main Features Grid (Clean Cards) */}
      <section className="py-24 bg-[#050608] border-t border-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
           <div className="mb-16 text-center">
             <h2 className="text-3xl font-bold text-white">Servizi Inclusi</h2>
             <p className="text-gray-400 mt-2 text-lg">Una gestione a 360° del tuo account Seller Central.</p>
           </div>
           
           <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                { title: "Setup & Brand Registry", desc: "Configurazione completa e protezione legale del marchio per sbloccare i tool avanzati.", icon: <ShoppingBag size={32} className="text-drive-accent" /> },
                { title: "SEO Amazon", desc: "Ricerca keyword e ottimizzazione titoli/bullet point per il posizionamento organico.", icon: <Search size={32} className="text-drive-accent" /> },
                { title: "Advertising PPC", desc: "Gestione campagne Sponsored Products, Brands e Display per massimizzare il ROAS.", icon: <TrendingUp size={32} className="text-drive-accent" /> },
                { title: "Pricing Dinamico", desc: "Strategie di prezzo automatiche per vincere la Buy Box senza erodere i margini.", icon: <Tags size={32} className="text-drive-accent" /> },
                { title: "Logistica Ibrida", desc: "Pianificazione FBA e FBM per garantire sempre la disponibilità della merce.", icon: <Package size={32} className="text-drive-accent" /> },
                { title: "Review Management", desc: "Strategie etiche per aumentare le recensioni positive e gestire i feedback.", icon: <MessageSquare size={32} className="text-drive-accent" /> }
              ].map((feat, i) => (
                <div key={i} className="bg-[#0f1219] p-8 rounded-lg border border-gray-800 hover:border-drive-accent/50 transition-all hover:-translate-y-1 group">
                   <div className="bg-gray-800/30 w-fit p-4 rounded-lg mb-6 group-hover:bg-drive-accent/10 transition-colors">
                     {feat.icon}
                   </div>
                   <h3 className="text-xl font-bold text-white mb-3">{feat.title}</h3>
                   <p className="text-gray-400 text-sm leading-relaxed">{feat.desc}</p>
                </div>
              ))}
           </div>
        </div>
      </section>

      {/* Full Width Visual Banner */}
      <section className="h-[300px] w-full relative overflow-hidden">
         <img 
            src="https://images.unsplash.com/photo-1523474253046-8cd2748b5fd2?auto=format&fit=crop&w=2000&q=80" 
            alt="Amazon Warehouse Packages"
            className="w-full h-full object-cover object-center"
         />
         {/* Orange/Yellow tint */}
         <div className="absolute inset-0 bg-yellow-900/20 mix-blend-multiply"></div>
      </section>

      {/* CTA Challenge */}
      <section className="relative py-32 text-center overflow-hidden border-t border-gray-800">
         {/* Background Image */}
         <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1595225476474-87563907a212?auto=format&fit=crop&w=2000&q=80"
            alt="E-commerce Analytics"
            className="w-full h-full object-cover"
          />
          {/* Dark Overlay */}
          <div className="absolute inset-0 bg-[#080a10]/90"></div>
        </div>

         <div className="max-w-4xl mx-auto px-4 relative z-10">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-8">
               Qual è la sfida più grande del tuo <br/>Account Seller in questo Q?
            </h2>
            <p className="text-gray-400 mb-12 text-lg">
               Parliamone con i dati alla mano. Visita il nostro portale dedicato.
            </p>
            <a href="https://marketplace-arena.it/" target="_blank" rel="noopener noreferrer">
               <Button variant="primary" className="px-12 py-5 text-lg group shadow-2xl shadow-black/50">
                  Visita Marketplace Arena <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
               </Button>
            </a>
         </div>
      </section>
    </div>
  );
};

// Simple internal icon component for specific visual
const Rocket: React.FC<{className?: string, size?: number}> = ({className, size=24}) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z"/>
    <path d="m12 15-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z"/>
    <path d="M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0"/>
    <path d="M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5"/>
  </svg>
);

export default EcommerceAmazon;
