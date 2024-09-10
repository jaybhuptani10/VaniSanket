'use client'
import Link from "next/link";
import { HoverEffect } from "./ui/card-hover-effect";

function UpcomingWebinars() {
  const featuredWebinars = [
    {
      title: 'Jay Bhuptani',
      description:
        'Front-End Development, App Development, AR Development, and more.',
      slug: 'Jay Bhuptani',
      isFeatured: true,
    },
    {
      title: 'Varun Jethani',
      description:
        'Front-End Development, App Development, AR Development, and more.',
      slug: 'building-responsive-websites',
      isFeatured: true,
    },
    {
      title: 'Vidhan Prajapti',
      description:
        'Backend Development, Database Management, and more.',
      slug: 'mastering-react',
      isFeatured: true,
    },
    {
      title: 'Annanya Bulchandani',
      description:
        'Machine Learning, AI, and more.',
      slug: 'introduction-to-web-accessibility',
      isFeatured: true,
    },
    {
      title: 'Devam Solanki',
      description:
        'Machine Learning, AI, and more.',
      slug: 'backend-development-with-nodejs',
      isFeatured: true,
    },
    {
      title: 'Nalini Agarwal',
      description:
        'Libraries integration, and more.',
      slug: 'seo-best-practices',
      isFeatured: true,
    },
  ];

  return (
    <div className="p-12 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="text-center">
          <h2 className="text-base text-teal-600 font-semibold tracking-wide uppercase">Developers</h2>
          <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-white sm:text-4xl">
            Know our Developers
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
