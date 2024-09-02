'use client'
import { AnimatedTooltip } from "./ui/animated-tooltip";
import { WavyBackground } from "./ui/wavy-background";
import jay from "../../public/jay.jpeg";

function Developers() {
  const instructors = [
    {
      id: 1,
      name: 'Jay Bhuptani',
      designation: 'Full Stack Coach',
      image:
        "/jay.jpeg",
    },
    {
      id: 2,
      name: 'Vidhan Prajapati',
      designation: 'Backend Developer',
      image:
        '/vdan.jpeg',
    },
    {
      id: 3,
      name: 'Varun Jethani',
      designation: 'React Developer',
      image:
        '/despression.jpeg',
    },
    {
      id: 4,
      name: 'Kirtan Chauhan',
      designation: 'Frontend Developer',
      image:
        '/zomato.jpeg',
    },
  ];
  return <div className="relative h-[40rem] overflow-hidden flex items-center justify-center">
    <WavyBackground className="w-full max-w-7xl mx-auto flex flex-col items-center justify-center h-full">
            <h2 className="text-2xl md:text-4xl lg:text-7xl text-white font-bold text-center mb-8">Meet our Developers</h2>
            <p className="text-base md:text-lg text-white text-center mb-4">Discover the talented professionals who will guide your journey</p>
            <div className="flex flex-row items-center justify-center mb-10 w-full">
                <AnimatedTooltip items={instructors} />
            </div>
    </WavyBackground>
  </div>;
}

export default Developers;
