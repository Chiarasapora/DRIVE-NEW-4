
import React, { useRef, useState, useEffect } from 'react';
import { ArrowRight, ArrowLeft, ChevronLeft, ChevronRight } from 'lucide-react';
import Button from '../components/Button';
import { NavLink } from 'react-router-dom';
import { caseStudiesData } from './CaseStudies';

const Home: React.FC = () => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  
  // Drag to scroll state
  const [isDown, setIsDown] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeftState, setScrollLeftState] = useState(0);
  const [isDragging, setIsDragging] = useState(false); // To prevent clicks while dragging

  // Triplicate the data to create an infinite loop illusion
  const loopedCaseStudies = [...caseStudiesData, ...caseStudiesData, ...caseStudiesData];

  const clients = [
    "UMBRIA SERVIZI",
    "VIAGGIA PICCOLI",
    "PAC2000",
    "CONFAGRICOLTURA",
    "OLIO VIOLA",
    "FRANKY GARAGE",
    "COMUNE DI VENEZIA",
    "ELES SPA"
  ];

  // Duplicate clients array to ensure seamless loop
  const loopClients = [...clients, ...clients, ...clients];

  // Initialize scroll position to the middle set on mount
  useEffect(() => {
    if (scrollRef.current) {
      const scrollWidth = scrollRef.current.scrollWidth;
      const oneSetWidth = scrollWidth / 3;
      // Scroll to the start of the second set
      scrollRef.current.scrollLeft = oneSetWidth;
    }
  }, []);

  // NEW ANIMATION: Interactive Neural Network (Flashy & Digital)
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let width = canvas.width = window.innerWidth;
    let height = canvas.height = window.innerHeight;
    let animationFrameId: number;

    // Mouse state
    let mouse = { x: -1000, y: -1000 };

    const handleMouseMoveCanvas = (e: MouseEvent) => {
      // Correct for canvas position if needed, though mostly it's full screen 0,0
      const rect = canvas.getBoundingClientRect();
      mouse.x = e.clientX - rect.left;
      mouse.y = e.clientY - rect.top;
    };
    
    window.addEventListener('mousemove', handleMouseMoveCanvas);

    // Particle Configuration
    // Increase/Decrease density
    const PARTICLE_DENSITY = 9000; // Lower is more dense
    const PARTICLE_COUNT = Math.min(Math.floor((width * height) / PARTICLE_DENSITY), 150); 
    const CONNECTION_DIST = 160;
    const MOUSE_DIST = 200;
    
    class Particle {
      x: number;
      y: number;
      vx: number;
      vy: number;
      size: number;
      color: string;

      constructor() {
        this.x = Math.random() * width;
        this.y = Math.random() * height;
        this.vx = (Math.random() - 0.5) * 0.8; // Speed X
        this.vy = (Math.random() - 0.5) * 0.8; // Speed Y
        this.size = Math.random() * 2 + 1.5;
        // Randomly assign Brand Red or White for high contrast
        this.color = Math.random() > 0.5 ? '#9c2948' : '#ffffff'; 
      }

      update() {
        this.x += this.vx;
        this.y += this.vy;

        // Bounce off edges
        if (this.x < 0 || this.x > width) this.vx *= -1;
        if (this.y < 0 || this.y > height) this.vy *= -1;

        // Interactive Repulsion/Attraction
        const dx = mouse.x - this.x;
        const dy = mouse.y - this.y;
        const distance = Math.sqrt(dx * dx + dy * dy);

        if (distance < MOUSE_DIST) {
           const forceDirectionX = dx / distance;
           const forceDirectionY = dy / distance;
           const maxDistance = MOUSE_DIST;
           const force = (maxDistance - distance) / maxDistance;
           
           // Slight repulsion to create movement
           const pushStrength = 2;
           this.x -= forceDirectionX * force * pushStrength;
           this.y -= forceDirectionY * force * pushStrength;
        }
      }

      draw() {
        if(!ctx) return;
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fillStyle = this.color;
        ctx.fill();
      }
    }

    const particlesArray: Particle[] = [];
    for (let i = 0; i < PARTICLE_COUNT; i++) {
        particlesArray.push(new Particle());
    }

    const animate = () => {
      if (!ctx) return;
      ctx.clearRect(0, 0, width, height);
      
      // Update and Draw Particles
      for (let i = 0; i < particlesArray.length; i++) {
        particlesArray[i].update();
        particlesArray[i].draw();

        // Draw Connections
        for (let j = i; j < particlesArray.length; j++) {
            const dx = particlesArray[i].x - particlesArray[j].x;
            const dy = particlesArray[i].y - particlesArray[j].y;
            const distance = Math.sqrt(dx * dx + dy * dy);

            if (distance < CONNECTION_DIST) {
                ctx.beginPath();
                const opacity = 1 - (distance / CONNECTION_DIST);
                
                // Interaction: If close to mouse, make line WHITE and brighter
                const distMouse = Math.sqrt(Math.pow(particlesArray[i].x - mouse.x, 2) + Math.pow(particlesArray[i].y - mouse.y, 2));

                if (distMouse < MOUSE_DIST) {
                    ctx.strokeStyle = `rgba(255, 255, 255, ${opacity})`;
                    ctx.lineWidth = 1;
                } else {
                    ctx.strokeStyle = `rgba(156, 41, 72, ${opacity * 0.4})`; // Brand Red dim
                    ctx.lineWidth = 0.5;
                }
                
                ctx.moveTo(particlesArray[i].x, particlesArray[i].y);
                ctx.lineTo(particlesArray[j].x, particlesArray[j].y);
                ctx.stroke();
            }
        }
      }

      animationFrameId = requestAnimationFrame(animate);
    };

    animate();

    const handleResize = () => {
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
      // Reset particles on resize to avoid stretching issues
      particlesArray.length = 0;
      const newCount = Math.min(Math.floor((width * height) / PARTICLE_DENSITY), 150);
      for (let i = 0; i < newCount; i++) {
         particlesArray.push(new Particle());
      }
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('mousemove', handleMouseMoveCanvas);
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  // Handle Infinite Scroll Logic
  const handleScroll = () => {
    if (!scrollRef.current) return;
    
    const { scrollLeft, scrollWidth } = scrollRef.current;
    const oneSetWidth = scrollWidth / 3;
    
    // If we scroll too close to the start (first set), jump to the middle set
    if (scrollLeft < 50) {
       scrollRef.current.scrollLeft += oneSetWidth;
    } 
    // If we scroll too close to the end (third set), jump back to the middle set
    else if (scrollLeft >= oneSetWidth * 2) {
       scrollRef.current.scrollLeft -= oneSetWidth;
    }
  };

  const scroll = (direction: 'left' | 'right') => {
    if (scrollRef.current) {
      const { current } = scrollRef;
      // Calculate scroll amount based on visible width (approx one slide width)
      const scrollAmount = current.clientWidth / (window.innerWidth >= 768 ? 2 : 1);
      
      current.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth'
      });
    }
  };

  // Mouse Down: Start dragging
  const handleMouseDown = (e: React.MouseEvent) => {
    if (!scrollRef.current) return;
    setIsDown(true);
    setIsDragging(false);
    scrollRef.current.style.scrollBehavior = 'auto'; // Disable smooth scroll for direct 1:1 movement
    setStartX(e.pageX - scrollRef.current.offsetLeft);
    setScrollLeftState(scrollRef.current.scrollLeft);
  };

  // Mouse Leave: Stop dragging
  const handleMouseLeave = () => {
    setIsDown(false);
    if (scrollRef.current) {
       scrollRef.current.style.scrollBehavior = 'smooth';
    }
  };

  // Mouse Up: Stop dragging
  const handleMouseUp = () => {
    setIsDown(false);
    if (scrollRef.current) {
       scrollRef.current.style.scrollBehavior = 'smooth';
    }
    // Small timeout to allow the click event to fire if it wasn't a drag
    setTimeout(() => setIsDragging(false), 50);
  };

  // Mouse Move: Perform scroll
  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDown || !scrollRef.current) return;
    e.preventDefault();
    const x = e.pageX - scrollRef.current.offsetLeft;
    const walk = (x - startX) * 2; // Scroll-fast multiplier
    
    // If moved significantly, mark as dragging to prevent link clicks
    if (Math.abs(walk) > 5) {
      setIsDragging(true);
    }

    scrollRef.current.scrollLeft = scrollLeftState - walk;
  };

  // Intercept Link Clicks
  const handleLinkClick = (e: React.MouseEvent) => {
    if (isDragging) {
      e.preventDefault();
      e.stopPropagation();
    }
  };

  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative h-screen min-h-[600px] flex items-center justify-center overflow-hidden bg-[#080a10]">
        {/* Background Animation Canvas */}
        <canvas 
          ref={canvasRef} 
          className="absolute inset-0 w-full h-full z-0"
        />
        
        {/* Overlay - Lighter gradient to show off the particles more */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#080a10]/60 via-transparent to-[#080a10] z-0 pointer-events-none"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,#080a10_90%)] z-0 pointer-events-none"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center pointer-events-none">
          <div className="pointer-events-auto">
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white leading-tight mb-8 max-w-6xl mx-auto drop-shadow-2xl">
              Trasformiamo la Complessità <br className="hidden lg:block" />
              in <span className="text-drive-accent">Vantaggio</span> Competitivo.
            </h1>
            
            <p className="text-gray-200 text-lg md:text-xl mb-10 max-w-2xl mx-auto leading-relaxed drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)] font-medium">
              Guidiamo la tua azienda verso il futuro con soluzioni Digitali, Intelligenza Artificiale, strategie E-commerce e Marketplace avanzate.
            </p>
            
            <div className="flex flex-wrap justify-center gap-4">
              <NavLink to="/prodotti">
                <Button variant="primary" className="px-8 py-4 text-base shadow-lg shadow-[#9c2948]/20">Scopri le Soluzioni</Button>
              </NavLink>
              <NavLink to="/contatti">
                <Button variant="outline" className="px-8 py-4 text-base bg-black/40 hover:bg-white/10 border-white/20 text-white backdrop-blur-md">Parla con un esperto</Button>
              </NavLink>
            </div>
          </div>
        </div>
      </section>

      {/* Logo Loop Section */}
      <div className="bg-[#050608] border-b border-gray-800 py-10 overflow-hidden relative z-20">
        <div className="flex w-fit animate-marquee hover:pause">
          {loopClients.map((client, i) => (
            <div key={i} className="flex items-center mx-8 md:mx-12">
              <span className="text-lg md:text-xl font-bold text-gray-500 hover:text-white transition-colors whitespace-nowrap uppercase tracking-widest opacity-70 hover:opacity-100">
                {client}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Solutions Grid */}
      <section className="py-20 bg-drive-card/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-16">
            <span className="text-drive-accent text-xs font-bold tracking-widest uppercase">Cosa Facciamo</span>
            <div className="flex justify-between items-end mt-2">
              <h2 className="text-3xl md:text-4xl font-bold text-white max-w-xl">
                Soluzioni Integrate per le Aziende del Futuro
              </h2>
              <NavLink to="/servizi" className="hidden md:flex items-center text-drive-accent text-sm hover:text-white transition-colors">
                Vedi tutte le soluzioni <ArrowRight size={16} className="ml-2" />
              </NavLink>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                id: '01',
                cat: 'DIGITAL',
                title: 'Digitalizzazione Aziendale',
                desc: 'Assessment digitale, roadmap personalizzate e accesso ai fondi per l\'innovazione tecnologica.',
                link: '/servizi/digital-transformation'
              },
              {
                id: '02',
                cat: 'INTELLIGENCE',
                title: 'Intelligenza Artificiale',
                desc: 'Agenti AI personalizzati e automazione dei processi aziendali tramite Machine Learning.',
                link: '/prodotti/aiamica'
              },
              {
                id: '03',
                cat: 'COMMERCE',
                title: 'E-Commerce e Marketplace',
                desc: 'Gestione completa account, strategia multi-channel e ottimizzazione revenue.',
                link: '/servizi/ecommerce-amazon'
              }
            ].map((item) => (
              <NavLink key={item.id} to={item.link} className="block group">
                <div className="bg-drive-card border border-gray-800 p-8 hover:border-drive-accent/50 transition-colors h-full flex flex-col">
                  <div className="text-xs text-drive-accent font-bold mb-4">{item.id} / {item.cat}</div>
                  <h3 className="text-xl font-bold text-white mb-4">{item.title}</h3>
                  <p className="text-gray-400 text-sm leading-relaxed mb-8 flex-grow">{item.desc}</p>
                  <div className="flex items-center text-sm font-medium text-white group-hover:text-drive-accent transition-colors mt-auto">
                    Approfondisci <ArrowRight size={16} className="ml-2 group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </NavLink>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Product */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <span className="text-drive-accent text-xs font-bold tracking-widest uppercase mb-2 block">Featured Product</span>
              <h2 className="text-4xl font-bold text-white mb-6">Sostrato Web</h2>
              <p className="text-xl text-gray-300 mb-6">Il sistema nervoso centrale della tua azienda.</p>
              <p className="text-gray-400 mb-8 leading-relaxed">
                Una piattaforma cloud all-in-one che elimina i silos di dati. Dal magazzino al CRM, dalla fatturazione all'e-commerce: tutto parla la stessa lingua.
              </p>
              <ul className="space-y-3 mb-10 text-gray-400 text-sm">
                <li className="flex items-center"><span className="w-1.5 h-1.5 bg-drive-accent rounded-full mr-3"></span>Gestione Magazzino in tempo reale</li>
                <li className="flex items-center"><span className="w-1.5 h-1.5 bg-drive-accent rounded-full mr-3"></span>Integrazione IA ed E-commerce Nativar</li>
                <li className="flex items-center"><span className="w-1.5 h-1.5 bg-drive-accent rounded-full mr-3"></span>Business Intelligence Dashboard</li>
              </ul>
              <NavLink to="/prodotti/sostrato-web">
                <Button variant="primary">Esplora la Piattaforma</Button>
              </NavLink>
            </div>
            <div className="relative">
               <div className="rounded-xl overflow-hidden border border-gray-800 shadow-2xl">
                 <img 
                   src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=80" 
                   alt="Sostrato Dashboard" 
                   className="w-full h-auto opacity-90" 
                 />
                 {/* Overlay to simulate dashboard look */}
                 <div className="absolute inset-0 bg-gradient-to-t from-drive-bg via-transparent to-transparent opacity-50"></div>
               </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-20 border-y border-gray-800 bg-[#050608]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-12 text-center">
            {[
              { val: '€2M+', label: 'FATTURATO AMAZON GESTITO' },
              { val: '45%', label: 'AUMENTO PRODUTTIVITÀ' },
              { val: '50+', label: 'PROGETTI INDUSTRY 4.0' },
              { val: '15k', label: 'ORE RISPARMIATE / ANNO' },
            ].map((stat, idx) => (
              <div key={idx}>
                <div className="text-4xl md:text-5xl font-bold text-white mb-2">{stat.val}</div>
                <div className="text-[10px] md:text-xs font-bold text-gray-500 tracking-widest uppercase">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Case Studies Carousel */}
      <section className="py-20 bg-drive-card/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
            <div>
              <span className="text-drive-accent text-xs font-bold tracking-widest uppercase mb-2 block">Case Studies</span>
              <h2 className="text-3xl font-bold text-white">Risultati Concreti</h2>
            </div>
            {/* Navigation Arrows */}
            <div className="flex gap-4">
              <button 
                onClick={() => scroll('left')}
                className="p-3 rounded-full border border-gray-700 text-white hover:bg-drive-accent hover:border-drive-accent transition-all duration-300"
                aria-label="Previous slide"
              >
                <ChevronLeft size={24} />
              </button>
              <button 
                onClick={() => scroll('right')}
                className="p-3 rounded-full border border-gray-700 text-white hover:bg-drive-accent hover:border-drive-accent transition-all duration-300"
                aria-label="Next slide"
              >
                <ChevronRight size={24} />
              </button>
            </div>
          </div>
          
          {/* Carousel Container */}
          <div 
            ref={scrollRef}
            className={`flex gap-8 overflow-x-auto pb-8 scrollbar-hide select-none ${
              isDown ? 'cursor-grabbing snap-none' : 'cursor-grab snap-x snap-mandatory'
            }`}
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
            onMouseDown={handleMouseDown}
            onMouseLeave={handleMouseLeave}
            onMouseUp={handleMouseUp}
            onMouseMove={handleMouseMove}
            onScroll={handleScroll}
          >
            {loopedCaseStudies.map((study, index) => (
              <div key={`${study.id}-${index}`} className="min-w-full md:min-w-[calc(50%-16px)] snap-start">
                <NavLink 
                  to={`/case-study/${study.id}`} 
                  onClick={handleLinkClick}
                  className={`block group relative h-80 rounded-lg overflow-hidden border border-transparent hover:border-drive-accent/30 transition-all ${
                    isDragging ? 'pointer-events-none' : ''
                  }`}
                  draggable="false"
                >
                  <img 
                    src={study.image} 
                    alt={study.title} 
                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" 
                    draggable="false"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/50 to-transparent"></div>
                  <div className="absolute top-6 left-6">
                     <span className="bg-drive-accent/90 text-white text-[10px] font-bold px-3 py-1 rounded uppercase tracking-wider">
                        {study.category}
                     </span>
                  </div>
                  <div className="absolute bottom-0 left-0 p-8 w-full">
                    <h3 className="text-xl font-bold text-white mb-2 group-hover:text-drive-accent transition-colors">{study.title}</h3>
                    <div className="flex flex-wrap gap-4 text-gray-400 text-sm mb-4">
                       {study.stats.slice(0,2).map((stat, idx) => (
                         <div key={idx} className="flex items-center">
                            <span className="w-1.5 h-1.5 bg-drive-accent rounded-full mr-2"></span>
                            <span className="font-bold text-white mr-1">{stat.value}</span> {stat.label}
                         </div>
                       ))}
                    </div>
                    <div className="flex items-center text-xs font-bold text-drive-accent uppercase tracking-widest opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-300">
                      Leggi Case Study <ArrowRight size={14} className="ml-2" />
                    </div>
                  </div>
                </NavLink>
              </div>
            ))}
          </div>
          
        </div>
      </section>

      {/* CTA Bottom */}
      <section className="relative py-32 text-center overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=2000&q=80"
            alt="Digital Circuit Board"
            className="w-full h-full object-cover"
          />
          {/* Lighter Overlay (90% opacity for better readability as requested) */}
          <div className="absolute inset-0 bg-[#080a10]/90"></div>
        </div>

        <div className="max-w-4xl mx-auto px-4 relative z-10">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
            Pronto a scalare il tuo <span className="text-drive-accent">business</span>?
          </h2>
          <p className="text-gray-200 mb-10 text-lg font-medium">
            Prenota una consulenza gratuita o richiedi una demo di Sostrato Web.
          </p>
          <NavLink to="/contatti">
            <Button variant="primary" className="px-10 py-4 text-base shadow-xl shadow-black/50">Contattaci Ora</Button>
          </NavLink>
        </div>
      </section>
    </div>
  );
};

export default Home;
