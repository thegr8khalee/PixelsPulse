import React from 'react';
import { BackgroundGradientAnimation } from '../components/bg';
import { usePageLoader } from '../hooks/usePageLoader';
import SEO from '../components/SEO';

const Privacy = () => {
  usePageLoader([]);
  return (
    <div className='py-16'>
      <SEO 
        title="Privacy Policy | PixelsPulse"
        description="Read our privacy policy to understand how PixelsPulse collects, uses, and protects your personal information."
      />
      {/* Hero Section */}
      <section id='Hero' className='w-full text-center'>
        <BackgroundGradientAnimation className='h-50 justify-center items-center flex flex-col space-y-2 px-2'>
          <div className='z-100 text-2xl sm:text-4xl font-bold font-[poppins]'>
            PixelsPulse.dev -
            <span className='text-primary'> Privacy Policy</span>
          </div>
          <div className='z-100 text-sm sm:text-base font-[montserrat]'>
            <b>Last Updated:</b> July 16, 2025
          </div>
        </BackgroundGradientAnimation>
        <div className='w-full text-start items-start justify-center flex py-4'>
          <p className='px-2 font-[poppins] max-w-7xl'>
            PixelsPulse (“we,” “our,” “us”) is committed to protecting your
            privacy. This Privacy Policy explains how we collect, use, and
            safeguard your information when you use our website and subscribe to
            our newsletter.
          </p>
        </div>
      </section>

      {/* Content Section */}
      <section className='w-full flex flex-col justify-center items-center text-start px-4 mt-6 mb-20'>
        <div className='w-full max-w-7xl'>
          {/* Section 1 */}
          <h1 className='text-2xl sm:text-3xl font-bold font-[poppins] text-primary'>
            1. Information We Collect
          </h1>
          <ul className='list-disc px-4'>
            <li>
              <b>Email Address:</b> When you subscribe to our newsletter, we
              collect your email address.
            </li>
            <li>
              <b>Non-Personal Data:</b> Like most websites, we may collect basic
              information (e.g., browser type, IP address, pages visited)
              through cookies or analytics tools.
            </li>
          </ul>

          {/* Section 2 */}
          <h1 className='text-2xl mt-6 sm:text-3xl font-bold font-[poppins] text-primary'>
            2. How We Use Your Information
          </h1>
          <p className='mt-2 font-[poppins] max-w-7xl'>
            We use your information to:
          </p>
          <ul className='list-disc px-4'>
            <li>Send newsletters, updates, and announcements.</li>
            <li>Improve our website and understand visitor engagement.</li>
            <li>Ensure compliance with applicable laws.</li>
          </ul>

          {/* Section 3 */}
          <h1 className='text-2xl mt-6 sm:text-3xl font-bold font-[poppins] text-primary'>
            3. Sharing of Information
          </h1>
          <p className='mt-2 font-[poppins] max-w-7xl'>
            We do not sell or rent your information. We may only share data
            with:
          </p>
          <ul className='list-disc px-4'>
            <li>
              Trusted email service providers (e.g., Mailchimp, Brevo, or
              similar) to send newsletters.
            </li>
            <li>Legal authorities if required by law.</li>
          </ul>

          {/* Section 4 */}
          <h1 className='text-2xl mt-6 sm:text-3xl font-bold font-[poppins] text-primary'>
            4. Cookies
          </h1>
          <p className='mt-2 font-[poppins] max-w-7xl'>
            Our site may use cookies or analytics tools to track general usage
            patterns. You can disable cookies in your browser settings if you
            prefer.
          </p>

          {/* Section 5 */}
          <h1 className='text-2xl mt-6 sm:text-3xl font-bold font-[poppins] text-primary'>
            5. Data Security
          </h1>
          <p className='mt-2 font-[poppins] max-w-7xl'>
            We use reasonable safeguards to protect your email address and
            browsing data. However, no method of storage or transmission is 100%
            secure.
          </p>

          {/* Section 6 */}
          <h1 className='text-2xl mt-6 sm:text-3xl font-bold font-[poppins] text-primary'>
            6. Your Rights
          </h1>
          <ul className='list-disc px-4'>
            <li>
              <b>Unsubscribe:</b> You can unsubscribe anytime by clicking the
              link in our emails.
            </li>
            <li>
              <b>Data Deletion:</b> You may request deletion of your email from
              our mailing list by contacting us.
            </li>
          </ul>

          {/* Section 7 */}
          <h1 className='text-2xl mt-6 sm:text-3xl font-bold font-[poppins] text-primary'>
            7. Children’s Privacy
          </h1>
          <p className='mt-2 font-[poppins] max-w-7xl'>
            Our services are not directed at children under 16. We do not
            knowingly collect information from minors.
          </p>

          {/* Section 8 */}
          <h1 className='text-2xl mt-6 sm:text-3xl font-bold font-[poppins] text-primary'>
            8. Updates to This Policy
          </h1>
          <p className='mt-2 font-[poppins] max-w-7xl'>
            We may update this Privacy Policy occasionally. The “Last Updated”
            date will always show the latest version.
          </p>

          {/* Section 9 */}
          <h1 className='text-2xl mt-6 sm:text-3xl font-bold font-[poppins] text-primary'>
            9. Contact Us
          </h1>
          <p className='mt-2 font-[poppins] max-w-7xl'>
            If you have questions about this Privacy Policy, please contact us
            at: <br />
            <a
              href='mailto:info@pixelspulse.dev'
              className='text-primary underline hover:text-primary/80'
            >
              info@pixelspulse.dev
            </a>{' '}
            <br />
            <a
              href='https://pixelsPulse.com'
              className='text-primary underline hover:text-primary/80'
            >
              pixelsPulse.com
            </a>
          </p>
        </div>
      </section>
    </div>
  );
};

export default Privacy;
