import { SectionHeading } from "@/components/ui/SectionHeading";
import { TechBadge } from "@/components/ui/TechBadge";
import { motion } from "framer-motion";
import { 
  Code2, 
  Layout, 
  Server, 
  Database, 
  Brain, 
  GitBranch 
} from "lucide-react";

export function Skills() {
  const skillGroups = [
    {
      title: "Languages",
      icon: <Code2 className="w-6 h-6 text-primary" />,
      skills: ["Java", "Python", "JavaScript", "TypeScript", "SQL"]
    },
    {
      title: "Frontend",
      icon: <Layout className="w-6 h-6 text-secondary" />,
      skills: ["React", "HTML5", "CSS3", "Tailwind CSS", "Framer Motion", "GSAP"]
    },
    {
      title: "Backend",
      icon: <Server className="w-6 h-6 text-emerald-400" />,
      skills: ["Node.js", "Express", "REST APIs", "System Design"]
    },
    {
      title: "Databases",
      icon: <Database className="w-6 h-6 text-orange-400" />,
      skills: ["MySQL", "MongoDB", "PostgreSQL"]
    },
    {
      title: "Machine Learning",
      icon: <Brain className="w-6 h-6 text-pink-400" />,
      skills: ["CNN", "LSTM", "Python Libraries (Pandas, NumPy)"]
    },
    {
      title: "Tools & DevOps",
      icon: <GitBranch className="w-6 h-6 text-blue-400" />,
      skills: ["Git", "GitHub", "VS Code", "Postman", "Vite"]
    }
  ];

  return (
    <section id="skills" className="py-24 bg-background/50 relative border-t border-white/5">
      <div className="container mx-auto px-6">
        <SectionHeading title="Technical Arsenal" subtitle="Skills & Expertise" align="center" />
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-16">
          {skillGroups.map((group, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-card/50 backdrop-blur-sm border border-white/5 rounded-2xl p-6 hover:border-primary/30 transition-all duration-300 group"
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="p-2.5 bg-background rounded-lg border border-white/5 group-hover:border-primary/20 transition-colors">
                  {group.icon}
                </div>
                <h3 className="text-xl font-heading font-semibold group-hover:text-primary transition-colors">{group.title}</h3>
              </div>
              
              <div className="flex flex-wrap gap-2">
                {group.skills.map((skill) => (
                  <TechBadge key={skill} name={skill} />
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
