import { motion } from 'framer-motion';

const Skills = () => {
  const skillCategories = [
    {
      title: "Languages",
      skills: ["C++", "Java", "Dart", "C#", "Python", "JavaScript", "PHP"]
    },
    {
      title: "Web Technologies",
      skills: ["HTML", "CSS", "RESTful API", "Laravel", "Dotnet Core MVC", "Entity Framework"]
    },
    {
      title: "Mobile Application",
      skills: ["Flutter"]
    },
    {
      title: "Databases",
      skills: ["MySQL", "SQL Server", "PostgreSQL", "Firebase"]
    },
    {
      title: "AI & Technologies",
      skills: ["NLP", "Machine Learning", "AI Integration", "n8n", "LangGraph", "LangChain"]
    },
    {
      title: "Tools & Other",
      skills: ["Git & GitHub", "Visual Studio", "VS Code", "Chapa Payment Integration", "Networking", "Hardware Maintenance"]
    }
  ];

  return (
    <section id="skills" className="py-32 border-t border-border bg-surface/30">
      <div className="max-w-6xl mx-auto px-6">
        
        <div className="mb-16">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4 heading-display">Technical Skills</h2>
          <div className="w-12 h-1 bg-primary mb-6"></div>
          <p className="text-muted max-w-2xl text-lg">
            A comprehensive overview of the languages, frameworks, and tools I use to build scalable software and integrate intelligent AI solutions.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category, index) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
              className="minimal-card p-6"
            >
              <h3 className="text-sm font-semibold uppercase tracking-widest text-primary mb-6">{category.title}</h3>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-1.5 text-xs font-medium text-muted bg-border/40 rounded-md border border-border/50 hover:bg-border hover:text-primary transition-colors cursor-default"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Skills;