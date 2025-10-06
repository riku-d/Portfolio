import React, { useState, useEffect, Suspense } from "react";
import { motion } from "framer-motion";
import { Download, Github, Linkedin, Mail } from 'lucide-react';
import { Canvas } from "@react-three/fiber";
import { ErrorBoundary } from "react-error-boundary";

// Lazy load the Hero3D component
const Hero3D = React.lazy(() => import("./Hero3D"));

const Hero = () => {
  const [typingText, setTypingText] = useState('');
  const [currentTextIndex, setCurrentTextIndex] = useState(0);
  const [, setIsMobile] = useState(false);

  const taglines = [
    'Data Scientist',
    'AI/ML Enginner',
    'Data Analyst',
    'Full Stack Developer'
  ];

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    handleResize();
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  useEffect(() => {
    const typeText = () => {
      const currentTagline = taglines[currentTextIndex];
      if (typingText.length < currentTagline.length) {
        setTypingText(currentTagline.slice(0, typingText.length + 1));
      } else {
        setTimeout(() => {
          setTypingText('');
          setCurrentTextIndex((prev) => (prev + 1) % taglines.length);
        }, 2000);
      }
    };

    const timer = setTimeout(typeText, 100);
    return () => clearTimeout(timer);
  }, [typingText, currentTextIndex, taglines]);

  const handleResumeDownload = () => {
    window.open(`${import.meta.env.VITE_API_URL}/api/resume/download`, '_blank');
  };

  return (
    <section 
      id="home" 
      className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20 sm:pt-24"
      style={{ backgroundColor: '#0b0f14' }}
    >
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.2 }}
          transition={{ duration: 1.5 }}
          className="absolute top-1/4 left-1/4 w-64 sm:w-96 h-64 sm:h-96 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full filter blur-3xl animate-pulse-slow"
        />
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.2 }}
          transition={{ duration: 1.5, delay: 0.3 }}
          className="absolute bottom-1/4 right-1/4 w-64 sm:w-96 h-64 sm:h-96 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full filter blur-3xl animate-float"
        />
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.2 }}
          transition={{ duration: 1.5, delay: 0.6 }}
          className="absolute top-3/4 left-1/2 w-64 sm:w-96 h-64 sm:h-96 bg-gradient-to-r from-cyan-500 to-green-500 rounded-full filter blur-3xl animate-float-delay"
        />
      </div>

      <div className="container mx-auto px-4 sm:px-6 md:px-8 lg:px-16 xl:px-24 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center">
          {/* Left side - Text content */}
          <div className="text-center md:text-left order-2 md:order-1">
            <motion.div 
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
              className="mb-4 md:mb-6"
            >
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-2 md:mb-4 text-white">
                Hi, I'm{' '}
                <span className="bg-gradient-to-r from-blue-400 to-purple-500 text-transparent bg-clip-text">
                  Rohit Dutta
                </span>
              </h1>
            
              <div className="flex flex-col items-center md:items-start mt-2">
                <span className="text-lg sm:text-xl md:text-2xl lg:text-3xl text-gray-300">
                  {typingText}
                  <span className="animate-pulse text-blue-400">|</span>
                </span>
              </div>
            </motion.div>

            <motion.p 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.7, delay: 0.3 }}
              className="text-base sm:text-lg mb-6 sm:mb-8 max-w-2xl mx-auto md:mx-0 text-gray-400 px-4 sm:px-0"
            >
              Passionate about building robust, scalable applications and
              exploring new technologies to solve complex problems.
            </motion.p>

            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.7, delay: 0.5 }}
              className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center md:justify-start mb-6 sm:mb-8"
            >
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={handleResumeDownload}
                className="flex items-center justify-center space-x-2 px-4 sm:px-6 py-2 sm:py-3 rounded-lg font-medium transition-all duration-300 bg-gradient-to-r from-blue-500 to-purple-600 text-white text-sm sm:text-base"
              >
                <Download size={18} />
                <span>Download Resume</span>
              </motion.button>
              
              <motion.a
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                href="#contact"
                className="flex items-center justify-center px-4 sm:px-6 py-2 sm:py-3 rounded-lg font-medium transition-all duration-300 border border-blue-500 text-blue-400 hover:bg-blue-500/10 text-sm sm:text-base"
              >
                Get In Touch
              </motion.a>
            </motion.div>

            {/* Social links */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.7 }}
              className="flex justify-center md:justify-start space-x-4 sm:space-x-6"
            >
              <motion.a
                whileHover={{ scale: 1.2, color: "#ffffff" }}
                href="https://github.com/riku-d"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 transition-colors duration-200"
              >
                <Github size={20} className="sm:w-6 sm:h-6" />
              </motion.a>
              <motion.a
                whileHover={{ scale: 1.2, color: "#0077b5" }}
                href="https://www.linkedin.com/in/rohit-dutta-64b0242a0/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 transition-colors duration-200"
              >
                <Linkedin size={20} className="sm:w-6 sm:h-6" />
              </motion.a>
              <motion.a
                whileHover={{ scale: 1.2, color: "#ea4335" }}
                href="mailto:rohitdutta2103@gmail.com"
                className="text-gray-400 transition-colors duration-200"
              >
                <Mail size={20} className="sm:w-6 sm:h-6" />
              </motion.a>
            </motion.div>
          </div>

          {/* Right side - 3D Model */}
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
            className="relative w-full max-w-[400px] aspect-square sm:max-w-full flex items-center justify-center order-1 md:order-2 mx-auto"
          >
            <ErrorBoundary fallback={<FallbackAnimation />}>
              <Suspense fallback={<FallbackAnimation />}>
                <div className="w-full h-full max-w-[400px] sm:max-w-full mx-auto">
                  <Canvas
                    camera={{ position: [0, 0, 4], fov: 50 }}
                    style={{ background: 'transparent' }}
                  >
                    <Hero3D />
                  </Canvas>
                </div>
              </Suspense>
            </ErrorBoundary>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

// Fallback animation if 3D fails to load
const FallbackAnimation = () => {
  return (
    <div className="w-96 h-96 relative">
  <div className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-500/20 to-purple-500/20 animate-pulse-slow"></div>
  <div className="absolute inset-2 rounded-full bg-gradient-to-r from-blue-400/30 to-purple-400/30 animate-float"></div>
  <div className="absolute inset-4 rounded-full bg-gradient-to-r from-blue-400/40 to-purple-400/40 animate-float-delay"></div>
  <div className="absolute inset-8 rounded-full bg-gradient-to-r from-blue-400/50 to-purple-400/50 animate-pulse-slow"></div>
  <div className="absolute inset-12 rounded-full bg-gradient-to-r from-blue-400/60 to-purple-400/60 animate-reverse-spin"></div>

  {/* Bigger Image */}
  <div className="absolute inset-8 rounded-full bg-gradient-to-r from-blue-400 to-purple-400 flex items-center justify-center">
    <img
      src="/ro_img.jpeg"
      alt="Rohit Dutta"
      className="w-full h-full rounded-full object-cover"
    />
  </div>
</div>

  );
};

export default Hero;
