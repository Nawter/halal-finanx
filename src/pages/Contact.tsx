import React, { useState } from 'react';

function Contact() {
  const [email, setEmail] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Subscribed:', email);
    setEmail('');
    alert('Thank you for subscribing!');
  };

  return (
    <section className="mb-16">
      <h2 className="text-3xl font-bold mb-8 text-center">Contact Us</h2>
      <div className="max-w-2xl mx-auto bg-slate-800 rounded-lg p-8">
        <p className="text-slate-300 mb-6">
          Have questions or suggestions? We'd love to hear from you! Fill out the form below to get in touch or subscribe to our newsletter.
        </p>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-slate-300 mb-1">Name</label>
            <input
              type="text"
              id="name"
              name="name"
              className="w-full py-2 px-3 bg-slate-700 rounded-md text-slate-100 focus:outline-none focus:ring-2 focus:ring-blue-400"
              required
            />
          </div>
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-slate-300 mb-1">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full py-2 px-3 bg-slate-700 rounded-md text-slate-100 focus:outline-none focus:ring-2 focus:ring-blue-400"
              required
            />
          </div>
          <div>
            <label htmlFor="message" className="block text-sm font-medium text-slate-300 mb-1">Message</label>
            <textarea
              id="message"
              name="message"
              rows={4}
              className="w-full py-2 px-3 bg-slate-700 rounded-md text-slate-100 focus:outline-none focus:ring-2 focus:ring-blue-400"
              required
            ></textarea>
          </div>
          <div>
            <button type="submit" className="btn-primary w-full">
              Send Message
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}

export default Contact;