import React from 'react';

interface StructuredDataProps {
  type: string;
  name: string;
  description: string;
  url: string;
}

const StructuredData: React.FC<StructuredDataProps> = ({ type, name, description, url }) => {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": type,
    "name": name,
    "description": description,
    "url": url
  };

  return (
    <script type="application/ld+json">
      {JSON.stringify(structuredData)}
    </script>
  );
};

export default StructuredData;