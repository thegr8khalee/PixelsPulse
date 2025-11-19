/* eslint-disable react-hooks/rules-of-hooks */
import React, { useState, useRef, useEffect } from 'react';
import { BackgroundGradientAnimation } from '../components/bg'; // Assuming this component exists
import { useNavigate } from 'react-router-dom';
// eslint-disable-next-line no-unused-vars
import { motion } from 'framer-motion'; // Keeping this as it was in the original user code
import { X } from 'lucide-react';
import { BackgroundGradient } from '../components/card.jsx';
import { cn } from '../lib/utils.jsx';
import { usePageLoader } from '../hooks/usePageLoader';

// Project data (replace with your actual project details and add more images)
const projects = [
  {
    id: 'mimi',
    title: 'Everything MIMI',
    category: 'E-commerce website, products catalog, full brand Identity.',
    images: ['emm.png', 'em2.png', 'em4.png', 'em5.png'],
    fullDescription:
      'Everything MIMI is a comprehensive e-commerce platform for a furniture and interior design company. We developed a user-friendly online store, integrated a detailed products catalog, and crafted a full brand identity that resonates with their aesthetic. The site focuses on high-quality visuals and a seamless shopping experience, allowing customers to easily browse, select, and purchase furniture and interior design elements.',
    technologies: ['React', 'Node.js', 'MongoDB', 'Tailwind CSS', 'DaisyUI'],
    liveLink: 'https://emfurnitureandinterior.com', // Replace with actual link
  },
  {
    id: 'pheez',
    title: 'PHEEZYHOMES & Interior',
    category: 'E-commerce Website · Product & Collections Catalogs',
    images: [
      'Pheez.png',
      'pheez1.png',
      'pheez2.png',
    ],
    fullDescription:
      'PHEEZYHOMES & Interior required a meticulously designed e-commerce website featuring product, collection, and project management systems. We delivered a visually striking layout with rich details, ensuring each item is presented beautifully. The catalogs are crafted to be both informative and aesthetically engaging, guiding customers through their wide range of home and interior products with clarity and elegance.',
    technologies: ['Canva', 'Node.js', 'Express', 'React', 'MongoDB'], // You can also add: 'UI Design', 'Prototyping'
    liveLink:
      'https://www.pheezyhomesinteriors.com',
  },
  {
    id: 'domora',
    title: 'Domora (Ongoing Project)',
    category: 'Real-estate Website, UI/UX design and full brand identity.',
    images: [
      'Domora.png',
      'domora1.png',
      //   'https://placehold.co/800x600/D1C4E9/673AB7?text=Domora+Detail+2',
    ],
    fullDescription:
      'Domora is an ongoing real-estate project focused on creating a modern and intuitive platform for property listings and management. Our work includes comprehensive UI/UX design to ensure a seamless user journey for both buyers and sellers, along with developing a full brand identity that conveys trust and sophistication in the real-estate market. The website will feature advanced search filters, interactive maps, and detailed property profiles.',
    technologies: [
      'React',
      'Firebase',
      'Figma',
      'Tailwind CSS',
      'Node.js',
      'Canva',
    ],
    liveLink:
      'https://www.figma.com/design/RKSzc7mx8w8tWuneSJkuVn/Domora?node-id=0-1&t=2lFlvOHcUZ4fgqrW-1', // Replace with actual link
  },
  {
    id: 'kaduna',
    title: 'Kaduna Real Estate Properties',
    category:
      'An eye-catching Logo design perfect for 3D and use as a watermark.',
    images: [
      'kad.png',
      //   'https://placehold.co/800x600/C8E6C9/4CAF50?text=Kaduna+Logo+Detail',
    ],
    fullDescription:
      "For Kaduna Real Estate Properties, we focused on creating a distinctive and memorable logo design. The logo was crafted with versatility in mind, ensuring it looks equally striking in 2D and 3D applications, and can be effectively used as a watermark on property images. The design captures the essence of stability and growth, reflecting the company's presence in the real estate sector.",
    technologies: [
      'Adobe Illustrator',
      'Adobe Photoshop',
      '3D Modeling Software',
      'Canva',
    ],
    liveLink:
      'https://www.canva.com/design/DAFWmSb06U0/ys0H3SV20SPoTO-hJZt6aw/view?utm_content=DAFWmSb06U0&utm_campaign=designshare&utm_medium=link2&utm_source=uniquelinks&utlId=h45ffc72636', // Replace with actual link
  },
];

