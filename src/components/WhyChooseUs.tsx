"use client";
import React from "react";
import { StickyScroll } from "./ui/sticky-scroll-reveal";

const webDevSchoolContent = [
  {
    title: "Front-End Development",
    description:
      "NextJs, React,React Native, HTML, CSS, JavaScript, TypeScript, and more. ",
  },
  {
    title: "Back-End Development",
    description:
      "Node.js with Express, Python with Flask/Django",
  },
  {
    title: "Database",
    description:
      "Firebase Realtime Database",
  },
  {
    title: "Augmented Reality",
    description:
      "ARCore (Android) / ARKit (iOS) Unity with Vuforia",
  },
  {
    title: "QR Code Scanning",
    description:
      "ZXing/QR Code Scanner",
  },
  {
    title: "Libraries",
    description:
      "Ffmpeg, Google Speech-to-Text API, Google Text-to-Speech, TensorFlow/Keras, OpenCV, MediaPipe/ Yolov7,",
  },
  
  
];

function WhyChooseUs() {
  return <StickyScroll content={webDevSchoolContent} />;
}

export default WhyChooseUs;
