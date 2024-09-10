'use client'

import React from "react";
import { InfiniteMovingCards } from "./ui/infinite-moving-cards";

function TestimonialCards() {
  const webDevTestimonials = [
    {
      quote:
        'The tech stack, including React Native, TensorFlow, and Firebase, enables seamless ISL translation from audio-visual content using Google Speech-to-Text and Amazon Polly.',
      name: 'Atman Mehta',
      title: 'FEASIBILITY',
      
    },
    {
      quote:
        "Collaborating with institutions for data, using TensorFlow for gesture recognition, and Google Speech-to-Text will ensure accurate, real-time processing, while continuous testing and feedback enhance usability.",
      name: 'Stavan Mehta',
      title: 'VIABILITY',
    },
    {
      quote:
        "Real-time translation between spoken languages and Indian Sign Language fosters smoother, more inclusive interactions. It empowers the deaf and hard-of-hearing community and provides a valuable tool for learning and teaching ISL, promoting societal integration.",
      name: 'Krishna Soni',
      title: 'IMPACT',
    },
    {
      quote:
        'Enhancing inclusivity, this fosters communication for the deaf and hard-of-hearing, creating job opportunities and educational access. It promotes economic growth, while reducing reliance on physical resources, encouraging a more sustainable, digital communication approach.',
      name: 'Jagdish Khandewal',
      title: 'Benefits',
    },
    {
      quote:'Ensuring high accuracy in machine learning for recognizing subtle ISL gestures and facial expressions involves overcoming real-time translation challenges due to complex hand movements, and addressing diverse regional variations in Indian Sign Language.',
      name:"",
      title:"Problems Faced"
    },
    {
      quote:'Utilize pre-trained TensorFlow models, fine-tuning with specialized ISL datasets from expert collaboration. Apply data augmentation for improved gesture recognition across ISL variations, and conduct user feedback sessions and real-world testing to refine the model.',
      name:"",
      title:"Solutions"
    }
    
  ];

  return (
    <div className="h-[40rem] w-full bg-purple-600 bg-grid-white/[0.2] relative flex flex-col items-center justify-center overflow-hidden">
      <h2 className="text-3xl font-bold text-center mb-8 z-10">
        About the Project
      </h2>
      <div className="flex justify-center w-full overflow-hidden px-4 sm:px-6 lg:px-8">
        <div className="w-96 sm:w-full max-w-6xl ">
          <InfiniteMovingCards items={webDevTestimonials} direction="right" speed="slow" />
        </div>
      </div>
    </div>
  );
}

export default TestimonialCards;
