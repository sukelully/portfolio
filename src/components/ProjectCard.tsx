export type ProjectCardProps = {
  name: string;
  description: string;
  imgSrc: string;
  imgAlt: string;
  imgSize?: string;
  siteLink?: string;
  githubLink: string;
  flexDir?: string;
};

function ProjectCard({
  name,
  description,
  imgSrc,
  imgAlt,
  imgSize,
  siteLink,
  githubLink,
  flexDir,
}: ProjectCardProps) {
  return (
    <div id="unwind-chimes" className="rounded-3xl bg-slate-300 p-8 shadow-xl dark:bg-slate-800">
      <h3 className="pb-6 text-center text-3xl font-bold sm:text-left sm:text-4xl">{name}</h3>
      <div className={`flex ${flexDir} items-center gap-8`}>
        <img src={imgSrc} className={imgSize ?? 'w-3/4'} alt={imgAlt} />
        <p className="text-lg">{description}</p>
      </div>
      <div id="links-container" className="flex flex-row flex-wrap justify-center gap-8 pt-6">
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
  );
}

export default ProjectCard;