// ProjectDetailsLightbox Component
const ProjectDetailsLightbox = ({ project, onClose }) => {
  if (!project) return null;

  const lightboxRef = useRef(null);
  const [mainImage, setMainImage] = useState(project.images[0]); // State for the main displayed image

  // Reset main image when project changes
  useEffect(() => {
    if (project && project.images && project.images.length > 0) {
      setMainImage(project.images[0]);
    }
  }, [project]);

  // Close when clicking outside the modal content
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (lightboxRef.current && !lightboxRef.current.contains(event.target)) {
        onClose();
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [onClose]);

  return (
    <div
      className='z-9999 px-2 modal modal-open flex items-center justify-center overflow-y-auto'
      style={{
        scrollbarWidth: 'none',
        msOverflowStyle: 'none',
      }}
    >
      <div
        className='h-[90vh] modal-box p-0 pb-10 relative max-w-3xl rounded-3xl shadow-2xl bg-base-200'
        style={{
          scrollbarWidth: 'none',
          msOverflowStyle: 'none',
        }}
      >
        <button
          className='z-999 btn btn-sm btn-circle absolute right-4 top-4'
          onClick={onClose}
          aria-label='Close filters'
        >
          <X size={20} />
        </button>
        <figure className='mb-2 w-full h-50 sm:h-90 rounded-lg overflow-hidden relative'>
          <img
            src={mainImage}
            alt={project.title}
            className='absolute h-full w-full rounded-lg object-cover' // object-contain to fit, max-h for responsiveness
          />
        </figure>

        <div className='p-4'>
          {/* Scrollable Thumbnails */}
          {project.images.length > 1 && (
            <div className='flex overflow-x-auto gap-2 p-2 mb-6 scrollbar-hide'>
              {project.images.map((imgSrc, index) => (
                <img
                  key={index}
                  src={imgSrc}
                  alt={`${project.title} thumbnail ${index + 1}`}
                  className={`w-20 h-16 object-cover rounded-md cursor-pointer border-2 transition-all duration-200 ${
                    mainImage === imgSrc
                      ? 'border-primary shadow-md'
                      : 'border-transparent hover:border-gray-300'
                  }`}
                  onClick={() => setMainImage(imgSrc)}
                />
              ))}
            </div>
          )}
          <h2 className="text-2xl sm:text-3xl font-bold font-['poppins'] text-primary mb-2">
            {project.title}
          </h2>
          <p className='text-accent text-md mb-4 font-[montserrat]'>
            {project.category}
          </p>
          <p className="font-['poppins'] leading-relaxed mb-6">
            {project.fullDescription}
          </p>

          {project.technologies && project.technologies.length > 0 && (
            <div className='mb-6'>
              <h3 className="text-lg font-semibold font-['poppins'] mb-2">
                Technologies Used:
              </h3>
              <div className='flex flex-wrap gap-2'>
                {project.technologies.map((tech, index) => (
                  <span
                    key={index}
                    className="badge badge-outline badge-accent font-['montserrat']"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          )}

          {project.liveLink && (
            <div className='text-center mt-6'>
              <a
                href={project.liveLink}
                target='_blank'
                rel='noopener noreferrer'
                className='btn btn-primary btn-lg rounded-full shadow-md hover:shadow-lg transition-all duration-300'
              >
                View Live Project
              </a>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

// Portfolio Page Component
const Portfolio = () => {
  const navigate = useNavigate();
  const [selectedProject, setSelectedProject] = useState(null);

  const allImages = projects.flatMap((p) => p.images);
  usePageLoader(allImages);

  const handleContact = () => {
    navigate('/contact');
    setTimeout(() => {
      window.scrollTo(0, 0);
    }, 10);
  };

  const openLightbox = (project) => {
    setSelectedProject(project);
    document.body.style.overflow = 'hidden'; // Prevent scrolling when lightbox is open
  };

  const closeLightbox = () => {
    setSelectedProject(null);
    document.body.style.overflow = ''; // Re-enable scrolling
  };

  return (
    <div className='pt-16 bg-base-100 text-base-content mx-auto'>
      <section id='Hero' className='w-full text-center'>
        <BackgroundGradientAnimation className='h-50 justify-center items-center flex flex-col space-y-2 px-4'>
          <div className='z-100 text-2xl sm:text-4xl font-bold font-[poppins]'>
            Our Work:
            <span className='text-primary'>Where Ideas Take Digital Form</span>
          </div>
        </BackgroundGradientAnimation>
        <div className='w-full text-center items-center justify-center flex py-4'>
          <p className='px-4 font-[poppins] max-w-5xl'>
            Dive into our portfolio and see how PixelsPulse has brought brands
            to life with innovative web, mobile, and design solutions.
          </p>
        </div>
      </section>

      <section className='w-full flex justify-center px-4 mt-6 mb-20 max-w-7xl mx-auto'>
        <div className='grid w-full grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10'>
          {projects.map((service, index) => (
            <div
              key={index}
              className={cn(
                'rounded-3xl overflow-hidden h-full',
                'bg-base-200 hover:bg-base-300 transition-all duration-300'
              )}
              containerClassName='h-full'
            >
              <motion.div
                className='h-full flex flex-col'
                // initial={{
                //   opacity: 0.2, scale: 0.9
                // }}
                // viewport={{ once: false, amount: 0.5 }}
                // whileInView={{ opacity: 1, scale: 1 }}
                // transition={{ duration: 1 }}
              >
                {/* Image container */}
                <div className='h-50 sm:h-70 md:h-55 overflow-hidden'>
                  <img
                    src={service.images[0]}
                    alt={service.title}
                    className='w-full h-full object-cover'
                  />
                </div>

                {/* Content container */}
                <div className='p-6 pt-0 flex flex-col flex-grow'>
                  {/* <div className='text-4xl mb-4'>{service.icon}</div> */}
                  <h3 className='text-xl font-bold text-white my-2 font-[poppins]'>
                    {service.title}
                  </h3>
                  <p className='text-gray-400 flex-grow'>{service.category}</p>
                  <button
                    onClick={() => openLightbox(service)}
                    className='mt-6 self-start text-sm font-medium text-accent hover:text-[#61e8ff]/80 transition-colors font-[montserrat]'
                  >
                    Learn more
                  </button>
                </div>
              </motion.div>
            </div>
          ))}
        </div>
      </section>

      <section className='py-20 px-4 sm:px-6 lg:px-8'>
        {/* Retained motion div as it was in original user code, though framer-motion import is commented out */}
        <div
          className='max-w-4xl mx-auto text-center'
          // initial={{ opacity: 0.2, scale: 0.9 }}
          // viewport={{ once: false, amount: 0.5 }}
          // whileInView={{ opacity: 1, scale: 1 }}
          // transition={{ duration: 1 }}
        >
          <h2 className="text-3xl sm:text-6xl md:text-6xl lg:text-6xl mb-6 font-['poppins'] font-medium">
            Let's Build Something <span className='text-primary'>Bold</span>
          </h2>
          <p className="text-lg mb-8 max-w-2xl mx-auto font-['montserrat']">
            Ready to start your project? Get in touch today for a free
            consultation.
          </p>
          <button
            onClick={handleContact}
            className='px-8 py-3 rounded-full bg-gradient-to-r from-accent to-pink-400 hover:from-accent-100 hover:to-pink-300 transition-all duration-300 text-white font-medium'
          >
            Get a Free Consultation
          </button>
        </div>
      </section>

      {/* Lightbox Component */}
      <ProjectDetailsLightbox
        project={selectedProject}
        onClose={closeLightbox}
      />
    </div>
  );
};

export default Portfolio;
