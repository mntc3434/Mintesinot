import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

const Experience = () => {
  const containerRef = useRef(null);
  
  // Removed local scroll progress since we use global journey line

  const experiences = [
    {
      id: 1,
      role: 'AI Software Developer',
      company: 'Uponli',
      period: 'November 2025 – Present',
      location: 'Ethiopia (Remote)',
      details: [
        'Designing an AI-based stock market prediction software system using n8n.',
        'Contributing to feature definition, system structure, and overall development preparation.',
      ]
    },
    {
      id: 2,
      role: 'AI Engineer Intern',
      company: 'iCog Labs',
      period: 'September 2025 – Dec 2025',
      location: 'Ethiopia',
      details: [
        'Working on the ECAN (Economic Attention Network) project at iCog Labs.',
        'Collaborating with senior engineers to enhance system design and performance.',
      ]
    },
    {
      id: 3,
      role: 'Software Engineering Intern',
      company: 'Kuraz Tech',
      period: '2024',
      location: 'Ethiopia',
      details: [
        'Contributed to the development of software, websites, and mobile apps.',
        'Worked on an entrepreneur-investor connection platform (hasab).',
        'Successfully completed internship and received certificate of completion.',
      ]
    }
  ];

  const education = [
    {
      degree: 'BSc Computer Science',
      institution: 'Haramaya University',
      period: 'May 2022 – June 2025',
      details: ''
    }
  ];

  return (
    <section id="experience" className="py-32 border-t border-border bg-surface/30">
      <div className="max-w-6xl mx-auto px-6" ref={containerRef}>
        
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 relative">
          
          {/* Work Experience */}
          <div className="relative z-10">
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="mb-12"
            >
              <h2 className="text-2xl md:text-3xl font-bold tracking-tight mb-4 heading-display">Experience</h2>
              <div className="w-8 h-1 bg-primary"></div>
            </motion.div>

            {/* Removed local before: classes to rely on global journey line */}
            <div className="space-y-12 relative">
              {experiences.map((exp, index) => (
                <motion.div
                  key={exp.id}
                  initial={{ opacity: 0, x: -50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, ease: "easeOut" }}
                  viewport={{ once: true, margin: "-100px" }}
                  className="relative pl-8 md:pl-0"
                >
                  <div className="md:flex items-center justify-between md:mb-2">
                    <div className="flex items-center gap-4 mb-2 md:mb-0">
                      {/* Timeline dot */}
                      <motion.div 
                        initial={{ scale: 0 }}
                        whileInView={{ scale: 1 }}
                        transition={{ delay: 0.3 }}
                        viewport={{ once: true }}
                        className="absolute left-0 md:relative md:left-auto w-4 h-4 rounded-full border-4 border-background bg-primary z-20"
                      />
                      <h3 className="text-lg font-bold text-white">{exp.role}</h3>
                    </div>
                    <span className="text-xs font-semibold uppercase tracking-widest text-muted">{exp.period}</span>
                  </div>
                  
                  <div className="md:pl-8">
                    <p className="text-primary font-medium text-sm mb-4">{exp.company} <span className="text-muted font-normal">— {exp.location}</span></p>
                    <ul className="space-y-2">
                      {exp.details.map((detail, i) => (
                        <motion.li 
                          initial={{ opacity: 0 }}
                          whileInView={{ opacity: 1 }}
                          transition={{ delay: 0.4 + (i * 0.1) }}
                          viewport={{ once: true }}
                          key={i} 
                          className="text-sm text-muted leading-relaxed flex items-start gap-2"
                        >
                          <span className="mt-2 w-1 h-1 rounded-full bg-border flex-shrink-0"></span>
                          {detail}
                        </motion.li>
                      ))}
                    </ul>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Education */}
          <div className="relative z-10">
            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="mb-12 lg:pl-16"
            >
              <h2 className="text-2xl md:text-3xl font-bold tracking-tight mb-4 heading-display">Education</h2>
              <div className="w-8 h-1 bg-primary"></div>
            </motion.div>

            {/* Removed local before: classes to rely on global journey line */}
            <div className="space-y-12 relative lg:pl-16">
              {education.map((edu, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, ease: "easeOut" }}
                  viewport={{ once: true, margin: "-100px" }}
                  className="relative pl-8 md:pl-0"
                >
                  <div className="md:flex items-center justify-between md:mb-2">
                    <div className="flex items-center gap-4 mb-2 md:mb-0">
                      <motion.div 
                        initial={{ scale: 0 }}
                        whileInView={{ scale: 1 }}
                        transition={{ delay: 0.3 }}
                        viewport={{ once: true }}
                        className="absolute left-0 md:relative md:left-auto w-4 h-4 rounded-full border-4 border-background bg-primary z-20"
                      />
                      <h3 className="text-lg font-bold text-white">{edu.degree}</h3>
                    </div>
                    <span className="text-xs font-semibold uppercase tracking-widest text-muted">{edu.period}</span>
                  </div>
                  
                  <div className="md:pl-8">
                    <p className="text-primary font-medium text-sm mb-3">{edu.institution}</p>
                    {edu.details && (
                      <p className="text-sm text-muted inline-flex items-center px-2.5 py-1 rounded border border-border bg-background">
                        {edu.details}
                      </p>
                    )}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Experience;
