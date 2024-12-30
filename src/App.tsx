import React from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import Blog from './pages/Blog';
import BlogPost1 from './pages/BlogPost1';
import BlogPost2 from './pages/BlogPost2';
import BlogPost3 from './pages/BlogPost3';
import BlogPost4 from './pages/BlogPost4';
import BlogPost5 from './pages/BlogPost5';
import BlogPost6 from './pages/BlogPost6';
import BlogPost7 from './pages/BlogPost7';
import BlogPost8 from './pages/BlogPost8';
import BlogPost9 from './pages/BlogPost9';
import BlogPost10 from './pages/BlogPost10';
import Contact from './pages/Contact';
import PrivacyPolicy from './pages/PrivacyPolicy';
import TermsOfService from './pages/TermsOfService';
import About from './pages/About';
import WebsiteDetail from './pages/WebsiteDetail';
import StructuredData from './components/StructuredData';
import { Website } from './types';
import websiteData from './data/websites.json';

const websites: Website[] = websiteData;

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-slate-900 text-slate-100">
        <StructuredData 
          type="WebSite"
          name="HalalFinanx"
          description="Discover Shariah-compliant investment and cryptocurrency platforms with HalalFinanx, your comprehensive guide to halal financial solutions."
          url="https://halalfinanx.com"
        />
        <Header />
        <main className="container mx-auto px-4 py-16">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/blog/1" element={<BlogPost1 />} />
            <Route path="/blog/2" element={<BlogPost2 />} />
            <Route path="/blog/3" element={<BlogPost3 />} />
            <Route path="/blog/4" element={<BlogPost4 />} />
            <Route path="/blog/5" element={<BlogPost5 />} />
            <Route path="/blog/6" element={<BlogPost6 />} />
            <Route path="/blog/7" element={<BlogPost7 />} />
            <Route path="/blog/8" element={<BlogPost8 />} />
            <Route path="/blog/9" element={<BlogPost9 />} />
            <Route path="/blog/10" element={<BlogPost10 />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/privacy-policy" element={<PrivacyPolicy />} />
            <Route path="/terms-of-service" element={<TermsOfService />} />
            <Route path="/about" element={<About />} />
            <Route path="/website/:id" element={<WebsiteDetail websites={websites} />} />
            {/* Redirect unknown routes to home */}
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;