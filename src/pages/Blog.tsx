import React from 'react';
import Navigation from '@/components/Navigation';

const Blog: React.FC = () => {
  return (
    <>
      <Navigation />
      <main className="max-w-3xl mx-auto py-16 px-4">
        <h1 className="text-4xl font-bold mb-6 text-gray-900">Blog</h1>
        <p className="text-lg text-gray-700">Welcome to our blog! Stay tuned for updates and articles.</p>
      </main>
    </>
  );
};

export default Blog; 