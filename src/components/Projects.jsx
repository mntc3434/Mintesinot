import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaGithub, FaExternalLinkAlt, FaTimes } from 'react-icons/fa';
import Img1 from '../assets/prject1.png';
import Img2 from '../assets/project2.png';
import Img3 from '../assets/project3.png';
import Img4 from '../assets/project4.png';
import Img5 from '../assets/project5.png';
import Img6 from '../assets/project6.png';

const projects = [
  {
    id: 1,
    title: 'Hasab — Investor & Entrepreneur Hub',
    shortDesc: 'A platform that bridges entrepreneurs and investors. I built the full mobile app and helped with backend integration.',
    fullDesc: 'Built during my internship at Kuraz Tech as part of a team. I took ownership of the entire Flutter mobile app — authentication, feed, profile management, and REST API communication with the Laravel backend.',
    tags: ['Flutter', 'Laravel', 'REST API'],
    github: 'https://github.com/Project-Kuraz-Group-8/E-and-I-Mobile-App',
    demo: null,
    image: Img1,
  },
  {
    id: 2,
    title: 'Farmer Marketplace — East Hararge',
    shortDesc: 'Full-stack web app for farmers to list and sell products, with integrated Chapa payment.',
    fullDesc: 'Designed and built solo from scratch. Farmers can post listings, manage inventory, and receive payments through the Chapa API. Built on .NET Core MVC with SQL Server — clean, fast, and deployed.',
    tags: ['.NET Core MVC', 'SQL Server', 'Chapa API'],
    github: 'https://github.com/mntc3434/Farmer-MP',
    demo: null,
    image: Img2,
  },
  {
    id: 3,
    title: 'Flash — Group Chat App',
    shortDesc: 'Real-time group chat with Firebase, instant messaging, auth, and media sharing.',
    fullDesc: 'A Flutter + Firebase app with real-time message sync, group creation, image sharing, and user authentication. Clean UI, snappy performance.',
    tags: ['Flutter', 'Firebase', 'Real-time'],
    github: 'https://github.com/mntc3434/flash_group_chat',
    demo: null,
    image: Img3,
  },
  {
    id: 4,
    title: 'Sentiment Analysis — NLP',
    shortDesc: 'Text sentiment classifier using ML techniques — trained, tested, and working.',
    fullDesc: 'Python NLP project that classifies sentiment from user input. Used classic ML approaches alongside text preprocessing pipelines. Part of a university research project on Amharic language analysis.',
    tags: ['Python', 'NLP', 'Machine Learning'],
    github: 'https://github.com/mntc3434/NLP',
    demo: null,
    image: Img4,
  },
  {
    id: 5,
    title: 'Art Gallery Simulation — OpenGL',
    shortDesc: '3D interactive gallery in C++ and OpenGL — walk through rooms, view art.',
    fullDesc: 'A computer graphics project where I built a 3D gallery you can navigate in first-person. Lighting, textures, and basic collision all handled with raw OpenGL and GLUT.',
    tags: ['C++', 'OpenGL', '3D Graphics'],
    github: 'https://github.com/mntc3434/computer_graph/blob/main/ArtG_simulation.cpp',
    demo: null,
    image: Img5,
  },
  {
    id: 6,
    title: 'News App — Android',
    shortDesc: 'Android news reader with Open News API, categories, search, and bookmarks.',
    fullDesc: 'Built in Java for Android. Pulls from the Open News API, displays categorized news, lets users search and bookmark articles. Clean card-based UI with offline support for bookmarks.',
    tags: ['Java', 'Android', 'REST API', 'Open News API'],
    github: 'https://github.com/mntc3434/News-App',
    demo: null,
    image: Img6,
  },
];

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  transition: { duration: 0.65, delay, ease: [0.16, 1, 0.3, 1] },
  viewport: { once: true },
});

