import { SectionHeading } from "@/components/ui/SectionHeading";
import { motion } from "framer-motion";
import { Trophy, FileText, Code } from "lucide-react";

export function Achievements() {
  const items = [
    {
      year: "2024",
      title: "Research Paper Published",
      description: "Sign Language Recognition (CNN + RF) - Presented at International Conference on Computing.",
      icon: <FileText className="w-5 h-5" />,
      color: "text-blue-400"
    },
    {
      year: "2023",
      title: "Smart India Hackathon Finalist",
      description: "Built a blockchain-based land registry system prototype.",
      icon: <Code className="w-5 h-5" />,
      color: "text-purple-400"
    },
    {
      year: "2020",
      title: "NTSE State Rank 11",
      description: "Achieved state rank 11 in National Talent Search Examination among 50,000+ candidates.",
      icon: <Trophy className="w-5 h-5" />,
      color: "text-yellow-400"
    }
  ];

  return (
    <section id="achievements" className="py-24 bg-background border-t border-white/5 relative">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <SectionHeading title="Milestones" subtitle="Journey So Far" align="center" />
          
          <div className="mt-16 relative space-y-12">
            {/* Vertical Line */}
            <div className="absolute left-[27px] top-0 bottom-0 w-px bg-gradient-to-b from-primary/50 via-secondary/50 to-transparent md:left-1/2 md:-ml-[0.5px]" />
            
            {items.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className={`relative flex items-center md:justify-between ${index % 2 === 0 ? "md:flex-row-reverse" : ""}`}
              >
                {/* Timeline Dot */}
                <div className="absolute left-0 md:left-1/2 md:-translate-x-1/2 w-14 h-14 rounded-full bg-background border border-white/10 flex items-center justify-center z-10 shadow-[0_0_15px_rgba(0,0,0,0.5)]">
                  <div className={`${item.color}`}>{item.icon}</div>
                </div>
                
                {/* Content */}
                <div className={`ml-20 md:ml-0 md:w-[45%] ${index % 2 === 0 ? "text-left" : "md:text-right"}`}>
                  <span className="text-sm font-mono text-primary mb-2 block">{item.year}</span>
                  <h3 className="text-xl font-heading font-bold mb-2">{item.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">{item.description}</p>
                </div>
                
                {/* Empty side for layout balance */}
                <div className="hidden md:block md:w-[45%]" />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
