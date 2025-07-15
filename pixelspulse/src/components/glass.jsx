import React from 'react';
// eslint-disable-next-line no-unused-vars
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';

const GlassmorphicHero = () => {
  const navigate = useNavigate();
  const handleContact = () => {
    navigate('/contact');
    setTimeout(() => {
      window.scrollTo(0, 0);
    }, 10);
  };
  return (
    <div className='flex items-center justify-center py-12 px-4 sm:px-6 lg:px-16'>
      <div className='relative z-10 w-full max-w-7xl flex items-center'>
        {/* Main Glass Card - now with min-height */}
        <motion.div
          className='backdrop-blur-xl bg-white/5 rounded-3xl py-8 px-4 sm:p-12 lg:p-16 lg:px-24 border-hidden shadow-2xl flex flex-col md:flex-row items-center gap-8 lg:gap-16 w-full justify-between'
          initial={{
            opacity: 0,
          }}
          viewport={{ once: true, amount: 0.5 }}
          whileInView={{ opacity: 1, scale: 1.05 }}
          transition={{ duration: 1 }}
        >
          {/* Inner glow effect */}
          <div className='absolute inset-0 rounded-3xl pointer-events-none border border-white/10 shadow-[inset_0_1px_0_rgba(255,255,255,0.1)]' />

          {/* Text Content */}
          <div className='md:w-1/2 text-center md:text-left flex flex-col justify-center h-full'>
            <h1 className="text-3xl sm:text-4xl md:text-4xl lg:text-5xl  font-['poppins'] font-bold text-secondary mb-6 leading-tight">
              Your Brand's{' '}
              <span className='text-[#61e8ff] '>Digital Heartbeat</span>
            </h1>

            <p className="sm:text-xl md:text-base  max-w-3xl mx-auto md:mx-0 mb-10 font-['poppins']">
              We don't just build websites; we engineer digital experiences that
              resonate, engage, and convert. Let us infuse life into your online
              presence.
            </p>

            <div className='md:hidden flex items-center justify-center h-40 sm:h-50 pb-9'>
              <img
                src='/mobile2.png'
                alt='Mobile application showcase'
                className='w-50 sm:w-60'
              />
            </div>

            <div className='flex flex-col sm:flex-row justify-center md:justify-start gap-4 w-full mt-4'>
              {/* <button className="sm:flex-1 btn py-3.5 rounded-xl bg-white/10 backdrop-blur-sm border border-white/20 hover:bg-white/20 transition-all duration-300 text-white font-['poppins'] shadow-lg hover:shadow-xl">
                Get a Free Consultation
              </button> */}
              <button
                onClick={() => handleContact()}
                className='sm:flex-1 btn border-none py-3.5 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 text-white font-medium  shadow-lg hover:shadow-xl font-[poppins]'
              >
                Let's Build Your Vision
              </button>
            </div>
          </div>

          {/* Image Container */}
          <div className='md:flex hidden items-center justify-center h-70 mt-8 md:mt-0'>
            <img
              src='/mobile2.png'
              alt='Mobile application showcase'
              className='md:w-80 lg:w-100'
            />
          </div>
        </motion.div>

        {/* Floating elements for depth */}
        <div className='absolute -top-20 -left-20 w-64 h-64 bg-cyan-500/20 rounded-full filter blur-3xl -z-10' />
        <div className='absolute -bottom-20 -right-20 w-64 h-64 bg-blue-500/20 rounded-full filter blur-3xl -z-10' />
      </div>
    </div>
  );
};

export default GlassmorphicHero;
