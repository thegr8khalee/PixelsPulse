import React from 'react';
import {
  BrainCircuit, // New AI-relevant icon
  ChartSpline,
  Cloud,
  Code,
  Eye,
  Lock,
  MessageCircle,
  Repeat,
  Rocket,
  Search,
  ShieldCheck,
  TabletSmartphone,
} from 'lucide-react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { usePageLoader } from '../hooks/usePageLoader';
import SEO from '../components/SEO';

const AISolutions = () => {
  usePageLoader(['AI.webp']);

  const navigate = useNavigate();
  const handleContact = () => {
    navigate('/contact');
    setTimeout(() => {
      window.scrollTo(0, 0);
    }, 10);
  };

  const features = [
    {
      icon: ChartSpline,
      title: 'Predictive Insights',
      description: 'Leverage machine learning to forecast trends and make data-driven decisions.',
    },
    {
      icon: Code,
      title: 'Workflow Automation',
      description: 'Automate repetitive tasks to boost efficiency and reduce operational costs.',
    },
    {
      icon: Eye,
      title: 'Personalized Experiences',
      description: 'Use AI to understand user behavior and deliver highly relevant content or services.',
    },
    {
      icon: ShieldCheck,
      title: 'Enhanced Security',
      description: 'Implement AI-driven anomaly detection for proactive security and fraud prevention.',
    },
    {
      icon: TabletSmartphone,
      title: 'Intelligent Integration',
      description: 'Embed AI capabilities directly into your existing applications and platforms.',
    },
  ];

  const keyFeatures = [
    {
      icon: BrainCircuit,
      title: 'Custom Machine Learning Models',
      isImage: false,
    },
    {
      icon: Cloud,
      title: 'Cloud AI Service Integration (e.g., AWS, Azure, GCP)',
      isImage: false,
    },
    {
      icon: Search,
      title: 'Natural Language Processing (NLP) & Sentiment Analysis',
      isImage: false,
    },
    {
      icon: Eye,
      title: 'Computer Vision & Image Recognition',
      isImage: false,
    },
    {
      icon: MessageCircle,
      title: 'AI-Powered Chatbots & Virtual Assistants',
      isImage: false,
    },
    {
      icon: Lock,
      title: 'Ethical AI & Data Privacy Audits',
      isImage: false,
    },
    {
      icon: ChartSpline,
      title: 'Predictive Analytics & Forecasting Tools',
      isImage: false,
    },
    {
      icon: Code,
      title: 'API Development for AI Model Deployment',
      isImage: false,
    },
  ];

  return (
    <div className='pt-16'>
      <SEO 
        title="AI Solutions & Machine Learning | PixelsPulse"
        description="Transform your business with custom AI solutions, predictive analytics, and process automation services."
      />
      <section id='Hero' className='relative w-full text-center'>
        <div className='h-50 lg:h-70'>
          <img
            src='AI.webp' // Updated image source
            alt='AI Solutions and Integrations'
            className='relative w-full h-full object-cover'
          />
        </div>
        <div className='absolute bg-black/70 h-full top-0 left-1/2 w-full -translate-x-1/2 justify-center items-center text-start flex flex-col'>
          <div className='max-w-7xl p-4'>
            <h1 className='relative z-50 text-2xl sm:text-3xl lg:text-5xl font-[poppins]'>
              Transform Your Business:{' '}
              <span className='text-primary'>
                AI Solutions & Intelligent Automation
              </span>
            </h1>
            <button
              onClick={() => handleContact()}
              className='sm:w-md mt-4 btn border-none rounded-full bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 text-white font-medium shadow-lg hover:shadow-xl font-[poppins]'
            >
              Start Your AI Journey
            </button>
          </div>
        </div>
      </section>

      <section className='w-full flex items-center justify-center px-4'>
        <div className='max-w-7xl py-4 space-y-4'>
          {/* --- What We Do --- */}
          <h1 className='text-2xl sm:text-3xl font-medium font-[poppins] text-primary'>
            What We Offer
          </h1>
          <p className='font-[poppins]'>
            PixelsPulse specializes in designing, developing, and integrating powerful **Artificial Intelligence** and **Machine Learning** solutions. From custom predictive models and intelligent data processing to seamlessly integrating third-party AI services, we help businesses unlock new levels of automation, insight, and customer experience. We turn complex data into strategic advantage.
          </p>

          {/* --- Why It Matters --- */}
          <h1 className='text-2xl sm:text-3xl font-medium font-[poppins] text-primary'>
            The Power of AI
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

          {/* --- Our Process --- */}
          <h1 className='text-2xl sm:text-3xl font-medium font-[poppins] text-primary'>
            Our AI Implementation Roadmap
          </h1>
          <p className='font-[poppins]'>
            Our structured approach ensures your AI solution is effective, scalable, and delivers tangible business value:
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
                  Discovery & Data Assessment
                </h1>
              </div>
              <p className='ml-10 font-[montserrat] text-gray-300'>
                Identifying high-impact AI opportunities and evaluating data readiness.
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
                  <BrainCircuit className='stroke-accent size-8' />
                  <h1 className='font-semibold font-[poppins] text-lg'>
                    Model Prototyping & Training
                  </h1>
                </div>
                <p className='ml-10 font-[montserrat] text-gray-300'>
                  Developing, training, and validating the custom AI/ML model.
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
                  <Code className='stroke-accent size-8' />
                  <h1 className='font-semibold font-[poppins] text-lg'>
                    System Integration & Deployment
                  </h1>
                </div>
                <p className='ml-10 font-[montserrat] text-gray-300'>
                  Integrating the model into your existing software via robust APIs and backend services.
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
                  <ShieldCheck className='stroke-accent size-8' />
                  <h1 className='font-semibold font-[poppins] text-lg'>
                    Validation & Ethical Review
                  </h1>
                </div>
                <p className='ml-10 font-[montserrat] text-gray-300'>
                  Rigorous testing for accuracy, bias, and system stability.
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
                  <Rocket className='stroke-accent size-8' />
                  <h1 className='font-semibold font-[poppins] text-lg'>
                    Launch & Monitoring
                  </h1>
                </div>
                <p className='ml-10 font-[montserrat] text-gray-300'>
                  Full deployment and setting up performance tracking dashboards.
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
                  <Repeat className='stroke-accent size-8' />
                  <h1 className='font-semibold font-[poppins] text-lg'>
                    Continuous Optimization
                  </h1>
                </div>
                <p className='ml-10 font-[montserrat] text-gray-300'>
                  Ongoing model retraining and infrastructure maintenance for peak performance.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <section className='w-full flex items-center justify-center px-4'>
        <div className='max-w-7xl w-full py-4 space-y-4'>
          {/* --- Key Features & Deliverables --- */}
          <h1 className='text-2xl sm:text-3xl font-medium font-[poppins] text-primary'>
            Core AI Expertise
          </h1>
          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>
            {keyFeatures.map(({ icon, title, isImage }, i) => (
              <motion.div
                key={i}
                className='bg-gradient-to-br from-primary/10 to-accent/10 p-4 rounded-xl flex items-center space-x-4'
                initial={{ opacity: 0.2, scale: 0.9 }}
                viewport={{ once: true, amount: 0.5 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
                whileHover={{ scale: 1.03 }}
              >
                {isImage ? (
                  <img src={icon} className='size-8' alt={title} />
                ) : (
                  React.createElement(icon, {
                    className: 'size-8 stroke-accent',
                  })
                )}
                <h1 className='font-semibold font-[poppins] text-lg'>
                  {title}
                </h1>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* --- Call to Action --- */}
      <section className='py-20 px-4 sm:px-6 lg:px-8'>
        <motion.div
          className='max-w-4xl mx-auto text-center'
          initial={{ opacity: 0.2, scale: 0.9 }}
          viewport={{ once: false, amount: 0.5 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
        >
          <h2 className="text-3xl sm:text-6xl md:text-6xl lg:text-6xl mb-6 font-['poppins'] font-medium">
            Ready for <span className='text-primary'>Intelligent Growth?</span>
          </h2>
          <p className="text-lg mb-8 max-w-2xl mx-auto font-['montserrat']">
            Let's harness the power of AI to innovate and optimize your business.
          </p>
          <button
            onClick={() => handleContact()}
            className='px-8 py-3 rounded-full bg-gradient-to-r from-accent to-pink-400 hover:from-accent-100 hover:to-pink-300 transition-all duration-300 text-white font-medium'
          >
            Schedule an AI Strategy Session
          </button>
        </motion.div>
      </section>
    </div>
  );
};

export default AISolutions;