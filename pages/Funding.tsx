
import React from 'react';
import Button from '../components/Button';
import { 
  Landmark, 
  Search, 
  FileText, 
  Clock, 
  PieChart, 
  CheckCircle2, 
  ArrowRight,
  TrendingUp,
  FileCheck,
  ExternalLink,
  Target,
  Banknote,
  GraduationCap,
  Factory
} from 'lucide-react';

const Funding: React.FC = () => {
  return (
    <div className="pt-20">
      {/* Hero Section (KEPT AS IS) */}
      <section className="py-24 bg-[#080a10] relative overflow-hidden">
        <div className="absolute inset-0 z-0">
           <img 
             src="/FUNDING/Hero_Section_Funding.webp" 
             alt="Colorful Finance Abstract" 
             className="w-full h-full object-cover opacity-40" 
           />
           <div className="absolute inset-0 bg-gradient-to-r from-[#080a10] via-[#080a10]/80 to-transparent"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <span className="text-drive-accent text-xs font-bold tracking-widest uppercase mb-4 block">SERVIZI / FINANZA AGEVOLATA</span>
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-8 leading-tight">
            Funding & <br/> <span className="text-drive-accent">Finanza Agevolata</span>.
          </h1>
          <p className="text-gray-300 text-lg md:text-xl mb-10 max-w-3xl leading-relaxed">
            Accesso al Capitale: Trasforma la burocrazia in opportunità. Ti guidiamo nella ricerca e nell'ottenimento dei Bandi più adatti al tuo progetto per trasformare i costi in investimenti.
          </p>
          
          <div className="flex flex-wrap gap-4">
            <a href="https://www.digitalbando.it/" target="_blank" rel="noopener noreferrer">
              <Button variant="primary" className="px-8 py-4 text-base shadow-xl shadow-[#9c2948]/30">
                Vai a Digital Bando <ExternalLink size={18} className="ml-2" />
              </Button>
            </a>
          </div>
        </div>
      </section>

      {/* Overview & Key Concept (Requested Content) */}
      <section className="pb-20 pt-20 bg-gradient-to-b from-[#080a10] to-[#11141d]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
           <div className="grid md:grid-cols-2 gap-16 items-center">
              <div>
                 <h2 className="text-2xl font-bold text-white mb-4">Da Costo a Investimento</h2>
                 <p className="text-gray-400 max-w-lg leading-relaxed text-lg mb-6">
                   Il nostro obiettivo principale è trasformare i tuoi investimenti in digitalizzazione e innovazione da un puro costo aziendale a un <strong>investimento finanziato</strong>. Recupera liquidità e accelera la crescita tecnologica della tua PMI.
                 </p>
              </div>
              
              {/* Target Ideale Block (Requested) */}
              <div className="bg-[#0a0c12] p-8 rounded-xl border border-gray-800 shadow-2xl relative">
                  <div className="absolute -top-6 -right-6 bg-drive-accent p-4 rounded-full shadow-lg">
                    <Target size={32} className="text-white" />
                  </div>
                 <h3 className="text-xl font-bold text-white mb-4">Target Ideale</h3>
                 <p className="text-gray-400 mb-6 text-sm leading-relaxed">
                    Ci rivolgiamo a PMI che vogliono investire in software e innovazione. Se la tua azienda sta pianificando di adottare nuove tecnologie, CRM, E-commerce o Intelligenza Artificiale, esistono fondi dedicati che spesso rimangono inutilizzati.
                 </p>
                 <ul className="space-y-3">
                    <li className="flex items-center text-gray-300 text-sm">
                        <CheckCircle2 className="text-drive-accent mr-3" size={16} />
                        Innovazione di processo e prodotto
                    </li>
                    <li className="flex items-center text-gray-300 text-sm">
                        <CheckCircle2 className="text-drive-accent mr-3" size={16} />
                        Formazione 4.0 del personale
                    </li>
                    <li className="flex items-center text-gray-300 text-sm">
                        <CheckCircle2 className="text-drive-accent mr-3" size={16} />
                        Transizione digitale ed ecologica
                    </li>
                </ul>
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
            <h2 className="text-3xl font-bold text-white mb-4">La burocrazia è un labirinto</h2>
            <p className="text-gray-400 max-w-2xl mx-auto">Milioni di euro tornano a Bruxelles ogni anno perché le aziende non sanno come chiederli. Noi colmiamo questo gap.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: <FileText className="text-drive-accent" size={32} />,
                title: "Bandi Persi",
                desc: "È impossibile monitorare centinaia di portali regionali e nazionali. Noi lo facciamo per te con un team dedicato."
              },
              {
                icon: <Clock className="text-drive-accent" size={32} />,
                title: "Scadenze Bruciate",
                desc: "I click-day e le finestre temporali strette richiedono prontezza. Preparare i documenti all'ultimo minuto significa perdere i fondi."
              },
              {
                icon: <FileCheck className="text-drive-accent" size={32} />,
                title: "Errori Formali",
                desc: "Un errore nella compilazione della domanda o un allegato mancante può invalidare l'intero progetto, anche se tecnicamente valido."
              },
              {
                icon: <Landmark className="text-drive-accent" size={32} />,
                title: "Rendicontazione Complessa",
                desc: "Ottenere il bando è solo l'inizio. La parte difficile è dimostrare le spese per ricevere i soldi. Gestiamo l'intero ciclo di vita della pratica fino al bonifico sul tuo conto."
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
             <span className="text-drive-accent text-xs font-bold tracking-widest uppercase mb-2 block">OPPORTUNITÀ</span>
             <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Cosa possiamo finanziare</h2>
             <p className="text-gray-400 text-lg max-w-2xl">Le aree di intervento principali per la tua crescita.</p>
           </div>

           <div className="grid lg:grid-cols-2 gap-8 lg:gap-12">
             
             {/* Path 1: Hardware/Software */}
             <div className="group relative rounded-2xl overflow-hidden min-h-[550px] border border-gray-800 hover:border-green-500/50 transition-all duration-500">
                {/* Background Image */}
                <div className="absolute inset-0">
                  <img 
                    src="/FUNDING/Card_1_Funding.webp" 
                    alt="Industry 4.0" 
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/80 to-black/30"></div>
                  <div className="absolute inset-0 bg-green-900/20 mix-blend-overlay"></div>
                </div>

                {/* Content */}
                <div className="relative z-10 p-8 md:p-12 h-full flex flex-col justify-end">
                   <div className="mb-auto">
                      <div className="bg-green-600/90 w-fit p-3 rounded-xl mb-6 shadow-lg shadow-green-900/50 backdrop-blur-sm">
                        <Factory className="text-white" size={32} />
                      </div>
                   </div>
                   
                   <h3 className="text-3xl font-bold text-white mb-4">Transizione 5.0 & Industria 4.0</h3>
                   <p className="text-gray-300 mb-8 text-lg leading-relaxed">
                      Crediti d'imposta per macchinari interconnessi, software gestionali ed efficientamento energetico.
                   </p>
                   
                   <ul className="space-y-4">
                     {[
                       "Acquisto Software (ERP/CRM).",
                       "Macchinari interconnessi.",
                       "Pannelli fotovoltaici e risparmio energetico."
                     ].map((step, i) => (
                       <li key={i} className="flex items-center text-sm text-gray-200 bg-white/5 backdrop-blur-md p-4 rounded-lg border border-white/10 hover:bg-white/10 transition-colors">
                         <span className="bg-green-600 text-white w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold mr-4 flex-shrink-0">{i+1}</span>
                         {step}
                       </li>
                     ))}
                   </ul>
                </div>
             </div>

             {/* Path 2: Soft Skills */}
             <div className="group relative rounded-2xl overflow-hidden min-h-[550px] border border-gray-800 hover:border-drive-accent/50 transition-all duration-500">
                {/* Background Image */}
                <div className="absolute inset-0">
                  <img 
                    src="/FUNDING/Card_2_Funding.webp" 
                    alt="Training and Skills" 
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/80 to-black/30"></div>
                  <div className="absolute inset-0 bg-drive-accent/20 mix-blend-overlay"></div>
                </div>

                {/* Content */}
                <div className="relative z-10 p-8 md:p-12 h-full flex flex-col justify-end">
                   <div className="mb-auto">
                      <div className="bg-drive-accent/90 w-fit p-3 rounded-xl mb-6 shadow-lg shadow-drive-accent/30 backdrop-blur-sm">
                        <GraduationCap className="text-white" size={32} />
                      </div>
                   </div>
                   
                   <h3 className="text-3xl font-bold text-white mb-4">Formazione & Internazionalizzazione</h3>
                   <p className="text-gray-300 mb-8 text-lg leading-relaxed">
                      Fondi per formare il personale sulle nuove tecnologie e voucher per l'export digitale.
                   </p>
                   
                   <ul className="space-y-4">
                     {[
                       "Formazione dipendenti.",
                       "Fiere internazionali.",
                       "Consulenza Temporary Export Manager."
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
             <h2 className="text-3xl font-bold text-white">Servizio Completo</h2>
             <p className="text-gray-400 mt-2 text-lg">Dallo scouting all'incasso.</p>
           </div>
           
           <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                { title: "Scouting Bandi", desc: "Monitoraggio costante di bandi regionali, nazionali ed europei.", icon: <Search size={32} className="text-drive-accent" /> },
                { title: "Analisi Idoneità", desc: "Verifica preliminare dei requisiti per evitare perdite di tempo.", icon: <FileCheck size={32} className="text-drive-accent" /> },
                { title: "Scrittura Progetto", desc: "Redazione tecnica della domanda e del business plan richiesto.", icon: <FileText size={32} className="text-drive-accent" /> },
                { title: "Gestione Click-Day", desc: "Invio telematico tempestivo per bandi a sportello.", icon: <Clock size={32} className="text-drive-accent" /> },
                { title: "Follow-up Enti", desc: "Gestione comunicazioni e integrazioni con gli enti erogatori.", icon: <Landmark size={32} className="text-drive-accent" /> },
                { title: "Rendicontazione", desc: "Raccolta fatture e giustificativi per ottenere l'erogazione finale.", icon: <PieChart size={32} className="text-drive-accent" /> }
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
            src="/FUNDING/Transizione_Funding.webp" 
            alt="Financial Growth Charts"
            className="w-full h-full object-cover object-center"
         />
         <div className="absolute inset-0 bg-green-900/20 mix-blend-multiply"></div>
      </section>

      {/* CTA Section */}
      <section className="relative py-32 text-center overflow-hidden border-t border-gray-800">
         {/* Background Image */}
         <div className="absolute inset-0 z-0">
          <img
            src="/FUNDING/CTA_Funding.webp"
            alt="Finance Success"
            className="w-full h-full object-cover"
          />
          {/* Dark Overlay */}
          <div className="absolute inset-0 bg-[#080a10]/90"></div>
        </div>

         <div className="max-w-4xl mx-auto px-4 relative z-10">
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-8 leading-tight">
               Vuoi sapere se la tua azienda è <span className="text-drive-accent">idonea</span>?
            </h2>
            <p className="text-gray-400 mb-12 text-lg">
               Non perdere opportunità preziose. Scrivici per un'analisi gratuita della tua situazione.
            </p>
            <a href="https://www.digitalbando.it/" target="_blank" rel="noopener noreferrer">
               <Button variant="primary" className="px-12 py-5 text-lg group shadow-2xl shadow-black/50">
                  Richiedi Analisi Gratuita <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
               </Button>
            </a>
         </div>
      </section>
    </div>
  );
};

export default Funding;
