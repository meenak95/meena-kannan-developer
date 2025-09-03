import { useState, useEffect, useCallback } from "react";
import { motion } from "framer-motion";
import { ProjectEntity } from "@/entities/Project";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { ExternalLink, Github, Search, Filter } from "lucide-react";
import ProjectVisual from "@/components/ProjectVisual";

export default function Projects() {
  const [projects, setProjects] = useState<import("@/entities/Project").Project[]>([]);
  const [filteredProjects, setFilteredProjects] = useState<import("@/entities/Project").Project[]>([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    loadProjects();
  }, []);

  const filterProjects = useCallback(() => {
    let filtered = projects;

    // Filter by search term
    if (searchTerm) {
      filtered = filtered.filter(project =>
        project.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        project.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
        project.technologies?.some(tech =>
          tech.toLowerCase().includes(searchTerm.toLowerCase())
        )
      );
    }

    // Filter by category
    if (selectedCategory && selectedCategory !== "all") {
      filtered = filtered.filter(project => project.category === selectedCategory);
    }

    setFilteredProjects(filtered);
  }, [projects, searchTerm, selectedCategory]);

  useEffect(() => {
    filterProjects();
  }, [filterProjects]);

  const loadProjects = async () => {
    setIsLoading(true);
    const data = await ProjectEntity.list("-year");
    setProjects(data);
    setIsLoading(false);
  };

  const categories = [
    { value: "all", label: "All Projects" },
    { value: "web", label: "Web Applications" },
    { value: "mobile", label: "Mobile Apps" },
    { value: "api", label: "APIs & Services" },
    { value: "enterprise", label: "Enterprise Solutions" },
    { value: "microservice", label: "Microservices" },
  ];

  return (
    <div className="min-h-screen pt-24 pb-16">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl lg:text-6xl font-bold mb-6">
            <span className="bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
              My Projects
            </span>
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            A collection of projects showcasing full-stack development expertise with Java,
            Spring Boot, React, and modern cloud technologies.
          </p>
        </motion.div>

        {/* Filters */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="bg-slate-800/40 backdrop-blur-sm rounded-2xl p-6 border border-slate-700/50 mb-12"
        >
          <div className="grid md:grid-cols-2 gap-4">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
              <Input
                placeholder="Search projects, technologies..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10 bg-slate-900/50 border-slate-600 text-white placeholder:text-gray-400"
              />
            </div>
            <div className="relative">
              <Filter className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
              <Select value={selectedCategory} onValueChange={setSelectedCategory}>
                <SelectTrigger className="pl-10 bg-slate-900/50 border-slate-600 text-white">
                  <SelectValue placeholder="Filter by category" />
                </SelectTrigger>
                <SelectContent>
                  {categories.map((category) => (
                    <SelectItem key={category.value} value={category.value}>
                      {category.label}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
          </div>
        </motion.div>

        {/* Projects Grid */}
        {isLoading ? (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[...Array(6)].map((_, i) => (
              <div
                key={i}
                className="bg-slate-800/40 rounded-2xl p-6 border border-slate-700/50 animate-pulse"
              >
                <div className="h-48 bg-slate-700/50 rounded-lg mb-4" />
                <div className="h-4 bg-slate-700/50 rounded mb-2" />
                <div className="h-3 bg-slate-700/50 rounded w-3/4" />
              </div>
            ))}
          </div>
        ) : (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -5 }}
                className="group"
              >
                <Card className="bg-slate-800/40 backdrop-blur-sm border-slate-700/50 hover:border-purple-500/30 transition-all duration-500 overflow-hidden">
                  {/* Interactive Project Visual */}
                  <div className="relative overflow-hidden">
                    <ProjectVisual 
                      projectTitle={project.title}
                      className="h-48 w-full"
                    />
                    
                    {/* Hover Actions */}
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
                        {project.demo_url && (
                          <Button size="sm" className="bg-purple-600 hover:bg-purple-700">
                            <ExternalLink className="w-4 h-4" />
                          </Button>
                        )}
                        {project.github_url && (
                          <Button size="sm" variant="outline" className="border-white/20 text-white hover:bg-white/10">
                            <Github className="w-4 h-4" />
                          </Button>
                        )}
                      </div>
                    </div>

                    {/* Featured Badge */}
                    {project.featured && (
                      <div className="absolute top-4 right-4">
                        <Badge className="bg-gradient-to-r from-purple-600 to-cyan-600 text-white">
                          Featured
                        </Badge>
                      </div>
                    )}
                  </div>

                  <CardContent className="p-6">
                    <div className="space-y-4">
                      {/* Category & Year */}
                      <div className="flex items-center justify-between">
                        <Badge variant="outline" className="bg-slate-700/50 border-slate-600 text-gray-300">
                          {project.category?.charAt(0).toUpperCase() + project.category?.slice(1)}
                        </Badge>
                        {project.year && (
                          <span className="text-sm text-gray-400">{project.year}</span>
                        )}
                      </div>

                      {/* Title & Description */}
                      <div>
                        <h3 className="text-xl font-bold text-white mb-2 group-hover:text-purple-300 transition-colors duration-300">
                          {project.title}
                        </h3>
                        <p className="text-gray-400 text-sm line-clamp-2">
                          {project.description}
                        </p>
                      </div>

                      {/* Technologies */}
                      <div className="flex flex-wrap gap-2">
                        {project.technologies?.slice(0, 3).map((tech) => (
                          <Badge
                            key={tech}
                            variant="secondary"
                            className="bg-slate-700/50 text-gray-300 text-xs"
                          >
                            {tech}
                          </Badge>
                        ))}
                        {project.technologies?.length > 3 && (
                          <Badge variant="secondary" className="bg-slate-700/50 text-gray-300 text-xs">
                            +{project.technologies.length - 3}
                          </Badge>
                        )}
                      </div>

                      {/* Project Stats */}
                      <div className="flex items-center justify-between text-xs text-gray-500 pt-2 border-t border-slate-700/50">
                        {project.client && (
                          <span>Client: {project.client}</span>
                        )}
                        {project.duration && (
                          <span>{project.duration}</span>
                        )}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        )}

        {/* No Results */}
        {!isLoading && filteredProjects.length === 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-16"
          >
            <div className="w-24 h-24 bg-slate-800 rounded-full flex items-center justify-center mx-auto mb-6">
              <Search className="w-12 h-12 text-gray-500" />
            </div>
            <h3 className="text-2xl font-bold text-white mb-2">No projects found</h3>
            <p className="text-gray-400 mb-6">
              Try adjusting your search terms or filters
            </p>
            <Button
              onClick={() => {
                setSearchTerm("");
                setSelectedCategory("all");
              }}
              variant="outline"
              className="border-purple-500/50 text-purple-300 hover:bg-purple-500/10"
            >
              Clear Filters
            </Button>
          </motion.div>
        )}
      </div>
    </div>
  );
}
