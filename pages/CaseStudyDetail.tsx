import React from 'react';
import { useParams, NavLink, Navigate } from 'react-router-dom';
import { caseStudiesData } from './CaseStudies';
import Button from '../components/Button';
import { ArrowLeft, CheckCircle2, Target, Zap, Quote, Building2, TrendingUp } from 'lucide-react';

const CaseStudyDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const study = caseStudiesData.find(s => s.id === id);

  if (!study) {
    return <Navigate to="/case-study" replace />;
  }

  return (
    <div className="pt-20">
      {/* Hero */}
      <section className="relative py-24 bg-[#080a10] overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src={study.image} 
            alt={study.title} 
            className="w-full h-full object-cover opacity-70" 
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#080a10] via-[#080a10]/70 to-transparent"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
          <NavLink to="/case-study" className="inline-flex items-center text-gray-400 hover:text-white mb-8 transition-colors">
             <ArrowLeft size={16} className="mr-2" /> Torna ai Case Studies
          </NavLink>
          <span className="text-drive-accent font-bold tracking-widest uppercase mb-4 block">{study.category}</span>
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight max-w-4xl">
            {study.title}
          </h1>
          <div className="flex items-center text-gray-300 gap-2">
            <Building2 size={18} className="text-drive-accent" />
            <span className="font-medium">{study.client}</span>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-20 bg-[#080a10]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-12 gap-16">
            
            {/* Left Column (Content) */}
            <div className="lg:col-span-8 space-y-16">
              
              {/* Challenge */}
              <div className="bg-[#0f1219] p-8 rounded-xl border border-gray-800 border-l-4 border-l-red-500/50">
                <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
                  <Target className="text-red-500" /> Challenge
                </h2>
                <ul className="space-y-4">
                  {study.challenges.map((challenge, i) => (
                    <li key={i} className="flex items-start text-gray-300">
                      <span className="mr-3 mt-1.5 w-1.5 h-1.5 bg-red-500 rounded-full flex-shrink-0"></span>
                      {challenge}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Solution */}
              <div className="bg-[#0f1219] p-8 rounded-xl border border-gray-800 border-l-4 border-l-drive-accent">
                <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
                  <Zap className="text-drive-accent" /> Soluzione DRIVE
                </h2>
                <ul className="space-y-4">
                  {study.solution.map((sol, i) => (
                    <li key={i} className="flex items-start text-gray-300">
                      <CheckCircle2 className="mr-3 mt-1 text-drive-accent flex-shrink-0" size={18} />
                      {sol}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Results */}
              <div>
                <h2 className="text-3xl font-bold text-white mb-8">Risultati Ottenuti</h2>
                <div className="grid md:grid-cols-2 gap-6">
                  {study.results.map((res, i) => (
                    <div key={i} className="bg-[#0a0c12] p-6 rounded-lg border border-gray-800 hover:border-green-500/30 transition-colors">
                      <div className="flex items-start">
                         <div className="mt-1 mr-4 bg-green-500/10 p-2 rounded text-green-500">
                           <TrendingUp size={20} />
                         </div>
                         <p className="text-white font-medium leading-relaxed">{res}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

            </div>

            {/* Right Column (Sidebar) */}
            <div className="lg:col-span-4 space-y-8">
               {/* Key Stats Card */}
               <div className="bg-gradient-to-br from-drive-accent/20 to-[#0a0c12] p-8 rounded-xl border border-drive-accent/30">
                  <h3 className="text-white font-bold mb-6 text-lg">Impatto Chiave</h3>
                  <div className="space-y-6">
                    {study.stats.map((stat, i) => (
                      <div key={i} className="border-b border-white/10 pb-4 last:border-0 last:pb-0">
                        <div className="text-4xl font-bold text-white mb-1">{stat.value}</div>
                        <div className="text-xs text-gray-400 uppercase tracking-widest">{stat.label}</div>
                      </div>
                    ))}
                  </div>
               </div>

               {/* Testimonial */}
               <div className="bg-[#0f1219] p-8 rounded-xl border border-gray-800 relative">
                  <Quote size={48} className="text-gray-700 absolute top-4 right-4 opacity-20" />
                  <p className="text-gray-300 italic mb-6 relative z-10 leading-relaxed">
                    "{study.quote}"
                  </p>
                  <div className="flex items-center gap-3">
                     <div className="w-10 h-10 bg-gray-700 rounded-full flex items-center justify-center text-white font-bold">
                        {study.author.charAt(0)}
                     </div>
                     <div>
                        <div className="text-white font-bold text-sm">{study.author}</div>
                        <div className="text-gray-500 text-xs">Cliente Soddisfatto</div>
                     </div>
                  </div>
               </div>

               {/* CTA */}
               <div className="bg-[#0a0c12] p-8 rounded-xl border border-gray-800 text-center">
                  <h3 className="text-white font-bold mb-4">Vuoi risultati simili?</h3>
                  <p className="text-gray-400 text-sm mb-6">Analizziamo la tua situazione e costruiamo il tuo caso di successo.</p>
                  <NavLink to="/contatti">
                    <Button variant="primary" className="w-full">Parla con noi</Button>
                  </NavLink>
               </div>
            </div>

          </div>
        </div>
      </section>
    </div>
  );
};

export default CaseStudyDetail;