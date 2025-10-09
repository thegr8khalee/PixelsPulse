import React, { useState } from 'react';
import {
  Loader2,
  Mail,
  Phone,
  Building2,
  DollarSign,
  FileText,
  Upload,
  Check,
  AlertCircle,
} from 'lucide-react';

const services = [
  'General Inquiry',
  'Web Development',
  'Mobile App Development',
  'UI/UX Design',
  'Branding & Graphics Design',
  'AI Solutions & Integrations',
  'Landing Pages & Micro-sites',
  'Performance Optimization',
  'Maintenance & Support',
  'E-commerce Solutions',
];

const budgetRanges = [
  'Under $5,000',
  '$5,000 - $10,000',
  '$10,000 - $25,000',
  '$25,000 - $50,000',
  '$50,000+',
  'Not sure yet',
];

const Contact = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);
  const [fileName, setFileName] = useState('');

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    service: '',
    budget: '',
    message: '',
    file: null,
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    // Clear error for this field
    if (errors[name]) {
      setErrors({ ...errors, [name]: '' });
    }
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      // Validate file size (max 10MB)
      if (file.size > 10 * 1024 * 1024) {
        setErrors({ ...errors, file: 'File size must be less than 10MB' });
        return;
      }
      setFormData({ ...formData, file });
      setFileName(file.name);
      setErrors({ ...errors, file: '' });
    }
  };

  const validateForm = () => {
    const newErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = 'Full name is required';
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email';
    }

    if (!formData.service) {
      newErrors.service = 'Please select a service';
    }

    if (!formData.message.trim()) {
      newErrors.message = 'Please tell us about your project';
    } else if (formData.message.trim().length < 20) {
      newErrors.message = 'Please provide more details (min 20 characters)';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    setIsLoading(true);
    setSubmitStatus(null);

    try {
      // Simulate API call - replace with actual API endpoint
      await new Promise((resolve) => setTimeout(resolve, 2000));

      // Success
      setSubmitStatus('success');
      setFormData({
        name: '',
        email: '',
        phone: '',
        company: '',
        role: '',
        service: '',
        budget: '',
        message: '',
        file: null,
      });
      setFileName('');
    } catch (error) {
      setSubmitStatus('error');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className='font-[montserrat] min-h-screen bg-base-100 py-20 px-4 sm:px-6 lg:px-8'>
      <div className='max-w-6xl mx-auto'>
        {/* Header */}
        <div className='text-center mb-12'>
          <h1 className="text-4xl md:text-5xl font-medium text-white mb-4 font-['poppins']">
            Your Digital Journey Starts{' '}
            <span className='text-primary'>Here!</span>
          </h1>
          <p className='text-lg text-gray-300 max-w-2xl mx-auto'>
            Ready to infuse life into your brand's digital presence? Send us a
            message now!
          </p>
        </div>

        <div className='grid grid-cols-1 lg:grid-cols-3 gap-8'>
          {/* Contact Form */}
          <div className='lg:col-span-2'>
            <div className='bg-gradient-to-br from-primary/10 to-accent/10 backdrop-blur-lg rounded-3xl p-8'>
              <form onSubmit={handleSubmit} className='space-y-6'>
                {/* Full Name */}
                <div>
                  <label
                    htmlFor='name'
                    className='block text-sm font-medium text-white mb-2'
                  >
                    Full Name <span className='text-red-400'>*</span>
                  </label>
                  <input
                    type='text'
                    id='name'
                    name='name'
                    value={formData.name}
                    onChange={handleChange}
                    placeholder='Your full name'
                    className={`w-full px-4 py-3 bg-base-100/50 border ${
                      errors.name ? 'border-red-400' : 'border-white/20'
                    } rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition`}
                  />
                  {errors.name && (
                    <p className='mt-1 text-sm text-red-400 flex items-center gap-1'>
                      <AlertCircle className='w-4 h-4' />
                      {errors.name}
                    </p>
                  )}
                </div>

                {/* Email and Phone */}
                <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
                  <div>
                    <label
                      htmlFor='email'
                      className='block text-sm font-medium text-white mb-2'
                    >
                      Email Address <span className='text-red-400'>*</span>
                    </label>
                    <div className='relative'>
                      <Mail className='absolute left-3 top-3.5 w-5 h-5 text-gray-400' />
                      <input
                        type='email'
                        id='email'
                        name='email'
                        value={formData.email}
                        onChange={handleChange}
                        placeholder='you@example.com'
                        className={`w-full pl-11 pr-4 py-3 bg-base-100/50 border ${
                          errors.email ? 'border-red-400' : 'border-white/20'
                        } rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition`}
                      />
                    </div>
                    {errors.email && (
                      <p className='mt-1 text-sm text-red-400 flex items-center gap-1'>
                        <AlertCircle className='w-4 h-4' />
                        {errors.email}
                      </p>
                    )}
                  </div>

                  <div>
                    <label
                      htmlFor='phone'
                      className='block text-sm font-medium text-white mb-2'
                    >
                      Phone Number{' '}
                      <span className='text-gray-400 text-xs'>(Optional)</span>
                    </label>
                    <div className='relative'>
                      <Phone className='absolute left-3 top-3.5 w-5 h-5 text-gray-400' />
                      <input
                        type='tel'
                        id='phone'
                        name='phone'
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder='Optional — for quicker contact'
                        className='w-full pl-11 pr-4 py-3 bg-base-100/50 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition'
                      />
                    </div>
                  </div>
                </div>

                {/* Company Name */}
                <div>
                  <label
                    htmlFor='company'
                    className='block text-sm font-medium text-white mb-2'
                  >
                    Company / Brand Name{' '}
                    <span className='text-gray-400 text-xs'>(Optional)</span>
                  </label>
                  <div className='relative'>
                    <Building2 className='absolute left-3 top-3.5 w-5 h-5 text-gray-400' />
                    <input
                      type='text'
                      id='company'
                      name='company'
                      value={formData.company}
                      onChange={handleChange}
                      placeholder='Your company or brand'
                      className='w-full pl-11 pr-4 py-3 bg-base-100/50 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition'
                    />
                  </div>
                </div>

                {/* Service Selection and Budget */}
                <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
                  <div>
                    <label
                      htmlFor='service'
                      className='block text-sm font-medium text-white mb-2'
                    >
                      Select Service <span className='text-red-400'>*</span>
                    </label>
                    <select
                      id='service'
                      name='service'
                      value={formData.service}
                      onChange={handleChange}
                      className={`w-full px-4 py-3 bg-base-100/50 border ${
                        errors.service ? 'border-red-400' : 'border-white/20'
                      } rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition appearance-none cursor-pointer`}
                    >
                      <option value='' className='bg-slate-900'>
                        Select a service
                      </option>
                      {services.map((service) => (
                        <option
                          key={service}
                          value={service}
                          className='bg-slate-900'
                        >
                          {service}
                        </option>
                      ))}
                    </select>
                    {errors.service && (
                      <p className='mt-1 text-sm text-red-400 flex items-center gap-1'>
                        <AlertCircle className='w-4 h-4' />
                        {errors.service}
                      </p>
                    )}
                  </div>

                  <div>
                    <label
                      htmlFor='budget'
                      className='block text-sm font-medium text-white mb-2'
                    >
                      Project Budget{' '}
                      <span className='text-gray-400 text-xs'>(Optional)</span>
                    </label>
                    <div className='relative'>
                      <DollarSign className='absolute left-3 top-3.5 w-5 h-5 text-gray-400' />
                      <select
                        id='budget'
                        name='budget'
                        value={formData.budget}
                        onChange={handleChange}
                        className='w-full pl-11 pr-4 py-3 bg-base-100/50 border border-white/20 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition appearance-none cursor-pointer'
                      >
                        <option value='' className='bg-slate-900'>
                          Select your estimated budget
                        </option>
                        {budgetRanges.map((range) => (
                          <option
                            key={range}
                            value={range}
                            className='bg-slate-900'
                          >
                            {range}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>
                </div>

                {/* Project Details */}
                <div>
                  <label
                    htmlFor='message'
                    className='block text-sm font-medium text-white mb-2'
                  >
                    Project Details / Message{' '}
                    <span className='text-red-400'>*</span>
                  </label>
                  <textarea
                    id='message'
                    name='message'
                    value={formData.message}
                    onChange={handleChange}
                    rows='6'
                    placeholder='Tell us about your project, goals, or challenges...'
                    className={`w-full px-4 py-3 bg-base-100/50 border ${
                      errors.message ? 'border-red-400' : 'border-white/20'
                    } rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition resize-none`}
                  ></textarea>
                  {errors.message && (
                    <p className='mt-1 text-sm text-red-400 flex items-center gap-1'>
                      <AlertCircle className='w-4 h-4' />
                      {errors.message}
                    </p>
                  )}
                </div>

                {/* File Upload */}
                <div>
                  <label className='block text-sm font-medium text-white mb-2'>
                    File Upload{' '}
                    <span className='text-gray-400 text-xs'>(Optional)</span>
                  </label>
                  <div className='relative'>
                    <input
                      type='file'
                      id='file'
                      onChange={handleFileChange}
                      accept='.pdf,.doc,.docx,.txt,.jpg,.jpeg,.png'
                      className='hidden'
                    />
                    <label
                      htmlFor='file'
                      className='flex items-center justify-center w-full px-4 py-3 bg-base-100/50 border border-white/20 border-dashed rounded-lg text-gray-300 cursor-pointer hover:bg-white/10 transition'
                    >
                      <Upload className='w-5 h-5 mr-2' />
                      {fileName ||
                        'Attach brief, mockup, or document (optional)'}
                    </label>
                  </div>
                  {errors.file && (
                    <p className='mt-1 text-sm text-red-400 flex items-center gap-1'>
                      <AlertCircle className='w-4 h-4' />
                      {errors.file}
                    </p>
                  )}
                  <p className='mt-1 text-xs text-gray-400'>
                    Max file size: 10MB
                  </p>
                </div>

                {/* Submit Button */}
                <button
                  type='submit'
                  disabled={isLoading}
                  className='w-full bg-gradient-to-br from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 duration-300 text-white font-semibold py-4 px-6 rounded-full focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2 focus:ring-offset-slate-900 transition disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2'
                >
                  {isLoading ? (
                    <>
                      <Loader2 className='w-5 h-5 animate-spin' />
                      Sending...
                    </>
                  ) : (
                    <>
                      {/* <Mail className='w-5 h-5' /> */}
                      Send Message
                    </>
                  )}
                </button>

                {/* Success/Error Messages */}
                {submitStatus === 'success' && (
                  <div className='flex items-center gap-2 p-4 bg-green-500/20 border border-green-500/50 rounded-lg text-green-400'>
                    <Check className='w-5 h-5' />
                    <p>
                      Message sent successfully! We'll get back to you soon.
                    </p>
                  </div>
                )}

                {submitStatus === 'error' && (
                  <div className='flex items-center gap-2 p-4 bg-red-500/20 border border-red-500/50 rounded-lg text-red-400'>
                    <AlertCircle className='w-5 h-5' />
                    <p>Failed to send message. Please try again.</p>
                  </div>
                )}
              </form>
            </div>
          </div>

          {/* Contact Information */}
          <div className='lg:col-span-1 space-y-6'>
            <div className='bg-gradient-to-br from-primary/10 to-accent/10 backdrop-blur-lg rounded-2xl shadow-2xl p-6'>
              <h3 className='text-xl font-semibold text-white mb-4'>
                Contact Details
              </h3>

              <div className='space-y-4'>
                <div>
                  <p className='text-sm text-gray-400 mb-1'>Email:</p>
                  <a
                    href='mailto:pixelspulsedev@gmail.com'
                    className='text-primary hover:text-purple-300 transition flex items-center gap-2'
                  >
                    {/* <Mail className="w-4 h-4" /> */}
                    pixelspulsedev@gmail.com
                  </a>
                </div>

                <div>
                  <p className='text-sm text-gray-400 mb-1'>Business Hours:</p>
                  <p className='text-white'>Open 24/7</p>
                </div>

                <div>
                  <p className='text-sm text-gray-400 mb-2'>Follow Us:</p>
                  <div className='flex gap-3'>
                    {/* <a href="#" className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-white/20 transition"> */}
                    <a href='https://www.instagram.com/pixelspulse.dev?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=='>
                      <img src='instagram.png' alt='' className='size-10' />
                    </a>
                    {/* </a> */}
                    <a href='https://twitter.com/pixelspulsedev'>
                      <img src='twitter.png' alt='' className='size-10' />
                    </a>
                    <a href='https://www.linkedin.com/company/pixelspulse'>
                      <img src='linkedin.png' alt='' className='size-10' />
                    </a>
                  </div>
                </div>
              </div>
            </div>

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
      </div>
    </div>
  );
};

export default Contact;
