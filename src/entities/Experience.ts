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
    // Resume-based data
    return [
      {
        id: '1',
        position: 'Lead Software Engineer',
        company: 'NCS',
        location: 'Singapore',
        start_date: '2021-12-01',
        is_current: true,
        description: 'Leading backend enhancements and maintenance for critical nationwide licensing systems. Responsible for impact analysis, design, development, deployment, and production support with quick turnaround, while mentoring junior developers and coordinating stakeholders.',
        achievements: [
          'Modernized VRLS 2.0 on AWS Gov Cloud with microservices (Spring Boot) and Angular',
          'Implemented CI/CD with Jenkins and GitHub Actions; improved delivery reliability',
          'Enhanced system observability using Prometheus, Grafana, Dynatrace and ELK',
          'Resolved critical production incidents with minimal downtime',
          'Conducted code reviews and guided junior developers on best practices'
        ],
        technologies: [
          'Spring Boot','Angular 13','AWS (ECS, S3, IAM)','Redis','Kafka','Kafka Streams','PostgreSQL','Docker','Kubernetes','Jenkins','GitHub Actions','Prometheus','Grafana','Dynatrace','JUnit','Mockito','ELK'
        ]
      },
      {
        id: '2',
        position: 'Application Consultant',
        company: 'NCS',
        location: 'Singapore',
        start_date: '2021-12-01',
        end_date: '2023-12-31',
        is_current: false,
        description: 'Contributed to the mission-critical Vehicle-Related Licensing System (VRLS) for LTA, covering registration, ownership, tax, permits, and licensing workflows.',
        achievements: [
          'Delivered features across core VRLS modules with rigorous SDLC governance',
          'Improved performance and stability across legacy services',
          'Collaborated closely with QA and stakeholders in UAT and go-live'
        ],
        technologies: [
          'Java','JSP','Spring MVC','Oracle DB','Apache Kafka','JMS','Redis','REST APIs','WebLogic','JUnit','Fortify','Jira'
        ]
      },
      {
        id: '3',
        position: 'Senior Software Engineer',
        company: 'BlackStraw.AI',
        location: 'India',
        start_date: '2021-05-01',
        end_date: '2021-11-30',
        is_current: false,
        description: 'Built the Promo Power solution to automate store-level execution and forecast sales impact for CPG trade promotions.',
        achievements: [
          'Developed scalable microservices and event pipelines for promotions data',
          'Increased efficiency by automating manual retail workflows'
        ],
        technologies: [
          'Java','Spring Boot','Groovy','Kafka','AWS Lambda','PostgreSQL','REST APIs','Git','Jenkins','JUnit','SonarQube'
        ]
      },
      {
        id: '4',
        position: 'Software Engineer',
        company: 'HDB (via AllTech Systems)',
        location: 'Singapore',
        start_date: '2019-08-01',
        end_date: '2020-12-31',
        is_current: false,
        description: 'Delivered Resale One Stop Portal and Lease Buyback intranet systems, enabling guided resale journeys and multi-level approval workflows.',
        achievements: [
          'Implemented eligibility checks, fee computations and approval workflows',
          'Improved UX for buyer/seller guided journeys'
        ],
        technologies: [
          'Java','JSF (PrimeFaces)','JSP','Oracle DB','WebLogic','JUnit','SVN','SOAP'
        ]
      },
      {
        id: '5',
        position: 'Software Engineer',
        company: 'Wolters Kluwer',
        location: 'India',
        start_date: '2018-07-01',
        end_date: '2019-07-31',
        is_current: false,
        description: 'Built legal tech services including bill analysis and intelligent invoice conversion leveraging AI workflows and rule engines.',
        achievements: [
          'Developed Spring Boot microservice for Legal View Bill Analyzer',
          'Integrated AI engine with Groovy and Drools for invoice conversion'
        ],
        technologies: [
          'Spring Boot','MongoDB','REST APIs','JUnit','Jenkins','Git','SonarQube','Groovy','Drools','Oracle'
        ]
      },
      {
        id: '6',
        position: 'Associate Software Engineer',
        company: 'SysArc Infomatix',
        location: 'India',
        start_date: '2016-05-01',
        end_date: '2018-07-31',
        is_current: false,
        description: 'Built banking lending automation (LAPS) covering risk analysis, workflow, document handling and scanning.',
        achievements: [
          'Implemented lending workflows and integrations',
          'Improved data consistency and performance in core modules'
        ],
        technologies: [
          'Java','Struts','JSP','Oracle DB','WebLogic','JDBC','SVN','JUnit'
        ]
      }
    ];
  }

  static async getById(id: string): Promise<Experience | null> {
    const experiences = await this.list();
    return experiences.find(experience => experience.id === id) || null;
  }
}
