import { SectionHeading } from "@/components/ui/SectionHeading";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { motion } from "framer-motion";
import { Mail, Linkedin, Github, Send, Phone } from "lucide-react";
import { useForm } from "react-hook-form";
import { useToast } from "@/hooks/use-toast";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";

const formSchema = z.object({
  name: z.string().min(2, "Name is required"),
  email: z.string().email("Invalid email address"),
  message: z.string().min(10, "Message must be at least 10 characters"),
});

export function Contact() {
  const { toast } = useToast();
  
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      message: "",
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values);
    // Simulate API call
    setTimeout(() => {
      toast({
        title: "Message Sent!",
        description: "Thanks for reaching out. I'll get back to you soon.",
      });
      form.reset();
    }, 1000);
  }

  return (
    <section id="contact" className="py-24 bg-background relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/2 pointer-events-none" />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="lg:col-span-2 max-w-4xl">
          <div>
            <SectionHeading title="Get In Touch" subtitle="Let's Connect" />
            
            <p className="text-xl text-muted-foreground leading-relaxed mb-8">
            I’m actively looking for software development opportunities where I can build reliable, scalable, and user-focused applications.

Whether you’re hiring, have a question about my work, or just want to connect, feel free to reach out — I’d be happy to respond.

            </p>
            
            <div className="space-y-6">
              <a href="mailto:varshith0727@gmail.com" className="flex items-center gap-4 text-foreground hover:text-primary transition-colors group">
                <div className="w-12 h-12 rounded-full bg-white/5 border border-white/10 flex items-center justify-center group-hover:border-primary/50 transition-colors">
                  <Mail className="w-5 h-5" />
                </div>
                <span className="text-lg">varshith0727@gmail.com</span>
              </a>
              
              <a href="https://www.linkedin.com/in/nagavarshith-siddoju-398aaa24b/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 text-foreground hover:text-primary transition-colors group">
                <div className="w-12 h-12 rounded-full bg-white/5 border border-white/10 flex items-center justify-center group-hover:border-primary/50 transition-colors">
                  <Linkedin className="w-5 h-5" />
                </div>
                <span className="text-lg">linkedin.com/in/nagavarshith</span>
              </a>
              
              <a href="https://github.com/VarshithSidhoju" target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 text-foreground hover:text-primary transition-colors group">
                <div className="w-12 h-12 rounded-full bg-white/5 border border-white/10 flex items-center justify-center group-hover:border-primary/50 transition-colors">
                  <Github className="w-5 h-5" />
                </div>
                <span className="text-lg">https://github.com/VarshithSidhoju</span>
              </a>

            
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
