import { Code, Server, Database, Globe, GitBranch, Cpu } from 'lucide-react';

export const skillCategories = [
  {
    id: 'languages',
    title: 'Languages',
    icon: Code,
    skills: ['Java', 'Python', 'JavaScript', 'TypeScript', 'HTML', 'CSS']
  },
  {
    id: 'frontend',
    title: 'Frontend',
    icon: Globe,
    skills: ['React', 'Angular', 'Flutter', 'Bootstrap 5']
  },
  {
    id: 'backend',
    title: 'Backend',
    icon: Server,
    skills: ['Spring Boot', 'Node.js', 'Django', 'Flask']
  },
  {
    id: 'database',
    title: 'Database',
    icon: Database,
    skills: ['SQL', 'MongoDB', 'Firebase']
  },
  {
    id: 'devops',
    title: 'DevOps',
    icon: GitBranch,
    skills: ['Docker', 'Jenkins', 'GitHub Actions', 'Git']
  },
  {
    id: 'ai-ml',
    title: 'AI & ML',
    icon: Cpu,
    skills: ['Machine Learning', 'AI Implementation', 'API Integration']
  }
];