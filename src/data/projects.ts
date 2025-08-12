import type { ProjectCardProps } from '@/components/ProjectCard';
import unwindChimesImg from '@/images/unwind-chimes.webp';
import voiceBoxImg from '@/images/voicebox.webp';

export const projects: ProjectCardProps[] = [
  {
    name: 'VoiceBox',
    description:
      "Built for freeCodeCamp's 2025 Summer Hackathon, VoiceBox is a secure, anonymous suggestion box designed for workplaces, communities, and schools. It encourages open communication by allowing anyone to submit feedback anonymously, while giving admins an efficient way to review and respond. Built with Next.js 14 (App Router), it uses NextAuth.js for Google authentication and MongoDB + Prisma for managing suggestion box data.",
    imgSrc: voiceBoxImg,
    imgAlt: 'Screenshot of VoiceBox app',
    githubLink: 'https://github.com/freeCodeCamp-2025-Summer-Hackathon/VoiceBox',
    flexDir: 'flex-col',
    techStack: ['Next.js', 'MongoDB', 'Prisma', 'React', 'NextAuth.js'],
  },
  {
    name: 'Unwind Chimes',
    description:
      "Unwind Chimes transforms real-world weather data from your location or a randomly chosen city into evolving, immersive soundscapes. Built with React and TypeScript, it harnesses the Web Audio API to synthesise audio directly in the browser. Real-time weather conditions are mapped to synthesis and effects parameters, producing a unique ambient experience that reflects the world's climate in sound.",
    imgSrc: unwindChimesImg,
    imgAlt: 'Screenshot of Unwind Chimes app',
    imgSize: 'w-1/2',
    siteLink: 'https://unwind-chimes.vercel.app',
    githubLink: 'https://github.com/sukelully/unwind-chimes',
    flexDir: 'sm:flex-row flex-col',
    techStack: ['React', 'TypeScript', 'Tailwind CSS', 'Web Audio API', 'Canvas API'],
  },
];

export const techStack: string[] = [
  'TypeScript',
  'JavaScript',
  'React',
  'Tailwind CSS',
  'Node.js',
  'Next.js',
  'HTML/CSS',
  'Python',
  'MongoDB',
  'Prisma',
  'PostgreSQL',
];
