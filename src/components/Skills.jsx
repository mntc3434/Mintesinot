import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  transition: { duration: 0.65, delay, ease: [0.16, 1, 0.3, 1] },
  viewport: { once: true },
});

const categories = [
  {
    id: 'all',
    label: 'All',
  },
  {
    id: 'languages',
    label: 'Languages',
    skills: [
      { name: 'C++', icon: 'https://cdn-icons-png.flaticon.com/512/6132/6132222.png' },
      { name: 'Java', icon: 'https://cdn-icons-png.flaticon.com/512/226/226777.png' },
      { name: 'Dart', icon: 'https://img.icons8.com/?size=100&id=7AFcZ2zirX6Y&format=png&color=000000' },
      { name: 'C#', icon: 'https://cdn-icons-png.flaticon.com/512/6132/6132221.png' },
      { name: 'Python', icon: 'https://cdn-icons-png.flaticon.com/512/5968/5968350.png' },
      { name: 'JavaScript', icon: 'https://cdn-icons-png.flaticon.com/512/5968/5968292.png' },
      { name: 'PHP', icon: 'https://cdn-icons-png.flaticon.com/512/5968/5968332.png' },
      { name: 'C', icon: 'https://cdn-icons-png.flaticon.com/512/3665/3665923.png' },
    ],
  },
  {
    id: 'web',
    label: 'Web & APIs',
    skills: [
      { name: 'HTML', icon: 'https://cdn-icons-png.flaticon.com/512/732/732212.png' },
      { name: 'CSS', icon: 'https://cdn-icons-png.flaticon.com/512/732/732190.png' },
      { name: 'RESTful API', icon: 'https://cdn-icons-png.flaticon.com/512/2165/2165004.png' },
      { name: 'Laravel', icon: 'https://cdn-icons-png.flaticon.com/512/5968/5968332.png' },
      { name: '.NET MVC', icon: 'https://img.icons8.com/?size=100&id=1BC75jFEBED6&format=png&color=000000' },
      { name: 'Entity Framework', icon: 'https://cdn-icons-png.flaticon.com/512/6132/6132221.png' },
    ],
  },
  {
    id: 'mobile',
    label: 'Mobile',
    skills: [
      { name: 'Flutter', icon: 'https://img.icons8.com/?size=100&id=pCvIfmctRaY8&format=png&color=000000' },
    ],
  },
  {
    id: 'databases',
    label: 'Databases',
    skills: [
      { name: 'MySQL', icon: 'https://cdn-icons-png.flaticon.com/512/919/919836.png' },
      { name: 'SQL Server', icon: 'https://cdn-icons-png.flaticon.com/512/4248/4248443.png' },
      { name: 'Firebase', icon: 'https://img.icons8.com/?size=100&id=87330&format=png&color=000000' },
      { name: 'PostgreSQL', icon: 'https://cdn-icons-png.flaticon.com/512/5968/5968342.png' },
    ],
  },
  {
    id: 'ai',
    label: 'AI & ML',
    skills: [
      { name: 'NLP', icon: 'https://cdn-icons-png.flaticon.com/512/1995/1995515.png' },
      { name: 'Machine Learning', icon: 'https://cdn-icons-png.flaticon.com/512/2103/2103633.png' },
      { name: 'AI Integration', icon: 'https://cdn-icons-png.flaticon.com/512/2103/2103633.png' },
    ],
  },
  {
    id: 'tools',
    label: 'Tools',
    skills: [
      { name: 'Git', icon: 'https://cdn-icons-png.flaticon.com/512/4494/4494748.png' },
      { name: 'GitHub', icon: 'https://cdn-icons-png.flaticon.com/512/733/733553.png' },
      { name: 'VS Code', icon: 'https://cdn-icons-png.flaticon.com/512/906/906324.png' },
      { name: 'Visual Studio', icon: 'https://cdn-icons-png.flaticon.com/512/906/906324.png' },
      { name: 'Chapa API', icon: 'https://cdn-icons-png.flaticon.com/512/2489/2489876.png' },
    ],
  },
];

const allSkills = categories.slice(1).flatMap((c) => c.skills.map((s) => ({ ...s, cat: c.id })));

const Skills = () => {
  const [activeTab, setActiveTab] = useState('all');

  const visibleSkills = activeTab === 'all'
    ? allSkills
    : categories.find((c) => c.id === activeTab)?.skills.map((s) => ({ ...s, cat: activeTab })) || [];

  return (
    <section id="skills" className="py-28 relative" style={{ background: 'rgba(13,21,36,0.6)' }}>
      <div className="max-w-6xl mx-auto px-6 relative z-10">
        {/* Heading */}
        <motion.div {...fadeUp(0)} className="mb-12">
          <span className="section-tag">Skills</span>
          <h2 className="text-4xl md:text-5xl font-black tracking-tight mt-2" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>
            Things I{' '}
            <span className="gradient-text">know & use</span>
          </h2>
          <p className="mt-4 text-gray-400 max-w-xl">
            I work across a pretty wide range of tools — here's what I reach for most.
          </p>
        </motion.div>

        {/* Filter tabs */}
        <motion.div {...fadeUp(0.1)} className="flex flex-wrap gap-2 mb-10">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveTab(cat.id)}
              className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${
                activeTab === cat.id
                  ? 'text-white'
                  : 'text-gray-400 bg-white/4 border border-white/7 hover:text-white hover:bg-white/8'
              }`}
              style={
                activeTab === cat.id
                  ? { background: 'linear-gradient(135deg, #4f8ef7, #7c5af6)', border: 'none' }
                  : {}
              }
            >
              {cat.label}
            </button>
          ))}
        </motion.div>

        {/* Skills grid */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.3 }}
            className="flex flex-wrap gap-3"
          >
            {visibleSkills.map((skill, i) => (
              <motion.div
                key={`${skill.name}-${i}`}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: i * 0.03, duration: 0.3 }}
                className="skill-badge"
              >
                <img
                  src={skill.icon}
                  alt={skill.name}
                  className="w-4 h-4 object-contain"
                  loading="lazy"
                  onError={(e) => { e.target.style.display = 'none'; }}
                />
                {skill.name}
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>

        {/* Category cards summary */}
        <motion.div {...fadeUp(0.25)} className="mt-16 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {categories.slice(1).map((cat, i) => (
            <motion.button
              key={cat.id}
              whileHover={{ scale: 1.04, y: -2 }}
              whileTap={{ scale: 0.97 }}
              onClick={() => setActiveTab(cat.id)}
              className={`glass rounded-xl p-4 text-left border transition-all ${
                activeTab === cat.id
                  ? 'border-blue-500/40 bg-blue-500/8'
                  : 'border-white/7 hover:border-white/15'
              }`}
            >
              <p className="text-xs text-gray-400 mb-1 font-medium">{cat.label}</p>
              <p className="text-2xl font-black gradient-text" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>
                {cat.skills.length}
              </p>
              <p className="text-xs text-gray-600">tools</p>
            </motion.button>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;