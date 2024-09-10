'use client'
import Link from "next/link";
import courseData from "../data/web_dev_courses.json"; // Updated to use the new web development courses data

import { BackgroundGradient } from "./ui/background-gradient";

interface Course {
  id: number;
  title: string;
  slug: string;
  description: string;
  price: number;
  instructor: string;
  isFeatured: boolean;
  image: string;
}

function FeaturedCourses() {
  const featuredCourses = courseData.courses.filter((course: Course) => course.isFeatured);

  return (
    <div className="py-12 bg-gray-900">
      <div>
        <div className="text-center">
          <h2 className="text-base text-teal-600 font-semibold tracking-wide">Proposed Solution</h2>
          <p className="mt-2 text-3xl leading-8 font-extrabold sm:text-2xl tracking-tight text-white">
          Breaking Barriers: Seamless Communication Between Indian Sign Language and Text/Audio
          </p>
        </div>
      </div>
      <div className="mt-10">
        <div className="grid grid-cols-1 px-5 sm:px-10 sm:grid-cols-2 lg:grid-cols-3 gap-8 justify-center">
          {featuredCourses.map((course: Course) => (
            <div key={course.id} className="flex justify-center">
              <BackgroundGradient className="flex flex-col rounded-[22px] bg-zinc-900 h-full max-w-sm overflow-hidden">
                <div className="p-4 sm:p-6 flex flex-col items-center text-center flex-grow">
                  <img
                    src={course.image}
                    alt={course.title}
                    className="w-full h-40 object-cover rounded-md object-top"
                  />
                  <p className="text-lg sm:text-xl text-neutral-200 mb-2 mt-4">{course.title}</p>
                  <p className="text-sm text-neutral-400 flex-grow">{course.description}</p>
                  <Link href={`/`} className="text-teal-500 hover:underline mt-4">
                    Learn more
                  </Link>
                </div>
              </BackgroundGradient>
            </div>
          ))}
        </div>
      </div>
      <div className="mt-20 text-center">
        <Link href={"/"}>
          <button className="px-8 py-2 rounded-md bg-teal-500 text-white font-bold transition duration-200 hover:bg-white hover:text-black border-2 border-transparent hover:border-teal-500">
            More Info
          </button>
        </Link>
      </div>
    </div>
  );
}

export default FeaturedCourses;
