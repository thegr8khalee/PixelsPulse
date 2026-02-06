import React from 'react';
import {
  ChartBarIncreasing,
  ChartNoAxesGantt,
  ChartSpline,
  CircleGauge,
  Cloud,
  Code,
  Coins,
  Database,
  Globe,
  Hourglass,
  Image,
  PersonStanding,
  Plus,
  ShieldCheck,
  UserRound,
  Wrench,
  Bug,
  CloudCog,
} from 'lucide-react';
// eslint-disable-next-line no-unused-vars
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { usePageLoader } from '../hooks/usePageLoader';
import SEO from '../components/SEO';

const Performance = () => {
  usePageLoader(['performance1.webp']);
  const navigate = useNavigate();
  const handleContact = () => {
    navigate('/contact');
    setTimeout(() => {
      window.scrollTo(0, 0);
    }, 10);
  };

  const features = [
    {
      icon: UserRound,
      title: 'Improved User Satisfaction',
      description: 'Faster loading times mean happier visitors and lower bounce rates.',
    },
    {
      icon: CloudCog,
      title: 'Higher SEO Rankings',
      description: 'Search engines like Google prioritize fast-loading websites.',
    },
    {
      icon: ChartSpline,
      title: 'Increased Conversion Rates',
      description: 'A smooth experience encourages users to complete desired actions.',
    },
    {
      icon: PersonStanding,
      title: 'Better Accessibility',
      description:
        'Ensures your site is usable for everyone, even on slower connections.',
    },
    {
      icon: Coins,
      title: 'Reduced Hosting Costs',
      description:
        'Optimized sites can sometimes require less server resources.',
    },
    {
      icon: ShieldCheck,
      title: 'Enhanced Security',
      description: 'A well-optimized system often involves better security practices.',
    },
  ];

  const processSteps = [
    {
      icon: CircleGauge,
      title: 'Performance Audit',
      description:
        'Comprehensive analysis using tools like Google PageSpeed Insights and Lighthouse.',
    },
    {
      icon: Bug,
      title: 'Issue Identification',
      description:
        'Pinpointing specific areas causing slowdowns (e.g., large images, inefficient code).',
    },
    {
      icon: ChartNoAxesGantt,
      title: 'Strategy Development',
      description: 'Creating a tailored plan for optimization.',
    },
    {
      icon: Plus,
      title: 'Implementation & Optimization',
      description:
        'Applying techniques like code minification, image compression, and caching.',
    },
    {
      icon: ShieldCheck,
      title: 'Testing & Monitoring',
      description:
        'Verifying improvements and setting up ongoing performance tracking.',
    },
  ];

  const keyFeatures = [
    {
      icon: Code,
      title: 'Code Minification (HTML, CSS, JavaScript)',
    },
    {
      icon: Image,
      title: 'Image Optimization (compression, lazy loading, next-gen formats)',
    },
    {
      icon: Globe,
      title: 'Browser Caching Configuration',
    },
    {
      icon: Hourglass,
      title: 'Server Response Time Improvement',
    },
    {
      icon: Database,
      title: 'Database Optimization',
    },
    {
      icon: Cloud,
      title: 'Content Delivery Network (CDN) Integration',
    },
    {
      icon: ChartBarIncreasing,
      title: 'Core Web Vitals Improvement',
    },
    {
      icon: Wrench,
      title: 'Performance Monitoring Tools Setup & Reporting',
    },
  ];

  return (
    <div className='pt-16'>
      <SEO 
        title="Website Performance Optimization | PixelsPulse"
        description="Speed up your website with our performance optimization services. Improve core web vitals and SEO rankings."
      />
      <section id='Hero' className='relative w-full text-center'>
        <div className='h-50 lg:h-70'>
          <img
            src='performance1.webp' // Keep this source for performance page
            alt='Web Development'
            className='relative w-full h-full object-cover'
          />
        </div>
        <div className=' absolute bg-black/70 h-full top-0 left-1/2 w-full -translate-x-1/2 justify-center items-center text-start flex flex-col'>
          <div className='max-w-7xl p-4'>
            <h1 className='relative z-50 text-2xl sm:text-3xl lg:text-5xl font-[poppins]'>
              Unleash Full Potential:
              <span className='text-primary'>
                Website Performance Optimization
              </span>
            </h1>
            <button
              onClick={() => handleContact()}
              className='sm:w-md mt-4 btn border-none rounded-full bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 text-white font-medium  shadow-lg hover:shadow-xl font-[poppins]'
            >
              Optimize Your Site Now
            </button>
          </div>
        </div>
      </section>

      <section className='w-full flex items-center justify-center px-4'>
        <div className='max-w-7xl py-4 space-y-4'>
          <h1 className='text-2xl sm:text-3xl font-medium font-[poppins] text-primary'>
            What We Do
          </h1>
          <p className='font-[poppins]'>
            In today's fast-paced digital world, **speed is paramount**. A slow
            website frustrates users, hurts your search engine rankings, and
            costs you conversions. PixelsPulse offers comprehensive website
            performance optimization services designed to **supercharge your
            site's speed and efficiency**. We dive deep into your code, images,
            server configurations, and more to identify bottlenecks and
            implement solutions that deliver tangible results.
          </p>

          <h1 className='text-2xl sm:text-3xl font-medium font-[poppins] text-primary'>
            Why It Matters
          </h1>
          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>
            {features.map(({ icon: Icon, title, description }, i) => (
              <motion.div
                key={i}
                className='relative bg-gradient-to-br from-primary/10 to-accent/10 p-4 rounded-xl'
                initial={{ opacity: 0.2, scale: 0.9 }}
                viewport={{ once: true, amount: 0.5 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
              >
                <div className='absolute inset-0 rounded-xl pointer-events-none border border-white/10 shadow-[inset_0_1px_0_rgba(255,255,255,0.1)]' />
                <div className='flex space-x-2 items-center'>
                  <Icon className='size-8 stroke-accent' />
                  <h1 className='font-semibold font-[poppins] text-lg'>
                    {title}
                  </h1>
                </div>
                <p className='font-[montserrat] text-gray-300 mt-2'>
                  {description}
                </p>
              </motion.div>
            ))}
          </div>

          <h1 className='text-2xl sm:text-3xl font-medium font-[poppins] text-primary'>
            Our Process
          </h1>
          <p className='font-[poppins]'>
            Our methodical approach to performance optimization includes:
          </p>
          <div>
            {processSteps.map(({ icon: Icon, title, description }, i) => (
              <React.Fragment key={i}>
                <motion.div
                  initial={{ opacity: 0.2, scale: 0.9 }}
                  viewport={{ once: true, amount: 0.5 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5 }}
                  className={i > 0 ? 'mt-4' : ''}
                >
                  <div className='flex space-x-2 items-center'>
                    <Icon className='stroke-accent size-8' />
                    <h1 className='font-semibold font-[poppins] text-lg'>
                      {title}
                    </h1>
                  </div>
                  <p className='ml-10 font-[montserrat] text-gray-300'>
                    {description}
                  </p>
                </motion.div>
                {i < processSteps.length - 1 && (
                  <div className='ml-3 bg-gray-500 h-10 w-0.5 rounded-full'></div>
                )}
              </React.Fragment>
            ))}
          </div>
        </div>
      </section>

      <section className='w-full flex items-center justify-center px-4'>
        <div className='max-w-7xl w-full py-4 space-y-4'>
          <h1 className='text-2xl sm:text-3xl font-medium font-[poppins] text-primary'>
            Key Features & Deliverables
          </h1>
          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>
            {keyFeatures.map(({ icon: Icon, title }, i) => (
              <motion.div
                key={i}
                className='bg-gradient-to-br from-primary/10 to-accent/10 p-4 rounded-xl flex items-center space-x-4'
                initial={{ opacity: 0.2, scale: 0.9 }}
                viewport={{ once: true, amount: 0.5 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
                whileHover={{ scale: 1.03 }}
              >
                <Icon className='size-8 stroke-accent' />
                <h1 className='font-semibold font-[poppins] text-lg'>
                  {title}
                </h1>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className='py-20 px-4 sm:px-6 lg:px-8'>
        <motion.div
          className='max-w-4xl mx-auto text-center'
          initial={{ opacity: 0.2, scale: 0.9 }}
          viewport={{ once: false, amount: 0.5 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
        >
          <h2 className="text-3xl sm:text-6xl md:text-6xl lg:text-6xl mb-6 font-['poppins'] font-medium">
            Is Your Site
            <span className='text-primary'>Fast Enough?</span>
          </h2>
          <p className="text-lg mb-8 max-w-2xl mx-auto font-['montserrat']">
            Let's find out and unlock its full potential.
          </p>
          <button
            onClick={() => handleContact()}
            className='px-8 py-3 rounded-full bg-gradient-to-r from-accent to-pink-400 hover:from-accent-100 hover:to-pink-300 transition-all duration-300 text-white font-medium'
          >
            Get a Free Performance Audit
          </button>
        </motion.div>
      </section>
    </div>
  );
};

export default Performance;