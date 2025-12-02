
import React from 'react';
import { NavLink } from 'react-router-dom';
import Button from '../components/Button';
import { 
  Bot, 
  Mail, 
  FileText, 
  Megaphone, 
  FileBarChart, 
  TrendingUp, 
  ArrowRight,
  Workflow,
  Cpu,
  BrainCircuit,
  Zap,
  Clock,
  Database,
  Layers,
  MessageSquare,
  Users
} from 'lucide-react';

const AiFlows: React.FC = () => {
  return (
    <div className="pt-20">
      {/* Hero Section (KEPT AS IS) */}
      <section className="py-24 bg-[#080a10] relative overflow-hidden">
        <div className="absolute inset-0 z-0">
           <img 
             src="https://images.unsplash.com/photo-1620712943543-bcc4688e7485?auto=format&fit=crop&w=2000&q=80" 
             alt="AI Workflows" 
             className="w-full h-full object-cover opacity-20" 
           />
           <div className="absolute inset-0 bg-gradient-to-r from-[#080a10] via-[#080a10]/80 to-transparent"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <span className="text-drive-accent text-xs font-bold tracking-widest uppercase mb-4 block">SERVIZI / AI & AUTOMAZIONE</span>
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-8 leading-tight">
            Realizzazione Flussi <br/>
            <span className="text-drive-accent">AI Personalizzati</span>.
          </h1>
          <p className="text-gray-300 text-lg md:text-xl mb-10 max-w-3xl leading-relaxed">
            Sviluppo di automazioni intelligenti custom che integrano AI generativa nei processi aziendali specifici del cliente.
          </p>
          
          <div className="p-6 bg-gray-800/30 border-l-4 border-drive-accent rounded-r-lg max-w-2xl backdrop-blur-sm">
             <p className="text-white text-lg italic">
               "Sfruttiamo tutto quello che l'AI ci mette a disposizione per automatizzare i compiti ripetitivi e generare insight predittivi su misura per te."
             </p>
          </div>
        </div>
      </section>

      {/* Overview & Target Stats (Requested Content) */}
      <section className="pb-20 pt-20 bg-gradient-to-b from-[#080a10] to-[#11141d]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
           <div className="grid md:grid-cols-2 gap-16 items-center">
              <div>
                 <h2 className="text-2xl font-bold text-white mb-4">Automazione su Misura</h2>
                 <p className="text-gray-400 max-w-lg leading-relaxed text-lg mb-6">
                   Non offriamo soluzioni "one-size-fits-all". Analizziamo il tuo flusso, identifichiamo i colli di bottiglia e costruiamo agenti AI che si integrano perfettamente nel tuo ecosistema software.
                 </p>
                 <div className="flex items-center gap-4 text-sm text-gray-300">
                    <div className="flex items-center"><Cpu className="text-drive-accent mr-2" size={18} /> Integrazione API</div>
                    <div className="flex items-center"><Workflow className="text-drive-accent mr-2" size={18} /> Processi Scalabili</div>
                 </div>
              </div>
              
              {/* Target Ideale & Efficiency Block (Requested) */}
              <div className="bg-[#0a0c12] p-8 rounded-xl border border-gray-800 shadow-2xl">
                 <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
                    <BrainCircuit className="text-drive-accent" /> Target Ideale
                 </h3>
                 <p className="text-gray-400 mb-6">
                    Aziende con processi <strong>knowledge-intensive</strong>, dove la gestione delle informazioni, l'analisi di documenti e la comunicazione richiedono un alto dispendio di tempo umano qualificato.
                 </p>
                 <div className="space-y-4">
                    <div>
                        <div className="flex justify-between text-xs text-gray-500 mb-1">
                            <span>Efficienza Attuale</span>
                        </div>
                        <div className="h-2 bg-gray-800 rounded-full overflow-hidden">
                            <div className="h-full bg-gray-600 w-1/4"></div>
                        </div>
                    </div>
                    <div>
                        <div className="flex justify-between text-xs text-gray-500 mb-1">
                            <span className="text-drive-accent font-bold">Potenziale AI (+75%)</span>
                        </div>
                        <div className="h-2 bg-gray-800 rounded-full overflow-hidden">
                            <div className="h-full bg-drive-accent w-full"></div>
                        </div>
                    </div>
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
            <h2 className="text-3xl font-bold text-white mb-4">Libera il tuo team dal lavoro robotico</h2>
            <p className="text-gray-400 max-w-2xl mx-auto">I tuoi dipendenti sprecano ore in compiti ripetitivi. L'AI non li sostituisce, ma li potenzia.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: <Clock className="text-drive-accent" size={32} />,
                title: "Tempo Perso",
                desc: "Data entry, classificazione email e copia-incolla tra software diversi consumano il 40% del tempo lavorativo."
              },
              {
                icon: <MessageSquare className="text-drive-accent" size={32} />,
                title: "Risposte Lente",
                desc: "I clienti aspettano ore o giorni per una risposta semplice. Un agente AI può rispondere in secondi, 24/7."
              },
              {
                icon: <Database className="text-drive-accent" size={32} />,
                title: "Informazioni Perse",
                desc: "La conoscenza aziendale è dispersa in PDF, chat e menti delle persone. L'AI centralizza e rende interrogabile tutto."
              },
              {
                icon: <Zap className="text-drive-accent" size={32} />,
                title: "Colli di Bottiglia Operativi",
                desc: "Quando un processo dipende da una singola persona per l'approvazione o l'analisi, l'azienda rallenta. Creiamo flussi automatici che scalano all'infinito senza stancarsi mai."
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
             <span className="text-drive-accent text-xs font-bold tracking-widest uppercase mb-2 block">APPLICAZIONI</span>
             <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Potenza AI in Azione</h2>
             <p className="text-gray-400 text-lg max-w-2xl">Dalla gestione clienti all'analisi documentale complessa.</p>
           </div>

           <div className="grid lg:grid-cols-2 gap-8 lg:gap-12">
             
             {/* Path 1: Customer Facing */}
             <div className="group relative rounded-2xl overflow-hidden min-h-[550px] border border-gray-800 hover:border-blue-500/50 transition-all duration-500">
                {/* Background Image */}
                <div className="absolute inset-0">
                  <img 
                    src="https://images.unsplash.com/photo-1531746790731-6c087fecd65a?auto=format&fit=crop&w=1000&q=80" 
                    alt="AI Customer Service" 
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/80 to-black/30"></div>
                  <div className="absolute inset-0 bg-blue-900/20 mix-blend-overlay"></div>
                </div>

                {/* Content */}
                <div className="relative z-10 p-8 md:p-12 h-full flex flex-col justify-end">
                   <div className="mb-auto">
                      <div className="bg-blue-600/90 w-fit p-3 rounded-xl mb-6 shadow-lg shadow-blue-900/50 backdrop-blur-sm">
                        <Users className="text-white" size={32} />
                      </div>
                   </div>
                   
                   <h3 className="text-3xl font-bold text-white mb-4">Customer Experience</h3>
                   <p className="text-gray-300 mb-8 text-lg leading-relaxed">
                      Assistenti virtuali che non sembrano robot. Comprendono, risolvono e convertono.
                   </p>
                   
                   <ul className="space-y-4">
                     {[
                       "Chatbot intelligente 24/7.",
                       "Analisi sentiment email in entrata.",
                       "Risposte automatiche personalizzate."
                     ].map((step, i) => (
                       <li key={i} className="flex items-center text-sm text-gray-200 bg-white/5 backdrop-blur-md p-4 rounded-lg border border-white/10 hover:bg-white/10 transition-colors">
                         <span className="bg-blue-600 text-white w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold mr-4 flex-shrink-0">{i+1}</span>
                         {step}
                       </li>
                     ))}
                   </ul>
                </div>
             </div>

             {/* Path 2: Internal Ops */}
             <div className="group relative rounded-2xl overflow-hidden min-h-[550px] border border-gray-800 hover:border-drive-accent/50 transition-all duration-500">
                {/* Background Image */}
                <div className="absolute inset-0">
                  <img 
                    src="https://images.unsplash.com/photo-1620712943543-bcc4688e7485?auto=format&fit=crop&w=1000&q=80" 
                    alt="Data Processing" 
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/80 to-black/30"></div>
                  <div className="absolute inset-0 bg-drive-accent/20 mix-blend-overlay"></div>
                </div>

                {/* Content */}
                <div className="relative z-10 p-8 md:p-12 h-full flex flex-col justify-end">
                   <div className="mb-auto">
                      <div className="bg-drive-accent/90 w-fit p-3 rounded-xl mb-6 shadow-lg shadow-drive-accent/30 backdrop-blur-sm">
                        <FileText className="text-white" size={32} />
                      </div>
                   </div>
                   
                   <h3 className="text-3xl font-bold text-white mb-4">Back-Office & HR</h3>
                   <p className="text-gray-300 mb-8 text-lg leading-relaxed">
                      Smetti di leggere centinaia di documenti. Lascia che l'AI estragga i dati per te.
                   </p>
                   
                   <ul className="space-y-4">
                     {[
                       "Screening CV automatico.",
                       "Estrazione dati da fatture/contratti.",
                       "Generazione report e sintesi."
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
             <h2 className="text-3xl font-bold text-white">Applicazioni Concrete</h2>
             <p className="text-gray-400 mt-2 text-lg">Moduli pronti per essere integrati nel tuo flusso.</p>
           </div>
           
           <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                { title: "Analisi Email", desc: "Scansione posta in arrivo, identificazione priorità e bozze di risposta automatiche.", icon: <Mail size={32} className="text-drive-accent" /> },
                { title: "Job Description HR", desc: "Generazione automatica di annunci e screening iniziale dei candidati.", icon: <Users size={32} className="text-drive-accent" /> },
                { title: "Content Marketing", desc: "Creazione di post, articoli e newsletter nel tuo esatto tono di voce.", icon: <Megaphone size={32} className="text-drive-accent" /> },
                { title: "Sintesi Report", desc: "Estrazione punti chiave da contratti o report tecnici lunghi e complessi.", icon: <FileBarChart size={32} className="text-drive-accent" /> },
                { title: "Chatbot NLP", desc: "Assistenti che capiscono il contesto e non rispondono solo a keyword esatte.", icon: <Bot size={32} className="text-drive-accent" /> },
                { title: "Previsioni Trend", desc: "Analisi predittiva sui dati di vendita per anticipare le richieste del mercato.", icon: <TrendingUp size={32} className="text-drive-accent" /> }
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
            src="https://images.unsplash.com/photo-1485827404703-89b55fcc595e?auto=format&fit=crop&w=2000&q=80" 
            alt="Futuristic Robot AI"
            className="w-full h-full object-cover object-center"
         />
         <div className="absolute inset-0 bg-blue-900/20 mix-blend-multiply"></div>
      </section>

      {/* CTA Section */}
      <section className="relative py-32 text-center overflow-hidden border-t border-gray-800">
         {/* Background Image */}
         <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1535378437327-10ffb8b9e97f?auto=format&fit=crop&w=2000&q=80"
            alt="AI Connection"
            className="w-full h-full object-cover"
          />
          {/* Dark Overlay */}
          <div className="absolute inset-0 bg-[#080a10]/90"></div>
        </div>

         <div className="max-w-4xl mx-auto px-4 relative z-10">
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-8 leading-tight">
               C'è un'attività manuale che vorresti delegare <br/> a un <span className="text-drive-accent">assistente AI</span>?
            </h2>
            <p className="text-gray-400 mb-12 text-lg">
               Raccontaci il tuo processo. Progetteremo il flusso che ti libererà dal lavoro ripetitivo.
            </p>
            <NavLink to="/contatti">
               <Button variant="primary" className="px-12 py-5 text-lg group shadow-2xl shadow-black/50">
                  Parla con un Esperto AI <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
               </Button>
            </NavLink>
         </div>
      </section>
    </div>
  );
};

export default AiFlows;
