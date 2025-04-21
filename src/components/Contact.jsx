import { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import { FaEnvelope, FaMapMarkerAlt, FaPhone, FaGithub, FaLinkedin } from 'react-icons/fa';
import emailjs from '@emailjs/browser';

const Contact = () => {
  const formRef = useRef();
  const [formData, setFormData] = useState({
    user_name: '',
    user_email: '',
    subject: '',
    message: '',
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [submitError, setSubmitError] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };
  
  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Send email using EmailJS
    // For testing purposes, we'll show success message
    // Remove the timeout and uncomment EmailJS code when ready to use
    
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitSuccess(true);
      setFormData({
        user_name: '',
        user_email: '',
        subject: '',
        message: '',
      });
      
      setTimeout(() => {
        setSubmitSuccess(false);
      }, 5000);
    }, 1500);
    
    /* Uncomment this when you have your EmailJS credentials
    emailjs.sendForm(
      'YOUR_SERVICE_ID', // Get from EmailJS dashboard
      'YOUR_TEMPLATE_ID', // Get from EmailJS dashboard
      formRef.current,
      'YOUR_PUBLIC_KEY' // Get from EmailJS dashboard
    )
    .then((result) => {
      console.log(result.text);
      setIsSubmitting(false);
      setSubmitSuccess(true);
      setFormData({
        user_name: '',
        user_email: '',
        subject: '',
        message: '',
      });
      
      setTimeout(() => {
        setSubmitSuccess(false);
      }, 5000);
    })
    .catch((error) => {
      console.log(error.text);
      setIsSubmitting(false);
      setSubmitError(true);
      setErrorMessage('Failed to send message. Please try again later.');
      
      setTimeout(() => {
        setSubmitError(false);
      }, 5000);
    });
    */
  };
  
  const contactInfo = [
    {
      icon: <FaEnvelope />,
      title: 'Email',
      value: 'naveenece6051@gmail.com',
      link: 'mailto:naveenece6051@gmail.com',
    },
    {
      icon: <FaMapMarkerAlt />,
      title: 'Location',
      value: 'Chennai, India',
    },
    {
      icon: <FaPhone />,
      title: 'Phone',
      value: '+91 63748 85724',
      link: 'tel:+916374885724',
    },
  ];
  
  const socialLinks = [
    {
      platform: 'GitHub',
      icon: <FaGithub />,
      link: 'https://github.com/Naveen-pro',
    },
    {
      platform: 'LinkedIn',
      icon: <FaLinkedin />,
      link: 'https://linkedin.com/in/naveennanthakumar',
    },
  ];

  return (
    <section id="contact" className="section bg-gray-50 dark:bg-gray-900">
      <div className="container">
        <motion.h2 
          className="section-title"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          Get In Touch
        </motion.h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h3 className="text-2xl font-semibold mb-6">Let's Talk</h3>
            <p className="text-gray-600 dark:text-gray-300 mb-8">
              Feel free to get in touch with me. I am always open to discussing new projects, creative ideas or opportunities to be part of your vision.
            </p>
            
            <div className="space-y-6 mb-8">
              {contactInfo.map((info, index) => (
                <div key={index} className="flex items-start">
                  <div className="p-3 bg-primary/10 text-primary rounded-full mr-4">
                    {info.icon}
                  </div>
                  <div>
                    <h4 className="font-semibold">{info.title}</h4>
                    {info.link ? (
                      <a 
                        href={info.link}
                        className="text-gray-600 dark:text-gray-300 hover:text-primary dark:hover:text-primary transition-colors"
                      >
                        {info.value}
                      </a>
                    ) : (
                      <p className="text-gray-600 dark:text-gray-300">{info.value}</p>
                    )}
                  </div>
                </div>
              ))}
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Connect with Me</h4>
              <div className="flex space-x-4">
                {socialLinks.map((social, index) => (
                  <a 
                    key={index}
                    href={social.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 bg-gray-200 dark:bg-gray-700 hover:bg-primary hover:text-white rounded-full transition-colors"
                    aria-label={social.platform}
                  >
                    {social.icon}
                  </a>
                ))}
              </div>
            </div>
          </motion.div>
          
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="bg-white dark:bg-dark p-6 rounded-xl shadow-md">
              <h3 className="text-2xl font-semibold mb-6">Send Me a Message</h3>
              
              {submitSuccess && (
                <div className="bg-green-100 text-green-700 p-4 rounded-lg mb-6">
                  Your message has been sent successfully. I'll get back to you soon!
                </div>
              )}
              
              {submitError && (
                <div className="bg-red-100 text-red-700 p-4 rounded-lg mb-6">
                  {errorMessage || "Something went wrong. Please try again later."}
                </div>
              )}
              
              <form ref={formRef} onSubmit={handleSubmit}>
                <div className="mb-4">
                  <label 
                    htmlFor="user_name"
                    className="block text-sm font-medium mb-2"
                  >
                    Your Name
                  </label>
                  <input 
                    type="text"
                    id="user_name"
                    name="user_name"
                    value={formData.user_name}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-gray-300 dark:border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary dark:bg-gray-800"
                    required
                  />
                </div>
                
                <div className="mb-4">
                  <label 
                    htmlFor="user_email"
                    className="block text-sm font-medium mb-2"
                  >
                    Your Email
                  </label>
                  <input 
                    type="email"
                    id="user_email"
                    name="user_email"
                    value={formData.user_email}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-gray-300 dark:border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary dark:bg-gray-800"
                    required
                  />
                </div>
                
                <div className="mb-4">
                  <label 
                    htmlFor="subject"
                    className="block text-sm font-medium mb-2"
                  >
                    Subject
                  </label>
                  <input 
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-gray-300 dark:border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary dark:bg-gray-800"
                    required
                  />
                </div>
                
                <div className="mb-6">
                  <label 
                    htmlFor="message"
                    className="block text-sm font-medium mb-2"
                  >
                    Your Message
                  </label>
                  <textarea 
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows="5"
                    className="w-full px-4 py-2 border border-gray-300 dark:border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary dark:bg-gray-800"
                    required
                  ></textarea>
                </div>
                
                <button 
                  type="submit"
                  className="w-full btn btn-primary flex justify-center items-center"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? (
                    <>
                      <svg className="animate-spin -ml-1 mr-2 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      Sending...
                    </>
                  ) : 'Send Message'}
                </button>
              </form>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact; 