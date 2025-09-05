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
    // Resume-aligned showcase items
    return [
      {
        id: '1',
        title: 'Vehicle-Related Licensing System 2.0 (VRLS)',
        description: 'Nationwide licensing platform modernization on AWS Gov Cloud with microservices and Angular, delivering high availability, security, and scalability.',
        detailed_description: 'Modernized VRLS to a microservices architecture using Spring Boot and Angular, deployed on AWS Gov Cloud. Implemented CI/CD, observability, and event-driven components with Kafka Streams to support mission-critical services.',
        technologies: ['Spring Boot','Angular','AWS ECS','Kafka','Kafka Streams','Redis','PostgreSQL','Docker','Kubernetes'],
        category: 'enterprise',
        status: 'completed',
        year: 2024,
        client: 'Land Transport Authority (Singapore)',
        duration: 'Ongoing since 2021',
        team_size: 10,
        featured: true
      },
      {
        id: '2',
        title: 'Vehicle-Related Licensing System (VRLS)',
        description: 'Mission-critical system for registration, ownership transfer, tax, permits, and licensing workflows.',
        detailed_description: 'Delivered features and optimizations for legacy VRLS modules using Java and Spring MVC, integrating with Oracle and messaging systems. Ensured stability and compliance for public services.',
        technologies: ['Java','JSP','Spring MVC','Oracle','Kafka','JMS','Redis','REST','WebLogic'],
        category: 'enterprise',
        status: 'completed',
        year: 2023,
        client: 'Land Transport Authority (Singapore)',
        duration: '2021–2023',
        team_size: 12,
        featured: true
      },
      {
        id: '3',
        title: 'Promo Power Solution',
        description: 'Automated retail promotions execution and forecasting platform for CPG efficiency gains.',
        detailed_description: 'Built services to streamline store-level execution, removing manual steps and forecasting sales impact of trade promotions. Event-driven processing and cloud functions for scale.',
        technologies: ['Java','Spring Boot','Groovy','Kafka','AWS Lambda','PostgreSQL'],
        category: 'microservice',
        status: 'completed',
        year: 2021,
        client: 'Retail/CPG',
        duration: '6 months',
        team_size: 6,
        featured: false
      },
      {
        id: '4',
        title: 'Resale One Stop Portal & Lease Buyback',
        description: 'Guided journeys and approval workflows for HDB resale and lease buyback processes.',
        detailed_description: 'Implemented eligibility checks, fee computation and multi-level approvals for public housing resale and buyback processes with intranet portal apps.',
        technologies: ['Java','JSF (PrimeFaces)','JSP','Oracle','SOAP','WebLogic'],
        category: 'web',
        status: 'completed',
        year: 2020,
        client: 'Housing & Development Board (Singapore)',
        duration: '~1.5 years',
        team_size: 8,
        featured: false
      },
      {
        id: '5',
        title: 'Legal View Bill Analyzer',
        description: 'Spring Boot microservice combining AI models with expert workflows to analyze legal billing.',
        detailed_description: 'Built microservice for end-to-end bill review integrating AI insights and legal reviewer inputs, exposing secure REST APIs and CI/CD integrations.',
        technologies: ['Spring Boot','MongoDB','REST','JUnit','Jenkins','Git','SonarQube'],
        category: 'api',
        status: 'completed',
        year: 2019,
        client: 'Wolters Kluwer',
        duration: '1 year',
        team_size: 5,
        featured: false
      },
      {
        id: '6',
        title: 'Intelligent Invoice Conversion',
        description: 'Module integrating AI engine to convert paper invoices to legal e-billing data.',
        detailed_description: 'Integrated Groovy REST services and Drools rule engine to process invoices into standardized legal e-billing formats, improving automation and accuracy.',
        technologies: ['Java','Groovy','Drools','REST','Oracle','JUnit'],
        category: 'api',
        status: 'completed',
        year: 2019,
        client: 'Wolters Kluwer',
        duration: '8 months',
        team_size: 4,
        featured: false
      },
      // Personal / Hobby projects
      {
        id: 'p1',
        title: 'Real-time Chat Application',
        description: 'Scalable chat with WebSocket, presence, and file sharing built with React and Spring.',
        detailed_description: 'Side project exploring reactive programming and real-time UX. Includes typing indicators, presence, and file uploads.',
        technologies: ['Spring WebFlux','WebSocket','MongoDB','React','TypeScript'],
        category: 'web',
        status: 'completed',
        year: 2024,
        featured: true
      },
      {
        id: 'p2',
        title: 'Financial Analytics Dashboard',
        description: 'Data visualization dashboard with real-time market data and reporting.',
        detailed_description: 'Personal project focusing on charting, data aggregation and performance with virtualized lists.',
        technologies: ['React','Chart.js','Spring Boot','MySQL','Kafka'],
        category: 'web',
        status: 'completed',
        year: 2023,
        featured: true
      },
      {
        id: 'p3',
        title: 'Task Management API',
        description: 'REST API with authentication, RBAC and CRUD for tasks and projects.',
        detailed_description: 'Learning project emphasizing API design, OpenAPI docs, testing and CI.',
        technologies: ['Spring Boot','Spring Security','PostgreSQL','JWT','Swagger','JUnit'],
        category: 'api',
        status: 'completed',
        year: 2022,
        featured: true
      },
      {
        id: 'p4',
        title: 'Inventory Management System',
        description: 'Lightweight inventory app with stock tracking and trends.',
        detailed_description: 'Hobby build focusing on component design and animated visuals.',
        technologies: ['Spring Boot','Angular','MySQL'],
        category: 'web',
        status: 'completed',
        year: 2022,
        featured: false
      }
    ];
  }

  static async getById(id: string): Promise<Project | null> {
    const projects = await this.list();
    return projects.find(project => project.id === id) || null;
  }
}
