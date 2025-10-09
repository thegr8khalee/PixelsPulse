import { ArrowUpRight } from 'lucide-react';
import React, { useState } from 'react';
import { useNewstellerStore } from '../store/use.newsteller';

const Footer = () => {
  const { isLoading, registerToNewsteller } = useNewstellerStore();
  const [email, setEmail] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    registerToNewsteller({ email });
  };

  return (
    <div className='bg-base-300 p-8'>
      <div className='grid grid-cols-2 gap-8 max-w-7xl mx-auto'>
        <div className='flex flex-col space-y-4'>
          <div>
            <h1 className='text-gray-400'>Overview</h1>
            <ul>
              <li>
                <a href='/' className='text-white hover:text-aquaGlow'>
                  Home
                </a>
              </li>
              <li>
                <a href='/about' className='text-white hover:text-aquaGlow'>
                  About Us
                </a>
              </li>
              <li>
                <a href='/services' className='text-white hover:text-aquaGlow'>
                  Services
                </a>
              </li>
              <li>
                <a href='/portfolio' className='text-white hover:text-aquaGlow'>
                  Portfolio
                </a>
              </li>
              <li>
                <a href='/contact' className='text-white hover:text-aquaGlow'>
                  Contact
                </a>
              </li>
            </ul>
          </div>
        </div>
        {/* <div className='flex flex-col space-y-4'>
          <div>
            <h1 className='text-gray-400'>Services</h1>
            <ul className=''>
              <li>
                <a href='/web-development'>Web Development</a>
              </li>
              <li>
                <a href='/mobile-app'>Mobile Apps</a>
              </li>
              <li>
                <a href='/ui-ux-design'>UI/UX Design</a>
              </li>
              <li>
                <a href='/branding-graphics-design'>
                  Branding & Graphics Design
                </a>
              </li>
              <li>
                <a href='/ai'>AI Solutions</a>
              </li>
              <li>
                <a href='/landing-pages-microsites'>
                  Landing Pages & Microsites
                </a>
              </li>
              <li>
                <a href='/performance-optimization'>Performance Optimization</a>
              </li>
              <li>
                <a href='/maintenance-support'>Maintenance & Support</a>
              </li>
              <li>
                <a href='/e-commerce'>E-commerce Solutions</a>
              </li>
            </ul>
          </div>
        </div> */}
        <div className='flex flex-col space-y-4'>
          <div>
            <h1 className='text-gray-400'>User Support</h1>
            <ul>
              <li>
                <a href='/help' className='text-white hover:text-aquaGlow'>
                  Help Center
                </a>
              </li>
              <li>
                <a href='/privacy' className='text-white hover:text-aquaGlow'>
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href='/terms' className='text-white hover:text-aquaGlow'>
                  Terms & Conditions
                </a>
              </li>
              <li>
                <a href='/cookie' className='text-white hover:text-aquaGlow'>
                  Cookie Policy / prefernce
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className='border-t border-b border-gray-500 mt-8 py-8 items-center justify-center w-full flex space-x-20 md:space-x-40'>
        <a href='https://x.com/pixelspulsedev?t=DvQpEamV3Ed9S0Q6mnzHrA&s=09'>
          <img src='twitter.png' alt='' className='size-10' />
        </a>
        <a href='https://www.instagram.com/pixelspulse.dev?igsh=MThndWxxemRwZWtzZg=='>
          <img src='instagram.png' alt='' className='size-10' />
        </a>
        <a href='https://www.linkedin.com/company/pixelspulse'>
          <img src='linkedin.png' alt='' className='size-10' />
        </a>
      </div>
      <div className='hidden lg:flex border-b border-gray-500 space-y-8 md:space-y-0 md:space-x-20 items-center justify-center w-full px-4 mt-8'>
        <div className='flex flex-1 space-x-10 items-center justify-center'>
          <img src='/Logo.png' alt='' className='w-40' />
          <a
            href='/'
            className="flex text-xl hover:bg-transparent border-0 hover:text-inherit hover:shadow-none font-['poppins'] font-bold items-end"
          >
            <p className='text-6xl'>PixelsPulse</p>
            <p className='text-accent text-3xl mr-1'>.</p>
            <div className='text-xl items-end font-[poppins] font-medium pt-1'>
              dev
            </div>
          </a>
        </div>
        <div className='flex-1 py-8 items-center justify-center w-full flex flex-col'>
          <div className='w-full text-start'>
            <h1 className='text-gray-400'>Subscribe to our Newsletter</h1>
          </div>
          <form
            onSubmit={handleSubmit}
            className='bg-white p-1 pl-4 border rounded-full focus:outline-none w-full flex justify-between'
          >
            <input
              type='email'
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              id='newsletter'
              placeholder='Email Address'
              className='w-full bg-transparent text-black placeholder:text-gray-600 border-none outline-none'
            />
            <button
              disabled={isLoading || email.trim() === ''}
              type='submit'
              className='bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700  text-white pl-4 p-4 rounded-full font-medium transition-all duration-200 items-center gap-2 shadow-lg hover:shadow-xl'
            >
              {isLoading ? 'Subscribing...' : 'Subscribe'}
            </button>
          </form>
        </div>
      </div>
      <div className='flex lg:hidden py-8 border-b border-gray-500 flex-col space-y-8 md:space-x-20 items-center justify-center w-full px-4 mt-8'>
        <div className='flex-1 items-center justify-center w-full flex flex-col'>
          <div className='w-full text-start'>
            <h1 className='text-gray-400'>Subscribe to our Newsletter</h1>
          </div>
          <div className='mt-4 w-full'>
            <form
              onSubmit={handleSubmit}
              className='bg-white p-1 pl-4 border rounded-full focus:outline-none w-full flex justify-between'
            >
              <input
                type='email'
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                id='newsletter'
                placeholder='Email Address'
                className='w-full bg-transparent text-black placeholder:text-gray-600 border-none outline-none'
              />
              <button
                disabled={isLoading || email.trim() === ''}
                type='submit'
                className='bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700  text-white pl-4 p-4 rounded-full font-medium transition-all duration-200 items-center gap-2 shadow-lg hover:shadow-xl'
              >
                {isLoading ? 'Subscribing...' : 'Subscribe'}
              </button>
            </form>
          </div>
        </div>
        <div className='flex flex-1 space-x-5 items-center justify-center'>
          <img src='/Logo.png' alt='' className='w-20 sm:w-40' />
          <a
            href='/'
            className="flex text-xl hover:bg-transparent border-0 hover:text-inherit hover:shadow-none font-['poppins'] font-bold items-end"
          >
            <p className='text-xl sm:text-6xl'>PixelsPulse</p>
            <p className='text-accent text-3xl mr-1'>.</p>
            <div className='text-xl items-end font-[poppins] font-medium pt-1'>
              dev
            </div>
          </a>
        </div>
      </div>
      <div className='mt-8 w-full flex items-center justify-center'>
        <p className='text-gray-400'>
          © 2025 PixelsPulse. All rights reserved.
        </p>
      </div>
    </div>
  );
};

export default Footer;
