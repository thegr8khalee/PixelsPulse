import React from 'react';
import { BackgroundGradientAnimation } from '../components/bg';
import {
  BookImage,
  BookOpen,
  Brush,
  Bug,
  ChartBarIncreasing,
  ChartNoAxesGantt,
  ChartSpline,
  Circle,
  CircleGauge,
  ClockFading,
  Cloud,
  CloudCog,
  Code,
  Coins,
  Database,
  Ellipsis,
  Eye,
  Globe,
  HandshakeIcon,
  Heart,
  Hexagon,
  Hourglass,
  IdCard,
  Image,
  LayoutDashboard,
  Magnet,
  MessageSquareHeart,
  MonitorSmartphone,
  Paintbrush,
  Pen,
  PersonStanding,
  Plus,
  Repeat,
  Rocket,
  Search,
  Settings2Icon,
  ShieldCheck,
  TableOfContents,
  UserRound,
  Wrench,
} from 'lucide-react';
// eslint-disable-next-line no-unused-vars
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';

const Performance = () => {
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
            src='performance1.jpg'
            alt='Web Development'
            className='relative w-full h-full object-cover'
          />
        </div>
        <div className=' absolute bg-black/50 h-full top-0 left-1/2 w-full -translate-x-1/2 justify-center items-center text-start flex flex-col'>
          <div className='max-w-7xl p-4'>
            <h1 className='relative z-50 text-2xl sm:text-3xl lg:text-5xl font-bold font-[poppins]'>
              Unleash Full Potential:
              <span className='text-primary'>
                Website Performance Optimization
              </span>
            </h1>
            <button onClick={() => handleContact()} className='sm:w-md mt-4 btn border-none rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 text-white font-medium  shadow-lg hover:shadow-xl font-[poppins]'>
              Optimize Your Site Now
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
            In today's fast-paced digital world, speed is paramount. A slow
            website frustrates users, hurts your search engine rankings, and
            costs you conversions. PixelsPulse offers comprehensive website
            performance optimization services designed to supercharge your
            site's speed and efficiency. We dive deep into your code, images,
            server configurations, and more to identify bottlenecks and
            implement solutions that deliver tangible results.
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
                <UserRound className='size-8 stroke-accent' />
                <h1 className='font-semibold font-[poppins] text-lg'>
                  Improved User Satisfaction
                </h1>
              </div>
              <p className='font-[montserrat] text-gray-300 mt-2'>
                Faster loading times mean happier visitors and lower bounce
                rates.
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
                <CloudCog className='size-8 stroke-accent' />
                <h1 className='font-semibold font-[poppins] text-lg'>
                  Higher SEO Rankings
                </h1>
              </div>
              <p className='font-[montserrat] text-gray-300 mt-2'>
                Search engines like Google prioritize fast-loading websites.
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
                  Increased Conversion Rates
                </h1>
              </div>
              <p className='font-[montserrat] text-gray-300 mt-2'>
                A smooth experience encourages users to complete desired
                actions.
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
                <PersonStanding className='size-8 stroke-accent' />
                <h1 className='font-semibold font-[poppins] text-lg'>
                  Better Accessibility
                </h1>
              </div>
              <p className='font-[montserrat] text-gray-300 mt-2'>
                Ensures your site is usable for everyone, even on slower
                connections.
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
                <Coins className='size-8 stroke-accent' />
                <h1 className='font-semibold font-[poppins] text-lg'>
                  Reduced Hosting Costs
                </h1>
              </div>
              <p className='font-[montserrat] text-gray-300 mt-2'>
                Optimized sites can sometimes require less server resources.
              </p>
              {/* </div> */}
            </motion.div>
          </div>
          <h1 className='text-2xl sm:text-3xl font-bold font-[poppins] text-primary'>
            Our Process
          </h1>
          <p className='font-[poppins]'>
            Our methodical approach to performance optimization includes:
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
                <CircleGauge className='stroke-accent size-8' />
                <h1 className='font-semibold font-[poppins] text-lg'>
                  Performance Audit
                </h1>
              </div>
              <p className='ml-10 font-[montserrat] text-gray-300'>
               Comprehensive analysis using tools like Google PageSpeed Insights and Lighthouse.
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
                  <Bug className='stroke-accent size-8' />
                  <h1 className='font-semibold font-[poppins] text-lg'>
                    Issue Identification
                  </h1>
                </div>
                <p className='ml-10 font-[montserrat] text-gray-300'>
                  Pinpointing specific areas causing slowdowns (e.g., large images, inefficient code).
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
                  <ChartNoAxesGantt className='stroke-accent size-8' />
                  <h1 className='font-semibold font-[poppins] text-lg'>
                    Strategy Development
                  </h1>
                </div>
                <p className='ml-10 font-[montserrat] text-gray-300'>
                  Creating a tailored plan for optimization.
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
                  <Plus className='stroke-accent size-8' />
                  <h1 className='font-semibold font-[poppins] text-lg'>
                    Implementation & Optimization
                  </h1>
                </div>
                <p className='ml-10 font-[montserrat] text-gray-300'>
                  Applying techniques like code minification, image compression, and caching.
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
                    Testing & Monitoring
                  </h1>
                </div>
                <p className='ml-10 font-[montserrat] text-gray-300'>
                  Verifying improvements and setting up ongoing performance tracking.
                </p>
              </div>
            </motion.div>
            {/* <div className='ml-3 bg-gray-500 h-10 w-0.5 rounded-full'></div> */}
            {/* <motion.div
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
            </motion.div> */}
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
                <Code className='size-8 stroke-accent' />
                <h1 className='font-semibold font-[poppins] text-lg'>
                  Code Minification (HTML, CSS, JavaScript)
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
                <Image className='size-8 stroke-accent' />
                <h1 className='font-semibold font-[poppins] text-lg'>
                  Image Optimization (compression, lazy loading, next-gen formats)
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
                <Globe className='size-8 stroke-accent' />
                <h1 className='font-semibold font-[poppins] text-lg'>
                  Browser Caching Configuration
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
                <Hourglass className='size-8 stroke-accent' />
                <h1 className='font-semibold font-[poppins] text-lg'>
                  Server Response Time Improvement
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
                <Database className='size-8 stroke-accent' />
                <h1 className='font-semibold font-[poppins] text-lg'>
                  Database Optimization
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
                <Cloud className='size-8 stroke-accent' />
                <h1 className='font-semibold font-[poppins] text-lg'>
                  Content Delivery Network (CDN) Integration
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
                <ChartBarIncreasing className='size-8 stroke-accent' />
                <h1 className='font-semibold font-[poppins] text-lg'>
                  Core Web Vitals Improvement
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
                <Wrench className='size-8 stroke-accent' />
                <h1 className='font-semibold font-[poppins] text-lg'>
                  Performance Monitoring Tools Setup & Reporting
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
            Is Your Site
            <span className='text-primary'>Fast Enough?</span>
          </h2>
          <p className="text-lg mb-8 max-w-2xl mx-auto font-['montserrat']">
            Let's find out and unlock its full potential.
          </p>
          <button onClick={() => handleContact()} className='px-8 py-3 rounded-lg bg-gradient-to-r from-accent to-pink-400 hover:from-accent-100 hover:to-pink-300 transition-all duration-300 text-white font-medium'>
            Get a Free Performance Audit
          </button>
        </motion.div>
      </section>
    </div>
  );
};

export default Performance;
