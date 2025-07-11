import Header from './components/Header'
import Hero from './components/Hero'
import Technologies from './components/Technologies'
import Projects from './components/Projects'
import Contact from './components/Contact'
import Footer from './components/Footer'
import './styles/reset.css'
import './styles/styles.css'
import './styles/responsive.css'
import './styles/header.css'
import './styles/fixes.css'
import './styles/body-fix.css'
import './styles/title-animation.css'

function App() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Technologies />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </>
  )
}

export default App
