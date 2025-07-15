import React from 'react';
import { BackgroundGradientAnimation } from '../components/bg';
import {
  BetweenHorizonalEnd,
  BookImage,
  BookOpen,
  Bot,
  Brush,
  Bug,
  ChartBarBig,
  ChartBarIncreasing,
  ChartNoAxesGantt,
  ChartSpline,
  Circle,
  CircleGauge,
  ClockFading,
  Cloud,
  CloudCog,
  Code,
  CodeIcon,
  Coins,
  CreditCard,
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
  ListOrdered,
  Magnet,
  MessageSquareHeart,
  MonitorSmartphone,
  Notebook,
  Paintbrush,
  Pen,
  PersonStanding,
  Plus,
  Repeat,
  Rocket,
  Search,
  Settings2Icon,
  ShieldCheck,
  ShoppingBasket,
  ShoppingCart,
  Smile,
  TableOfContents,
  Truck,
  User,
  UserRound,
  UsersRound,
  Wrench,
} from 'lucide-react';
// eslint-disable-next-line no-unused-vars
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';

const ECommerce = () => {
  const navigate = useNavigate();
  const handleContact = () => {
    navigate('/contact');
    setTimeout(() => {
      window.scrollTo(0, 0);
    }, 10);
  };
  return (
    <div>
      <section id='Hero' className='relative w-full text-center'>
        <div className='h-50 lg:h-70'>
          <img
            src='ecom.jpg'
            alt='Web Development'
            className='relative w-full h-full object-cover'
          />
        </div>
        <div className=' absolute bg-black/50 h-full top-0 left-1/2 w-full -translate-x-1/2 justify-center items-center text-start flex flex-col'>
          <div className='max-w-7xl p-4'>
            <h1 className='relative z-50 text-2xl sm:text-3xl lg:text-5xl font-bold font-[poppins]'>
              Selling Smarter:
              <span className='text-primary'>
                Powerful E-commerce Solutions
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
            In the competitive world of online retail, a well-designed and
            functional e-commerce platform is crucial. PixelsPulse specializes
            in creating powerful e-commerce solutions that not only look great
            but also drive sales and provide a seamless shopping experience for
            your customers. Whether you need a simple online shop, a
            multi-vendor marketplace, or a complex custom e-commerce system, we
            build secure, scalable, and user-friendly platforms tailored to your
            business goals.
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
                <UsersRound className='size-8 stroke-accent' />
                <h1 className='font-semibold font-[poppins] text-lg'>
                  Expand Your Reach
                </h1>
              </div>
              <p className='font-[montserrat] text-gray-300 mt-2'>
                Sell to customers globally, 24/7.
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
                <ChartSpline className='size-8 stroke-accent' />
                <h1 className='font-semibold font-[poppins] text-lg'>
                  Increase Sales & Revenue
                </h1>
              </div>
              <p className='font-[montserrat] text-gray-300 mt-2'>
                Optimize your store for maximum conversions.
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
                <Bot className='size-8 stroke-accent' />
                <h1 className='font-semibold font-[poppins] text-lg'>
                  Automate Operations
                </h1>
              </div>
              <p className='font-[montserrat] text-gray-300 mt-2'>
                Streamline inventory, orders, and customer management.
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
                  Enhance Customer Experience
                </h1>
              </div>
              <p className='font-[montserrat] text-gray-300 mt-2'>
                Provide intuitive navigation and secure checkout.
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
                <ChartBarBig className='size-8 stroke-accent' />
                <h1 className='font-semibold font-[poppins] text-lg'>
                  Gain Business Insights
                </h1>
              </div>
              <p className='font-[montserrat] text-gray-300 mt-2'>
                Track sales data and customer behavior for informed decisions.
              </p>
              {/* </div> */}
            </motion.div>
          </div>
          <h1 className='text-2xl sm:text-3xl font-bold font-[poppins] text-primary'>
            Our Process
          </h1>
          <p className='font-[poppins]'>
            Our e-commerce development process is focused on your success:
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
                <Notebook className='stroke-accent size-8' />
                <h1 className='font-semibold font-[poppins] text-lg'>
                  E-commerce Strategy
                </h1>
              </div>
              <p className='ml-10 font-[montserrat] text-gray-300'>
                Defining your target market, product catalog, and business
                model.
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
                  <LayoutDashboard className='stroke-accent size-8' />
                  <h1 className='font-semibold font-[poppins] text-lg'>
                    Platform Selection
                  </h1>
                </div>
                <p className='ml-10 font-[montserrat] text-gray-300'>
                  Recommending the best platform (Shopify, WooCommerce, custom)
                  for your needs.
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
                  <CodeIcon className='stroke-accent size-8' />
                  <h1 className='font-semibold font-[poppins] text-lg'>
                    Design & Development
                  </h1>
                </div>
                <p className='ml-10 font-[montserrat] text-gray-300'>
                  Creating a visually appealing and highly functional online
                  store.
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
                  <BetweenHorizonalEnd className='stroke-accent size-8' />
                  <h1 className='font-semibold font-[poppins] text-lg'>
                    Product Data & Content
                  </h1>
                </div>
                <p className='ml-10 font-[montserrat] text-gray-300'>
                  Assisting with product import and content population.
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
                  <CreditCard className='stroke-accent size-8' />
                  <h1 className='font-semibold font-[poppins] text-lg'>
                    Payment Gateway Integration
                  </h1>
                </div>
                <p className='ml-10 font-[montserrat] text-gray-300'>
                  Setting up secure and diverse payment options.
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
                    Testing & Launch
                  </h1>
                </div>
                <p className='ml-10 font-[montserrat] text-gray-300'>
                  Ensuring a smooth, bug-free launch.
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
                  Ongoing maintenance, security, and optimization.
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
                <Brush className='size-8 stroke-accent' />
                <h1 className='font-semibold font-[poppins] text-lg'>
                  Custom E-commerce Store Design & Development
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
                  Product Catalog & Inventory Management Systems
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
                  Secure Payment Gateway Integration
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
                <ShoppingCart className='size-8 stroke-accent' />
                <h1 className='font-semibold font-[poppins] text-lg'>
                  Shopping Cart & Checkout Optimization
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
                <ListOrdered className='size-8 stroke-accent' />
                <h1 className='font-semibold font-[poppins] text-lg'>
                  Order Management & Fulfillment Tools
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
                <Truck className='size-8 stroke-accent' />
                <h1 className='font-semibold font-[poppins] text-lg'>
                  Shipping & Tax Configuration
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
                <User className='size-8 stroke-accent' />
                <h1 className='font-semibold font-[poppins] text-lg'>
                  Customer Account Management
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
                <Bot className='size-8 stroke-accent' />
                <h1 className='font-semibold font-[poppins] text-lg'>
                  CRM & Marketing Automation Integration
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
                <CloudCog className='size-8 stroke-accent' />
                <h1 className='font-semibold font-[poppins] text-lg'>
                  SEO for Products & Categories
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
            Ready to
            <span className='text-primary'> Sell Online?</span>
          </h2>
          <p className="text-lg mb-8 max-w-2xl mx-auto font-['montserrat']">
            Let's build an e-commerce solution that drives your business
            forward.
          </p>
          <button onClick={() => handleContact()} className='px-8 py-3 rounded-lg bg-gradient-to-r from-accent to-pink-400 hover:from-accent-100 hover:to-pink-300 transition-all duration-300 text-white font-medium'>
            Get an E-commerce Consultation
          </button>
        </motion.div>
      </section>
    </div>
  );
};

export default ECommerce;
