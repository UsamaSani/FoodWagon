import React from 'react';
import { Link } from 'react-router-dom';

const blogPosts = [
  {
    title: 'Exploring the Future of Food Delivery',
    excerpt: 'The future of food delivery is here, and it’s more exciting than ever...',
    date: 'December 7, 2024',
    image: 'https://via.placeholder.com/400',
    link: '/blog/exploring-future-food-delivery'
  },
  {
    title: 'Why You Should Start a Blog in 2024',
    excerpt: 'Blogging is still one of the best ways to share your ideas, stories, and knowledge...',
    date: 'December 5, 2024',
    image: 'https://via.placeholder.com/400',
    link: '/blog/start-a-blog-2024'
  },
  {
    title: 'The Rise of AI in the Culinary World',
    excerpt: 'AI technology is transforming the culinary world, from automated kitchens to personalized menu recommendations...',
    date: 'November 30, 2024',
    image: 'https://via.placeholder.com/400',
    link: '/blog/ai-culinary-world'
  },
];

function Blog() {
  return (
    <section className="bg-gray-100 py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12 text-gray-800">Latest Blog Posts</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {blogPosts.map((post) => (
            <div key={post.title} className="bg-white shadow-lg rounded-lg overflow-hidden group hover:shadow-xl transition duration-300">
              <img
                src={post.image}
                alt={post.title}
                className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
              />
              <div className="p-6">
                <h3 className="text-2xl font-semibold text-gray-800 group-hover:text-orange-500 transition duration-300">
                  <Link to={post.link}>{post.title}</Link>
                </h3>
                <p className="text-gray-600 mt-2">{post.excerpt}</p>
                <p className="text-sm text-gray-500 mt-4">{post.date}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Blog;
