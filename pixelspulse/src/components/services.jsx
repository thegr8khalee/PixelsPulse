import { useNavigate } from 'react-router-dom';
import { BackgroundGradient } from '../components/card.jsx';
import { cn } from '../lib/utils.jsx';
// eslint-disable-next-line no-unused-vars
import { motion } from 'framer-motion';

const ServicesSection = () => {
  const services = [
    {
      title: 'Web Development',
      description:
        'From dynamic corporate sites to complex web applications, we build robust, scalable, and user-centric web solutions tailored to your unique needs.',
      //   icon: "💻",
      image: 'web.jpg',
      link: '/web-development' // replace with your actual image path
    },
    {
      title: 'UI/UX Design',
      description:
        'Craft captivating and user-friendly interfaces that not only look stunning but also provide seamless, enjoyable interactions for your audience.',
      image: 'ui.jpg',
      link: '/ui-ux-design' // replace with your actual image path
    },
    {
      title: 'Mobile Apps',
      description:
        'Reach your audience everywhere with intuitive iOS and Android applications. We design and develop engaging mobile experiences that drive connection and growth.',
      image: 'mobile.jpg',
      link: '/mobile-app' // replace with your actual image path
    },
    // {
    //   title: 'Branding',
    //   description: 'Complete visual identity and brand strategy.',
    //   image: 'brand.jpg', // replace with your actual image path
    // },
    // {
    //   title: 'Landing Pages & Micro-sites',
    //   description:
    //     'High-converting, visually striking pages for launches, products, or campaigns.',
    //   image: 'landing.jpg', // replace with your actual image path
    // },
    // {
    //   title: 'Performance optimization',
    //   description:
    //     'Speed, accessibility, and core web vitals — fine-tuned to perfection.',
    //   image: 'performance.jpg', // replace with your actual image path
    // },
    // {
    //   title: 'Maintenance & Support',
    //   description:
    //     'Ongoing updates, backups, and tech support to keep your product stable and secure.',
    //   image: 'maintain.jpg', // replace with your actual image path
    // },
    // {
    //   title: 'E-commerce Solutions',
    //   description:
    //     'Launch and scale your online store with custom e-commerce solutions. We build secure, user-friendly platforms designed for sales growth.',
    //   image: 'AI.jpg', // replace with your actual image path
    // },
  ];

  const navigate = useNavigate()
  const handleNav = (link) => {
    navigate(link)
    setTimeout(() => {
      window.scrollTo(0, 0);
    }, 10);
  }

  return (
    <section className='py-20 px-4 sm:px-6 lg:px-8 '>
      <div className='max-w-7xl mx-auto'>
        <motion.div
          className='text-center mb-16'
          initial={{
            opacity: 0,
          }}
          viewport={{ once: true, amount: 0.5 }}
          whileInView={{ opacity: 1, scale: 1.05 }}
          transition={{ duration: 1 }}
        >
          <h2 className='text-4xl sm:text-6xl md:text-6xl lg:text-6xl font-[poppins] font-bold text-white mb-4'>
            Our Services
          </h2>

          <p className='text-1xl text-gray-400 max-w-2xl mx-auto font-[montserrat]'>
            We deliver exceptional digital experiences tailored to your needs
          </p>
        </motion.div>

        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10'>
          {services.map((service, index) => (
            <BackgroundGradient
              key={index}
              className={cn(
                'rounded-3xl overflow-hidden h-full',
                'bg-base-100 transition-all duration-300'
              )}
              containerClassName='h-full'
            >
              <motion.div
                className='h-full flex flex-col'
                // initial={{
                //   opacity: 0.2, scale: 0.9
                // }}
                // viewport={{ once: false, amount: 0.5 }}
                // whileInView={{ opacity: 1, scale: 1 }}
                // transition={{ duration: 1 }}
              >
                {/* Image container */}
                <div className='h-50 overflow-hidden'>
                  <img
                    src={service.image}
                    alt={service.title}
                    className='w-full h-full object-cover'
                  />
                </div>

                {/* Content container */}
                <div className='p-6 pt-0 flex flex-col flex-grow'>
                  <div className='text-4xl mb-4'>{service.icon}</div>
                  <h3 className='text-xl font-bold text-white mb-2 font-[poppins]'>
                    {service.title}
                  </h3>
                  <p className='text-gray-400 flex-grow'>
                    {service.description}
                  </p>
                  <button onClick={() => handleNav(service.link)} className='mt-6 self-start text-sm font-medium text-accent hover:text-[#61e8ff]/80 transition-colors font-[montserrat]'>
                    Learn more
                  </button>
                </div>
              </motion.div>
            </BackgroundGradient>
          ))}
        </div>
        <div className='w-full text-xl text-center mt-8 font-semibold text-primary'>
          <a href='/services'>Explore Our Services</a>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
