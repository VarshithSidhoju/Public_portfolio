import { SectionHeading } from "@/components/ui/SectionHeading";
import { TechBadge } from "@/components/ui/TechBadge";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { ExternalLink, Github, ArrowUpRight } from "lucide-react";
import { useState } from "react";

interface ProjectProps {
  title: string;
  image: string;
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

function ProjectCard({ title, image, description, tags, links, details, index }: ProjectProps) {
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
              {/* <a href={links.demo} target="_blank" rel="noopener noreferrer">
                Live Demo <ExternalLink className="w-4 h-4" />
              </a> */}
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
          <img src={image} alt={title} className="relative z-10 w-full h-full object-cover grayscale opacity-70 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-500"/>
          <div className="absolute inset-0 bg-gradient-to-t from-background/70 to-transparent pointer-events-none" />
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
      title: "Personal Placement Diary",
      image: "/Placement_Diary.png",
      description: "A full-stack web application that helps students manage their entire placement journey in one place — from applications to interview experiences and outcomes.",
      tags: ["React", "Node.js", "Express", "MongoDB Atlas","JavaScript","Tailwind CSS"],
      links: { demo: "#", repo: "https://github.com/VarshithSidhoju/Placement-Backend" },
      details: {
        problem: "Students often rely on scattered spreadsheets, notes apps, and emails to track placements, making it difficult to stay organized, analyze progress, or learn from past interviews.",
        solution: "Designed and built a centralized, full-stack platform that provides a single dashboard to track applications, document interview experiences, and visualize placement progress over time.",
        features: [
          "Kanban-style board to track application status across stages",
          "Rich text editor to record interview questions and experiences",
          "Analytics dashboard to visualize application outcomes",
          "Role-based access for students and administrators"
        ]
      }
    },
    {
      title: "EduGenius AI-Powered Smart Study Companion",
      image: "/Edugenius.png",
      description: "An intelligent education platform focused on structured learning and performance insights to help students identify weak areas and improve effectively.",
      tags: [
        "React",
        "Tailwind CSS",
        "JavaScript",
        "FastAPI",
        "Python",
        "LLMs (OpenAI / Hugging Face)",
        "RAG Architecture"
      ],
      
      links: { demo: "#", repo:"https://github.com/VarshithSidhoju/Mini_Project_final_temp" },
      details: {
        problem: "Traditional learning management systems often provide content delivery but lack meaningful insights that help students understand their learning gaps.",
        solution: "Designed a modern, user-centric education platform that combines structured course content with data-driven performance insights to guide focused learning.",

        features: [
          "Interactive course modules with structured content flow",
          "Real-time progress tracking for learners",
          "Performance analytics and visual insights",
          "Fully responsive, mobile-first user experience"
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
