import React from 'react';
// eslint-disable-next-line no-unused-vars
import { motion } from 'framer-motion';

const GlassmorphicHero = () => {
  return (
    <div className='flex items-center justify-center min-h-[100vh] py-12 lg:py-0 px-4 sm:px-6 lg:px-8'>
      <div className='relative z-10 w-full max-w-7xl h-full flex items-center'>
        {/* Main Glass Card - now with min-height */}
        <motion.div
          className='backdrop-blur-xl bg-white/5 rounded-3xl p-8 sm:p-12 lg:p-16 border-hidden shadow-2xl flex flex-col md:flex-row items-center gap-8 lg:gap-16 min-h-[70vh] md:min-h-[60vh] w-full'
          initial={{
            opacity: 1,
          }}
          viewport={{ once: false, amount: 0.5 }}
          whileInView={{ opacity: 1, scale: 1.05 }}
          transition={{ duration: 1 }}
        >
          {/* Inner glow effect */}
          <div className='absolute inset-0 rounded-3xl pointer-events-none border border-white/10 shadow-[inset_0_1px_0_rgba(255,255,255,0.1)]' />

          {/* Text Content */}
          <div className='md:w-1/2 text-center md:text-left flex flex-col justify-center h-full'>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-['Cal_Sans'] text-secondary mb-6 leading-tight">
              Your Brand's{' '}
              <span className="text-[#61e8ff] font-['Cal_Sans']">
                Digital Heartbeat
              </span>
            </h1>

            <p className="text-lg sm:text-xl text-white/80 max-w-3xl mx-auto md:mx-0 mb-10 font-['poppins']">
              We craft sleek, fast, and responsive websites with pixel-perfect
              design and purposeful code.
            </p>

            <div className='flex flex-col sm:flex-row justify-center md:justify-start gap-4'>
              <button className="px-8 py-3.5 rounded-xl bg-white/10 backdrop-blur-sm border border-white/20 hover:bg-white/20 transition-all duration-300 text-white font-['poppins'] text-lg shadow-lg hover:shadow-xl">
                Get A Quote
              </button>
              <button className='px-8 py-3.5 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 text-white font-medium text-lg shadow-lg hover:shadow-xl'>
                Learn More
              </button>
            </div>
          </div>

          {/* Image Container */}
          <div className='md:w-1/2 flex items-center justify-center h-full mt-8 md:mt-0'>
            <img
              src='/mobile2.png'
              alt='Mobile application showcase'
              className='w-full max-w-md md:max-w-none object-contain h-auto max-h-[50vh] md:max-h-[60vh]'
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
