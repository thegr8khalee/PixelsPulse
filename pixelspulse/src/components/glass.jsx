import React from 'react';
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
    <div className=' flex items-center justify-center py-8 sm:py-12 px-4 sm:px-6 lg:px-8'>
      <div className='relative z-10 w-full max-w-7xl'>
        {/* Main Glass Card */}
        <motion.div
          className='backdrop-blur-xl bg-white/5 rounded-2xl sm:rounded-3xl p-6 sm:p-8 md:p-12 lg:p-16 border border-white/10 shadow-2xl flex flex-col md:flex-row items-center gap-6 sm:gap-8 lg:gap-12 w-full'
          initial={{
            opacity: 0,
            y: 20
          }}
          viewport={{ once: true, amount: 0.3 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          {/* Inner glow effect */}
          <div className='absolute inset-0 rounded-2xl sm:rounded-3xl pointer-events-none border border-white/10 shadow-[inset_0_1px_0_rgba(255,255,255,0.1)]' />

          {/* Text Content */}
          <div className='relative z-10 flex-1 text-center md:text-left flex flex-col justify-center w-full'>
            <motion.h1 
              className="text-3xl sm:text-4xl md:text-4xl lg:text-5xl xl:text-6xl font-['poppins'] font-bold text-white mb-4 sm:mb-6 leading-tight"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              Your Brand's{' '}
              <span className='text-[#61e8ff] block sm:inline'>Digital Heartbeat</span>
            </motion.h1>

            <motion.p 
              className="text-sm sm:text-base md:text-lg lg:text-xl text-gray-200 max-w-2xl mx-auto md:mx-0 mb-6 sm:mb-8 font-['poppins'] leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              We don't just build websites; we engineer digital experiences that
              resonate, engage, and convert. Let us infuse life into your online
              presence.
            </motion.p>

            {/* Mobile Image - Shows only on small screens */}
            <motion.div 
              className='md:hidden flex items-center justify-center my-6 sm:my-8'
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <img
                src='/mobile2.png'
                alt='Mobile application showcase'
                className='w-48 sm:w-56 h-auto object-contain drop-shadow-2xl'
              />
            </motion.div>

            <motion.div 
              className='flex flex-col sm:flex-row justify-center md:justify-start gap-3 sm:gap-4 w-full'
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.5 }}
            >
              <button
                onClick={() => handleContact()}
                className='w-full sm:flex-1 md:w-auto px-6 sm:px-8 py-3 sm:py-3.5 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 text-white font-medium shadow-lg hover:shadow-xl font-[poppins] text-sm sm:text-base border-none'
              >
                Let's Build Your Vision
              </button>
            </motion.div>
          </div>

          {/* Desktop Image - Hidden on mobile */}
          <motion.div 
            className='hidden md:flex flex-shrink-0 items-center justify-center'
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <img
              src='/mobile2.png'
              alt='Mobile application showcase'
              className='w-64 lg:w-80 xl:w-96 h-auto object-contain drop-shadow-2xl'
            />
          </motion.div>
        </motion.div>

        {/* Floating elements for depth */}
        <div className='absolute -top-20 -left-20 w-40 sm:w-64 h-40 sm:h-64 bg-cyan-500/20 rounded-full filter blur-3xl -z-10 animate-pulse' />
        <div className='absolute -bottom-20 -right-20 w-40 sm:w-64 h-40 sm:h-64 bg-blue-500/20 rounded-full filter blur-3xl -z-10 animate-pulse' 
          style={{ animationDelay: '1s' }} 
        />
      </div>
    </div>
  );
};

export default GlassmorphicHero;