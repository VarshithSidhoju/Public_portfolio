import { SectionHeading } from "@/components/ui/SectionHeading";
import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Code, Server, Database, Layers } from "lucide-react";

export function About() {
  const cards = [
    {
      icon: <Code className="w-8 h-8 text-primary" />,
      title: "Full-Stack Dev",
      description: "Building end-to-end solutions from responsive UIs to robust APIs."
    },
    {
      icon: <Server className="w-8 h-8 text-secondary" />,
      title: "Backend Logic",
      description: "Designing scalable architectures and optimizing server performance."
    },
    {
      icon: <Database className="w-8 h-8 text-emerald-400" />,
      title: "Data Centric",
      description: "Structured data handling with SQL and NoSQL database integrations."
    },
    {
      icon: <Layers className="w-8 h-8 text-purple-400" />,
      title: "Product Mindset",
      description: "Focused on user experience and real-world problem solving."
    }
  ];

  return (
    <section id="about" className="py-24 bg-background relative">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-16 items-start">
          <div>
            <SectionHeading title="About Me" subtitle="Who I Am" />
            
            <div className="space-y-6 text-lg text-muted-foreground leading-relaxed">
              <motion.p
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
              >
                I'm <span className="text-white font-semibold">Nagavarshith Siddoju</span>, a final year B.Tech CSE student (2026) with a passion for building software that solves real problems.
              </motion.p>
              
              <motion.p
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 }}
              >
                As a Full-Stack Software Developer, I don't just write code—I engineer solutions. I bridge the gap between <span className="text-primary">elegant frontend design</span> and <span className="text-secondary">powerful backend logic</span>.
              </motion.p>
              
              <motion.p
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                Currently focused on mastering distributed systems and cloud architecture while building products that delight users.
              </motion.p>
            </div>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {cards.map((card, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className="bg-white/5 border-white/5 hover:border-primary/50 transition-colors h-full">
                  <CardContent className="p-6 space-y-4">
                    <div className="p-3 bg-white/5 w-fit rounded-lg">
                      {card.icon}
                    </div>
                    <h3 className="text-xl font-heading font-bold">{card.title}</h3>
                    <p className="text-sm text-muted-foreground">{card.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
