import { useState } from 'react'
import { AnimatePresence } from 'framer-motion'
import Header from './components/Header'
import Hero from './components/Hero'
import AboutMe from './components/AboutMe'
import Technologies from './components/Technologies'
import Projects from './components/Projects'
import Contact from './components/Contact'
import Footer from './components/Footer'
import LoadingScreen from './components/LoadingScreen'
import ProjectDetails from './components/ProjectDetails'

import GSAPAnimations from './components/GSAPAnimations'
import TextReveal from './components/TextReveal'
import MobileOptimizer from './components/MobileOptimizer'
import { useScrollOptimization } from './hooks/useScrollOptimization'

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
import './styles/creative-fonts.css'
import './styles/project-actions.css'
import './styles/about-story.css'
import './styles/mobile-optimizer.css'
import './styles/code-showcase.css'
import './styles/unified-titles.css'
import './styles/hero-ctas.css'
import './styles/hero-intro.css'
import './styles/project-modal.css'
import './styles/landscape-optimizations.css'
import './styles/mobile-landscape-fix.css'


function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [selectedProject, setSelectedProject] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  
  useScrollOptimization();
  
  const handleLoadingComplete = () => {
    setIsLoading(false);
  };
  
  const handleOpenModal = (project) => {
    setSelectedProject(project);
    setIsModalOpen(true);
  };
  
  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedProject(null);
  };
  
  return (
    <>
      <AnimatePresence mode="wait">
        {isLoading ? (
          <LoadingScreen key="loading" onComplete={handleLoadingComplete} />
        ) : (
          <MobileOptimizer>
            <div key="main">
              <GSAPAnimations />
              <TextReveal />
              <Header />
              <main>
                <Hero />
                <AboutMe />
                <Technologies />
                <Projects onOpenModal={handleOpenModal} />
                <Contact />
              </main>
              <Footer />
            </div>
          </MobileOptimizer>
        )}
      </AnimatePresence>
      
      {/* Modal fuera del AnimatePresence para evitar conflictos */}
      <ProjectDetails 
        project={selectedProject}
        isOpen={isModalOpen}
        onClose={handleCloseModal}
      />
    </>
  )
}

export default App
