
import React from 'react';
import { NavLink } from 'react-router-dom';
import Button from '../components/Button';
import { 
  ArrowRight, 
  CheckCircle2, 
  XCircle, 
  Calculator, 
  Database,
  RefreshCw,
  Layers,
  BarChart3,
  Globe,
  Zap,
  Server,
  Network
} from 'lucide-react';

const DigitalTransformation: React.FC = () => {
  return (
    <div className="pt-20">
      {/* Hero Section (KEPT AS IS) */}
      <section className="py-24 bg-[#080a10] relative overflow-hidden">
        <div className="absolute inset-0 z-0">
           <img 
             src="/TRAFORMAZIONE DIGITALE/Hero_Section_Traformazione.webp" 
             alt="Efficiency and Automation" 
             className="w-full h-full object-cover opacity-20" 
           />
           <div className="absolute inset-0 bg-gradient-to-r from-[#080a10] via-[#080a10]/90 to-transparent"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <span className="text-drive-accent text-xs font-bold tracking-widest uppercase mb-4 block">SERVIZI / TRASFORMAZIONE DIGITALE</span>
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-8 leading-tight">
            Trasformazione Digitale <br/>
            & <span className="text-drive-accent">Efficienza</span>.
          </h1>
          <p className="text-gray-300 text-lg md:text-xl mb-10 max-w-3xl leading-relaxed">
            Elimina i colli di bottiglia e scala il tuo business. Esperti nell'ottimizzazione dei processi per PMI che vogliono smettere di rincorrere le emergenze e iniziare a guidare la crescita.
          </p>
          
          <div className="flex flex-wrap gap-4">
            <a href="#roi-calculator">
              <Button variant="primary" className="px-8 py-4 text-base shadow-xl shadow-[#9c2948]/30">
                Calcola il tuo ROI <Calculator size={18} className="ml-2" />
              </Button>
            </a>
          </div>
        </div>
      </section>

      {/* Overview & Intro - UPDATED LAYOUT (Text Left / Image Right) */}
      <section className="pb-20 pt-20 bg-gradient-to-b from-[#080a10] to-[#11141d]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
             <div>
                <h2 className="text-2xl font-bold text-white mb-4">Ottimizzazione dei Processi</h2>
                <p className="text-gray-400 leading-relaxed text-lg">
                  La trasformazione digitale non è comprare computer nuovi. È ripensare come le informazioni fluiscono nella tua azienda per eliminare sprechi e lentezze.
                </p>
             </div>
             
             <div className="rounded-xl overflow-hidden shadow-2xl border border-gray-800 relative group">
                <div className="absolute inset-0 bg-drive-accent/10 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none"></div>
                <img 
                  src="/TRAFORMAZIONE DIGITALE/Foto_1_Traformazione.webp" 
                  alt="Process Optimization Dashboard" 
                  className="w-full object-cover" 
                />
             </div>
          </div>
        </div>
      </section>

      {/* Special Section: Before / After (Requested Content) */}
      <section className="py-24 bg-[#0b0e14] relative overflow-hidden">
        {/* Tech Grid Pattern */}
        <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: 'radial-gradient(#ffffff 1px, transparent 1px)', backgroundSize: '24px 24px' }}></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
           <div className="text-center mb-16">
              <h2 className="text-3xl font-bold text-white mb-4">L'impatto della Digitalizzazione</h2>
              <p className="text-gray-400">La differenza tra subire il lavoro e gestirlo.</p>
           </div>

           <div className="grid md:grid-cols-2 gap-8 lg:gap-16">
              {/* Prima */}
              <div className="bg-[#0a0c12] border border-red-900/30 p-8 rounded-xl relative overflow-hidden">
                 <div className="absolute top-0 left-0 w-1 h-full bg-red-900/50"></div>
                 <h3 className="text-2xl font-bold text-white mb-6 flex items-center">
                    <XCircle className="text-red-500 mr-3" /> Prima (Manuale)
                 </h3>
                 <ul className="space-y-4">
                    <li className="flex items-start text-gray-400">
                       <span className="mr-3 mt-1 text-red-500/50">•</span>
                       Fogli Excel sparsi e non sincronizzati
                    </li>
                    <li className="flex items-start text-gray-400">
                       <span className="mr-3 mt-1 text-red-500/50">•</span>
                       Email perse e comunicazioni frammentate
                    </li>
                    <li className="flex items-start text-gray-400">
                       <span className="mr-3 mt-1 text-red-500/50">•</span>
                       Inserimento dati manuale ripetitivo (Data Entry)
                    </li>
                    <li className="flex items-start text-gray-400">
                       <span className="mr-3 mt-1 text-red-500/50">•</span>
                       Decisioni basate su sensazioni, non dati
                    </li>
                 </ul>
              </div>

              {/* Dopo */}
              <div className="bg-[#0a0c12] border border-green-900/30 p-8 rounded-xl relative overflow-hidden shadow-2xl shadow-green-900/10">
                 <div className="absolute top-0 left-0 w-1 h-full bg-drive-accent"></div>
                 <h3 className="text-2xl font-bold text-white mb-6 flex items-center">
                    <CheckCircle2 className="text-drive-accent mr-3" /> Dopo (Digitale)
                 </h3>
                 <ul className="space-y-4">
                    <li className="flex items-start text-gray-300">
                       <span className="mr-3 mt-1 text-drive-accent">•</span>
                       Database centralizzato accessibile in cloud
                    </li>
                    <li className="flex items-start text-gray-300">
                       <span className="mr-3 mt-1 text-drive-accent">•</span>
                       Automazione dei flussi e notifiche intelligenti
                    </li>
                    <li className="flex items-start text-gray-300">
                       <span className="mr-3 mt-1 text-drive-accent">•</span>
                       Integrazione automatica tra reparti (Vendite - Magazzino)
                    </li>
                    <li className="flex items-start text-gray-300">
                       <span className="mr-3 mt-1 text-drive-accent">•</span>
                       Dashboard KPI in tempo reale per la direzione
                    </li>
                 </ul>
              </div>
           </div>
        </div>
      </section>

      {/* Use Cases - Immersive Panels */}
      <section className="py-24 bg-[#080a10] border-t border-gray-900 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
           <div className="mb-16 text-center lg:text-left">
             <span className="text-drive-accent text-xs font-bold tracking-widest uppercase mb-2 block">AMBITI</span>
             <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Dove interveniamo</h2>
             <p className="text-gray-400 text-lg max-w-2xl">Ogni reparto può beneficiare di un upgrade digitale.</p>
           </div>

           <div className="grid lg:grid-cols-2 gap-8 lg:gap-12">
             
             {/* Path 1: Operations */}
             <div className="group relative rounded-2xl overflow-hidden min-h-[550px] border border-gray-800 hover:border-blue-500/50 transition-all duration-500">
                {/* Background Image */}
                <div className="absolute inset-0">
                  <img 
                    src="/TRAFORMAZIONE DIGITALE/Card_1_Traformazione.webp" 
                    alt="Warehouse Operations" 
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/80 to-black/30"></div>
                  <div className="absolute inset-0 bg-blue-900/20 mix-blend-overlay"></div>
                </div>

                {/* Content */}
                <div className="relative z-10 p-8 md:p-12 h-full flex flex-col justify-end">
                   <div className="mb-auto">
                      <div className="bg-blue-600/90 w-fit p-3 rounded-xl mb-6 shadow-lg shadow-blue-900/50 backdrop-blur-sm">
                        <Layers className="text-white" size={32} />
                      </div>
                   </div>
                   
                   <h3 className="text-3xl font-bold text-white mb-4">Logistica & Operations</h3>
                   <p className="text-gray-300 mb-8 text-lg leading-relaxed">
                      Dal magazzino alla spedizione, tracciabilità totale e zero errori.
                   </p>
                   
                   <ul className="space-y-4">
                     {[
                       "Gestione barcode e lettori.",
                       "Integrazione corrieri.",
                       "Controllo giacenze real-time."
                     ].map((step, i) => (
                       <li key={i} className="flex items-center text-sm text-gray-200 bg-white/5 backdrop-blur-md p-4 rounded-lg border border-white/10 hover:bg-white/10 transition-colors">
                         <span className="bg-blue-600 text-white w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold mr-4 flex-shrink-0">{i+1}</span>
                         {step}
                       </li>
                     ))}
                   </ul>
                </div>
             </div>

             {/* Path 2: Admin */}
             <div className="group relative rounded-2xl overflow-hidden min-h-[550px] border border-gray-800 hover:border-drive-accent/50 transition-all duration-500">
                {/* Background Image */}
                <div className="absolute inset-0">
                  <img 
                    src="/TRAFORMAZIONE DIGITALE/Card_2_Traformazione.webp" 
                    alt="Administrative Tasks" 
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/80 to-black/30"></div>
                  <div className="absolute inset-0 bg-drive-accent/20 mix-blend-overlay"></div>
                </div>

                {/* Content */}
                <div className="relative z-10 p-8 md:p-12 h-full flex flex-col justify-end">
                   <div className="mb-auto">
                      <div className="bg-drive-accent/90 w-fit p-3 rounded-xl mb-6 shadow-lg shadow-drive-accent/30 backdrop-blur-sm">
                        <Database className="text-white" size={32} />
                      </div>
                   </div>
                   
                   <h3 className="text-3xl font-bold text-white mb-4">Amministrazione & Vendite</h3>
                   <p className="text-gray-300 mb-8 text-lg leading-relaxed">
                      Flussi documentali automatizzati e CRM integrato per la forza vendita.
                   </p>
                   
                   <ul className="space-y-4">
                     {[
                       "Fatturazione elettronica automatica.",
                       "Sincronizzazione ordini agenti.",
                       "Reportistica direzionale."
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
             <h2 className="text-3xl font-bold text-white">Tecnologie Abilitanti</h2>
             <p className="text-gray-400 mt-2 text-lg">Gli strumenti che usiamo per trasformare la tua azienda.</p>
           </div>
           
           <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                { title: "Cloud Computing", desc: "Accesso ai dati ovunque, sicurezza enterprise e backup automatici.", icon: <Globe size={32} className="text-drive-accent" /> },
                { title: "Integrazione API", desc: "Far parlare software diversi tra loro per eliminare il doppio data-entry.", icon: <Network size={32} className="text-drive-accent" /> },
                { title: "Automazione (RPA)", desc: "Robot software che eseguono compiti ripetitivi 24/7 senza errori.", icon: <Zap size={32} className="text-drive-accent" /> },
                { title: "Big Data & Analytics", desc: "Trasformare i dati grezzi in informazioni strategiche per decidere meglio.", icon: <BarChart3 size={32} className="text-drive-accent" /> },
                { title: "IoT Industriale", desc: "Connettere macchinari e produzione al gestionale aziendale.", icon: <Server size={32} className="text-drive-accent" /> },
                { title: "Cybersecurity", desc: "Proteggere il patrimonio informativo aziendale dalle minacce esterne.", icon: <CheckCircle2 size={32} className="text-drive-accent" /> }
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
            src="/TRAFORMAZIONE DIGITALE/Transizione_Trasformazione.webp" 
            alt="Digital Tunnel Tech"
            className="w-full h-full object-cover object-center"
         />
         <div className="absolute inset-0 bg-blue-900/20 mix-blend-multiply"></div>
      </section>

      {/* ROI Calculator Teaser / CTA */}
      <section id="roi-calculator" className="relative py-32 text-center overflow-hidden border-t border-gray-800">
         {/* Background Image */}
         <div className="absolute inset-0 z-0">
          <img
            src="/TRAFORMAZIONE DIGITALE/CTA_Trasformazione.webp"
            alt="Global Digital Network"
            className="w-full h-full object-cover"
          />
          {/* Dark Overlay */}
          <div className="absolute inset-0 bg-[#080a10]/90"></div>
        </div>

         <div className="max-w-3xl mx-auto px-4 relative z-10">
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-8 leading-tight">
               Quanto ti costa l'inefficienza?
            </h2>
            <p className="text-gray-400 mb-12 text-lg">
               Molte aziende perdono fino al 30% del fatturato in processi obsoleti.
            </p>
            <NavLink to="/contatti">
               <Button variant="primary" className="px-10 py-4 text-base shadow-xl shadow-black/50">
                  Calcola il tuo ROI <ArrowRight className="ml-2" />
               </Button>
            </NavLink>
         </div>
      </section>
    </div>
  );
};

export default DigitalTransformation;
