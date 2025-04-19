import React from 'react';
import { Code, Server, Globe, Cpu, Smartphone } from 'lucide-react';

// Categories with icons
export const categories = [
  { id: 'all', name: 'All Projects', icon: <Globe /> },
  { id: 'java', name: 'Java', icon: <Code /> },
  { id: 'ai-ml', name: 'AI & ML', icon: <Cpu /> },
  { id: 'python', name: 'Python', icon: <Server /> },
  { id: 'web', name: 'Web Dev', icon: <Globe /> },
  { id: 'mobile', name: 'Mobile Apps', icon: <Smartphone /> },
];

// Project data
export const projectsData = [
  {
    id: 1,
    title: 'Warehouse Management System',
    description: 'A comprehensive Java application to manage inventory, track products, and optimize warehouse operations.',
    categories: ['java'],
    tags: ['Java', 'MySQL', 'JDBC', 'Swing'],
    github: 'https://github.com/Roffin7/CoE_JavaFSD/tree/main/TechM_Tasks/src/WareHouse',
    links: []
  },
  {
    id: 2,
    title: 'Fee Report Software',
    description: 'Java-based solution for educational institutions to manage student fee collection, dues, and reporting.',
    categories: ['java'],
    tags: ['Java', 'SQL', 'Reporting', 'User Management'],
    github: 'https://github.com/Roffin7/CoE_JavaFSD/tree/main/TechM_Tasks/src/Fee_Report_Software',
    links: []
  },
  {
    id: 3,
    title: 'Meeting Room Booking System',
    description: 'Interactive system for scheduling and managing meeting room reservations in corporate environments.',
    categories: ['java'],
    tags: ['Java', 'Spring', 'MySQL', 'RESTful API'],
    github: 'https://github.com/Roffin7/CoE_JavaFSD/tree/main/TechM_Tasks/src/MeetingRoomBookingSystem',
    links: []
  },
  {
    id: 4,
    title: 'CommuniSense',
    description: 'AI-powered public speaking evaluator that analyzes video recordings to provide feedback on vocal delivery and body language.',
    categories: ['ai-ml', 'python'],
    tags: ['Flask', 'TensorFlow', 'OpenCV', 'WebRTC'],
    github: 'https://github.com/Roffin7/CommuniSense',
    links: []
  },
  {
    id: 5,
    title: 'House Price Prediction',
    description: 'Machine learning model to predict property prices based on features like location, size, and amenities.',
    categories: ['ai-ml'],
    tags: ['Python', 'Scikit-learn', 'Pandas', 'Data Visualization'],
    github: 'https://github.com/Roffin7/House_Price_Prediction',
    links: []
  },
  {
    id: 6,
    title: 'Diabetes Classification',
    description: 'AI model that identifies diabetes risk factors and provides early detection through classification algorithms.',
    categories: ['ai-ml'],
    tags: ['Python', 'ML Classification', 'Medical AI', 'Data Analysis'],
    github: 'https://github.com/Roffin7/Diabetes_Classification_Problem',
    links: []
  },
  {
    id: 7,
    title: 'Diamond Price Prediction',
    description: 'ML model that accurately predicts diamond prices based on the 4Cs and other critical factors.',
    categories: ['ai-ml'],
    tags: ['Python', 'Regression', 'Data Mining', 'Visualization'],
    github: 'https://github.com/Roffin7/Gemstone',
    links: []
  },
  {
    id: 8,
    title: 'Web Scraping Tools',
    description: 'Collection of Python scripts for extracting and analyzing data from various websites.',
    categories: ['python'],
    tags: ['Python', 'BeautifulSoup', 'Requests', 'Data Processing'],
    github: 'https://github.com/Roffin7/Webscrapping',
    links: []
  },
  {
    id: 9,
    title: 'Event Management System',
    description: 'Flask-based web application for organizing and managing events, registrations, and attendees.',
    categories: ['python', 'web'],
    tags: ['Flask', 'MySQL', 'Bootstrap', 'REST API'],
    github: 'https://github.com/Roffin7/Event_Management',
    links: []
  },
  {
    id: 10,
    title: 'Mystic Vault - Anime Explorer',
    description: 'Web platform for anime enthusiasts to discover new titles, maintain watchlists, and engage in discussions.',
    categories: ['web'],
    tags: ['Angular', 'TypeScript', 'Firebase', 'RESTful API'],
    github: 'https://github.com/Roffin7/AnimeExplorer',
    links: []
  },
  {
    id: 11,
    title: 'NutriScan',
    description: 'Mobile app for tracking nutritional information with real-time data from API Ninjas.',
    categories: ['mobile'],
    tags: ['Flutter', 'Dart', 'Firebase', 'API Integration'],
    github: 'https://github.com/Roffin7/NutriScan',
    links: []
  },
  {
    id: 12,
    title: 'E-commerce Product Catalog',
    description: 'React-based shopping platform with product listings, cart functionality, and order management.',
    categories: ['web'],
    tags: ['React', 'Context API', 'Tailwind CSS', 'React Router'],
    github: 'https://github.com/Roffin7/CoE_JavaFSD/tree/main/TechM_Tasks/src/ecommerce-app',
    links: []
  }
];