const Projects = () => {
  const [selected, setSelected] = useState(null);

  return (
    <section id="projects" className="py-28 relative">
      <div
        className="absolute top-0 left-0 right-0 h-px"
        style={{ background: 'linear-gradient(90deg, transparent, rgba(79,142,247,0.15), transparent)' }}
      />

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        {/* Heading */}
        <motion.div {...fadeUp(0)} className="mb-12">
          <span className="section-tag">Projects</span>
          <h2 className="text-4xl md:text-5xl font-black tracking-tight mt-2" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>
            Things I've{' '}
            <span className="gradient-text">actually built</span>
          </h2>
          <p className="mt-4 text-gray-400 max-w-xl">
            A selection of projects across mobile, web, and systems. More on GitHub.
          </p>
        </motion.div>

        {/* Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, i) => (
            <motion.div
              key={project.id}
              {...fadeUp(i * 0.07)}
              whileHover={{ y: -6 }}
              onClick={() => setSelected(project)}
              className="glass rounded-2xl border border-white/7 overflow-hidden cursor-pointer group transition-all hover:border-blue-500/30 hover:shadow-[0_20px_60px_rgba(79,142,247,0.1)]"
            >
              {/* Image */}
              <div className="project-card-img h-44 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-base font-semibold text-white mb-2 leading-snug">{project.title}</h3>
                <p className="text-sm text-gray-400 mb-4 leading-relaxed line-clamp-2">{project.shortDesc}</p>

                {/* Tags */}
                <div className="flex flex-wrap gap-1.5 mb-4">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2.5 py-1 text-xs font-medium rounded-md text-blue-400 bg-blue-500/8 border border-blue-500/15"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Links */}
                <div className="flex items-center gap-4 pt-1 border-t border-white/5">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={(e) => e.stopPropagation()}
                    className="flex items-center gap-1.5 text-xs text-gray-400 hover:text-white transition-colors"
                  >
                    <FaGithub size={14} /> Code
                  </a>
                  {project.demo && (
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={(e) => e.stopPropagation()}
                      className="flex items-center gap-1.5 text-xs text-gray-400 hover:text-white transition-colors"
                    >
                      <FaExternalLinkAlt size={12} /> Live
                    </a>
                  )}
                  <span className="ml-auto text-xs text-gray-600 group-hover:text-blue-400 transition-colors">
                    Details →
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* GitHub CTA */}
        <motion.div {...fadeUp(0.4)} className="mt-12 text-center">
          <a
            href="https://github.com/mntc3434"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl text-sm font-semibold text-gray-300 border border-white/10 bg-white/4 hover:bg-white/8 hover:text-white transition-all"
          >
            <FaGithub size={16} />
            More projects on GitHub
          </a>
        </motion.div>
      </div>

      {/* Detail Modal */}
      <AnimatePresence>
        {selected && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4"
            style={{ background: 'rgba(0,0,0,0.8)', backdropFilter: 'blur(12px)' }}
            onClick={() => setSelected(null)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.9, opacity: 0, y: 20 }}
              transition={{ type: 'spring', stiffness: 300, damping: 25 }}
              className="bg-[#111827] border border-white/10 rounded-2xl max-w-lg w-full overflow-hidden shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="h-52 overflow-hidden relative">
                <img src={selected.image} alt={selected.title} className="w-full h-full object-cover" />
                <div className="absolute inset-0" style={{ background: 'linear-gradient(to top, #111827 0%, transparent 60%)' }} />
                <button
                  onClick={() => setSelected(null)}
                  className="absolute top-4 right-4 w-8 h-8 flex items-center justify-center rounded-lg bg-black/50 text-white hover:bg-black/70 transition-colors"
                >
                  <FaTimes size={14} />
                </button>
              </div>

              <div className="p-6">
                <h3 className="text-xl font-bold text-white mb-3">{selected.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed mb-5">{selected.fullDesc}</p>

                <div className="flex flex-wrap gap-2 mb-6">
                  {selected.tags.map((tag) => (
                    <span key={tag} className="px-3 py-1 text-xs font-medium rounded-lg text-blue-400 bg-blue-500/10 border border-blue-500/20">
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="flex gap-3">
                  <a
                    href={selected.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-4 py-2.5 rounded-xl text-sm font-semibold text-white"
                    style={{ background: 'linear-gradient(135deg, #4f8ef7, #7c5af6)' }}
                  >
                    <FaGithub size={15} /> View Code
                  </a>
                  {selected.demo && (
                    <a
                      href={selected.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 px-4 py-2.5 rounded-xl text-sm font-semibold text-gray-300 bg-white/8 border border-white/10 hover:text-white transition-all"
                    >
                      <FaExternalLinkAlt size={13} /> Live Demo
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Projects;