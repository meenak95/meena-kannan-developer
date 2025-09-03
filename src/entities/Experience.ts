export interface Experience {
  id: string;
  position: string;
  company: string;
  location?: string;
  start_date: string;
  end_date?: string;
  is_current: boolean;
  description: string;
  achievements?: string[];
  technologies?: string[];
  company_logo?: string;
}

export class ExperienceEntity {
  static async list(_sortBy: string = '-start_date'): Promise<Experience[]> {
    // Mock data - in a real app, this would fetch from an API
    return [
      {
        id: '1',
        position: 'Senior Full-Stack Java Developer',
        company: 'TechCorp Solutions',
        location: 'San Francisco, CA',
        start_date: '2022-01-15',
        is_current: true,
        description: 'Leading development of enterprise-grade applications using Java, Spring Boot, and modern web technologies. Responsible for architecting scalable microservices and mentoring junior developers.',
        achievements: [
          'Led development of a microservices-based e-commerce platform serving 100K+ users',
          'Improved application performance by 40% through code optimization and caching strategies',
          'Mentored 3 junior developers and established best practices for code quality',
          'Implemented CI/CD pipelines reducing deployment time by 60%',
          'Designed and implemented security measures achieving SOC 2 compliance'
        ],
        technologies: ['Java 17+', 'Spring Boot', 'Spring Security', 'React', 'PostgreSQL', 'Docker', 'AWS', 'Kubernetes']
      },
      {
        id: '2',
        position: 'Full-Stack Java Developer',
        company: 'InnovateTech Inc.',
        location: 'Austin, TX',
        start_date: '2020-03-01',
        end_date: '2021-12-31',
        is_current: false,
        description: 'Developed and maintained web applications using Java Spring framework and modern frontend technologies. Collaborated with cross-functional teams to deliver high-quality software solutions.',
        achievements: [
          'Built RESTful APIs handling 1M+ requests per day',
          'Developed responsive web applications using React and TypeScript',
          'Implemented automated testing increasing code coverage to 85%',
          'Optimized database queries reducing response time by 30%',
          'Collaborated with DevOps team to implement containerization'
        ],
        technologies: ['Java 11', 'Spring Boot', 'Spring MVC', 'React', 'TypeScript', 'MySQL', 'Docker', 'Jenkins']
      },
      {
        id: '3',
        position: 'Java Developer',
        company: 'StartupXYZ',
        location: 'Seattle, WA',
        start_date: '2019-06-01',
        end_date: '2020-02-28',
        is_current: false,
        description: 'Developed backend services and APIs for a fast-growing startup. Worked closely with product managers and designers to implement new features and improve existing functionality.',
        achievements: [
          'Developed core backend services from scratch using Spring Boot',
          'Implemented real-time features using WebSocket technology',
          'Built data processing pipelines handling large datasets',
          'Participated in agile development processes and sprint planning',
          'Contributed to open-source projects and technical documentation'
        ],
        technologies: ['Java 8', 'Spring Boot', 'Spring Data JPA', 'PostgreSQL', 'Redis', 'Git', 'Maven']
      },
      {
        id: '4',
        position: 'Junior Java Developer',
        company: 'Enterprise Solutions Ltd.',
        location: 'Chicago, IL',
        start_date: '2018-08-01',
        end_date: '2019-05-31',
        is_current: false,
        description: 'Started career as a junior developer working on enterprise applications. Gained experience in Java development, database design, and software engineering best practices.',
        achievements: [
          'Developed and maintained legacy Java applications',
          'Learned enterprise development patterns and practices',
          'Participated in code reviews and team collaboration',
          'Contributed to bug fixes and feature enhancements',
          'Completed training in Spring framework and modern Java features'
        ],
        technologies: ['Java 8', 'Spring Framework', 'Oracle Database', 'JSP', 'Servlets', 'Maven', 'SVN']
      }
    ];
  }

  static async getById(id: string): Promise<Experience | null> {
    const experiences = await this.list();
    return experiences.find(experience => experience.id === id) || null;
  }
}
