import React from 'react';
import {
  UsersRound,
  ChartSpline,
  Bot,
  Smile,
  ChartBarBig,
  Notebook,
  LayoutDashboard,
  CodeIcon,
  BetweenHorizonalEnd,
  CreditCard,
  Rocket,
  Repeat,
  Brush,
  Image,
  ShieldCheck,
  ShoppingCart,
  ListOrdered,
  Truck,
  User,
  CloudCog,
} from 'lucide-react';
// eslint-disable-next-line no-unused-vars
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { usePageLoader } from '../hooks/usePageLoader';
import SEO from '../components/SEO';

const ECommerce = () => {
  usePageLoader(['ecom.webp']);
  const navigate = useNavigate();
  const handleContact = () => {
    navigate('/contact');
    setTimeout(() => {
      window.scrollTo(0, 0);
    }, 10);
  };

  const features = [
    {
      icon: UsersRound,
      title: 'Expand Your Reach',
      description: 'Sell to customers globally, 24/7.',
    },
    {
      icon: ChartSpline,
      title: 'Increase Sales & Revenue',
      description: 'Optimize your store for maximum conversions.',
    },
    {
      icon: Bot,
      title: 'Automate Operations',
      description: 'Streamline inventory, orders, and customer management.',
    },
    {
      icon: Smile,
      title: 'Enhance Customer Experience',
      description: 'Provide intuitive navigation and secure checkout.',
    },
    {
      icon: ChartBarBig,
      title: 'Gain Business Insights',
      description: 'Track sales data and customer behavior for informed decisions.',
    },
    {
      icon: ShieldCheck,
      title: 'Built-in Security & Trust',
      description: 'Ensure secure transactions and protect customer data.',
    },
  ];

  const processSteps = [
    {
      icon: Notebook,
      title: 'E-commerce Strategy',
      description:
        'Defining your target market, product catalog, and business model.',
    },
    {
      icon: LayoutDashboard,
      title: 'Platform Selection',
      description:
        'Recommending the best platform (Shopify, WooCommerce, custom) for your needs.',
    },
    {
      icon: CodeIcon,
      title: 'Design & Development',
      description:
        'Creating a visually appealing and highly functional online store.',
    },
    {
      icon: BetweenHorizonalEnd,
      title: 'Product Data & Content',
      description: 'Assisting with product import and content population.',
    },
    {
      icon: CreditCard,
      title: 'Payment Gateway Integration',
      description: 'Setting up secure and diverse payment options.',
    },
    {
      icon: Rocket,
      title: 'Testing & Launch',
      description: 'Ensuring a smooth, bug-free launch.',
    },
    {
      icon: Repeat,
      title: 'Post-Launch Support',
      description: 'Ongoing maintenance, security, and optimization.',
    },
  ];

  const keyFeatures = [
    {
      icon: Brush,
      title: 'Custom E-commerce Store Design & Development',
    },
    {
      icon: Image,
      title: 'Product Catalog & Inventory Management Systems',
    },
    {
      icon: ShieldCheck,
      title: 'Secure Payment Gateway Integration',
    },
    {
      icon: ShoppingCart,
      title: 'Shopping Cart & Checkout Optimization',
    },
    {
      icon: ListOrdered,
      title: 'Order Management & Fulfillment Tools',
    },
    {
      icon: Truck,
      title: 'Shipping & Tax Configuration',
    },
    {
      icon: User,
      title: 'Customer Account Management',
    },
    {
      icon: Bot,
      title: 'CRM & Marketing Automation Integration',
    },
    {
      icon: CloudCog,
      title: 'SEO for Products & Categories',
    },
  ];

  return (
    <div className='pt-16'>
      <SEO 
        title="E-commerce Development Solutions | PixelsPulse"
        description="Build scalable online stores with our e-commerce development services. Custom solutions, Shopify, and more."
      />
      <section id='Hero' className='relative w-full text-center'>
        <div className='h-50 lg:h-70'>
          <img
            src='ecom.webp'
            alt='E-commerce Development'
            className='relative w-full h-full object-cover'
          />
        </div>
        <div className=' absolute bg-black/70 h-full top-0 left-1/2 w-full -translate-x-1/2 justify-center items-center text-start flex flex-col'>
          <div className='max-w-7xl p-4'>
            <h1 className='relative z-50 text-2xl sm:text-3xl lg:text-5xl font-[poppins]'>
              Selling Smarter:
              <span className='text-primary'>
                {' '}
                Powerful E-commerce Solutions
              </span>
            </h1>
            <button
              onClick={() => handleContact()}
              className='sm:w-md mt-4 btn border-none rounded-full bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 text-white font-medium  shadow-lg hover:shadow-xl font-[poppins]'
            >
              Optimize Your Site Now
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
            In the competitive world of online retail, a well-designed and
            functional e-commerce platform is crucial. PixelsPulse specializes
            in creating powerful e-commerce solutions that not only look great
            but also **drive sales** and provide a seamless shopping experience
            for your customers. Whether you need a simple online shop, a
            multi-vendor marketplace, or a complex custom e-commerce system, we
            build **secure, scalable, and user-friendly platforms** tailored to
            your business goals.
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
            Our e-commerce development process is focused on your success:
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
                {i < processSteps.length - 1 && (
                  <div className='ml-3 bg-gray-500 h-10 w-0.5 rounded-full'></div>
                )}
              </React.Fragment>
            ))}
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
          <button
            onClick={() => handleContact()}
            className='px-8 py-3 rounded-full bg-gradient-to-r from-accent to-pink-400 hover:from-accent-100 hover:to-pink-300 transition-all duration-300 text-white font-medium'
          >
            Get an E-commerce Consultation
          </button>
        </motion.div>
      </section>
    </div>
  );
};

export default ECommerce;