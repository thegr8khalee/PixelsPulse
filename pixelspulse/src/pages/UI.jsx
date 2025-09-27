import React from 'react';
import {
  AppleIcon,
  Book,
  BookOpen,
  BringToFront,
  Brush,
  ChartArea,
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
  Hand,
  HandCoins,
  Handshake,
  Heart,
  LayoutPanelTop,
  Lock,
  Megaphone,
  MessageCircle,
  MonitorSmartphone,
  PersonStanding,
  Repeat,
  Rocket,
  Search,
  Settings2Icon,
  ShieldCheck,
  Smartphone,
  TableOfContents,
  TabletSmartphone,
  Trophy,
  User,
  UserRound,
  Waypoints,
} from 'lucide-react';
// eslint-disable-next-line no-unused-vars
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';

const UI = () => {
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
            src='UX.jpg'
            alt='Web Development'
            className='relative w-full h-full object-cover'
          />
        </div>
        <div className=' absolute bg-black/50 h-full top-0 left-1/2 w-full -translate-x-1/2 justify-center items-center text-start flex flex-col'>
          <div className='max-w-7xl p-4'>
            <h1 className='relative z-50 text-2xl sm:text-3xl lg:text-5xl font-bold font-[poppins]'>
              Designing Experiences:
              <span className='text-primary'>Intuitive UI/UX Design</span>
            </h1>
            <button onClick={() => handleContact()} className='sm:w-md mt-4 btn border-none rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 text-white font-medium  shadow-lg hover:shadow-xl font-[poppins]'>
              Improve Your User Experience
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
            At PixelsPulse, we believe that exceptional user experience (UX) and
            intuitive user interface (UI) are the heart of any successful
            digital product. Our UI/UX design services focus on understanding
            your users' needs and behaviors to create interfaces that are not
            only aesthetically pleasing but also highly functional and easy to
            navigate. From user research and wireframing to prototyping and
            final visual design, we ensure every interaction is delightful.
          </p>
          <h1 className='text-2xl sm:text-3xl font-bold font-[poppins] text-primary'>
            Why It Matters
          </h1>
          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>
            <motion.div
              initial={{
                opacity: 0.2,
                scale: 0.9,
              }}
              viewport={{ once: true, amount: 0.5 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
            >
              <div className='bg-base-200 p-4 rounded-xl'>
                <div className='flex space-x-2 items-center'>
                  <UserRound className='size-8 stroke-accent' />
                  <h1 className='font-semibold font-[poppins] text-lg'>
                    Higher User Satisfaction
                  </h1>
                </div>
                <p className='font-[montserrat] text-gray-300 mt-2'>
                  Create products that users love to use and return to.
                </p>
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
              <div className='flex space-x-2 items-center'>
                <ChartSpline className='size-8 stroke-accent' />
                <h1 className='font-semibold font-[poppins] text-lg'>
                  Increased Conversions
                </h1>
              </div>
              <p className='font-[montserrat] text-gray-300 mt-2'>
                Guide users effortlessly towards desired actions.
              </p>
            </motion.div>
            <motion.div
              initial={{
                opacity: 0.2,
                scale: 0.9,
              }}
              viewport={{ once: true, amount: 0.5 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
            >
              <div className='bg-base-200 p-4 rounded-xl'>
                <div className='flex space-x-2 items-center'>
                  <Eye className='size-8 stroke-accent' />
                  <h1 className='font-semibold font-[poppins] text-lg'>
                    Stronger Brand Perception
                  </h1>
                </div>
                <p className='font-[montserrat] text-gray-300 mt-2'>
                  Build trust and credibility through professional and
                  thoughtful design.
                </p>
              </div>
            </motion.div>
            <motion.div
              initial={{
                opacity: 0.2,
                scale: 0.9,
              }}
              viewport={{ once: true, amount: 0.5 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
            >
              <div className='bg-base-200 p-4 rounded-xl'>
                <div className='flex space-x-2 items-center'>
                  <Coins className='size-8 stroke-accent' />
                  <h1 className='font-semibold font-[poppins] text-lg'>
                    Reduced Development Costs
                  </h1>
                </div>
                <p className='font-[montserrat] text-gray-300 mt-2'>
                  Clear design specifications minimize rework and errors.
                </p>
              </div>
            </motion.div>
            <motion.div
              initial={{
                opacity: 0.2,
                scale: 0.9,
              }}
              viewport={{ once: true, amount: 0.5 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
            >
              <div className='bg-base-200 p-4 rounded-xl'>
                <div className='flex space-x-2 items-center'>
                  <PersonStanding className='size-8 stroke-accent' />
                  <h1 className='font-semibold font-[poppins] text-lg'>
                    Enhanced Accessibility
                  </h1>
                </div>
                <p className='font-[montserrat] text-gray-300 mt-2'>
                  Ensure your digital products are usable by everyone.
                </p>
              </div>
            </motion.div>
          </div>
          <h1 className='text-2xl sm:text-3xl font-bold font-[poppins] text-primary'>
            Our Process
          </h1>
          <p className='font-[poppins]'>
            Our human-centered design approach includes:
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
                  User Research & Discovery
                </h1>
              </div>
              <p className='ml-10 font-[montserrat] text-gray-300'>
                Understanding your audience, their needs, and pain points.
              </p>
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
          <h1 className='text-2xl sm:text-3xl font-bold font-[poppins] text-primary'>
            Key Features
          </h1>
          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>
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
                <div className='flex space-x-4 items-center'>
                  <UserRound className='stroke-accent size-8' />
                  <h1 className='font-semibold font-[poppins] text-lg'>
                    User Research & Persona Development
                  </h1>
                </div>
              {/* </div> */}
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
                <div className='flex space-x-4 items-center'>
                  <Waypoints className='stroke-accent size-8' />
                  <h1 className='font-semibold font-[poppins] text-lg'>
                    Information Architecture & Site Mapping
                  </h1>
                </div>
              {/* </div> */}
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
                <div className='flex space-x-4 items-center'>
                  <LayoutPanelTop className='size-8 stroke-accent' />
                  <h1 className='font-semibold font-[poppins] text-lg'>
                    Wireframing & Interactive Prototyping
                  </h1>
                </div>
              {/* </div> */}
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
                  <MessageCircle className='size-8 stroke-accent' />
                  <h1 className='font-semibold font-[poppins] text-lg'>
                    Usability Testing & Feedback Integration
                  </h1>
                </div>
              {/* </div> */}
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
                  <Smartphone className='size-8 stroke-accent' />
                  <h1 className='font-semibold font-[poppins] text-lg'>
                    User Interface (UI) Design
                  </h1>
                </div>
              {/* </div> */}
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
                  <BringToFront className='size-8 stroke-accent' />
                  <h1 className='font-semibold font-[poppins] text-lg'>
                    Interaction Design & Animation
                  </h1>
                </div>
              {/* </div> */}
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
                  <Book className='size-8 stroke-accent' />
                  <h1 className='font-semibold font-[poppins] text-lg'>
                    Design System & Style Guide Creation
                  </h1>
                </div>
              {/* </div> */}
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
                  <PersonStanding className='size-8 stroke-accent' />
                  <h1 className='font-semibold font-[poppins] text-lg'>
                    Accessibility Compliance
                  </h1>
                </div>
              {/* </div> */}
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
            Ready for a Design That
            <span className='text-primary'> Converts?</span>
          </h2>
          <p className="text-lg mb-8 max-w-2xl mx-auto font-['montserrat']">
            Let's connect and craft an exceptional user experience.
          </p>
          <button onClick={() => handleContact()} className='px-8 py-3 rounded-lg bg-gradient-to-r from-accent to-pink-400 hover:from-accent-100 hover:to-pink-300 transition-all duration-300 text-white font-medium'>
            Get a UI/UX Design Consultation
          </button>
        </motion.div>
      </section>
    </div>
  );
};

export default UI;
