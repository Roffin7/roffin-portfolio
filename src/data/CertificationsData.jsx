import React from 'react';

// Certification data with priority order
// 1. Internships (highest priority)
// 2. Important professional certificates
// 3. Other certificates

export const certificationCategories = [
  { id: 'all', name: 'All Certificates' },
  { id: 'internship', name: 'Internships' },
  { id: 'ai', name: 'AI & ML' },
  { id: 'cloud', name: 'Cloud Computing' },
  { id: 'data', name: 'Data Science' },
  { id: 'programming', name: 'Programming' },
  { id: 'development', name: 'Development' },
  { id: 'database', name: 'Databases' }
];

export const certificationData = [
  // Internships (Highest Priority)
  {
    id: 7,
    name: "Event Management System Internship 5.0 (B2)",
    issuer: "Infosys | Springboard",
    date: "Oct - Dec 2024",
    category: "internship",
    pdfLink: "assets/pdf/Infosys_Internship.pdf",
    imgSrc: "assets/images/Infosys_Internship_img.jpg",
    priority: 1
  },
  {
    id: 9,
    name: "Graduate Rotational Internship Program",
    issuer: "The Sparks Foundation",
    date: "May - Jun 2023",
    category: "internship",
    pdfLink: "assets/pdf/Spark_Internship.pdf",
    imgSrc: "assets/images/Sparks_Internship.png",
    priority: 1
  },
  
  // Important Professional Certificates
  {
    id: 5,
    name: "Oracle Cloud Infrastructure 2024 Generative AI",
    issuer: "Oracle",
    date: "2024",
    category: "ai",
    pdfLink: "assets/pdf/GenAI.pdf",
    imgSrc: "assets/images/GenAI.jpg",
    priority: 2
  },
  {
    id: 2,
    name: "Azure Fundamentals - Ambassador Challenge",
    issuer: "Microsoft",
    date: "2023",
    category: "cloud",
    pdfLink: "assets/pdf/Attendee_cert.pdf",
    imgSrc: "assets/images/Attendee_cert.jpg",
    priority: 2
  },
  {
    id: 6,
    name: "Cloud Digital Leader Track",
    issuer: "Google Cloud Career Readiness",
    date: "2023",
    category: "cloud",
    pdfLink: "assets/pdf/Google Cloud Career Readiness Certificate - 63hG2hZD - ROFFIN JASON N.pdf",
    imgSrc: "assets/images/GCR.jpg",
    priority: 2
  },
  {
    id: 10,
    name: "MLOps Foundations",
    issuer: "iNeuron",
    date: "Feb 2024",
    category: "ai",
    pdfLink: "assets/pdf/MLOPS_Foundation.pdf",
    imgSrc: "assets/images/MLOPS_Foundation.jpg",
    priority: 2
  },
  {
    id: 13,
    name: "Digital Skills Readiness Program (Java Full Stack)",
    issuer: "Wipro TalentNext",
    date: "2023",
    category: "programming",
    pdfLink: "assets/pdf/Wipro TalentNext  Java Full Stack Certification.pdf",
    imgSrc: "assets/images/Wipro_TalentNext_Java_Full_Stack.jpg",
    priority: 2
  },
  
  // Other Certificates
  {
    id: 1,
    name: "Artificial Intelligence for Real-World Application",
    issuer: "TCSion",
    date: "2023",
    category: "ai",
    pdfLink: "assets/pdf/AI.pdf",
    imgSrc: "assets/images/AI_TCS.jpg",
    priority: 3
  },
  {
    id: 4,
    name: "Data Science for Beginners",
    issuer: "NASSCOM",
    date: "2023",
    category: "data",
    pdfLink: "assets/pdf/DS_Nasscom.pdf",
    imgSrc: "assets/images/DS_Nasscom.jpg",
    priority: 3
  },
  {
    id: 8,
    name: "International Workshop - Data Science using Python",
    issuer: "Certificate of Participation",
    date: "2024",
    category: "data",
    pdfLink: "assets/pdf/International Student Workshop 2024 on Data Science using Python by Brainovision.pdf",
    imgSrc: "assets/images/International_Student_Workshop_2024.jpg",
    priority: 3
  },
  {
    id: 11,
    name: "Programming In Java",
    issuer: "NPTEL",
    date: "2023",
    category: "programming",
    pdfLink: "assets/pdf/Programming_Java.pdf",
    imgSrc: "assets/images/Programming_Java.jpg",
    priority: 3
  },
  {
    id: 12,
    name: "Programming In Python",
    issuer: "NPTEL",
    date: "2023",
    category: "programming",
    pdfLink: "assets/pdf/The Joy Of Computing Using Python.pdf",
    imgSrc: "assets/images/Python_NPTEL.jpg",
    priority: 3
  },
  {
    id: 3,
    name: "Introduction to C",
    issuer: "SoloLearn",
    date: "2022",
    category: "programming",
    pdfLink: "assets/pdf/C_language.pdf",
    imgSrc: "assets/images/C_language.jpg",
    priority: 3
  },
  {
    id: 14,
    name: "Introduction to NoSQL Databases",
    issuer: "Infosys (Springboard)",
    date: "2024",
    category: "database",
    pdfLink: "assets/pdf/No_sql.pdf",
    imgSrc: "assets/images/No_sql.jpg",
    priority: 3
  },
  {
    id: 15,
    name: "Software Engineering and Agile Development",
    issuer: "Infosys (Springboard)",
    date: "2024",
    category: "development",
    pdfLink: "assets/pdf/SE.pdf",
    imgSrc: "assets/images/SE.jpg",
    priority: 3
  }
];