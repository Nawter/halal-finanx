import { useEffect } from 'react';

interface SEOProps {
  title: string;
  description: string;
}

export const useSEO = ({ title, description }: SEOProps) => {
  useEffect(() => {
    document.title = `${title} | HalalFinanx`;
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', description);
    }
  }, [title, description]);
};