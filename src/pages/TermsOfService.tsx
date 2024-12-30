import React from 'react';

function TermsOfService() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Terms of Service</h1>
      <p className="mb-4">
        Welcome to HalalInvest Directory. By using our website, you agree to comply with and be bound by the following terms and conditions of use.
      </p>
      <h2 className="text-2xl font-semibold mb-4">Use of Content</h2>
      <p className="mb-4">
        The content on this website is for informational purposes only. You may not reproduce, distribute, or transmit any content without our prior written permission.
      </p>
      <h2 className="text-2xl font-semibold mb-4">Disclaimer</h2>
      <p className="mb-4">
        The information provided on this website does not constitute financial advice. Always conduct your own research and consult with a qualified financial advisor before making any investment decisions.
      </p>
      <h2 className="text-2xl font-semibold mb-4">User Responsibilities</h2>
      <p className="mb-4">
        You are responsible for ensuring that your use of our website complies with applicable laws and regulations. You agree not to use our website for any unlawful or prohibited purpose.
      </p>
      <p className="mt-8 text-sm text-slate-500">
        Last updated: {new Date().toLocaleDateString()}
      </p>
    </div>
  );
}

export default TermsOfService;