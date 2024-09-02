"use client";
import React from "react";
import { StickyScroll } from "./ui/sticky-scroll-reveal";

const webDevSchoolContent = [
  {
    title: "Build Your Future with Us: Master Web Development",
    description:
      "Embark on a journey to become a web development expert. Our personalized instruction adapts to your needs, providing the skills and confidence to build amazing web applications. From novice to pro, we support your growth every step of the way.",
  },
  {
    title: "Interactive Learning Experience",
    description:
      "Engage with real-world projects and receive instant feedback. Our hands-on approach allows you to learn by doing, simulating the real-time dynamics of a collaborative work environment in web development.",
  },
  {
    title: "Stay Ahead with the Latest Tech",
    description:
      "Our curriculum is continuously updated to include the latest in web technologies, frameworks, and tools. From HTML5 to React, Node.js, and beyond, you'll always be learning what's relevant in the industry.",
  },
  {
    title: "Unlimited Learning Resources",
    description:
      "Access an extensive library of resources, including video tutorials, coding challenges, and project templates. No matter where you are in your journey, our resources are designed to help you keep learning and growing.",
  },
  {
    title: "Expert Mentors and Community Support",
    description:
      "Learn from industry professionals who are passionate about teaching and mentoring. Our vibrant community of developers provides support, collaboration opportunities, and a network of like-minded peers.",
  },
  // {
  //   title: "Career-Oriented Learning Path",
  //   description:
  //     "Our courses are designed with your career in mind. From building a solid portfolio to preparing for job interviews, we equip you with the skills and confidence to land your dream job in tech.",
  // },
];

function WhyChooseUs() {
  return <StickyScroll content={webDevSchoolContent} />;
}

export default WhyChooseUs;
