import React from 'react';
import { Link } from 'react-router-dom';
import { Calendar, Clock } from 'lucide-react';
import { useSEO } from '../hooks/useSEO';

const blogPosts = [
  {
    title: "Understanding Halal vs Haram in Islamic Finance",
    excerpt: "Explore the fundamental concepts of halal (permissible) and haram (forbidden) in Islamic finance and how they shape investment decisions for Muslims.",
    imageUrl: "https://images.unsplash.com/photo-1559526324-4b87b5e36e44?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1200&q=80",
    id: 1,
    date: "2024-03-15",
    readTime: "5 min read"
  },
  {
    title: "The Concept of Money Purification in Islam",
    excerpt: "Delve into the Islamic principle of purifying wealth and how it applies to modern financial practices, ensuring ethical and spiritually sound monetary transactions.",
    imageUrl: "https://images.unsplash.com/photo-1621981386829-9b458a2cddde?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1200&q=80",
    id: 2,
    date: "2024-03-10",
    readTime: "6 min read"
  },
  {
    title: "Zakat: The Third Pillar of Islam and Its Financial Implications",
    excerpt: "Learn about Zakat, the obligatory charity in Islam, its calculation methods, and its role in wealth redistribution and social welfare in Muslim communities.",
    imageUrl: "https://images.unsplash.com/photo-1532629345422-7515f3d16bb6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1200&q=80",
    id: 3,
    date: "2024-03-05",
    readTime: "7 min read"
  },
  {
    title: "Islamic Banking: A Comprehensive Guide",
    excerpt: "Discover the principles and practices of Islamic banking, and how it differs from conventional banking systems.",
    imageUrl: "https://images.unsplash.com/photo-1541354329998-f4d9a9f9297f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1200&q=80",
    id: 4,
    date: "2024-02-28",
    readTime: "8 min read"
  },
  {
    title: "Sukuk: Understanding Islamic Bonds",
    excerpt: "Explore the world of Sukuk, often referred to as Islamic bonds, and their role in Islamic finance.",
    imageUrl: "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1200&q=80",
    id: 5,
    date: "2024-02-20",
    readTime: "6 min read"
  },
  {
    title: "The Rise of Islamic Fintech",
    excerpt: "Learn about the intersection of Islamic finance and technology, and how it's reshaping the financial landscape for Muslims.",
    imageUrl: "https://images.unsplash.com/photo-1526628953301-3e589a6a8b74?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1200&q=80",
    id: 6,
    date: "2024-02-15",
    readTime: "7 min read"
  },
  {
    title: "Ethical Investing: The Islamic Perspective",
    excerpt: "Understand how Islamic principles align with modern ethical investing practices and ESG criteria.",
    imageUrl: "https://images.unsplash.com/photo-1579532536935-619928decd08?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1200&q=80",
    id: 7,
    date: "2024-02-10",
    readTime: "6 min read"
  },
  {
    title: "Islamic Microfinance: Empowering Communities",
    excerpt: "Explore how Islamic microfinance is making a difference in Muslim communities and promoting financial inclusion.",
    imageUrl: "https://images.unsplash.com/photo-1532619675605-1ede6c2ed2b0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1200&q=80",
    id: 8,
    date: "2024-02-05",
    readTime: "5 min read"
  },
  {
    title: "Risk Management in Islamic Finance",
    excerpt: "Understand the unique challenges and approaches to risk management in Islamic financial institutions.",
    imageUrl: "https://images.unsplash.com/photo-1494200483035-db7bc6aa5739?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1200&q=80",
    id: 9,
    date: "2024-01-30",
    readTime: "7 min read"
  },
  {
    title: "Islamic Estate Planning: Protecting Your Legacy",
    excerpt: "Learn about the importance of Islamic estate planning and how to ensure your wealth is distributed according to Shariah principles.",
    imageUrl: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1200&q=80",
    id: 10,
    date: "2024-01-25",
    readTime: "6 min read"
  }
];

function Blog() {
  useSEO({
    title: "Halal Finance Blog | HalalFinanx",
    description: "Explore our blog for insights on halal finance, Shariah-compliant investments, and Islamic cryptocurrency. Stay informed about ethical financial practices."
  });

  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-8 text-center text-blue-400">Halal Finance Blog</h1>
      <div className="space-y-12">
        {blogPosts.map((post) => (
          <div key={post.id} className="bg-slate-800 rounded-lg overflow-hidden shadow-lg">
            <img src={post.imageUrl} alt={`Halal finance topic: ${post.title}`} className="w-full h-64 object-cover" />
            <div className="p-6">
              <div className="flex items-center text-sm text-slate-400 mb-2">
                <Calendar size={16} className="mr-2" />
                <span>{post.date}</span>
                <Clock size={16} className="ml-4 mr-2" />
                <span>{post.readTime}</span>
              </div>
              <Link to={`/blog/${post.id}`} className="block mb-2">
                <h2 className="text-2xl font-semibold text-blue-400 hover:text-blue-300 transition-colors">{post.title}</h2>
              </Link>
              <p className="text-slate-300 mb-4">{post.excerpt}</p>
              <Link to={`/blog/${post.id}`} className="inline-block bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition-colors">
                Read More About Halal Finance
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Blog;