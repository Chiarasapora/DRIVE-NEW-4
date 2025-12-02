
import React from 'react';
import Button from '../components/Button';
import { NavLink } from 'react-router-dom';
import { Target, Lightbulb, Users, Shield, Zap, BarChart3, Layers, Rocket } from 'lucide-react';

const About: React.FC = () => {
  return (
    <div className="pt-20">
       {/* Chi Siamo Hero */}
       <section className="py-24 bg-[#080a10] relative overflow-hidden">
         <div className="absolute inset-0 z-0">
            <img 
              src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=2000&q=80" 
              alt="Team Collaboration" 
              className="w-full h-full object-cover opacity-40" 
            />
            <div className="absolute inset-0 bg-gradient-to-r from-[#080a10] via-[#080a10]/80 to-transparent"></div>
         </div>
         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
           <span className="text-drive-accent text-xs font-bold tracking-widest uppercase mb-4 block">CHI SIAMO</span>
           <h1 className="text-4xl md:text-6xl font-bold text-white max-w-4xl mb-8 leading-tight">
             Architetti dell'<span className="text-drive-accent">Efficienza Operativa</span>.
           </h1>
           
           <div className="p-6 bg-gray-800/30 border-l-4 border-drive-accent rounded-r-lg max-w-2xl backdrop-blur-sm">
             <p className="text-white text-lg italic mb-3">
               "La Guida Integrata per la Tua Crescita Digitale e Operativa"
             </p>
             <p className="text-drive-accent font-bold uppercase tracking-widest text-sm">
               Digitalizza. Integra. Cresci.
             </p>
          </div>
         </div>
       </section>

       {/* Introduction Section */}
       <section className="py-20 bg-gradient-to-b from-[#050608] to-[#0a0c12]">
         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto text-center text-lg text-gray-400 leading-relaxed space-y-6">
              <p>
                DRIVE Agency è il partner tecnologico e strategico che accompagna le Piccole e Medie Imprese italiane in un percorso di trasformazione digitale completo e sostenibile.
              </p>
              <p>
                Non siamo semplici fornitori di software: siamo architetti dell'efficienza operativa che integrano soluzioni gestionali, servizi specialistici e innovazione tecnologica per semplificare la complessità e moltiplicare le opportunità di crescita.
              </p>
            </div>
         </div>
       </section>

       {/* Vision & Mission (Redesigned as Immersive Cards) */}
       <section className="py-24 bg-[#080a10] border-y border-gray-900 relative">
         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
           
           <div className="grid lg:grid-cols-2 gap-8 lg:gap-12">
             
             {/* Vision Card */}
             <div className="group relative rounded-2xl overflow-hidden min-h-[550px] border border-gray-800 hover:border-drive-accent/50 transition-all duration-500">
                {/* Background Image */}
                <div className="absolute inset-0">
                  <img 
                    src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=1000&q=80" 
                    alt="Vision Future" 
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/80 to-black/30"></div>
                  <div className="absolute inset-0 bg-drive-accent/20 mix-blend-overlay"></div>
                </div>

                {/* Content */}
                <div className="relative z-10 p-8 md:p-12 h-full flex flex-col justify-end">
                   <div className="mb-auto">
                      <div className="bg-drive-accent/90 w-fit p-3 rounded-xl mb-6 shadow-lg shadow-drive-accent/30 backdrop-blur-sm">
                        <Lightbulb className="text-white" size={32} />
                      </div>
                   </div>
                   
                   <h3 className="text-3xl font-bold text-white mb-4">Vision (Il Futuro)</h3>
                   <p className="text-gray-300 mb-8 text-lg leading-relaxed">
                      Immaginiamo un futuro in cui le imprese possano raggiungere il loro massimo potenziale di crescita, liberate dal peso dei processi gestionali complessi. Un futuro in cui l'efficienza è automatica e l'innovazione è alla portata di tutti.
                   </p>
                </div>
             </div>

             {/* Mission Card */}
             <div className="group relative rounded-2xl overflow-hidden min-h-[550px] border border-gray-800 hover:border-blue-500/50 transition-all duration-500">
                {/* Background Image */}
                <div className="absolute inset-0">
                  <img 
                    src="https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=1000&q=80" 
                    alt="Mission Teamwork" 
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/80 to-black/30"></div>
                  <div className="absolute inset-0 bg-blue-900/20 mix-blend-overlay"></div>
                </div>

                {/* Content */}
                <div className="relative z-10 p-8 md:p-12 h-full flex flex-col justify-end">
                   <div className="mb-auto">
                      <div className="bg-blue-600/90 w-fit p-3 rounded-xl mb-6 shadow-lg shadow-blue-900/50 backdrop-blur-sm">
                        <Target className="text-white" size={32} />
                      </div>
                   </div>
                   
                   <h3 className="text-3xl font-bold text-white mb-4">Mission (Il Ruolo)</h3>
                   <p className="text-gray-300 mb-6 text-lg leading-relaxed">
                      Digitalizzare le aziende a 360 gradi, fornendo tecnologia e know-how per:
                   </p>
                   
                   <ul className="space-y-4">
                     {[
                       "Semplificare i processi interni (Sostrato WEB).",
                       "Moltiplicare le opportunità di vendita (Marketplace).",
                       "Garantire l'accesso all'innovazione (AI & Funding)."
                     ].map((step, i) => (
                       <li key={i} className="flex items-center text-sm text-gray-200 bg-white/5 backdrop-blur-md p-4 rounded-lg border border-white/10 hover:bg-white/10 transition-colors">
                         <span className="bg-blue-600 text-white w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold mr-4 flex-shrink-0">{i+1}</span>
                         {step}
                       </li>
                     ))}
                   </ul>
                </div>
             </div>
           </div>
         </div>
       </section>

       {/* Values (Updated with 6th Card) */}
       <section className="py-24 bg-gradient-to-b from-[#080a10] to-[#0c0f16]">
         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
               <span className="text-drive-accent text-xs font-bold tracking-widest uppercase mb-2 block">I NOSTRI PILASTRI</span>
               <h2 className="text-3xl font-bold text-white">Valori Fondamentali</h2>
               <p className="text-gray-400 mt-4 max-w-2xl mx-auto">Questi valori guidano sia l'operato interno sia il modo in cui comunichiamo con te.</p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
               {[
                 {
                   icon: <Layers size={24} />,
                   title: "Centralità Operativa",
                   desc: "Crediamo che l'efficienza nasca quando tutto è connesso. Un'unica piattaforma elimina silos e disconnessioni.",
                   keywords: "Integrazione, all-in-one"
                 },
                 {
                   icon: <Zap size={24} />,
                   title: "Efficienza & Semplicità",
                   desc: "Trasformiamo la complessità in soluzioni semplici e concrete. Il nostro obiettivo è snellire, non complicare.",
                   keywords: "Automazione, chiarezza"
                 },
                 {
                   icon: <Shield size={24} />,
                   title: "Affidabilità & Sicurezza",
                   desc: "Il nostro software e le nostre strategie sono fondamenta solide per il tuo business. Proteggiamo i tuoi dati.",
                   keywords: "Sicurezza, compliance"
                 },
                 {
                   icon: <Users size={24} />,
                   title: "Supporto Diretto",
                   desc: "Non ti lasciamo mai solo. Il supporto è strategico, basato su formazione congiunta e revisione dei flussi.",
                   keywords: "Affiancamento, Human-centric"
                 },
                 {
                   icon: <BarChart3 size={24} />,
                   title: "Orientamento al Dato",
                   desc: "Ogni decisione è basata su analisi e metriche chiare (KPI). Trasformiamo i dati in insight azionabili.",
                   keywords: "Data driven, KPI"
                 },
                 {
                   icon: <Rocket size={24} />,
                   title: "Innovazione Continua",
                   desc: "Non ci fermiamo mai. Evolvere tecnologie e competenze è l'unico modo per garantire il tuo vantaggio competitivo nel tempo.",
                   keywords: "R&D, futuro, evoluzione"
                 }
               ].map((val, i) => (
                 <div key={i} className="bg-[#151921]/50 p-8 rounded-lg border border-gray-800 hover:border-drive-accent/40 transition-colors flex flex-col hover:bg-[#1a1f29]">
                    <div className="bg-gray-800/50 w-fit p-3 rounded-lg mb-6 text-drive-accent">
                      {val.icon}
                    </div>
                    <h3 className="text-xl font-bold text-white mb-3">{val.title}</h3>
                    <p className="text-gray-400 text-sm leading-relaxed mb-6 flex-grow">{val.desc}</p>
                    <div className="border-t border-gray-800 pt-4">
                       <span className="text-[10px] text-gray-500 uppercase tracking-widest font-bold">Keywords:</span>
                       <p className="text-xs text-gray-400 mt-1">{val.keywords}</p>
                    </div>
                 </div>
               ))}
            </div>
         </div>
       </section>

       {/* Team Section REMOVED */}
       
       {/* CTA */}
       <section className="relative py-24 text-center overflow-hidden border-t border-gray-800">
         {/* Background Image */}
         <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=2000&q=80"
            alt="Modern Office"
            className="w-full h-full object-cover"
          />
          {/* Dark Overlay */}
          <div className="absolute inset-0 bg-[#080a10]/90"></div>
        </div>

         <div className="max-w-3xl mx-auto px-4 relative z-10">
            <h2 className="text-3xl font-bold text-white mb-6">Pronto a trasformare la tua azienda?</h2>
            <NavLink to="/contatti">
              <Button variant="primary" className="px-10 py-4 shadow-xl shadow-black/50">Parla con Noi</Button>
            </NavLink>
         </div>
       </section>
    </div>
  );
};

export default About;
