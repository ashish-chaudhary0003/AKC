import { motion } from "framer-motion";

interface SkillCategoryProps {
  title: string;
  icon: string;
  iconColor: string;
  skills: string[];
  delay: number;
}

function SkillCategory({ title, icon, iconColor, skills, delay }: SkillCategoryProps) {
  return (
    <motion.div 
      className="bg-card rounded-2xl p-8 shadow-lg border border-border"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay }}
      viewport={{ once: true }}
      data-testid={`skills-category-${title.toLowerCase()}`}
    >
      <div className="text-center mb-6">
        <div className={`w-16 h-16 ${iconColor}/10 rounded-2xl flex items-center justify-center mx-auto mb-4`}>
          <i className={`${icon} ${iconColor} text-2xl`}></i>
        </div>
        <h3 className={`text-2xl font-bold ${iconColor}`}>{title}</h3>
      </div>
      <div className="grid grid-cols-2 gap-3">
        {skills.map((skill, index) => (
          <motion.div
            key={skill}
            className="skill-card bg-muted rounded-lg p-3 text-center text-sm font-medium transition-all duration-300 cursor-pointer"
            whileHover={{ y: -4, scale: 1.02 }}
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: delay + (index * 0.1) }}
            viewport={{ once: true }}
            data-testid={`skill-${skill.toLowerCase().replace(/\s+/g, '-')}`}
          >
            {skill}
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
}

export default function SkillsSection() {
  const skillCategories = [
    {
      title: "Leadership",
      icon: "fas fa-users",
      iconColor: "text-primary",
      skills: [
        "Team Management",
        "Strategic Planning", 
        "Project Management",
        "Stakeholder Management",
        "Community Building",
        "Change Management"
      ],
      delay: 0
    },
    {
      title: "Technical", 
      icon: "fas fa-code",
      iconColor: "text-accent",
      skills: [
        "Full-Stack Development",
        "React & Next.js",
        "Node.js & Python", 
        "AI/ML Integration",
        "Cloud Architecture",
        "DevOps"
      ],
      delay: 0.2
    },
    {
      title: "Business",
      icon: "fas fa-chart-line", 
      iconColor: "text-secondary",
      skills: [
        "Digital Transformation",
        "Product Strategy",
        "Client Relations",
        "Business Development", 
        "Process Optimization",
        "Quality Assurance"
      ],
      delay: 0.4
    }
  ];

  return (
    <section id="skills" className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-5xl font-bold text-primary mb-6">Skills & Expertise</h2>
          <p className="text-xl text-muted-foreground">Comprehensive skill set spanning leadership, technology, and business</p>
        </motion.div>
        
        <div className="grid lg:grid-cols-3 gap-12">
          {skillCategories.map((category, index) => (
            <SkillCategory key={category.title} {...category} />
          ))}
        </div>
      </div>
    </section>
  );
}
