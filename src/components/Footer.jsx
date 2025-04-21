import { FaGithub, FaLinkedin, FaHeart } from 'react-icons/fa';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  const navLinks = [
    { path: '/#home', label: 'Home' },
    { path: '/#about', label: 'About' },
    { path: '/#skills', label: 'Skills' },
    { path: '/#experience', label: 'Experience' },
    { path: '/#projects', label: 'Projects' },
    { path: '/#contact', label: 'Contact' },
  ];
  
  const socialLinks = [
    { icon: <FaGithub />, url: 'https://github.com/' },
    { icon: <FaLinkedin />, url: 'https://linkedin.com/' },
  ];

  return (
    <footer className="bg-gray-900 text-white">
      <div className="container py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* About Column */}
          <div>
            <h3 className="text-2xl font-bold mb-4 text-primary">Naveen N</h3>
            <p className="mb-4 text-gray-400">
              Full-Stack Web Developer specializing in building exceptional digital experiences with Django and React.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((link, index) => (
                <a
                  key={index}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 bg-gray-800 rounded-full hover:bg-primary transition-colors"
                >
                  {link.icon}
                </a>
              ))}
            </div>
          </div>
          
          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {navLinks.map((link) => (
                <li key={link.label}>
                  <a 
                    href={link.path}
                    className="text-gray-400 hover:text-primary transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          
          {/* Contact Column */}
          <div>
            <h3 className="text-xl font-semibold mb-4">Contact Info</h3>
            <p className="mb-2 text-gray-400">Chennai, India</p>
            <a 
              href="mailto:naveenece6051@gmail.com"
              className="block mb-2 text-gray-400 hover:text-primary transition-colors"
            >
              naveenece6051@gmail.com
            </a>
            <a 
              href="tel:+916374885724"
              className="block text-gray-400 hover:text-primary transition-colors"
            >
              +91 63748 85724
            </a>
          </div>
        </div>
        
        <hr className="my-8 border-gray-800" />
        
        <div className="flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 mb-4 md:mb-0">
            &copy; {currentYear} Naveen N. All rights reserved.
          </p>
          <p className="text-gray-400 flex items-center">
            Made with <FaHeart className="text-red-500 mx-1" /> using React
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 