import React from 'react';
import { Check, Calendar, Clock, Video, Loader2 } from 'lucide-react';
import { InlineWidget } from 'react-calendly';
import { usePageLoader } from '../hooks/usePageLoader';

const Booking = () => {
  usePageLoader(['instagram.webp', 'twitter.webp', 'linkedin.webp']);

  const CustomLoader = () => (
    <div className='flex items-center justify-center h-[900px] w-full'>
      <Loader2 className='size-10 animate-spin text-primary' />
    </div>
  );

  return (
    <div className='font-[montserrat] min-h-screen bg-base-100 py-20 px-4 sm:px-6 lg:px-8'>
      <div className='max-w-6xl mx-auto'>
        {/* Header */}
        <div className='text-center mb-12'>
          <h1 className="text-4xl md:text-5xl font-medium text-white mb-4 font-['poppins']">
            Schedule Your Free{' '}
            <span className='text-primary'>Consultation</span>
          </h1>
          <p className='text-lg text-gray-300 max-w-2xl mx-auto'>
            Book a meeting with our team to discuss your project goals and how
            we can bring your vision to life!
          </p>
        </div>

        <div className='grid grid-cols-1 lg:grid-cols-3 gap-8'>
          {/* Calendly Widget */}
          <div className='max-w-[645px] w-full lg:ml-auto lg:mx-0 mx-auto lg:col-span-2'>
            <div className='relative bg-gradient-to-br from-primary/10 to-accent/10 backdrop-blur-lg rounded-3xl overflow-hidden'>
              <InlineWidget
                url='https://calendly.com/pixelspulsedev/30min?background_color=ffffff&text_color=000000&primary_color=30d5f3'
                LoadingSpinner={CustomLoader}
                styles={{
                  height: '900px',
                  width: '100%',
                  borderRadius: '1.5rem',
                  marginBottom: '0',
                  marginTop: '0',
                  border: 'none',
                  padding: '0',
                  scrollbarWidth: 'none',
                  overflowY: 'hidden',
                }}
              />
            </div>
          </div>

          {/* Contact Information */}
          <div className='lg:col-span-1 space-y-12'>
            {/* What to Expect */}
            <div className='bg-gradient-to-br from-primary/10 to-accent/10 backdrop-blur-lg rounded-2xl shadow-2xl p-6'>
              <h3 className='text-xl font-semibold text-white mb-4'>
                What to Expect
              </h3>
              <ul className='space-y-3 text-gray-300 text-sm'>
                <li className='flex items-start gap-2'>
                  <Check className='w-5 h-5 text-accent flex-shrink-0 mt-0.5' />
                  <span>Discuss your project goals and requirements</span>
                </li>
                <li className='flex items-start gap-2'>
                  <Check className='w-5 h-5 text-accent flex-shrink-0 mt-0.5' />
                  <span>Get expert advice and recommendations</span>
                </li>
                <li className='flex items-start gap-2'>
                  <Check className='w-5 h-5 text-accent flex-shrink-0 mt-0.5' />
                  <span>Receive a preliminary timeline estimate</span>
                </li>
                <li className='flex items-start gap-2'>
                  <Check className='w-5 h-5 text-accent flex-shrink-0 mt-0.5' />
                  <span>Learn about our process and approach</span>
                </li>
                <li className='flex items-start gap-2'>
                  <Check className='w-5 h-5 text-accent flex-shrink-0 mt-0.5' />
                  <span>Ask any questions you have</span>
                </li>
              </ul>
            </div>

            {/* Contact Details */}
            <div className='bg-gradient-to-br from-primary/10 to-accent/10 backdrop-blur-lg rounded-2xl shadow-2xl p-6'>
              <h3 className='text-xl font-semibold text-white mb-4'>
                Prefer to Reach Out?
              </h3>

              <div className='space-y-4'>
                <div>
                  <p className='text-sm text-gray-400 mb-1'>Email:</p>
                  <a
                    href='mailto:pixelspulsedev@gmail.com'
                    className='text-primary hover:text-accent transition flex items-center gap-2 break-all'
                  >
                    info@pixelspulse.dev
                  </a>
                </div>

                <div>
                  <p className='text-sm text-gray-400 mb-1'>Business Hours:</p>
                  <p className='text-white'>Open 24/7</p>
                  <p className='text-xs text-gray-400 mt-1'>
                    We respond within 24 hours
                  </p>
                </div>

                <div>
                  <p className='text-sm text-gray-400 mb-2'>Follow Us:</p>
                  <div className='flex gap-3'>
                    <a
                      href='https://www.instagram.com/pixelspulse.dev?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=='
                      target='_blank'
                      rel='noopener noreferrer'
                      className='hover:opacity-80 transition'
                    >
                      <img
                        src='instagram.webp'
                        alt='Instagram'
                        className='size-10'
                      />
                    </a>
                    <a
                      href='https://twitter.com/pixelspulsedev'
                      target='_blank'
                      rel='noopener noreferrer'
                      className='hover:opacity-80 transition'
                    >
                      <img
                        src='twitter.webp'
                        alt='Twitter'
                        className='size-10'
                      />
                    </a>
                    <a
                      href='https://www.linkedin.com/company/pixelspulse'
                      target='_blank'
                      rel='noopener noreferrer'
                      className='hover:opacity-80 transition'
                    >
                      <img
                        src='linkedin.webp'
                        alt='LinkedIn'
                        className='size-10'
                      />
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Why Choose Us */}
            <div className='bg-gradient-to-br from-primary/10 to-accent/10 backdrop-blur-lg rounded-2xl shadow-2xl p-6'>
              <h3 className='text-xl font-semibold text-white mb-4'>
                Why Choose Us?
              </h3>
              <ul className='space-y-3 text-gray-300 text-sm'>
                <li className='flex items-start gap-2'>
                  <Check className='w-5 h-5 text-accent flex-shrink-0 mt-0.5' />
                  <span>24/7 Support & Fast Response</span>
                </li>
                <li className='flex items-start gap-2'>
                  <Check className='w-5 h-5 text-accent flex-shrink-0 mt-0.5' />
                  <span>Expert Team of Developers & Designers</span>
                </li>
                <li className='flex items-start gap-2'>
                  <Check className='w-5 h-5 text-accent flex-shrink-0 mt-0.5' />
                  <span>Transparent Pricing & No Hidden Fees</span>
                </li>
                <li className='flex items-start gap-2'>
                  <Check className='w-5 h-5 text-accent flex-shrink-0 mt-0.5' />
                  <span>On-Time Delivery Guaranteed</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom CTA */}
        <div className='mt-12 text-center'>
          <div className='bg-gradient-to-br from-primary/10 to-accent/10 backdrop-blur-lg rounded-2xl p-8'>
            <h3 className='text-2xl font-semibold text-white mb-3'>
              Can't Find a Suitable Time?
            </h3>
            <p className='text-gray-300 mb-6 max-w-2xl mx-auto'>
              No worries! Send us a message and we'll work with you to find a
              time that fits your schedule.
            </p>
            <a
              href='/contact'
              className='inline-block bg-gradient-to-br from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 duration-300 text-white font-semibold py-3 px-8 rounded-full focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2 focus:ring-offset-slate-900 transition'
            >
              Contact Us Instead
            </a>
          </div>
        </div>

        <div className='mt-6 text-start md:text-center grid grid-cols-1 md:grid-cols-2 gap-6'>
          <div className='bg-gradient-to-br from-primary/10 to-accent/10 backdrop-blur-lg rounded-2xl p-8'>
            <h3 className='text-2xl font-semibold text-white'>
              Contact Sales
            </h3>
            <p className='text-gray-300 mb-2 max-w-2xl mx-auto'>
              Interested in our services? Our sales team is here to help you.
            </p>
            <div>
              <p className='text-sm text-gray-400 mb-1'>Email:</p>
              <a
                href='mailto:sales@pixelspulse.dev'
                className='items-center justify-start md:justify-center text-primary text-start sm:text-center hover:text-accent transition flex gap-2 break-all'
              >
                sales@pixelspulse.dev
              </a>
            </div>

            <div>
              <p className='text-sm text-gray-400 mb-1'>Business Hours:</p>
              <p className='text-white'>Open 24/7</p>
              <p className='text-xs text-gray-400 mt-1'>
                We respond within 24 hours
              </p>
            </div>
          </div>
          <div className='bg-gradient-to-br from-primary/10 to-accent/10 backdrop-blur-lg rounded-2xl p-8'>
            <h3 className='text-2xl font-semibold text-white'>
              Contact Support
            </h3>
            <p className='text-gray-300 mb-2 max-w-2xl mx-auto'>
              Interested in our services? Our support team is here to help you.
            </p>
            <div>
              <p className='text-sm text-gray-400 mb-1'>Email:</p>
              <a
                href='mailto:support@pixelspulse.dev'
                className='items-center justify-start md:justify-center text-primary text-start sm:text-center hover:text-accent transition flex gap-2 break-all'
              >
                support@pixelspulse.dev
              </a>
            </div>

            <div>
              <p className='text-sm text-gray-400 mb-1'>Business Hours:</p>
              <p className='text-white'>Open 24/7</p>
              <p className='text-xs text-gray-400 mt-1'>
                We respond within 24 hours
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Booking;
