import { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { ChevronDown } from 'lucide-react';

// PROCESS SECTION
const ProcessSection = () => {
  const processSteps = [
    {
      number: '01',
      title: 'Discovery & Strategy',
      description:
        'We dive deep into your brand, goals, and target audience to craft a strategic roadmap tailored to your vision.',
      image: 'process1.webp',
    },
    {
      number: '02',
      title: 'Design & Prototyping',
      description:
        'Our designers create stunning, user-centric mockups and interactive prototypes that bring your ideas to life.',
      image: 'process2.webp',
    },
    {
      number: '03',
      title: 'Development & Testing',
      description:
        'We build robust, scalable solutions using cutting-edge technologies, with rigorous testing at every stage.',
      image: 'process3.webp',
    },
    {
      number: '04',
      title: 'Launch & Optimization',
      description:
        'We deploy your project seamlessly and continuously optimize for performance, user experience, and growth.',
      image: 'process4.webp',
    },
  ];

  return (
    <section className='py-20 px-4 bg-base-100 text-start sm:text-center'>
      <div className='max-w-7xl mx-auto'>
        <div className='mb-16'>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className='text-3xl sm:text-5xl font-[poppins] text-white mb-4'
          >
            Our Process
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className=' text-gray-400 max-w-2xl mx-auto font-[montserrat]'
          >
            Our proven process ensures your project is delivered on time, on
            budget, and beyond expectations
          </motion.p>
        </div>

        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4'>
          {processSteps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className='text-start relative group'
            >
              <div className='bg-gradient-to-br from-primary/10 to-accent/10 rounded-3xl p-6 h-full transition-all duration-300'>
                <div className='absolute inset-0 rounded-3xl pointer-events-none border border-white/10 shadow-[inset_0_1px_0_rgba(255,255,255,0.1)]' />
                <img src={step.image} alt="" className='w-25 object-cover rounded-lg mb-4' />
                <div className='text-6xl font-bold text-primary/20 mb-2 font-poppins'>
                  {step.number}
                </div>
                <h3 className='text-xl font-semibold text-white mb-3 font-poppins'>
                  {step.title}
                </h3>
                <p className='text-gray-300 font-montserrat leading-relaxed'>
                  {step.description}
                </p>
              </div>
              {/* {index < processSteps.length - 1 && (
                <div className='hidden lg:block absolute top-1/2 -right-4 transform -translate-y-1/2 text-primary/30 text-2xl'>
                  →
                </div>
              )} */}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

// WHY CHOOSE US SECTION
const WhyChooseUsSection = () => {
  const reasons = [
    {
      title: 'Expert Team',
      description:
        'Seasoned designers, developers, and strategists with years of industry experience.',
      image: 'reason1.webp',
    },
    {
      title: 'Custom Solutions',
      description:
        'No templates. Every project is uniquely crafted to match your brand and goals.',
      image: 'reason2.webp',
    },
    {
      title: 'Fast Turnaround',
      description:
        'We value your time. Efficient workflows mean faster delivery without compromising quality.',
      image: 'reason3.webp',
    },
    {
      title: 'Ongoing Support',
      description:
        "We don't disappear after launch. Continuous support and maintenance to keep you running smoothly.",
      image: 'reason4.webp',
    },
    {
      title: 'Transparent Process',
      description:
        "Regular updates, clear communication, and full visibility into your project's progress.",
      image: 'reason5.webp',
    },
    {
      title: 'Results-Driven',
      description:
        'We focus on measurable outcomes that drive real business growth and ROI.',
      image: 'reason6.webp',
    },
  ];

  return (
    <section className='py-20 px-4 sm:px-6 lg:px-8 text-start sm:text-center'>
      <div className='max-w-7xl mx-auto'>
        <div className=' mb-16'>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className='text-3xl sm:text-5xl font-[poppins] text-white mb-4'
          >
            Why Choose <span className='text-primary'>PixelsPulse</span>?
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className='text-lg text-gray-400 max-w-2xl mx-auto font-montserrat'
          >
            We're more than a service provider — we're your digital growth
            partner
          </motion.p>
        </div>

        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
          {reasons.map((reason, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className='relative text-start bg-gradient-to-br from-primary/10 to-accent/10 rounded-3xl p-6 transition-all duration-300'
            >
              <div className='absolute inset-0 rounded-3xl pointer-events-none border border-white/10 shadow-[inset_0_1px_0_rgba(255,255,255,0.1)]' />
                <img src={reason.image} alt="" className='w-25 object-cover rounded-lg mb-4' />
              <h3 className='text-xl font-semibold text-white mb-2 font-poppins'>
                {reason.title}
              </h3>
              <p className='text-gray-300 font-montserrat leading-relaxed'>
                {reason.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

// FAQ SECTION
const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    {
      question: 'How long does a typical project take?',
      answer:
        'Project timelines vary based on scope and complexity. A simple website typically takes 2-4 weeks, while complex web applications can take 8-12 weeks. We provide detailed timelines during our initial consultation.',
    },
    {
      question: 'What is your pricing structure?',
      answer:
        'We offer custom quotes based on your specific needs. Pricing depends on project scope, features, and complexity. Contact us for a free consultation and personalized estimate.',
    },
    {
      question: 'Do you offer ongoing maintenance and support?',
      answer:
        'Yes! We provide comprehensive maintenance packages including updates, backups, security monitoring, and technical support to keep your digital products running smoothly.',
    },
    {
      question: 'Can you work with my existing brand guidelines?',
      answer:
        'Absolutely. We can work within your established brand identity or help you create a new one from scratch. Our designs always align with your brand vision and values.',
    },
    {
      question: 'What technologies do you use?',
      answer:
        'We use modern, industry-standard technologies including React, Next.js, Node.js, WordPress, Shopify, and more. We select the best tech stack based on your specific project requirements.',
    },
    {
      question: 'Do you provide training after project completion?',
      answer:
        'Yes, we offer comprehensive training sessions to ensure you and your team can confidently manage and update your digital products. We also provide documentation and video tutorials.',
    },
    {
      question: 'What if I need changes after the project is completed?',
      answer:
        'We offer revision rounds during development and post-launch support packages. Minor tweaks are often included, while major changes can be handled through our maintenance plans or additional project work.',
    },
    {
      question: 'How do you handle project communication?',
      answer:
        "We maintain transparent communication through regular updates, scheduled check-ins, and project management tools. You'll have direct access to our team throughout the entire process.",
    },
  ];

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className='space-y-4 text-start sm:text-center px-4'>
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className='text-3xl mb-6 sm:text-5xl font-[poppins] text-white text-center'
      >
        Frequently Asked Questions
      </motion.h2>
      {/* FAQ Items */}
      {faqs.map((faq, index) => (
        <motion.div
          key={index}
          className='rounded-xl bg-gradient-to-br from-primary/10 to-accent/10 p-4 cursor-pointer'
          initial={{ opacity: 0, y: 20 }}
          viewport={{ once: true, amount: 0.5 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          onClick={() => toggleFAQ(index)}
        >
          {/* Question Row */}
          <div className='flex justify-between items-center'>
            <h3 className='text-white'>{faq.question}</h3>
            <motion.div
              animate={{
                rotate: openIndex === index ? 180 : 0,
              }}
              transition={{ duration: 0.3 }}
            >
              <ChevronDown className='text-white' />
            </motion.div>
          </div>

          {/* Expandable Answer */}
          <AnimatePresence>
            {openIndex === index && (
              <motion.div
                key='content'
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.3 }}
                className='overflow-hidden'
              >
                <p className='text-gray-300 mt-2'>{faq.answer}</p>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      ))}
    </div>
  );
};

// EXPORT ALL SECTIONS
export { ProcessSection, WhyChooseUsSection, FAQSection };
