import React, { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { Menu, X, Download } from 'lucide-react'

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)  // only true when scrolled more than 50px
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navItems = [
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Education', href: '#education' },
    { name: 'Contact', href: '#contact' },
  ]

  const handleResumeDownload = () => {
    window.open(`${import.meta.env.VITE_API_URL}/api/resume/download`, '_blank')
  }

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'backdrop-blur-md border-b' : 'bg-transparent'
      }`}
      style={{
        backgroundColor: isScrolled ? 'rgba(11, 15, 20, 0.85)' : 'transparent',
        borderBottomColor: isScrolled ? 'rgba(0, 0, 0, 0.1)' : 'transparent'
      }}
    >
      <div className="max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 gap-4">
          
          {/* Logo */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="flex items-center space-x-3"
          >
            <div className="w-10 h-10 rounded-full overflow-hidden">
              <img 
                src="/ro_img.jpeg"
                alt="Rohit Dutta" 
                className="w-10 h-10 rounded-full object-cover" 
              />
            </div>
            <div className="flex flex-col">
              <h1 className="text-base sm:text-xl font-bold text-white leading-tight">
                Rohit Dutta
              </h1>
              <p className="text-xs sm:text-sm text-gray-400 leading-tight">
                Data Scientist & AI Engineer
              </p>
            </div>
          </motion.div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <motion.a
                key={item.name}
                href={item.href}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="transition-colors duration-200 font-medium text-gray-300 hover:text-cyan-400"
              >
                {item.name}
              </motion.a>
            ))}
            <motion.button
              onClick={handleResumeDownload}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="flex items-center space-x-2 px-6 py-3 rounded-lg font-medium transition-all duration-300 transform hover:scale-105 hover:shadow-lg"
              style={{ 
                background: 'linear-gradient(135deg, #00d4ff 0%, #7b61ff 100%)',
                color: '#ffffff'
              }}
            >
              <Download size={16} />
              <span>Resume</span>
            </motion.button>
          </nav>

          {/* Mobile menu button */}
          <motion.button
            whileTap={{ scale: 0.95 }}
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 rounded-lg text-gray-300 hover:text-white hover:bg-white/10 transition-colors"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </motion.button>
        </div>

        {/* Mobile Navigation */}
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ 
            opacity: isMenuOpen ? 1 : 0, 
            height: isMenuOpen ? 'auto' : 0 
          }}
          transition={{ duration: 0.3 }}
          className="md:hidden overflow-hidden w-full"
        >
          <div className="px-4 py-6 space-y-4 bg-dark-900/95 backdrop-blur-md border-t border-white/10 w-full">
            {navItems.map((item) => (
              <motion.a
                key={item.name}
                href={item.href}
                onClick={() => setIsMenuOpen(false)}
                whileHover={{ x: 10 }}
                className="block text-gray-300 hover:text-primary-400 transition-colors duration-200 font-medium py-2"
              >
                {item.name}
              </motion.a>
            ))}
            <motion.button
              onClick={() => {
                handleResumeDownload()
                setIsMenuOpen(false)
              }}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="btn-primary w-full flex items-center justify-center space-x-2 mt-4"
            >
              <Download size={16} />
              <span>Download Resume</span>
            </motion.button>
          </div>
        </motion.div>
      </div>
    </motion.header>
  )
}

export default Header
