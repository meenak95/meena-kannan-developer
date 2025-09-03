
import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";

const skillCategories = [
  {
    name: "Backend Development",
    icon: "🔧",
    skills: [
      { name: "Java", level: 95, color: "bg-orange-500" },
      { name: "Spring Boot", level: 90, color: "bg-green-500" },
      { name: "Spring Security", level: 85, color: "bg-green-600" },
      { name: "JPA/Hibernate", level: 88, color: "bg-orange-600" },
      { name: "Maven/Gradle", level: 80, color: "bg-blue-500" },
    ]
  },
  {
    name: "Frontend Development",
    icon: "🎨",
    skills: [
      { name: "React", level: 88, color: "bg-cyan-500" },
      { name: "TypeScript", level: 85, color: "bg-blue-600" },
      { name: "JavaScript", level: 90, color: "bg-yellow-500" },
      { name: "HTML/CSS", level: 92, color: "bg-orange-400" },
      { name: "Tailwind CSS", level: 85, color: "bg-teal-500" },
    ]
  },
  {
    name: "Database & Storage",
    icon: "🗄️",
    skills: [
      { name: "PostgreSQL", level: 90, color: "bg-blue-700" },
      { name: "MySQL", level: 85, color: "bg-orange-700" },
      { name: "MongoDB", level: 80, color: "bg-green-700" },
      { name: "Redis", level: 75, color: "bg-red-600" },
      { name: "H2", level: 85, color: "bg-indigo-500" },
    ]
  },
  {
    name: "Cloud & DevOps",
    icon: "☁️",
    skills: [
      { name: "AWS", level: 85, color: "bg-orange-500" },
      { name: "Docker", level: 88, color: "bg-blue-600" },
      { name: "Kubernetes", level: 75, color: "bg-blue-700" },
      { name: "Jenkins", level: 80, color: "bg-gray-600" },
      { name: "GitLab CI/CD", level: 82, color: "bg-orange-600" },
    ]
  },
];

export default function SkillsShowcase() {
  return (
    <section className="py-20 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-r from-purple-900/20 to-cyan-900/20"></div>
      
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
              Technical Skills
            </span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Expertise across the full stack with a focus on Java enterprise development
            and modern web technologies
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.name}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: categoryIndex * 0.2 }}
              viewport={{ once: true }}
              className="bg-slate-800/40 backdrop-blur-sm rounded-2xl p-8 border border-slate-700/50 hover:border-purple-500/30 transition-all duration-500 group"
            >
              <div className="flex items-center space-x-3 mb-8">
                <div className="text-3xl">{category.icon}</div>
                <h3 className="text-2xl font-bold text-white group-hover:text-purple-300 transition-colors duration-300">
                  {category.name}
                </h3>
              </div>

              <div className="space-y-6">
                {category.skills.map((skill, skillIndex) => (
                  <motion.div
                    key={skill.name}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ 
                      duration: 0.6, 
                      delay: categoryIndex * 0.2 + skillIndex * 0.1 
                    }}
                    viewport={{ once: true }}
                    className="space-y-3"
                  >
                    <div className="flex justify-between items-center">
                      <span className="text-white font-medium">{skill.name}</span>
                      <Badge variant="secondary" className="bg-slate-700/50 text-gray-300">
                        {skill.level}%
                      </Badge>
                    </div>
                    
                    <div className="relative">
                      <div className="h-2 bg-slate-700 rounded-full overflow-hidden">
                        <motion.div
                          initial={{ width: 0 }}
                          whileInView={{ width: `${skill.level}%` }}
                          transition={{ 
                            duration: 1.2, 
                            delay: categoryIndex * 0.2 + skillIndex * 0.1 + 0.3,
                            ease: "easeOut"
                          }}
                          viewport={{ once: true }}
                          className={`h-full ${skill.color} relative`}
                        >
                          <div className="absolute inset-0 bg-gradient-to-r from-transparent to-white/20"></div>
                        </motion.div>
                      </div>
                      
                      {/* Glowing effect */}
                      <motion.div
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: [0, 1, 0] }}
                        transition={{ 
                          duration: 2, 
                          delay: categoryIndex * 0.2 + skillIndex * 0.1 + 0.5,
                          repeat: 1
                        }}
                        viewport={{ once: true }}
                        className={`absolute inset-0 h-2 ${skill.color} opacity-50 blur-sm rounded-full`}
                        style={{ width: `${skill.level}%` }}
                      />
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Additional Skills Tags */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <h3 className="text-2xl font-bold text-white mb-8">
            Additional Technologies & Tools
          </h3>
          <div className="flex flex-wrap justify-center gap-3">
            {[
              'Microservices', 'REST APIs', 'GraphQL', 'JUnit', 'Mockito', 
              'Git', 'JIRA', 'Agile/Scrum', 'Linux', 'IntelliJ IDEA',
              'Postman', 'SonarQube', 'Kafka', 'RabbitMQ', 'Swagger'
            ].map((tech, index) => (
              <motion.div
                key={tech}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                viewport={{ once: true }}
                className="px-4 py-2 bg-gradient-to-r from-purple-600/20 to-cyan-600/20 rounded-full border border-purple-500/30 text-gray-200 text-sm hover:bg-gradient-to-r hover:from-purple-600/30 hover:to-cyan-600/30 transition-all duration-300 cursor-default"
              >
                {tech}
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
