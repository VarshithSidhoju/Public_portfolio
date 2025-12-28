import { Button } from "@/components/ui/button";
import { ArrowRight, Download, Terminal } from "lucide-react";
import { motion } from "framer-motion";

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center pt-20 overflow-hidden bg-background">
      <div className="container mx-auto px-6 relative z-10 grid md:grid-cols-2 gap-12 items-center">
        <div className="space-y-6">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="flex items-center gap-2 text-primary font-mono text-sm tracking-widest uppercase bg-primary/10 w-fit px-3 py-1 rounded-full border border-primary/20"
          >
            <Terminal size={14} />
            <span>Software Developer</span>
          </motion.div>
          
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-5xl md:text-7xl font-heading font-bold leading-tight"
          >
            Hi, I'm <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-white to-white/50">Nagavarshith</span>
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-xl text-muted-foreground max-w-lg leading-relaxed"
          >
            Building reliable and scalable web applications with <span className="text-white font-medium">frontend craftsmanship</span> and <span className="text-white font-medium">backend logic</span>.
          </motion.p>
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="flex flex-wrap gap-4 pt-4"
          >
            <Button size="lg" className="rounded-full bg-primary text-primary-foreground hover:bg-primary/90 hover:scale-105 transition-all duration-300 font-bold px-8 h-14" asChild>
              <a href="#projects">
                View Projects <ArrowRight className="ml-2 w-5 h-5" />
              </a>
            </Button>
            <Button size="lg" variant="outline" className="rounded-full border-white/10 hover:bg-white/5 hover:text-white font-medium px-8 h-14" asChild>
              <a href="https://drive.google.com/file/d/1RIpk3xoaGJI91bgtkFVRwUCGADOumGjN/view?usp=sharing" target="_blank" rel="noopener noreferrer">
                Download Resume <Download className="ml-2 w-5 h-5" />
              </a>
            </Button>
          </motion.div>
        </div>
        
        <motion.div 
          initial={{ opacity: 0, scale: 0.8, x: 20 }}
          animate={{ opacity: 1, scale: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
          className="relative flex justify-center items-center"
        >
          {/* Subtle Glow Effect */}
          <div className="absolute inset-0 bg-primary/20 rounded-full blur-3xl scale-75 -z-10" />
          
          <motion.div 
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.3 }}
            className="relative w-64 h-64 md:w-80 md:h-80 lg:w-96 lg:h-96 rounded-2xl overflow-hidden border border-white/10 shadow-2xl group"
          >
            {/* Placeholder Image Slot */}
            {/* REPLACE THE SRC BELOW WITH YOUR ACTUAL PROFILE IMAGE PATH */}
            <div className="w-full h-full bg-muted/30 flex items-center justify-center relative">
              <img 
                src="myProfile.png" 
                alt="Nagavarshith Siddoju"
                className="w-full h-full object-cover grayscale opacity-60 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent pointer-events-none" />
            </div>
            
            {/* Border Accent */}
            <div className="absolute inset-0 border border-primary/10 rounded-2xl group-hover:border-primary/30 transition-colors pointer-events-none" />
          </motion.div>
        </motion.div>
      </div>
      
      {/* Scroll Hint */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, y: [0, 10, 0] }}
        transition={{ duration: 2, delay: 1, repeat: Infinity }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 text-muted-foreground"
      >
        <span className="text-xs font-mono uppercase tracking-widest">Scroll</span>
      </motion.div>
    </section>
  );
}
