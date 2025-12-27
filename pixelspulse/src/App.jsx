import React, { Suspense, lazy } from 'react';
import { Routes, Route } from 'react-router-dom';
// import LandingPage from './pages/LandingPage';
import Navbar from './components/Navbar';
import Footer from './components/Footer1';
// import Services from './pages/Services';
// import Portfolio from './pages/Portfolio';
// import Web from './pages/Web';
// import Apps from './pages/Apps';
// import UI from './pages/UI';
// import Branding from './pages/Branding';
// import LandingPages from './pages/LandingPages';
// import Performance from './pages/Performance';
// import Maintenance from './pages/Maintenance';
// import ECommerce from './pages/ECommerce';
// import About from './pages/About';
// import Contact from './pages/Contact';
import { Toaster } from 'react-hot-toast';
// import Terms from './pages/Terms';
// import Branding from './pages/Branding1';
// import Help from './pages/Help';
// import Privacy from './pages/privacy';
// import CookiePolicy from './pages/cookie';
// import UnsubscribeSuccess from './pages/unsubscribeSuccess';
// import AISolutions from './pages/AI';
// import Booking from './pages/Booking';
import ScrollToTop from './components/ScrollToTop';
import { useUiStore } from './store/use.ui.store';
import { motion } from 'framer-motion';

const LandingPage = lazy(() => import('./pages/LandingPage'));
const Services = lazy(() => import('./pages/Services'));
const Portfolio = lazy(() => import('./pages/Portfolio'));
const Web = lazy(() => import('./pages/Web'));
const Apps = lazy(() => import('./pages/Apps'));
const UI = lazy(() => import('./pages/UI'));
const LandingPages = lazy(() => import('./pages/LandingPages'));
const Performance = lazy(() => import('./pages/Performance'));
const Maintenance = lazy(() => import('./pages/Maintenance'));
const ECommerce = lazy(() => import('./pages/ECommerce'));
const About = lazy(() => import('./pages/About'));
const Contact = lazy(() => import('./pages/Contact'));
const Terms = lazy(() => import('./pages/Terms'));
const Branding = lazy(() => import('./pages/Branding1'));
const Help = lazy(() => import('./pages/Help'));
const Privacy = lazy(() => import('./pages/privacy'));
const CookiePolicy = lazy(() => import('./pages/cookie'));
const UnsubscribeSuccess = lazy(() => import('./pages/unsubscribeSuccess'));
const AISolutions = lazy(() => import('./pages/AI'));
const Booking = lazy(() => import('./pages/Booking'));

const App = () => {
  const { isLoading } = useUiStore();

  return (
    <div>
      {isLoading && (
        <div className='fixed inset-0 z-50 flex items-center justify-center bg-black'>
          <motion.div
            initial={{ opacity: 0.5, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1.1 }}
            transition={{
              duration: 1,
              repeat: Infinity,
              repeatType: 'reverse',
              ease: 'easeInOut',
            }}
            className='flex flex-col items-center'
          >
            <img src='/logo-hero.webp' alt='Loading...' className='w-24 mb-4' />
          </motion.div>
        </div>
      )}
      {!isLoading && <Navbar />}
      <ScrollToTop />
      <Suspense fallback={
        <div className='fixed inset-0 z-50 flex items-center justify-center bg-black'>
          <motion.div
            initial={{ opacity: 0.5, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1.1 }}
            transition={{
              duration: 1,
              repeat: Infinity,
              repeatType: 'reverse',
              ease: 'easeInOut',
            }}
            className='flex flex-col items-center'
          >
            <img src='/logo-hero.webp' alt='Loading...' className='w-24 mb-4' />
          </motion.div>
        </div>
      }>
      <Routes>
        <Route path='/' element={<LandingPage />} />
        <Route path='/booking' element={<Booking />} />
        <Route path='/services' element={<Services />} />
        <Route path='/ai' element={<AISolutions />} />
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
        <Route path='/help' element={<Help />} />
        <Route path='/privacy' element={<Privacy />} />
        <Route path='/cookie' element={<CookiePolicy />} />
        <Route
          path='/unsubscribe-success/:email'
          element={<UnsubscribeSuccess />}
        />
      </Routes>
      </Suspense>
      <Footer />
      <Toaster />
    </div>
  );
};

export default App;
