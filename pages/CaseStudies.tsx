
import React from 'react';
import { NavLink } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import Button from '../components/Button';

export const caseStudiesData = [
  {
    id: 'moolecola-beauty-brand',
    title: 'Moolecola: Brand Creation & Omnichannel',
    category: 'BRAND IDENTITY & E-COMMERCE',
    client: 'Moolecola Beauty & Cosmetics',
    // Cosmetic/Beauty/Natural aesthetic
    image: '/E-COMMERCE & MARKETPLACE AMAZON/Hero_Section_Marketplace_Ecommerce.webp',
    stats: [
      { value: '100%', label: 'Ingredienti Naturali' },
      { value: 'Best Seller', label: 'I-Collagen' },
    ],
    challenges: [
      'Creare un brand rivoluzionario nel settore beauty partendo da zero',
      'Sviluppare formulazioni innovative vegane (I-COLLAGEN)',
      'Lanciare contemporaneamente e-commerce proprietario e canale Amazon',
      'Comunicare l\'importanza del nutrimento "dall\'interno"'
    ],
    solution: [
      'Sviluppo Brand Identity completa: logo, packaging e tone of voice',
      'Design di prodotto per la linea I-COLLAGEN con formula ABC COMPLEX',
      'Sviluppo E-commerce proprietario ad alta conversione',
      'Strategia di lancio Amazon Full-Funnel'
    ],
    results: [
      'Lancio di successo di I-COLLAGEN, integratore vegano innovativo',
      'Posizionamento del brand come riferimento per il benessere olistico',
      'Community fidelizzata grazie alla qualità delle materie prime (Bamboo, Vitamina E, Acido Ialuronico)',
      'Espansione omnichannel riuscita nei primi 12 mesi'
    ],
    quote: "Moolecola non è solo cosmetica, è innovazione. Abbiamo creato prodotti che offrono gli elementi essenziali di cui il corpo ha bisogno, indipendentemente dall'età.",
    author: "Team R&D, Moolecola"
  },
  {
    id: 'confagricoltura-digitalizzazione',
    title: 'Digitalizzazione Agro-Industriale',
    category: 'DIGITAL TRANSFORMATION & TRAINING',
    client: 'Confagricoltura Umbria',
    // Agriculture/Tech/Drone
    image: '/TRAFORMAZIONE DIGITALE/Hero_Section_Traformazione.webp',
    stats: [
      { value: '40 Anni', label: 'Di Esperienza' },
      { value: 'ISO 9001', label: 'Certificata' },
    ],
    challenges: [
      'Modernizzare un ente storico con 40 anni di attività',
      'Supportare le filiere agroindustriali in un mercato in evoluzione',
      'Implementare processi tecnologici innovativi in ambito agro-zootecnico',
      'Mantenere standard qualitativi certificati'
    ],
    solution: [
      'Digitalizzazione dei processi formativi e consulenziali',
      'Implementazione di sistemi per l\'assistenza tecnica avanzata',
      'Coordinamento progetti di innovazione per produzione e trasformazione',
      'Sviluppo percorsi per la competitività sostenibile'
    ],
    results: [
      'Accreditamento come ente formativo regionale confermato ed esteso',
      'Miglioramento delle tecniche di commercializzazione per i soci',
      'Incremento del valore commerciale delle imprese clienti',
      'Sistema di Gestione della Qualità ISO 9001 pienamente operativo e digitalizzato'
    ],
    quote: "Il nostro obiettivo è accrescere il valore commerciale dei clienti, sostenendoli nella ricerca di una competitività sostenibile necessaria a fronteggiare il mercato.",
    author: "Direzione, Confagricoltura Umbria"
  },
  {
    id: 'startup-amazon-beauty',
    title: 'Startup Amazon Beauty',
    category: 'MARKETPLACE GROWTH',
    client: 'Produttore settore Beauty (Partner Marketplace Arena)',
    // Amazon packages/Growth
    image: '/E-COMMERCE & MARKETPLACE AMAZON/Card_1_Marketplace.webp',
    stats: [
      { value: '€450k', label: 'Fatturato 7 Mesi' },
      { value: '22.000', label: 'Unità Vendute' },
    ],
    challenges: [
      'Settore Beauty/Cura della Persona altamente saturo e competitivo',
      'Competitor storici disposti a budget elevati',
      'Necessità di lanciare un nuovo marchio da zero su Amazon.it',
      'Obiettivo di posizionamento organico rapido'
    ],
    solution: [
      'Gestione completa Account tramite Marketplace Arena',
      'Analisi preliminare nicchie e pricing ad alta redditività',
      'Ottimizzazione costante contenuti grafici e SEO',
      'Strategia Multichannel e monitoraggio ranking quotidiano'
    ],
    results: [
      '€450.000 di fatturato in soli 7 mesi (da zero)',
      'Oltre 22.000 unità vendute e 30 nuove offerte pubblicate',
      '10 referenze in Top 10 di categoria (3 in Top 3)',
      'Invito ufficiale a diventare Amazon Vendor (Nov 2022)',
      'Oltre €110.000 di vendite da Advertising con ROAS ≥ 3'
    ],
    quote: "Raggiungere una quota di mercato in questi settori rappresenta una sfida estrema. I risultati hanno compensato gli investimenti e aperto la strada all'espansione europea.",
    author: "Marketplace Manager"
  },
  {
    id: 'areapharm-performance',
    title: 'Areapharm: Ecosistema Benessere',
    category: 'PERFORMANCE MARKETING',
    client: 'Areapharm',
    // Health/Wellness/Lab
    image: '/SERVIZI/Hero_Section_Servizi.webp',
    stats: [
      { value: '360°', label: 'Salute Integrata' },
      { value: '100%', label: 'Trasparenza' },
    ],
    challenges: [
      'Costruire autorevolezza in un mercato diffidente',
      'Unire vendita di prodotto ed educazione del consumatore',
      'Promuovere un concetto di salute olistica (corpo, mente, stile di vita)',
      'Garantire trasparenza assoluta sulle formulazioni'
    ],
    solution: [
      'Creazione di una piattaforma di contenuti educativi autorevoli',
      'Strategia di Performance Marketing basata sull\'informazione',
      'Sviluppo customer journey "prima, durante e dopo l\'acquisto"',
      'Focus su Qualità, Sicurezza e Innovazione continua'
    ],
    results: [
      'Creazione di una community consapevole e fidelizzata',
      'Posizionamento come punto di riferimento per la salute integrata',
      'Alto tasso di ritorno dei clienti grazie al supporto consulenziale',
      'Percezione del brand legata a "Trasparenza" e "Scienza"'
    ],
    quote: "Vogliamo contribuire alla costruzione di una cultura del benessere diffuso, dove ogni persona possa prendersi cura del proprio equilibrio attraverso scelte informate.",
    author: "Vision, Areapharm"
  },
  {
    id: 'flusso-ai-automazione',
    title: 'Automazione Flussi AI',
    category: 'ARTIFICIAL INTELLIGENCE',
    client: 'Azienda di Servizi B2B',
    // Abstract AI/Tech
    image: '/FLUSSI AI/Hero_Section_Flussi_Ai.webp',
    stats: [
      { value: '-60%', label: 'Tempo Operativo' },
      { value: '24/7', label: 'Disponibilità' },
    ],
    challenges: [
      'Gestione manuale di enormi moli di dati non strutturati',
      'Lentezza nelle risposte al cliente finale',
      'Errori umani frequenti nel data entry e nella classificazione',
      'Necessità di scalare le operazioni senza assumere nuovo staff'
    ],
    solution: [
      'Sviluppo di Agenti AI personalizzati per l\'analisi documentale',
      'Implementazione di chatbot NLP per il primo livello di assistenza',
      'Integrazione API tra sistemi legacy e modelli LLM',
      'Automazione del workflow di approvazione e notifica'
    ],
    results: [
      'Riduzione del 60% del tempo dedicato a task ripetitivi',
      'Azzeramento degli errori di trascrizione dati',
      'Operatività garantita 24/7 senza presidio umano',
      'Miglioramento netto della soddisfazione cliente per velocità di risposta'
    ],
    quote: "L'AI non ha sostituito le nostre persone, le ha liberate. Ora il team si concentra su attività a valore aggiunto mentre gli agenti gestiscono la routine.",
    author: "CTO, Cliente B2B"
  },
  {
    id: 'design-nuovi-prodotti',
    title: 'Design di Nuovi Prodotti',
    category: 'PRODUCT DESIGN & R&D',
    client: 'Startup Tech Innovativa',
    // Design/Prototyping/Blueprint
    image: '/PRODOTTI/Hero_Section_Prodotti.webp',
    stats: [
      { value: 'MVP', label: 'In 8 Settimane' },
      { value: 'Award', label: 'UX Design' },
    ],
    challenges: [
      'Trasformare un\'idea complessa in un prodotto digitale usabile',
      'Validare il product-market fit prima di investire nello sviluppo',
      'Creare un\'interfaccia utente (UI) distintiva e intuitiva',
      'Ridurre il time-to-market per battere la concorrenza'
    ],
    solution: [
      'Workshop di Design Thinking e definizione User Personas',
      'Prototipazione rapida e User Testing iterativo',
      'Sviluppo MVP (Minimum Viable Product) focalizzato sulle core features',
      'Design System scalabile per futuri sviluppi'
    ],
    results: [
      'Lancio sul mercato in sole 8 settimane',
      'Feedback utenti estremamente positivo sull\'usabilità',
      'Riduzione dei costi di sviluppo del 40% grazie a specifiche chiare',
      'Adozione immediata da parte dei primi 1000 utenti beta'
    ],
    quote: "Il design non è solo come appare, è come funziona. DRIVE ha tradotto la nostra visione confusa in un prodotto digitale cristallino e performante.",
    author: "Founder, Startup Tech"
  }
];

