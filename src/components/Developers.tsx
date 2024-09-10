'use client'
import { AnimatedTooltip } from "./ui/animated-tooltip";
import { WavyBackground } from "./ui/wavy-background";
import jay from "../../public/jay.jpeg";

function Developers() {
  const instructors = [
    {
      id: 1,
      name: 'Jay Bhuptani',
      designation: 'Frontend Developer & APP DEVELOPER',
      image:
        "/JAY-2.jpeg",
    },
    {
      id: 2,
      name: 'Vidhan Prajapati',
      designation: 'Backend Developer & Database Manager',
      image:
        '/VDAN-2.jpeg',
    },
    {
      id: 3,
      name: 'Varun Jethani',
      designation: 'Frontend Developer & App Developer',
      image:
        '/despression.jpeg',
    },
    {
      id: 4,
      name: 'Nalini Agarwal',
      designation: 'Python Developer',
      image:
        '/NALINI.jpeg',
    },
    {
      id: 5,
      name: 'Devam Solanki',
      designation: 'Machine Learning & AI Developer',
      image:
        '/DEVAM.jpeg',
    },
    {
      id: 6,
      name: 'Annanya Bulchandani',
      designation: 'Machine Learning & AI Developer',
      image:
        '/ANNANYA.jpeg',
    },
  ];
  return <div className="relative h-[40rem] overflow-hidden flex items-center justify-center">
    <WavyBackground className="w-full max-w-7xl mx-auto flex flex-col items-center justify-center h-full">
            <h2 className="text-2xl md:text-4xl lg:text-7xl text-white font-bold text-center mb-8">Meet our TEAM</h2>
            
            <div className="flex flex-row items-center justify-center mb-20 w-full">
                <AnimatedTooltip items={instructors} />
            </div>
    </WavyBackground>
  </div>;
}

export default Developers;
