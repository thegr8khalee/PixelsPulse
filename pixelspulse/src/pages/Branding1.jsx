import React from 'react';
import {
  BookImage,
  BookOpen,
  Brush,
  ChartSpline,
  Circle,
  Ellipsis,
  Eye,
  HandshakeIcon,
  Hexagon,
  IdCard,
  LayoutDashboard,
  Magnet,
  MessageSquareHeart,
  Paintbrush,
  Pen,
  Plus,
  Search,
} from 'lucide-react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { usePageLoader } from '../hooks/usePageLoader';

const Branding = () => {
  usePageLoader(['brand.webp']);
  const navigate = useNavigate();
  const handleContact = () => {
    navigate('/contact');
    setTimeout(() => {
      window.scrollTo(0, 0);
    }, 10);
  };

  const features = [
    {
      icon: Eye,
      title: 'Strong Brand Recognition',
      description: 'Make your brand instantly identifiable and memorable.',
    },
    {
      icon: HandshakeIcon,
      title: 'Increased Trust & Credibility',
      description: 'A professional brand instills confidence in your audience.',
    },
    {
      icon: ChartSpline,
      title: 'Market Differentiation',
      description: 'Stand out from competitors with a unique visual voice.',
    },
    {
      icon: Ellipsis,
      title: 'Consistency Across Channels',
      description: 'Ensure a unified brand message everywhere you appear.',
    },
    {
      icon: Magnet,
      title: 'Attract Ideal Clients',
      description: 'Visually communicate your values to attract the right audience.',
    },
  ];

  const keyFeatures = [
    { icon: Hexagon, title: 'Logo Design & Brandmark Development' },
    { icon: Paintbrush, title: 'Comprehensive Brand Identity (color palettes, typography, imagery style)' },
    { icon: BookOpen, title: 'Detailed Brand Style Guides' },
    { icon: IdCard, title: 'Business Card & Stationery Design' },
    { icon: BookImage, title: 'Brochure & Flyer Design' },
    { icon: MessageSquareHeart, title: 'Social Media Graphics & Templates' },
    { icon: LayoutDashboard, title: 'Presentation Templates' },
    { icon: Circle, title: 'Iconography & Custom Illustrations' },
  ];

  return (
    <div className='pt-16'>
      <section id='Hero' className='relative w-full text-center'>
        <div className='h-50 lg:h-70'>
          <img
            src='brand.webp'
            alt='Branding & Graphic Design'
            className='relative w-full h-full object-cover'
          />
        </div>
        <div className='absolute bg-black/70 h-full top-0 left-1/2 w-full -translate-x-1/2 justify-center items-center text-start flex flex-col'>
          <div className='max-w-7xl p-4'>
            <h1 className='relative z-50 text-2xl sm:text-3xl lg:text-5xl font-[poppins]'>
              Crafting Identity:{' '}
              <span className='text-primary'>
                Powerful Branding & Graphic Design
              </span>
            </h1>
            <button
              onClick={() => handleContact()}
              className='sm:w-md mt-4 btn border-none rounded-full bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 text-white font-medium shadow-lg hover:shadow-xl font-[poppins]'
            >
              Define Your Brand
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
            Your brand is more than just a logo; it's the essence of your
            business. At PixelsPulse, we specialize in creating cohesive and
            compelling brand identities that resonate with your target audience.
            Our graphic design services extend beyond branding to include all
            the visual assets you need to communicate effectively, from
            marketing collateral to digital graphics, ensuring consistency and
            impact across all touchpoints.
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
            Our branding and graphic design process is strategic and creative:
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
                  Brand Discovery
                </h1>
              </div>
              <p className='ml-10 font-[montserrat] text-gray-300'>
                Deep dive into your vision, values, and target audience.
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
              initial={{ opacity: 0.2, scale: 0.9 }}
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
              initial={{ opacity: 0.2, scale: 0.9 }}
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
              initial={{ opacity: 0.2, scale: 0.9 }}
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
            Ready to Make Your Brand
            <span className='text-primary'> Stand Out?</span>
          </h2>
          <p className="text-lg mb-8 max-w-2xl mx-auto font-['montserrat']">
            Let's craft an identity that truly captures your essence.
          </p>
          <button
            onClick={() => handleContact()}
            className='px-8 py-3 rounded-full bg-gradient-to-r from-accent to-pink-400 hover:from-accent-100 hover:to-pink-300 transition-all duration-300 text-white font-medium'
          >
            Get a Branding Quote
          </button>
        </motion.div>
      </section>
    </div>
  );
};

export default Branding;