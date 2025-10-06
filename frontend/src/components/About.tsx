import React from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { Code, Database, Brain, Globe } from 'lucide-react'

const About = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  })

  const stats = [
    { number: '5+', label: 'Hackathon Experience', icon: Code },
    { number: '20+', label: 'Projects Completed', icon: Database },
    { number: '10+', label: 'Technologies Mastered', icon: Brain },
    { number: '3+', label: 'Certifications', icon: Globe }
  ]

  const skills = [
    'Machine Learning & AI',
    'Generative AI',
    'Data Science & Analytics',
    'Full-Stack Development',
    'Database Design',
    'Data Visualization'
  ]

  return (
    <section id="about" className="section-padding bg-dark-900/50">
      <div className="container-custom">
        {/* Heading */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-6">
            About <span className="gradient-text">Me</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Passionate about leveraging data and technology to solve real-world problems.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Side: About Text + Core Competencies */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-6"
          >
            {/* About Content */}
            <div className="prose prose-lg prose-invert max-w-none">
              <p className="text-gray-300 leading-relaxed mb-6">
                I'm a passionate <strong className="text-primary-400">Data Scientist & AI Engineer</strong> with 
                a strong foundation in computer science and a specialization in data science. 
                I transform complex data into actionable insights and build intelligent solutions.
              </p>
              
              <p className="text-gray-300 leading-relaxed mb-6">
                My expertise spans machine learning, deep learning, and full-stack development. 
                I have experience with predictive analytics, computer vision, web applications, 
                and data visualization platforms.
              </p>
              
              <p className="text-gray-300 leading-relaxed">
                I'm always eager to learn new technologies and solve challenging problems. 
                Outside of coding, I explore research papers, contribute to open-source projects, 
                and share knowledge with the tech community.
              </p>
            </div>

            {/* Skills / Core Competencies */}
            <div className="mt-8">
              <h3 className="text-xl font-semibold text-white mb-4">Core Competencies</h3>
              <div className="flex flex-wrap gap-3">
                {skills.map((skill, index) => (
                  <motion.div
                    key={skill}
                    initial={{ opacity: 0, y: 20 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                    className="px-3 py-1 rounded-full bg-gradient-to-r from-primary-500 to-secondary-500 text-white text-sm font-medium cursor-default hover:scale-105 transition-transform"
                  >
                    {skill}
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Right Side: Stats + Profile */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="space-y-8"
          >
            {/* Stats Grid */}
            <div className="grid grid-cols-2 gap-6">
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={inView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ duration: 0.5, delay: 0.6 + index * 0.1 }}
                  whileHover={{ scale: 1.05 }}
                  className="card text-center group hover:bg-white/10"
                >
                  <stat.icon className="w-8 h-8 text-primary-400 mx-auto mb-3 group-hover:text-primary-300 transition-colors" />
                  <div className="text-3xl font-bold text-white mb-2">{stat.number}</div>
                  <div className="text-sm text-gray-400">{stat.label}</div>
                </motion.div>
              ))}
            </div>

            {/* Profile Image */}
            <div className="relative w-64 h-64 mx-auto">
              <div className="absolute inset-0 bg-gradient-to-r from-primary-500 to-secondary-500 rounded-full animate-pulse" />
              <div className="absolute inset-2 bg-dark-800 rounded-full flex items-center justify-center">
                <img
                  src="/ro_img.jpeg"
                  alt="Rohit Dutta"
                  className="w-56 h-56 rounded-full object-cover border-4 border-gradient-to-r from-primary-500 to-secondary-500"
                />
              </div>

              {/* Floating Accents */}
              <div className="absolute -top-6 -right-6 w-6 h-6 bg-primary-500 rounded-full animate-float" />
              <div className="absolute -bottom-6 -left-6 w-5 h-5 bg-secondary-500 rounded-full animate-float" style={{ animationDelay: '1s' }} />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default About
