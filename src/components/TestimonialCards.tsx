'use client'

import React from "react";
import { InfiniteMovingCards } from "./ui/infinite-moving-cards";

function TestimonialCards() {
  const webDevTestimonials = [
    {
      quote:
        'Joining this web development course was a game-changer for my career. The instructors are industry experts, and the projects prepared me for real-world challenges.',
      name: 'Atman Mehta',
      title: 'Full-Stack Developer',
      
    },
    {
      quote:
        "The supportive community and hands-on approach helped me transition from a beginner to building my own applications. The learning experience here is unparalleled.",
      name: 'Stavan Mehta',
      title: 'Frontend Developer',
    },
    {
      quote:
        "This course boosted my confidence to build responsive, modern websites. The mentorship was invaluable, and I landed my first job just weeks after completing the program.",
      name: 'Krishna Soni',
      title: 'React Developer',
    },
    {
      quote:
        'Finding the right resources can be tough, but this course provided me with everything I needed. The curriculum is up-to-date with the latest industry standards.',
      name: 'Jagdish Khandewal',
      title: 'Junior Web Developer',
    },
    {
      quote:
        'The focus on both technical skills and soft skills here was a standout. I feel prepared for any interview, and the portfolio I built during the course speaks for itself!',
      name: 'Kirtan Chauhan',
      title: 'Backend Developer',
    },
  ];

  return (
    <div className="h-[40rem] w-full bg-purple-600 bg-grid-white/[0.2] relative flex flex-col items-center justify-center overflow-hidden">
      <h2 className="text-3xl font-bold text-center mb-8 z-10">
        Hear from Our Successful Students
      </h2>
      <div className="flex justify-center w-full overflow-hidden px-4 sm:px-6 lg:px-8">
        <div className="w-full max-w-6xl">
          <InfiniteMovingCards items={webDevTestimonials} direction="right" speed="slow" />
        </div>
      </div>
    </div>
  );
}

export default TestimonialCards;
