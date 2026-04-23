import React, { useState, useRef, useEffect, useMemo } from 'react';
import { useNavigate } from 'react-router-dom';
// eslint-disable-next-line no-unused-vars
import { motion, AnimatePresence } from 'framer-motion';
import { X, ArrowUpRight, ExternalLink, Sparkles } from 'lucide-react';
import { cn } from '../lib/utils.jsx';
import { usePageLoader } from '../hooks/usePageLoader';
import SEO from '../components/SEO';
import projects from '../data/projects.json';

const ALL = 'All';

const getAllTags = (items) => {
  const set = new Set();
  items.forEach((p) => (p.tags || []).forEach((t) => set.add(t)));
  return [ALL, ...Array.from(set)];
};

// ProjectDetailsLightbox — two-column on md+, sticky gallery on desktop
const ProjectDetailsLightbox = ({ project, onClose }) => {
  const lightboxRef = useRef(null);
  const [mainImage, setMainImage] = useState(null);

  useEffect(() => {
    if (project?.images?.length) {
      setMainImage(project.images[0]);
    }
  }, [project]);

  useEffect(() => {
    if (!project) return;
    const onKey = (e) => {
      if (e.key === 'Escape') onClose();
    };
    document.addEventListener('keydown', onKey);
    return () => document.removeEventListener('keydown', onKey);
  }, [project, onClose]);

  if (!project) return null;

  return (
    <AnimatePresence>
      <motion.div
        key='lb'
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className='fixed inset-0 z-[9999] flex items-center justify-center bg-black/70 backdrop-blur-sm px-2 sm:px-4 overflow-y-auto'
        onClick={(e) => {
          if (lightboxRef.current && !lightboxRef.current.contains(e.target)) {
            onClose();
          }
        }}
      >
        <motion.div
          ref={lightboxRef}
          initial={{ y: 30, opacity: 0, scale: 0.98 }}
          animate={{ y: 0, opacity: 1, scale: 1 }}
          exit={{ y: 20, opacity: 0, scale: 0.98 }}
          transition={{ type: 'spring', stiffness: 220, damping: 26 }}
          className='relative w-full max-w-6xl my-6 rounded-3xl overflow-hidden bg-base-200 shadow-2xl border border-white/10'
        >
          <button
            onClick={onClose}
            aria-label='Close'
            className='z-20 absolute right-4 top-4 btn btn-sm btn-circle bg-black/50 border-0 hover:bg-black/70 text-white'
          >
            <X size={18} />
          </button>

          <div className='grid grid-cols-1 md:grid-cols-5 max-h-[90vh]'>
            {/* Gallery */}
            <div className='md:col-span-3 bg-black/40 flex flex-col'>
              <div className='relative w-full h-64 sm:h-96 md:h-[60vh]'>
                <AnimatePresence mode='wait'>
                  <motion.img
                    key={mainImage}
                    src={mainImage}
                    alt={project.title}
                    initial={{ opacity: 0, scale: 1.02 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className='absolute inset-0 w-full h-full object-cover'
                  />
                </AnimatePresence>
              </div>
              {project.images.length > 1 && (
                <div className='flex overflow-x-auto gap-2 p-3 scrollbar-hide bg-base-300/50'>
                  {project.images.map((img, i) => (
                    <button
                      key={i}
                      onClick={() => setMainImage(img)}
                      className={cn(
                        'shrink-0 w-20 h-14 sm:w-24 sm:h-16 rounded-lg overflow-hidden border-2 transition-all',
                        mainImage === img
                          ? 'border-primary shadow-lg shadow-primary/30'
                          : 'border-transparent opacity-60 hover:opacity-100'
                      )}
                    >
                      <img
                        src={img}
                        alt=''
                        className='w-full h-full object-cover'
                        loading='lazy'
                        decoding='async'
                      />
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* Details */}
            <div className='md:col-span-2 p-6 sm:p-8 overflow-y-auto scrollbar-hide max-h-[90vh]'>
              <div className='flex items-center gap-2 mb-3'>
                {project.ongoing && (
                  <span className='inline-flex items-center gap-1 text-xs px-2 py-1 rounded-full bg-primary/20 text-primary font-[montserrat]'>
                    <span className='w-1.5 h-1.5 rounded-full bg-primary animate-pulse' />
                    Ongoing
                  </span>
                )}
                {project.year && (
                  <span className='text-xs px-2 py-1 rounded-full bg-base-300 text-base-content/70 font-[montserrat]'>
                    {project.year}
                  </span>
                )}
              </div>

              <h2 className="text-2xl sm:text-3xl font-bold font-['poppins'] text-primary mb-2 leading-tight">
                {project.title}
              </h2>
              <p className='text-accent text-sm mb-6 font-[montserrat]'>
                {project.category}
              </p>

              <p className="font-['poppins'] leading-relaxed text-base-content/80 mb-6 text-sm sm:text-base">
                {project.fullDescription}
              </p>

              {project.technologies?.length > 0 && (
                <div className='mb-6'>
                  <h3 className="text-xs uppercase tracking-widest text-base-content/50 font-['montserrat'] mb-3">
                    Stack
                  </h3>
                  <div className='flex flex-wrap gap-2'>
                    {project.technologies.map((tech, i) => (
                      <span
                        key={i}
                        className="text-xs px-3 py-1 rounded-full bg-base-300 border border-white/5 text-base-content/80 font-['montserrat']"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              )}

              {project.liveLink && (
                <a
                  href={project.liveLink}
                  target='_blank'
                  rel='noopener noreferrer'
                  className='group inline-flex items-center justify-center gap-2 w-full px-5 py-3 rounded-full bg-gradient-to-r from-primary to-accent text-white font-medium shadow-lg shadow-primary/20 hover:shadow-primary/40 transition-all'
                >
                  View Live Project
                  <ExternalLink
                    size={16}
                    className='transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5'
                  />
                </a>
              )}
            </div>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
};

// Project Card
const ProjectCard = ({ project, index, onOpen }) => {
  return (
    <motion.button
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.4, delay: Math.min(index * 0.05, 0.4) }}
      onClick={() => onOpen(project)}
      className={cn(
        'group relative flex flex-col text-left rounded-3xl overflow-hidden bg-base-200 border border-white/5 h-full will-change-transform',
        'hover:border-primary/40 hover:-translate-y-1 transition-[transform,border-color,box-shadow] duration-300',
        'shadow-lg shadow-black/20 hover:shadow-2xl hover:shadow-primary/10'
      )}
    >
      {/* Image area */}
      <div className='relative overflow-hidden aspect-video'>
        <img
          src={project.images[0]}
          alt={project.title}
          className='w-full h-full object-cover transition-transform duration-700 group-hover:scale-105'
          loading={index < 3 ? 'eager' : 'lazy'}
          decoding='async'
          fetchpriority={index === 0 ? 'high' : 'auto'}
        />

        {/* Top badges */}
        <div className='absolute top-3 left-3 right-3 flex items-start justify-between gap-2'>
          <div className='flex items-center gap-2 flex-wrap'>
            {project.ongoing && (
              <span className='inline-flex items-center gap-1 text-xs px-2.5 py-1 rounded-full bg-primary text-white font-[montserrat] shadow-lg'>
                <span className='w-1.5 h-1.5 rounded-full bg-white animate-pulse' />
                Ongoing
              </span>
            )}
          </div>
          {project.year && (
            <span className='text-xs px-2.5 py-1 rounded-full bg-black/60 backdrop-blur text-white/90 font-[montserrat] shrink-0'>
              {project.year}
            </span>
          )}
        </div>

        {/* Hover arrow */}
        <div className='absolute top-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300'>
          <div className='w-10 h-10 rounded-full bg-primary flex items-center justify-center shadow-lg'>
            <ArrowUpRight className='text-white' size={18} />
          </div>
        </div>
      </div>

      {/* Content area */}
      <div className='flex-1 flex flex-col p-4 sm:p-5 bg-base-200 border-t border-white/5'>
        <div className='flex flex-wrap gap-1.5 mb-2'>
          {(project.tags || []).slice(0, 3).map((tag, i) => (
            <span
              key={i}
              className="text-[10px] uppercase tracking-wider px-2 py-0.5 rounded-full bg-white/5 border border-white/10 text-base-content/70 font-['montserrat']"
            >
              {tag}
            </span>
          ))}
        </div>
        <h3 className="font-bold font-['poppins'] text-base-content leading-tight line-clamp-2 text-lg sm:text-xl">
          {project.title}
        </h3>
        <p className='mt-1 text-xs sm:text-sm text-base-content/60 font-[montserrat] line-clamp-2'>
          {project.category}
        </p>
        <div className='mt-auto pt-3 inline-flex items-center gap-1.5 text-sm font-medium text-accent group-hover:gap-3 transition-all font-[montserrat]'>
          View case study
          <ArrowUpRight
            size={14}
            className='transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5'
          />
        </div>
      </div>
    </motion.button>
  );
};

// Portfolio Page Component
const Portfolio = () => {
  const navigate = useNavigate();
  const [selectedProject, setSelectedProject] = useState(null);
  const [activeTag, setActiveTag] = useState(ALL);

  const allImages = useMemo(() => projects.flatMap((p) => p.images), []);
  usePageLoader(allImages);

  const tags = useMemo(() => getAllTags(projects), []);

  const filtered = useMemo(() => {
    if (activeTag === ALL) return projects;
    return projects.filter((p) => (p.tags || []).includes(activeTag));
  }, [activeTag]);

  const handleContact = () => {
    navigate('/contact');
    setTimeout(() => window.scrollTo(0, 0), 10);
  };

  const openLightbox = (project) => {
    setSelectedProject(project);
    document.body.style.overflow = 'hidden';
  };

  const closeLightbox = () => {
    setSelectedProject(null);
    document.body.style.overflow = '';
  };

  const stats = [
    { value: `${projects.length}+`, label: 'Projects Shipped' },
    { value: `${new Set(projects.flatMap((p) => p.tags || [])).size}`, label: 'Disciplines' },
    { value: '100%', label: 'Client Satisfaction' },
  ];

  return (
    <div className='pt-16 bg-base-100 text-base-content'>
      <SEO
        title='Our Portfolio | PixelsPulse'
        description='Showcase of our recent projects in web development, branding, and UI/UX design.'
      />

      {/* Hero */}
      <section id='Hero' className='w-full text-center'>
        <div className='min-h-[18rem] sm:min-h-[22rem] justify-center items-center flex flex-col space-y-4 px-4'>
          {/* <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className='z-[100] inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 backdrop-blur border border-white/20 text-xs sm:text-sm font-[montserrat] text-white'
          >
            <Sparkles size={14} className='text-accent' />
            Selected Work
          </motion.div> */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className='z-[100] text-3xl sm:text-5xl md:text-6xl font-bold font-[poppins] leading-tight max-w-4xl'
          >
            Where Ideas <br className='sm:hidden' />
            <span className='bg-gradient-to-r from-primary via-accent to-pink-400 bg-clip-text text-transparent'>
              Take Digital Form
            </span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className='z-[100] max-w-2xl text-sm sm:text-base font-[montserrat] text-white/80'
          >
            A collection of brands, experiences, and products we've crafted —
            from pixel-perfect interfaces to full-stack commerce platforms.
          </motion.p>
        </div>

        {/* Stats strip */}
        <div className='max-w-5xl mx-auto px-4 -mt-8 relative z-10'>
          <div className='grid grid-cols-3 gap-2 sm:gap-4 p-4 sm:p-6 rounded-2xl bg-base-200 border border-white/10 shadow-xl shadow-black/30'>
            {stats.map((s, i) => (
              <div key={i} className='text-center'>
                <div className='text-2xl sm:text-4xl font-bold font-[poppins] bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent'>
                  {s.value}
                </div>
                <div className='text-[10px] sm:text-xs uppercase tracking-widest text-base-content/60 font-[montserrat] mt-1'>
                  {s.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Filter chips */}
      <section className='max-w-7xl mx-auto px-4 mt-12 sm:mt-16'>
        <div className='flex items-center justify-between flex-wrap gap-4 mb-6'>
          <div>
            <h2 className="text-2xl sm:text-3xl font-bold font-['poppins']">
              Recent Work
            </h2>
            <p className='text-sm text-base-content/60 font-[montserrat] mt-1'>
              {filtered.length} {filtered.length === 1 ? 'project' : 'projects'}
              {activeTag !== ALL && ` in ${activeTag}`}
            </p>
          </div>
          <div className='flex flex-wrap gap-2'>
            {tags.map((tag) => {
              const active = tag === activeTag;
              return (
                <button
                  key={tag}
                  onClick={() => setActiveTag(tag)}
                  className={cn(
                    'px-4 py-1.5 rounded-full text-xs sm:text-sm font-[montserrat] transition-all border',
                    active
                      ? 'bg-primary text-white border-primary shadow-lg shadow-primary/30'
                      : 'bg-base-200 text-base-content/70 border-white/5 hover:border-primary/40 hover:text-base-content'
                  )}
                >
                  {tag}
                </button>
              );
            })}
          </div>
        </div>
      </section>

      {/* Projects grid */}
      <section className='max-w-7xl mx-auto px-4 mt-6 mb-24'>
        <motion.div
          layout
          className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5'
        >
          <AnimatePresence mode='popLayout'>
            {filtered.map((project, i) => (
              <ProjectCard
                key={project.id}
                project={project}
                index={i}
                onOpen={openLightbox}
              />
            ))}
          </AnimatePresence>
        </motion.div>

        {filtered.length === 0 && (
          <div className='text-center py-20 text-base-content/50 font-[montserrat]'>
            No projects match this filter yet.
          </div>
        )}
      </section>

      {/* CTA */}
      <section className='px-4 sm:px-6 lg:px-8 pb-24'>
        <div className='max-w-5xl mx-auto relative overflow-hidden rounded-3xl bg-gradient-to-br from-base-200 via-base-300 to-base-200 border border-white/10 p-8 sm:p-14 text-center'>
          <div className='absolute -top-16 -right-16 w-48 h-48 rounded-full bg-primary/20 blur-3xl' />
          <div className='absolute -bottom-16 -left-16 w-48 h-48 rounded-full bg-accent/20 blur-3xl' />
          <div className='relative'>
            <h2 className="text-3xl sm:text-5xl md:text-6xl mb-4 font-['poppins'] font-medium leading-tight">
              Let's Build Something{' '}
              <span className='bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent'>
                Bold
              </span>
            </h2>
            <p className="text-base sm:text-lg mb-8 max-w-2xl mx-auto font-['montserrat'] text-base-content/70">
              Ready to start your project? Get in touch today for a free
              consultation.
            </p>
            <button
              onClick={handleContact}
              className='group inline-flex items-center gap-2 px-8 py-3.5 rounded-full bg-gradient-to-r from-accent to-pink-400 hover:from-accent-100 hover:to-pink-300 transition-all duration-300 text-white font-medium shadow-lg shadow-accent/30 hover:shadow-accent/50'
            >
              Get a Free Consultation
              <ArrowUpRight
                size={18}
                className='transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5'
              />
            </button>
          </div>
        </div>
      </section>

      <ProjectDetailsLightbox
        project={selectedProject}
        onClose={closeLightbox}
      />
    </div>
  );
};

export default Portfolio;
