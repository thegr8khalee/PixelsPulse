import React from 'react';
import { BackgroundGradientAnimation } from '../components/bg';
import GlassCard from '../components/glass';
import ServicesSection from '../components/services';
import { Github, GithubIcon, Video } from 'lucide-react';
// eslint-disable-next-line no-unused-vars
import { motion } from 'framer-motion';
import AboutSection from '../components/about';
import { useNavigate } from 'react-router-dom';

const LandingPage = () => {
  const navigate = useNavigate();
  const handleContact = () => {
    navigate('/contact');
    setTimeout(() => {
      window.scrollTo(0, 0);
    }, 10);
  };
  return (
    <div className='relative min-h-screen flex flex-col overflow-x-hidden'>
      {/* Gradient Background Section */}
      <div className='flex-1'>
        <BackgroundGradientAnimation className='items-center justify-center'>
          <div className='flex items-start justify-center pt-0 p-4'>
            <GlassCard
              blurAmount={12}
              borderRadius='1.5rem'
              backgroundColor='rgba(255, 255, 255, 0.05)'
              borderColor='rgba(255, 255, 255, 0.2)'
              className='w-full max-w-2xl'
            ></GlassCard>
          </div>
        </BackgroundGradientAnimation>
      </div>

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
            <h2 className="text-4xl sm:text-6xl md:text-6xl lg:text-6xl mb-0 font-['poppins'] font-bold">
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
            <a href="/portfolio">Explore Projects</a>
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

      <section className='py-15 px-0 sm:px-6 lg:px-8 bg-base-100'>
        <div className='max-w-7xl mx-auto'>
          <motion.div
            className='text-center mb-16'
            initial={{
              opacity: 0.2,
              scale: 0.9,
            }}
            viewport={{ once: false, amount: 0.5 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}
          >
            <h2 className="text-4xl sm:text-6xl md:text-6xl lg:text-6xl mb-1 font-['Cal_Sans']">
              Our Clients
            </h2>
          </motion.div>

          {/* Logos Container */}
          <motion.div
            className='relative group'
            initial={{
              opacity: 0.2,
              scale: 0.9,
            }}
            viewport={{ once: false, amount: 0.5 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}
          >
            {/* Fade Effects */}
            <div className='absolute left-0 top-0 bottom-0 w-5 bg-gradient-to-r from-base-100 to-transparent z-10 pointer-events-none'></div>
            <div className='absolute right-0 top-0 bottom-0 w-5 bg-gradient-to-l from-base-100 to-transparent z-10 pointer-events-none'></div>

            {/* Logos Scroll */}
            <div className='flex overflow-x-scroll pb-10 scrollbar-hide no-scrollbar'>
              <div className='flex items-center space-x-10 px-8'>
                {/* Company Logos - Replace with your actual logos */}
                <img
                  src='mimi.png'
                  alt='Company 4'
                  className='h-50 rounded-full object-contain opacity-80 hover:opacity-100 transition-opacity'
                />
                <img
                  src='Domora.png'
                  alt='Company 1'
                  className='h-50 rounded-full object-contain opacity-80 hover:opacity-100 transition-opacity'
                />
                <img
                  src='kad.png'
                  alt='Company 5'
                  className='h-50 rounded-full object-contain opacity-80 hover:opacity-100 transition-opacity'
                />
                <img
                  src='Pheezy.png'
                  alt='Company 5'
                  className='h-50 rounded-full object-contain opacity-80 hover:opacity-100 transition-opacity'
                />
                <img
                  src='susu.png'
                  alt='Company 5'
                  className='h-50 rounded-full object-contain opacity-80 hover:opacity-100 transition-opacity'
                />
                <img
                  src='sawaba.png'
                  alt='Company 5'
                  className='h-50 rounded-full object-contain opacity-80 hover:opacity-100 transition-opacity'
                />
                <img
                  src='Darul.png'
                  alt='Company 5'
                  className='h-50 rounded-full object-contain opacity-80 hover:opacity-100 transition-opacity'
                />
                <img
                  src='K.png'
                  alt='Company 2'
                  className='h-50 rounded-full object-contain opacity-80 hover:opacity-100 transition-opacity'
                />
                <img
                  src='OwlLingO.png'
                  alt='Company 3'
                  className='h-50 rounded-full object-contain opacity-80 hover:opacity-100 transition-opacity'
                />
                {/* <img src="/logos/company7.svg" alt="Company 7" className="h-30 object-contain opacity-80 hover:opacity-100 transition-opacity" />
          <img src="/logos/company8.svg" alt="Company 8" className="h-30 object-contain opacity-80 hover:opacity-100 transition-opacity" /> */}
              </div>
            </div>
          </motion.div>
        </div>
      </section>

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
          <button onClick={() => handleContact()} className='px-8 py-3 rounded-lg bg-gradient-to-r from-accent to-pink-400 hover:from-accent-100 hover:to-pink-300 transition-all duration-300 text-white font-medium'>
            Get a Free Consultation
          </button>
        </motion.div>
      </section>
    </div>
  );
};

export default LandingPage;
