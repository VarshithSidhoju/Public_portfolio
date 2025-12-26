import { SectionHeading } from "@/components/ui/SectionHeading";
import { TechBadge } from "@/components/ui/TechBadge";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { ExternalLink, Github, ArrowUpRight } from "lucide-react";
import { useState } from "react";

interface ProjectProps {
  title: string;
  description: string;
  tags: string[];
  links: { demo: string; repo: string };
  details: {
    problem: string;
    solution: string;
    features: string[];
  };
  index: number;
}

function ProjectCard({ title, description, tags, links, details, index }: ProjectProps) {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: index * 0.2 }}
      className="group relative bg-card/50 backdrop-blur-sm border border-white/10 rounded-3xl overflow-hidden hover:border-primary/30 transition-all duration-500"
    >
      <div className="p-8 md:p-12 grid lg:grid-cols-2 gap-12">
        <div className="space-y-6">
          <div className="space-y-2">
            <span className="text-primary font-mono text-sm tracking-wider uppercase">Featured Project {index + 1}</span>
            <h3 className="text-3xl md:text-4xl font-heading font-bold text-foreground group-hover:text-primary transition-colors duration-300">
              {title}
            </h3>
          </div>
          
          <p className="text-lg text-muted-foreground leading-relaxed">
            {description}
          </p>
          
          <div className="flex flex-wrap gap-2">
            {tags.map(tag => (
              <TechBadge key={tag} name={tag} className="border-white/10" />
            ))}
          </div>
          
          <div className="flex gap-4 pt-4">
            <Button variant="default" className="gap-2 rounded-full" asChild>
              <a href={links.demo} target="_blank" rel="noopener noreferrer">
                Live Demo <ExternalLink className="w-4 h-4" />
              </a>
            </Button>
            <Button variant="outline" className="gap-2 rounded-full border-white/10 hover:bg-white/5" asChild>
              <a href={links.repo} target="_blank" rel="noopener noreferrer">
                <Github className="w-4 h-4" /> Code
              </a>
            </Button>
            <Button 
              variant="ghost" 
              className="gap-2 rounded-full hover:text-primary hover:bg-primary/10"
              onClick={() => setIsExpanded(!isExpanded)}
            >
              {isExpanded ? "Less Details" : "Read Case Study"} <ArrowUpRight className={`w-4 h-4 transition-transform ${isExpanded ? "rotate-45" : ""}`} />
            </Button>
          </div>
        </div>

        {/* Abstract Visualization Placeholder - Could be an image or interactive element */}
        <div className="relative h-full min-h-[300px] bg-gradient-to-br from-primary/5 to-secondary/5 rounded-2xl border border-white/5 flex items-center justify-center overflow-hidden">
          <div className="absolute inset-0 bg-grid-white/[0.02] bg-[size:20px_20px]" />
          <div className="text-center p-6 opacity-50 group-hover:opacity-100 transition-opacity">
            <h4 className="text-6xl font-heading font-black text-white/5 select-none">{title.split(" ")[0]}</h4>
          </div>
        </div>
      </div>

      {/* Expanded Details */}
      <motion.div 
        initial={false}
        animate={{ height: isExpanded ? "auto" : 0, opacity: isExpanded ? 1 : 0 }}
        className="overflow-hidden bg-white/[0.02] border-t border-white/5"
      >
        <div className="p-8 md:p-12 grid md:grid-cols-2 gap-12">
          <div>
            <h4 className="text-lg font-heading font-bold mb-4 text-primary">The Challenge</h4>
            <p className="text-muted-foreground leading-relaxed">{details.problem}</p>
          </div>
          <div>
            <h4 className="text-lg font-heading font-bold mb-4 text-secondary">The Solution</h4>
            <p className="text-muted-foreground leading-relaxed mb-6">{details.solution}</p>
            
            <h5 className="text-sm font-heading font-bold mb-3 uppercase tracking-wider text-white">Key Features</h5>
            <ul className="space-y-2">
              {details.features.map((feature, i) => (
                <li key={i} className="flex items-start gap-2 text-sm text-muted-foreground">
                  <span className="text-primary mt-1">▹</span> {feature}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}

export function Projects() {
  const projects = [
    {
      title: "Placement Diary",
      description: "A centralized platform for students to track job applications, interview experiences, and preparation notes. Solves the chaos of scattered placement data.",
      tags: ["React", "Node.js", "Express", "MongoDB", "Redux"],
      links: { demo: "#", repo: "#" },
      details: {
        problem: "Students struggle to organize their placement journey across multiple spreadsheets, notes app, and emails, leading to missed opportunities and lost insights.",
        solution: "Built a full-stack application providing a unified dashboard for tracking applications, documenting interview questions, and analyzing personal performance metrics.",
        features: [
          "Kanban-style application tracking board",
          "Rich text editor for interview experiences",
          "Analytics dashboard for application status",
          "Role-based access (Student/Admin)"
        ]
      }
    },
    {
      title: "EduGenius",
      description: "A smart education platform enhancing learning through structured content and intelligent performance insights.",
      tags: ["Next.js", "TypeScript", "Tailwind", "PostgreSQL", "Prisma"],
      links: { demo: "#", repo: "#" },
      details: {
        problem: "Traditional LMS platforms are often clunky and lack personalized insights for students to improve their weak areas.",
        solution: "Designed a user-centric platform with intuitive navigation and data-driven insights to help students identify knowledge gaps.",
        features: [
          "Interactive course modules",
          "Real-time progress tracking",
          "Performance analytics visualizations",
          "Responsive, mobile-first design"
        ]
      }
    }
  ];

  return (
    <section id="projects" className="py-32 bg-background relative">
      <div className="container mx-auto px-6">
        <SectionHeading title="Selected Works" subtitle="Engineering Case Studies" />
        
        <div className="space-y-20 mt-16">
          {projects.map((project, index) => (
            <ProjectCard key={index} {...project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
