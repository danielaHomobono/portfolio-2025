import { useState } from 'react'
import { AnimatePresence } from 'framer-motion'
import Header from './components/Header'
import Hero from './components/Hero'
import Technologies from './components/Technologies'
import Projects from './components/Projects'
import Contact from './components/Contact'
import Footer from './components/Footer'
import LoadingScreen from './components/LoadingScreen'
import DeveloperModeEasterEgg from './components/DeveloperModeEasterEgg'
import GSAPAnimations from './components/GSAPAnimations'
import TextReveal from './components/TextReveal'
import { useScrollOptimization } from './hooks/useScrollOptimization'
import foto from './assets/img/foto3.jpeg'
import './styles/reset.css'
import './styles/styles.css'
import './styles/responsive.css'
import './styles/header.css'
import './styles/fixes.css'
import './styles/body-fix.css'
import './styles/title-animation.css'
import './styles/welcome-text.css'
import './styles/performance.css'
import './styles/hover-cards.css'
import './styles/loading.css'
import './styles/matrix-photo.css'
import './styles/hover-hint.css'
import './styles/text-reveal.css'
import './styles/performance.css'

function App() {
  const [isLoading, setIsLoading] = useState(true);
  useScrollOptimization();
  
  const handleLoadingComplete = () => {
    setIsLoading(false);
  };
  
  return (
    <>
      <AnimatePresence mode="wait">
        {isLoading ? (
          <LoadingScreen key="loading" onComplete={handleLoadingComplete} />
        ) : (
          <div key="main">
            <GSAPAnimations />
            <TextReveal />
            <Header />
            <main>
              <Hero />
              <Technologies />
              <Projects />
              <Contact />
            </main>
            <Footer />
          </div>
        )}
      </AnimatePresence>
    </>
  )
}

export default App
