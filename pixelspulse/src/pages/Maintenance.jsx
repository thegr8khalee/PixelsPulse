import React from 'react';
import { BackgroundGradientAnimation } from '../components/bg';
import {
  BookImage,
  BookOpen,
  Brush,
  Bug,
  CalendarCheck,
  CalendarSync,
  ChartBarIncreasing,
  ChartNoAxesGantt,
  ChartSpline,
  Check,
  Circle,
  CircleGauge,
  Clock,
  ClockFading,
  Cloud,
  CloudCog,
  CloudUpload,
  Code,
  Code2,
  Coins,
  Database,
  Ellipsis,
  Eye,
  Globe,
  HandshakeIcon,
  Headset,
  Heart,
  Hexagon,
  Hourglass,
  IdCard,
  Image,
  LayoutDashboard,
  ListCheck,
  Magnet,
  MessageSquare,
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
  Shield,
  ShieldCheck,
  ShieldClose,
  Smile,
  TableOfContents,
  UserRound,
  Wrench,
} from 'lucide-react';
// eslint-disable-next-line no-unused-vars
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';

const Maintenance = () => {
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
            src='support.jpg'
            alt='Web Development'
            className='relative w-full h-full object-cover'
          />
        </div>
        <div className=' absolute bg-black/50 h-full top-0 left-1/2 w-full -translate-x-1/2 justify-center items-center text-start flex flex-col'>
          <div className='max-w-7xl p-4'>
            <h1 className='relative z-50 text-2xl sm:text-3xl lg:text-5xl font-bold font-[poppins]'>
              Peace of Mind:
              <span className='text-primary'>
                Reliable Website Maintenance & Support
              </span>
            </h1>
            <button onClick={() => handleContact()} className='sm:w-md mt-4 btn border-none rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 text-white font-medium  shadow-lg hover:shadow-xl font-[poppins]'>
              Secure Your Website
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
            Your website is a critical business asset that requires ongoing care
            to remain secure, functional, and effective. PixelsPulse offers
            comprehensive website maintenance and support services designed to
            give you peace of mind. We proactively manage updates, monitor
            security, perform backups, and provide timely support, ensuring your
            digital heartbeat remains strong and steady, allowing you to focus
            on what you do best.
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
                <Shield className='size-8 stroke-accent' />
                <h1 className='font-semibold font-[poppins] text-lg'>
                  Enhanced Security
                </h1>
              </div>
              <p className='font-[montserrat] text-gray-300 mt-2'>
                Protect your site from vulnerabilities, malware, and cyber
                threats.
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
                <Clock className='size-8 stroke-accent' />
                <h1 className='font-semibold font-[poppins] text-lg'>
                  Guaranteed Uptime
                </h1>
              </div>
              <p className='font-[montserrat] text-gray-300 mt-2'>
                Minimize downtime and ensure your site is always accessible to
                visitors.
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
                <CalendarCheck className='size-8 stroke-accent' />
                <h1 className='font-semibold font-[poppins] text-lg'>
                  Up-to-Date Functionality
                </h1>
              </div>
              <p className='font-[montserrat] text-gray-300 mt-2'>
                Keep your software, plugins, and themes current for optimal
                performance.
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
                <Smile className='size-8 stroke-accent' />
                <h1 className='font-semibold font-[poppins] text-lg'>
                  Peace of Mind
                </h1>
              </div>
              <p className='font-[montserrat] text-gray-300 mt-2'>
                Reduce stress knowing your website is in expert hands.
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
                <Check className='size-8 stroke-accent' />
                <h1 className='font-semibold font-[poppins] text-lg'>
                  Proactive Issue Resolution
                </h1>
              </div>
              <p className='font-[montserrat] text-gray-300 mt-2'>
                Identify and fix problems before they impact your users.
              </p>
              {/* </div> */}
            </motion.div>
          </div>
          <h1 className='text-2xl sm:text-3xl font-bold font-[poppins] text-primary'>
            Our Process
          </h1>
          <p className='font-[poppins]'>
            Our maintenance and support plans are structured for consistency and reliability:
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
                <CalendarSync className='stroke-accent size-8' />
                <h1 className='font-semibold font-[poppins] text-lg'>
                  Regular Scheduled Backups
                </h1>
              </div>
              <p className='ml-10 font-[montserrat] text-gray-300'>
                Ensuring your data is always safe and recoverable.
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
                  <Code2 className='stroke-accent size-8' />
                  <h1 className='font-semibold font-[poppins] text-lg'>
                    Software & Plugin Updates
                  </h1>
                </div>
                <p className='ml-10 font-[montserrat] text-gray-300'>
                  Keeping your platform and extensions current.
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
                  <Search className='stroke-accent size-8' />
                  <h1 className='font-semibold font-[poppins] text-lg'>
                    Security Monitoring & Scans
                  </h1>
                </div>
                <p className='ml-10 font-[montserrat] text-gray-300'>
                  Proactively detecting and mitigating threats.
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
                  <ListCheck className='stroke-accent size-8' />
                  <h1 className='font-semibold font-[poppins] text-lg'>
                    Performance Checks
                  </h1>
                </div>
                <p className='ml-10 font-[montserrat] text-gray-300'>
                 Ongoing monitoring to ensure optimal speed and responsiveness.
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
                  <Headset className='stroke-accent size-8' />
                  <h1 className='font-semibold font-[poppins] text-lg'>
                    Emergency Support
                  </h1>
                </div>
                <p className='ml-10 font-[montserrat] text-gray-300'>
                  Rapid response to critical issues.
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
                <CalendarSync className='size-8 stroke-accent' />
                <h1 className='font-semibold font-[poppins] text-lg'>
                  Regular Software & Plugin Updates
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
                <CloudUpload className='size-8 stroke-accent' />
                <h1 className='font-semibold font-[poppins] text-lg'>
                  Daily/Weekly Database & File Backups
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
                <ShieldCheck className='size-8 stroke-accent' />
                <h1 className='font-semibold font-[poppins] text-lg'>
                  Robust Security Monitoring & Malware Removal
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
                <Clock className='size-8 stroke-accent' />
                <h1 className='font-semibold font-[poppins] text-lg'>
                  24/7 Uptime Monitoring
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
                <ListCheck className='size-8 stroke-accent' />
                <h1 className='font-semibold font-[poppins] text-lg'>
                  Performance Checks & Optimizations
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
                <Bug className='size-8 stroke-accent' />
                <h1 className='font-semibold font-[poppins] text-lg'>
                  Bug Fixes & Troubleshooting
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
                <CloudUpload className='size-8 stroke-accent' />
                <h1 className='font-semibold font-[poppins] text-lg'>
                  Content Updates (based on plan tier)
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
                <MessageSquare className='size-8 stroke-accent' />
                <h1 className='font-semibold font-[poppins] text-lg'>
                  Dedicated Support Channels (email, phone, ticketing system)
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
            Don't Let Your Website
            <span className='text-primary'>Lag.</span>
          </h2>
          <p className="text-lg mb-8 max-w-2xl mx-auto font-['montserrat']">
            Secure a maintenance plan that keeps your digital heartbeat strong.
          </p>
          <button onClick={() => handleContact()} className='px-8 py-3 rounded-lg bg-gradient-to-r from-accent to-pink-400 hover:from-accent-100 hover:to-pink-300 transition-all duration-300 text-white font-medium'>
            Get a Quote Now
          </button>
        </motion.div>
      </section>
    </div>
  );
};

export default Maintenance;
