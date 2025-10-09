import { useNavigate } from 'react-router-dom';
import { BackgroundGradient } from '../components/card.jsx';
import { cn } from '../lib/utils.jsx';

const ServicesSection = () => {
  const services = [
    {
      title: 'Web Development',
      description:
        'From dynamic corporate sites to complex web applications, we build robust, scalable, and user-centric web solutions tailored to your unique needs.',
      image: 'web.jpg',
      link: '/web-development',
      size: 'large', // spans 2 columns, 2 rows
    },
    {
      title: 'Mobile Apps',
      description:
        'Reach your audience everywhere with intuitive iOS and Android applications. We design and develop engaging mobile experiences that drive connection and growth.',
      image: 'mobile.jpg',
      link: '/mobile-app',
      size: 'tall', // spans 2 rows
    },
    {
      title: 'UI/UX Design',
      description:
        'Craft captivating and user-friendly interfaces that not only look stunning but also provide seamless, enjoyable interactions for your audience.',
      image: 'ui.jpg',
      link: '/ui-ux-design',
      size: 'medium',
    },
    {
      title: 'E-commerce Solutions',
      description:
        'Launch and scale your online store with custom e-commerce solutions. We build secure, user-friendly platforms designed for sales growth.',
      image: 'ecom.jpg',
      size: 'medium',
      link: '/e-commerce',
    },
    {
      title: 'AI Solutions & Integrations',
      description:
        'Leverage the power of AI to enhance your applications and workflows. We offer custom AI solutions and integrations tailored to your business needs.',
      image: 'AI.jpg',
      size: 'wide', // spans 2 columns
      link: '/ai-solutions',
    },
    {
      title: 'Branding',
      description:
        'Complete visual identity and brand strategy that communicates your values and connects emotionally with your audience.',
      image: 'brand.jpg',
      size: 'medium',
      link: '/branding-graphics-design',
    },
    {
      title: 'Landing Pages & Micro-sites',
      description:
        'High-converting, visually striking pages for launches, products, or campaigns.',
      image: 'landing.jpg',
      size: 'medium',
      link: '/landing-pages-microsites',
    },
    {
      title: 'Performance Optimization',
      description:
        'Speed, accessibility, and core web vitals — fine-tuned to perfection for peak performance.',
      image: 'performance.jpg',
      size: 'medium',
      link: '/performance-optimization',
    },
    {
      title: 'Maintenance & Support',
      description:
        'Ongoing updates, backups, and tech support to keep your product stable and secure.',
      image: 'maintain.jpg',
      size: 'wide', // spans 2 columns
      link: '/maintenance-support',
    },
  ];

  const navigate = useNavigate();
  const handleNav = (link) => {
    if (link) {
      navigate(link);
      setTimeout(() => {
        window.scrollTo(0, 0);
      }, 10);
    }
  };

  const getSizeClasses = (size) => {
    switch (size) {
      case 'large':
        return 'md:col-span-2 md:row-span-2';
      case 'wide':
        return 'md:col-span-2 md:row-span-1';
      case 'tall':
        return 'md:row-span-3 md:col-span-1';
      default:
        return '';
    }
  };

  return (
    <section className='py-20 px-4 max-w-7xl mx-auto'>
      <div className='mx-auto'>
        <div className='text-start sm:text-center mb-12'>
          <h2 className='text-3xl sm:text-5xl font-[poppins] font-medium text-white mb-4'>
            Our Services
          </h2>
          <p className='text-1xl text-gray-400 max-w-2xl mx-auto font-[montserrat]'>
            We deliver exceptional digital experiences tailored to your needs
          </p>
        </div>

        {/* Bento Grid */}
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 auto-rows-[280px] gap-4'>
          {services.map((service, index) => (
            <BackgroundGradient
              key={index}
              className={cn(
                'rounded-3xl overflow-hidden h-full',
                'bg-base-100 transition-all duration-300',
                getSizeClasses(service.size)
              )}
              containerClassName='h-full'
            >
              <div className='h-full flex flex-col relative group cursor-pointer'>
                {/* Image container with overlay */}
                <div className='absolute inset-0 overflow-hidden'>
                  <img
                    src={service.image}
                    alt={service.title}
                    className='w-full h-full object-cover transition-transform duration-500 group-hover:scale-110'
                  />
                  <div className='absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent' />
                </div>

                {/* Content container */}
                <div className='bg-black/20 relative z-10 p-6 flex flex-col justify-end h-full'>
                  <h3 className='text-xl md:text-2xl text-white mb-2 font-[poppins]'>
                    {service.title}
                  </h3>
                  <p className={cn(
                    'text-gray-300 text-sm md:text-base mb-4 font-[montserrat]',
                    service.size === 'large' ? 'line-clamp-4' : 'line-clamp-3'
                  )}>
                    {service.description}
                  </p>
                  {service.link && (
                    <button
                      onClick={() => handleNav(service.link)}
                      className='self-start text-sm font-medium text-accent hover:text-[#61e8ff]/80 transition-colors font-[montserrat] flex items-center gap-2'
                    >
                      Learn more
                      <span className='group-hover:translate-x-1 transition-transform'>→</span>
                    </button>
                  )}
                </div>
              </div>
            </BackgroundGradient>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;