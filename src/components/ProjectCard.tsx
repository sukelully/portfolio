import { useState } from 'react';
import hueifyVid from '@/assets/hueify-demo.webm';

export type ProjectCardProps = {
  name: string;
  description: string;
  imgSrc: string;
  imgAlt: string;
  imgSize?: string;
  vidSrc?: string;
  siteLink?: string;
  githubLink: string;
  flexDir?: string;
  techStack: string[];
};

function ProjectCard({
  name,
  description,
  imgSrc,
  imgAlt,
  imgSize,
  vidSrc,
  siteLink,
  githubLink,
  flexDir,
  techStack,
}: ProjectCardProps) {
  const [isDemoVidOpen, setDemoVidOpen] = useState(false);

  function handleDemoVidBtnClick() {
    setDemoVidOpen((prev) => !prev);
  }

  return (
    <>
      <div
        id="project-container"
        className="rounded-3xl bg-slate-300 p-8 shadow-xl sm:px-12 dark:bg-slate-800"
      >
        <h3 className="pb-6 text-center text-3xl font-bold sm:text-left sm:text-4xl">{name}</h3>
        <div className={`flex ${flexDir} items-center gap-8`}>
          <img src={imgSrc} className={imgSize ?? 'w-3/4'} alt={imgAlt} />
          <p className="text-lg">{description}</p>
        </div>
        <div id="tech-stack" className="mt-6 flex flex-wrap justify-center gap-2 sm:px-18">
          {techStack.map((item) => (
            <span
              key={item}
              className="rounded-full bg-slate-200 px-3 py-1 text-sm font-medium text-slate-800 dark:bg-slate-700 dark:text-slate-200"
            >
              {item}
            </span>
          ))}
        </div>
        <div
          id="links-container"
          className="flex flex-row flex-wrap justify-center gap-2 pt-6 sm:gap-8"
        >
          {siteLink && (
            <a
              className="project-btn-link"
              href={siteLink}
              target="_blank"
              rel="noopener noreferrer"
              aria-labelledby="visitSite-unwindchimes"
            >
              <i className="fa-solid fa-arrow-up-right-from-square" aria-hidden="true"></i>
              <span id="visitSite-unwindchimes" className="pl-2">
                Visit Site
              </span>
            </a>
          )}
          {vidSrc && (
            <button className="project-btn-link cursor-pointer" onClick={handleDemoVidBtnClick}>
              <i className="fa-solid fa-circle-play"></i>
              <span className="pl-2">Demo Video</span>
            </button>
          )}
          <a
            className="project-btn-link"
            href={githubLink}
            target="_blank"
            rel="noopener noreferrer"
            aria-labelledby="githubLabel-unwindchimes"
          >
            <i className="fa-brands fa-github" aria-hidden="true"></i>
            <span id="githubLabel-unwindchimes" className="pl-2">
              Source Code
            </span>
          </a>
        </div>
      </div>
      {isDemoVidOpen && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/70"
          onClick={() => setDemoVidOpen(false)}
        >
          <div className="relative w-full max-w-3xl rounded-3xl shadow-xl">
            <button
              onClick={() => setDemoVidOpen(false)}
              className="absolute top-4 right-4 z-100 cursor-pointer text-2xl text-white"
              aria-label="Close demo video"
            >
              <div className="flex h-8 w-8 items-center justify-center rounded-full bg-black/70">
                <i className="fa-solid fa-xmark"></i>
              </div>
            </button>
            <video src={hueifyVid} controls className="w-full rounded-3xl"></video>
          </div>
        </div>
      )}
    </>
  );
}

export default ProjectCard;
