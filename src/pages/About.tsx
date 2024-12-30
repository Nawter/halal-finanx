import React from 'react';
import { useSEO } from '../hooks/useSEO';

function About() {
  useSEO({
    title: "About Halal Finance | HalalFinanx",
    description: "Learn about HalalFinanx, your trusted guide to Shariah-compliant investments and halal finance solutions. Discover ethical ways to grow your wealth."
  });

  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">About HalalFinanx: Your Guide to Halal Finance</h1>
      <p className="mb-4">
        Welcome to HalalFinanx, your comprehensive guide to Shariah-compliant investments and halal finance solutions. Our mission is to empower Muslim investors with knowledge and resources to make informed financial decisions that align with Islamic principles.
      </p>
      <h2 className="text-2xl font-semibold mb-4">Understanding Halal Finance</h2>
      <p className="mb-4">
        Halal finance refers to financial practices and investments that comply with Islamic law (Shariah). At HalalFinanx, we curate an extensive list of halal investment opportunities, from traditional Islamic banking products to cutting-edge cryptocurrency solutions.
      </p>
      <h2 className="text-2xl font-semibold mb-4">Our Commitment to Ethical Investing</h2>
      <p className="mb-4">
        Our team of experts carefully vets each platform listed in our directory, ensuring they adhere to Islamic financial principles such as:
      </p>
      <ul className="list-disc list-inside mb-4 ml-4">
        <li>Prohibition of interest (riba)</li>
        <li>Avoidance of excessive uncertainty (gharar)</li>
        <li>Exclusion of forbidden industries (haram)</li>
        <li>Emphasis on ethical and socially responsible investments</li>
      </ul>
      <h2 className="text-2xl font-semibold mb-4">Halal Finance Resources We Offer</h2>
      <p className="mb-4">
        HalalFinanx provides:
      </p>
      <ul className="list-disc list-inside mb-4 ml-4">
        <li>Comprehensive listings of Shariah-compliant investment platforms</li>
        <li>Detailed information on halal finance products and services</li>
        <li>Educational resources on Islamic finance principles</li>
        <li>Regular updates on new halal investment opportunities</li>
        <li>Insights into the latest trends in Islamic fintech</li>
      </ul>
      <p className="mb-4">
        Whether you're a seasoned investor or just starting your halal finance journey, HalalFinanx provides valuable insights, educational resources, and a community of like-minded individuals committed to growing wealth in a halal manner.
      </p>
      <h2 className="text-2xl font-semibold mb-4">Our Vision for Halal Finance</h2>
      <p className="mb-4">
        We envision a world where Muslim investors have easy access to a wide range of Shariah-compliant investment options, enabling them to grow their wealth while staying true to their values. HalalFinanx aims to be at the forefront of this movement, continually expanding our directory and resources to meet the evolving needs of the global Muslim community.
      </p>
      <p>
        Join us in our mission to promote financial inclusion and empower the global Muslim community through ethical, Shariah-compliant investments. Together, we can build a more prosperous and principled financial future through halal finance.
      </p>
    </div>
  );
}

export default About;