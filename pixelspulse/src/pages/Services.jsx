import React from 'react';
import { BackgroundGradientAnimation } from '../components/bg';
import { BackgroundGradient } from '../components/card.jsx';
import { cn } from '../lib/utils.jsx';
// eslint-disable-next-line no-unused-vars
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import ServicesSection from '../components/services.jsx';
import { usePageLoader } from '../hooks/usePageLoader';
import SEO from '../components/SEO';

const Services = () => {
  usePageLoader([
    'web.webp',
    'mobile.webp',
    'ui.webp',
    'ecom.webp',
    'AI.webp',
    'brand.webp',
    'landing.webp',
    'performance.webp',
    'maintain.webp',
  ]);

  const navigate = useNavigate();
  const handleContact = () => {
    navigate('/contact');
    setTimeout(() => {
      window.scrollTo(0, 0);
    }, 10);
  };

  return (
    <div className='pt-16'>
      <SEO 
        title="Our Digital Services | PixelsPulse"
        description="Comprehensive digital services including web development, mobile apps, UI/UX design, and AI solutions to elevate your brand."
      />
      <section id='Hero' className='w-full text-center'>
        <BackgroundGradientAnimation className='h-50 justify-center items-center flex flex-col space-y-2 px-2'>
          <div className='z-100 text-2xl sm:text-4xl font-[poppins]'>
            Our Comprehensive{' '}
            <span className='text-primary'>Digital Services</span>
          </div>
          <div className='z-100 text-sm sm:text-base  font-[montserrat]'>
            Bringing Your Business to Live, Pixel by Pixel
          </div>
        </BackgroundGradientAnimation>
        <div className='w-full text-center items-center justify-center flex py-4'>
          <p className='font-[poppins] max-w-5xl'>
            At PixelsPulse, we offer a full spectrum of digital services
            designed to elevate your brand, engage your audience, and drive
            measurable results. From the foundational pulse of web development
            to the intricate rhythm of mobile apps and the visual harmony of
            design, we're your partner in digital success.
          </p>
        </div>
      </section>
      {/* <section className='w-full justify-center flex mt-6'>
        <div className='font-[poppins] font-bold text-2xl sm:text-4xl'>
          Our Core Offerings
        </div>
      </section> */}
      <ServicesSection />
      <section className='py-20 px-4 sm:px-6 lg:px-8'>
        <motion.div
          className='max-w-4xl mx-auto text-center'
          initial={{
            opacity: 0.2,
            scale: 0.9,
          }}
          viewport={{ once: false, amount: 0.5 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
        >
          <h2 className="text-2xl sm:text-5xl md:text-5xl lg:text-5xl mb-6 font-['poppins'] font-bold">
            Ready to elevate your <span className='text-primary'>digital presence?</span>
          </h2>
          <p className="text-lg mb-8 max-w-2xl mx-auto font-['montserrat']">
            Let's discuss how our services can empower your brand.
          </p>
          <button onClick={() => handleContact()} className='px-8 py-3 rounded-full bg-gradient-to-r from-accent to-pink-400 hover:from-accent-100 hover:to-pink-300 transition-all duration-300 text-white font-medium'>
            Get a Free Consultation
          </button>
        </motion.div>
      </section>
    </div>
  );
};

export default Services;
