
import React from 'react';
import { NavLink } from 'react-router-dom';
import Button from '../components/Button';
import { 
  BarChart, 
  Workflow, 
  Map, 
  Users, 
  LayoutDashboard, 
  Rocket,
  ArrowRight,
  Search,
  RefreshCcw,
  Target,
  FileSpreadsheet,
  Brain
} from 'lucide-react';

const InnovationStrategy: React.FC = () => {
  return (
    <div className="pt-20">
      {/* Hero Section (KEPT AS IS) */}
      <section className="py-24 bg-[#080a10] relative overflow-hidden">
        <div className="absolute inset-0 z-0">
           <img 
             src="/CONSULENZA & INNOVAZIONE/Hero_Section_Consulenza.webp" 
             alt="Innovation Strategy" 
             className="w-full h-full object-cover opacity-20" 
           />
           <div className="absolute inset-0 bg-gradient-to-r from-[#080a10] via-[#080a10]/80 to-transparent"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <span className="text-drive-accent text-xs font-bold tracking-widest uppercase mb-4 block">SERVIZI / CONSULENZA STRATEGICA</span>
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-8 leading-tight">
            Consulenza Innovazione <br/>
            & <span className="text-drive-accent">Strategia</span>.
          </h1>
          <p className="text-gray-300 text-lg md:text-xl mb-10 max-w-3xl leading-relaxed">
            Servizi di consulenza strategica per rendere le aziende "Data Driven" attraverso l'analisi dei processi, l'individuazione di inefficienze e la progettazione di soluzioni digitali integrate.
          </p>
          
          <div className="p-6 bg-gray-800/30 border-l-4 border-drive-accent rounded-r-lg max-w-2xl backdrop-blur-sm">
             <p className="text-white text-lg italic">
               "Aiutiamo le aziende a diventare Data Driven e molto più efficienti attraverso la revisione congiunta dei flussi e la pianificazione strategica."
             </p>
          </div>
        </div>
      </section>

      {/* Overview & Target Ideale (Requested Content) */}
      <section className="pb-20 pt-20 bg-gradient-to-b from-[#080a10] to-[#11141d]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
           <div className="grid md:grid-cols-2 gap-16 items-center">
              <div>
                 <h2 className="text-2xl font-bold text-white mb-4">Target Ideale</h2>
                 <p className="text-gray-400 max-w-lg leading-relaxed text-lg mb-6">
                   Ci rivolgiamo principalmente a <strong>PMI tradizionali in fase di transizione digitale</strong>. Aziende solide che sentono la necessità di evolvere i propri modelli operativi per rimanere competitive in un mercato sempre più veloce e basato sui dati.
                 </p>
                 <ul className="space-y-3">
                    <li className="flex items-center text-gray-300 text-sm">
                      <div className="w-1.5 h-1.5 bg-drive-accent rounded-full mr-3"></div>
                      Aziende con processi cartacei o manuali
                    </li>
                    <li className="flex items-center text-gray-300 text-sm">
                      <div className="w-1.5 h-1.5 bg-drive-accent rounded-full mr-3"></div>
                      Realtà con sistemi software scollegati (Silos)
                    </li>
                    <li className="flex items-center text-gray-300 text-sm">
                      <div className="w-1.5 h-1.5 bg-drive-accent rounded-full mr-3"></div>
                      Management che vuole decisioni basate sui fatti
                    </li>
                 </ul>
              </div>
              
              <div className="rounded-xl overflow-hidden shadow-2xl border border-gray-800 relative group">
                <div className="absolute inset-0 bg-drive-accent/10 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none"></div>
                <img 
                  src="/CONSULENZA & INNOVAZIONE/Foto_1_Consulenza.webp" 
                  alt="Strategic Consulting Meeting" 
                  className="w-full object-cover" 
                />
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
            <h2 className="text-3xl font-bold text-white mb-4">La trappola dell'operatività</h2>
            <p className="text-gray-400 max-w-2xl mx-auto">Spesso l'urgenza del quotidiano impedisce di vedere la strategia. Ecco cosa blocca la tua crescita.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: <FileSpreadsheet className="text-drive-accent" size={32} />,
                title: "Caos Informativo",
                desc: "Dati sparsi su file Excel, email e appunti. Impossibile avere una visione chiara dell'andamento aziendale."
              },
              {
                icon: <Brain className="text-drive-accent" size={32} />,
                title: "Decisioni di Pancia",
                desc: "Senza dati certi, le decisioni strategiche si basano sull'intuito, aumentando drasticamente il rischio di errore."
              },
              {
                icon: <RefreshCcw className="text-drive-accent" size={32} />,
                title: "Processi Obsoleti",
                desc: "\"Abbiamo sempre fatto così\". Questa frase è il nemico numero uno dell'efficienza e della competitività."
              },
              {
                icon: <Target className="text-drive-accent" size={32} />,
                title: "Mancanza di Visione",
                desc: "Adottare software a caso senza un piano porta solo frustrazione. Serve una roadmap chiara per integrare tecnologia e persone verso un obiettivo comune."
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
             <span className="text-drive-accent text-xs font-bold tracking-widest uppercase mb-2 block">APPROCCIO</span>
             <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Intervento Strategico</h2>
             <p className="text-gray-400 text-lg max-w-2xl">Non vendiamo software, vendiamo trasformazione.</p>
           </div>

           <div className="grid lg:grid-cols-2 gap-8 lg:gap-12">
             
             {/* Path 1: Assessment */}
             <div className="group relative rounded-2xl overflow-hidden min-h-[550px] border border-gray-800 hover:border-blue-500/50 transition-all duration-500">
                {/* Background Image */}
                <div className="absolute inset-0">
                  <img 
                    src="/CONSULENZA & INNOVAZIONE/Card_1_Consulenza.webp" 
                    alt="Analysis and Assessment" 
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/80 to-black/30"></div>
                  <div className="absolute inset-0 bg-blue-900/20 mix-blend-overlay"></div>
                </div>

                {/* Content */}
                <div className="relative z-10 p-8 md:p-12 h-full flex flex-col justify-end">
                   <div className="mb-auto">
                      <div className="bg-blue-600/90 w-fit p-3 rounded-xl mb-6 shadow-lg shadow-blue-900/50 backdrop-blur-sm">
                        <Search className="text-white" size={32} />
                      </div>
                   </div>
                   
                   <h3 className="text-3xl font-bold text-white mb-4">Analisi & Assessment</h3>
                   <p className="text-gray-300 mb-8 text-lg leading-relaxed">
                      Mappiamo lo stato dell'arte per capire dove intervenire con priorità.
                   </p>
                   
                   <ul className="space-y-4">
                     {[
                       "Interviste ai key user.",
                       "Mappatura flussi AS-IS.",
                       "Analisi gap tecnologici."
                     ].map((step, i) => (
                       <li key={i} className="flex items-center text-sm text-gray-200 bg-white/5 backdrop-blur-md p-4 rounded-lg border border-white/10 hover:bg-white/10 transition-colors">
                         <span className="bg-blue-600 text-white w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold mr-4 flex-shrink-0">{i+1}</span>
                         {step}
                       </li>
                     ))}
                   </ul>
                </div>
             </div>

             {/* Path 2: Roadmap */}
             <div className="group relative rounded-2xl overflow-hidden min-h-[550px] border border-gray-800 hover:border-drive-accent/50 transition-all duration-500">
                {/* Background Image */}
                <div className="absolute inset-0">
                  <img 
                    src="/CONSULENZA & INNOVAZIONE/Card_2_Consuelnza.webp" 
                    alt="Strategic Planning" 
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/80 to-black/30"></div>
                  <div className="absolute inset-0 bg-drive-accent/20 mix-blend-overlay"></div>
                </div>

                {/* Content */}
                <div className="relative z-10 p-8 md:p-12 h-full flex flex-col justify-end">
                   <div className="mb-auto">
                      <div className="bg-drive-accent/90 w-fit p-3 rounded-xl mb-6 shadow-lg shadow-drive-accent/30 backdrop-blur-sm">
                        <Map className="text-white" size={32} />
                      </div>
                   </div>
                   
                   <h3 className="text-3xl font-bold text-white mb-4">Roadmap & Execution</h3>
                   <p className="text-gray-300 mb-8 text-lg leading-relaxed">
                      Definiamo il piano TO-BE e ti accompagniamo nell'implementazione.
                   </p>
                   
                   <ul className="space-y-4">
                     {[
                       "Piano operativo step-by-step.",
                       "Selezione tecnologie.",
                       "Supporto al Change Management."
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
             <h2 className="text-3xl font-bold text-white">Servizi di Consulenza</h2>
             <p className="text-gray-400 mt-2 text-lg">Le fasi del nostro intervento.</p>
           </div>
           
           <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                { title: "Digital Maturity", desc: "Valutazione del livello di digitalizzazione attuale rispetto agli standard.", icon: <BarChart size={32} className="text-drive-accent" /> },
                { title: "Process Mining", desc: "Analisi dettagliata per identificare colli di bottiglia e inefficienze nascoste.", icon: <Workflow size={32} className="text-drive-accent" /> },
                { title: "Roadmap Strategica", desc: "Pianificazione degli interventi con priorità basate sul ROI.", icon: <Map size={32} className="text-drive-accent" /> },
                { title: "Change Management", desc: "Formazione del personale per gestire l'impatto delle nuove tecnologie.", icon: <Users size={32} className="text-drive-accent" /> },
                { title: "Data Analysis & KPI", desc: "Definizione metriche chiave e implementazione dashboard direzionali.", icon: <LayoutDashboard size={32} className="text-drive-accent" /> },
                { title: "Implementation Support", desc: "Accompagnamento operativo per garantire che la teoria diventi pratica.", icon: <Rocket size={32} className="text-drive-accent" /> }
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
            src="/CONSULENZA & INNOVAZIONE/Transizione_Consulenza.webp" 
            alt="Strategic Meeting"
            className="w-full h-full object-cover object-center"
         />
         <div className="absolute inset-0 bg-purple-900/20 mix-blend-multiply"></div>
      </section>

      {/* Pillars Section (Requested Content: Dal Caos all'Ordine) */}
      <section className="py-24 bg-[#050608] border-t border-gray-900">
         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="mb-16">
              <h2 className="text-3xl font-bold text-white mb-4">Dal Caos all'Ordine</h2>
              <p className="text-gray-400">La tecnologia è solo un mezzo, non il fine. Prima di scrivere una sola riga di codice, lavoriamo con te per mappare la realtà aziendale, identificare dove si perde valore e ridisegnare i flussi.</p>
            </div>

            <div className="space-y-8">
               {[
                 { icon: <Search className="text-drive-accent" />, title: "Analisi Profonda", desc: "Non ci fidiamo delle sensazioni. Analizziamo i dati per trovare la verità." },
                 { icon: <Map className="text-drive-accent" />, title: "Strategia Chiara", desc: "Una roadmap passo-passo per portarti dallo stato attuale all'obiettivo." },
                 { icon: <Rocket className="text-drive-accent" />, title: "Esecuzione Agile", desc: "Implementiamo le soluzioni in cicli rapidi per portare valore immediato." }
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

      {/* CTA Section */}
      <section className="relative py-32 text-center overflow-hidden border-t border-gray-800">
         {/* Background Image */}
         <div className="absolute inset-0 z-0">
          <img
            src="/CONSULENZA & INNOVAZIONE/CTA_Consulenza.webp"
            alt="Business Success"
            className="w-full h-full object-cover"
          />
          {/* Dark Overlay */}
          <div className="absolute inset-0 bg-[#080a10]/90"></div>
        </div>

         <div className="max-w-4xl mx-auto px-4 relative z-10">
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-8 leading-tight">
               Raccontaci un tuo flusso aziendale che vorresti <span className="text-drive-accent">'buttare via'</span> e rifare da zero.
            </h2>
            <p className="text-gray-400 mb-12 text-lg">
               Spesso basta ridisegnare un singolo processo critico per sbloccare la crescita. Parliamone.
            </p>
            <NavLink to="/contatti">
               <Button variant="primary" className="px-12 py-5 text-lg group shadow-2xl shadow-black/50">
                  Prenota una Call Strategica <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
               </Button>
            </NavLink>
         </div>
      </section>
    </div>
  );
};

export default InnovationStrategy;
