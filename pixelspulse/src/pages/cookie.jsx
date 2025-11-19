import React from 'react';
import { BackgroundGradientAnimation } from '../components/bg';
import { usePageLoader } from '../hooks/usePageLoader';

const CookiePolicy = () => {
  usePageLoader([]);
  return (
    <div className='py-16'>
      <section id='Hero' className='w-full text-center'>
        <BackgroundGradientAnimation className='h-50 justify-center items-center flex flex-col space-y-2 px-2'>
          <div className='z-100 text-2xl sm:text-4xl font-bold font-[poppins]'>
            PixelsPulse.dev - 
            <span className='text-primary'> Cookie Policy</span>
          </div>
          <div className='z-100 text-sm sm:text-base font-[montserrat]'>
            <b>Last Updated:</b> July 16, 2025
          </div>
        </BackgroundGradientAnimation>
        <div className='w-full text-start items-start justify-center flex py-4'>
          <p className='px-2 font-[poppins] max-w-7xl'>
            PixelsPulse (“we,” “our,” “us”) uses cookies and similar technologies 
            to improve your browsing experience on our website. This Cookie Policy 
            explains what cookies are, how we use them, and how you can manage your preferences.
          </p>
        </div>
      </section>

      <section className='w-full flex flex-col justify-center items-center text-start px-4 mt-6 mb-20'>
        <div className='w-full max-w-7xl'>
          {/* 1. What Are Cookies */}
          <h1 className='text-2xl sm:text-3xl font-bold font-[poppins] text-primary'>
            1. What Are Cookies?
          </h1>
          <p className='mt-2 font-[poppins]'>
            Cookies are small text files placed on your device when you visit a website. 
            They help websites recognize your device and remember information about your visit, 
            such as preferences and activity.
          </p>

          {/* 2. Types of Cookies */}
          <h1 className='text-2xl mt-6 sm:text-3xl font-bold font-[poppins] text-primary'>
            2. Types of Cookies We Use
          </h1>
          <ul className='list-disc px-4 font-[poppins]'>
            <li>
              <b>Essential Cookies:</b> Required for the website to function properly 
              (e.g., navigation, security).
            </li>
            <li>
              <b>Analytics Cookies:</b> Used to understand how visitors interact with our site, 
              so we can improve functionality and content.
            </li>
            <li>
              <b>Preference Cookies:</b> Remember your settings and preferences 
              (such as language or newsletter subscription state).
            </li>
          </ul>

          {/* 3. How We Use Cookies */}
          <h1 className='text-2xl mt-6 sm:text-3xl font-bold font-[poppins] text-primary'>
            3. How We Use Cookies
          </h1>
          <ul className='list-disc px-4 font-[poppins]'>
            <li>Ensure the website functions smoothly.</li>
            <li>Monitor site performance and visitor engagement.</li>
            <li>Improve your browsing experience.</li>
            <li>Deliver relevant updates and content.</li>
          </ul>

          {/* 4. Third-Party Cookies */}
          <h1 className='text-2xl mt-6 sm:text-3xl font-bold font-[poppins] text-primary'>
            4. Third-Party Cookies
          </h1>
          <p className='mt-2 font-[poppins]'>
            Some cookies may be placed by trusted third-party providers, such as:
          </p>
          <ul className='list-disc px-4 font-[poppins]'>
            <li>Analytics tools (e.g., Google Analytics).</li>
            <li>Email marketing platforms (e.g., Mailchimp, Brevo) for newsletter delivery.</li>
          </ul>

          {/* 5. Managing Cookies */}
          <h1 className='text-2xl mt-6 sm:text-3xl font-bold font-[poppins] text-primary'>
            5. Managing Cookies
          </h1>
          <p className='mt-2 font-[poppins]'>
            You can manage or disable cookies through your browser settings. 
            Most browsers allow you to delete existing cookies, block cookies from specific sites, 
            or receive alerts before cookies are stored. Please note: disabling cookies may affect 
            the functionality of our website.
          </p>

          {/* 6. Updates */}
          <h1 className='text-2xl mt-6 sm:text-3xl font-bold font-[poppins] text-primary'>
            6. Updates to This Policy
          </h1>
          <p className='mt-2 font-[poppins]'>
            We may update this Cookie Policy from time to time to reflect changes in technology, 
            law, or our practices. Updates will be posted on this page with a revised “Last Updated” date.
          </p>

          {/* 7. Contact */}
          <h1 className='text-2xl mt-6 sm:text-3xl font-bold font-[poppins] text-primary'>
            7. Contact Us
          </h1>
          <p className='mt-2 font-[poppins]'>
            If you have any questions about this Cookie Policy, please contact us at{' '}
            <a
              href='mailto:info@pixelspulse.dev'
              className='text-primary underline hover:text-primary/80'
            >
              info@pixelspulse.dev
            </a>.
          </p>
        </div>
      </section>
    </div>
  );
};

export default CookiePolicy;
