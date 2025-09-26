import type { ProjectCardProps } from '@/components/ProjectCard';
import unwindChimesImg from '@/assets/unwind-chimes.webp';
import voiceBoxImg from '@/assets/voicebox.webp';
import hueifyImg from '@/assets/hueify.webp';
import hueifyVid from '@/assets/hueify-demo.webm';

export const projects: ProjectCardProps[] = [
  {
    name: 'Hueify',
    description:
      "Hueify is a web app that sorts Spotify playlists by the dominant color of each track's album artwork. The app authenticates with the Spotify Web API and stores session and account data securely on a PostgreSQL database hosted on Supabase. After granting read-write access, users can choose a playlist to sort and fine-tune the color extraction of each track before saving it to their Spotify account. A GitHub Actions CI workflow builds, lints and tests pull requests to ensure clean merges.",
    imgSrc: hueifyImg,
    imgAlt: 'The playlist sorting interface of Hueify',
    imgSize: 'sm:w-3/4',
    vidSrc: hueifyVid,
    githubLink: 'https://github.com/sukelully/hueify',
    siteLink: 'https://hueify.vercel.app',
    flexDir: 'flex-col',
    techStack: [
      'Next.js',
      'PostgreSQL',
      'TypeScript',
      'Prisma',
      'React',
      'Better Auth',
      'Supabase',
      'Github Actions (CI)',
    ],
  },
  {
    name: 'VoiceBox',
    description:
      "Built for freeCodeCamp's 2025 Summer Hackathon, VoiceBox is an anonymous online suggestion box for workplaces, communities, and schools. The app enables open feedback while giving admins an efficient way to review and respond. VoiceBox was built with Next.js 14, NextAuth.js for Google authentication, and MongoDB + Prisma for data management. It also uses a GitHub Actions CI workflow to build, lint and test pull requests.",
    imgSrc: voiceBoxImg,
    imgAlt: 'Screenshot of VoiceBox app',
    imgSize: 'sm:w-3/4',
    githubLink: 'https://github.com/freeCodeCamp-2025-Summer-Hackathon/VoiceBox',
    flexDir: 'flex-col',
    techStack: ['Next.js', 'MongoDB', 'Prisma', 'React', 'NextAuth.js', 'GitHub Actions (CI)'],
  },
  {
    name: 'Unwind Chimes',
    description:
      "A fun spin on a classic weather app, Unwind Chimes is a wind chime simulator! The app maps global or local weather data to audio synthesis and effects parameters to create a uniquely ambient experience that refelects the world's climate in sound.",
    imgSrc: unwindChimesImg,
    imgAlt: 'Screenshot of Unwind Chimes app',
    imgSize: 'w-72 max-w-full md:w-80',
    siteLink: 'https://unwind-chimes.vercel.app',
    githubLink: 'https://github.com/sukelully/unwind-chimes',
    flexDir: 'sm:flex-row flex-col',
    techStack: [
      'React',
      'TypeScript',
      'Node.js',
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
  'Python',
  'React',
  'HTML/CSS',
  'Tailwind CSS',
  'Node.js',
  'Next.js',
  'Express.js',
  'MongoDB',
  'Prisma',
  'PostgreSQL',
];
