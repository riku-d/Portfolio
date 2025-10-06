import  { Suspense, lazy } from 'react'
import { BrowserRouter as Router } from 'react-router-dom'
import Header from './components/Header'
// Import components with lazy loading
const Hero = lazy(() => import('./components/Hero'))
import About from './components/About'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Education from './components/Education'
import Contact from './components/Contact'
import Footer from './components/Footer'
import ScrollToTop from './components/ScrollToTop'

function App() {
  return (
    <Router>
      <div className="min-h-screen" style={{ backgroundColor: '#0b0f14' }}>
        <ScrollToTop />
        <Header />
        <main>
          <Suspense fallback={
            <div className="min-h-screen flex items-center justify-center" style={{ backgroundColor: '#0b0f14' }}>
              <div className="w-64 h-64 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-full flex items-center justify-center">
                <div className="w-32 h-32 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full animate-pulse" />
              </div>
            </div>
          }>
            <Hero />
          </Suspense>
          {/* <Hero /> */}
          <About />
          <Skills />
          <Projects />
          <Education />
          <Contact />
        </main>
        <Footer />
      </div>
    </Router>
  )
}

export default App
