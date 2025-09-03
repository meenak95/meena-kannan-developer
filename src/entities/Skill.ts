export interface Skill {
  id: string;
  name: string;
  category: 'backend' | 'frontend' | 'database' | 'devops' | 'tools' | 'cloud' | 'framework';
  proficiency: number; // 1-100
  years_experience?: number;
  icon_name?: string;
  color?: string;
  projects_count?: number;
}

export class SkillEntity {
  static async list(): Promise<Skill[]> {
    // Mock data - in a real app, this would fetch from an API
    return [
      // Backend Skills
      { id: '1', name: 'Java', category: 'backend', proficiency: 95, years_experience: 5, color: 'bg-orange-500', projects_count: 15 },
      { id: '2', name: 'Spring Boot', category: 'framework', proficiency: 90, years_experience: 4, color: 'bg-green-500', projects_count: 12 },
      { id: '3', name: 'Spring Security', category: 'framework', proficiency: 85, years_experience: 3, color: 'bg-green-600', projects_count: 8 },
      { id: '4', name: 'JPA/Hibernate', category: 'framework', proficiency: 88, years_experience: 4, color: 'bg-orange-600', projects_count: 10 },
      { id: '5', name: 'Maven/Gradle', category: 'tools', proficiency: 80, years_experience: 4, color: 'bg-blue-500', projects_count: 15 },
      
      // Frontend Skills
      { id: '6', name: 'React', category: 'frontend', proficiency: 88, years_experience: 3, color: 'bg-cyan-500', projects_count: 8 },
      { id: '7', name: 'TypeScript', category: 'frontend', proficiency: 85, years_experience: 2, color: 'bg-blue-600', projects_count: 6 },
      { id: '8', name: 'JavaScript', category: 'frontend', proficiency: 90, years_experience: 4, color: 'bg-yellow-500', projects_count: 12 },
      { id: '9', name: 'HTML/CSS', category: 'frontend', proficiency: 92, years_experience: 5, color: 'bg-orange-400', projects_count: 15 },
      { id: '10', name: 'Tailwind CSS', category: 'frontend', proficiency: 85, years_experience: 2, color: 'bg-teal-500', projects_count: 5 },
      
      // Database Skills
      { id: '11', name: 'PostgreSQL', category: 'database', proficiency: 90, years_experience: 4, color: 'bg-blue-700', projects_count: 10 },
      { id: '12', name: 'MySQL', category: 'database', proficiency: 85, years_experience: 3, color: 'bg-orange-700', projects_count: 8 },
      { id: '13', name: 'MongoDB', category: 'database', proficiency: 80, years_experience: 2, color: 'bg-green-700', projects_count: 4 },
      { id: '14', name: 'Redis', category: 'database', proficiency: 75, years_experience: 2, color: 'bg-red-600', projects_count: 3 },
      { id: '15', name: 'H2', category: 'database', proficiency: 85, years_experience: 3, color: 'bg-indigo-500', projects_count: 6 },
      
      // Cloud & DevOps Skills
      { id: '16', name: 'AWS', category: 'cloud', proficiency: 85, years_experience: 3, color: 'bg-orange-500', projects_count: 8 },
      { id: '17', name: 'Docker', category: 'devops', proficiency: 88, years_experience: 3, color: 'bg-blue-600', projects_count: 10 },
      { id: '18', name: 'Kubernetes', category: 'devops', proficiency: 75, years_experience: 2, color: 'bg-blue-700', projects_count: 4 },
      { id: '19', name: 'Jenkins', category: 'devops', proficiency: 80, years_experience: 2, color: 'bg-gray-600', projects_count: 5 },
      { id: '20', name: 'GitLab CI/CD', category: 'devops', proficiency: 82, years_experience: 2, color: 'bg-orange-600', projects_count: 6 }
    ];
  }

  static async getByCategory(category: string): Promise<Skill[]> {
    const skills = await this.list();
    return skills.filter(skill => skill.category === category);
  }

  static async getById(id: string): Promise<Skill | null> {
    const skills = await this.list();
    return skills.find(skill => skill.id === id) || null;
  }
}
