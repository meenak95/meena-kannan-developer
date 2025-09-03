
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Github, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { createPageUrl } from "@/utils";
import ProjectVisual from "../ProjectVisual";

const featuredProjects = [
  {
    title: "E-Commerce Microservices Platform",
    description: "Enterprise-grade e-commerce platform built with Spring Boot microservices, featuring user management, product catalog, order processing, and payment integration.",
    technologies: ["Spring Boot", "React", "PostgreSQL", "Docker", "AWS", "Redis"],
    category: "enterprise",
    liveUrl: "#",
    githubUrl: "#",
    featured: true
  },
  {
    title: "Real-time Chat Application",
    description: "Scalable chat application with WebSocket support, real-time messaging, file sharing, and user presence indicators built with Spring WebFlux.",
    technologies: ["Spring WebFlux", "WebSocket", "MongoDB", "React", "TypeScript"],
    category: "web",
    liveUrl: "#",
    githubUrl: "#",
    featured: true
  },
  {
    title: "Financial Analytics Dashboard",
    description: "Comprehensive financial analytics platform with data visualization, reporting, and real-time market data integration using Spring Boot and React.",
    technologies: ["Spring Boot", "React", "Chart.js", "MySQL", "Apache Kafka"],
    category: "api",
    liveUrl: "#",
    githubUrl: "#",
    featured: true
  }
];

export default function FeaturedProjects() {
  return (
    <section className="py-20 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-b from-slate-900/50 to-purple-900/20"></div>
      
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            <span className="bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
              Featured Projects
            </span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Showcasing innovative solutions built with modern Java technologies and best practices
          </p>
        </motion.div>

        <div className="grid gap-8 lg:gap-12">
          {featuredProjects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true }}
              className={`grid lg:grid-cols-2 gap-8 items-center ${
                index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''
              }`}
            >
              {/* Interactive Project Visual */}
              <motion.div
                className={`relative group ${index % 2 === 1 ? 'lg:col-start-2' : ''}`}
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
              >
                <div className="relative overflow-hidden rounded-2xl border border-slate-700/50 hover:border-purple-500/30 transition-all duration-500">
                  <ProjectVisual 
                    projectTitle={project.title} 
                    className="h-64 lg:h-80 w-full"
                  />
                  
                  {/* Hover Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/90 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 flex space-x-4">
                      <Button
                        size="sm"
                        className="bg-purple-600 hover:bg-purple-700 text-white"
                      >
                        <ExternalLink className="w-4 h-4 mr-2" />
                        Live Demo
                      </Button>
                      <Button
                        size="sm"
                        variant="outline"
                        className="border-white/20 text-white hover:bg-white/10"
                      >
                        <Github className="w-4 h-4 mr-2" />
                        Source
                      </Button>
                    </div>
                  </div>
                </div>

                {/* Floating Elements */}
                <div className="absolute -top-4 -right-4 w-16 h-16 bg-gradient-to-r from-purple-500 to-cyan-500 rounded-full opacity-20 blur-xl group-hover:opacity-40 transition-opacity duration-500" />
                <div className="absolute -bottom-4 -left-4 w-20 h-20 bg-gradient-to-r from-cyan-500 to-pink-500 rounded-full opacity-20 blur-xl group-hover:opacity-40 transition-opacity duration-500" />
              </motion.div>

              {/* Project Content */}
              <motion.div
                className={`space-y-6 ${index % 2 === 1 ? 'lg:col-start-1' : ''}`}
                initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                viewport={{ once: true }}
              >
                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <Badge variant="outline" className="bg-purple-500/20 border-purple-500/30 text-purple-300">
                      {project.category.charAt(0).toUpperCase() + project.category.slice(1)}
                    </Badge>
                    <div className="w-2 h-2 bg-cyan-400 rounded-full animate-pulse" />
                  </div>
                  
                  <h3 className="text-2xl lg:text-3xl font-bold text-white group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-purple-400 group-hover:to-cyan-400 group-hover:bg-clip-text transition-all duration-300">
                    {project.title}
                  </h3>
                </div>

                <p className="text-gray-300 text-lg leading-relaxed">
                  {project.description}
                </p>

                {/* Technologies */}
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech) => (
                    <Badge
                      key={tech}
                      variant="secondary"
                      className="bg-slate-800/50 text-gray-300 hover:bg-slate-700/50 transition-colors duration-200"
                    >
                      {tech}
                    </Badge>
                  ))}
                </div>

                {/* Action Buttons */}
                <div className="flex flex-col sm:flex-row gap-4 pt-4">
                  <Button
                    className="bg-gradient-to-r from-purple-600 to-cyan-600 hover:from-purple-700 hover:to-cyan-700 text-white group"
                  >
                    <ExternalLink className="w-4 h-4 mr-2 group-hover:rotate-12 transition-transform duration-200" />
                    View Project
                  </Button>
                  <Button
                    variant="outline"
                    className="border-slate-600 text-gray-300 hover:bg-slate-800"
                  >
                    <Github className="w-4 h-4 mr-2" />
                    Source Code
                  </Button>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>

        {/* View All Projects Button */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <Button
            asChild
            size="lg"
            className="bg-gradient-to-r from-purple-600 to-cyan-600 hover:from-purple-700 hover:to-cyan-700 text-white px-8 py-3 rounded-full group"
          >
            <Link to={createPageUrl("Projects")}>
              View All Projects
              <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform duration-200" />
            </Link>
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
