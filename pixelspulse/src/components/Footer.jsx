import React from 'react';

const Footer = () => {
  return (
    <div>
      {' '}
      {/* Footer Section */}
      <footer className=' flex flex-col footer footer-center p-10 bg-base-300 text-base-content'>
        <nav className='grid grid-flow-col gap-4'>
          <a href='/about' className='link link-hover'>
            About us
          </a>
          <a href='/contact' className='link link-hover'>
            Contact
          </a>
          <a href='/terms' className='link link-hover'>
            Terms & Conditions
          </a>
        </nav>
        <nav>
          <div className='grid grid-flow-col gap-4 items-center justify-center'>
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
              href='https://www.linkedin.com/company/pixelspulse/about/?viewAsMember=true'
              className='hover:opacity-80 transition-opacity'
            >
              <img src='linkedin.png' className='size-7' alt='' />
            </a>
          </div>
        </nav>
        <div>
          <p>
            Copyright © {new Date().getFullYear()} - All right reserved by
            PixelsPulse
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
