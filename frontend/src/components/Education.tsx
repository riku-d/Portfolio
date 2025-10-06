
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { GraduationCap, Award, BookOpen, Users } from 'lucide-react'

const Education = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  })

  const education = [
    {
      degree: 'B.Tech in Computer Science',
      specialization: 'Specialization in Data Science',
      institution: 'Heritage Institute of Technology, Kolkata',
      year: '2023 - 2027',
      gpa: '8.85/10',
      description: 'Comprehensive study of computer science fundamentals with specialized focus on data science, machine learning, and artificial intelligence.',
      highlights: [
        'Specialized coursework in Machine Learning and Data Mining',
        'Advanced Statistics and Probability',
        'Database Management Systems',
        'Software Engineering and Project Management'
      ]
    }
  ]

  const certifications = [
    {
      name: 'Complete Data Science, Machine Learning, DL, NLP Bootcamp',
      issuer: 'KRISHAI Technologies Private Limited',
      year: '2025',
      icon: Award
    },
    {
      name: 'Complete Generative AI Course with Langchain and Hugging Face',
      issuer: 'KRISHAI Technologies Private Limited',
      year: '2025',
      icon: BookOpen
    },
    {
      name: 'Ultimate RAG Bootcamp Using LangChain, LangGraph & Langsmith',
      issuer: 'KRISHAI Technologies Private Limited',
      year: 'Ongoing',
      icon: Award
    }
  ]

 

  return (
    <section id="education" className="section-padding">
      <div className="container-custom">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-6">
            Education & <span className="gradient-text">Certifications</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            My academic journey and professional certifications in data science and technology
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Education */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-8"
          >
            <div className="flex items-center space-x-4 mb-8">
              <div className="p-4 bg-gradient-to-r from-primary-500 to-secondary-500 rounded-lg">
                <GraduationCap className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-white">Education</h3>
            </div>

            {education.map((edu, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.4 + index * 0.1 }}
                className="card"
              >
                <div className="space-y-4">
                  <div>
                    <h4 className="text-xl font-semibold text-white mb-2">
                      {edu.degree}
                    </h4>
                    <p className="text-primary-400 font-medium mb-2">
                      {edu.specialization}
                    </p>
                    <p className="text-gray-300 mb-2">{edu.institution}</p>
                    <div className="flex items-center justify-between text-sm text-gray-400">
                      <span>{edu.year}</span>
                      <span>GPA: {edu.gpa}</span>
                    </div>
                  </div>
                  
                  <p className="text-gray-300 text-sm leading-relaxed">
                    {edu.description}
                  </p>
                  
                  <div>
                    <h5 className="text-sm font-semibold text-white mb-2">Key Highlights:</h5>
                    <ul className="space-y-1">
                      {edu.highlights.map((highlight, idx) => (
                        <li key={idx} className="text-sm text-gray-400 flex items-start space-x-2">
                          <div className="w-1.5 h-1.5 bg-primary-400 rounded-full mt-2 flex-shrink-0" />
                          <span>{highlight}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Certifications & Achievements */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="space-y-8"
          >
            {/* Certifications */}
            <div>
              <div className="flex items-center space-x-4 mb-6">
                <div className="p-4 bg-gradient-to-r from-primary-500 to-secondary-500 rounded-lg">
                  <Award className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-white">Certifications</h3>
              </div>

              <div className="space-y-4">
                {certifications.map((cert, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.5, delay: 0.6 + index * 0.1 }}
                    className="card group hover:bg-white/10"
                  >
                    <div className="flex items-start space-x-4">
                      <div className="p-3 bg-dark-700 rounded-lg group-hover:bg-primary-500/20 transition-colors">
                        <cert.icon className="w-6 h-6 text-primary-400" />
                      </div>
                      <div className="flex-1">
                        <h4 className="text-lg font-semibold text-white mb-1">
                          {cert.name}
                        </h4>
                        <p className="text-gray-400 text-sm mb-1">{cert.issuer}</p>
                        <p className="text-primary-400 text-sm font-medium">{cert.year}</p>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Achievements */}
            <div>
              <div className="flex items-center space-x-4 mb-6">
                {/* <div className="p-4 bg-gradient-to-r from-primary-500 to-secondary-500 rounded-lg">
                  <Users className="w-8 h-8 text-white" />
                </div> */}
                {/* <h3 className="text-2xl font-bold text-white">Achievements</h3> */}
              </div>

              {/* <div className="grid gap-4">
                {achievements.map((achievement, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.5, delay: 0.8 + index * 0.1 }}
                    className="card group hover:bg-white/10"
                  >
                    <div className="flex items-start space-x-4">
                      <div className="p-3 bg-dark-700 rounded-lg group-hover:bg-primary-500/20 transition-colors">
                        <achievement.icon className="w-6 h-6 text-primary-400" />
                      </div>
                      <div className="flex-1">
                        <h4 className="text-lg font-semibold text-white mb-1">
                          {achievement.title}
                        </h4>
                        <p className="text-gray-400 text-sm">
                          {achievement.description}
                        </p>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div> */}
            </div>
          </motion.div>
        </div>

        {/* Additional info */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 1 }}
          className="mt-16 text-center"
        >
          <div className="card max-w-4xl mx-auto">
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-primary-500 to-secondary-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <BookOpen className="w-8 h-8 text-white" />
                </div>
                <h4 className="text-lg font-semibold text-white mb-2">Continuous Learning</h4>
                <p className="text-gray-400 text-sm">
                  Always exploring new technologies and methodologies
                </p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-primary-500 to-secondary-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Award className="w-8 h-8 text-white" />
                </div>
                <h4 className="text-lg font-semibold text-white mb-2">Industry Recognition</h4>
                <p className="text-gray-400 text-sm">
                  Certified by leading technology companies
                </p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-primary-500 to-secondary-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="w-8 h-8 text-white" />
                </div>
                <h4 className="text-lg font-semibold text-white mb-2">Community Impact</h4>
                <p className="text-gray-400 text-sm">
                  Contributing to the data science community
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Education
