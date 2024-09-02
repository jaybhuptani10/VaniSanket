'use client'
import Link from "next/link";
import { HoverEffect } from "./ui/card-hover-effect";

function UpcomingWebinars() {
  const featuredWebinars = [
    {
      title: 'JavaScript for Beginners',
      description:
        'Get started with JavaScript and understand the basics of programming for the web.',
      slug: 'javascript-for-beginners',
      isFeatured: true,
    },
    {
      title: 'Building Responsive Websites',
      description:
        'Learn the essentials of creating responsive web designs that work on any device.',
      slug: 'building-responsive-websites',
      isFeatured: true,
    },
    {
      title: 'Mastering React',
      description:
        'Dive deep into React, one of the most popular libraries for building user interfaces.',
      slug: 'mastering-react',
      isFeatured: true,
    },
    {
      title: 'Introduction to Web Accessibility',
      description:
        'Understand the importance of accessibility and how to make your websites accessible to all.',
      slug: 'introduction-to-web-accessibility',
      isFeatured: true,
    },
    {
      title: 'Backend Development with Node.js',
      description:
        'Learn the fundamentals of backend development using Node.js and Express.',
      slug: 'backend-development-with-nodejs',
      isFeatured: true,
    },
    {
      title: 'SEO Best Practices',
      description:
        'Optimize your websites for search engines and improve your online visibility.',
      slug: 'seo-best-practices',
      isFeatured: true,
    },
  ];

  return (
    <div className="p-12 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="text-center">
          <h2 className="text-base text-teal-600 font-semibold tracking-wide uppercase">Featured Webinars</h2>
          <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-white sm:text-4xl">
            Enhance Your Web Development Skills
          </p>
        </div>
        <div className="mt-10">
          <HoverEffect
            items={featuredWebinars.map((webinar) => ({
              title: webinar.title,
              description: webinar.description,
              link: webinar.slug,
            }))}
          />
        </div>
        <div className="mt-10 text-center">
          <Link href={"/webinars"}>
            <button className="px-8 py-2 rounded-md bg-teal-500 text-white font-bold transition duration-200 hover:bg-white hover:text-black border-2 border-transparent hover:border-teal-500">
              View All Webinars
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default UpcomingWebinars;
