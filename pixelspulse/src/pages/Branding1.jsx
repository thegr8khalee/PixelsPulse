import React from 'react';
import { BackgroundGradientAnimation } from '../components/bg';
import {
    BookImage,
    BookOpen,
  Brush,
  ChartSpline,
  Circle,
  ClockFading,
  CloudCog,
  Code,
  Database,
  Ellipsis,
  Eye,
  Globe,
  HandshakeIcon,
  Heart,
  Hexagon,
  IdCard,
  LayoutDashboard,
  Magnet,
  MessageSquareHeart,
  MonitorSmartphone,
  Paintbrush,
  Pen,
  Plus,
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

const Branding = () => {
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
            src='brand.jpg'
            alt='Web Development'
            className='relative w-full h-full object-cover'
          />
        </div>
        <div className=' absolute bg-black/50 h-full top-0 left-1/2 w-full -translate-x-1/2 justify-center items-center text-start flex flex-col'>
          <div className='max-w-7xl p-4'>
            <h1 className='relative z-50 text-2xl sm:text-3xl lg:text-5xl font-bold font-[poppins]'>
              Crafting Identity:
              <span className='text-primary'>
                Powerful Branding & Graphic Design
              </span>
            </h1>
            <button onClick={() => handleContact()} className='sm:w-md mt-4 btn border-none rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 text-white font-medium  shadow-lg hover:shadow-xl font-[poppins]'>
              Define Your Brand
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
            Your brand is more than just a logo; it's the essence of your
            business. At PixelsPulse, we specialize in creating cohesive and
            compelling brand identities that resonate with your target audience.
            Our graphic design services extend beyond branding to include all
            the visual assets you need to communicate effectively, from
            marketing collateral to digital graphics, ensuring consistency and
            impact across all touchpoints.
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
                <Eye className='size-8 stroke-accent'/>
                <h1 className='font-semibold font-[poppins] text-lg'>
                  Strong Brand Recognition
                </h1>
              </div>
              <p className='font-[montserrat] text-gray-300 mt-2'>
                Make your brand instantly identifiable and memorable.
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
                <HandshakeIcon className='size-8 stroke-accent' />
                <h1 className='font-semibold font-[poppins] text-lg'>
                  Increased Trust & Credibility
                </h1>
              </div>
              <p className='font-[montserrat] text-gray-300 mt-2'>
                A professional brand instills confidence in your audience.
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
                  Market Differentiation
                </h1>
              </div>
              <p className='font-[montserrat] text-gray-300 mt-2'>
                Stand out from competitors with a unique visual voice.
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
                <Ellipsis className='size-8 stroke-accent' />
                <h1 className='font-semibold font-[poppins] text-lg'>
                  Consistency Across Channels
                </h1>
              </div>
              <p className='font-[montserrat] text-gray-300 mt-2'>
                Ensure a unified brand message everywhere you appear.
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
                <Magnet className='size-8 stroke-accent' />
                <h1 className='font-semibold font-[poppins] text-lg'>
                  Attract Ideal Clients
                </h1>
              </div>
              <p className='font-[montserrat] text-gray-300 mt-2'>
                Visually communicate your values to attract the right audience.
              </p>
              {/* </div> */}
            </motion.div>
          </div>
          <h1 className='text-2xl sm:text-3xl font-bold font-[poppins] text-primary'>
            Our Process
          </h1>
          <p className='font-[poppins]'>
            Our branding and graphic design process is strategic and creative:
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
                  Brand Discovery
                </h1>
              </div>
              <p className='ml-10 font-[montserrat] text-gray-300'>
                Deep dive into your vision, values, and target audience.
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
                  <Pen className='stroke-accent size-8' />
                  <h1 className='font-semibold font-[poppins] text-lg'>
                    Concept Development
                  </h1>
                </div>
                <p className='ml-10 font-[montserrat] text-gray-300'>
                  Brainstorming and sketching initial design directions.
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
                  <Brush className='stroke-accent size-8' />
                  <h1 className='font-semibold font-[poppins] text-lg'>
                    Design & Iteration
                  </h1>
                </div>
                <p className='ml-10 font-[montserrat] text-gray-300'>
                  Developing logos, color palettes, and typography, with client
                  feedback.
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
                  <BookOpen className='stroke-accent size-8' />
                  <h1 className='font-semibold font-[poppins] text-lg'>
                    Brand Guideline Creation
                  </h1>
                </div>
                <p className='ml-10 font-[montserrat] text-gray-300'>
                  Documenting your brand's visual rules for consistent
                  application.
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
                    Application Across Collateral
                  </h1>
                </div>
                <p className='ml-10 font-[montserrat] text-gray-300'>
                  Designing various marketing materials.
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
                <Hexagon className='size-8 stroke-accent' />
                <h1 className='font-semibold font-[poppins] text-lg'>
                  Logo Design & Brandmark Development
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
                <Paintbrush className='size-8 stroke-accent' />
                <h1 className='font-semibold font-[poppins] text-lg'>
                  Comprehensive Brand Identity (color palettes, typography,
                  imagery style)
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
                <BookOpen className='size-8 stroke-accent' />
                <h1 className='font-semibold font-[poppins] text-lg'>
                  Detailed Brand Style Guides
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
                <IdCard className='size-8 stroke-accent' />
                <h1 className='font-semibold font-[poppins] text-lg'>
                  Business Card & Stationery Design
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
                <BookImage className='size-8 stroke-accent' />
                <h1 className='font-semibold font-[poppins] text-lg'>
                  Brochure & Flyer Design
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
                <MessageSquareHeart className='size-8 stroke-accent' />
                <h1 className='font-semibold font-[poppins] text-lg'>
                  Social Media Graphics & Templates
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
                <LayoutDashboard className='size-8 stroke-accent' />
                <h1 className='font-semibold font-[poppins] text-lg'>
                  Presentation Templates
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
                <Circle className='size-8 stroke-accent' />
                <h1 className='font-semibold font-[poppins] text-lg'>
                  Iconography & Custom Illustrations
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
            Ready to Make Your Brand
            <span className='text-primary'>Stand Out?</span>
          </h2>
          <p className="text-lg mb-8 max-w-2xl mx-auto font-['montserrat']">
            Let's craft an identity that truly captures your essence.
          </p>
          <button onClick={() => handleContact()} className='px-8 py-3 rounded-lg bg-gradient-to-r from-accent to-pink-400 hover:from-accent-100 hover:to-pink-300 transition-all duration-300 text-white font-medium'>
            Get a Branding Quote
          </button>
        </motion.div>
      </section>
    </div>
  );
};

export default Branding;
