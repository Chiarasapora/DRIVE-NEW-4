
import React from 'react';
import Button from '../components/Button';
import { 
  TrendingUp, 
  AlertTriangle, 
  Users, 
  Award, 
  Mail,
  CreditCard,
  Target,
  BarChart,
  BrainCircuit,
  ExternalLink,
  BookOpen,
  Monitor
} from 'lucide-react';

const Aiamica: React.FC = () => {
  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="py-24 bg-[#080a10] relative overflow-hidden">
        <div className="absolute inset-0 z-0">
           <img 
             src="https://images.unsplash.com/photo-1616469829941-c7200edec809?auto=format&fit=crop&w=2000&q=80" 
             alt="AI Abstract Learning" 
             className="w-full h-full object-cover opacity-30" 
           />
           <div className="absolute inset-0 bg-gradient-to-r from-[#080a10] via-[#080a10]/80 to-transparent"></div>
           {/* Cyber Green Glow */}
           <div className="absolute top-20 right-20 w-80 h-80 bg-green-500/10 rounded-full blur-[80px]"></div>
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <span className="text-drive-accent text-xs font-bold tracking-widest uppercase mb-4 block">PRODOTTI / AIAMICA</span>
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-8 leading-tight">
            E' il momento giusto per <br/>
            imparare <span className="text-drive-accent">l'AI</span>.
          </h1>
          <p className="text-gray-300 text-lg md:text-xl mb-10 max-w-3xl leading-relaxed">
            Scopri come l'intelligenza artificiale può diventare il tuo alleato per crescere, reinventarti e dare nuova linfa alla tua carriera. <span className="text-white font-semibold">Anche se parti da zero.</span>
          </p>
          <a href="https://aiamica.it/carrello" target="_blank" rel="noopener noreferrer">
            <Button variant="primary" className="px-8 py-4 text-base shadow-xl shadow-[#9c2948]/30">
              Scopri i nostri percorsi formativi <ExternalLink size={18} className="ml-2" />
            </Button>
          </a>
        </div>
      </section>

      {/* Overview */}
      <section className="pb-20 pt-20 bg-gradient-to-b from-[#080a10] to-[#11141d]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-12">
             <h2 className="text-2xl font-bold text-white mb-4">Overview Piattaforma</h2>
             <p className="text-gray-400 max-w-4xl leading-relaxed text-lg">
               Aiamica non è solo un corso online, è un ecosistema formativo completo. Offriamo lezioni asincrone per imparare al tuo ritmo, ma anche tutoraggio in presenza per risolvere i dubbi reali del tuo business.
             </p>
          </div>
          
          <div className="rounded-xl overflow-hidden shadow-2xl border border-gray-800 relative group">
            <div className="absolute inset-0 bg-drive-accent/10 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none"></div>
            <img 
              src="https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&w=1200&q=80" 
              alt="Aiamica Learning Platform" 
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
            <h2 className="text-3xl font-bold text-white mb-4">Perché l'AI è una priorità ora</h2>
            <p className="text-gray-400 max-w-2xl mx-auto">Il mondo del lavoro sta cambiando velocemente. Ignorare il cambiamento non è più un'opzione.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: <TrendingUp className="text-drive-accent" size={32} />,
                title: "Competitor Veloci",
                desc: "1 PMI su 3 investirà in AI entro il 2025. Muoviti adesso o inseguirai chi è partito prima di te."
              },
              {
                icon: <AlertTriangle className="text-drive-accent" size={32} />,
                title: "Rischio Obsolescenza",
                desc: "L'innovazione lascerà indietro il 90% delle aziende che non sono in grado di adattare i propri processi."
              },
              {
                icon: <Users className="text-drive-accent" size={32} />,
                title: "Mancanza di Processi",
                desc: "Solo il 20% dei dirigenti PMI si dice pronto a gestire l'AI. Manca un metodo chiaro di adozione."
              },
              {
                icon: <Award className="text-drive-accent" size={32} />,
                title: "Skill Gap: I Talenti scelgono l'AI",
                desc: "Le skill AI sono richieste il 30% in più delle altre competenze. Formare il tuo team o te stesso non è solo utile, è l'unico modo per rimanere rilevanti nel mercato del lavoro dei prossimi 5 anni."
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
             <span className="text-drive-accent text-xs font-bold tracking-widest uppercase mb-2 block">IL NOSTRO APPROCCIO</span>
             <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Formazione Completa & Pratica</h2>
             <p className="text-gray-400 text-lg max-w-2xl">Non ci limitiamo alla teoria. Il nostro obiettivo è farti applicare l'AI dal giorno 1.</p>
           </div>

           <div className="grid lg:grid-cols-2 gap-8 lg:gap-12">
             
             {/* Path 1: Individual Learning */}
             <div className="group relative rounded-2xl overflow-hidden min-h-[550px] border border-gray-800 hover:border-blue-500/50 transition-all duration-500">
                {/* Background Image */}
                <div className="absolute inset-0">
                  <img 
                    src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=1000&q=80" 
                    alt="Team Learning" 
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
                   
                   <h3 className="text-3xl font-bold text-white mb-4">Affiancamento in Presenza</h3>
                   <p className="text-gray-300 mb-8 text-lg leading-relaxed">
                      La formazione non finisce con un quiz online. Ci assicuriamo che ogni studente abbia acquisito competenze concrete.
                   </p>
                   
                   <ul className="space-y-4">
                     {[
                       "Workshop pratici in azienda.",
                       "Q&A session dirette con i docenti.",
                       "Applicazione su casi reali del tuo business."
                     ].map((step, i) => (
                       <li key={i} className="flex items-center text-sm text-gray-200 bg-white/5 backdrop-blur-md p-4 rounded-lg border border-white/10 hover:bg-white/10 transition-colors">
                         <span className="bg-blue-600 text-white w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold mr-4 flex-shrink-0">{i+1}</span>
                         {step}
                       </li>
                     ))}
                   </ul>
                </div>
             </div>

             {/* Path 2: Performance Tracking */}
             <div className="group relative rounded-2xl overflow-hidden min-h-[550px] border border-gray-800 hover:border-drive-accent/50 transition-all duration-500">
                {/* Background Image */}
                <div className="absolute inset-0">
                  <img 
                    src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1000&q=80" 
                    alt="Performance Dashboard" 
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/80 to-black/30"></div>
                  <div className="absolute inset-0 bg-drive-accent/20 mix-blend-overlay"></div>
                </div>

                {/* Content */}
                <div className="relative z-10 p-8 md:p-12 h-full flex flex-col justify-end">
                   <div className="mb-auto">
                      <div className="bg-drive-accent/90 w-fit p-3 rounded-xl mb-6 shadow-lg shadow-drive-accent/30 backdrop-blur-sm">
                        <BarChart className="text-white" size={32} />
                      </div>
                   </div>
                   
                   <h3 className="text-3xl font-bold text-white mb-4">Monitoraggio Progressi</h3>
                   <p className="text-gray-300 mb-8 text-lg leading-relaxed">
                      Offriamo una piattaforma per seguire i passi avanti fatti dagli studenti, garantendo ROI sulla formazione.
                   </p>
                   
                   <ul className="space-y-4">
                     {[
                       "Dashboard avanzamento corsi.",
                       "Certificazione competenze acquisite.",
                       "Reportistica per HR e Management."
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
             <h2 className="text-3xl font-bold text-white">Cosa Imparerai & Automatizzerai</h2>
             <p className="text-gray-400 mt-2 text-lg">Strumenti concreti per rivoluzionare la tua produttività.</p>
           </div>
           
           <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                { title: "ChatGPT & Prompting", desc: "Impara a scrivere prompt efficaci per generare testi, strategie e idee in secondi.", icon: <BrainCircuit size={32} className="text-drive-accent" /> },
                { title: "Gestione Email", desc: "Automatizza la lettura, classificazione e risposta alle email clienti ricorrenti.", icon: <Mail size={32} className="text-drive-accent" /> },
                { title: "Pipeline Commerciale", desc: "Qualifica i lead automaticamente e arricchisci i dati CRM senza data entry.", icon: <Target size={32} className="text-drive-accent" /> },
                { title: "Sollecito Pagamenti", desc: "Crea agenti che monitorano scadenze e inviano reminder personalizzati.", icon: <CreditCard size={32} className="text-drive-accent" /> },
                { title: "Analisi Dati", desc: "Usa l'AI per analizzare fogli Excel complessi e trovare trend nascosti.", icon: <BarChart size={32} className="text-drive-accent" /> },
                { title: "Tool Multimodali", desc: "Padroneggia Midjourney e DALL-E per creare asset grafici per il marketing.", icon: <Monitor size={32} className="text-drive-accent" /> }
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
            alt="Futuristic Robot Human Interaction"
            className="w-full h-full object-cover object-center"
         />
         <div className="absolute inset-0 bg-blue-900/20 mix-blend-multiply"></div>
      </section>

      {/* Architecture Pillars (Course Details) */}
      <section className="py-24 bg-[#050608] border-t border-gray-900">
         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="mb-16">
              <h2 className="text-3xl font-bold text-white mb-4">Offerta Formativa</h2>
              <p className="text-gray-400">La nostra proposta copre ogni aspetto dell'apprendimento, dalla teoria alla pratica.</p>
            </div>

            <div className="space-y-8">
               {[
                 { icon: <Monitor className="text-drive-accent" />, title: "Formazione a distanza asincrona", desc: "Acquisisci competenze sui principali modelli di IA attraverso lezioni flessibili, complete di test di verifica. La piattaforma didattica ti permette di monitorare in dettaglio i tuoi progressi formativi quando e dove vuoi." },
                 { icon: <BrainCircuit className="text-drive-accent" />, title: "Aggiornamenti costanti tool AI", desc: "Assicuriamo materiali formativi costantemente allineati alle evoluzioni del settore. La nostra piattaforma integra regolarmente le ultime novità, i nuovi tool di AI e gli aggiornamenti più significativi." },
                 { icon: <Users className="text-drive-accent" />, title: "Formazione diretta in presenza", desc: "Offriamo percorsi di affiancamento individuale in presenza, dove i nostri docenti esperti ti supportano da vicino. Questo garantisce una formazione a 360 gradi, profondamente personalizzata sulle tue esigenze." }
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
            src="https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&w=2000&q=80"
            alt="AI Digital Future"
            className="w-full h-full object-cover"
          />
          {/* Dark Overlay */}
          <div className="absolute inset-0 bg-[#080a10]/90"></div>
        </div>

        <div className="max-w-4xl mx-auto px-4 relative z-10">
          <h2 className="text-3xl font-bold text-white mb-6">Scegli il piano più adatto alla tua azienda</h2>
          <p className="text-gray-400 mb-10 text-lg">
             Tutti i piani includono formazione aggiornata, accesso alla piattaforma e supporto.
          </p>
          <a href="https://aiamica.it/carrello" target="_blank" rel="noopener noreferrer">
            <Button variant="primary" className="px-10 py-4 text-base shadow-xl shadow-black/50">Vai allo Store e Inizia Ora</Button>
          </a>
        </div>
      </section>
    </div>
  );
};

export default Aiamica;
