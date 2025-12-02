
import React from 'react';
import { HashRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Solutions from './pages/Solutions';
import Products from './pages/Products';
import SostratoWeb from './pages/SostratoWeb';
import ShipYo from './pages/ShipYo';
import Aiamica from './pages/Aiamica';
import EcommerceAmazon from './pages/EcommerceAmazon';
import Funding from './pages/Funding';
import AiFlows from './pages/AiFlows';
import DigitalTransformation from './pages/DigitalTransformation';
import InnovationStrategy from './pages/InnovationStrategy';
import CaseStudies from './pages/CaseStudies';
import CaseStudyDetail from './pages/CaseStudyDetail';
import About from './pages/About';
import Contact from './pages/Contact';
import PrivacyPolicy from './pages/PrivacyPolicy';
import CookiePolicy from './pages/CookiePolicy';

// Scroll to top on route change
const ScrollToTop = () => {
  const { pathname } = useLocation();

  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
};

// Placeholder component for pages under construction
const PlaceholderPage: React.FC<{ title: string }> = ({ title }) => (
  <div className="pt-32 pb-20 min-h-screen flex flex-col items-center justify-center text-center px-4">
    <h1 className="text-5xl font-bold text-white mb-6">{title}</h1>
    <p className="text-gray-400 text-lg max-w-2xl">
      Questa sezione è attualmente in fase di sviluppo. 
      <br/>Stiamo lavorando per portare online contenuti di valore.
    </p>
  </div>
);

const App: React.FC = () => {
  return (
    <Router>
      <ScrollToTop />
      <div className="bg-drive-bg min-h-screen text-drive-text font-sans antialiased selection:bg-drive-accent selection:text-white">
        <Navbar />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            
            {/* Prodotti */}
            <Route path="/prodotti" element={<Products />} />
            <Route path="/prodotti/sostrato-web" element={<SostratoWeb />} />
            <Route path="/prodotti/shipyo" element={<ShipYo />} />
            <Route path="/prodotti/aiamica" element={<Aiamica />} />
            
            {/* Servizi */}
            <Route path="/servizi" element={<Solutions />} />
            <Route path="/servizi/ecommerce-amazon" element={<EcommerceAmazon />} />
            <Route path="/servizi/ai-flows" element={<AiFlows />} />
            <Route path="/servizi/innovation-strategy" element={<InnovationStrategy />} />
            <Route path="/servizi/digital-transformation" element={<DigitalTransformation />} />
            <Route path="/servizi/data-analysis" element={<PlaceholderPage title="Data Analysis" />} />
            <Route path="/servizi/funding" element={<Funding />} />
            
            {/* Case Studies */}
            <Route path="/case-study" element={<CaseStudies />} />
            <Route path="/case-study/:id" element={<CaseStudyDetail />} />
            
            {/* Top Level Pages */}
            <Route path="/consulenza-trasformazione" element={<InnovationStrategy />} />
            <Route path="/azienda" element={<About />} />
            <Route path="/contatti" element={<Contact />} />
            
            {/* Legal */}
            <Route path="/privacy-policy" element={<PrivacyPolicy />} />
            <Route path="/cookie-policy" element={<CookiePolicy />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
