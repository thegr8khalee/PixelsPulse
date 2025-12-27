import React from 'react';
import {
  Shield,
  Clock,
  CalendarCheck,
  Smile,
  Check,
  CalendarSync,
  Code2,
  Search,
  ListCheck,
  Headset,
  CloudUpload,
  ShieldCheck,
  Bug,
  MessageSquare,
} from 'lucide-react';
// eslint-disable-next-line no-unused-vars
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { usePageLoader } from '../hooks/usePageLoader';

const Maintenance = () => {
  usePageLoader(['support.webp']);
  const navigate = useNavigate();
  const handleContact = () => {
    navigate('/contact');
    setTimeout(() => {
      window.scrollTo(0, 0);
    }, 10);
  };

  // Content for the "Why It Matters" section
  const features = [
    {
      icon: Shield,
      title: 'Enhanced Security',
      description:
        'Protect your site from vulnerabilities, malware, and cyber threats.',
    },
    {
      icon: Clock,
      title: 'Guaranteed Uptime',
      description:
        'Minimize downtime and ensure your site is always accessible to visitors.',
    },
    {
      icon: CalendarCheck,
      title: 'Up-to-Date Functionality',
      description:
        'Keep your software, plugins, and themes current for optimal performance.',
    },
    {
      icon: Smile,
      title: 'Peace of Mind',
      description: 'Reduce stress knowing your website is in expert hands.',
    },
    {
      icon: Check,
      title: 'Proactive Issue Resolution',
      description: 'Identify and fix problems before they impact your users.',
    },
    {
      icon: ListCheck, // Using ListCheck for something general/preventative
      title: 'System Health Checks',
      description: 'Routine checks ensure all systems are running smoothly.',
    },
  ];

  // Content for the "Our Process" section
  const processSteps = [
    {
      icon: CalendarSync,
      title: 'Regular Scheduled Backups',
      description: 'Ensuring your data is always safe and recoverable.',
    },
    {
      icon: Code2,
      title: 'Software & Plugin Updates',
      description: 'Keeping your platform and extensions current.',
    },
    {
      icon: Search,
      title: 'Security Monitoring & Scans',
      description: 'Proactively detecting and mitigating threats.',
    },
    {
      icon: ListCheck,
      title: 'Performance Checks',
      description: 'Ongoing monitoring to ensure optimal speed and responsiveness.',
    },
    {
      icon: Headset,
      title: 'Emergency Support',
      description: 'Rapid response to critical issues.',
    },
  ];

  // Content for the "Key Features & Deliverables" section
  const keyFeatures = [
    {
      icon: CalendarSync,
      title: 'Regular Software & Plugin Updates',
    },
    {
      icon: CloudUpload,
      title: 'Daily/Weekly Database & File Backups',
    },
    {
      icon: ShieldCheck,
      title: 'Robust Security Monitoring & Malware Removal',
    },
    {
      icon: Clock,
      title: '24/7 Uptime Monitoring',
    },
    {
      icon: ListCheck,
      title: 'Performance Checks & Optimizations',
    },
    {
      icon: Bug,
      title: 'Bug Fixes & Troubleshooting',
    },
    {
      icon: CloudUpload,
      title: 'Content Updates (based on plan tier)',
    },
    {
      icon: MessageSquare,
      title: 'Dedicated Support Channels (email, phone, ticketing system)',
    },
  ];

  return (
    <div className='pt-16'>
      <section id='Hero' className='relative w-full text-center'>
        <div className='h-50 lg:h-70'>
          <img
            src='support.webp' // Original image source
            alt='Website Maintenance'
            className='relative w-full h-full object-cover'
          />
        </div>
        <div className=' absolute bg-black/70 h-full top-0 left-1/2 w-full -translate-x-1/2 justify-center items-center text-start flex flex-col'>
          <div className='max-w-7xl p-4'>
            <h1 className='relative z-50 text-2xl sm:text-3xl lg:text-5xl font-[poppins]'>
              Peace of Mind:
              <span className='text-primary'>
                {' '}
                Reliable Website Maintenance & Support
              </span>
            </h1>
            <button
              onClick={() => handleContact()}
              className='sm:w-md mt-4 btn border-none rounded-full bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 text-white font-medium  shadow-lg hover:shadow-xl font-[poppins]'
            >
              Secure Your Website
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
            Your website is a critical business asset that requires ongoing care
            to remain **secure, functional, and effective**. PixelsPulse offers
            comprehensive website maintenance and support services designed to
            give you peace of mind. We proactively manage updates, monitor
            security, perform backups, and provide timely support, ensuring your
            digital heartbeat remains strong and steady, allowing you to focus
            on what you do best.
          </p>

          {/* Why It Matters Section - Using map like in Performance component */}
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
                {/* Style from Performance component */}
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

          {/* Our Process Section - Using map and fragments for the timeline effect */}
          <h1 className='text-2xl sm:text-3xl font-medium font-[poppins] text-primary'>
            Our Process
          </h1>
          <p className='font-[poppins]'>
            Our maintenance and support plans are structured for consistency and
            reliability:
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
                {/* Vertical line connector from the Performance component's process section */}
                {i < processSteps.length - 1 && (
                  <div className='ml-3 bg-gray-500 h-10 w-0.5 rounded-full'></div>
                )}
              </React.Fragment>
            ))}
          </div>
        </div>
      </section>

      {/* Key Features & Deliverables Section - Using map like in Performance component */}
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
                whileHover={{ scale: 1.03 }} // Added hover effect from Performance component
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

      {/* Call to Action Section - Using the style from the Performance component */}
      <section className='py-20 px-4 sm:px-6 lg:px-8'>
        <motion.div
          className='max-w-4xl mx-auto text-center'
          initial={{ opacity: 0.2, scale: 0.9 }}
          viewport={{ once: false, amount: 0.5 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
        >
          <h2 className="text-3xl sm:text-6xl md:text-6xl lg:text-6xl mb-6 font-['poppins'] font-medium">
            Don't Let Your Website
            <span className='text-primary'> Lag.</span>
          </h2>
          <p className="text-lg mb-8 max-w-2xl mx-auto font-['montserrat']">
            Secure a maintenance plan that keeps your digital heartbeat strong.
          </p>
          <button
            onClick={() => handleContact()}
            className='px-8 py-3 rounded-full bg-gradient-to-r from-accent to-pink-400 hover:from-accent-100 hover:to-pink-300 transition-all duration-300 text-white font-medium'
          >
            Get a Quote Now
          </button>
        </motion.div>
      </section>
    </div>
  );
};

export default Maintenance;