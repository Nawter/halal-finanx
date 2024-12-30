import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Search, TrendingUp, ExternalLink } from 'lucide-react';
import { Website } from '../types';
import websiteData from '../data/websites.json';

const websites: Website[] = websiteData;

const Home: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [showAll, setShowAll] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState('all');

  const filteredWebsites = websites.filter(website =>
    (selectedCategory === 'all' || website.category === selectedCategory) &&
    (website.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    website.description.toLowerCase().includes(searchTerm.toLowerCase()))
  );

  const displayedWebsites = showAll ? filteredWebsites : filteredWebsites.slice(0, 27);

  return (
    <div className="bg-slate-900 min-h-screen text-slate-100">
      <section className="text-center mb-16 pt-20">
        <h1 className="text-5xl font-bold mb-6">
          Your Guide to <span className="gradient-text">Halal Finance</span> and<br />
          Shariah-Compliant Investments
        </h1>
        <p className="text-xl mb-8 text-slate-300">Discover ethical and Islamic financial solutions with HalalFinanx, your comprehensive resource for halal investments and cryptocurrency.</p>
        
        {/* Category Filter */}
        <div className="flex justify-center gap-4 mb-8">
          <button 
            onClick={() => setSelectedCategory('all')}
            className={`px-4 py-2 rounded-full ${selectedCategory === 'all' ? 'bg-blue-600' : 'bg-slate-800'}`}
          >
            All
          </button>
          <button 
            onClick={() => setSelectedCategory('investment')}
            className={`px-4 py-2 rounded-full ${selectedCategory === 'investment' ? 'bg-blue-600' : 'bg-slate-800'}`}
          >
            Investment
          </button>
          <button 
            onClick={() => setSelectedCategory('banking')}
            className={`px-4 py-2 rounded-full ${selectedCategory === 'banking' ? 'bg-blue-600' : 'bg-slate-800'}`}
          >
            Banking
          </button>
          <button 
            onClick={() => setSelectedCategory('crypto')}
            className={`px-4 py-2 rounded-full ${selectedCategory === 'crypto' ? 'bg-blue-600' : 'bg-slate-800'}`}
          >
            Crypto
          </button>
          <button 
            onClick={() => setSelectedCategory('crowdfunding')}
            className={`px-4 py-2 rounded-full ${selectedCategory === 'crowdfunding' ? 'bg-blue-600' : 'bg-slate-800'}`}
          >
            Crowdfunding
          </button>
          <button 
            onClick={() => setSelectedCategory('other')}
            className={`px-4 py-2 rounded-full ${selectedCategory === 'other' ? 'bg-blue-600' : 'bg-slate-800'}`}
          >
            Others
          </button>
        </div>

        {/* Search Bar */}
        <div className="max-w-xl mx-auto relative">
          <input
            type="text"
            placeholder="Search halal finance platforms..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full py-3 px-4 rounded-full bg-slate-800 text-slate-100 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <Search className="absolute right-4 top-3 text-blue-500" />
        </div>
      </section>

      {/* Platforms Section */}
      <section className="max-w-6xl mx-auto px-4 pb-16">
        <h2 className="text-3xl font-bold mb-8 text-center text-slate-300">Explore Halal Investment & Crypto Platforms</h2>
        <p className="text-center mb-8 text-slate-400">Browse our curated list of Shariah-compliant financial platforms, offering everything from halal stocks and ETFs to Islamic cryptocurrencies and crowdfunding opportunities.</p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {displayedWebsites.map((website, index) => (
            <div key={index} className="bg-slate-800 rounded-lg p-6 shadow-lg hover:ring-2 hover:ring-blue-600 transition-all duration-300">
              <h3 className="text-xl font-semibold mb-2 text-slate-300">
                <Link to={`/website/${website.name.toLowerCase().replace(/\s+/g, '-')}`} className="hover:text-blue-400 transition-colors flex items-center">
                  {website.name}
                  <ExternalLink className="ml-2" size={16} />
                </Link>
              </h3>
              <p className="text-slate-400 mb-4">{website.description}</p>
              <div className="flex items-center justify-between">
                <span className="text-blue-400 flex items-center">
                  <TrendingUp className="mr-1" size={16} />
                  Alexa Rank: {website.alexaRank ? website.alexaRank.toLocaleString() : 'N/A'}
                </span>
                <a href={website.url} target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:text-blue-300 transition-colors">
                  Visit Site
                </a>
              </div>
            </div>
          ))}
        </div>
        {!showAll && filteredWebsites.length > 27 && (
          <div className="text-center mt-8">
            <button
              onClick={() => setShowAll(true)}
              className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full transition-colors duration-300"
            >
              Show All Halal Finance Platforms
            </button>
          </div>
        )}
      </section>

      {/* Subscribe Section */}
      <section className="bg-slate-900 py-16">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Stay Updated</h2>
          <p className="text-xl mb-8">Get the latest updates on halal finance and investment opportunities.</p>
          <form className="max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full px-4 py-2 rounded-lg bg-slate-800 text-white mb-4"
            />
            <button className="bg-blue-600 text-white px-8 py-2 rounded-lg hover:bg-blue-700 transition-colors">
              Subscribe
            </button>
          </form>
        </div>
      </section>

      {/* Submit Section */}
      <section className="bg-slate-900 py-16">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-8">Add Your Halal Platform</h2>
          <p className="text-xl text-center mb-8">Get quick exposure to thousands of users who find halal platforms in #1 halal finance directory in the world</p>
          <form className="space-y-6">
            <div className="grid grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium mb-2">Email Address</label>
                <input type="email" placeholder="your@email.com" className="w-full px-4 py-2 rounded-lg bg-slate-800" />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">Platform URL</label>
                <input type="url" placeholder="https://your-platform.com" className="w-full px-4 py-2 rounded-lg bg-slate-800" />
              </div>
            </div>
            <div>
              <label className="block text-sm font-medium mb-2">Category</label>
              <select className="w-full px-4 py-2 rounded-lg bg-slate-800">
                <option>Select...</option>
                <option>Investment</option>
                <option>Banking</option>
                <option>Crypto</option>
                <option>Crowdfunding</option>
                <option>Other</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium mb-2">Demo Video URL</label>
              <input type="url" placeholder="YouTube or Twitter link" className="w-full px-4 py-2 rounded-lg bg-slate-800" />
            </div>
            <div>
              <label className="block text-sm font-medium mb-2">Twitter Handle</label>
              <input type="text" placeholder="@username" className="w-full px-4 py-2 rounded-lg bg-slate-800" />
            </div>
            <div className="text-center">
              <button className="bg-blue-600 text-white px-8 py-2 rounded-lg hover:bg-blue-700 transition-colors">
                Submit
              </button>
            </div>
          </form>
        </div>
      </section>

      {/* Why Section */}
      <section className="bg-blue-600 py-16">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-8">Why I Built HalalFinanx</h2>
          <div className="text-center mb-8">
            <p className="text-xl mb-4">Hey there, I'm Zaid Alissa.</p>
            <p className="text-xl mb-4">I've spent my life working in building startups</p>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="bg-slate-900 py-16">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-8">Got questions? We've got answers.</h2>
          <div className="space-y-4">
            <details className="bg-slate-800 rounded-lg p-6">
              <summary className="text-xl font-semibold cursor-pointer">What is HalalFinanx Directory?</summary>
              <p className="mt-4">HalalFinanx Directory is a comprehensive listing of Shariah-compliant financial platforms, helping Muslims find ethical investment and banking solutions.</p>
            </details>
            <details className="bg-slate-800 rounded-lg p-6">
              <summary className="text-xl font-semibold cursor-pointer">How can I use HalalFinanx for my investments?</summary>
              <p className="mt-4">You can browse through our curated list of halal investment platforms, compare their features, and choose the ones that best suit your financial goals.</p>
            </details>
            <details className="bg-slate-800 rounded-lg p-6">
              <summary className="text-xl font-semibold cursor-pointer">Are the listings in the directory free to use?</summary>
              <p className="mt-4">Yes, accessing and browsing the HalalFinanx directory is completely free for all users.</p>
            </details>
            <details className="bg-slate-800 rounded-lg p-6">
              <summary className="text-xl font-semibold cursor-pointer">How can I submit my platform to the directory?</summary>
              <p className="mt-4">You can submit your halal finance platform using our submission form above. We'll review your submission and add it to our directory if it meets our criteria.</p>
            </details>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;