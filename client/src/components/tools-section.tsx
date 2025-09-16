import { motion } from "framer-motion";

interface ToolProps {
  name: string;
  icon: string;
  color: string;
  delay: number;
}

function Tool({ name, icon, color, delay }: ToolProps) {
  return (
    <motion.div 
      className="bg-card rounded-xl p-6 text-center shadow-lg border border-border hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
      initial={{ opacity: 0, y: 20, scale: 0.9 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ duration: 0.4, delay }}
      viewport={{ once: true }}
      whileHover={{ scale: 1.05 }}
      data-testid={`tool-${name.toLowerCase().replace(/\./g, '')}`}
    >
      <i className={`${icon} text-4xl ${color} mb-3`}></i>
      <div className="font-semibold text-sm">{name}</div>
    </motion.div>
  );
}

export default function ToolsSection() {
  const tools = [
    { name: "React", icon: "fab fa-react", color: "text-blue-500", delay: 0 },
    { name: "TypeScript", icon: "fab fa-js", color: "text-blue-600", delay: 0.05 },
    { name: "Next.js", icon: "fab fa-js", color: "text-black", delay: 0.1 },
    { name: "Node.js", icon: "fab fa-node-js", color: "text-green-500", delay: 0.15 },
    { name: "Python", icon: "fab fa-python", color: "text-yellow-500", delay: 0.2 },
    { name: "PostgreSQL", icon: "fas fa-database", color: "text-blue-700", delay: 0.25 },
    { name: "MongoDB", icon: "fas fa-leaf", color: "text-green-600", delay: 0.3 },
    { name: "Docker", icon: "fab fa-docker", color: "text-blue-500", delay: 0.35 },
    { name: "AWS", icon: "fab fa-aws", color: "text-orange-500", delay: 0.4 },
    { name: "Git", icon: "fab fa-git-alt", color: "text-red-500", delay: 0.45 },
    { name: "Figma", icon: "fab fa-figma", color: "text-purple-500", delay: 0.5 },
    { name: "Photoshop", icon: "fas fa-image", color: "text-blue-700", delay: 0.55 },
    { name: "Premiere Pro", icon: "fas fa-video", color: "text-red-600", delay: 0.6 },
    { name: "VS Code", icon: "fas fa-code", color: "text-blue-500", delay: 0.65 },
    { name: "Tailwind", icon: "fab fa-css3-alt", color: "text-cyan-500", delay: 0.7 }
  ];

  return (
    <section className="py-20 bg-muted">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl font-bold text-primary mb-6">Preferred Tools</h2>
          <p className="text-xl text-muted-foreground">Technologies and tools I work with daily</p>
        </motion.div>
        
        <div className="relative overflow-hidden">
          <motion.div 
            className="flex gap-6"
            animate={{ x: [0, -100, 0] }}
            transition={{ 
              duration: 20, 
              repeat: Infinity, 
              ease: "linear" 
            }}
          >
            {[...tools, ...tools].map((tool, index) => (
              <Tool key={`${tool.name}-${index}`} {...tool} />
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
