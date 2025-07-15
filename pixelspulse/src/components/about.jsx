// eslint-disable-next-line no-unused-vars
import { motion } from 'framer-motion';

const AboutSection = () => {
  const fadeUp = {
    initial: { opacity: 0, y: 30 },
    whileInView: { opacity: 1, y: 0 },
    transition: { duration: 0.6 },
    viewport: { once: false, amount: 0.2 },
  };

  return (
    <section className='py-20 px-8 sm:px-6 lg:px-8 bg-base-100'>
      <div className='max-w-7xl mx-auto'>
        <div className='text-center mb-16 space-y-8'>
          <motion.div {...fadeUp}>
            <h2 className="text-4xl sm:text-6xl md:text-6xl lg:text-6xl mb-1 font-['Poppins'] font-bold">
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

          {/* <motion.div {...fadeUp}>
            <h3 className="text-4xl mb-1 mt-4 font-['Poppins'] font-bold">Mission</h3>
            <p className='font-["poppins"]'>
              To bridge design and development with precision and heart —
              helping brands, startups, and businesses thrive in the digital
              space through functional, futuristic, and visually striking
              solutions.
            </p>
          </motion.div>

          <motion.div {...fadeUp}>
            <h3 className="text-4xl mb-1 mt-4 font-['Poppins'] font-bold">Our Story</h3>
            <p className='font-["poppins"]'>
              Founded by a group of tech-savvy creators and led by Ibrahim
              Abdullahi, Pixelspulse began as a passion project blending
              aesthetics with engineering. What started with a few animated UIs
              and freelance builds has grown into a full-fledged creative tech
              studio. Now, we serve global clients with high-impact websites,
              digital branding, and AI-infused tools that move at the speed of
              innovation.
            </p>
          </motion.div> */}
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
