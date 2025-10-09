import React from 'react';
import { BackgroundGradientAnimation } from '../components/bg';
import { BackgroundGradient } from '../components/card.jsx';
import { cn } from '../lib/utils.jsx';
// eslint-disable-next-line no-unused-vars
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import ServicesSection from '../components/services.jsx';

const Services = () => {
    const navigate = useNavigate();
  const handleContact = () => {
    navigate('/contact');
    setTimeout(() => {
      window.scrollTo(0, 0);
    }, 10);
  };
  const services = [
    {
      title: 'Web Development',
      description:
        'From dynamic corporate sites to complex web applications, we build robust, scalable, and user-centric web solutions tailored to your unique needs.',
      //   icon: "💻",
      image: 'web.jpg',
      link: '/web-development' // replace with your actual image path
    },
    {
      title: 'UI/UX Design',
      description:
        'Craft captivating and user-friendly interfaces that not only look stunning but also provide seamless, enjoyable interactions for your audience.',
      image: 'ui.jpg',
      link: '/ui-ux-design' // replace with your actual image path
    },
    {
      title: 'Mobile Apps',
      description:
        'Reach your audience everywhere with intuitive iOS and Android applications. We design and develop engaging mobile experiences that drive connection and growth.',
      image: 'mobile.jpg',
      link: '/mobile-app' // replace with your actual image path
    },
    {
      title: 'Branding',
      description: 'Complete visual identity and brand strategy.',
      image: 'brand.jpg',
      link: '/branding-graphics-design' // replace with your actual image path
    },
    {
      title: 'Landing Pages & Micro-sites',
      description:
        'High-converting, visually striking pages for launches, products, or campaigns.',
      image: 'landing.jpg',
      link: '/landing-pages-microsites' // replace with your actual image path
    },
    {
      title: 'Performance optimization',
      description:
        'Speed, accessibility, and core web vitals — fine-tuned to perfection.',
      image: 'performance.jpg',
      link: '/performance-optimization' // replace with your actual image path
    },
    {
      title: 'Maintenance & Support',
      description:
        'Ongoing updates, backups, and tech support to keep your product stable and secure.',
      image: 'maintain.jpg',
      link: '/maintenance-support' // replace with your actual image path
    },
    {
      title: 'E-commerce Solutions',
      description:
        'Launch and scale your online store with custom e-commerce solutions. We build secure, user-friendly platforms designed for sales growth.',
      image: 'e-commerce.jpeg',
      link: '/e-commerce' // replace with your actual image path
    },
  ];

//   const navigate = useNavigate()

  const handleClick = (link) => {
    navigate(link)
    setTimeout(() => {
      window.scrollTo(0, 0);
    }, 10);
  }
  return (
    <div className='pt-16'>
      <section id='Hero' className='w-full text-center'>
        <BackgroundGradientAnimation className='h-50 justify-center items-center flex flex-col space-y-2 px-2'>
          <div className='z-100 text-2xl sm:text-4xl font-bold font-[poppins]'>
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
      <section className='w-full justify-center flex mt-6'>
        <div className='font-[poppins] font-bold text-2xl sm:text-4xl'>
          Our Core Offerings
        </div>
      </section>
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
