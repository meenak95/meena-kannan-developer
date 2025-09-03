export interface Project {
  id: string;
  title: string;
  description: string;
  detailed_description?: string;
  technologies: string[];
  category: 'web' | 'mobile' | 'desktop' | 'api' | 'microservice' | 'enterprise';
  status: 'completed' | 'in_progress' | 'planned';
  image_url?: string;
  demo_url?: string;
  github_url?: string;
  year?: number;
  client?: string;
  duration?: string;
  team_size?: number;
  featured?: boolean;
}

export class ProjectEntity {
  static async list(_sortBy: string = '-year'): Promise<Project[]> {
    // Mock data - in a real app, this would fetch from an API
    return [
      {
        id: '1',
        title: 'E-Commerce Microservices Platform',
        description: 'Enterprise-grade e-commerce platform built with Spring Boot microservices, featuring user management, product catalog, order processing, and payment integration.',
        detailed_description: 'A comprehensive e-commerce solution built using microservices architecture. The platform includes separate services for user management, product catalog, order processing, payment handling, and notification systems. Built with Spring Boot, Spring Security, and deployed on AWS with Docker containers.',
        technologies: ['Spring Boot', 'React', 'PostgreSQL', 'Docker', 'AWS', 'Redis', 'Spring Security', 'JWT'],
        category: 'enterprise',
        status: 'completed',
        demo_url: 'https://demo-ecommerce.com',
        github_url: 'https://github.com/username/ecommerce-platform',
        year: 2024,
        client: 'TechCorp Inc.',
        duration: '6 months',
        team_size: 5,
        featured: true
      },
      {
        id: '2',
        title: 'Real-time Chat Application',
        description: 'Scalable chat application with WebSocket support, real-time messaging, file sharing, and user presence indicators built with Spring WebFlux.',
        detailed_description: 'A modern real-time chat application supporting multiple chat rooms, file sharing, emoji reactions, and user presence indicators. Built with Spring WebFlux for reactive programming and MongoDB for data storage.',
        technologies: ['Spring WebFlux', 'WebSocket', 'MongoDB', 'React', 'TypeScript', 'Socket.io'],
        category: 'web',
        status: 'completed',
        demo_url: 'https://chat-demo.com',
        github_url: 'https://github.com/username/chat-app',
        year: 2023,
        duration: '3 months',
        team_size: 3,
        featured: true
      },
      {
        id: '3',
        title: 'Financial Analytics Dashboard',
        description: 'Comprehensive financial analytics platform with data visualization, reporting, and real-time market data integration using Spring Boot and React.',
        detailed_description: 'A sophisticated financial analytics platform that provides real-time market data analysis, portfolio tracking, and comprehensive reporting features. Integrates with multiple financial APIs and provides advanced charting capabilities.',
        technologies: ['Spring Boot', 'React', 'Chart.js', 'MySQL', 'Apache Kafka', 'Spring Data JPA'],
        category: 'api',
        status: 'completed',
        demo_url: 'https://finance-dashboard.com',
        github_url: 'https://github.com/username/finance-dashboard',
        year: 2023,
        client: 'FinanceCorp',
        duration: '4 months',
        team_size: 4,
        featured: true
      },
      {
        id: '4',
        title: 'Task Management API',
        description: 'RESTful API for task management with user authentication, project organization, and team collaboration features.',
        detailed_description: 'A comprehensive task management API built with Spring Boot that supports user authentication, project management, task assignment, and team collaboration. Features include role-based access control, file attachments, and real-time notifications.',
        technologies: ['Spring Boot', 'Spring Security', 'PostgreSQL', 'JWT', 'Swagger', 'JUnit'],
        category: 'api',
        status: 'completed',
        github_url: 'https://github.com/username/task-api',
        year: 2022,
        duration: '2 months',
        team_size: 2,
        featured: false
      },
      {
        id: '5',
        title: 'Inventory Management System',
        description: 'Enterprise inventory management system with real-time tracking, automated reordering, and comprehensive reporting.',
        detailed_description: 'A full-featured inventory management system designed for enterprise use. Includes real-time inventory tracking, automated reorder points, supplier management, and comprehensive reporting with data export capabilities.',
        technologies: ['Spring Boot', 'Angular', 'MySQL', 'Spring Data JPA', 'Apache POI', 'Quartz Scheduler'],
        category: 'enterprise',
        status: 'completed',
        demo_url: 'https://inventory-demo.com',
        github_url: 'https://github.com/username/inventory-system',
        year: 2022,
        client: 'RetailCorp',
        duration: '8 months',
        team_size: 6,
        featured: false
      },
      {
        id: '6',
        title: 'Mobile Banking App Backend',
        description: 'Secure backend API for mobile banking application with transaction processing, account management, and fraud detection.',
        detailed_description: 'A highly secure backend system for mobile banking applications. Features include encrypted transaction processing, multi-factor authentication, fraud detection algorithms, and compliance with banking regulations.',
        technologies: ['Spring Boot', 'Spring Security', 'PostgreSQL', 'Redis', 'Apache Kafka', 'Docker'],
        category: 'api',
        status: 'in_progress',
        github_url: 'https://github.com/username/banking-backend',
        year: 2024,
        client: 'BankCorp',
        duration: '12 months',
        team_size: 8,
        featured: false
      }
    ];
  }

  static async getById(id: string): Promise<Project | null> {
    const projects = await this.list();
    return projects.find(project => project.id === id) || null;
  }
}
