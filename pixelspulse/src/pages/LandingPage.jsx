import React, { useState } from 'react';
import Marquee from 'react-fast-marquee';
import { BackgroundGradientAnimation } from '../components/bg';
import GlassCard from '../components/glass';
import ServicesSection from '../components/services';
import { ArrowUpRight, Github, GithubIcon, Play, Video } from 'lucide-react';
// eslint-disable-next-line no-unused-vars
import { motion } from 'framer-motion';
import AboutSection from '../components/about';
import { useNavigate } from 'react-router-dom';
import Aurora from '../components/Aurora';
import CountUp from '../components/countup';
import {
  FAQSection,
  ProcessSection,
  WhyChooseUsSection,
} from '../components/Sections';
import { useNewstellerStore } from '../store/use.newsteller';

const LandingPage = () => {
  const { isLoading, registerToNewsteller } = useNewstellerStore();
  const [email, setEmail] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    registerToNewsteller({ email });
  };

  const navigate = useNavigate();
  // const handleContact = () => {
  //   navigate('/contact');
  //   setTimeout(() => {
  //     window.scrollTo(0, 0);
  //   }, 10);
  // };

  const industries = [
    {
      title: 'Startups & Entrepreneurs',
      description: 'Helping new ideas grow into powerful digital brands.',
      icon: 'startup.png',
      size: 'medium',
    },
    {
      title: 'E-commerce & Retail',
      description:
        'Building modern online stores and digital shopping experiences.',
      icon: 'retail.png',
      size: 'medium',
    },
    {
      title: 'Education & E-learning',
      description:
        'Creating engaging platforms that make learning interactive and accessible.',
      icon: 'education.png',
      size: 'medium',
    },
    {
      title: 'Healthcare & Wellness',
      description:
        'Designing secure, intuitive systems that connect patients and providers.',
      icon: 'health.png',
      size: 'medium',
    },
    {
      title: 'Real Estate & Architecture',
      description:
        'Developing elegant, data-driven websites and property platforms.',
      icon: 'property.png',
      size: 'medium',
    },
    {
      title: 'Finance & Technology',
      description:
        'Crafting scalable web and mobile solutions for fintech and SaaS businesses.',
      icon: 'fintech.png',
      size: 'medium',
    },
  ];

  const containerVariants = {
    hidden: {},
    show: {
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    show: {
      opacity: 1,
      scale: 1,
      transition: {
        type: 'spring',
        stiffness: 260,
        damping: 20,
      },
    },
  };

  const STATS_DATA = [
    { value: 50, suffix: '+', text: 'Projects Completed' },
    { value: 3, suffix: '+', text: 'Industries Served' },
    { value: 10, suffix: 'K+', text: 'Development Hours' },
    { value: 100, suffix: '%', text: 'Client Satisfaction' },
  ];

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

          <div className='relative z-10 flex flex-col items-center justify-center h-full text-center space-y-4'>
            <motion.div
              initial={{ opacity: 0, scale: 0.5 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ type: 'spring', stiffness: 260, damping: 20 }}
              className=''
            >
              <a
                href='/'
                className="flex text-3xl sm:text-5xl hover:bg-transparent border-0 hover:text-inherit hover:shadow-none font-['poppins'] font-bold items-center"
              >
                <img
                  src='/logo-hero.png'
                  alt='PixelPulse.dev Logo'
                  className='w-20'
                />
                <p>PixelsPulse</p>
                <p className='text-accent'>.</p>
                <span className='text-sm sm:text-2xl font-normal flex items-end justify-end mt-2 sm:mt-4'>
                  dev
                </span>
              </a>
            </motion.div>
            <motion.p
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ type: 'spring', stiffness: 100, damping: 10 }}
              className='my-4 text sm:text-lg text-gray-200 font-montserrat max-w-4xl'
            >
              We don't just build websites; we engineer digital experiences that
              resonate, engage, and convert. Let us infuse life into your online
              presence.
            </motion.p>
            <motion.h1
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ type: 'spring', stiffness: 100, damping: 10 }}
              className='sm:text-xl font-montserrat text-accent tracking-wide italic'
            >
              "Your Brand's Digital Heartbeat"
            </motion.h1>
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ type: 'spring', stiffness: 100, damping: 10 }}
              className='flex flex-col sm:flex-row gap-4 mt-6'
            >
              <button
                className='text-lg group bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white p-4 px-8 rounded-full font-medium transition-all duration-200 flex items-center justify-center gap-2 shadow-lg hover:shadow-xl'
                onClick={() => navigate('/booking')}
              >
                Consult With an Expert
              </button>
              <button
                className='text-lg group bg-white/15 border border-white/25 hover:bg-white/25 text-white p-4 px-8 rounded-full font-medium transition-all duration-200 flex items-center justify-center gap-2 shadow-lg hover:shadow-xl'
                onClick={() => navigate('/contact')}
              >
                Contact Us
              </button>
            </motion.div>
          </div>
        </div>
      </section>

      <section className='relative overflow-hidden'>
        <div className='w-full mx-auto px-4 text-center'>
          <p className='font-[montserrat] text-gray-300 py-4'>Trusted by</p>
          {/* Auto-scrolling container */}
          <div className='relative'>
            {/* Gradient overlays for fade effect */}
            <div className='absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-base-100 to-transparent z-10 pointer-events-none' />
            <div className='absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-base-100 to-transparent z-10 pointer-events-none' />

            <Marquee speed={40} pauseOnHover={true}>
              {[
                { Image: 'one.png' },
                { Image: 'two.png' },
                { Image: 'three.png' },
                { Image: 'four.png' },
                { Image: 'five.png' },
                { Image: 'six.png' },
                { Image: 'seven.png' },
                { Image: 'eight.png' },
                { Image: 'nine.png' },
                { Image: 'ten.png' },
              ].map((logo) => (
                <div
                  // key={`${setIndex}-${index}`}
                  className='flex items-center justify-center grayscale hover:grayscale-0 transition-all duration-300 opacity-60 hover:opacity-100'
                >
                  <img
                    src={logo.Image}
                    alt={logo.Image}
                    className='w-20 sm:w-40 mx-4 sm:mx-8'
                  />
                </div>
              ))}
            </Marquee>
          </div>
        </div>
      </section>

      {/* who we are */}
      <section className='py-20 px-4 sm:px-6 lg:px-8 bg-base-100 w-full'>
        <div className='max-w-7xl mx-auto'>
          <div className='flex flex-col lg:flex-row gap-12 lg:gap-16 items-start'>
            {/* Left Content */}
            <div className='flex-1 space-y-6'>
              <motion.h1
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ type: 'spring', stiffness: 100, damping: 10 }}
                className='text-3xl sm:text-5xl font-poppins font-medium text-primary'
              >
                Who We Are
              </motion.h1>

              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ type: 'spring', stiffness: 100, damping: 10, delay: 0.2 }}
                className='space-y-4'
              >
                <p className='text-base sm:text-lg font-montserrat text-gray-300 leading-relaxed'>
                  At PixelsPulse, we are a passionate team of designers,
                  developers, and digital thinkers driven by one mission; to
                  craft experiences that connect people and brands through the
                  power of creativity and technology.
                </p>

                <p className='text-base sm:text-lg font-montserrat text-gray-300 leading-relaxed'>
                  We blend strategic thinking, innovative design, and
                  cutting-edge development to help businesses of all sizes build
                  meaningful digital identities. Whether it's a brand launch,
                  website revamp, or a full-scale product design, we create
                  solutions that are visually captivating, functionally
                  seamless, and built to inspire growth.
                </p>

                <p className='text-base sm:text-lg font-montserrat text-gray-300 leading-relaxed'>
                  Our culture thrives on collaboration, innovation, and a deep
                  respect for detail. Every pixel we design and every line of
                  code we write beats with purpose; to bring your vision to life
                  and make your brand unforgettable.
                </p>
              </motion.div>
            </div>

            {/* Right Stats Grid */}
            <motion.div
              className='w-full lg:w-auto lg:min-w-[400px]'
              variants={containerVariants}
              initial='hidden'
              whileInView='show'
              viewport={{ once: true, amount: 0.3 }}
            >
              <div className='grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-2 gap-4'>
                {STATS_DATA.map((stat, index) => (
                  <motion.div
                    key={index}
                    variants={cardVariants}
                    className='relative aspect-square bg-gradient-to-br from-primary/10 to-accent/10 rounded-3xl flex flex-col items-center justify-center text-center shadow-xl transition-colors duration-300'
                  >
                    <div className='absolute inset-0 rounded-3xl pointer-events-none border border-white/10 shadow-[inset_0_1px_0_rgba(255,255,255,0.1)]' />
                    <h1 className='text-6xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-primary mb-2'>
                      <CountUp
                        from={0}
                        to={stat.value}
                        separator=','
                        direction='up'
                        duration={1}
                        className='count-up-text'
                      />
                      {stat.suffix}
                    </h1>
                    <p className='text-xs sm:text-sm text-gray-300 px-2'>
                      {stat.text}
                    </p>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/** why choose us section */}
      <WhyChooseUsSection />

      <ServicesSection></ServicesSection>

      {/** Process */}
      <ProcessSection />

      {/** industries section */}
      <section className='py-20 px-4 text-start sm:text-center max-w-7xl mx-auto'>
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ type: 'spring', stiffness: 100, damping: 10 }}
        >
          <h2 className="text-3xl sm:text-5xl mb-1 font-['Poppins'] text-primary">
            Industries We Serve
          </h2>
          <p className="max-w-2xl mx-auto font-['montserrat'] mb-2 text-gray-200">
            Tailored Solutions for Diverse Sectors
          </p>
        </motion.div>
        <div className='mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>
          {industries.map((industry, index) => (
            <motion.div
              key={index}
              className='bg-gradient-to-br from-primary/10 to-accent/10 rounded-3xl p-6 text-start backdrop-blur-3xl hover:bg-white/15 transition-all duration-300'
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ type: 'spring', stiffness: 100, damping: 10 }}
              viewport={{ once: true }}
            >
              <div className='absolute inset-0 rounded-3xl pointer-events-none border border-white/10 shadow-[inset_0_1px_0_rgba(255,255,255,0.1)]' />
              <img
                src={industry.icon}
                alt={industry.title}
                className='w-40 mb-4'
              />
              <h3 className="text-xl font-['Poppins'] mb-2">
                {industry.title}
              </h3>
              <p className="text-gray-300 font-['montserrat']">
                {industry.description}
              </p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Portfolio Section */}
      

      <AboutSection></AboutSection>

      {/* CTA Section */}
      <div className='px-4'>
        <section className='pb-20 px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto  rounded-3xl p-8 md:p-16 mb-8'>
          <motion.div
            className='max-w-4xl mx-auto text-center'
            initial={{
              opacity: 0.2,
              scale: 0.8,
            }}
            viewport={{ once: true, amount: 0.5 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ type: 'spring', stiffness: 100, damping: 10 }}
          >
            <img src='book.png' alt='consultation' className='h-70 md:h-100' />
          </motion.div>
          <motion.div
            className='max-w-4xl mx-auto flex flex-col justify-center text-center md:text-left'
            initial={{
              opacity: 0.2,
              scale: 0.8,
            }}
            viewport={{ once: true, amount: 0.5 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ type: 'spring', stiffness: 100, damping: 10 }}
          >
            <h2 className="text-3xl sm:text-5xl mb-6 font-['poppins'] ">
              Let's Build Something <span className='text-primary'>Bold</span>
            </h2>
            <p className="text-lg mb-8 max-w-2xl mx-auto font-['montserrat'] text-gray-300">
              Ready to start your project? Get in touch today for a free
              consultation.
            </p>
            <div></div>
            <button
              onClick={() => navigate('/booking')}
              className='px-8 py-3 rounded-full bg-gradient-to-r from-accent to-pink-400 hover:from-accent-100 hover:to-pink-300 transition-all duration-300 text-white font-medium'
            >
              Get a Free Consultation
            </button>
          </motion.div>
        </section>
      </div>

      {/** newsletter section */}
      <div className='px-4'>
        <section className='pb-20 px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto rounded-3xl p-8 md:p-16 mb-16'>
          <motion.div
            className='max-w-4xl mx-auto text-center'
            initial={{
              opacity: 0.2,
              scale: 0.8,
            }}
            viewport={{ once: true, amount: 0.5 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ type: 'spring', stiffness: 100, damping: 10 }}
          >
            <img src='news.png' alt='newsletter' className='h-70 md:h-100' />
          </motion.div>
          <motion.div
            className='max-w-4xl mx-auto flex flex-col justify-center text-center md:text-left'
            initial={{
              opacity: 0.2,
              scale: 0.8,
            }}
            viewport={{ once: true, amount: 0.5 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ type: 'spring', stiffness: 100, damping: 10 }}
          >
            <h2 className="text-3xl sm:text-5xl mb-6 font-['poppins'] ">
              Stay Ahead with Our{' '}
              <span className='text-primary'>Newsletter</span>
            </h2>
            <p className="text-lg text-gray-300 mb-8 max-w-2xl font-['montserrat']">
              Subscribe now to get the latest updates, tips, and exclusive
              offers.
            </p>
            <div></div>
            <form
              onSubmit={handleSubmit}
              className='bg-white p-1 pl-4 border rounded-full focus:outline-none w-full flex justify-between'
            >
              <input
                type='email'
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                id='newsletter'
                placeholder='Email Address'
                className='w-full bg-transparent text-black placeholder:text-gray-600 border-none outline-none'
              />
              <button
                disabled={isLoading || email.trim() === ''}
                type='submit'
                className='bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700  text-white pl-4 p-4 rounded-full font-medium transition-all duration-200 items-center gap-2 shadow-lg hover:shadow-xl'
              >
                {isLoading ? 'Subscribing...' : 'Subscribe'}
              </button>
            </form>
          </motion.div>
        </section>
      </div>

      <div className='hidden md:grid grid-cols-2'>

      </div>
    </div>
  );
};

export default LandingPage;
