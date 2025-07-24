import React from 'react';
import { Routes, Route } from 'react-router-dom';
import LandingPage from './pages/LandingPage';
import Navbar from './components/Navbar';
import Footer from './components/Footer1';
import Services from './pages/Services';
import Portfolio from './pages/Portfolio';
import Web from './pages/Web';
import Apps from './pages/Apps';
import UI from './pages/UI';
// import Branding from './pages/Branding';
import LandingPages from './pages/LandingPages';
import Performance from './pages/Performance';
import Maintenance from './pages/Maintenance';
import ECommerce from './pages/ECommerce';
import About from './pages/About';
import Contact from './pages/Contact';
import { Toaster } from 'react-hot-toast';
import Terms from './pages/Terms';
import Branding from './pages/Branding1';

const App = () => {
  return (
    <div>
      {/* <Navbar /> */}
      <Routes>
        <Route path='/' element={<LandingPage />} />
        <Route path='/services' element={<Services />} />
        <Route path='/portfolio' element={<Portfolio />} />
        <Route path='/web-development' element={<Web />} />
        <Route path='/mobile-app' element={<Apps />} />
        <Route path='/ui-ux-design' element={<UI />} />
        <Route path='/branding-graphics-design' element={<Branding />} />
        <Route path='/landing-pages-microsites' element={<LandingPages />} />
        <Route path='/performance-optimization' element={<Performance />} />
        <Route path='/maintenance-support' element={<Maintenance />} />
        <Route path='/e-commerce' element={<ECommerce />} />
        <Route path='/about' element={<About />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/terms' element={<Terms />} />
      </Routes>
      <Footer />
      <Toaster/>
    </div>
  );
};

export default App;
