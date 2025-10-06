import React from 'react'
import { motion } from 'framer-motion'
import { Github, Linkedin, Mail, Download, Heart } from 'lucide-react'

const Footer = () => {
  const currentYear = new Date().getFullYear()

  const quickLinks = [
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Education', href: '#education' },
    { name: 'Contact', href: '#contact' }
  ]

  const socialLinks = [
    {
      name: 'GitHub',
      icon: Github,
      href: 'https://github.com/riku-d',
      color: 'hover:text-gray-300'
    },
    {
      name: 'LinkedIn',
      icon: Linkedin,
      href: 'https://www.linkedin.com/in/rohit-dutta-64b0242a0/',
      color: 'hover:text-blue-400'
    },
    {
      name: 'Email',
      icon: Mail,
      href: 'mailto:rohitdutta2103@gmail.com',
      color: 'hover:text-red-400'
    }
  ]

  const handleResumeDownload = () => {
    window.open(`${import.meta.env.VITE_API_URL}/api/resume/download`, '_blank')
  }

  return (
    <footer className="bg-dark-950 border-t border-white/10">
      <div className="max-w-7xl mx-auto px-6">
        <div className="py-12">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Brand */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="lg:col-span-2"
            >
              <div className="flex items-center space-x-3 mb-4">
                <div className="w-10 h-10 rounded-full overflow-hidden">
                  <img 
                    src="/ro_img.jpeg"
                    alt="Rohit Dutta" 
                    className="w-10 h-10 rounded-full object-cover" 
                  />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white">Rohit Dutta</h3>
                  <p className="text-sm text-gray-400">Data Scientist & AI Engineer</p>
                </div>
              </div>
              
              <p className="text-gray-400 mb-6 max-w-md leading-relaxed">
                Passionate about transforming data into actionable insights and building 
                intelligent solutions that make a real impact in the world.
              </p>

              <div className="flex space-x-4">
                {socialLinks.map((social) => (
                  <motion.a
                    key={social.name}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.1, y: -2 }}
                    whileTap={{ scale: 0.9 }}
                    className={`p-3 bg-dark-800 rounded-lg text-gray-400 ${social.color} transition-all duration-300 hover:bg-dark-700`}
                    title={social.name}
                  >
                    <social.icon size={20} />
                  </motion.a>
                ))}
              </div>
            </motion.div>

            {/* Quick Links */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              <h4 className="text-lg font-semibold text-white mb-4">Quick Links</h4>
              <ul className="space-y-3">
                {quickLinks.map((link) => (
                  <li key={link.name}>
                    <motion.a
                      href={link.href}
                      whileHover={{ x: 5 }}
                      className="text-gray-400 hover:text-primary-400 transition-colors duration-200"
                    >
                      {link.name}
                    </motion.a>
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Contact & Resume */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <h4 className="text-lg font-semibold text-white mb-4">Get In Touch</h4>
              <div className="space-y-4">
                <div>
                  <p className="text-gray-400 text-sm mb-2">Email</p>
                  <a 
                    href="mailto:rohitdutta2103@gmail.com"
                    className="text-primary-400 hover:text-primary-300 transition-colors"
                  >
                    rohitdutta2103@gmail.com
                  </a>
                </div>
                
                <div>
                  <p className="text-gray-400 text-sm mb-2">Location</p>
                  <p className="text-white">Kolkata, West Bengal, India</p>
                </div>

                <motion.button
                  onClick={handleResumeDownload}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="btn-primary flex items-center space-x-2 w-full justify-center"
                >
                  <Download size={16} />
                  <span>Download Resume</span>
                </motion.button>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Bottom section */}
        <div className="border-t border-white/10 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.6 }}
              className="text-gray-400 text-sm flex items-center space-x-2"
            >
              <span>© {currentYear} Rohit Dutta. All rights reserved.</span>
              <span className="hidden md:inline">•</span>
              <span className="flex items-center space-x-1">
                <span>Made with</span>
                <Heart size={14} className="text-red-500 animate-pulse" />
                <span>and lots of coffee</span>
              </span>
            </motion.p>

            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="flex items-center space-x-6 text-sm text-gray-400"
            >
              <a 
                href="#privacy" 
                className="hover:text-primary-400 transition-colors"
              >
                Privacy Policy
              </a>
              <a 
                href="#terms" 
                className="hover:text-primary-400 transition-colors"
              >
                Terms of Service
              </a>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Background decoration */}
      {/* <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-primary-500 via-secondary-500 to-primary-500" /> */}
    </footer>
  )
}

export default Footer
