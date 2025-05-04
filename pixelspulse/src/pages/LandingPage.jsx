import React from 'react';
import { BackgroundGradientAnimation } from '../components/bg';
import GlassCard from '../components/glass';
import ServicesSection from '../components/services';
import { Github, GithubIcon, Video } from 'lucide-react';
// eslint-disable-next-line no-unused-vars
import { motion } from 'framer-motion';
import AboutSection from '../components/about';

const LandingPage = () => {
  return (
    <div className='relative min-h-screen flex flex-col overflow-x-hidden'>
      {/* Gradient Background Section */}
      <div className='flex-1'>
        <BackgroundGradientAnimation className='h-[50vh]'>
          <div className='absolute inset-0 flex items-start justify-center pt-0 p-4'>
            <div>
              <GlassCard
                blurAmount={12}
                borderRadius='1.5rem'
                backgroundColor='rgba(255, 255, 255, 0.05)'
                borderColor='rgba(255, 255, 255, 0.2)'
                className='w-full max-w-2xl'
              >
                <div className='text-center p-8 md:p-12'>
                  <h1 className='text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6'>
                    Welcome to PixelsPulse
                  </h1>
                  <p className='text-white/80 text-lg md:text-xl mb-8 max-w-2xl mx-auto'>
                    Experience the future of digital interaction with our
                    cutting-edge designs and immersive animations.
                  </p>
                  <div className='flex flex-col sm:flex-row justify-center gap-4'>
                    <button className='px-6 py-3 rounded-lg bg-white/10 backdrop-blur-sm border border-white/20 hover:bg-white/20 transition-all text-white'>
                      Get Started
                    </button>
                    <button className='px-6 py-3 rounded-lg bg-white text-black hover:bg-white/90 transition-all'>
                      Learn More
                    </button>
                  </div>
                  <img
                    src='/mobile.png'
                    alt='Mobile app showcase'
                    className='mx-auto mt-10 max-w-xs md:max-w-sm'
                  />
                </div>
              </GlassCard>
            </div>
          </div>
        </BackgroundGradientAnimation>
      </div>

      {/* Services Section */}

      <ServicesSection></ServicesSection>

      {/* Portfolio Section */}
      <section className='py-20 px-0 sm:px-6 lg:px-8 bg-base-100'>
        <div className='max-w-7xl mx-auto'>
          <motion.div
            className='text-center mb-16'
            initial={{
              opacity: 0.5,
              scale: 0.9,
            }}
            viewport={{ once: false, amount: 0.5 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}
          >
            <h2 className="text-4xl sm:text-6xl md:text-6xl lg:text-6xl mb-0 font-['Cal_Sans']">
              Recent Work
            </h2>
            <p className="text-1xl p-8 pt-2 text-base-content/80 max-w-2xl mx-auto font-['poppins']">
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
            <div className='absolute left-0 top-0 bottom-0 w-10 bg-gradient-to-r from-base-100 to-transparent z-10 pointer-events-none'></div>
            <div className='absolute right-0 top-0 bottom-0 w-10 bg-gradient-to-l from-base-100 to-transparent z-10 pointer-events-none'></div>

            {/* Cards Container */}
            <div
              className='flex overflow-x-auto pb-10 gap-8 px-4'
              style={{
                scrollbarWidth: 'none',
                msOverflowStyle: 'none',
              }}
            >
              {/* Card 1 */}
              <div className='flex-shrink-0 w-70 h-110 md:w-96'>
                <div className='card bg-base-200 rounded-2xl shadow-sm h-full'>
                  <figure className='px-4 pt-4'>
                    <img
                      src='owl.png'
                      alt='Project'
                      className='rounded-xl w-full h-30 object-cover'
                    />
                  </figure>
                  <div className='card-body items-center text-center'>
                    <h2 className="card-title font-normal font-['Cal_sans']">
                      OwlLingO - Real-Time Language Exchange Platform
                    </h2>
                    <p className='font-["poppins"]'>
                      A WebRTC-powered platform connecting language learners
                      with native speakers in real time with audio/video calls,
                      chat, and smart language matching.
                    </p>
                    <div className='card-actions mt-4'>
                      <button className='btn rounded-4xl btn-primary'>
                        {' '}
                        <Github></Github>GitHub{' '}
                      </button>
                      <button className='btn rounded-4xl btn-primary'>
                        {' '}
                        <Video></Video>Demo{' '}
                      </button>
                    </div>
                  </div>
                </div>
              </div>

              {/* Card 2 */}
              <div className='flex-shrink-0 w-70 h-110 md:w-96'>
                <div className='card bg-base-200 rounded-2xl shadow-sm h-full'>
                  <figure className='px-4 pt-4'>
                    <img
                      src='kid.png'
                      alt='Project'
                      className='rounded-xl w-full h-30 object-cover'
                    />
                  </figure>
                  <div className='card-body items-center text-center'>
                    <h2 className="card-title font-normal font-['Cal_sans']">
                      KidLearn - Interactive Learning for Kids
                    </h2>
                    <p className='font-["poppins"]'>
                      A web-based platform combining educational videos and
                      gamified quizzes for children, with age-based content
                      delivery, dynamic quiz engine, parent dashboard.
                    </p>
                    <div className='card-actions mt-4'>
                      <button className='btn rounded-4xl btn-primary'>
                        {' '}
                        <Github></Github>GitHub{' '}
                      </button>
                      <button className='btn rounded-4xl btn-primary'>
                        {' '}
                        <Video></Video>Demo{' '}
                      </button>
                    </div>
                  </div>
                </div>
              </div>

              {/* Card 3 */}
              <div className='flex-shrink-0 w-70 h-110 md:w-96'>
                <div className='card bg-base-200 rounded-2xl shadow-sm h-full'>
                  <figure className='px-4 pt-4'>
                    <img
                      src='emm.png'
                      alt='Project'
                      className='rounded-xl w-full h-30 object-cover'
                    />
                  </figure>
                  <div className='card-body items-center text-center'>
                    <h2 className="card-title font-normal font-['Cal_sans']">
                      Everything MIMI
                    </h2>
                    <p className='font-["poppins"]'>
                      Branding, Logo, flyers, business card..
                    </p>
                    {/* <div className="card-actions mt-4">
                <button className="btn rounded-4xl btn-primary"> <Github></Github>GitHub </button>
                <button className="btn rounded-4xl btn-primary"> <Video></Video>Demo </button>
              </div> */}
                  </div>
                </div>
              </div>

              {/* Card 4 */}
              <div className='flex-shrink-0 w-70 h-110 md:w-96'>
                <div className='card bg-base-200 rounded-2xl shadow-sm h-full'>
                  <figure className='px-4 pt-4'>
                    <img
                      src='Domora.png'
                      alt='Project'
                      className='rounded-xl w-full h-30 object-cover'
                    />
                  </figure>
                  <div className='card-body items-center text-center'>
                    <h2 className="card-title font-normal font-['Cal_sans']">
                      Domora
                    </h2>
                    <p className='font-["poppins"]'>Complete Branding</p>
                    {/* <div className="card-actions mt-4">
                <button className="btn rounded-4xl btn-primary"> <Github></Github>GitHub </button>
                <button className="btn rounded-4xl btn-primary"> <Video></Video>Demo </button>
              </div> */}
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

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
            <div className='absolute left-0 top-0 bottom-0 w-15 bg-gradient-to-r from-base-100 to-transparent z-10 pointer-events-none'></div>
            <div className='absolute right-0 top-0 bottom-0 w-15 bg-gradient-to-l from-base-100 to-transparent z-10 pointer-events-none'></div>

            {/* Logos Scroll */}
            <div className='flex overflow-x-scroll pb-10 scrollbar-hide no-scrollbar'>
              <div className='flex items-center space-x-16 px-8'>
                {/* Company Logos - Replace with your actual logos */}
                <img
                  src='Domora.png'
                  alt='Company 1'
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
                <img
                  src='mimi.png'
                  alt='Company 4'
                  className='h-50 rounded-full object-contain opacity-80 hover:opacity-100 transition-opacity'
                />
                <img
                  src='kad.png'
                  alt='Company 5'
                  className='h-50 rounded-full object-contain opacity-80 hover:opacity-100 transition-opacity'
                />
                <img
                  src='Faullaj.png'
                  alt='Company 6'
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
          <h2 className="text-3xl sm:text-6xl md:text-6xl lg:text-6xl mb-6 font-['Cal_Sans']">
            Let's Build Something Bold
          </h2>
          <p className="text-lg mb-8 max-w-2xl mx-auto font-['poppins']">
            Ready to start your project? Get in touch today for a free
            consultation.
          </p>
          <button className='px-8 py-3 rounded-lg bg-primary  hover:bg-accent transition-all font-medium'>
            Get a Free Quote
          </button>
        </motion.div>
      </section>

      {/* Footer Section */}
      <footer className=' flex flex-col footer footer-center p-10 bg-base-300 text-base-content'>
        <nav className='grid grid-flow-col gap-4'>
          <a className='link link-hover'>About us</a>
          <a className='link link-hover'>Contact</a>
          <a className='link link-hover'>Jobs</a>
          <a className='link link-hover'>Press kit</a>
        </nav>
        <nav>
          <div className='grid grid-flow-col gap-4'>
            <a className='hover:opacity-80 transition-opacity'>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                width='24'
                height='24'
                viewBox='0 0 24 24'
                className='fill-current'
              >
                <path d='M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z'></path>
              </svg>
            </a>
            <a className='hover:opacity-80 transition-opacity'>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                width='24'
                height='24'
                viewBox='0 0 24 24'
                className='fill-current'
              >
                <path d='M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z'></path>
              </svg>
            </a>
            <a className='hover:opacity-80 transition-opacity'>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                width='24'
                height='24'
                viewBox='0 0 24 24'
                className='fill-current'
              >
                <path d='M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z'></path>
              </svg>
            </a>
          </div>
        </nav>
        <div>
          <p>
            Copyright © {new Date().getFullYear()} - All right reserved by
            PixelsPulse
          </p>
        </div>
      </footer>
    </div>
  );
};

export default LandingPage;
