
import React from 'react';
import Button from '../components/Button';
import { Check, Shield, Zap, RefreshCw, BarChart3, Link, Code2, Database, Lock, Users, CreditCard, ArrowRight, Globe, Layers } from 'lucide-react';
import { NavLink } from 'react-router-dom';

const ShipYo: React.FC = () => {
  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="py-24 bg-[#080a10] relative overflow-hidden">
        <div className="absolute inset-0 z-0">
           <img 
             src="https://images.unsplash.com/photo-1620121692029-d088224ddc74?auto=format&fit=crop&w=2000&q=80" 
             alt="Digital Finance Abstract" 
             className="w-full h-full object-cover opacity-30" 
           />
           <div className="absolute inset-0 bg-gradient-to-r from-[#080a10] via-[#080a10]/80 to-transparent"></div>
           {/* Purple Glow */}
           <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-purple-900/20 rounded-full blur-[100px]"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <span className="text-drive-accent text-xs font-bold tracking-widest uppercase mb-4 block">PRODOTTI / GESTIONE ABBONAMENTI</span>
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-8 leading-tight">
            Ship<span className="text-drive-accent">Yo</span>.
          </h1>
          <p className="text-gray-300 text-lg md:text-xl mb-10 max-w-3xl leading-relaxed">
            Abbonamenti senza pensieri. La piattaforma italiana all‑in‑one per gestire incassi ricorrenti, abbonamenti e reportistica in modo semplice, sicuro e scalabile.
          </p>
          
          <NavLink to="/contatti">
            <Button variant="primary" className="px-8 py-4 text-base shadow-xl shadow-[#9c2948]/30">
              Richiedi Accesso <ArrowRight size={18} className="ml-2" />
            </Button>
          </NavLink>
        </div>
      </section>

      {/* Overview */}
      <section className="pb-20 pt-20 bg-gradient-to-b from-[#080a10] to-[#11141d]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-12">
             <h2 className="text-2xl font-bold text-white mb-4">Overview Piattaforma</h2>
             <p className="text-gray-400 max-w-4xl leading-relaxed text-lg">
               ShipYo elimina la complessità tecnica dei pagamenti ricorrenti. Non dovrai più preoccuparti di gestire webhook, fatturazione fallita o scadenze: il nostro motore si occupa di tutto, lasciandoti libero di concentrarti sulla crescita del tuo business.
             </p>
          </div>
          
          <div className="rounded-xl overflow-hidden shadow-2xl border border-gray-800 relative group">
            <div className="absolute inset-0 bg-drive-accent/10 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none"></div>
            <img 
              src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1200&q=80" 
              alt="ShipYo Dashboard Analytics" 
              className="w-full object-cover" 
            />
          </div>
        </div>
      </section>

      {/* Problem / Solution Section (3+1 Grid) */}
      <section className="py-24 bg-[#0b0e14] relative overflow-hidden">
        {/* Tech Grid Pattern */}
        <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: 'radial-gradient(#ffffff 1px, transparent 1px)', backgroundSize: '24px 24px' }}></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-white mb-4">Incassa quando vuoi tu, non gestire complessità.</h2>
            <p className="text-gray-400 max-w-2xl mx-auto">ShipYo risolve i problemi che frenano la tua crescita, permettendoti di concentrarti solo sul tuo prodotto.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: <Zap className="text-drive-accent" size={32} />,
                title: "Integrazione Lenta",
                desc: "Implementare un sistema di pagamenti richiede mesi. ShipYo ti offre un carrello 'plug-n-play' per andare online in ore."
              },
              {
                icon: <RefreshCw className="text-drive-accent" size={32} />,
                title: "Caos Abbonamenti",
                desc: "Rinnovi, upgrade, pagamenti falliti. Automatizziamo l'intero ciclo di vita delle sottoscrizioni ricorrenti."
              },
              {
                icon: <Shield className="text-drive-accent" size={32} />,
                title: "Rischi Sicurezza",
                desc: "Gestire dati di pagamento è una responsabilità enorme. ShipYo gestisce la compliance al 100% per te."
              },
              {
                icon: <BarChart3 className="text-drive-accent" size={32} />,
                title: "Cecità sui Dati Finanziari",
                desc: "Senza dati aggregati non sai quanto stai crescendo. La nostra dashboard unifica Stripe, PayPal e Bonifici in un'unica vista chiara su MRR, Churn Rate e LTV."
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
             <span className="text-drive-accent text-xs font-bold tracking-widest uppercase mb-2 block">USE CASES</span>
             <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Due Percorsi per la Tua Crescita</h2>
             <p className="text-gray-400 text-lg max-w-2xl">Che tu voglia iniziare a vendere in 5 minuti o integrare un sistema potente nella tua app.</p>
           </div>

           <div className="grid lg:grid-cols-2 gap-8 lg:gap-12">
             
             {/* Path 1: Link Selling */}
             <div className="group relative rounded-2xl overflow-hidden min-h-[550px] border border-gray-800 hover:border-blue-500/50 transition-all duration-500">
                {/* Background Image */}
                <div className="absolute inset-0">
                  <img 
                    src="https://images.unsplash.com/photo-1556742044-3c52d6e88c62?auto=format&fit=crop&w=1000&q=80" 
                    alt="Payment Link Sales" 
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/80 to-black/30"></div>
                  <div className="absolute inset-0 bg-blue-900/20 mix-blend-overlay"></div>
                </div>

                {/* Content */}
                <div className="relative z-10 p-8 md:p-12 h-full flex flex-col justify-end">
                   <div className="mb-auto">
                      <div className="bg-blue-600/90 w-fit p-3 rounded-xl mb-6 shadow-lg shadow-blue-900/50 backdrop-blur-sm">
                        <Link className="text-white" size={32} />
                      </div>
                   </div>
                   
                   <h3 className="text-3xl font-bold text-white mb-4">Vendi con un Link</h3>
                   <p className="text-gray-300 mb-8 text-lg leading-relaxed">
                      Perfetto per consulenti, creator e servizi che vogliono incassare subito senza sito web.
                   </p>
                   
                   <ul className="space-y-4">
                     {[
                       "Collega PayPal o Stripe in 1 click.",
                       "Crea piani di abbonamento visuali.",
                       "Ottieni il Link e invialo su WhatsApp/Email."
                     ].map((step, i) => (
                       <li key={i} className="flex items-center text-sm text-gray-200 bg-white/5 backdrop-blur-md p-4 rounded-lg border border-white/10 hover:bg-white/10 transition-colors">
                         <span className="bg-blue-600 text-white w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold mr-4 flex-shrink-0">{i+1}</span>
                         {step}
                       </li>
                     ))}
                   </ul>
                </div>
             </div>

             {/* Path 2: API Integration */}
             <div className="group relative rounded-2xl overflow-hidden min-h-[550px] border border-gray-800 hover:border-drive-accent/50 transition-all duration-500">
                {/* Background Image */}
                <div className="absolute inset-0">
                  <img 
                    src="https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=1000&q=80" 
                    alt="API Code Integration" 
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/80 to-black/30"></div>
                  <div className="absolute inset-0 bg-drive-accent/20 mix-blend-overlay"></div>
                </div>

                {/* Content */}
                <div className="relative z-10 p-8 md:p-12 h-full flex flex-col justify-end">
                   <div className="mb-auto">
                      <div className="bg-drive-accent/90 w-fit p-3 rounded-xl mb-6 shadow-lg shadow-drive-accent/30 backdrop-blur-sm">
                        <Code2 className="text-white" size={32} />
                      </div>
                   </div>
                   
                   <h3 className="text-3xl font-bold text-white mb-4">Integra nella tua App</h3>
                   <p className="text-gray-300 mb-8 text-lg leading-relaxed">
                      Potenza totale per SaaS e piattaforme web. Controlla accessi e feature via API.
                   </p>
                   
                   <ul className="space-y-4">
                     {[
                       "Chiavi API sicure e documentate.",
                       "Gestione automatica permessi utente.",
                       "Webhooks per eventi real-time."
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
             <h2 className="text-3xl font-bold text-white">Funzionalità Core</h2>
             <p className="text-gray-400 mt-2 text-lg">Tutto ciò che serve per gestire i pagamenti, incluso.</p>
           </div>
           
           <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                { title: "Gateway Multipli", desc: "Pagamenti ricorrenti sicuri al 100% con integrazione nativa PayPal & Stripe.", icon: <Globe size={32} className="text-drive-accent" /> },
                { title: "Ruoli Avanzati", desc: "RBAC granulare per Admin e SuperAdmin con accessi sicuri e dashboard dedicate.", icon: <Users size={32} className="text-drive-accent" /> },
                { title: "API Integrate", desc: "Chiavi API proprietarie, rate‑limiting e logging per una integrazione a prova di abuso.", icon: <Code2 size={32} className="text-drive-accent" /> },
                { title: "Database Isolati", desc: "Ogni app ha il suo database dedicato, con scalabilità cloud ready per massima sicurezza.", icon: <Database size={32} className="text-drive-accent" /> },
                { title: "Gestione Bonifici", desc: "Traccia e approva manualmente i bonifici direttamente da ShipYo per il B2B.", icon: <Check size={32} className="text-drive-accent" /> },
                { title: "Reportistica PDF", desc: "Grafici interattivi, tabelle esportabili e PDF one‑click per i tuoi report finanziari.", icon: <BarChart3 size={32} className="text-drive-accent" /> }
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
            src="https://images.unsplash.com/photo-1556740749-887f6717d7e4?auto=format&fit=crop&w=2000&q=80" 
            alt="Fintech Payment Terminals"
            className="w-full h-full object-cover object-center"
         />
         {/* Lighter overlay to be bright */}
         <div className="absolute inset-0 bg-purple-900/20 mix-blend-multiply"></div>
      </section>

      {/* Architecture Pillars */}
      <section className="py-24 bg-[#050608] border-t border-gray-900">
         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="mb-16">
              <h2 className="text-3xl font-bold text-white mb-4">Costruito per la Sicurezza</h2>
              <p className="text-gray-400">ShipYo non è solo un'altra piattaforma di pagamento. Ecco i pilastri della nostra architettura.</p>
            </div>

            <div className="space-y-8">
               {[
                 { icon: <Database className="text-drive-accent" />, title: "Database Dedicato per Cliente", desc: "A differenza delle piattaforme multi-tenant standard, ogni tuo cliente opera su un database isolato. Questo garantisce massima sicurezza, performance senza interferenze e scalabilità futura senza compromessi." },
                 { icon: <Lock className="text-drive-accent" />, title: "Sei Tu il 'Merchant of Record'", desc: "Non siamo un intermediario che rivende. I fondi vanno direttamente sui tuoi conti (PayPal/Stripe) e sei tu a possedere legalmente la relazione col cliente finale. Pieno controllo, massima trasparenza e zero vincoli." },
                 { icon: <Users className="text-drive-accent" />, title: "Gestione Ruoli Avanzata (RBAC)", desc: "Il nostro sistema nasce con una gerarchia di ruoli (SuperAdmin, Admin) pensata per modelli B2B. Gestisci facilmente più app terze, assegna permessi granulari e offri ai tuoi clienti una dashboard dedicata solo ai loro dati." },
                 { icon: <CreditCard className="text-drive-accent" />, title: "Flessibilità Totale sui Pagamenti", desc: "Il business non si ferma alle carte di credito. ShipYo include un flusso di lavoro specifico per la gestione e l'approvazione manuale dei bonifici, offrendo un'opzione di pagamento essenziale per molti clienti B2B." }
               ].map((pillar, i) => (
                 <div key={i} className="bg-[#0e1118] p-8 rounded-lg border border-gray-800 flex flex-col md:flex-row gap-8 hover:bg-[#13161f] transition-colors">
                    <div className="md:w-1/3">
                      <h3 className="text-xl font-bold text-white flex items-center gap-3">
                        {pillar.icon} {pillar.title}
                      </h3>
                    </div>
                    <div className="md:w-2/3">
                      <p className="text-gray-400 text-sm leading-relaxed">{pillar.desc}</p>
                    </div>
                 </div>
               ))}
            </div>
         </div>
      </section>

      {/* Final CTA */}
      <section className="relative py-32 text-center overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1590283603385-17ffb3a7f29f?auto=format&fit=crop&w=2000&q=80"
            alt="Digital Finance Growth"
            className="w-full h-full object-cover"
          />
          {/* Dark Overlay */}
          <div className="absolute inset-0 bg-[#080a10]/90"></div>
        </div>

        <div className="max-w-4xl mx-auto px-4 relative z-10">
          <h2 className="text-3xl font-bold text-white mb-6">Pronto a scalare i tuoi incassi?</h2>
          <NavLink to="/contatti">
            <Button variant="primary" className="px-10 py-4 text-base shadow-xl shadow-black/50">Contattaci Ora</Button>
          </NavLink>
        </div>
      </section>
    </div>
  );
};

export default ShipYo;
