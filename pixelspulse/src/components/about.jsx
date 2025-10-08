// eslint-disable-next-line no-unused-vars
import { motion } from 'framer-motion';

const AboutSection = () => {
  const fadeUp = {
    initial: { opacity: 0, y: 30 },
    whileInView: { opacity: 1, y: 0 },
    transition: { duration: 0.6 },
    viewport: { once: true, amount: 0.2 },
  };

  return (
    <section className='py-20 px-8 sm:px-6 lg:px-8 bg-base-100 max-w-4xl mx-auto'>
      <div className='max-w-7xl mx-auto'>
        <div className='text-center mb-16 space-y-8'>
          <motion.div {...fadeUp}>
            <h2 className="text-4xl sm:text-6xl md:text-6xl lg:text-6xl mb-1 font-['Poppins'] font-medium">
              About Us
            </h2>
            <p className="text-lg max-w-2xl mx-auto font-['montserrat'] mb-2 text-accent">
              "We Pulse With Code, Design & Vision."
            </p>
            <p className='font-["poppins"]'>
              At Pixelspulse, we're more than just developers or designers —
              we're creative engineers crafting bold digital experiences powered
              by clean code, sharp visuals, and intuitive strategy.
            </p>
          </motion.div>

          <motion.div {...fadeUp} className='py-12'>
            <div className='flex flex-col md:flex-row items-center justify-center gap-8 mb-6 max-w-4xl mx-auto'>
              <TestimonialCard className='' />
              <div className='flex flex-col'>
                <h2 className="sm:text-start mb-4 text-3xl sm:text-4xl md:text-4xl lg:text-4xl font-['Poppins'] font-medium">
                  Our Founder's Message
                </h2>
                <p className='text-start font-["montserrat"] max-w-3xl mx-auto'>
                  “At PixelsPuls, our mission is simple; to bring brands to
                  life through technology. We believe every brand has a digital
                  heartbeat, and our job is to make it stronger through design,
                  innovation, and seamless user experiences.”
                </p>
                <img src="signature.png" alt="Signature" className='invert w-25 mt-6'/>
                <h1 className='text-lg font-bold text-start'>Ibrahim Abdullahi</h1>
                <p className='text-sm text-gray-400 text-start'>Founder & CEO, PixelsPulse</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const TestimonialCard = () => {
  return (
    <div className='flex-shrink-0'>
      <div className='relative max-w-md mx-auto'>
        {/* Decorative Quote Mark */}
        <div className='absolute -top-4 -right-4 z-10'>
          <img src="qq.png" alt="" className='w-20' />
        </div>

        <img
          src='ceo.jpg'
          alt='Professional portrait'
          className='w-80 h-120 object-cover rounded-3xl mx-auto'
        />
      </div>
    </div>
  );
};

export default AboutSection;
