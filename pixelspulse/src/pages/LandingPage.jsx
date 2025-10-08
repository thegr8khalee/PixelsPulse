import React from 'react';
import { BackgroundGradientAnimation } from '../components/bg';
import GlassCard from '../components/glass';
import ServicesSection from '../components/services';
import { ArrowUpRight, Github, GithubIcon, Play, Video } from 'lucide-react';
// eslint-disable-next-line no-unused-vars
import { motion } from 'framer-motion';
import AboutSection from '../components/about';
import { useNavigate } from 'react-router-dom';
import Aurora from '../components/Aurora';

const LandingPage = () => {
  const navigate = useNavigate();
  const handleContact = () => {
    navigate('/contact');
    setTimeout(() => {
      window.scrollTo(0, 0);
    }, 10);
  };
  return (
    <div className='relative flex flex-col overflow-x-hidden pt-16'>
      {/* Gradient Background Section */}
      <section
        id='hero'
        className='relative w-full h-[550px] overflow-hidden px-8 flex justify-center items-center border-none'
      >
        <div className='w-full flex max-w-5xl items-center justify-center border-none'>
          <div className='absolute inset-0 z-0 border-none'>
            <Aurora
              colorStops={['#30d5f3', '#d946ef', '#30d5f3']}
              blend={0.5}
              amplitude={1.0}
              speed={0.5}
            />
          </div>

          <div className='relative z-10 flex flex-col items-center justify-center h-full text-center'>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className='text-3xl sm:text-5xl font-bold text-white leading-relaxed py-4 font-montserrat'
            >
              Your Brand's{' '}
              <span className='text-primary'>Digital Heartbeat</span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className='my-4 text sm:text-lg text-gray-200 font-montserrat max-w-4xl'
            >
              We don't just build websites; we engineer digital experiences that
              resonate, engage, and convert. Let us infuse life into your online
              presence.
            </motion.p>
            <div className='flex flex-col sm:flex-row gap-4 mt-6'>
              <button
                className='text-lg group bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white p-4 px-8 rounded-full font-medium transition-all duration-200 flex items-center justify-center gap-2 shadow-lg hover:shadow-xl'
                onClick={() => handleContact()}
              >
                Consult with an expert
              </button>
              <button
                className='text-lg group bg-white/15 border border-white/25 hover:bg-white/25 text-white p-4 px-8 rounded-full font-medium transition-all duration-200 flex items-center justify-center gap-2 shadow-lg hover:shadow-xl'
                onClick={() => navigate('/portfolio')}
              >
                View Portfolio
              </button>
            </div>
          </div>
        </div>
      </section>

      <section className=' relative overflow-hidden'>
        <div className='max-w-7xl mx-auto px-4'>
          {/* Auto-scrolling container */}
          <div className='relative'>
            {/* Gradient overlays for fade effect */}
            <div className='absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-base-100 to-transparent z-10 pointer-events-none' />
            <div className='absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-base-100 to-transparent z-10 pointer-events-none' />

            {/* Scrolling wrapper */}
            <div className='overflow-hidden'>
              <motion.div
                className='flex gap-16 items-center'
                animate={{
                  x: [0, '-100%'],
                }}
                transition={{
                  x: {
                    repeat: Infinity,
                    repeatType: 'loop',
                    duration: 30,
                    ease: 'linear',
                  },
                }}
              >
                {/* Duplicate the logos twice for seamless loop */}
                {[...Array(2)].map((_, setIndex) => (
                  <div
                    key={setIndex}
                    className='flex gap-8 sm:gap-16 items-center flex-shrink-0'
                  >
                    {[
                      { Image: 'one.png', width: 140 },
                      { Image: 'two.png', width: 140 },
                      { Image: 'three.png', width: 140 },
                      { Image: 'four.png', width: 140 },
                      { Image: 'five.png', width: 140 },
                      { Image: 'six.png', width: 140 },
                      { Image: 'seven.png', width: 140 },
                      { Image: 'eight.png', width: 140 },
                      { Image: 'nine.png', width: 140 },
                      { Image: 'ten.png', width: 140 },
                    ].map((logo, index) => (
                      <div
                        key={index}
                        className='flex items-center justify-center grayscale hover:grayscale-0 transition-all duration-300 opacity-60 hover:opacity-100'
                        style={{ minWidth: `${logo.width}px` }}
                      >
                        <img src={logo.Image} alt={logo.Image} className='w-40' />
                      </div>
                    ))}
                  </div>
                ))}
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}

      <ServicesSection></ServicesSection>

      {/* Portfolio Section */}
      <section className='py-20 px-0 sm:px-6 lg:px-8 bg-base-100'>
        <div className='max-w-7xl mx-auto'>
          <motion.div
            className='text-center mb-6'
            initial={{
              opacity: 0.5,
              scale: 0.9,
            }}
            viewport={{ once: false, amount: 0.5 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}
          >
            <h2 className="text-4xl sm:text-6xl md:text-6xl lg:text-6xl mb-0 font-['poppins'] font-medium">
              Projects
            </h2>
            <p className="text-1xl p-8 pt-2 text-gray-400 max-w-2xl mx-auto font-['montserrat']">
              Explore our portfolio of successful projects and case studies
            </p>
          </motion.div>

          {/* Horizontal Scroll Container */}
          <motion.div
            className='relative'
            initial={{
              opacity: 0.5,
              scale: 0.9,
            }}
            viewport={{ once: false, amount: 0.5 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}
          >
            {/* Fade Effects */}
            <div className='absolute left-0 top-0 bottom-0 w-5 bg-gradient-to-r from-base-100 to-transparent z-10 pointer-events-none'></div>
            <div className='absolute right-0 top-0 bottom-0 w-5 bg-gradient-to-l from-base-100 to-transparent z-10 pointer-events-none'></div>

            {/* Cards Container */}
            <div
              className='flex overflow-x-auto pb-10 gap-8 px-4'
              style={{
                scrollbarWidth: 'none',
                msOverflowStyle: 'none',
              }}
            >
              {/* Card 3 */}
              <div className='flex-shrink-0 w-80 md:w-96 space-y-2'>
                <figure className=''>
                  <img
                    src='emm.png'
                    alt='Project'
                    className='rounded-xl w-full h-60 object-fill'
                  />
                </figure>
                <div className='space-y-1'>
                  <h2 className="text-lg font-['poppins'] font-medium">
                    Everything MIMI
                  </h2>
                  <p className='font-["poppins"] text-gray-400'>
                    E-commerce website, products catalog, full brand Identity.
                  </p>
                  {/* <div className='card-actions w-full'>
                    <a className='text-accent font-[montserrat]'>
                      Learn More
                    </a>
                  </div> */}
                </div>
              </div>

              <div className='flex-shrink-0 w-75 md:w-96 space-y-2'>
                <figure className=''>
                  <img
                    src='Domora.png'
                    alt='Project'
                    className='rounded-xl w-full h-60 object-cover'
                  />
                </figure>
                <div className='space-y-1'>
                  <h2 className="text-lg font-['poppins'] font-semibold">
                    Domora (Ongoing Project)
                  </h2>
                  <p className='font-["poppins"] text-gray-400'>
                    Real-estate Website, UI/UX design and full brand identity.
                  </p>
                  {/* <div className='card-actions w-full'>
                    <a className='text-accent  font-[montserrat]'>
                      Learn More
                    </a>
                  </div> */}
                </div>
              </div>

              <div className='flex-shrink-0 w-75 md:w-96 space-y-2'>
                <figure className=''>
                  <img
                    src='kad.png'
                    alt='Project'
                    className='rounded-xl w-full h-60'
                  />
                </figure>
                <div className='space-y-1'>
                  <h2 className="text-lg font-['poppins'] font-semibold">
                    Kaduna Real Estate Properties
                  </h2>
                  <p className='font-["poppins"] text-gray-400'>
                    An eye-catching Logo design perfect for 3D and use as a
                    watermark.
                  </p>
                  {/* <div className='card-actions w-full'>
                    <a className='text-accent  font-[montserrat]'>
                      Learn More
                    </a>
                  </div> */}
                </div>
              </div>

              <div className='flex-shrink-0 w-75 md:w-96 space-y-2'>
                <figure className=''>
                  <img
                    src='Pheez.png'
                    alt='Project'
                    className='rounded-xl w-full h-60'
                  />
                </figure>
                <div className='space-y-1'>
                  <h2 className="text-lg font-['poppins'] font-semibold">
                    PHEEZYHOMES & Interior
                  </h2>
                  <p className='font-["poppins"] text-gray-400'>
                    Beautifully design Products and Collections Catalogs with
                    details.
                  </p>
                  {/* <div className='card-actions w-full'>
                    <a className='text-accent font-[montserrat]'>
                      Learn More
                    </a>
                  </div> */}
                </div>
              </div>
            </div>
          </motion.div>
          <div className='w-full text-xl text-center mt- font-semibold text-primary'>
            <a href='/portfolio'>Explore Projects</a>
          </div>

          {/* Global CSS for scrollbar hiding */}
          <style jsx>{`
            [class*='overflow-x-auto']::-webkit-scrollbar {
              display: none;
              width: 0;
              height: 0;
              background: transparent;
            }
          `}</style>
        </div>
      </section>

      <AboutSection></AboutSection>

      {/* CTA Section */}
      <section className='py-20 px-4 sm:px-6 lg:px-8 bg-base-200'>
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
          <h2 className="text-3xl sm:text-6xl md:text-6xl lg:text-6xl mb-6 font-['poppins'] font-bold">
            Let's Build Something <span className='text-primary'>Bold</span>
          </h2>
          <p className="text-lg mb-8 max-w-2xl mx-auto font-['montserrat']">
            Ready to start your project? Get in touch today for a free
            consultation.
          </p>
          <button
            onClick={() => handleContact()}
            className='px-8 py-3 rounded-lg bg-gradient-to-r from-accent to-pink-400 hover:from-accent-100 hover:to-pink-300 transition-all duration-300 text-white font-medium'
          >
            Get a Free Consultation
          </button>
        </motion.div>
      </section>
    </div>
  );
};

export default LandingPage;
