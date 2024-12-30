import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { ExternalLink, TrendingUp } from 'lucide-react';
import { Website } from '../types';

interface WebsiteDetailProps {
  websites: Website[];
}

function WebsiteDetail({ websites }: WebsiteDetailProps) {
  const { id } = useParams<{ id: string }>();
  
  // Updated website finding logic to handle different variations of the name
  const website = websites.find(w => {
    const normalizedId = id?.toLowerCase();
    const normalizedName = w.name.toLowerCase().replace(/\s+/g, '-');
    const alternativeSlug = w.name.toLowerCase()
      .replace(/\s+/g, '')
      .replace(/[^a-z0-9-]/g, '');
    
    return normalizedName === normalizedId || alternativeSlug === normalizedId;
  });

  if (!website) {
    return (
      <div className="max-w-4xl mx-auto px-4 py-8">
        <div className="bg-slate-800 rounded-lg p-8 text-center">
          <h1 className="text-3xl font-bold mb-4 text-slate-200">Platform Not Found</h1>
          <p className="text-slate-300 mb-6">
            Sorry, we couldn't find the platform you're looking for. It may have been removed or the URL might be incorrect.
          </p>
          <Link 
            to="/" 
            className="inline-block bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors"
          >
            Return to Directory
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-4 text-blue-400">{website.name}</h1>
      <div className="bg-slate-800 rounded-lg p-6 mb-8 shadow-lg">
        <p className="text-lg mb-4 text-slate-300">{website.description}</p>
        <div className="prose prose-invert mb-4">
          <p className="text-slate-300">{website.longDescription}</p>
        </div>
        <div className="flex items-center justify-between mt-6 pt-6 border-t border-slate-700">
          <span className="text-blue-400 flex items-center">
            <TrendingUp className="mr-1" size={16} />
            Alexa Rank: {website.alexaRank ? website.alexaRank.toLocaleString() : 'N/A'}
          </span>
          <a 
            href={website.url} 
            target="_blank" 
            rel="noopener noreferrer" 
            className="inline-flex items-center bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors"
          >
            Visit Website
            <ExternalLink className="ml-2" size={16} />
          </a>
        </div>
      </div>
      <Link 
        to="/" 
        className="inline-flex items-center text-blue-400 hover:text-blue-300 transition-colors"
      >
        &larr; Back to Directory
      </Link>
    </div>
  );
}

export default WebsiteDetail;