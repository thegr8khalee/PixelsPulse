import React, { useState } from 'react';
// eslint-disable-next-line no-unused-vars
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown } from 'lucide-react';
import { usePageLoader } from '../hooks/usePageLoader';

// --- Your FAQ Data ---
const faqSections = [
  {
    title: 'Getting Started',
    data: [
      {
        question: 'What services does PixelsPulse provide?',
        answer:
          'We specialize in web development, branding, UI/UX design, digital strategy, and long-term digital partnerships.',
      },
      {
        question: 'How do I start working with PixelsPulse?',
        answer:
          'Simply reach out via our Contact Page. We’ll schedule a discovery call to understand your goals, challenges, and vision.',
      },
      {
        question: 'Do you work with startups as well as established companies?',
        answer:
          'Yes! Whether you’re a small startup or a growing enterprise, we adapt our process to fit your stage and resources.',
      },
      {
        question: 'Can I request a consultation before committing?',
        answer:
          'Absolutely. We offer free initial consultations to discuss your project and determine the best next steps.',
      },
    ],
  },
  {
    title: 'Process & Collaboration',
    data: [
      {
        question: 'What does your project process look like?',
        answer:
          'Our process is collaborative and transparent: discovery, design, development, testing, launch, and ongoing support.',
      },
      {
        question: 'Will I have a dedicated project manager?',
        answer:
          'Yes. Each project is assigned a dedicated manager who coordinates communication and ensures smooth delivery.',
      },
      {
        question: 'How do you handle feedback and revisions?',
        answer:
          'We welcome feedback during every stage. Each proposal outlines the number of revision rounds included.',
      },
      {
        question: 'What tools do you use for collaboration?',
        answer:
          'We commonly use Slack, Trello, Jira, Notion, and Figma — but we adapt to clients’ preferred tools.',
      },
    ],
  },
  {
    title: 'Pricing & Payments',
    data: [
      {
        question: 'How much does a typical project cost?',
        answer:
          'Pricing depends on scope, complexity, and timeline. We provide clear breakdowns with no hidden fees.',
      },
      {
        question: 'Can I get a custom quote?',
        answer:
          'Yes. After our discovery call, we prepare a tailored proposal that matches your budget and objectives.',
      },
      {
        question: 'Do you offer flexible payment plans?',
        answer:
          'Yes. We usually work with milestone payments, but installment options are available for larger projects.',
      },
      {
        question: 'What payment methods do you accept?',
        answer:
          'We accept credit/debit cards, PayPal, and bank transfers. International clients can pay via secure platforms.',
      },
    ],
  },
  {
    title: 'Timelines & Delivery',
    data: [
      {
        question: 'How long does it take to build a website?',
        answer:
          'Most projects take 4–12 weeks, depending on size and complexity.',
      },
      {
        question: 'Can you handle urgent projects?',
        answer:
          'Yes, we offer accelerated timelines where possible, depending on scope and resource availability.',
      },
      {
        question: 'Do you provide project timelines upfront?',
        answer:
          'Yes, every proposal includes a detailed timeline with milestones and delivery dates.',
      },
      {
        question: 'Will I own my website after delivery?',
        answer:
          'Yes. Once the project is completed and payment is made, you fully own your digital assets.',
      },
    ],
  },
  {
    title: 'Support & Maintenance',
    data: [
      {
        question: 'Do you provide ongoing maintenance?',
        answer:
          'Yes. We offer maintenance plans covering security, backups, updates, and performance optimization.',
      },
      {
        question: 'What if something breaks after launch?',
        answer:
          'If it’s covered under warranty or maintenance, we fix it immediately. Otherwise, we provide quick-response support.',
      },
      {
        question: 'Do you offer training so my team can manage the site?',
        answer:
          'Yes, we provide documentation and training sessions for your team to handle day-to-day updates.',
      },
      {
        question: 'Can you upgrade or redesign existing websites?',
        answer:
          'Absolutely. We often refresh or expand existing sites instead of starting from scratch.',
      },
    ],
  },
  {
    title: 'Miscellaneous',
    data: [
      {
        question: 'Do you work with international clients?',
        answer:
          'Yes, we collaborate with clients across different time zones globally.',
      },
      {
        question:
          'Can you integrate third-party tools (CRM, payment gateways, APIs)?',
        answer:
          'Definitely. We specialize in seamless integrations to make your digital ecosystem work together.',
      },
      {
        question: 'Do you provide branding and content creation services too?',
        answer:
          'Yes. Beyond websites, we help with branding, copywriting, and visual storytelling.',
      },
      {
        question: 'Do you sign NDAs?',
        answer:
          'Yes. We respect confidentiality and are happy to sign NDAs for sensitive projects.',
      },
    ],
  },
];

// --- FAQ Component ---
const Help = () => {
  usePageLoader([]);
  const [openIndexes, setOpenIndexes] = useState({});

  const toggleFAQ = (sectionTitle, index) => {
    setOpenIndexes((prev) => ({
      ...prev,
      [sectionTitle]: prev[sectionTitle] === index ? null : index,
    }));
  };

  return (
    <div className='py-16'>
      <div className='bg-deepBlue mt-20'>
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className='text-3xl font-medium text-primary mb-4 text-center font-[poppins]'
        >
          Do you have questions? We're here to help!
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className='text-gray-400 text-center'
        >
          Find answers to common questions about PixelsPulse
        </motion.p>

        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 max-w-7xl mx-auto mt-8'>
          {faqSections.map((section, sectionIndex) => (
            <div
              key={sectionIndex}
              className='mt-8 grid grid-cols-1 gap-4 max-w-5xl p-4'
            >
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className='text-2xl text-white mb-4 text-center font-[poppins]'
              >
                {section.title}
              </motion.h2>

              {section.data.map((faq, index) => (
                <motion.div
                  key={index}
                  className='rounded-xl bg-gradient-to-br from-primary/10 to-accent/10 p-4 cursor-pointer'
                  initial={{ opacity: 0, y: 20 }}
                  viewport={{ once: true, amount: 0.5 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                  onClick={() => toggleFAQ(section.title, index)}
                >
                  {/* Question Row */}
                  <div className='flex justify-between items-center'>
                    <h3 className=' text-white'>{faq.question}</h3>
                    <motion.div
                      animate={{
                        rotate: openIndexes[section.title] === index ? 180 : 0,
                      }}
                      transition={{ duration: 0.3 }}
                    >
                      <ChevronDown className='text-white' />
                    </motion.div>
                  </div>

                  {/* Expandable Answer */}
                  <AnimatePresence>
                    {openIndexes[section.title] === index && (
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
          ))}
        </div>
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className='mt-10 text-3xl font-medium text-primary mb-4 text-center font-[poppins]'
        >
          Still have questions?
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className='text-center'
        >
          Reach out at{' '}
          <button 
          onClick={() => window.location.href = '/contact'}
          className='btn bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 text-white rounded-full'>
            Contact Page
          </button>{' '}
          or email us at{' '}
          <a
            href='mailto:support@pixelspulse.dev'
            className='text-aquaGlow underline'
          >
            support@pixelspulse.dev
          </a>
        </motion.p>
      </div>
    </div>
  );
};

export default Help;
