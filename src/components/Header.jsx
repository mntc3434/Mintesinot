import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { FaGithub, FaTelegram, FaArrowDown, FaEnvelope } from 'react-icons/fa';
import profileImg from '../assets/profile3.jpg';
import resume from '../assets/resume.pdf';

const Header = ({ setActiveSection }) => {
  const scrollTo = (id) => {
    const el = document.getElementById(id);
    if (el) window.scrollTo({ top: el.offsetTop - 80, behavior: 'smooth' });
    setActiveSection(id);
  };

  const { scrollY } = useScroll();
  const yParallax = useTransform(scrollY, [0, 1000], [0, 150]);

  // Storytelling staggered text animation
  const quote = "Software Engineer building intelligent solutions.";
  const words = quote.split(" ");

  const container = {
    hidden: { opacity: 0 },
    visible: (i = 1) => ({
      opacity: 1,
      transition: { staggerChildren: 0.1, delayChildren: 0.2 * i },
    }),
  };

  const child = {
    visible: {
      opacity: 1,
      y: 0,
      filter: "blur(0px)",
      transition: { type: "spring", damping: 12, stiffness: 100 },
    },
    hidden: {
      opacity: 0,
      y: 20,
      filter: "blur(10px)",
      transition: { type: "spring", damping: 12, stiffness: 100 },
    },
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center pt-20">
      <div className="max-w-6xl mx-auto px-6 w-full flex flex-col-reverse lg:flex-row items-center justify-between gap-16">
        
        {/* Content */}
        <div className="flex-1 text-center lg:text-left">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-border text-xs font-medium text-muted mb-8"
          >
            <span className="w-2 h-2 rounded-full bg-green-500 relative">
              <span className="absolute inset-0 rounded-full bg-green-500 animate-ping opacity-75"></span>
            </span>
            Available for opportunities
          </motion.div>

          <motion.div
            variants={container}
            initial="hidden"
            animate="visible"
            className="text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tighter leading-[1.1] mb-6 heading-display flex flex-wrap justify-center lg:justify-start gap-x-4"
          >
            {words.map((word, index) => (
              <motion.span 
                variants={child} 
                key={index} 
                className={index > 1 ? "text-muted" : "text-white"}
              >
                {word}
              </motion.span>
            ))}
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8, ease: "easeOut" }}
            className="text-lg text-muted max-w-xl mx-auto lg:mx-0 mb-10 leading-relaxed"
          >
            I'm Mintesinot Getu. I specialize in full-stack web and mobile development, integrating AI tools to solve complex problems. Currently building different AI applications.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1, ease: "easeOut" }}
            className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4"
          >
            <button
              onClick={() => scrollTo('projects')}
              className="w-full sm:w-auto px-6 py-3 bg-primary text-background font-medium rounded-md hover:bg-white/90 transition-colors"
            >
              View Projects
            </button>
            <a
              href={resume}
              download
              className="w-full sm:w-auto px-6 py-3 bg-transparent border border-border text-primary font-medium rounded-md hover:bg-surface transition-colors flex items-center justify-center gap-2"
            >
              Download CV
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 1.2 }}
            className="mt-12 flex items-center justify-center lg:justify-start gap-6 text-muted"
          >
            <a href="https://github.com/mntc3434" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">
              <FaGithub size={22} />
            </a>
            <a href="https://t.me/mnteGt" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">
              <FaTelegram size={22} />
            </a>
            <a href="mailto:mnte3434@gmail.com" className="hover:text-primary transition-colors">
              <FaEnvelope size={22} />
            </a>
          </motion.div>
        </div>

        {/* Profile Image - Minimalist Hover Effect */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.5, ease: "easeOut" }}
          style={{ y: yParallax }}
          className="relative w-64 h-64 sm:w-80 sm:h-80 lg:w-96 lg:h-96 group"
        >
          {/* Subtle frame behind image that lights up on hover */}
          <div className="absolute inset-0 bg-border transform translate-x-4 translate-y-4 rounded-xl -z-10 group-hover:bg-primary/20 transition-colors duration-500"></div>
          <img
            src={profileImg}
            alt="Mintesinot Getu"
            className="w-full h-full object-cover object-top rounded-xl border border-border blur-sm group-hover:blur-none group-hover:border-primary/50 group-hover:shadow-[0_0_30px_rgba(255,255,255,0.1)] transition-all duration-500"
          />
        </motion.div>
        
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 text-muted animate-bounce hidden md:block"
      >
        <FaArrowDown size={16} />
      </motion.div>
    </section>
  );
};

export default Header;
