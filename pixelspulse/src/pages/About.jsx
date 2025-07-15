import React from 'react';
import { BackgroundGradientAnimation } from '../components/bg';
// eslint-disable-next-line no-unused-vars
import { motion } from 'framer-motion';
import {
  AppleIcon,
  ArrowUpWideNarrow,
  Brush,
  ChartSpline,
  CircleDollarSign,
  ClockFading,
  Cloud,
  CloudCog,
  Code,
  Coins,
  CoinsIcon,
  Database,
  Eye,
  Globe,
  HandCoins,
  Handshake,
  Heart,
  Lightbulb,
  Lock,
  Megaphone,
  MessageCircle,
  MonitorSmartphone,
  Repeat,
  Rocket,
  Search,
  Settings2Icon,
  ShieldCheck,
  TableOfContents,
  TabletSmartphone,
  ThumbsUp,
  Trophy,
  UserRound,
} from 'lucide-react';

const About = () => {
  return (
    <div>
      <section id='Hero' className='w-full text-center'>
        <BackgroundGradientAnimation className='h-50 justify-center items-center flex flex-col space-y-2'>
          <div className='z-100 text-2xl sm:text-4xl font-bold font-[poppins]'>
            Your Brand's Digital Heartbeat:
            <span className='text-primary'> Our Story, Our Passion</span>
          </div>
          <div className='z-100 text-sm sm:text-base font-[montserrat]'>
            "We Pulse With Code, Design & Vision."
          </div>
        </BackgroundGradientAnimation>
        <div className='w-full text-center items-center justify-center flex py-4'>
          <p className='px-4 font-[poppins] max-w-5xl'>
            We are more than just a web development agency; we are your
            dedicated digital partners. At PixelsPulse, we believe that every
            brand has a unique rhythm, and our mission is to translate that into
            a vibrant, engaging, and effective online presence.
          </p>
        </div>
      </section>
      <section className='w-full flex flex-col justify-center items-center text-center px-4 mt-6 mb-20'>
        <h1 className='text-2xl sm:text-3xl font-bold font-[poppins] text-primary'>
          Our Story & Mission
        </h1>
        <p className='px- mt-2 font-[poppins] max-w-5xl'>
          Founded on the principle that exceptional digital experiences are
          built with passion and precision, PixelsPulse emerged to fill the gap
          between complex technology and compelling design. We are a team driven
          by a love for innovation and a commitment to client success.
          <b className='text-accent'> Our mission is simple:</b> to empower
          businesses and individuals with digital solutions that not only meet
          their immediate needs but also position them for long-term growth and
          impact. We thrive on transforming your ideas into powerful digital
          assets that truly resonate with your audience.
        </p>
        <h1 className='text-2xl mt-6 sm:text-3xl font-bold font-[poppins] text-primary'>
          Our Unique Approach
        </h1>
        <p className='px- mt-2 font-[poppins] max-w-5xl'>
          We combine creativity with strategic thinking, ensuring that every
          pixel and every line of code serves a purpose. Our approach is
          collaborative, transparent, and client-focused. We listen intently,
          strategize thoughtfully, and execute flawlessly, always keeping your
          business objectives at the forefront. We're not just building
          websites; we're building relationships and digital legacies.
        </p>
        <h1 className='text-2xl my-6 sm:text-3xl font-bold font-[poppins] text-primary'>
          Our Values
        </h1>
        <div className='grid grid-cols-1 w-full md:grid-cols-2 lg:grid-cols-3 gap-4 text-start'>
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
              <Lightbulb className='size-8 stroke-accent' />
              <h1 className='font-semibold font-[poppins] text-lg'>
                Innovation
              </h1>
            </div>
            <p className='font-[montserrat] text-gray-300 mt-2'>
              Embracing new technologies and creative solutions.
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
              <ThumbsUp className='size-8 stroke-accent' />
              <h1 className='font-semibold font-[poppins] text-lg'>Quality</h1>
            </div>
            <p className='font-[montserrat] text-gray-300 mt-2'>
              Delivering robust, reliable, and beautiful digital products.
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
              <Handshake className='size-8 stroke-accent' />
              <h1 className='font-semibold font-[poppins] text-lg'>
                Collaboration
              </h1>
            </div>
            <p className='font-[montserrat] text-gray-300 mt-2'>
              Working closely with clients as true partners.
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
              <Heart className='size-8 stroke-accent' />
              <h1 className='font-semibold font-[poppins] text-lg'>
                Integrity
              </h1>
            </div>
            <p className='font-[montserrat] text-gray-300 mt-2'>
              Operating with honesty, transparency, and respect.
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
              <ArrowUpWideNarrow className='size-8 stroke-accent' />
              <h1 className='font-semibold font-[poppins] text-lg'>Impact</h1>
            </div>
            <p className='font-[montserrat] text-gray-300 mt-2'>
              Focusing on measurable results that drive your success.
            </p>
            {/* </div> */}
          </motion.div>
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
            Ready to feel the pulse of{' '}
            <span className='text-primary'>digital success?</span>
          </h2>
          <p className="text-lg mb-8 max-w-2xl mx-auto font-['montserrat']">
            Let's start a conversation about your next project.
          </p>
          <button className='px-8 py-3 rounded-lg bg-gradient-to-r from-accent to-pink-400 hover:from-accent-100 hover:to-pink-300 transition-all duration-300 text-white font-medium'>
            Contact Us Today
          </button>
        </motion.div>
      </section>
    </div>
  );
};

export default About;
