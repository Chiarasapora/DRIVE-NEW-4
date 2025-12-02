
import React from 'react';
import Button from '../components/Button';
import { NavLink } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

const Solutions: React.FC = () => {
  const services = [
    {
      cat: 'BUSINESS EVOLUTION',
      title: 'Digitalizzazione & Trasformazione',
      desc: 'Non si tratta solo di eliminare la carta, ma di connettere persone, dati e macchine. Aiutiamo le aziende a diventare "Data Driven" e molto più efficienti.',
      points: ['Assessment Maturità Digitale', 'Ottimizzazione Flussi ERP', 'CRM e Performance Marketing'],
      img: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=600&q=80',
      action: 'Vai a Trasformazione Digitale',
      link: '/servizi/digital-transformation'
    },
    {
      cat: 'ARTIFICIAL INTELLIGENCE',
      title: 'AI & Automazione Intelligente',
      desc: 'Sfruttiamo il Machine Learning e i Large Language Models (LLM) per automatizzare i compiti ripetitivi e generare insight predittivi.',
      points: ['Agenti AI Personalizzati', 'Analisi Predittiva Vendite', 'Automazione Documentale'],
      img: 'https://images.unsplash.com/photo-1620712943543-bcc4688e7485?auto=format&fit=crop&w=600&q=80',
      action: 'Vai a AI & Automazione',
      reversed: true,
      link: '/servizi/ai-flows'
    },
    {
      cat: 'DIGITAL SALES',
      title: 'Sviluppo E-commerce & Customer Experience',
      desc: 'Creiamo strumenti di vendita performanti. Dal design alla messa online, fino all\'assistenza post-lancio per trasformare i visitatori in clienti.',
      points: ['Sviluppo Piattaforme Custom', 'UX/UI Design', 'Assistenza tecnica continua'],
      img: 'https://images.unsplash.com/photo-1556740758-90de374c12ad?auto=format&fit=crop&w=600&q=80',
      action: 'Vai a Sviluppo E-commerce',
      link: '/servizi/ecommerce-amazon'
    },
    {
      cat: 'MARKETPLACE STRATEGY',
      title: 'Amazon Management',
      desc: 'Gestiamo il tuo account Amazon a 360°: dalla logistica FBA all\'advertising PPC, proteggendo il tuo brand.',
      points: ['Setup Account & Brand Protection', 'Gestione Campagne Advertising', 'Espansione Pan-Europea'],
      img: 'https://images.unsplash.com/photo-1523474253046-8cd2748b5fd2?auto=format&fit=crop&w=600&q=80',
      action: 'Vai a Amazon Management',
      reversed: true,
      link: '/servizi/ecommerce-amazon'
    },
    {
      cat: 'SOSTENIBILITÀ ECONOMICA',
      title: 'Finanza Agevolata & Incentivi 5.0',
      desc: 'Il nostro team gestisce le pratiche per ottenere Bandi e Crediti d\'Imposta, riducendo drasticamente l\'impatto economico del tuo investimento.',
      points: ['Recupero fino al 50% dei costi', 'Gestione Burocrazia 100%', 'Consulenza Credito d\'Imposta 5.0'],
      img: 'https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?auto=format&fit=crop&w=600&q=80',
      action: 'Vai a Finanza Agevolata',
      link: '/servizi/funding'
    }
  ];

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="py-24 bg-[#080a10] relative overflow-hidden">
        <div className="absolute inset-0 z-0">
           <img 
             src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=2000&q=80" 
             alt="Ecosistema Digitale" 
             className="w-full h-full object-cover opacity-40" 
           />
           <div className="absolute inset-0 bg-gradient-to-r from-[#080a10] via-[#080a10]/80 to-transparent"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <span className="text-drive-accent text-xs font-bold tracking-widest uppercase mb-4 block">COSA FACCIAMO</span>
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-8 leading-tight">
            Un ecosistema di <br/>
            competenze per la <span className="text-drive-accent">crescita</span>.
          </h1>
          <p className="text-gray-300 text-lg md:text-xl mb-10 max-w-3xl leading-relaxed">
            Dalla strategia alla tecnologia: integriamo AI, E-commerce e Processi per scalare il tuo business.
          </p>
        </div>
      </section>

      {/* Services List */}
      <div className="space-y-0">
        {services.map((service, idx) => (
          <section key={idx} className={`py-20 border-t border-gray-900 ${idx % 2 !== 0 ? 'bg-gradient-to-b from-[#0e1118] to-[#080a10]' : 'bg-[#080a10]'}`}>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className={`flex flex-col lg:flex-row gap-16 items-center ${service.reversed ? 'lg:flex-row-reverse' : ''}`}>
                
                <div className="flex-1">
                  <span className="text-drive-accent text-xs font-bold tracking-widest uppercase mb-3 block">{service.cat}</span>
                  <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">{service.title}</h2>
                  <p className="text-gray-400 mb-8 leading-relaxed text-lg">
                    {service.desc}
                  </p>
                  <ul className="space-y-3 mb-10">
                    {service.points.map((p, i) => (
                      <li key={i} className="text-gray-300 text-sm flex items-center">
                        <span className="text-drive-accent mr-3">+</span> {p}
                      </li>
                    ))}
                  </ul>
                  {service.link ? (
                    <NavLink to={service.link}>
                        <Button variant="outline" className="text-sm">{service.action}</Button>
                    </NavLink>
                  ) : (
                    <Button variant="outline" className="text-sm">{service.action}</Button>
                  )}
                </div>

                <div className="flex-1 w-full">
                  <div className="relative aspect-video rounded-lg overflow-hidden border border-gray-800 shadow-2xl">
                    <img src={service.img} alt={service.title} className="w-full h-full object-cover" />
                    <div className="absolute inset-0 bg-[#9c2948]/10 mix-blend-multiply"></div>
                  </div>
                </div>

              </div>
            </div>
          </section>
        ))}
      </div>

      {/* Method Section - Redesigned with Images */}
      <section className="py-32 bg-[#080a10] border-t border-gray-900">
         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="mb-16 text-center">
              <h2 className="text-3xl font-bold text-white mb-4">Il Metodo DRIVE</h2>
              <p className="text-gray-400">Come trasformiamo la tua azienda in 3 step.</p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
               {[
                 { 
                   step: '01', 
                   title: 'Assessment', 
                   desc: 'Analizziamo i processi attuali e identifichiamo le opportunità di miglioramento.',
                   img: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=800&q=80',
                   color: 'blue'
                 },
                 { 
                   step: '02', 
                   title: 'Strategy & Funding', 
                   desc: 'Roadmap tecnologica e ricerca fondi per finanziare il progetto.',
                   img: 'https://images.unsplash.com/photo-1553877615-30c73e656bb3?auto=format&fit=crop&w=800&q=80',
                   color: 'purple'
                 },
                 { 
                   step: '03', 
                   title: 'Execution', 
                   desc: 'Sviluppo Agile, formazione del team e monitoraggio costante.',
                   img: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=800&q=80',
                   color: 'green'
                 }
               ].map((item, i) => (
                 <div key={i} className="group relative rounded-2xl overflow-hidden min-h-[400px] border border-gray-800 hover:border-drive-accent/50 transition-all duration-500 shadow-lg">
                    {/* Background Image */}
                    <div className="absolute inset-0">
                      <img 
                        src={item.img} 
                        alt={item.title} 
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black via-black/80 to-black/30"></div>
                      {/* Tint Overlay */}
                      <div className={`absolute inset-0 opacity-20 mix-blend-overlay ${
                        item.color === 'blue' ? 'bg-blue-900' : 
                        item.color === 'purple' ? 'bg-purple-900' : 'bg-green-900'
                      }`}></div>
                    </div>

                    {/* Content */}
                    <div className="relative z-10 p-8 h-full flex flex-col justify-end">
                       <div className="mb-auto">
                          <div className="text-6xl font-bold text-white/10 select-none">{item.step}</div>
                       </div>
                       
                       <h3 className="text-2xl font-bold text-white mb-4">{item.title}</h3>
                       <p className="text-gray-300 leading-relaxed text-sm">
                          {item.desc}
                       </p>
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
            src="https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=2000&q=80"
            alt="Team working on tech"
            className="w-full h-full object-cover"
          />
          {/* Dark Overlay */}
          <div className="absolute inset-0 bg-[#080a10]/90"></div>
        </div>

        <div className="max-w-4xl mx-auto px-4 relative z-10">
          <h3 className="text-3xl font-bold text-white mb-4">Pronto a partire?</h3>
          <p className="text-gray-200 mb-8 text-lg font-medium">Verifica subito se il tuo progetto è idoneo per gli incentivi.</p>
          <NavLink to="/contatti">
            <Button variant="primary" className="px-10 py-4 shadow-xl shadow-black/50">Richiedi Check Gratuito</Button>
          </NavLink>
        </div>
      </section>
    </div>
  );
};

export default Solutions;
