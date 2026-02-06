import React from 'react';
import {
  Book,
  BookOpen,
  BringToFront,
  ChartSpline,
  Coins,
  Eye,
  Hand,
  Handshake,
  LayoutPanelTop,
  MessageCircle,
  PersonStanding,
  Search,
  Smartphone,
  UserRound,
  Waypoints,
} from 'lucide-react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { usePageLoader } from '../hooks/usePageLoader';
import SEO from '../components/SEO';

const UI = () => {
  usePageLoader(['UX.webp']);
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
      title: 'Higher User Satisfaction',
      description: 'Create products that users love to use and return to.',
    },
    {
      icon: ChartSpline,
      title: 'Increased Conversions',
      description: 'Guide users effortlessly towards desired actions.',
    },
    {
      icon: Eye,
      title: 'Stronger Brand Perception',
      description: 'Build trust and credibility through professional and thoughtful design.',
    },
    {
      icon: Coins,
      title: 'Reduced Development Costs',
      description: 'Clear design specifications minimize rework and errors.',
    },
    {
      icon: PersonStanding,
      title: 'Enhanced Accessibility',
      description: 'Ensure your digital products are usable by everyone.',
    },
  ];

  const keyFeatures = [
    { icon: UserRound, title: 'User Research & Persona Development' },
    { icon: Waypoints, title: 'Information Architecture & Site Mapping' },
    { icon: LayoutPanelTop, title: 'Wireframing & Interactive Prototyping' },
    { icon: MessageCircle, title: 'Usability Testing & Feedback Integration' },
    { icon: Smartphone, title: 'User Interface (UI) Design' },
    { icon: BringToFront, title: 'Interaction Design & Animation' },
    { icon: Book, title: 'Design System & Style Guide Creation' },
    { icon: PersonStanding, title: 'Accessibility Compliance' },
  ];

  return (
    <div className='pt-16'>
      <SEO 
        title="UI/UX Design Services | PixelsPulse"
        description="User-centric design solutions including prototyping, wireframing, and interface design for web and mobile apps."
      />
      <section id='Hero' className='relative w-full text-center'>
        <div className='h-50 lg:h-70'>
          <img
            src='UX.webp'
            alt='UI/UX Design'
            className='relative w-full h-full object-cover'
          />
        </div>
        <div className='absolute bg-black/70 h-full top-0 left-1/2 w-full -translate-x-1/2 justify-center items-center text-start flex flex-col'>
          <div className='max-w-7xl p-4'>
            <h1 className='relative z-50 text-2xl sm:text-3xl lg:text-5xl font-[poppins]'>
              Designing Experiences:{' '}
              <span className='text-primary'>Intuitive UI/UX Design</span>
            </h1>
            <button
              onClick={() => handleContact()}
              className='sm:w-md mt-4 btn border-none rounded-full bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 text-white font-medium shadow-lg hover:shadow-xl font-[poppins]'
            >
              Improve Your User Experience
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
            At PixelsPulse, we believe that exceptional user experience (UX) and
            intuitive user interface (UI) are the heart of any successful
            digital product. Our UI/UX design services focus on understanding
            your users' needs and behaviors to create interfaces that are not
            only aesthetically pleasing but also highly functional and easy to
            navigate. From user research and wireframing to prototyping and
            final visual design, we ensure every interaction is delightful.
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
            Our human-centered design approach includes:
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
                  User Research & Discovery
                </h1>
              </div>
              <p className='ml-10 font-[montserrat] text-gray-300'>
                Understanding your audience, their needs, and pain points.
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
                  <Waypoints className='stroke-accent size-8' />
                  <h1 className='font-semibold font-[poppins] text-lg'>
                    Information Architecture
                  </h1>
                </div>
                <p className='ml-10 font-[montserrat] text-gray-300'>
                  Structuring content for logical and intuitive navigation.
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
                  <LayoutPanelTop className='stroke-accent size-8' />
                  <h1 className='font-semibold font-[poppins] text-lg'>
                    Wireframing & Prototyping
                  </h1>
                </div>
                <p className='ml-10 font-[montserrat] text-gray-300'>
                  Sketching and building interactive models to test flows.
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
                  <Hand className='stroke-accent size-8' />
                  <h1 className='font-semibold font-[poppins] text-lg'>
                    Usability Testing
                  </h1>
                </div>
                <p className='ml-10 font-[montserrat] text-gray-300'>
                  Gathering feedback to refine and optimize the user journey.
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
                    UI Design & Style Guides
                  </h1>
                </div>
                <p className='ml-10 font-[montserrat] text-gray-300'>
                  Crafting the visual elements and ensuring brand consistency.
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
                  <Handshake className='stroke-accent size-8' />
                  <h1 className='font-semibold font-[poppins] text-lg'>
                    Handoff & Collaboration
                  </h1>
                </div>
                <p className='ml-10 font-[montserrat] text-gray-300'>
                  Providing clear assets for seamless development.
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
            Ready for a Design That
            <span className='text-primary'> Converts?</span>
          </h2>
          <p className="text-lg mb-8 max-w-2xl mx-auto font-['montserrat']">
            Let's connect and craft an exceptional user experience.
          </p>
          <button
            onClick={() => handleContact()}
            className='px-8 py-3 rounded-full bg-gradient-to-r from-accent to-pink-400 hover:from-accent-100 hover:to-pink-300 transition-all duration-300 text-white font-medium'
          >
            Get a UI/UX Design Consultation
          </button>
        </motion.div>
      </section>
    </div>
  );
};

export default UI;