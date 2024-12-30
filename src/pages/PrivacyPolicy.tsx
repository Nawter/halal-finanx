import React from 'react';

function PrivacyPolicy() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Privacy Policy</h1>
      <p className="mb-4">
        At HalalFinanx Directory, we are committed to protecting your privacy and ensuring the security of your personal information. This Privacy Policy outlines how we collect, use, and safeguard your data when you use our website.
      </p>
      <h2 className="text-2xl font-semibold mb-4">Information We Collect</h2>
      <p className="mb-4">
        We may collect personal information such as your name and email address when you subscribe to our newsletter or contact us through our website.
      </p>
      <h2 className="text-2xl font-semibold mb-4">How We Use Your Information</h2>
      <p className="mb-4">
        We use the information we collect to provide and improve our services, communicate with you, and send you relevant updates and newsletters if you've subscribed.
      </p>
      <h2 className="text-2xl font-semibold mb-4">Data Security</h2>
      <p className="mb-4">
        We implement appropriate security measures to protect your personal information from unauthorized access, alteration, disclosure, or destruction.
      </p>
      <p className="mt-8 text-sm text-slate-500">
        Last updated: {new Date().toLocaleDateString()}
      </p>
    </div>
  );
}

export default PrivacyPolicy;