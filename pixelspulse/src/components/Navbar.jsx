import { MenuIcon } from 'lucide-react';
import React from 'react';

const Navbar = () => {
  return (
    <div className='drawer sticky top-0 z-110 font-[poppins]'>
      {/* Checkbox for drawer state */}
      <input id='my-drawer-3' type='checkbox' className='drawer-toggle' />
      <div className='drawer-content flex flex-col'>
        {/* Navbar */}
        <div className='z-110 navbar bg-base-100 shadow-sm sticky top-0'>
          <div className='navbar-start'>
            {/* Hamburger menu for small screens (toggles drawer) */}
            <label
              htmlFor='my-drawer-3'
              aria-label='open sidebar'
              className='btn btn-ghost lg:hidden'
            >
              <MenuIcon />
            </label>
            {/* Desktop Navigation - Hidden on small screens */}
            <div className='hidden lg:flex'>
              <ul className='menu menu-horizontal px-1'>
                <li>
                  <a href='/'>Home</a>
                </li>
                {/* Services Dropdown */}
                <li>
                  <details>
                    <summary>Services</summary>
                    <ul className='p-2 w-48 bg-base-100 rounded-t-none z-10 shadow'>
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
                        <a href='/landing-pages-microsites'>
                          Landing Pages & Microsites
                        </a>
                      </li>
                      <li>
                        <a href='/performance-optimization'>
                          Performance Optimization
                        </a>
                      </li>
                      <li>
                        <a href='/maintenance-support'>
                          Maintenance & Support
                        </a>
                      </li>
                      <li>
                        <a href='/e-commerce'>
                          E-commerce Solutions
                        </a>
                      </li>
                    </ul>
                  </details>
                </li>
                <li>
                  <a href='/portfolio'>Portfolio</a>
                </li>
                <li>
                  <a href='/about'>About</a>
                </li>
                <li>
                  <a href='/contact'>Contact Us</a>
                </li>{' '}
                {/* Added Contact Us */}
              </ul>
            </div>
          </div>
          <div className='navbar-center'>
            <a
              href='/'
              className="flex text-xl hover:bg-transparent border-0 hover:text-inherit hover:shadow-none font-['poppins'] font-bold items-center"
            >
              <img
                src='/android-chrome-512x512.png'
                alt='PixelPulse.dev Logo'
                className='size-12'
              />
              <p>PixelsPulse</p>
              <p className='text-accent'>.</p>
            </a>
          </div>
          {/* Moved 'dev' part to be adjacent to the logo within navbar-center for better alignment */}
          <div className='text-xs items-end font-[poppins] font-medium pt-1'>
            dev
          </div>
          <div className='navbar-end'>
            {/* Contact Button for desktop */}
            <div className='hidden lg:flex'>
              <a
                href='/contact'
                className='btn bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 text-white rounded-xl'
              >
                Get a Consultation
              </a>
            </div>
          </div>
        </div>
        {/* Page content here */}
        {/* Your main page content should go here */}
      </div>
      <div className='drawer-side z-9999'>
        <label
          htmlFor='my-drawer-3'
          aria-label='close sidebar'
          className='drawer-overlay'
        ></label>
        <ul className='menu bg-base-200 w-80 min-h-full p-4'>
          {/* Sidebar content here */}
          <li>
            <a href='/'>Home</a>
          </li>
          {/* Services Dropdown (for mobile side drawer) */}
          <li>
            <details>
              <summary>Services</summary>
              <ul className='p-2 bg-base-100 rounded-box z-10 shadow'>
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
                  <a href='/landing-pages-microsites'>
                    Landing Pages & Microsites
                  </a>
                </li>
                <li>
                  <a href='/performance-optimization'>
                    Performance Optimization
                  </a>
                </li>
                <li>
                  <a href='/maintenance-support'>
                    Maintenance & Support
                  </a>
                </li>
                <li>
                  <a href='/e-commerce'>
                    E-commerce Solutions
                  </a>
                </li>
              </ul>
            </details>
          </li>
          <li>
            <a href='/portfolio'>Portfolio</a>
          </li>
          <li>
            <a href='/about'>About</a>
          </li>
          <li>
            <a href='/contact'>Contact Us</a>
          </li>
          <li className='mt-4'>
            <a
              href='/contact'
              className='btn bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 text-white rounded-xl'
            >
              Get a Consultation
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
