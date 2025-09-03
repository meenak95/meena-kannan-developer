
import { motion } from "framer-motion";
import { ChevronDown, Download, Mail, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { createPageUrl } from "@/utils";
import CodeAnimation from "./CodeAnimation";

export default function HeroSection() {
  const scrollToNext = () => {
    window.scrollBy({ top: window.innerHeight, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20">
      {/* Floating Particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-cyan-400 rounded-full opacity-60"
            animate={{
              x: [0, Math.random() * 100 - 50],
              y: [0, Math.random() * -100],
              opacity: [0, 1, 0],
            }}
            transition={{
              duration: 3 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
          />
        ))}
      </div>

      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center">
        {/* Left Content */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center lg:text-left"
        >
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="inline-block px-4 py-2 bg-gradient-to-r from-purple-500/20 to-cyan-500/20 rounded-full border border-purple-500/30 mb-6"
          >
            <span className="text-sm text-cyan-300 font-medium">Available for new opportunities</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="text-4xl lg:text-6xl xl:text-7xl font-bold mb-6 leading-tight"
          >
            <span className="bg-gradient-to-r from-white via-purple-200 to-cyan-200 bg-clip-text text-transparent">
              Full-Stack
            </span>
            <br />
            <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-cyan-400 bg-clip-text text-transparent">
              Java Developer
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.6 }}
            className="text-lg lg:text-xl text-gray-300 mb-8 max-w-2xl leading-relaxed"
          >
            Crafting robust enterprise applications with <span className="text-purple-400 font-semibold">Spring Boot</span>, 
            <span className="text-cyan-400 font-semibold"> React</span>, and modern cloud technologies. 
            Passionate about clean code, scalable architecture, and innovative solutions.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7, duration: 0.6 }}
            className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
          >
            <Button
              asChild
              size="lg"
              className="bg-gradient-to-r from-purple-600 to-cyan-600 hover:from-purple-700 hover:to-cyan-700 text-white font-semibold px-8 py-3 rounded-full transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl"
            >
              <Link to={createPageUrl("Projects")}>
                <ExternalLink className="w-5 h-5 mr-2" />
                View My Work
              </Link>
            </Button>

            <Button
              variant="outline"
              size="lg"
              className="border-purple-500/50 text-purple-300 hover:bg-purple-500/10 hover:border-purple-400 px-8 py-3 rounded-full transition-all duration-300 hover:scale-105"
            >
              <Download className="w-5 h-5 mr-2" />
              Download CV
            </Button>

            <Button
              asChild
              variant="ghost"
              size="lg"
              className="text-cyan-400 hover:text-cyan-300 hover:bg-cyan-500/10 px-8 py-3 rounded-full transition-all duration-300"
            >
              <Link to={createPageUrl("Contact")}>
                <Mail className="w-5 h-5 mr-2" />
                Get In Touch
              </Link>
            </Button>
          </motion.div>

          {/* Tech Stack Pills */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.9, duration: 0.6 }}
            className="flex flex-wrap gap-3 justify-center lg:justify-start mt-10"
          >
            {['Java 17+', 'Spring Boot', 'React', 'PostgreSQL', 'Docker', 'AWS'].map((tech, index) => (
              <motion.div
                key={tech}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 1 + index * 0.1, duration: 0.4 }}
                className="px-3 py-1 bg-white/5 backdrop-blur-sm rounded-full border border-white/10 text-sm text-gray-300 hover:bg-white/10 transition-all duration-300"
              >
                {tech}
              </motion.div>
            ))}
          </motion.div>
        </motion.div>

        {/* Right Content - Code Animation */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative"
        >
          <CodeAnimation />
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 0.6 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <button
          onClick={scrollToNext}
          className="flex flex-col items-center space-y-2 text-gray-400 hover:text-white transition-colors duration-300 group"
        >
          <span className="text-sm font-medium">Scroll to explore</span>
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="group-hover:text-cyan-400 transition-colors duration-300"
          >
            <ChevronDown className="w-6 h-6" />
          </motion.div>
        </button>
      </motion.div>
    </div>
  );
}
