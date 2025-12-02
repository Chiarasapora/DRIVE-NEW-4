
import React from 'react';
import Button from '../components/Button';
import { Check, Database, Globe, Layers, Zap, BarChart3, Users, ShoppingCart, Code2, Shield, Cpu, ArrowRight, Store, Box, FileCheck, Tags, ShieldCheck, Cloud } from 'lucide-react';
import { NavLink } from 'react-router-dom';

const SostratoWeb: React.FC = () => {
  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="py-24 bg-[#080a10] relative overflow-hidden">
        <div className="absolute inset-0 z-0">
           <img 
             src="/SOSTRATO WEB/Hero_Section_Sostrato.webp" 
             alt="Sostrato Web Dashboard" 
             className="w-full h-full object-cover opacity-30" 
           />
           <div className="absolute inset-0 bg-gradient-to-r from-[#080a10] via-[#080a10]/80 to-transparent"></div>
           {/* Blue Glow */}
           <div className="absolute -bottom-32 -right-32 w-96 h-96 bg-blue-600/20 rounded-full blur-3xl"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <span className="text-drive-accent text-xs font-bold tracking-widest uppercase mb-4 block">PRODOTTI / SOFTWARE CLOUD</span>
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-8 leading-tight">
            Sostrato <span className="text-drive-accent">Web</span>.
          </h1>
          <p className="text-gray-300 text-lg md:text-xl mb-10 max-w-3xl leading-relaxed">
            L'ecosistema digitale per centralizzare processi, vendite e logistica in un unico hub intelligente.
          </p>
          
          <NavLink to="/contatti">
            <Button variant="primary" className="px-8 py-4 text-base shadow-xl shadow-[#9c2948]/30">
              Richiedi Demo <ArrowRight size={18} className="ml-2" />
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
               Sostrato Web non è un semplice gestionale, ma un vero e proprio sistema operativo per la tua azienda. Nato per rispondere alle esigenze dell'Industria 4.0, permette una sincronizzazione bidirezionale tra il magazzino fisico e i canali di vendita digitali, eliminando errori umani e ridondanze.
             </p>
          </div>
          
          <div className="rounded-xl overflow-hidden shadow-2xl border border-gray-800 relative group">
            <div className="absolute inset-0 bg-drive-accent/10 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none"></div>
            <img 
              src="/SOSTRATO WEB/Foto_1_Sostrato.webp" 
              alt="Sostrato Web Dashboard Analytics" 
              className="w-full object-cover" 
            />
          </div>
        </div>
      </section>

      {/* Problem / Solution Section */}
      <section className="py-24 bg-[#0b0e14] relative overflow-hidden">
        {/* Tech Grid Pattern */}
        <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: 'radial-gradient(#ffffff 1px, transparent 1px)', backgroundSize: '24px 24px' }}></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-white mb-4">Centralizza il caos, scala il business.</h2>
            <p className="text-gray-400 max-w-2xl mx-auto">Le aziende moderne muoiono di frammentazione. Sostrato Web risolve i problemi strutturali che impediscono la tua crescita.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: <Layers className="text-drive-accent" size={32} />,
                title: "Frammentazione dei Dati (Silos)",
                desc: "Gestire magazzino su un software, fatture su un altro ed e-commerce su un terzo porta a dati disallineati. Sostrato unifica tutto in un'unica fonte di verità."
              },
              {
                icon: <Zap className="text-drive-accent" size={32} />,
                title: "Errori Manuali & Data Entry",
                desc: "Copiare ordini da Amazon al gestionale è costoso e prono a errori. Sostrato automatizza il flusso: l'ordine entra, il magazzino parte, la fattura si crea da sola."
              },
              {
                icon: <ShoppingCart className="text-drive-accent" size={32} />,
                title: "Rischio Overselling",
                desc: "Vendere prodotti che non hai porta a recensioni negative e ban dai marketplace. Il nostro motore di sincronizzazione aggiorna le giacenze ovunque in <3 secondi."
              },
              {
                icon: <BarChart3 className="text-drive-accent" size={32} />,
                title: "Decisioni alla cieca",
                desc: "Senza dati aggregati non sai quale canale rende di più. La Business Intelligence integrata ti mostra margini, LTV e rotazione stock in tempo reale."
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

      {/* Two Paths / Use Cases - REDESIGNED */}
      <section className="py-24 bg-[#080a10] border-t border-gray-900 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
           <div className="mb-16 text-center lg:text-left">
             <span className="text-drive-accent text-xs font-bold tracking-widest uppercase mb-2 block">USE CASES</span>
             <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Progettato per adattarsi al tuo modello</h2>
             <p className="text-gray-400 text-lg max-w-2xl">Che tu sia un distributore B2B o un brand Retail Omnichannel, Sostrato ha i moduli giusti per te.</p>
           </div>

           <div className="grid lg:grid-cols-2 gap-8 lg:gap-12">
             
             {/* Path 1: B2B */}
             <div className="group relative rounded-2xl overflow-hidden min-h-[550px] border border-gray-800 hover:border-blue-500/50 transition-all duration-500">
                {/* Background Image */}
                <div className="absolute inset-0">
                  <img 
                    src="/SOSTRATO WEB/Card_1_Sostrato.webp" 
                    alt="Warehouse B2B Logistics" 
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/80 to-black/30"></div>
                  <div className="absolute inset-0 bg-blue-900/20 mix-blend-overlay"></div>
                </div>

                {/* Content */}
                <div className="relative z-10 p-8 md:p-12 h-full flex flex-col justify-end">
                   <div className="mb-auto">
                      <div className="bg-blue-600/90 w-fit p-3 rounded-xl mb-6 shadow-lg shadow-blue-900/50 backdrop-blur-sm">
                        <Box className="text-white" size={32} />
                      </div>
                   </div>
                   
                   <h3 className="text-3xl font-bold text-white mb-4">Distributori & B2B</h3>
                   <p className="text-gray-300 mb-8 text-lg leading-relaxed">
                      Digitalizza la tua rete vendita agenti e automatizza il ciclo passivo/attivo con i fornitori.
                   </p>
                   
                   <ul className="space-y-4">
                     {[
                       "Catalogo Digitale per Agenti su Tablet.",
                       "Listini personalizzati per cliente automatici.",
                       "Gestione Lotti, Scadenze e Matricole."
                     ].map((step, i) => (
                       <li key={i} className="flex items-center text-sm text-gray-200 bg-white/5 backdrop-blur-md p-4 rounded-lg border border-white/10 hover:bg-white/10 transition-colors">
                         <span className="bg-blue-600 text-white w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold mr-4 flex-shrink-0">{i+1}</span>
                         {step}
                       </li>
                     ))}
                   </ul>
                </div>
             </div>

             {/* Path 2: Retail/Ecom */}
             <div className="group relative rounded-2xl overflow-hidden min-h-[550px] border border-gray-800 hover:border-drive-accent/50 transition-all duration-500">
                {/* Background Image */}
                <div className="absolute inset-0">
                  <img 
                    src="/SOSTRATO WEB/Card_2_Sostrato.webp" 
                    alt="Omnichannel Retail" 
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/80 to-black/30"></div>
                  <div className="absolute inset-0 bg-drive-accent/20 mix-blend-overlay"></div>
                </div>

                {/* Content */}
                <div className="relative z-10 p-8 md:p-12 h-full flex flex-col justify-end">
                   <div className="mb-auto">
                      <div className="bg-drive-accent/90 w-fit p-3 rounded-xl mb-6 shadow-lg shadow-drive-accent/30 backdrop-blur-sm">
                        <Store className="text-white" size={32} />
                      </div>
                   </div>
                   
                   <h3 className="text-3xl font-bold text-white mb-4">Retail & E-commerce</h3>
                   <p className="text-gray-300 mb-8 text-lg leading-relaxed">
                      Collega negozi fisici e store online per una vera esperienza Omnichannel senza mal di testa logistici.
                   </p>
                   
                   <ul className="space-y-4">
                     {[
                       "Sincronizzazione Amazon, Shopify, WooCommerce.",
                       "Negozio fisico come hub di spedizione.",
                       "Picking ottimizzato per evasione veloce."
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

      {/* Experience Gallery (Clean Cards Version) */}
      <section className="py-24 bg-[#050608] border-t border-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
           <div className="mb-16 text-center">
             <h2 className="text-3xl font-bold text-white">L'esperienza Sostrato</h2>
             <p className="text-gray-400 mt-2 text-lg">Funzionalità enterprise in un'interfaccia user-friendly.</p>
           </div>
           
           <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  icon: <Box size={32} className="text-drive-accent" />,
                  title: "Gestione Logistica",
                  desc: "Mappatura magazzini, picking ottimizzato, packing list e tracciabilità completa dei lotti in tempo reale."
                },
                {
                  icon: <FileCheck size={32} className="text-drive-accent" />,
                  title: "Creazione offerte e contratti con firma digitale",
                  desc: "Genera preventivi PDF professionali e ottieni l'approvazione immediata grazie all'integrazione della firma elettronica legale."
                },
                {
                  icon: <Check size={32} className="text-drive-accent" />,
                  title: "Ciclo Attivo/Passivo",
                  desc: "Gestione completa dall'ordine fornitore fino alla fatturazione elettronica XML automatizzata."
                },
                {
                  icon: <Users size={32} className="text-drive-accent" />,
                  title: "CRM Integrato",
                  desc: "Storico acquisti, analisi clienti e segmentazione per campagne marketing mirate."
                },
                {
                  icon: <Tags size={32} className="text-drive-accent" />,
                  title: "Gestione Listini",
                  desc: "Configura listini prezzi illimitati, sconti per quantità, regole promozionali e prezzi specifici per cliente."
                },
                {
                  icon: <ShoppingCart size={32} className="text-drive-accent" />,
                  title: "E-Commerce integrato",
                  desc: "Sincronizza prodotti, giacenze e ordini con il tuo sito e-commerce B2B o B2C senza duplicare i dati."
                }
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
            src="/SOSTRATO WEB/Transizione_Sostrato.webp" 
            alt="Colorful Shipping Containers Logistics"
            className="w-full h-full object-cover object-center"
         />
         {/* No dark overlay to keep it bright and colorful */}
         <div className="absolute inset-0 bg-gradient-to-t from-[#050608] via-transparent to-[#050608] opacity-50"></div>
      </section>

      {/* Architecture Pillars */}
      <section className="py-24 bg-[#050608] border-t border-gray-900">
         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="mb-16">
              <h2 className="text-3xl font-bold text-white mb-4">Tecnologia Enterprise per PMI</h2>
              <p className="text-gray-400">Sostrato Web porta la potenza dei grandi ERP aziendali alla portata delle PMI, con un'architettura moderna e scalabile.</p>
            </div>

            <div className="space-y-8">
               {[
                 { 
                   icon: <Cloud className="text-drive-accent" />, 
                   title: "Infrastruttura Cloud Scalabile", 
                   desc: "Non hai bisogno di server costosi. Sostrato si adatta al carico di lavoro della tua azienda, garantendo performance elevate anche durante i picchi di stagionalità e permettendoti di crescere senza pensieri." 
                 },
                 { 
                   icon: <Cpu className="text-drive-accent" />, 
                   title: "AI & Automazione Nativa", 
                   desc: "L'intelligenza artificiale non è un plugin esterno, è nel cuore del sistema. Utilizza agenti AI per interrogare il database con linguaggio naturale ('Qual è il prodotto più venduto a Milano?') o automatizzare il riordino scorte." 
                 },
                 { 
                   icon: <ShieldCheck className="text-drive-accent" />, 
                   title: "Disaster Recovery", 
                   desc: "Business Continuity garantita. Backup incrementali orari, ridondanza geografica dei dati e ripristino istantaneo in caso di emergenza. Dimentica i rischi di perdita dati e i server fisici in ufficio." 
                 },
                 { 
                   icon: <Code2 className="text-drive-accent" />, 
                   title: "API First", 
                   desc: "Sostrato nasce aperto per connettersi con tutto. Le nostre API RESTful documentate permettono di integrare il gestionale con qualsiasi software esterno, e-commerce proprietario, CRM di terze parti o macchinari industriali IoT." 
                 }
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
            src="/SOSTRATO WEB/CTA_Sostrato.webp"
            alt="Modern Warehouse Logistics"
            className="w-full h-full object-cover"
          />
          {/* Dark Overlay */}
          <div className="absolute inset-0 bg-[#080a10]/90"></div>
        </div>

        <div className="max-w-4xl mx-auto px-4 relative z-10">
          <h2 className="text-3xl font-bold text-white mb-6">Pronto a rivoluzionare la tua azienda?</h2>
          <NavLink to="/contatti">
            <Button variant="primary" className="px-10 py-4 text-base shadow-xl shadow-black/50">Richiedi Consulenza Gratuita</Button>
          </NavLink>
        </div>
      </section>
    </div>
  );
};

export default SostratoWeb;
