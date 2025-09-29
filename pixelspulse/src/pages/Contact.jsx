import React, { useState } from 'react';
import { BackgroundGradientAnimation } from '../components/bg';
// eslint-disable-next-line no-unused-vars
import { motion } from 'framer-motion';
import {
  AppleIcon,
  ArrowUpWideNarrow,
  Brush,
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
  HandCoins,
  Handshake,
  Heart,
  Lightbulb,
  Loader2,
  Lock,
  Megaphone,
  MessageCircle,
  MonitorSmartphone,
  Repeat,
  Rocket,
  Search,
  Settings2Icon,
  ShieldCheck,
  TableOfContents,
  TabletSmartphone,
  ThumbsUp,
  Trophy,
  UserRound,
} from 'lucide-react';
import { useContactStore } from '../store/use.email.store';
// import whatsapp from '../images/whatsapp_4401461.png'; // Assuming correct path
// import ig from '../images/ig.png';
// import tiktok from '../images/tik-tok_4782345 (1).png';
// import x from '../images/twitter_5968830.png';

const Contact = () => {
  const { sendEmail, isLoading } = useContactStore();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    sendEmail(formData);
  };
  return (
    <div className='pt-16'>
      <section id='Hero' className='w-full text-center'>
        <BackgroundGradientAnimation className='h-50 justify-center items-center flex flex-col space-y-2 px-2'>
          <div className='z-100 text-2xl sm:text-4xl font-bold font-[poppins]'>
            Your Digital Journey Starts
            <span className='text-primary'> Here!</span>
          </div>
          <div className='z-100 text-sm sm:text-base font-[montserrat]'>
            Ready to infuse life into your brand's digital presence? Send us a
            message now!
          </div>
        </BackgroundGradientAnimation>
      </section>
      <section className='w-full flex flex-col justify-center items-center  px-4 mt-6 mb-20 font-[poppins]'>
        <div className='bg-base-100 pb-4 w-full max-w-4xl rounded-lg shadow-xl'>
          <form onSubmit={handleSubmit} className='space-y-4'>
            <div>
              <label className='label'>
                <span className='label-text text-base-content'>Your Name</span>
              </label>
              <input
                type='text'
                id='name'
                name='name'
                placeholder='Name Surname'
                value={formData.name}
                onChange={handleChange}
                className='input input-bordered w-full rounded-md'
                required
              />
            </div>
            <div>
              <label htmlFor='email' className='label'>
                <span className='label-text text-base-content'>Your Email</span>
              </label>
              <input
                type='email'
                id='email'
                name='email'
                value={formData.email}
                onChange={handleChange}
                placeholder='Enter your email'
                className='input input-bordered w-full rounded-md'
                required
              />
            </div>
            <div>
              <label htmlFor='subject' className='label'>
                <span className='label-text text-base-content'>Subject</span>
              </label>
              <input
                type='text'
                id='subject'
                name='subject'
                value={formData.subject}
                onChange={handleChange}
                placeholder='e.g Inquiry about web development'
                className='input input-bordered w-full rounded-md'
                required
              />
            </div>
            <div>
              <label htmlFor='message' className='label'>
                <span className='label-text text-base-content'>
                  Your Message
                </span>
              </label>
              <textarea
                id='message'
                name='message'
                value={formData.message}
                onChange={handleChange}
                placeholder='Type your message here...'
                className='textarea textarea-bordered h-32 w-full rounded-md'
                required
              ></textarea>
            </div>
            <button
              type='submit'
              className='sm:flex-1 btn border-none py-3.5 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 text-white font-medium  shadow-lg hover:shadow-xl font-[poppins] w-full'
              disabled={isLoading}
            >
              {isLoading ? (
                <Loader2 className='animate-spin mr-2' />
              ) : (
                'Send Message'
              )}
            </button>
          </form>
        </div>
        <div className='bg-base-100 w-full max-w-4xl rounded-lg shadow-xl'>
          <h2 className='text-2xl font-semibold font-[poppins] mb-6 text-primary'>
            Our Contact Details
          </h2>
          <div className='space-y-4 text-base-content'>
            <div>
              <h3 className='font-bold text-lg'>Email:</h3>
              <p>
                <a
                  href='mailto:pixelspulsedev@gmail.com'
                  className=' hover:underline'
                >
                  pixelspulsedev@gmail.com
                </a>
              </p>
            </div>

            <div>
              <h3 className='font-bold text-lg'>Business Hours:</h3>
              <p>Open 24/7</p>
            </div>
            <div>
              <h3 className='font-bold text-lg'>Follow Us:</h3>
              <div className='flex space-x-4 mt-2'>
                <a
                  href='https://www.instagram.com/pixelspulse.dev?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=='
                  target='_blank'
                  rel='noopener noreferrer'
                  className='hover:opacity-80 transition-opacity'
                >
                  <img src='instagram.png' className='size-7' alt='' />
                </a>
                <a
                  href='https://x.com/pixelspulsedev'
                  target='_blank'
                  rel='noopener noreferrer'
                  className='hover:opacity-80 transition-opacity'
                >
                  <img src='twitter.png' className='size-7' alt='' />
                </a>
                <a
                  target='_blank'
                  rel='noopener noreferrer'
                  href='https://www.linkedin.com/company/pixelspulse'
                  className='hover:opacity-80 transition-opacity'
                >
                  <img src='linkedin.png' className='size-7' alt='' />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