const CaseStudies: React.FC = () => {
  return (
    <div className="pt-20">
      {/* Hero */}
      <section className="py-24 bg-[#080a10] relative overflow-hidden">
        <div className="absolute inset-0 z-0">
           <img 
             src="/CASE STUDY/Hero_Section_Case_Study.webp" 
             alt="Success Stories and Growth" 
             className="w-full h-full object-cover opacity-50" 
           />
           <div className="absolute inset-0 bg-gradient-to-r from-[#080a10] via-[#080a10]/80 to-transparent"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <span className="text-drive-accent text-xs font-bold tracking-widest uppercase mb-4 block">PORTFOLIO</span>
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-8 leading-tight">
            Case Studies & <br/><span className="text-drive-accent">Success Stories</span>.
          </h1>
          <p className="text-gray-300 text-lg md:text-xl mb-10 max-w-3xl leading-relaxed">
            Non raccontiamo teoria, mostriamo risultati. Ecco come abbiamo aiutato le aziende a trasformare le sfide in crescita misurabile.
          </p>
        </div>
      </section>

      {/* Grid */}
      <section className="py-20 bg-[#050608]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {caseStudiesData.map((study) => (
              <NavLink 
                key={study.id} 
                to={`/case-study/${study.id}`}
                className="group block h-full"
              >
                <div className="bg-[#0a0c12] border border-gray-800 rounded-xl overflow-hidden hover:border-drive-accent/50 transition-all flex flex-col h-full cursor-pointer">
                  {/* Image */}
                  <div className="relative h-64 overflow-hidden">
                     <div className="absolute inset-0 bg-gradient-to-t from-[#0a0c12] to-transparent z-10 opacity-60"></div>
                     <img 
                       src={study.image} 
                       alt={study.title} 
                       className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" 
                     />
                     <div className="absolute bottom-4 left-4 z-20">
                        <span className="bg-drive-accent/90 text-white text-[10px] font-bold px-3 py-1 rounded uppercase tracking-wider">
                          {study.category}
                        </span>
                     </div>
                  </div>

                  {/* Content */}
                  <div className="p-8 flex-1 flex flex-col">
                     <h3 className="text-xl font-bold text-white mb-4 group-hover:text-drive-accent transition-colors">
                       {study.title}
                     </h3>
                     <div className="grid grid-cols-2 gap-4 mb-8 border-y border-gray-800 py-4">
                        {study.stats.map((stat, i) => (
                          <div key={i}>
                            <div className="text-xl font-bold text-white">{stat.value}</div>
                            <div className="text-[10px] text-gray-500 uppercase">{stat.label}</div>
                          </div>
                        ))}
                     </div>
                     <div className="mt-auto">
                        <div className="inline-flex items-center justify-center px-6 py-3 border border-gray-600 text-gray-300 bg-transparent hover:bg-gray-800 hover:text-white text-sm font-medium rounded transition-all duration-200 focus:outline-none w-full group-hover:border-drive-accent/50 group-hover:text-white">
                           Leggi Case Study <ArrowRight size={16} className="ml-2 group-hover:translate-x-1 transition-transform" />
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
            src="/CASE STUDY/CTA_Case_Study.webp"
            alt="Data Driven Growth"
            className="w-full h-full object-cover"
          />
          {/* Dark Overlay */}
          <div className="absolute inset-0 bg-[#080a10]/90"></div>
        </div>

         <div className="max-w-3xl mx-auto px-4 relative z-10">
            <h2 className="text-3xl font-bold text-white mb-6">Vuoi essere il prossimo caso di successo?</h2>
            <p className="text-gray-400 mb-8">
               Parla con i nostri esperti per analizzare le tue sfide e definire una strategia di crescita personalizzata.
            </p>
            <NavLink to="/contatti">
               <Button variant="primary" className="px-10 py-4 text-base shadow-xl shadow-black/50">Inizia la Trasformazione</Button>
            </NavLink>
         </div>
      </section>
    </div>
  );
};

export default CaseStudies;
