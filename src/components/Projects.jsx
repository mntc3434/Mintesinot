import { motion } from 'framer-motion';

const Projects = () => {
  const projects = [
    {
      id: 1,
      title: 'Investor and Entrepreneur Hub (hasab)',
      tech: ['Flutter', 'Laravel', 'REST API'],
      description: 'A collaborative platform designed to bridge the gap between entrepreneurs and investors. I developed the entire mobile application using Flutter and heavily contributed to the Laravel backend integration, ensuring seamless data flow and robust user authentication.',
      type: 'Team Project',
      githubLink: 'https://github.com/Project-Kuraz-Group-8/E-and-I-Mobile-App'
    },
    {
      id: 2,
      title: 'Farmer Marketplace for East Hararge',
      tech: ['.NET Core MVC', 'SQL Server', 'Chapa API'],
      description: 'My final year university project. A full-stack web application built independently to help local farmers advertise and sell their products directly to consumers. Integrated the Chapa payment gateway for secure, localized digital transactions.',
      type: 'Solo Project',
      githubLink: 'https://github.com/mntc3434/Farmer-MP'
    },
    {
      id: 3,
      title: 'Flash Group Chat App',
      tech: ['Flutter', 'Firebase', 'Real-time'],
      description: 'A real-time group chat application built with Flutter and Firebase, featuring instant messaging, user authentication, and media sharing.',
      type: 'Solo Project',
      githubLink: 'https://github.com/mntc3434/flash_group_chat'
    },
    {
      id: 4,
      title: 'Sentiment Analysis Project',
      tech: ['Python', 'NLP', 'Machine Learning'],
      description: 'Natural Language Processing application that analyzes sentiment from text inputs using machine learning techniques.',
      type: 'Solo Project',
      githubLink: 'https://github.com/mntc3434/NLP'
    },
    {
      id: 5,
      title: 'Art Gallery Simulation',
      tech: ['C++', 'OpenGL', '3D Graphics'],
      description: 'A 3D art gallery simulation built with C++ and OpenGL, allowing users to virtually walk through a gallery and view artwork in an immersive environment.',
      type: 'Solo Project',
      githubLink: 'https://github.com/mntc3434/computer_graph/blob/main/ArtG_simulation.cpp'
    },
    {
      id: 6,
      title: 'News App (Mobile)',
      tech: ['Java', 'Android', 'REST API'],
      description: 'A mobile news application built with Java that fetches data from the Open News API, featuring categorized news, search functionality, and bookmarking.',
      type: 'Solo Project',
      githubLink: 'https://github.com/mntc3434/News-App'
    }
  ];

  return (
    <section id="projects" className="py-32 border-t border-border">
      <div className="max-w-6xl mx-auto px-6">
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16 flex flex-col md:flex-row md:items-end justify-between gap-6"
        >
          <div>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4 heading-display">Selected Work</h2>
            <div className="w-12 h-1 bg-primary"></div>
          </div>
          <a 
            href="https://github.com/mntc3434" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-sm font-medium text-muted hover:text-primary transition-colors flex items-center gap-2"
          >
            View GitHub Profile
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </a>
        </motion.div>

        <div className="flex flex-col gap-12">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut", delay: index * 0.1 }}
              viewport={{ once: true, margin: "-50px" }}
              className="group relative"
            >
              {/* Animated Line indicator */}
              <motion.div 
                initial={{ scaleY: 0 }}
                whileInView={{ scaleY: 1 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                viewport={{ once: true }}
                className="absolute -left-6 top-0 bottom-0 w-px bg-border group-hover:bg-primary transition-colors duration-500 hidden md:block origin-top"
              />

              <div className="grid md:grid-cols-12 gap-6 md:gap-12">
                <div className="md:col-span-4 lg:col-span-3">
                  <span className="text-xs font-semibold uppercase tracking-widest text-primary mb-2 block">{project.type}</span>
                  <h3 className="text-xl font-bold tracking-tight text-white mb-4 group-hover:translate-x-2 transition-transform duration-300">{project.title}</h3>
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech) => (
                      <span key={tech} className="text-xs text-muted border border-border px-2 py-1 rounded">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="md:col-span-8 lg:col-span-9 flex flex-col justify-between">
                  <p className="text-muted leading-relaxed text-sm md:text-base mb-6">
                    {project.description}
                  </p>
                  
                  {project.githubLink && (
                    <div className="mt-auto">
                      <a 
                        href={project.githubLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-sm font-medium text-primary hover:text-muted transition-colors underline underline-offset-4 inline-flex items-center gap-2 group-hover:translate-x-2 transition-transform duration-300"
                      >
                        View Repository
                        <svg className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                        </svg>
                      </a>
                    </div>
                  )}
                </div>
              </div>
              
              {/* Divider between projects */}
              {index !== projects.length - 1 && (
                <div className="w-full h-px bg-border/50 mt-12 block md:hidden"></div>
              )}
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Projects;