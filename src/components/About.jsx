import { motion } from 'framer-motion';

const About = () => {
  const details = [
    { label: 'Full Name', value: 'Mintesinot Getu Mulatu' },
    { label: 'Nationality', value: 'Ethiopian' },
    { label: 'Location', value: 'Addis Ababa' },
    { label: 'Phone', value: '+251 962 79 81 55' },
    { label: 'Email', value: 'mnte3434@gmail.com' },
  ];

  const languages = [
    { name: 'English', level: 'Proficient' },
    { name: 'Amharic', level: 'Native' },
    { name: 'Other', level: 'Local languages' },
  ];

  const attributes = [
    "Fast learner with a passion for new technologies",
    "Strong problem-solving and critical thinking skills",
    "Enjoys teamwork, communication, and creative collaboration",
    "Hobbies include playing guitar, video games, and building simple projects"
  ];

  const certs = [
    "INSA Cyber Talent Summer Camp (4th Round Graduate)",
    "Internship Certificate - Kuraz Tech",
    "Engagement Certificate - HUCCIA",
    "Machine Learning (Supervised & Unsupervised)",
    "Neural Networks and Deep Learning",
    "Natural Language Processing (NLP)",
    "Data Analysis with Python",
    "Web Application Technologies & Django",
    "Programming Fundamentals"
  ];

  const paragraphVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
  };

  return (
    <section id="about" className="py-32 border-t border-border relative">
      <div className="max-w-6xl mx-auto px-6">
        
        <motion.div 
          initial={{ opacity: 0, width: 0 }}
          whileInView={{ opacity: 1, width: 48 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4 heading-display">About Me</h2>
          <div className="h-1 bg-primary"></div>
        </motion.div>

        <div className="grid lg:grid-cols-12 gap-12 lg:gap-20">
          
          {/* Main Bio with Staggered Reveal */}
          <div className="lg:col-span-7 space-y-8">
            <motion.div 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={{
                visible: { transition: { staggerChildren: 0.3 } }
              }}
              className="prose prose-invert prose-p:text-muted prose-p:leading-relaxed max-w-none"
            >
              <motion.p variants={paragraphVariants}>
                I am a recent Computer Science graduate from Haramaya University with a strong foundation in full-stack web and mobile development, as well as an intense focus on Artificial Intelligence.
              </motion.p>
              <motion.p variants={paragraphVariants}>
                My expertise spans across multiple ecosystems — from building seamless mobile applications using Flutter, to designing robust backend systems with .NET Core and Laravel, to integrating advanced AI workflows using Langchain and n8n.
              </motion.p>
              <motion.p variants={paragraphVariants}>
                Beyond code, I am a fast learner and a dedicated problem solver. I believe in the power of creative collaboration to deliver solutions that are not just functional, but exceptional. When I am off the keyboard, you can find me playing guitar or experimenting with new hardware setups.
              </motion.p>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1, delay: 0.8 }}
              className="grid sm:grid-cols-2 gap-8 pt-6 border-t border-border"
            >
              <div>
                <h3 className="text-sm font-semibold uppercase tracking-widest text-primary mb-4">Personal Details</h3>
                <ul className="space-y-3 text-sm">
                  {details.map((d) => (
                    <li key={d.label} className="flex justify-between border-b border-border/50 pb-2">
                      <span className="text-muted">{d.label}</span>
                      <span className="text-primary font-medium">{d.value}</span>
                    </li>
                  ))}
                </ul>
              </div>
              
              <div>
                <h3 className="text-sm font-semibold uppercase tracking-widest text-primary mb-4">Languages</h3>
                <ul className="space-y-3 text-sm">
                  {languages.map((l) => (
                    <li key={l.name} className="flex justify-between border-b border-border/50 pb-2">
                      <span className="text-muted">{l.name}</span>
                      <span className="text-primary font-medium">{l.level}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          </div>

          {/* Sidebars: Attributes & Certs */}
          <div className="lg:col-span-5 space-y-12">
            
            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className="minimal-card p-6"
            >
              <h3 className="text-sm font-semibold uppercase tracking-widest text-primary mb-5">Attributes & Interests</h3>
              <ul className="space-y-4">
                {attributes.map((attr, i) => (
                  <motion.li 
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ delay: 0.4 + (i * 0.1) }}
                    viewport={{ once: true }}
                    key={i} 
                    className="flex items-start gap-3 text-sm text-muted"
                  >
                    <span className="w-1.5 h-1.5 mt-1.5 rounded-full bg-primary flex-shrink-0"></span>
                    <span className="leading-relaxed">{attr}</span>
                  </motion.li>
                ))}
              </ul>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              viewport={{ once: true }}
              className="minimal-card p-6"
            >
              <h3 className="text-sm font-semibold uppercase tracking-widest text-primary mb-5">Certifications</h3>
              <ul className="space-y-3">
                {certs.map((cert, i) => (
                  <motion.li 
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ delay: 0.6 + (i * 0.05) }}
                    viewport={{ once: true }}
                    key={i} 
                    className="flex items-center gap-3 text-sm text-muted"
                  >
                    <svg className="w-4 h-4 text-primary flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="leading-snug">{cert}</span>
                  </motion.li>
                ))}
              </ul>
            </motion.div>

          </div>

        </div>
      </div>
    </section>
  );
};

export default About;
