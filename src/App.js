import { useState, useEffect } from 'react';
import { motion, AnimatePresence, useScroll, useSpring, useTransform } from 'framer-motion';
import Navbar from './components/Navbar';
import Header from './components/Header';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Experience from './components/Experience';
import Contact from './components/Contact';
import Footer from './components/Footer';
import './App.css';

function App() {
  const [activeSection, setActiveSection] = useState('home');
  const [isLoaded, setIsLoaded] = useState(false);
  
  const { scrollYProgress } = useScroll();
  const scaleY = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });
  
  // Use useTransform so the dot's position perfectly syncs with the scroll progress, starting below the navbar (6rem / 96px)
  const dotY = useTransform(scaleY, [0, 1], ["6rem", "100%"]);

  useEffect(() => {
    document.documentElement.classList.add('dark');
    setTimeout(() => setIsLoaded(true), 100);
  }, []);

  useEffect(() => {
    const sections = ['home', 'about', 'skills', 'projects', 'experience', 'contact'];

    const handleScroll = () => {
      const scrollY = window.scrollY + 120;
      for (const id of sections) {
        const el = document.getElementById(id);
        if (el) {
          const top = el.offsetTop;
          const bottom = top + el.offsetHeight;
          if (scrollY >= top && scrollY < bottom) {
            setActiveSection(id);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-background text-primary relative selection:bg-white selection:text-black overflow-hidden">
      
      {/* The Long Journey Line (Behind text, starting below nav) */}
      <div className="fixed left-1/2 top-24 bottom-0 w-px bg-border z-0 hidden lg:block -translate-x-1/2" />
      <motion.div
        className="fixed left-1/2 top-24 bottom-0 w-px bg-white z-0 origin-top hidden lg:block -translate-x-1/2 opacity-30"
        style={{ scaleY }}
      />
      {/* The Traveler Dot */}
      <motion.div 
        className="fixed left-1/2 w-3 h-3 bg-white rounded-full z-0 shadow-[0_0_15px_rgba(255,255,255,0.4)] -translate-x-1/2 hidden lg:block"
        style={{ 
          top: dotY, 
          translateY: "-50%" 
        }}
      />

      {/* Subtle minimalist grid */}
      <div className="fixed inset-0 grid-bg pointer-events-none z-0" />

      <AnimatePresence>
        {isLoaded && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <Navbar activeSection={activeSection} setActiveSection={setActiveSection} />

            <main className="relative z-10 selection:bg-white selection:text-black">
              <Header setActiveSection={setActiveSection} />
              <About />
              <Skills />
              <Projects />
              <Experience />
              <Contact />
            </main>

            <Footer />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default App;