import type { ProjectCardProps } from '@/components/ProjectCard';
import unwindChimesImg from '@/images/unwind-chimes.webp';
import voiceBoxImg from '@/images/voicebox.webp';

export const projects: ProjectCardProps[] = [
  {
    name: 'VoiceBox',
    description:
      "Built for freeCodeCamp's 2025 Summer Hackathon, VoiceBox is an anonymous suggestion box for workplaces, communities, and schools. It enables open feedback while giving admins an efficient way to review and respond. Built with Next.js 14 (App Router), NextAuth.js for Google authentication, and MongoDB + Prisma for data management, it uses GitHub Actions to lint, build, and test code on every push, ensuring production-ready deployments.",
    imgSrc: voiceBoxImg,
    imgAlt: 'Screenshot of VoiceBox app',
    githubLink: 'https://github.com/freeCodeCamp-2025-Summer-Hackathon/VoiceBox',
    flexDir: 'flex-col',
    techStack: ['Next.js', 'MongoDB', 'Prisma', 'React', 'NextAuth.js', 'GitHub Actions (CI)'],
  },
  {
    name: 'Unwind Chimes',
    description:
      'Unwind Chimes transforms real-world weather data from your location or a randomly chosen city into dynamic, immersive soundscapes. Built with React and TypeScript, it harnesses the Web Audio API to synthesise audio directly in the browser, mapping weather conditions to synthesis and effects parameters to create a unique ambient experience that reflects the world’s climate in sound.',
    imgSrc: unwindChimesImg,
    imgAlt: 'Screenshot of Unwind Chimes app',
    imgSize: 'w-1/2',
    siteLink: 'https://unwind-chimes.vercel.app',
    githubLink: 'https://github.com/sukelully/unwind-chimes',
    flexDir: 'sm:flex-row flex-col',
    techStack: [
      'React',
      'TypeScript',
      'Tailwind CSS',
      'Web Audio API',
      'Canvas API',
      'GitHub Actions (CI)',
    ],
  },
];

export const techStack: string[] = [
  'TypeScript',
  'JavaScript',
  'React',
  'Tailwind CSS',
  'Node.js',
  'HTML/CSS',
  'Next.js',
  'Express.js',
  'Python',
  'MongoDB',
  'Prisma',
  'PostgreSQL',
];
