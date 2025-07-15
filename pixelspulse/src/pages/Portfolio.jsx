/* eslint-disable react-hooks/rules-of-hooks */
import React, { useState, useRef, useEffect } from 'react';
import { BackgroundGradientAnimation } from '../components/bg'; // Assuming this component exists
import { useNavigate } from 'react-router-dom';
// eslint-disable-next-line no-unused-vars
import { motion } from 'framer-motion'; // Keeping this as it was in the original user code
import { X } from 'lucide-react';

// Project data (replace with your actual project details and add more images)
const projects = [
  {
    id: 'mimi',
    title: 'Everything MIMI',
    category: 'E-commerce website, products catalog, full brand Identity.',
    images: [
      // Array of image paths for the modal
      'emm.png',
      'https://placehold.co/800x600/E0E7FF/3F51B5?text=MIMI+Detail+1', // Placeholder for additional image
      'https://placehold.co/800x600/E0E7FF/3F51B5?text=MIMI+Detail+2', // Placeholder for additional image
    ],
    fullDescription:
      'Everything MIMI is a comprehensive e-commerce platform for a furniture and interior design company. We developed a user-friendly online store, integrated a detailed products catalog, and crafted a full brand identity that resonates with their aesthetic. The site focuses on high-quality visuals and a seamless shopping experience, allowing customers to easily browse, select, and purchase furniture and interior design elements.',
    technologies: ['React', 'Node.js', 'MongoDB', 'Tailwind CSS', 'Stripe'],
    liveLink: 'https://www.example.com/mimi', // Replace with actual link
  },
  {
    id: 'domora',
    title: 'Domora (Ongoing Project)',
    category: 'Real-estate Website, UI/UX design and full brand identity.',
    images: [
      'Domora.png',
      'https://placehold.co/800x600/D1C4E9/673AB7?text=Domora+Detail+1',
      'https://placehold.co/800x600/D1C4E9/673AB7?text=Domora+Detail+2',
    ],
    fullDescription:
      'Domora is an ongoing real-estate project focused on creating a modern and intuitive platform for property listings and management. Our work includes comprehensive UI/UX design to ensure a seamless user journey for both buyers and sellers, along with developing a full brand identity that conveys trust and sophistication in the real-estate market. The website will feature advanced search filters, interactive maps, and detailed property profiles.',
    technologies: ['Next.js', 'Firebase', 'Figma', 'Tailwind CSS'],
    liveLink: 'https://www.example.com/domora', // Replace with actual link
  },
  {
    id: 'kaduna',
    title: 'Kaduna Real Estate Properties',
    category:
      'An eye-catching Logo design perfect for 3D and use as a watermark.',
    images: [
      'kad.png',
      'https://placehold.co/800x600/C8E6C9/4CAF50?text=Kaduna+Logo+Detail',
    ],
    fullDescription:
      "For Kaduna Real Estate Properties, we focused on creating a distinctive and memorable logo design. The logo was crafted with versatility in mind, ensuring it looks equally striking in 2D and 3D applications, and can be effectively used as a watermark on property images. The design captures the essence of stability and growth, reflecting the company's presence in the real estate sector.",
    technologies: [
      'Adobe Illustrator',
      'Adobe Photoshop',
      '3D Modeling Software',
    ],
    liveLink: 'https://www.example.com/kaduna-logo', // Replace with actual link
  },
  {
    id: 'pheez',
    title: 'PHEEZYHOMES & Interior',
    category:
      'Beautifully design Products and Collections Catalogs with details.',
    images: [
      'Pheez.png',
      'https://placehold.co/800x600/BBDEFB/2196F3?text=PHEEZYHOMES+Catalog+1',
      'https://placehold.co/800x600/BBDEFB/2196F3?text=PHEEZYHOMES+Catalog+2',
    ],
    fullDescription:
      'PHEEZYHOMES & Interior required meticulously designed product and collections catalogs. We created visually stunning layouts with rich details, ensuring each item was presented in the best light. The catalogs are designed to be both informative and aesthetically pleasing, guiding customers through their extensive range of home and interior products with clarity and elegance.',
    technologies: ['Adobe InDesign', 'Adobe Photoshop', 'Product Photography'],
    liveLink: 'https://www.example.com/pheez-catalog', // Replace with actual link
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
    <div className='z-9999 px-2 modal modal-open flex items-center justify-center overflow-y-auto'>
      <div className='h-[90vh] modal-box p-0 relative max-w-5xl rounded-lg shadow-2xl bg-base-100'>
        <button
          className='z-999 btn btn-sm btn-circle absolute right-4 top-4'
          onClick={onClose}
          aria-label='Close filters'
        >
          <X size={20} />
        </button>
        <figure className='mb-2 w-full h-90 rounded-lg overflow-hidden relative'>
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
    <div className='bg-base-100 text-base-content'>
      <section id='Hero' className='w-full text-center'>
        <BackgroundGradientAnimation className='h-50 justify-center items-center flex flex-col space-y-2'>
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

      <section className='w-full flex justify-center px-4 mt-6 mb-20'>
        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl w-full'>
          {projects.map((project) => (
            <div
              key={project.id}
              className='flex flex-col space-y-1 pb-2 bg-base-200 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 cursor-pointer'
              onClick={() => openLightbox(project)} // Open lightbox on card click
            >
              <figure className='overflow-hidden '>
                <img
                  src={project.images[0]} // Display the first image from the array in the grid
                  alt={project.title}
                  className='w-full h-56 rounded-t-xl hover:scale-105 transition-transform duration-300 '
                  // No onError here, assuming user's local path is valid for grid view
                />
              </figure>
              <div className='space-y-1 mt-1 px-4 '>
                <div>
                  <h2 className="font-['poppins'] font-semibold text-lg">
                    {project.title}
                  </h2>
                  <p className='font-["poppins"] text-gray-400 text-sm'>
                    {project.category}
                  </p>
                </div>

                <div className='card-actions w-full pt-1'>
                  <span className='text-accent text-sm font-[montserrat] hover:underline cursor-pointer'>
                    Learn More
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className='py-20 px-4 sm:px-6 lg:px-8 bg-base-200'>
        {/* Retained motion div as it was in original user code, though framer-motion import is commented out */}
        <div
          className='max-w-4xl mx-auto text-center'
          // initial={{ opacity: 0.2, scale: 0.9 }}
          // viewport={{ once: false, amount: 0.5 }}
          // whileInView={{ opacity: 1, scale: 1 }}
          // transition={{ duration: 1 }}
        >
          <h2 className="text-3xl sm:text-6xl md:text-6xl lg:text-6xl mb-6 font-['poppins'] font-bold">
            Let's Build Something <span className='text-primary'>Bold</span>
          </h2>
          <p className="text-lg mb-8 max-w-2xl mx-auto font-['montserrat']">
            Ready to start your project? Get in touch today for a free
            consultation.
          </p>
          <button
            onClick={handleContact}
            className='px-8 py-3 rounded-lg bg-gradient-to-r from-accent to-pink-400 hover:from-accent-100 hover:to-pink-300 transition-all duration-300 text-white font-medium'
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
