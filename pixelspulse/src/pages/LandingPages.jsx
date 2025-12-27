import React from 'react';
import {
  Brush,
  ChartSpline,
  CalendarSync,
  ChartColumnIncreasing,
  ChartNetwork,
  Code,
  Crosshair,
  Gem,
  LayoutPanelTop,
  MousePointerClickIcon,
  PanelTop,
  Rocket,
  Search,
  SpellCheck,
  TableOfContents,
  Zap,
} from 'lucide-react';
// eslint-disable-next-line no-unused-vars
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { usePageLoader } from '../hooks/usePageLoader';

const LandingPages = () => {
  usePageLoader(['land.webp']);
  const navigate = useNavigate();
  const handleContact = () => {
    navigate('/contact');
    setTimeout(() => {
      window.scrollTo(0, 0);
    }, 10);
  };

  const features = [
    {
      icon: ChartSpline,
      title: 'Higher Conversion Rates',
      description:
        'Focused messaging leads to better results from your campaigns.',
    },
    {
      icon: Gem,
      title: 'Clear Call-to-Action',
      description:
        'Eliminate distractions and guide users directly to their next step.',
    },
    {
      icon: ChartColumnIncreasing,
      title: 'Improved ROI on Advertising',
      description: 'Get more value from your marketing spend.',
    },
    {
      icon: Zap,
      title: 'Quick Deployment',
      description: 'Launch campaigns rapidly for timely promotions.',
    },
    {
      icon: SpellCheck,
      title: 'Easy A/B Testing',
      description: 'Optimize performance with data-driven design iterations.',
    },
  ];

  const processSteps = [
    {
      icon: Crosshair,
      title: 'Goal Definition',
      description: 'Clearly outlining the primary objective of the page.',
    },
    {
      icon: TableOfContents,
      title: 'Content Strategy',
      description: 'Crafting compelling copy and visual hierarchy.',
    },
    {
      icon: Brush,
      title: 'Conversion-Focused Design',
      description: 'Designing layouts optimized for user flow and action.',
    },
    {
      icon: Code,
      title: 'Development & Integration',
      description: 'Building the page and integrating with necessary tools.',
    },
    {
      icon: ChartNetwork,
      title: 'Tracking & Analytics Setup',
      description: 'Ensuring you can measure performance accurately.',
    },
  ];

  const keyFeatures = [
    {
      icon: PanelTop,
      title: 'Custom Landing Page Design & Development',
    },
    {
      icon: MousePointerClickIcon,
      title: 'Lead Capture Forms & CRM Integration',
    },
    {
      icon: CalendarSync,
      title: 'Integration with Marketing Automation Tools',
    },
    {
      icon: SpellCheck,
      title: 'A/B Testing Setup & Support',
    },
    {
      icon: ChartSpline,
      title: 'Conversion Rate Optimization (CRO) Best Practices',
    },
    {
      icon: LayoutPanelTop,
      title: 'Microsite Development for Specific Campaigns/Events',
    },
    {
      icon: ChartColumnIncreasing, // Used ChartColumn in original, but ChartColumnIncreasing is similar and was used for a feature, keeping consistency or ChartColumn is fine. Using ChartColumnIncreasing for consistency here.
      title: 'Google Analytics & Conversion Tracking',
    },
  ];

  return (
    <div className='pt-16'>
      <section id='Hero' className='relative w-full text-center'>
        <div className='h-50 lg:h-70 w-full'>
          <img
            src='land.webp'
            alt='Web Development'
            className='relative w-full h-full object-cover'
          />
        </div>
        <div className=' absolute bg-black/70 h-full top-0 left-1/2 w-full -translate-x-1/2 justify-center items-center text-start flex flex-col'>
          <div className='max-w-7xl p-4'>
            <h1 className='relative z-50 text-2xl sm:text-3xl lg:text-5xl font-[poppins]'>
              Targeted Impact:{' '}
              <span className='text-primary'>
                High-Converting Landing Pages & Microsites
              </span>
            </h1>
            <button
              onClick={() => handleContact()}
              className='sm:w-md mt-4 btn border-none rounded-full bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 text-white font-medium shadow-lg hover:shadow-xl font-[poppins]'
            >
              Boost Your Campaign Performance
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
            In the fast-paced world of digital marketing, focused communication
            is key. PixelsPulse specializes in creating high-converting landing
            pages and engaging microsites that serve a single, powerful purpose.
            Whether you're launching a new product, running an advertising
            campaign, promoting an event, or capturing specific leads, we design
            and develop dedicated digital assets that cut through the noise and
            drive immediate action.
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
            Our conversion-focused approach ensures your landing pages and
            microsites deliver:
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
            Need a <span className='text-primary'>High-Converting Page?</span>
          </h2>
          <p className="text-lg mb-8 max-w-2xl mx-auto font-['montserrat']">
            Let's discuss your campaign goals and build a page that delivers.
          </p>
          <button
            onClick={() => handleContact()}
            className='px-8 py-3 rounded-full bg-gradient-to-r from-accent to-pink-400 hover:from-accent-100 hover:to-pink-300 transition-all duration-300 text-white font-medium'
          >
            Get a Landing Page Quote
          </button>
        </motion.div>
      </section>
    </div>
  );
};

export default LandingPages;
