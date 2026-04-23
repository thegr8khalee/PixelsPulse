import { MenuIcon } from 'lucide-react';
import React from 'react';
import { Link } from 'react-router-dom';

const closeDrawer = () => {
  const el = document.getElementById('my-drawer-3');
  if (el) el.checked = false;
};

const Navbar = () => {
  return (
    <div className='drawer fixed top-0 z-110 font-[poppins]'>
      {/* Checkbox for drawer state */}
      <input id='my-drawer-3' type='checkbox' className='drawer-toggle' />
      <div className='drawer-content flex flex-col'>
        {/* Navbar */}
        <div className='z-110 navbar bg-base-100 shadow-sm sticky top-0'>
          <div className='navbar-start'>
            {/* Logo for mobile - Visible on small screens */}
            <Link
              to='/'
              className="flex lg:hidden text-xl hover:bg-transparent border-0 hover:text-inherit hover:shadow-none font-['poppins'] font-bold items-center"
            >
              <img
                src='/android-chrome-512x512.png'
                alt='PixelPulse.dev Logo'
                className='size-12'
                width='48'
                height='48'
               loading='lazy' decoding='async' />
              <p>PixelsPulse</p>
              <p className='text-accent'>.</p>
              <div className='text-xs items-end font-[poppins] font-medium pt-1'>
                dev
              </div>
            </Link>
            {/* Desktop Navigation - Hidden on small screens */}
            <div className='hidden lg:flex'>
              <ul className='menu menu-horizontal px-1'>
                <li>
                  <Link to='/'>Home</Link>
                </li>
                {/* Services Dropdown */}
                <li>
                  <details>
                    <summary>Services</summary>
                    <ul className='p-2 w-48 bg-base-100 rounded-t-none z-10 shadow'>
                      <li>
                        <Link to='/web-development'>Web Development</Link>
                      </li>
                      <li>
                        <Link to='/mobile-app'>Mobile Apps</Link>
                      </li>
                      <li>
                        <Link to='/ui-ux-design'>UI/UX Design</Link>
                      </li>
                      <li>
                        <Link to='/branding-graphics-design'>
                          Branding & Graphics Design
                        </Link>
                      </li>
                      <li>
                        <Link to='/ai'>AI Solutions</Link>
                      </li>
                      <li>
                        <Link to='/landing-pages-microsites'>
                          Landing Pages & Microsites
                        </Link>
                      </li>
                      <li>
                        <Link to='/performance-optimization'>
                          Performance Optimization
                        </Link>
                      </li>
                      <li>
                        <Link to='/maintenance-support'>Maintenance & Support</Link>
                      </li>
                      <li>
                        <Link to='/e-commerce'>E-commerce Solutions</Link>
                      </li>
                    </ul>
                  </details>
                </li>
                <li>
                  <Link to='/portfolio'>Portfolio</Link>
                </li>
                <li>
                  <Link to='/about'>About</Link>
                </li>
                <li>
                  <Link to='/contact'>Contact Us</Link>
                </li>
              </ul>
            </div>
          </div>
          <div className='navbar-center hidden lg:flex'>
            <Link
              to='/'
              className="flex text-xl hover:bg-transparent border-0 hover:text-inherit hover:shadow-none font-['poppins'] font-bold items-center"
            >
              <img
                src='/android-chrome-512x512.png'
                alt='PixelPulse.dev Logo'
                className='size-12'
                width='48'
                height='48'
               loading='lazy' decoding='async' />
              <p>PixelsPulse</p>
              <p className='text-accent'>.</p>
            </Link>
            <div className='text-xs items-end font-[poppins] font-medium pt-1'>
              dev
            </div>
          </div>
          <div className='navbar-end'>
            {/* Hamburger menu for small screens (toggles drawer) */}
            <label
              htmlFor='my-drawer-3'
              aria-label='open sidebar'
              className='btn btn-ghost lg:hidden'
            >
              <MenuIcon />
            </label>
            {/* Contact Button for desktop */}
            <div className='hidden lg:flex'>
              <Link
                to='/booking'
                className='btn border-none bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 text-white rounded-lg'
              >
                Book a Free Consultation
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className='drawer-side z-9999'>
        <label
          htmlFor='my-drawer-3'
          aria-label='close sidebar'
          className='drawer-overlay'
        ></label>
        <ul className='menu bg-base-200 w-80 min-h-full p-4'>
          <li>
            <Link to='/' onClick={closeDrawer}>Home</Link>
          </li>
          {/* Services Dropdown (for mobile side drawer) */}
          <li>
            <details>
              <summary>Services</summary>
              <ul className='p-2 bg-base-100 rounded-box z-10 shadow'>
                <li>
                  <Link to='/web-development' onClick={closeDrawer}>Web Development</Link>
                </li>
                <li>
                  <Link to='/mobile-app' onClick={closeDrawer}>Mobile Apps</Link>
                </li>
                <li>
                  <Link to='/ui-ux-design' onClick={closeDrawer}>UI/UX Design</Link>
                </li>
                <li>
                  <Link to='/branding-graphics-design' onClick={closeDrawer}>
                    Branding & Graphics Design
                  </Link>
                </li>
                <li>
                  <Link to='/ai' onClick={closeDrawer}>AI Solutions</Link>
                </li>
                <li>
                  <Link to='/landing-pages-microsites' onClick={closeDrawer}>
                    Landing Pages & Microsites
                  </Link>
                </li>
                <li>
                  <Link to='/performance-optimization' onClick={closeDrawer}>
                    Performance Optimization
                  </Link>
                </li>
                <li>
                  <Link to='/maintenance-support' onClick={closeDrawer}>Maintenance & Support</Link>
                </li>
                <li>
                  <Link to='/e-commerce' onClick={closeDrawer}>E-commerce Solutions</Link>
                </li>
              </ul>
            </details>
          </li>
          <li>
            <Link to='/portfolio' onClick={closeDrawer}>Portfolio</Link>
          </li>
          <li>
            <Link to='/about' onClick={closeDrawer}>About</Link>
          </li>
          <li>
            <Link to='/contact' onClick={closeDrawer}>Contact Us</Link>
          </li>
          <li className='mt-4'>
            <Link
              to='/booking'
              onClick={closeDrawer}
              className='btn bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 text-white rounded-lg'
            >
              Book a Free Consultation
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
