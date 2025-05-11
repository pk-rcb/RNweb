import { useState, useEffect } from 'react'
import Navbar from './Navbar'
import AnimatedBackground from './AnimatedBackground'
import Home from './Home'
import './index.css'
import Sponsors from './sponsors'

function App() {
  const [activeSection, setActiveSection] = useState('home')
  const [scrollY, setScrollY] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY)
    }

    window.addEventListener('scroll', handleScroll)
    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  return (
    <>
      <AnimatedBackground scrollY={scrollY} />
      <Navbar activeSection={activeSection} setActiveSection={setActiveSection} />
      <main>
        <Home />
       
       {/* <Events />
        <Team />
        <Alumni /> */}
        <Sponsors /> 
      </main>
    </>
  )
}

export default App