import React from 'react';
import { BackgroundGradientAnimation } from '../components/bg';
import {
  Brush,
  ChartSpline,
  ClockFading,
  CloudCog,
  Code,
  Database,
  Eye,
  Globe,
  Heart,
  MonitorSmartphone,
  Repeat,
  Rocket,
  Search,
  Settings2Icon,
  ShieldCheck,
  TableOfContents,
  UserRound,
} from 'lucide-react';
// eslint-disable-next-line no-unused-vars
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';

const Web = () => {
    const navigate = useNavigate();
  const handleContact = () => {
    navigate('/contact');
    setTimeout(() => {
      window.scrollTo(0, 0);
    }, 10);
  };
  return (
    <div className='pt-16'>
      <section id='Hero' className='relative w-full text-center'>
        <div className='h-50 lg:h-70'>
          <img
            src='webdev.jpg'
            alt='Web Development'
            className='relative w-full h-full object-cover'
          />
        </div>
        <div className=' absolute bg-black/50 h-full top-0 left-1/2 w-full -translate-x-1/2 justify-center items-center text-start flex flex-col'>
          <div className='max-w-7xl p-4'>
            <h1 className='relative z-50 text-2xl sm:text-3xl lg:text-5xl font-bold font-[poppins]'>
              Building Your Digital Foundation:
              <span className='text-primary'>Custom Web Development</span>
            </h1>
            <button onClick={() => handleContact()} className='sm:w-md mt-4 btn border-none rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 text-white font-medium  shadow-lg hover:shadow-xl font-[poppins]'>
              Let's Build Your Vision
            </button>
          </div>
        </div>
      </section>
      <section className='w-full flex items-center justify-center px-4'>
        <div className='max-w-7xl py-4 space-y-4'>
          <h1 className='text-2xl sm:text-3xl font-bold font-[poppins] text-primary'>
            What We Do
          </h1>
          <p className='font-[poppins]'>
            At PixelsPulse, we specialize in creating dynamic and functional
            websites that serve as the cornerstone of your online strategy.
            Whether you need a compelling corporate website, a sophisticated web
            application, or an interactive platform, our team leverages modern
            technologies and best practices to deliver solutions that are not
            only visually appealing but also perform exceptionally. We focus on
            clean code, responsive design, and seamless user experiences across
            all devices.
          </p>
          <h1 className='text-2xl sm:text-3xl font-bold font-[poppins] text-primary'>
            Why It Matters
          </h1>
          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>
            <motion.div
              className='bg-base-200 p-4 rounded-xl'
              initial={{
                opacity: 0.2,
                scale: 0.9,
              }}
              viewport={{ once: true, amount: 0.5 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
            >
              {/* <div className='bg-base-200 p-4 rounded-xl'> */}
              <div className='flex space-x-2 items-center'>
                <Heart className='size-8 stroke-accent'></Heart>
                <h1 className='font-semibold font-[poppins] text-lg'>
                  Increased Online Presence
                </h1>
              </div>
              <p className='font-[montserrat] text-gray-300 mt-2'>
                Establish a professional and credible digital footprint.
              </p>
              {/* </div> */}
            </motion.div>
            <motion.div
              className='bg-base-200 p-4 rounded-xl'
              initial={{
                opacity: 0.2,
                scale: 0.9,
              }}
              viewport={{ once: true, amount: 0.5 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
            >
              <div className='flex space-x-2 items-center'>
                <UserRound className='size-8 stroke-accent' />
                <h1 className='font-semibold font-[poppins] text-lg'>
                  Enhanced User Experience
                </h1>
              </div>
              <p className='font-[montserrat] text-gray-300 mt-2'>
                Keep visitors engaged with intuitive navigation and fast loading
                times.
              </p>
            </motion.div>
            <motion.div
              className='bg-base-200 p-4 rounded-xl'
              initial={{
                opacity: 0.2,
                scale: 0.9,
              }}
              viewport={{ once: true, amount: 0.5 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
            >
              {/* <div className='bg-base-200 p-4 rounded-xl'> */}
              <div className='flex space-x-2 items-center'>
                <ChartSpline className='size-8 stroke-accent' />
                <h1 className='font-semibold font-[poppins] text-lg'>
                  Scalability for Growth
                </h1>
              </div>
              <p className='font-[montserrat] text-gray-300 mt-2'>
                Build a foundation that can evolve with your business needs.
              </p>
              {/* </div> */}
            </motion.div>
            <motion.div
              className='bg-base-200 p-4 rounded-xl'
              initial={{
                opacity: 0.2,
                scale: 0.9,
              }}
              viewport={{ once: true, amount: 0.5 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
            >
              {/* <div className='bg-base-200 p-4 rounded-xl'> */}
              <div className='flex space-x-2 items-center'>
                <Eye className='size-8 stroke-accent' />
                <h1 className='font-semibold font-[poppins] text-lg'>
                  Stronger Brand Identity
                </h1>
              </div>
              <p className='font-[montserrat] text-gray-300 mt-2'>
                Reflect your brand's unique personality and values online.
              </p>
              {/* </div> */}
            </motion.div>
            <motion.div
              className='bg-base-200 p-4 rounded-xl'
              initial={{
                opacity: 0.2,
                scale: 0.9,
              }}
              viewport={{ once: true, amount: 0.5 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
            >
              {/* <div className='bg-base-200 p-4 rounded-xl'> */}
              <div className='flex space-x-2 items-center'>
                <ClockFading className='size-8 stroke-accent' />
                <h1 className='font-semibold font-[poppins] text-lg'>
                  Operational Efficiency
                </h1>
              </div>
              <p className='font-[montserrat] text-gray-300 mt-2'>
                Streamline processes with custom functionalities and
                integrations.
              </p>
              {/* </div> */}
            </motion.div>
          </div>
          <h1 className='text-2xl sm:text-3xl font-bold font-[poppins] text-primary'>
            Our Process
          </h1>
          <p className='font-[poppins]'>
            Our web development journey is collaborative and transparent:
          </p>
          <div className=''>
            <motion.div
              initial={{
                opacity: 0.2,
                scale: 0.9,
              }}
              viewport={{ once: true, amount: 0.5 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
            >
              <div className='flex space-x-2 items-center'>
                <Search className='stroke-accent size-8' />
                <h1 className='font-semibold font-[poppins] text-lg'>
                  Discovery & Planning
                </h1>
              </div>
              <p className='ml-10 font-[montserrat] text-gray-300'>
                Understanding your goals, audience, and technical requirements.
              </p>
              {/* </div> */}
            </motion.div>
            <div className='ml-3 bg-gray-500 h-10 w-0.5 rounded-full'></div>
            <motion.div
              initial={{
                opacity: 0.2,
                scale: 0.9,
              }}
              viewport={{ once: true, amount: 0.5 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
            >
              <div className='mt-4'>
                <div className='flex space-x-2 items-center'>
                  <Brush className='stroke-accent size-8' />
                  <h1 className='font-semibold font-[poppins] text-lg'>
                    Design & Prototyping
                  </h1>
                </div>
                <p className='ml-10 font-[montserrat] text-gray-300'>
                  Creating wireframes, mockups, and interactive prototypes.
                </p>
              </div>
            </motion.div>
            <div className='ml-3 bg-gray-500 h-10 w-0.5 rounded-full'></div>
            <motion.div
              initial={{
                opacity: 0.2,
                scale: 0.9,
              }}
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
                  Bringing the design to life with clean, efficient code.
                </p>
              </div>
            </motion.div>
            <div className='ml-3 bg-gray-500 h-10 w-0.5 rounded-full'></div>
            <motion.div
              initial={{
                opacity: 0.2,
                scale: 0.9,
              }}
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
                  Rigorous testing to ensure functionality, performance, and
                  security.
                </p>
              </div>
            </motion.div>
            <div className='ml-3 bg-gray-500 h-10 w-0.5 rounded-full'></div>
            <motion.div
              initial={{
                opacity: 0.2,
                scale: 0.9,
              }}
              viewport={{ once: true, amount: 0.5 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
            >
              <div className='mt-4'>
                <div className='flex space-x-2 items-center'>
                  <Rocket className='stroke-accent size-8' />
                  <h1 className='font-semibold font-[poppins] text-lg'>
                    Launch & Deployment
                  </h1>
                </div>
                <p className='ml-10 font-[montserrat] text-gray-300'>
                  Seamlessly bringing your website online.
                </p>
              </div>
            </motion.div>
            <div className='ml-3 bg-gray-500 h-10 w-0.5 rounded-full'></div>
            <motion.div
              initial={{
                opacity: 0.2,
                scale: 0.9,
              }}
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
          <h1 className='text-2xl sm:text-3xl font-bold font-[poppins] text-primary'>
            Key Features & Deliverables
          </h1>
          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>
            <motion.div
              className='bg-base-200 p-4 rounded-xl'
              initial={{
                opacity: 0.2,
                scale: 0.9,
              }}
              viewport={{ once: true, amount: 0.5 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
            >
              {/* <div className='bg-base-200 p-4 rounded-xl'> */}
              <div className='flex space-x-4 items-center'>
                <Settings2Icon className='size-8 stroke-accent' />
                <h1 className='font-semibold font-[poppins] text-lg'>
                  Custom Website Design & Development
                </h1>
                {/* </div> */}
              </div>
            </motion.div>
            <motion.div
              className='bg-base-200 p-4 rounded-xl'
              initial={{
                opacity: 0.2,
                scale: 0.9,
              }}
              viewport={{ once: true, amount: 0.5 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
            >
              {/* <div className='bg-base-200 p-4 rounded-xl'> */}
              <div className='flex space-x-4 items-center'>
                <TableOfContents className='size-8 stroke-accent' />
                <h1 className='font-semibold font-[poppins] text-lg'>
                  Content Management System (CMS) Integration
                </h1>
              </div>
              {/* </div> */}
            </motion.div>
            <motion.div
              className='bg-base-200 p-4 rounded-xl'
              initial={{
                opacity: 0.2,
                scale: 0.9,
              }}
              viewport={{ once: true, amount: 0.5 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
            >
              {/* <div className='bg-base-200 p-4 rounded-xl'> */}
              <div className='flex space-x-4 items-center'>
                <MonitorSmartphone className='size-8 stroke-accent' />
                <h1 className='font-semibold font-[poppins] text-lg'>
                  Responsive Design
                </h1>
                {/* </div> */}
              </div>
            </motion.div>
            <motion.div
              className='bg-base-200 p-4 rounded-xl items-center flex'
              initial={{
                opacity: 0.2,
                scale: 0.9,
              }}
              viewport={{ once: true, amount: 0.5 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
            >
              {/* <div className='bg-base-200 p-4 rounded-xl'> */}
              <div className='flex space-x-2 items-center'>
                <Database className='size-8 stroke-accent' />
                <h1 className='font-semibold font-[poppins] text-lg'>
                  Database Design & Integration
                </h1>
                {/* </div> */}
              </div>
            </motion.div>
            <motion.div
              className='bg-base-200 p-4 rounded-xl'
              initial={{
                opacity: 0.2,
                scale: 0.9,
              }}
              viewport={{ once: true, amount: 0.5 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
            >
              {/* <div className='bg-base-200 p-4 rounded-xl'> */}
              <div className='flex space-x-2 items-center'>
                <Globe className='size-8 stroke-accent' />
                <h1 className='font-semibold font-[poppins] text-lg'>
                  Cross-Browser & Device Compatibility
                </h1>
                {/* </div> */}
              </div>
            </motion.div>
            <motion.div
              className='bg-base-200 p-4 rounded-xl'
              initial={{
                opacity: 0.2,
                scale: 0.9,
              }}
              viewport={{ once: true, amount: 0.5 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
            >
              {/* <div className='bg-base-200 p-4 rounded-xl'> */}
              <div className='flex space-x-2 items-center'>
                <CloudCog className='size-8 stroke-accent' />
                <h1 className='font-semibold font-[poppins] text-lg'>
                  SEO-Friendly Structure & Implementation
                </h1>
                {/* </div> */}
              </div>
            </motion.div>
            <motion.div
              className='bg-base-200 p-4 rounded-xl items-center flex'
              initial={{
                opacity: 0.2,
                scale: 0.9,
              }}
              viewport={{ once: true, amount: 0.5 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
            >
              {/* <div className='bg-base-200 p-4 rounded-xl'> */}
              <div className='flex space-x-2 items-center'>
                <ShieldCheck className='size-8 stroke-accent' />
                <h1 className='font-semibold font-[poppins] text-lg'>
                  Secure & Scalable Architecture
                </h1>
                {/* </div> */}
              </div>
            </motion.div>
          </div>
        </div>
      </section>
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
            Ready to Build Your{' '}
            <span className='text-primary'>Dream Website?</span>
          </h2>
          <p className="text-lg mb-8 max-w-2xl mx-auto font-['montserrat']">
            Let's discuss your vision and make it a reality.
          </p>
          <button onClick={() => handleContact()} className='px-8 py-3 rounded-lg bg-gradient-to-r from-accent to-pink-400 hover:from-accent-100 hover:to-pink-300 transition-all duration-300 text-white font-medium'>
            Get a Free Consultation
          </button>
        </motion.div>
      </section>
    </div>
  );
};

export default Web;
