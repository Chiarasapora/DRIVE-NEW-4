
import React from 'react';
import Button from '../components/Button';
import { Mail, Phone, MapPin, ExternalLink, ArrowRight } from 'lucide-react';

const Contact: React.FC = () => {
  return (
    <div className="pt-20 flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="py-24 bg-[#080a10] relative overflow-hidden">
        <div className="absolute inset-0 z-0">
           <img 
             src="/CONTATTI/Hero_Section_Contatti.webp" 
             alt="Communication" 
             className="w-full h-full object-cover opacity-40" 
           />
           <div className="absolute inset-0 bg-gradient-to-r from-[#080a10] via-[#080a10]/80 to-transparent"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <span className="text-drive-accent text-xs font-bold tracking-widest uppercase mb-4 block">CONTATTI</span>
          <h1 className="text-5xl font-bold text-white mb-6 leading-tight">
            Parliamo del tuo <span className="text-drive-accent">Progetto</span>.
          </h1>
          <p className="text-gray-300 text-lg md:text-xl max-w-2xl leading-relaxed">
            Siamo pronti ad ascoltare le tue sfide e trasformarle in opportunità digitali.
          </p>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-b from-[#080a10] to-[#0c0f16] flex-grow relative overflow-hidden">
        {/* Abstract Map Background Pattern */}
        <div className="absolute inset-0 opacity-10" style={{ backgroundImage: "url(\"data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E\")" }}></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid lg:grid-cols-2 gap-16">
            {/* Left Info - Actionable Links */}
            <div className="space-y-12">
              <a href="mailto:info@driveagency.it" className="group block p-6 rounded-xl hover:bg-white/5 transition-all border border-transparent hover:border-gray-800">
                <div className="flex items-center gap-3 mb-2">
                   <Mail className="text-drive-accent" size={20} />
                   <h3 className="text-xs font-bold text-drive-accent uppercase tracking-widest">EMAIL</h3>
                </div>
                <div className="flex items-center justify-between">
                    <p className="text-2xl text-white font-bold group-hover:text-gray-300 transition-colors">info@driveagency.it</p>
                    <ArrowRight className="text-gray-600 group-hover:text-white opacity-0 group-hover:opacity-100 transition-all transform -translate-x-2 group-hover:translate-x-0" />
                </div>
              </a>

              <a href="tel:+390751234567" className="group block p-6 rounded-xl hover:bg-white/5 transition-all border border-transparent hover:border-gray-800">
                <div className="flex items-center gap-3 mb-2">
                   <Phone className="text-drive-accent" size={20} />
                   <h3 className="text-xs font-bold text-drive-accent uppercase tracking-widest">TELEFONO</h3>
                </div>
                <div className="flex items-center justify-between">
                    <p className="text-2xl text-white font-bold group-hover:text-gray-300 transition-colors">+39 075 123 4567</p>
                    <ArrowRight className="text-gray-600 group-hover:text-white opacity-0 group-hover:opacity-100 transition-all transform -translate-x-2 group-hover:translate-x-0" />
                </div>
              </a>

              <a href="https://maps.app.goo.gl/eSi1a4tGLUF3zQ6YA" target="_blank" rel="noopener noreferrer" className="group block p-6 rounded-xl hover:bg-white/5 transition-all border border-transparent hover:border-gray-800">
                <div className="flex items-center gap-3 mb-2">
                   <MapPin className="text-drive-accent" size={20} />
                   <h3 className="text-xs font-bold text-drive-accent uppercase tracking-widest">HEADQUARTERS</h3>
                </div>
                <div className="flex items-center justify-between">
                    <p className="text-lg text-white font-medium group-hover:text-gray-300 transition-colors leading-relaxed">
                        Via del Conservificio, 28b<br/>06134 Perugia (PG), Italia
                    </p>
                    <ExternalLink className="text-gray-600 group-hover:text-white opacity-0 group-hover:opacity-100 transition-all transform -translate-x-2 group-hover:translate-x-0" />
                </div>
              </a>

              <div className="border-t border-gray-800 pt-8 pl-6">
                <h4 className="text-white font-bold mb-4 text-sm">Domande Frequenti</h4>
                <div className="space-y-6">
                   <div>
                     <p className="text-white font-bold text-sm mb-1">Offrite demo gratuite?</p>
                     <p className="text-gray-400 text-xs">Sì, per Sostrato Web offriamo 14 giorni di trial gratuito.</p>
                   </div>
                   <div>
                     <p className="text-white font-bold text-sm mb-1">Lavorate con piccole aziende?</p>
                     <p className="text-gray-400 text-xs">Assolutamente. Abbiamo piani scalabili pensati proprio per le PMI.</p>
                   </div>
                </div>
              </div>
            </div>

            {/* Right Form - Enhanced Visibility (Light Theme) */}
            <div className="bg-gradient-to-br from-white to-gray-200 p-8 md:p-10 rounded-2xl border border-gray-300 shadow-2xl relative z-20 transform md:scale-105">
               
               {/* Dark Title for contrast against light bg */}
               <h3 className="text-4xl font-bold mb-8 text-gray-900">
                 Invia un messaggio
               </h3>

               <form className="space-y-6 relative z-10">
                 <div>
                   <label className="block text-xs font-bold text-drive-accent uppercase tracking-widest mb-2">Nome e Cognome</label>
                   <input 
                     type="text" 
                     placeholder="Es. Mario Rossi" 
                     className="w-full bg-white border border-gray-300 rounded p-4 text-gray-900 text-base focus:border-drive-accent focus:outline-none transition-all placeholder-gray-500 shadow-sm" 
                   />
                 </div>
                 
                 <div>
                   <label className="block text-xs font-bold text-drive-accent uppercase tracking-widest mb-2">Email Aziendale</label>
                   <input 
                     type="email" 
                     placeholder="Es. nome@azienda.it" 
                     className="w-full bg-white border border-gray-300 rounded p-4 text-gray-900 text-base focus:border-drive-accent focus:outline-none transition-all placeholder-gray-500 shadow-sm" 
                   />
                 </div>
                 
                 <div>
                   <label className="block text-xs font-bold text-drive-accent uppercase tracking-widest mb-2">A cosa sei interessato?</label>
                   <div className="relative">
                     <select className="w-full bg-white border border-gray-300 rounded p-4 text-gray-900 text-base focus:border-drive-accent focus:outline-none appearance-none shadow-sm cursor-pointer">
                       <option>Sostrato Web</option>
                       <option>Shipyo</option>
                       <option>Aiamica</option>
                       <option>E-Commerce & Marketplace Amazon</option>
                       <option>Realizzazione flussi Ai</option>
                       <option>Consulenza innovazione & Strategia</option>
                       <option>Trasformzione digitale</option>
                       <option>Funding & finanza Agevolata</option>
                     </select>
                     <div className="absolute inset-y-0 right-0 flex items-center px-4 pointer-events-none text-gray-500">
                        <ArrowRight size={16} className="rotate-90" />
                     </div>
                   </div>
                 </div>
                 
                 <div>
                   <label className="block text-xs font-bold text-drive-accent uppercase tracking-widest mb-2">Messaggio</label>
                   <textarea 
                     rows={4} 
                     placeholder="Raccontaci brevemente le tue esigenze..." 
                     className="w-full bg-white border border-gray-300 rounded p-4 text-gray-900 text-base focus:border-drive-accent focus:outline-none transition-all placeholder-gray-500 shadow-sm resize-none"
                   ></textarea>
                 </div>

                 <Button type="submit" variant="primary" className="w-full py-4 text-lg font-bold shadow-xl shadow-black/20 hover:scale-[1.02] transition-transform">Invia Richiesta</Button>
                 
                 <p className="text-[10px] text-center text-gray-500 mt-4">
                   I tuoi dati sono al sicuro. Inviando accetti la nostra <span className="underline cursor-pointer hover:text-gray-800">Privacy Policy</span>.
                 </p>
               </form>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="h-[450px] w-full relative bg-gray-900 border-t border-gray-800">
         <iframe 
           src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2916.56031371743!2d12.410393976505189!3d43.02964109253661!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x132ea1716110e9e1%3A0x2a8f1e3270367b65!2sDrive%20Agency!5e0!3m2!1sit!2sit!4v1764318393435!5m2!1sit!2sit" 
           width="100%" 
           height="100%" 
           style={{ border: 0 }} 
           allowFullScreen 
           loading="lazy" 
           referrerPolicy="no-referrer-when-downgrade"
           className="w-full h-full grayscale hover:grayscale-0 transition-all duration-500"
         ></iframe>
      </section>
    </div>
  );
};

export default Contact;
