"use client";
import React, { useState } from 'react';
import CourseCard from '@/components/About/CourseCard';
import { Video, Users, Star, Bookmark, Code, BarChart, FileSpreadsheet, Paintbrush, Coffee, Book } from 'lucide-react';

interface Course {
  id: number;
  title: string;
  category: string;
  videos: number;
  students: number;
  rating: number;
  description: string;
  image: string;
  icon: React.ReactNode;
}

const AboutSectionTwo = () => {
  // Categories for the filter buttons
  const categories = [
    "Digital Marketing",
    "Data Science & Data Analysis",
    "Microsoft Excel, Word and PowerPoint",
    "UI-UX Research and Design",
  ];

  // Default selected category
  const [selectedCategory, setSelectedCategory] = useState("Digital Marketing");

  // Course data - expanded with 5 courses per category
  const courses: Course[] = [
    // Digital Marketing Courses
    {
      id: 1,
      title: "Copywriting Introduction",
      category: "Digital Marketing",
      videos: 5,
      students: 7603,
      rating: 4.7,
      description: "Learn the fundamentals of copywriting to create compelling content that converts. This course covers headline writing, persuasive techniques, and writing for different platforms.",
      image: "/api/placeholder/400/320",
      icon: <Bookmark className="w-10 h-10 text-blue-500" />
    },
    {
      id: 2,
      title: "SEO Fundamentals",
      category: "Digital Marketing",
      videos: 9,
      students: 5980,
      rating: 4.8,
      description: "Master the basics of Search Engine Optimization to improve your website's visibility. Topics include keyword research, on-page SEO, link building strategies, and performance tracking.",
      image: "/api/placeholder/400/320",
      icon: <BarChart className="w-10 h-10 text-green-500" />
    },
    {
      id: 3,
      title: "Marketing Introduction",
      category: "Digital Marketing",
      videos: 5,
      students: 54894,
      rating: 4.8,
      description: "A comprehensive introduction to marketing principles and strategies. Covers market research, segmentation, positioning, and the marketing mix components.",
      image: "/api/placeholder/400/320",
      icon: <BarChart className="w-10 h-10 text-red-500" />
    },
    {
      id: 4,
      title: "Marketing Funnel",
      category: "Digital Marketing",
      videos: 3,
      students: 3776,
      rating: 4.5,
      description: "Understand the customer journey from awareness to conversion. Learn how to build effective marketing funnels, optimize each stage, and implement retention strategies.",
      image: "/api/placeholder/400/320",
      icon: <FileSpreadsheet className="w-10 h-10 text-yellow-500" />
    },
    {
      id: 5,
      title: "Social Media Marketing",
      category: "Digital Marketing",
      videos: 7,
      students: 8925,
      rating: 4.6,
      description: "Learn how to build effective social media marketing strategies across multiple platforms. This course covers content creation, community management, and social analytics.",
      image: "/api/placeholder/400/320",
      icon: <Bookmark className="w-10 h-10 text-indigo-500" />
    },
    
    // Data Science Courses
    {
      id: 6,
      title: "Introduction to Google Analytics",
      category: "Data Science & Data Analysis",
      videos: 4,
      students: 1455,
      rating: 4.3,
      description: "Get started with Google Analytics to track and analyze website traffic. Learn how to set up accounts, understand key metrics, create custom reports, and make data-driven decisions.",
      image: "/api/placeholder/400/320",
      icon: <Code className="w-10 h-10 text-purple-500" />
    },
    {
      id: 7,
      title: "SQL for Data Analysis",
      category: "Data Science & Data Analysis",
      videos: 8,
      students: 3245,
      rating: 4.7,
      description: "Master SQL queries for data analysis and reporting. Learn how to extract, filter, and aggregate data from databases to gain valuable business insights.",
      image: "/api/placeholder/400/320",
      icon: <FileSpreadsheet className="w-10 h-10 text-blue-700" />
    },
    {
      id: 8,
      title: "Data Visualization with Python",
      category: "Data Science & Data Analysis",
      videos: 12,
      students: 2876,
      rating: 4.6,
      description: "Learn how to create effective data visualizations using Python libraries like Matplotlib, Seaborn, and Plotly. Transform complex data into clear, compelling visual stories.",
      image: "/api/placeholder/400/320",
      icon: <BarChart className="w-10 h-10 text-teal-500" />
    },
    {
      id: 9,
      title: "Machine Learning Fundamentals",
      category: "Data Science & Data Analysis",
      videos: 15,
      students: 4532,
      rating: 4.8,
      description: "An introduction to machine learning concepts and algorithms. Learn about supervised and unsupervised learning, model evaluation, and practical applications.",
      image: "/api/placeholder/400/320",
      icon: <Code className="w-10 h-10 text-orange-500" />
    },
    {
      id: 10,
      title: "Statistical Analysis Basics",
      category: "Data Science & Data Analysis",
      videos: 6,
      students: 1987,
      rating: 4.4,
      description: "Learn essential statistical concepts for data analysis including probability, distributions, hypothesis testing, and regression analysis.",
      image: "/api/placeholder/400/320",
      icon: <FileSpreadsheet className="w-10 h-10 text-purple-700" />
    },
    
    // Microsoft Excel Courses
    {
      id: 11,
      title: "Excel Basics for Beginners",
      category: "Microsoft Excel, Word and PowerPoint",
      videos: 10,
      students: 12453,
      rating: 4.9,
      description: "Start your Excel journey with this beginner-friendly course. Learn about spreadsheet basics, formulas, formatting, and simple data analysis techniques.",
      image: "/api/placeholder/400/320",
      icon: <FileSpreadsheet className="w-10 h-10 text-green-700" />
    },
    {
      id: 12,
      title: "Advanced Excel Formulas",
      category: "Microsoft Excel, Word and PowerPoint",
      videos: 8,
      students: 7824,
      rating: 4.7,
      description: "Take your Excel skills to the next level with advanced formulas and functions. Learn VLOOKUP, INDEX-MATCH, conditional functions, and more.",
      image: "/api/placeholder/400/320",
      icon: <FileSpreadsheet className="w-10 h-10 text-blue-500" />
    },
    {
      id: 13,
      title: "Professional PowerPoint Presentations",
      category: "Microsoft Excel, Word and PowerPoint",
      videos: 7,
      students: 5629,
      rating: 4.6,
      description: "Learn how to create stunning, professional PowerPoint presentations. Covers slide design, animations, transitions, and effective presentation techniques.",
      image: "/api/placeholder/400/320",
      icon: <Paintbrush className="w-10 h-10 text-red-600" />
    },
    {
      id: 14,
      title: "Word for Business Documents",
      category: "Microsoft Excel, Word and PowerPoint",
      videos: 6,
      students: 4231,
      rating: 4.5,
      description: "Create professional business documents using Microsoft Word. Learn about formatting, styles, templates, tables, and collaborative editing features.",
      image: "/api/placeholder/400/320",
      icon: <Book className="w-10 h-10 text-indigo-600" />
    },
    {
      id: 15,
      title: "Excel Data Analysis and Dashboards",
      category: "Microsoft Excel, Word and PowerPoint",
      videos: 9,
      students: 6547,
      rating: 4.8,
      description: "Build interactive Excel dashboards and perform data analysis. Learn about PivotTables, charts, slicers, and data visualization techniques.",
      image: "/api/placeholder/400/320",
      icon: <BarChart className="w-10 h-10 text-emerald-600" />
    },
    
    // UI-UX Courses
    {
      id: 16,
      title: "UX Research Fundamentals",
      category: "UI-UX Research and Design",
      videos: 8,
      students: 3762,
      rating: 4.7,
      description: "Learn essential UX research methods to understand user needs. Covers user interviews, usability testing, surveys, and translating research into design insights.",
      image: "/api/placeholder/400/320",
      icon: <Users className="w-10 h-10 text-purple-600" />
    },
    {
      id: 17,
      title: "UI Design Principles",
      category: "UI-UX Research and Design",
      videos: 10,
      students: 5843,
      rating: 4.8,
      description: "Master the fundamentals of UI design including layout, typography, color theory, visual hierarchy, and creating consistent design systems.",
      image: "/api/placeholder/400/320",
      icon: <Paintbrush className="w-10 h-10 text-pink-500" />
    },
    {
      id: 18,
      title: "Figma for UI Designers",
      category: "UI-UX Research and Design",
      videos: 12,
      students: 7921,
      rating: 4.9,
      description: "Learn how to use Figma to create beautiful user interfaces. Covers tools, components, prototyping, collaboration features, and design workflows.",
      image: "/api/placeholder/400/320",
      icon: <Paintbrush className="w-10 h-10 text-blue-600" />
    },
    {
      id: 19,
      title: "Mobile App UX Design",
      category: "UI-UX Research and Design",
      videos: 9,
      students: 4532,
      rating: 4.6,
      description: "Design intuitive mobile app experiences following best practices. Learn about mobile patterns, navigation, gestures, and platform-specific guidelines.",
      image: "/api/placeholder/400/320",
      icon: <Bookmark className="w-10 h-10 text-orange-500" />
    },
    {
      id: 20,
      title: "Design Systems Workshop",
      category: "UI-UX Research and Design",
      videos: 7,
      students: 3245,
      rating: 4.7,
      description: "Learn how to create and maintain effective design systems. Covers component libraries, design tokens, documentation, and implementation strategies.",
      image: "/api/placeholder/400/320",
      icon: <Code className="w-10 h-10 text-teal-600" />
    },

  ];

  // Filter courses based on selected category
  const filteredCourses = courses.filter(course => course.category === selectedCategory);

  return (
    <div className="max-w-6xl mx-auto px-4 py-3 -mt-8" data-aos="fade-up"
     data-aos-anchor-placement="top-bottom">
      <h1 className="text-2xl font-bold text-center mb-2">Ratusan Skill Impian Kini Dalam Genggamanmu</h1>
      <p className="text-center mb-6">Lihat contoh beberapa materi terpopuler rancangan experts berikut. Materi baru setiap bulan tanpa tambahan biaya.</p>
      
      {/* Category buttons */}
      <div className="flex flex-wrap gap-2 mb-8 justify-center">
        {categories.map((category) => (
          <button
            key={category}
            onClick={() => setSelectedCategory(category)}
            className={`px-4 py-2 rounded-full text-sm ${
              selectedCategory === category
                ? "bg-teal-500 text-white"
                : "bg-gray-100 text-gray-700 hover:bg-gray-200"
            } transition-colors duration-200`}
          >
            {category}
          </button>
        ))}
      </div>
      
      {/* Course grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
        {filteredCourses.map((course) => (
          <CourseCard key={course.id} course={course} />
        ))}
      </div>
    </div>
  );
};

export default AboutSectionTwo;