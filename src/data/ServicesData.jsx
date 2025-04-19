import { Code, Server, Globe, Cpu, Smartphone, Rocket } from 'lucide-react';

export const services = [
  {
    id: 1,
    title: 'Web Development',
    description: 'Building responsive, modern websites and web applications using React, Angular, and other contemporary frameworks.',
    icon: Globe,
    color: '#4f9de9',
    skills: ['React', 'Angular', 'Tailwind CSS', 'Responsive Design']
  },
  {
    id: 2,
    title: 'Java Applications',
    description: 'Custom Java solutions for business needs, from management systems to desktop software.',
    icon: Code,
    color: '#ff6b35',
    skills: ['Java', 'Spring', 'SQL', 'Swing']
  },
  {
    id: 3,
    title: 'AI & Machine Learning',
    description: 'Implement intelligent features and data-driven insights through machine learning algorithms.',
    icon: Cpu,
    color: '#64d2ff',
    skills: ['Python', 'TensorFlow', 'Scikit-learn', 'Data Analysis']
  },
  {
    id: 4,
    title: 'Backend Development',
    description: 'Robust server-side applications and APIs that provide the backbone for digital solutions.',
    icon: Server,
    color: '#3e7dff',
    skills: ['Python', 'Flask', 'RESTful APIs', 'Database Design']
  },
  {
    id: 5,
    title: 'Mobile Apps',
    description: 'Cross-platform mobile experiences that work seamlessly on both iOS and Android devices.',
    icon: Smartphone,
    color: '#7c4dff',
    skills: ['Flutter', 'Dart', 'Firebase', 'Responsive UI']
  },
  {
    id: 6,
    title: 'Academic Projects',
    description: 'Technical assistance for educational and learning purposes, perfect for startups and students.',
    icon: Rocket,
    color: '#ff8e3c',
    skills: ['Documentation', 'Research', 'Implementation', 'Testing']
  }
];