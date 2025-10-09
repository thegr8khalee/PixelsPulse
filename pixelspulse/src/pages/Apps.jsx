import React from 'react';
import {
  Brush,
  ChartSpline,
  CircleDollarSign,
  Cloud,
  Code,
  Eye,
  HandCoins,
  Lock,
  Megaphone,
  MessageCircle,
  Repeat,
  Rocket,
  Search,
  ShieldCheck,
  TabletSmartphone,
  Trophy,
  UserRound,
} from 'lucide-react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';

const Apps = () => {
  const navigate = useNavigate();
  const handleContact = () => {
    navigate('/contact');
    setTimeout(() => {
      window.scrollTo(0, 0);
    }, 10);
  };

  const features = [
    {
      icon: Megaphone,
      title: 'Direct Audience Connection',
      description: 'Engage users directly through their most personal device.',
    },
    {
      icon: UserRound,
      title: 'Enhanced User Experience',
      description: 'Offer tailored features and seamless interactions.',
    },
    {
      icon: HandCoins,
      title: 'New Revenue Streams',
      description:
        'Unlock opportunities for in-app purchases, subscriptions, or service delivery.',
    },
    {
      icon: Trophy,
      title: 'Competitive Advantage',
      description: 'Stand out in your market with a dedicated mobile presence.',
    },
    {
      icon: Eye,
      title: 'Increased Brand Visibility',
      description:
        'Gain exposure through app store listings and user downloads.',
    },
  ];

  const keyFeatures = [
    {
      icon: 'apple.png',
      title: 'Native iOS App Development',
      isImage: true,
    },
    {
      icon: 'android.png',
      title: 'Native Android App Development',
      isImage: true,
    },
    {
      icon: TabletSmartphone,
      title: 'Cross-Platform Development (e.g., React Native, Flutter)',
      isImage: false,
    },
    {
      icon: Cloud,
      title: 'Backend Development & API Integration',
      isImage: false,
    },
    {
      icon: MessageCircle,
      title: 'Push Notifications & In-App Messaging',
      isImage: false,
    },
    {
      icon: CircleDollarSign,
      title: 'In-App Purchases & Subscriptions',
      isImage: false,
    },
    {
      icon: Lock,
      title: 'Robust Security & Data Encryption',
      isImage: false,
    },
    {
      icon: 'app-store.png',
      title: 'App Store Optimization (ASO) Guidance',
      isImage: true,
    },
  ];

  return (
    <div className='pt-16'>
      <section id='Hero' className='relative w-full text-center'>
        <div className='h-50 lg:h-70'>
          <img
            src='app-dev.jpg'
            alt='Mobile App Development'
            className='relative w-full h-full object-cover'
          />
        </div>
        <div className='absolute bg-black/50 h-full top-0 left-1/2 w-full -translate-x-1/2 justify-center items-center text-start flex flex-col'>
          <div className='max-w-7xl p-4'>
            <h1 className='relative z-50 text-2xl sm:text-3xl lg:text-5xl font-bold font-[poppins]'>
              Engage On-The-Go:{' '}
              <span className='text-primary'>
                Intuitive Mobile App Development
              </span>
            </h1>
            <button
              onClick={() => handleContact()}
              className='sm:w-md mt-4 btn border-none rounded-full bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 text-white font-medium shadow-lg hover:shadow-xl font-[poppins]'
            >
              Launch Your App Idea
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
            PixelsPulse designs and develops high-performance mobile
            applications that deliver exceptional user experiences. Whether you
            need a native app for iOS or Android, or a cross-platform solution
            to reach a wider audience efficiently, we've got you covered. Our
            full-cycle development process ensures your app is not only
            functional and secure but also intuitive and engaging, from concept
            to deployment in the app stores.
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
            Our mobile app development process is designed for success:
          </p>
          <div>
            <motion.div
              initial={{ opacity: 0.2, scale: 0.9 }}
              viewport={{ once: true, amount: 0.5 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
            >
              <div className='flex space-x-2 items-center'>
                <Search className='stroke-accent size-8' />
                <h1 className='font-semibold font-[poppins] text-lg'>
                  Discovery & Strategy
                </h1>
              </div>
              <p className='ml-10 font-[montserrat] text-gray-300'>
                Defining app goals, target audience, and feature set.
              </p>
            </motion.div>
            <div className='ml-3 bg-gray-500 h-10 w-0.5 rounded-full'></div>

            <motion.div
              initial={{ opacity: 0.2, scale: 0.9 }}
              viewport={{ once: true, amount: 0.5 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
            >
              <div className='mt-4'>
                <div className='flex space-x-2 items-center'>
                  <Brush className='stroke-accent size-8' />
                  <h1 className='font-semibold font-[poppins] text-lg'>
                    UI/UX Design
                  </h1>
                </div>
                <p className='ml-10 font-[montserrat] text-gray-300'>
                  Crafting intuitive interfaces and seamless user flows.
                </p>
              </div>
            </motion.div>
            <div className='ml-3 bg-gray-500 h-10 w-0.5 rounded-full'></div>

            <motion.div
              initial={{ opacity: 0.2, scale: 0.9 }}
              viewport={{ once: true, amount: 0.5 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
            >
              <div className='mt-4'>
                <div className='flex space-x-2 items-center'>
                  <Code className='stroke-accent size-8' />
                  <h1 className='font-semibold font-[poppins] text-lg'>
                    Development & Coding
                  </h1>
                </div>
                <p className='ml-10 font-[montserrat] text-gray-300'>
                  Building the app with robust and scalable code.
                </p>
              </div>
            </motion.div>
            <div className='ml-3 bg-gray-500 h-10 w-0.5 rounded-full'></div>

            <motion.div
              initial={{ opacity: 0.2, scale: 0.9 }}
              viewport={{ once: true, amount: 0.5 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
            >
              <div className='mt-4'>
                <div className='flex space-x-2 items-center'>
                  <ShieldCheck className='stroke-accent size-8' />
                  <h1 className='font-semibold font-[poppins] text-lg'>
                    Testing & Quality Assurance
                  </h1>
                </div>
                <p className='ml-10 font-[montserrat] text-gray-300'>
                  Rigorous testing across devices and scenarios.
                </p>
              </div>
            </motion.div>
            <div className='ml-3 bg-gray-500 h-10 w-0.5 rounded-full'></div>

            <motion.div
              initial={{ opacity: 0.2, scale: 0.9 }}
              viewport={{ once: true, amount: 0.5 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
            >
              <div className='mt-4'>
                <div className='flex space-x-2 items-center'>
                  <Rocket className='stroke-accent size-8' />
                  <h1 className='font-semibold font-[poppins] text-lg'>
                    App Store Submission
                  </h1>
                </div>
                <p className='ml-10 font-[montserrat] text-gray-300'>
                  Guiding you through the launch process.
                </p>
              </div>
            </motion.div>
            <div className='ml-3 bg-gray-500 h-10 w-0.5 rounded-full'></div>

            <motion.div
              initial={{ opacity: 0.2, scale: 0.9 }}
              viewport={{ once: true, amount: 0.5 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
            >
              <div className='mt-4'>
                <div className='flex space-x-2 items-center'>
                  <Repeat className='stroke-accent size-8' />
                  <h1 className='font-semibold font-[poppins] text-lg'>
                    Post-Launch Support
                  </h1>
                </div>
                <p className='ml-10 font-[montserrat] text-gray-300'>
                  Ongoing assistance and maintenance.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <section className='w-full flex items-center justify-center px-4'>
        <div className='max-w-7xl w-full py-4 space-y-4'>
          <h1 className='text-2xl sm:text-3xl font-medium font-[poppins] text-primary'>
            Key Features & Deliverables
          </h1>
          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>
            {keyFeatures.map(({ icon, title, isImage }, i) => (
              <motion.div
                key={i}
                className='bg-gradient-to-br from-primary/10 to-accent/10 p-4 rounded-xl flex items-center space-x-4'
                initial={{ opacity: 0.2, scale: 0.9 }}
                viewport={{ once: true, amount: 0.5 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
                whileHover={{ scale: 1.03 }}
              >
                {isImage ? (
                  <img src={icon} className='size-8' alt='' />
                ) : (
                  React.createElement(icon, {
                    className: 'size-8 stroke-accent',
                  })
                )}
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
            Have an <span className='text-primary'>App Idea?</span>
          </h2>
          <p className="text-lg mb-8 max-w-2xl mx-auto font-['montserrat']">
            Let's bring it to life and make an impact.
          </p>
          <button
            onClick={() => handleContact()}
            className='px-8 py-3 rounded-full bg-gradient-to-r from-accent to-pink-400 hover:from-accent-100 hover:to-pink-300 transition-all duration-300 text-white font-medium'
          >
            Request an App Consultation
          </button>
        </motion.div>
      </section>
    </div>
  );
};

export default Apps;
