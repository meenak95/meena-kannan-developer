import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { ExperienceEntity } from "@/entities/Experience";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Download, MapPin, Calendar, Building, Award } from "lucide-react";
import { format } from "date-fns";

export default function About() {
  const [experiences, setExperiences] = useState<import("@/entities/Experience").Experience[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    loadExperiences();
  }, []);

  const loadExperiences = async () => {
    setIsLoading(true);
    const data = await ExperienceEntity.list("-start_date");
    setExperiences(data);
    setIsLoading(false);
  };

  const calculateDuration = (startDate: string, endDate?: string) => {
    const start = new Date(startDate);
    const end = endDate ? new Date(endDate) : new Date();
    const months = Math.floor((end.getTime() - start.getTime()) / (1000 * 60 * 60 * 24 * 30.44));
    const years = Math.floor(months / 12);
    const remainingMonths = months % 12;
    
    if (years > 0) {
      return remainingMonths > 0 ? `${years}y ${remainingMonths}m` : `${years}y`;
    }
    return `${months}m`;
  };

  return (
    <div className="min-h-screen pt-24 pb-16">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl lg:text-6xl font-bold mb-6">
            <span className="bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
              About Me
            </span>
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Passionate full-stack developer with expertise in Java enterprise development, 
            modern web technologies, and cloud architectures.
          </p>
        </motion.div>

        {/* Bio Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="grid lg:grid-cols-2 gap-12 mb-20"
        >
          {/* Profile Image & Quick Info */}
          <div className="space-y-8">
            <div className="relative">
              <div className="w-80 h-80 mx-auto bg-gradient-to-br from-purple-500 to-cyan-500 rounded-2xl p-1">
                <div className="w-full h-full bg-slate-900 rounded-2xl flex items-center justify-center">
                  <div className="text-6xl">👨‍💻</div>
                </div>
              </div>
              {/* Floating Elements */}
              <div className="absolute -top-4 -right-4 w-16 h-16 bg-gradient-to-r from-purple-500 to-cyan-500 rounded-full opacity-20 blur-xl animate-pulse" />
              <div className="absolute -bottom-4 -left-4 w-20 h-20 bg-gradient-to-r from-cyan-500 to-pink-500 rounded-full opacity-20 blur-xl animate-pulse" />
            </div>

            <Card className="bg-slate-800/40 backdrop-blur-sm border-slate-700/50">
              <CardContent className="p-6">
                <h3 className="text-xl font-bold text-white mb-4">Quick Facts</h3>
                <div className="space-y-3">
                  <div className="flex items-center space-x-3 text-gray-300">
                    <MapPin className="w-5 h-5 text-purple-400" />
                    <span>Singapore</span>
                  </div>
                  <div className="flex items-center space-x-3 text-gray-300">
                    <Award className="w-5 h-5 text-cyan-400" />
                    <span>9+ Years Experience</span>
                  </div>
                  <div className="flex items-center space-x-3 text-gray-300">
                    <Building className="w-5 h-5 text-purple-400" />
                    <span>Enterprise & Government Systems</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Bio Content */}
          <div className="space-y-6">
            <div className="bg-slate-800/40 backdrop-blur-sm rounded-2xl p-8 border border-slate-700/50">
              <h2 className="text-3xl font-bold text-white mb-6">My Story</h2>
              
              <div className="space-y-4 text-gray-300 leading-relaxed">
                <p>
                  I'm a passionate full-stack developer with over 5 years of experience building 
                  robust, scalable applications using modern Java technologies and frameworks. 
                  My journey in software development started with a fascination for solving complex 
                  problems and has evolved into a love for crafting elegant solutions.
                </p>
                
                <p>
                  Specializing in <span className="text-purple-400 font-semibold">Spring Boot</span> 
                  for backend development and <span className="text-cyan-400 font-semibold">React</span> 
                  for frontend experiences, I've had the privilege of working on diverse projects 
                  ranging from enterprise-grade microservices to innovative startup applications.
                </p>
                
                <p>
                  I'm particularly drawn to cloud-native architectures, DevOps practices, and 
                  emerging technologies. When I'm not coding, you'll find me contributing to 
                  open-source projects, mentoring junior developers, or exploring the latest 
                  trends in software architecture.
                </p>
              </div>

              <div className="mt-8 flex flex-col sm:flex-row gap-4">
                <Button asChild className="bg-gradient-to-r from-purple-600 to-cyan-600 hover:from-purple-700 hover:to-cyan-700 text-white">
                  <a href="/resume.txt" download>
                    <Download className="w-4 h-4 mr-2" />
                    Download Resume
                  </a>
                </Button>
                <Button variant="outline" className="border-slate-600 text-gray-300 hover:bg-slate-800">
                  View Certifications
                </Button>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Experience Timeline */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mb-20"
        >
          <h2 className="text-3xl lg:text-4xl font-bold text-center mb-12">
            <span className="bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
              Professional Experience
            </span>
          </h2>

          {isLoading ? (
            <div className="space-y-8">
              {[...Array(3)].map((_, i) => (
                <div key={i} className="bg-slate-800/40 rounded-2xl p-8 border border-slate-700/50 animate-pulse">
                  <div className="h-6 bg-slate-700/50 rounded w-1/3 mb-4" />
                  <div className="h-4 bg-slate-700/50 rounded w-1/4 mb-2" />
                  <div className="h-3 bg-slate-700/50 rounded w-full mb-2" />
                  <div className="h-3 bg-slate-700/50 rounded w-3/4" />
                </div>
              ))}
            </div>
          ) : (
            <div className="relative">
              {/* Timeline Line */}
              <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-purple-500 to-cyan-500 hidden md:block" />

              <div className="space-y-8">
                {experiences.map((experience, index) => (
                  <motion.div
                    key={experience.id}
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="relative"
                  >
                    {/* Timeline Dot */}
                    <div className="absolute left-6 w-4 h-4 bg-gradient-to-r from-purple-500 to-cyan-500 rounded-full hidden md:block" />
                    
                    <Card className="md:ml-16 bg-slate-800/40 backdrop-blur-sm border-slate-700/50 hover:border-purple-500/30 transition-all duration-500">
                      <CardContent className="p-8">
                        <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between mb-4">
                          <div>
                            <h3 className="text-2xl font-bold text-white mb-2">
                              {experience.position}
                            </h3>
                            <div className="flex items-center space-x-2 text-purple-400 mb-2">
                              <Building className="w-4 h-4" />
                              <span className="font-semibold">{experience.company}</span>
                              {experience.location && (
                                <>
                                  <span className="text-gray-500">•</span>
                                  <span className="text-gray-400">{experience.location}</span>
                                </>
                              )}
                            </div>
                            <div className="flex items-center space-x-2 text-gray-400 mb-4">
                              <Calendar className="w-4 h-4" />
                              <span>
                                {format(new Date(experience.start_date), "MMM yyyy")} - 
                                {experience.is_current ? " Present" : format(new Date(experience.end_date!), " MMM yyyy")}
                              </span>
                              <span className="text-gray-500">•</span>
                              <span>{calculateDuration(experience.start_date, experience.end_date)}</span>
                            </div>
                          </div>
                          
                          {experience.is_current && (
                            <Badge className="bg-green-500/20 border-green-500/30 text-green-300">
                              Current
                            </Badge>
                          )}
                        </div>

                        <p className="text-gray-300 mb-6 leading-relaxed">
                          {experience.description}
                        </p>

                        {/* Key Achievements */}
                        {experience.achievements && experience.achievements.length > 0 && (
                          <div className="mb-6">
                            <h4 className="text-white font-semibold mb-3">Key Achievements:</h4>
                            <ul className="space-y-2">
                              {experience.achievements.map((achievement, i) => (
                                <li key={i} className="flex items-start space-x-3 text-gray-300">
                                  <div className="w-2 h-2 bg-cyan-400 rounded-full mt-2 flex-shrink-0" />
                                  <span>{achievement}</span>
                                </li>
                              ))}
                            </ul>
                          </div>
                        )}

                        {/* Technologies */}
                        {experience.technologies && experience.technologies.length > 0 && (
                          <div>
                            <h4 className="text-white font-semibold mb-3">Technologies Used:</h4>
                            <div className="flex flex-wrap gap-2">
                              {experience.technologies.map((tech) => (
                                <Badge
                                  key={tech}
                                  variant="secondary"
                                  className="bg-slate-700/50 text-gray-300"
                                >
                                  {tech}
                                </Badge>
                              ))}
                            </div>
                          </div>
                        )}
                      </CardContent>
                    </Card>
                  </motion.div>
                ))}
              </div>
            </div>
          )}
        </motion.div>
      </div>
    </div>
  );
}
